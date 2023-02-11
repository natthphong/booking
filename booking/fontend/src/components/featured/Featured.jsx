import React from "react";
import useFetch from "../../pages/hook/useFetch";
import "./featured.css";
export default function Featured() {
  const { Data, loading, error } = useFetch(
    "hotels/countByCity?cities=huahin,chiangmai,Nan"
  );
  return (
    <div className="featured">
      {loading? <h1>"loading please waitting"</h1>:<><div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/688683.webp?k=806fb4619835abf88a68b4d3a505d91f2f1173d0470306acb3e06c2ad5d6b63a&o="
          alt=""
          className="featured-img"
        />
        <div className="titleImg">
          <div className="row">
            <h1>Hua hin</h1>

            <img
              src="https://cf.bstatic.com/static/img/flags/24/th/7a5a67d8c120688c622a617fc9dc24caa3652ea7.png"
              alt=""
              className="logoNation"
            />
          </div>
          <h2>{Data[0]} properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/688667.webp?k=a27d07b128ee2b9fd0a6446611916345282fba52d1840d494cda3e039ea407d2&o="
          alt=""
          className="featured-img"
        />
        <div className="titleImg">
          <div className="row">
            <h1>Chiang mai</h1>

            <img
              src="https://cf.bstatic.com/static/img/flags/24/th/7a5a67d8c120688c622a617fc9dc24caa3652ea7.png"
              alt=""
              className="logoNation"
            />
          </div>{" "}
          <h2>{Data[2]} properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/918405.webp?k=cd1b735585aa5547732e328cd4ed6a19646a7531f5d4243251920f61314c22ba&o="
          alt=""
          className="featured-img"
        />
        <div className="titleImg">
          <div className="row">
            <h1>Nan</h1>

            <img
              src="https://cf.bstatic.com/static/img/flags/24/th/7a5a67d8c120688c622a617fc9dc24caa3652ea7.png"
              alt=""
              className="logoNation"
            />
          </div>
          <h2>{Data[1]} properties</h2>
        </div>
      </div></>}
    </div>
  );
}
