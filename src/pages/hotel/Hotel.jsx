import {React,useState} from 'react'
import Header from '../../components/head/Header'
import Navbar from '../../components/Nav/Navbar'
import Footer from '../../components/footer/Footer'
import './hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Maillist from '../../components/mainList/Maillist'
export default function Hotel() {
  const [sliderNum, setsliderNum] = useState(0);
  const [openImg, setopenImg] = useState(false);
  const photo = [
    { src: "https://cf.bstatic.com/xdata/images/hotel/max500/408442510.jpg?k=39f04c48b10ceae59bdf662cc63ef8cc4e9e2417c1214c1be2323b0587c5b006&o=&hp=1" }
    ,
    { src: "https://cf.bstatic.com/xdata/images/hotel/max500/408442547.jpg?k=fc0d6589f9d876043d1340e30b5b32d79852244093d0c515615307a109ae76b7&o=&hp=1" }
    ,
    { src: "https://cf.bstatic.com/xdata/images/hotel/max300/422779392.jpg?k=a95c971e54aebcf2c182a37e59e55f3106bda178067a475c0f20c60f21cf555f&o=&hp=1" }
    ,
    { src: "https://cf.bstatic.com/xdata/images/hotel/max300/415242854.jpg?k=a444c96db86321dac06882ed5db3e659663379bd7a996aa9a4cf8f685d7414a6&o=&hp=1" }
    ,
    { src: "https://cf.bstatic.com/xdata/images/hotel/max300/408442617.jpg?k=37f1ce83df61075e2d4912e831f2761917aa892d8e821a89807f2c7231cc20f1&o=&hp=1" }
    ,
    { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408442618.jpg?k=921b4bbfb30ad4ce3186e14a8d5fcffded4c9ee3be24da03bde5b0fe2566cd5e&o=&hp=1" }
    ,
  ]

  const hadlleImg = (i)=>{
    console.log(photo.length);
    setsliderNum(i);
    setopenImg(true);
  }
  return (
    <div>
      {openImg && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} onClick={()=>{setopenImg(false)}} className = 'close' />
          <FontAwesomeIcon icon={faCircleArrowLeft} onClick={()=>{if(sliderNum>0)setsliderNum(sliderNum-1)}} className='arrow' />
          <div className="silderWrapper">
              <img className='sliderImg' src={photo[sliderNum].src} alt="" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} onClick={()=>{if(sliderNum<photo.length-1)setsliderNum(sliderNum+1)}} className='arrow' />
        </div>}
      <Navbar />
      <Header type="list" />
      <div className="hotelContiner">
      
        <div className="hotelWrapper">
          <button className="btnNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">
            The Ember Hotel
          </h1>
          <div className="address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 New york</span>
          </div>
          <span className='Distance'>
            Excellent location - 500m from center
          </span>
          <span className='PriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelIMg">
            {photo.map((photo,i) => (<div className='imgWrapper'><img onClick={()=>{hadlleImg(i)}} src={photo.src} alt="" className="hotelImg" /></div>))}
          </div>

          <div className="hotelDetail">
            <div className="hotel-text">
              <h1 className="hotelTitle">Stay in The Ember Hotel</h1>
              <div className="hotelDetailText">
                The Ember Hotel is located in Bangkok. It is 300 meters from Khao San Road and 1 km from Bangkok National Museum. It offers a restaurant. This 4-star hotel offers a 24-hour front desk and luggage storage space. The hotel has family rooms. The hotel offers air-conditioned rooms for guests. There is a work desk, a kettle, a mini-bar, a safe, and a flat-screen TV. There is a private bathroom with a shower. All rooms at The Ember Hotel come with bed linen and towels. Continental and a la carte breakfast options are available each morning at the accommodation. Popular points of interest are nearby The Ember Hotel. Including Wat Phra Kaew, Wat Saket and the Grand Palace. The hotel is a 10-minute drive from Don Mueang International Airport. The nearest airport is 26 km away. Couples particularly like the location – they rated it 9.6 for a two-person trip.
              </div>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Kraakow , this property has an
                excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b>(0 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <Maillist />
      <div className="margin"></div>
      <Footer />
    </div>
  )
}
