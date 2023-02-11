import React from "react";
import useFetch from "../../pages/hook/useFetch";

import "./f-property.css";
export default function Featuredproperty() {
  const { Data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  const String =
    "https://cf.bstatic.com/xdata/images/hotel/square600/121399207.webp?k=b0e7119a0ba3354de23997d3698aac0296822fd58a590d83ddbb372f8af887a9&o=&s=1";
  return (
    <div className="fp">
      {loading ? (
        "loading"
      ) : (
        <>
          {Data.map((item, i) => (
            <div className="fp-item" key={item._id}>
              <img
                className=""
                src={item.photos[0] === null ? item.photos[0] : String}
                alt=""
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">String from {item.cheapestPrice}</span>

              {item.rating ? (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>  
              ) : (
                <div className="fpRating">
                  <button>8.9</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
