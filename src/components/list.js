import React from 'react';
import { NavLink } from "react-router-dom";
import './stylesheets/list.css';

const List = () => {
    return (
        <div className='list'>
            <NavLink to="/" className='backIcon'></NavLink>
            <h1>ჩანაწერების სია</h1>
            <div className='listContainer'>
                <div className='listItem'>
                    <a className='image' href='/laptopinfo'><img /></a>
                    <div>
                        <h2>ირინე ჩანქელიანი</h2>
                        <p>Pentium II</p>
                        <NavLink to="/laptopinfo" className='seemore'>მეტის ნახვა</NavLink>
                    </div>
                </div>
                <div className='listItem'>
                    <a className='image' href='/laptopinfo'><img /></a>
                    <div>
                        <h2>ირინე ჩანქელიანი</h2>
                        <p>Pentium II</p>
                        <NavLink to="/laptopinfo" className='seemore'>მეტის ნახვა</NavLink>
                    </div>
                </div>
                <div className='listItem'>
                    <a className='image' href='/laptopinfo'><img /></a>
                    <div>
                        <h2>ირინე ჩანქელიანი</h2>
                        <p>Pentium II</p>
                        <NavLink to="/laptopinfo" className='seemore'>მეტის ნახვა</NavLink>
                    </div>
                </div>
                <div className='listItem'>
                    <a className='image' href='/laptopinfo'><img /></a>
                    <div>
                        <h2>ირინე ჩანქელიანი</h2>
                        <p>Pentium II</p>
                        <NavLink to="/laptopinfo" className='seemore'>მეტის ნახვა</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;