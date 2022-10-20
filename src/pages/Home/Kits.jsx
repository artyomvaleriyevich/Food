import React from 'react';
import {Link} from "react-router-dom";
import {BsArrowRightCircle} from 'react-icons/bs'

const Kits = () => {
    return (
        <section className='kits'>
          <div className="container">
              <div className="kits__content">
                  <div className="kits__top">
                      <h2 className="title">Наши наборы</h2>

                      <div className="kits__tabs">
                          <span className="tab">TREASURE</span>
                          <span className="tab">НОВЫЙ МИР</span>
                          <span className="tab">ЗДОРОВЫЕ ТЕЛА</span>
                          <span className="tab">DETOX</span>
                      </div>

                      <Link to='/catalog'><BsArrowRightCircle/></Link>

                  </div>
              </div>
          </div>
        </section>
    );
};

export default Kits;