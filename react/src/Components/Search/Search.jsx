import React, { useEffect } from "react";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { productsGetThunk } from "../../Redux/Slices/Products/productsThunks";
import SearchItem from "./SearchItem";
import { setSearchValue } from "../../Redux/Slices/Products/ProductSlice";

const Search = () => {
  // const [text, setText] = useState("")
  const dispatch = useDispatch();
  const { wines, searchValue } = useSelector((state) => state.productsData);

  useEffect(() => {
    dispatch(productsGetThunk());
  }, [searchValue]);
  return (
    <div className="search_div">
      <div className="inp_div">
        <input
          value={searchValue}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
        />
      </div>
      <div
        className="products"
        style={{ display: searchValue.length ? "flex" : "none" }}
      >
        {searchValue.length
          ? wines.map((el) => {
              if (el.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return <SearchItem wine={el} key={el._id} />;
              }
            })
          : ""}
      </div>
    </div>
  );
};

export default Search;
