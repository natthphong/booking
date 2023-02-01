import React from 'react'
import './Nav.css';
export default function Navbar() {
  return (
    <div className='nav'>
            <div className="nav-item">
                    <h3>
                        booking
                    </h3>
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
