import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./filters.css";
import { filteredProductsThunk } from "../../Redux/Slices/Filter/filterThunks";
import {
  changePriceValueFrom,
  changePriceValueTo,
  setFilterIsOpen,
} from "../../Redux/Slices/Filter/FilterSlice";
import { productsGetThunk } from "../../Redux/Slices/Products/productsThunks";

const Filters = ({ isBtn }) => {
  const { priceValueFrom, priceValueTo, filterIsOpen } = useSelector(
    (state) => state.filterData
  );
  const { wines } = useSelector((state) => state.productsData);
  const [activeTypes, setActiveTypes] = useState([]);
  const [activeBrands, setActiveBrands] = useState([]);
  const dispatch = useDispatch();
  const winesTypes = [];
  const winesBrands = [];

  useEffect(() => {
    if (!isBtn) {
      const activeTypesStr = activeTypes.join(",");
      const activeBrandsStr = activeBrands.join(",");
      dispatch(
        filteredProductsThunk({ type: activeTypesStr, brand: activeBrandsStr })
      );
      dispatch(productsGetThunk());
    }
  }, [activeTypes, activeBrands]);

  if (wines.length) {
    wines.forEach((el) => {
      const findType = winesTypes.find((item) => item === el.type);

      if (!findType) {
        winesTypes.push(el.type);
      }
    });
    wines.forEach((el) => {
      const findBrand = winesBrands.find(
        (item) => item === el.about.manufacturer.name
      );

      if (!findBrand) {
        winesBrands.push(el.about.manufacturer.name);
      }
    });
  }

  const handleTypeCheckboxChange = (value) => {
    if (activeTypes.includes(value)) {
      setActiveTypes(activeTypes.filter((item) => item !== value));
    } else {
      setActiveTypes([...activeTypes, value]);
    }
  };
  const handleBrandCheckboxChange = (value) => {
    if (activeBrands.includes(value)) {
      setActiveBrands(activeBrands.filter((item) => item !== value));
    } else {
      setActiveBrands([...activeBrands, value]);
    }
  };

  function handleFromValueChange(e) {
    let inputValue = parseInt(e.target.value);

    if (isNaN(inputValue)) {
      inputValue = 0;
    }
    if (inputValue >= priceValueTo) {
      inputValue = priceValueTo - 1;
    }
    if (inputValue < 0) {
      inputValue = 0;
    }

    dispatch(changePriceValueFrom(inputValue));
  }
  const handleToValueChange = (e) => {
    let inputValue = parseInt(e.target.value);

    if (isNaN(inputValue)) {
      inputValue = 0;
    }
    if (inputValue <= priceValueFrom) {
      inputValue = priceValueFrom + 1;
    }
    if (inputValue > 100) {
      inputValue = 100;
    }

    dispatch(changePriceValueTo(inputValue));
  };

  const rangeWidth = useMemo(() => {
    if (isFinite(priceValueTo)) {
      return parseInt(priceValueTo);
    }
    return 0;
  }, [priceValueTo]);

  const searchResults = () => {
    const activeTypesStr = activeTypes.join(",");
    const activeBrandsStr = activeBrands.join(",");
    dispatch(
      filteredProductsThunk({ type: activeTypesStr, brand: activeBrandsStr })
    );
    dispatch(productsGetThunk());
    dispatch(setFilterIsOpen(false));
  };

  return (
    <div className="filters_div">
      <div className="filters_price">
        <h4>Price</h4>
        <div className="price_range">
          <span
            style={{
              left: parseInt(priceValueFrom) - 2,
              width: `${rangeWidth}%`,
            }}
          ></span>
          <span>{priceValueFrom}$</span>
          <span>{priceValueTo}$</span>
        </div>
        <div className="price_inputs">
          <input
            type="number"
            min="0"
            max={`${priceValueTo - 1}`}
            placeholder="from"
            value={priceValueFrom}
            onChange={handleFromValueChange}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && priceValueFrom === 0) {
                e.preventDefault();
              }
            }}
          />
          <input
            type="number"
            placeholder="to"
            value={priceValueTo}
            onChange={handleToValueChange}
            max="100"
            min="1"
            onKeyDown={(e) => {
              if (e.key === "Backspace" && priceValueTo === 0) {
                e.preventDefault();
              }
            }}
          />
        </div>
      </div>
      <div className="wine_types_brands">
        <h3>Type</h3>
        <ul>
          {winesTypes.map((el, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                onChange={() => handleTypeCheckboxChange(el)}
                checked={activeTypes.includes(el)}
              />
              {el}{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="wine_types_brands">
        <h3>Brand</h3>
        <ul>
          {winesBrands.map((el, idx) => (
            <li key={idx}>
              {" "}
              <input
                type="checkbox"
                onChange={() => handleBrandCheckboxChange(el)}
                checked={activeBrands.includes(el)}
              />{" "}
              {el}{" "}
            </li>
          ))}
        </ul>
      </div>
      {isBtn ? (
        <button onClick={searchResults} className="filter_search_btn">
          Search
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default React.memo(Filters);
