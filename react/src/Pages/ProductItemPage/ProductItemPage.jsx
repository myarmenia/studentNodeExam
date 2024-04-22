import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./productItemPage.css";
import { getProductByIdThunk } from "../../Redux/Slices/Products/productsThunks";
import ItemPage from "../../Components/ItemPage/ItemPage";
import Nav from "../../Components/HomePage/Nav/Nav";
import { filteredProductsThunk } from "../../Redux/Slices/Filter/filterThunks";
import ProductsSlider from "../../Components/ProductsSlider/ProductsSlider";
import Footer from "../../Components/Footer/Footer";
import Title from "../../Components/HomePage/Title/Title";

const ProductItemPage = () => {
  const wineId = useParams();
  const dispatch = useDispatch();
  const { wine } = useSelector((state) => state.productsData);
  const { filteredProducts } = useSelector((state) => state.filterData);


  useEffect(() => {
    dispatch(getProductByIdThunk(wineId));
    dispatch(filteredProductsThunk({ type: wine.type }));
  }, [wineId]);

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  return (
    <div className="products_page_div">
      <Nav />
      <ItemPage />
      <Title title={"Similar wines"} />
      <ProductsSlider datas={filteredProducts.data} />
      <Footer />
    </div>
  );
};

export default React.memo(ProductItemPage);
