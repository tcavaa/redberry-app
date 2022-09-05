import React from 'react';
import { NavLink } from "react-router-dom";
import API from '../api/Api';
import {useState, useEffect} from 'react';
import './stylesheets/list.css';

const List = () => {

    const [items, setItems] = useState([]);

    const listLaptops = async () => {
        try {
          const alldata = await API.getlaptops()
          setItems(alldata)
        }
        catch(error) {
          console.log("Please, try again later");
          throw error;
        }
      }
    
      useEffect(() => {
        listLaptops();
      }, []);
    return (
        <div className='list'>
            <NavLink to="/" className='backIcon'></NavLink>
            <h1>ჩანაწერების სია</h1>
            <div className='listContainer'>
                {
                    items.map((item) =>(
                        <div className='listItem'>
                            <a className='image' href='/laptopinfo'><img src={item.laptop.image} /></a>
                            <div>
                                <h2>{item.user.name} {item.user.surname}</h2>
                                <p>{item.laptop.name}</p>
                                <NavLink to={"/laptopinfo/" + item.laptop.id} className='seemore'>მეტის ნახვა</NavLink>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default List;