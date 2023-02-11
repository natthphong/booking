import React from 'react'
import {Link} from "react-router-dom";
import './Nav.css';
export default function Navbar() {
  return (
    <div className='nav'>
            <div className="nav-item">
              <Link to="/" style={{color:"inherit"  ,textDecoration:"none"}}>
                    <h3>
                        booking
                    </h3>
                    </Link>
                    <div className="btn">
                          <button>
                              register
                          </button>
                          <button>
                                login
                          </button>
                    </div>
            </div>
    </div>
  )
}
