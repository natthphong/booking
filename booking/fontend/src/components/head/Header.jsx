import './Head.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';


import { React, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
export default function Header({type}) {
    const { user } = useContext(AuthContext);
    const [openDate, setopenDate] = useState(false);
    const [destination, setDestination] = useState("")
    
    var toggleDate = (e) => {
        if (openOptions) setopenOptions(!openOptions);
        setopenDate(!openDate);
    }
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setopenOptions] = useState(false);
    const [option, setoption] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const hadleOption  = (name,provide)=>{
        setoption(
            {
                ...option , [name]: provide==="i" ? option[name] +=1 :option[name] -=1,
            }
       );
    };
    const navigate = useNavigate()
    const {dispatch} =useContext(SearchContext)
    const handlesearch = ()=>{
        const options  = option;
        
        dispatch({type:"NEW_SEARCH" , payload:{destination,dates,options}})
        navigate("/hotels",{state:{destination,dates,option}})
    }

    return (
        <div className='header'>
            <div className={type ==="list" ?"header-main-list":"header-main"}>
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
               { type !=="list" &&<>
               <h1 className='title'>Time to travel ...</h1>
                <p className='desc'>
                    If you have some free time, why not take a trip and experience the joys of vacationing?
                </p>
               {!user && <button className="header-btn">
                    Sign in / Register
                </button>}

                <div className="search">
                    <div className="search-item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>
                            <input type="text" name="" id="" 
                            onChange={e=>setDestination(e.target.value)}
                            placeholder='Where are you goning?' />
                        </span>
                    </div>
                    <div className="search-item">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span onClick={toggleDate}
                            className='spText'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange

                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            minDate={new Date()}
                            className="Daterange"
                        />}
                    </div>
                    <div className="search-item">
                        <FontAwesomeIcon icon={faPerson} />
                        <span onClick={(e) => { setopenOptions(!openOptions); if (openDate) setopenDate(!openDate); }} className='spText'>{`${option.adult} adults ${option.children} children ${option.room} room`}</span>
                        {openOptions &&
                            <div className="options">
                                <div className="option-item">
                                    <span>Adults</span>

                                    <div className="count">
                                        <button
                                            disabled={option.adult<=1}
                                            onClick={()=>hadleOption("adult","d")}
                                            className='option-btn'>-</button>
                                        <span className="adults-count">{`${option.adult}`}</span>
                                        <button
                                    
                                            onClick={()=>hadleOption("adult","i")}
                                            className='option-btn'>+</button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span>Children</span>
                                    <div className="count">
                                        <button
                                                disabled={option.children<=0}
                                                onClick={()=>hadleOption("children","   d")}
                                            className='option-btn'>-</button>
                                        <span className="adults-count">{`${option.children}`}</span>
                                        <button
                                            
                                               onClick={()=>hadleOption("children","i")}
                                            className='option-btn'>+</button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span>Room</span>
                                    <div className="count">
                                        <button
                                           disabled={option.room<=1}
                                           onClick={()=>hadleOption("room","d")}
                                            className='option-btn'>-</button>
                                        <span className="adults-count">{`${option.room}`}</span>
                                        <button
                                                 onClick={()=>hadleOption("room","i")}
                                            className='option-btn'>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <span>
                        <button  className='header-btn'
                        onClick={handlesearch}
                        >Search</button>
                    </span>
                </div>


            </>}
            </div>
        </div>
    )
}
