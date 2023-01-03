import './Head.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';


import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
export default function Header() {
    const [openDate, setopenDate] = useState(false);
    var toggleDate = (e)=>{
            setopenDate(!openDate);
    }
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setopenOptions] = useState(false);
    const [option, setoption] = useState({
        adult: 1,
        children : 0 ,
        room : 1
    });
    return (
        <div className='header'>
            <div className="header-main">
                <div className="header-list">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxi</span>
                    </div>
                </div>
                <h1 className='title'>Time to travel ...</h1>
                <p className='desc'>
                    If you have some free time, why not take a trip and experience the joys of vacationing?
                </p>
                <button className="header-btn">
                    Sign in / Register
                </button>

                <div className="search">
                    <div className="search-item">
                        <FontAwesomeIcon icon={faBed} />
                        <span><input type="text" name="" id="" placeholder='Where are you goning?' /></span>
                    </div>
                    <div className="search-item">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span onClick={toggleDate} 
                        className='spText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="Daterange"
                        />}
                    </div>
                    <div className="search-item">
                        <FontAwesomeIcon icon={faPerson} />
                        <span onClick={(e)=>setopenOptions(!openOptions)} className='spText'>{`${option.adult} adults ${option.children} children ${option.room} room`}</span>
                            {openOptions &&
                               <div className="options">
                                    <div className="option-item">
                                        <span>adults</span>
                                        <button 
                                            onClick={(e)=>{
                                                setoption({
                                                    ...option,adult: option.adult===0?0:option.adult-=1 
                                                })
                                            }}
                                        className='option-btn'>-</button>
                                        <span className="adults-count">{`${option.adult}`}</span>
                                        <button 
                                                onClick={(e)=>{
                                                    setoption({
                                                        ...option,adult: option.adult+=1 
                                                    })
                                                }}
                                        className='option-btn'>+</button>
                                    </div>
                               </div>
                            }
                    </div>
                    <span><button className='header-btn'>Search</button></span>
                </div>


            </div>

        </div>
    )
}
