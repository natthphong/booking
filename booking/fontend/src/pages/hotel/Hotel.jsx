import { React, useContext, useState } from "react";
import Header from "../../components/head/Header";
import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Maillist from "../../components/mainList/Maillist";
import useFetch from "../hook/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
export default function Hotel() {
  const [sliderNum, setsliderNum] = useState(0);
  const [openImg, setopenImg] = useState(false);
  const [openmodal, setOpenmodal] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { Data, loading, error } = useFetch(`/hotels/${id}`);
  const {dates ,options } =useContext(SearchContext )
  console.log(dates[0].startDate);

  const milliseonds_per_day = 1000*60*60*24;
  function dayDif(date1,date2){
    const time = Math.abs(date2-date1);
    const diff = Math.ceil(time/milliseonds_per_day);
    return diff;

  }

 const DAY  = dayDif(dates[0].endDate.getTime() , dates[0].startDate.getTime()) 

  const hadlleImg = (i) => {
    setsliderNum(i);
    setopenImg(true);
  };
  const event = (e) => {
    if (e.target.tagName.toLowerCase() === "div") setopenImg(false);
  };
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const haddleclick = (e)=>{  
    
      setTimeout(() => {
        if(user){
            setOpenmodal(true);
        }else{
          navigate('/login');
        }
      }, 800);

     
  }
  return (
    <div>
      {openImg && (
        <div className="slider" onClick={event}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={() => {
              setopenImg(false);
            }}
            className="close"
          />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            onClick={() => {
              if (sliderNum > 0) setsliderNum(sliderNum - 1);
            }}
            className="arrow"
          />
          <div className="silderWrapper">
            <img className="sliderImg" src={Data.photos[sliderNum]} alt="" />
          </div>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            onClick={() => {
              if (sliderNum < Data.photos.length - 1) setsliderNum(sliderNum + 1);
            }}
            className="arrow"
          />
        </div>
      )}
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <>
        <div className="hotelContiner">
          <div className="hotelWrapper">
            <button className="btnNow" onClick={haddleclick}>Reserve or Book Now!</button>
            <h1 className="hotelTitle">{Data.name}</h1>
            <div className="address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{Data.address}</span>
            </div>
            <span className="Distance">
              Excellent location - {Data.distance}m from center
            </span>
            <span className="PriceHighlight">
              Book a stay over ${Data.cheapestPrice} at this property and get a free airport taxi
            </span>
            <div className="hotelIMg">
              {Data.photos?.map((photo, i) => (
                <div className="imgWrapper" key={i}>
                  <img
                    onClick={() => {
                      hadlleImg(i);
                    }}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>

            <div className="hotelDetail">
              <div className="hotel-text">
                <h1 className="hotelTitle">{Data.title}</h1>
                <div className="hotelDetailText">
                  {Data.desc}
                </div>
              </div>
              <div className="hotelDetailPrice">
                <h1>Perfect for a {DAY}-night stay!</h1>
                <span>
                  Located in the real heart of Kraakow , this property has an
                  excellent location score of 9.8
                </span>
                <h2>
                  <b>${DAY *Data.cheapestPrice  * options.room }</b>({DAY} nights)
                </h2>
                <button onClick={haddleclick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      <Maillist />
      <div className="margin"></div>
      <Footer />
      </>)  }
                    {openmodal && <Reserve setOpen={setOpenmodal} hotelId={id} />}
    </div>
  );  
}



/*  const photo = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/408442510.jpg?k=39f04c48b10ceae59bdf662cc63ef8cc4e9e2417c1214c1be2323b0587c5b006&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/408442547.jpg?k=fc0d6589f9d876043d1340e30b5b32d79852244093d0c515615307a109ae76b7&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/422779392.jpg?k=a95c971e54aebcf2c182a37e59e55f3106bda178067a475c0f20c60f21cf555f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/415242854.jpg?k=a444c96db86321dac06882ed5db3e659663379bd7a996aa9a4cf8f685d7414a6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/408442617.jpg?k=37f1ce83df61075e2d4912e831f2761917aa892d8e821a89807f2c7231cc20f1&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408442618.jpg?k=921b4bbfb30ad4ce3186e14a8d5fcffded4c9ee3be24da03bde5b0fe2566cd5e&o=&hp=1",
    },
  ];*/ 