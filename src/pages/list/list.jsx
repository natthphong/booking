import { format } from 'date-fns'
import { React, useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../../components/head/Header'
import Navbar from '../../components/Nav/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import './list.css'

export default function List() {
  const location = useLocation()
  console.log(location.state);

  const [option, setoption] = useState(location.state.option);
  const [changeDate, setchangeDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="list-container">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lstitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
            </div>

            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span className='checkindate' onClick={e => setchangeDate(!changeDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {changeDate && <DateRange
                onChange={item => setDate([item.selection])}
                ranges={date}
                minDate={new Date()}
                className='lDate'
              />}

            </div>
            <div className="lsoptioni">
              <label htmlFor="">Options</label>
              <div className="lsOption-container">
                <div className="lsOption">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOption-input" />
                </div>


                <div className="lsOption">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOption-input" />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input type="number" min={1} className="lsOption-input" placeholder={option.adult} />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" min={0} className="lsOption-input" placeholder={option.children} />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input type="number" min={1} className="lsOption-input" placeholder={option.room} />
                </div>
              </div>
            </div>
                <button>Search</button>
          </div>
          <div className="listResult">
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  
          </div>

        </div>
      </div>
    </div>
  )
}
