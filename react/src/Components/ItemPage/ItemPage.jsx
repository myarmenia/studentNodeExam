import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import "./itemPgae.css";
import { UNKNOWN_ERROR } from "../../Constants/constants";
import ItemPageLoading from "../Loadings/ItemPageLoading";
import { getAccessToken } from "../../Utils/accontUtils";
import { addToCartThunk } from "../../Redux/Slices/Cart/cartThunks";
import { setActivPat } from "../../Redux/Slices/Filter/FilterSlice";

const ItemPage = () => {
  const { wine } = useSelector((state) => state.productsData);
  const [num, setNum] = React.useState(0);
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();


  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  const addProductToCart = () => {
    const token = getAccessToken();
    if (token) {
      dispatch(addToCartThunk({ wine_id: wine._id }));
    } else {
      window.location.href = "/user/signin";
    }
  };

  const changeActivePath = ()=>{
    dispatch(setActivPat({title: null,
    path: null,
    locationName: null}))
  }

  useEffect(() => {
    if (wine.data) {
      setNum((wine.data.price / 100) * wine.data.discount);
      setData(wine.data);
    }
  }, [wine]);



  return (
    <div
      className="item_page_div"
      style={{
        paddingTop: wine.wineLoadingStatus === "pending" ? "10px" : "20px",
      }}
    >
      <div className="container">
        {wine.wineLoadingStatus === "pending" ? (
          <div className="loadingDiv">
            <ItemPageLoading />
          </div>
        ) : wine.wineLoadingStatus === "fulfilled" ? (
          data && (
            <>
            <div className="navigation">
                <NavLink to={'/'} onClick={()=>changeActivePath()}>{"Home >"} </NavLink> <NavLink to={'/products'}>{"Products >"}</NavLink> <span className="lastSpan">{data.title}</span>
              </div>
            <div className="item_page_wine">
              
              <div className="item_img">
                <img
                  src={`${process.env.REACT_APP_HOST}${data.imageUrl}`}
                  alt=""
                />
              </div>
              <div className="item_info">
                <div className="item_title">
                  <h1>{data.title}</h1>
                </div>
                <div className="aside_img">
                  <img src={`${process.env.REACT_APP_HOST}${data.imageUrl}`} alt="" />
                </div>
                <div className="item_about">
                  <div className="item_about_info">
                    <ul>
                      <li>
                        <span>Article</span> <span>{data.article}</span>
                      </li>
                      <li>
                        <span>Country</span> <span>{data.about?.country}</span>
                      </li>
                      <li>
                        <span>Region</span> <span>{data.about?.region}</span>
                      </li>
                      <li>
                        <span>Manufacturer</span>{" "}
                        <span>{data.about?.manufacturer.name}</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>Color</span> <span>{data.about?.color}</span>
                      </li>
                      <li>
                        <span>Type</span> <span>{data.type}</span>
                      </li>
                      <li>
                        <span>Volume</span> <span>{data.volume}ml</span>
                      </li>
                      <li>
                        <span>Alcohol</span> <span>{data.alcohol}%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item_about_price">
                    {data.discount ? (
                      <div className="price">
                        <div className="old_price">
                          <p>{data.price}$</p>
                          <span>{data.discount}%</span>
                        </div>
                        <div className="current_price">
                          <p> {data.price - num} $</p>
                        </div>
                      </div>
                    ) : (
                      <div className="price">
                        <div className="current_price">
                          <p> {data.price} $</p>
                        </div>
                      </div>
                    )}

                    <button onClick={addProductToCart}>Add to cart</button>
                  </div>
                </div>
                <div className="item_desc">
                  <h4>Description</h4>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
            </>
          )
        ) : (
          UNKNOWN_ERROR
        )}
      </div>
    </div>
  );
};

export default React.memo(ItemPage);
