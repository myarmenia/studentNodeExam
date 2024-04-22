import React from "react";
import "./specialOffers.css";
import offer1 from "../../../Images/Wines/offer_wine_1.png";
import offer2 from "../../../Images/Wines/offer_wine_2.png";
import offer3 from "../../../Images/Wines/offer_wine_3.png";
import offer4 from "../../../Images/Wines/offer_wine_4.png";
import buyers from '../../../Images/Wines/Buyers.jpg'

const SpecialOffers = ({specialOffersRef}) => {
  return (
    <div className="container" id="specialoffers" ref={specialOffersRef}>
      <div className="offers">
        <div className="offer offer1">
          <h3>“Armenia” rose sweet wine</h3>
          <img src={offer1} alt="" />
          <p>Alc 55% 0.75l</p>
          <h4>-30%</h4>
          <button>More...</button>
        </div>
        <div className="offer offer2">
          <h3>“Karas” gift box</h3>
          <img src={offer2} alt="" />
          <button>More...</button>
        </div>
        <div className="offer offer3">
          <div className="offerDiv">
            <h3>“YEREVAN” 782 BC</h3>
            <button>More...</button>
          </div>

          <img src={offer3} alt="" />
        </div>
        <div className="offer offer4">
          <img src={offer4} alt="" />
          <div className="offer4Div">
            <h3>“Armenia” wines with special prices for wholesale buyers</h3>
            <button>More...</button>
          </div>
        </div>
      </div>

      <div className="buyers">
                <img src={buyers} alt=""/>
                <div className="buyers_text">
                    <h2>For international buyers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in iaculis urna. Sed ultrices
                        convallis magna in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia curae; Duis rhoncus sollicitudin urna, eu maximus nisl ultrices eu. Fusce
                        eleifend nisi eget justo sagittis fringilla. Nullam vel leo nec est laoreet sollicitudin a nec
                        erat. Phasellus sem ipsum, dapibus eu arcu sed, semper mattis metus. Nunc tempus augue vel neque
                        maximus dignissim at sed elit. Vestibulum at magna dui. Quisque iaculis sit amet sapien in
                        vulputate.
                        Nam ullamcorper mattis nisi faucibus blandit. Nam vehicula nulla vitae purus interdum mattis..
                        Proin urna urna, ultrices id porta id, interdum id nisi. Integer sed nulla in sem ultricies
                        volutpat efficitur vel leo. Cras ornare, nulla et bibendum accumsan, leo tellus pellentesque
                        odio, vel finibus nunc elit.</p>
                </div>
            </div>
    </div>
  );
};

export default React.memo(SpecialOffers)
