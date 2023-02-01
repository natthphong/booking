import React from 'react'
import './search.css';
export default function SearchItem() {
  return (
    <div className="seachitem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square200/422779392.webp?k=40dc5ca1ba316d61f7cfd49ac34829e1893a24ba2aadd64c5c826d54da1e1f40&o=&s=1"
        alt=""
        className='sImg'
      />

      <div className="siDesc">
        <h1 className='sTitle'>The Ember Hotel</h1>
        <span>1 km from centre</span>
        <span className='taxi'>Free airport taxi</span>
        <span className='stext'>Studio Apartnmebt with Air conditioning</span>
        <span> Entire studio 1 bathroom 21 m 1 full bed </span>
        <span className='free'>Free cancellation</span>
        <span className='sfree'>You can cancel later, so lock in this great price today!</span>

      </div>
      <div className="siDetails">
                <div className="review">
                      <h2>Excellent</h2>
                      <button>8.9</button>
                </div>


              <div className="money">
                        <h1>$112</h1>
                        <span>includes taxes and fees</span>
                        <button>See availability</button>
              </div>
           

      </div>
    </div>
  )
}
