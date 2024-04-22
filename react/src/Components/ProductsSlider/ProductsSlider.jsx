import React from "react";
import "./productsSlider.css";
import ProductItem from "../ProductItem/ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderLoading from "../Loadings/SliderLoading";
import { settings } from "../../Constants/constants";

const ProductsSlider = ({ datas }) => {
  const load = [...new Array(10)].map((_, idx) => (
    <div key={idx}>
      <SliderLoading key={idx} />
    </div>
  ));

  return (
    <div className="container productsSlider">
      {datas.length > 0 ? (
        datas.length > 3 ? (
          <Slider {...settings}>
            {datas.length > 0
              ? datas.map((el) => <ProductItem wine={el} key={el._id} />)
              : load}
          </Slider>
        ) : (
          <div className="productSlider_div">
            {datas.map((el) => (
              <ProductItem wine={el} key={el._id} />
            ))}
          </div>
        )
      ) : (
        <Slider {...settings}>{load}</Slider>
      )}
    </div>
  );
};

export default React.memo(ProductsSlider);
