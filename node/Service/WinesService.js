import Wines from "../Model/Wines.js";

const WinesService = {
  getAll: async (type, brand, sort, page, size) => {
    const allWines = await Wines.find();

    const skip = (page - 1) * size;
    const paginatedData = allWines.slice(skip, skip + size);

    if (allWines.length > 0) {
      if (type && brand) {
        const brandArr = brand.split(",");

        if (brandArr.length >= 1) {
          const filterByBrand = [];
          paginatedData.filter((el) => {
            brandArr.filter((b) => {
              if (
                el.about.manufacturer.name.toLowerCase() === b.toLowerCase()
              ) {
                filterByBrand.push(el);
              }
            });
          });

          if (filterByBrand.length > 0) {
            const typeArr = type.split(",");

            const filterByType = [];
            filterByBrand.filter((el) => {
              typeArr.filter((t) =>
                el.type.toLowerCase() === t.toLowerCase()
                  ? filterByType.push(el)
                  : ""
              );
            });
            if (filterByType.length > 0) {
              return filterByType;
            } else {
              return { message: "No Data Founded With This Type" };
            }
          } else {
            return { message: "No Data Founded With This Type" };
          }
        } else {
          return { message: "No Data Founded With This Type" };
        }
      } else {
        if (type) {
          const typeArr = type.split(",");
          if (typeArr.length > 1) {
            const data = [];
            paginatedData.filter((el) => {
              typeArr.filter((t) =>
                el.type.toLowerCase() === t.toLowerCase() ? data.push(el) : ""
              );
            });

            if (data.length > 0) {
              return data;
            } else {
              return { message: "No Data Founded With This Type" };
            }
          } else {
            const data = paginatedData.filter(
              (el) => el.type.toLowerCase() === typeArr[0].toLowerCase()
            );
            if (data.length > 0) {
              return data;
            } else {
              return { message: "No Data Founded With This Type" };
            }
          }
        }

        if (brand) {
          const brandArr = brand.split(",");

          if (brandArr.length > 1) {
            const data = [];
            paginatedData.filter((el) => {
              brandArr.filter((b) =>
                el.about.manufacturer.name.toLowerCase() === b.toLowerCase()
                  ? data.push(el)
                  : ""
              );
            });

            if (data.length > 0) {
              return data;
            } else {
              return { message: "No Data Founded With This Brand" };
            }
          } else {
            const data = paginatedData.filter(
              (el) =>
                el.about.manufacturer.name.toLowerCase() ===
                brandArr[0].toLowerCase()
            );
            if (data.length > 0) {
              return data;
            } else {
              return { message: "No Data Founded With This Brand" };
            }
          }
        }

        if (sort) {
          if (sort.toLowerCase() === "rating") {
            const filteredData = paginatedData
              .filter((el) => el.rating >= 4)
              .sort((a, b) => b.rating - a.rating);

            return filteredData;
          }
          if (sort.toLowerCase() === "sale") {
            const filteredData = paginatedData
              .filter((el) => el.sale > 120)
              .sort((a, b) => b.sale - a.sale);

            return filteredData;
          }

          if (sort.toLowerCase() !== "rating" || price !== "sale") {
            return { message: "Wrong Sort Value " };
          }
        }
      }

      return paginatedData;
    } else {
      return { message: "Array is Empty" };
    }
  },
  getById: async (id) => {
    const wine = await Wines.findById(id);

    if (wine) {
      return wine;
    } else {
      return { message: "Wine With This ID Not Found" };
    }
  },
};

export default WinesService;
