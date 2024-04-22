import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './brands.css'
import Title from '../Title/Title'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BrandsLoading from '../../Loadings/BrandsLoading'

const Brands = ({brandsRef,brandsSettings}) => {
  const {wines} = useSelector((state)=>state.productsData)
  const brands = []

  if(wines.length){
    wines.forEach((el) => {
      const findBrand = brands.find((item) => item.name === el.about.manufacturer.name)
  
      if (!findBrand) {
          brands.push(el.about.manufacturer)
      }
  })
  }
  const load = [...new Array(10)].map((_, idx)=>( <div key={idx}><BrandsLoading key={idx}/></div>))

  return (
    <div className='brands_main container' ref={brandsRef}  >
        <Title title={"Armenin Brands"}/>
         
         <div className="brands_slider">
            <Slider {...brandsSettings}>
                {
                  brands.length ? brands.map((brand,idx)=><img src={`${process.env.REACT_APP_HOST}${brand.imageUrl}`} key={idx}/>) : load
                }
            </Slider>
         </div>
    </div>
  )
}

export default React.memo(Brands)