import BoughtItems from "../Model/BoughtItems.js";
import Cart from "../Model/Cart.js";
import Users from "../Model/Users.js";
import Wines from "../Model/Wines.js";

const CartService = {
  getCart: async (user_id) => {
    const userCart = await Cart.findOne({user_id}).populate({
      path: "items.wine_id",
    });
    if (userCart) {
      if(userCart.items.length > 0){
        return { userCart };
      }else{
        return {message:"Cart Was Empty",userCart}
      }
    } else {
      return { message: "Cart Not Found" };
    }
  },
  getBoughtItems: async (user_id) => {

    const userBoughtItems = await BoughtItems.findOne({user_id}).populate({
      path: "boughtItems.wine_id",
    });
    if (userBoughtItems) {
      return { userBoughtItems };
    } else {
      return { message: "BoughtItems Not Found" };
    }
  },
  addToCart: async (user_id, wine_id) => {
    const [user, wine] = await Promise.all([
      Users.findById(user_id),
      Wines.findById(wine_id),
    ]);

    if (user && wine) {
      const userCart = await Cart.findOne({ user_id })


      if (userCart) {

        const findItem = userCart.items.find(
          (el) => String(el.wine_id) === String(wine_id)
        );
        if (findItem) {
          userCart.items.map((el) => {
            if (String(el.wine_id) === String(wine_id)) {
              el.count = el.count + 1;
              el.wineTotalPrice = el.wineTotalPrice + wine.price;
              userCart.totalCount = userCart.totalCount + 1;
              userCart.totalPrice = userCart.totalPrice + wine.price;
            }
          });

          await userCart.save();

          return { message: "Wine Was Added In Cart"}
        } else {
          userCart.items.push({
            wine_id,
            wineTotalPrice: wine.price,
          });
          userCart.totalCount = userCart.totalCount + 1;
          userCart.totalPrice = userCart.totalPrice + wine.price;

          await userCart.save();
          const populatedCart = userCart.populate({
            path: "items.wine_id",
          })

          return { message: "Wine Was Added In Cart" };
        }
      } else {
        const newUserCart = new Cart({
          user_id,
          items: [{ wine_id, wineTotalPrice: wine.price }],
          totalPrice: wine.price,
        });

        user.cartId = newUserCart._id;

        await Promise.all([newUserCart.save(), user.save()]);


        return { message: "Cart Was Created and Wines Was Added in Cart"};
      }
    } else {
      return { message: "Invalid Token or Wine ID" };
    }
  },
  checkout: async (user_id) => {
    const user = await Users.findById(user_id);

    if (user) {
      const userCart = await Cart.findOne({ user_id })

      if (userCart && userCart.items.length > 0) {
        const userBoughtItems = await BoughtItems.findOne({user_id})
        if (userBoughtItems) {
          const itemsExist = [];
          userCart.items.map((el) => {
            userBoughtItems.boughtItems.map((item) => {
              if (String(el.wine_id) === String(item.wine_id)) {
                itemsExist.push(item);
              }
            });
          });

          if (itemsExist.length > 0) {
            userCart.items.map((el) => {

              const findItem =  userBoughtItems.boughtItems.find((item)=>String(item.wine_id) === String(el.wine_id) )

              if(findItem){
                userBoughtItems.boughtItems.map((item) => {
                  if(String(findItem._id) === String(item._id)){
                    item.count = item.count + el.count;

                  userBoughtItems.totalCount =
                    userBoughtItems.totalCount + el.count;
                  userBoughtItems.totalSpent =
                    userBoughtItems.totalSpent + el.wineTotalPrice
                  }
                })
              }else{
                userBoughtItems.boughtItems.push({
                  wine_id: el.wine_id,
                  count: el.count
                })
                userBoughtItems.totalCount =
                  userBoughtItems.totalCount + el.count;
                userBoughtItems.totalSpent =
                  userBoughtItems.totalSpent + el.wineTotalPrice
              }
            });
            userCart.totalPrice = 0;
            userCart.totalCount = 0
            userCart.items = [];
            await Promise.all([userBoughtItems.save(), userCart.save()])

            return {message: "All Items In Cart Were Bought"}
          } else {
            userBoughtItems.boughtItems.push(...userCart.items);
            userBoughtItems.totalCount =
              userBoughtItems.totalCount + userCart.totalCount;
            userBoughtItems.totalSpent =
              userBoughtItems.totalSpent + userCart.totalPrice;

            userCart.items = [];
            userCart.totalCount = 0;
            userCart.totalPrice = 0;

            await Promise.all([userBoughtItems.save(), userCart.save()]);
            return { message: "Wines Were Bought "};
          }
        } else {
          const newUserBoughtItems = new BoughtItems({
            user_id,
            boughtItems: userCart.items,
            totalSpent: userCart.totalPrice,
            totalCount: userCart.totalCount,
          })

          user.boughtItemsId = newUserBoughtItems._id;

          userCart.items = [];
          userCart.totalCount = 0;
          userCart.totalPrice = 0;

          await Promise.all([
            newUserBoughtItems.save(),
            user.save(),
            userCart.save(),
          ]);

          return {
            message: "User Bought Was Created and Wines Were Bought " };
        }
      } else {
        return { message: "User Dont Have a Cart or Cart is Empty" };
      }
    } else {
      return { message: "Invalid Token" };
    }
  },
  changeCount: async (user_id,cartItemId,count,changeType) => {
    const userCart = await Cart.findOne({user_id})

    if(userCart){
        const findItem = userCart.items.find((el)=> el._id.toString() === cartItemId)

        if(findItem){
          if(changeType == 'increase'){
            userCart.items.map((el)=>{
              if(el._id.toString() === cartItemId){
         
                  const price = el.wineTotalPrice / el.count
                  el.count = el.count + 1
                  el.wineTotalPrice = el.wineTotalPrice +  price

                  userCart.totalCount = userCart.totalCount + 1
                  userCart.totalPrice = userCart.totalPrice +  price
              }
          })

          await userCart.save()

          return {message: "Count Has Been Changed"}

          }
          if(changeType === "decrease"){
           

            userCart.items.map((el)=>{
              if(el._id.toString() === cartItemId){
                  const price = el.wineTotalPrice / el.count
                  el.count = el.count - count
                  el.wineTotalPrice = el.wineTotalPrice - (count * price)

                  userCart.totalCount = userCart.totalCount - count
                  userCart.totalPrice = userCart.totalPrice - (count* price)
              }
          })

          await userCart.save()

          return {message: "Count Has Been Changed"}

        }
        }else{
            return {message: "Wrong Item ID"}
        }
    }else{
        return {message: "Inavlid Token"}
    }
  },
  deleteItem: async (user_id,cartItemId) => {
    const userCart = await Cart.findOne({user_id})

    if(userCart){
        const findCartItem = userCart.items.find((el)=> String(el._id) === String(cartItemId))

       if(findCartItem){
        const newdData = userCart.items.filter((el)=> String(el._id) !== String(cartItemId))
                userCart.totalPrice = newdData.reduce((a,b)=>{
                return a + b.wineTotalPrice
            },0)
            userCart.totalCount = newdData.reduce((a,b)=>{
                return a + b.count
            },0)

            userCart.items = newdData

            await userCart.save()
            return {message: "Item Hss Been Deleted"}

       }else{
          return {message:"Item Not Found"}
       }


    }else{
        return {message: "Invalid Token"}
    }
  },
};

export default CartService;
