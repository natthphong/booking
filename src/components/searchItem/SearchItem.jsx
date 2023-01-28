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
                <h1>The Ember HotelOpens in new window</h1>
                <span>1 km from centre</span>
                <span>Free airport taxi</span>
        </div>
        <div className="siDetails">

        </div>
    </div>
  )
}
