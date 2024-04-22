import React, { useEffect, useRef } from "react";
import "./homePage.css";
import Header from "../../Components/HomePage/Header/Header";
import Title from "../../Components/HomePage/Title/Title";
import ProductsSlider from "../../Components/ProductsSlider/ProductsSlider";
import Footer from "../../Components/Footer/Footer";
import middleBg from "../../Images/backgrounds/background_2.png";
import SpecialOffers from "../../Components/HomePage/SpecialOffers/SpecialOffers";
import { useDispatch, useSelector } from "react-redux";
import {
  filteredByRatingThunk,
  filteredBySaleThunk,
} from "../../Redux/Slices/Filter/filterThunks";
import Brands from "../../Components/HomePage/Brands/Brands";
import { productsGetThunk } from "../../Redux/Slices/Products/productsThunks";
import { brandsSettings } from "../../Constants/constants";
import {
  setElementLocation,
  setActivPat,
} from "../../Redux/Slices/Filter/FilterSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsGetThunk());
    dispatch(filteredByRatingThunk());
    dispatch(filteredBySaleThunk());
  }, []);
  const brandsRef = useRef();
  const aboutRef = useRef();
  const specialOffersRef = useRef();


  const { filteredByRating, filteredBySale, activPat, elementLocation } =
    useSelector((state) => state.filterData);

  useEffect(() => {
    dispatch(
      setElementLocation({
        name: "all",
        brands: brandsRef.current.offsetTop,
        about: aboutRef.current.offsetTop,
        specialOffers: specialOffersRef.current.offsetTop,
      })
    );
  }, []);

  useEffect(() => {
    if (activPat.id) {

      window.scrollTo({
        top: elementLocation[activPat.locationName] - 120,
        behavior: "instant",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [activPat]);

  return (
    <div>
      <Header aboutRef={aboutRef} />
      <Title title={"Popular wines"} />
      <ProductsSlider datas={filteredByRating} />
      <Title title={"Customer favorites"} />
      <ProductsSlider datas={filteredBySale} />
      <article>
        <div className="middle_bg">
          <img src={middleBg} alt="" />
          <Title title={"Special offers and sales"} />
        </div>
        <SpecialOffers specialOffersRef={specialOffersRef} />
        <Brands brandsSettings={brandsSettings} brandsRef={brandsRef} />
      </article>

      <Footer />
    </div>
  );
};

export default React.memo(HomePage);
