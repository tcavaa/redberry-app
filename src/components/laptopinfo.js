import React from 'react';
import { NavLink } from "react-router-dom";
import API from '../api/Api';
import {useState, useEffect} from 'react';
import './stylesheets/laptopinfo.css';

const LaptopInfo = () => {

    const [item, setItem] = useState({
        "user": {
            "name": "გელა",
            "surname": "გელაშვილი",
            "team_id": 1,
            "position_id": 1,
            "email": "gela.gelashvili@redberry.ge",
            "phone_number": "+995555555555"
        },
        "laptop": {
            "name": "HP",
            "image": "/storage/images/4nBeQnWa21ExiBZVInqlNx0nUp2UIxXRtNTzUxet.png",
            "brand_id": 1,
            "cpu": {
                "name": "Intel Core i3",
                "cores": 64,
                "threads": 128
            },
            "ram": 34,
            "hard_drive_type": "HDD",
            "state": "new",
            "purchase_date": "10-10-2003",
            "price": 1600
        }
    });

    const listLaptop = async () => {
        try {
          const alldata = await API.getlaptop(window.location.pathname.split('/')[2])
          setItem(alldata)
        }
        catch(error) {
          console.log("Please, try again later");
          throw error;
        }
      }

      useEffect(() => {
        listLaptop();
      }, []);

      console.log(item);

    return (
        <div className='mainCont'>
            <NavLink to="/" className='backIcon'></NavLink>
            <h1>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</h1>
            <div className='infoContainer'>
                <div className='mainInfo'>
                    <img />
                    <table>
                        <tr>
                            <th>სახელი:</th>
                            <td>{item.user.name} {item.user.surname}</td>
                        </tr>
                        <tr>
                            <th>თიმი:</th>
                            <td>{item.user.team_id}</td>
                        </tr>
                        <tr>
                            <th>პოზიცია:</th>
                            <td>{item.user.position_id}</td>
                        </tr>
                        <tr>
                            <th>მეილი:</th>
                            <td>{item.user.email}</td>
                        </tr>
                        <tr>
                            <th>ტელ. ნომერი:</th>
                            <td>{item.user.phone_number}</td>
                        </tr>
                    </table>
                </div>
                <div className='laptopInfo'>
                <table>
                        <tr>
                            <th>ლეპტოპის სახელი:</th>
                            <td>{item.laptop.name}</td>
                        </tr>
                        <tr>
                            <th>ლეპტოპის ბრენდი:</th>
                            <td>{item.laptop.brand_id}</td>
                        </tr>
                        <tr>
                            <th>RAM:</th>
                            <td>{item.laptop.ram}</td>
                        </tr>
                        <tr>
                            <th>მეხსიერების ტიპი:</th>
                            <td>SS{item.laptop.hard_drive_type}D</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>CPU:</th>
                            <td>{item.laptop.cpu.name}</td>
                        </tr>
                        <tr>
                            <th>CPU-ს ბირთვი:</th>
                            <td>{item.laptop.cpu.cores}</td>
                        </tr>
                        <tr>
                            <th>CPU-ს ნაკადი:</th>
                            <td>{item.laptop.cpu.threads}</td>
                        </tr>
                    </table>
                </div>
                <div className='otherInfo'>
                <table>
                        <tr>
                            <th>ლეპტოპის მდგომარეობა:</th>
                            <td>{item.laptop.state}</td>
                        </tr>
                        <tr>
                            <th>ლეპტოპის ფასი:</th>
                            <td>{item.laptop.price}</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>შეძენის რიცხვი:</th>
                            <td>12 / 06 / 2130</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default LaptopInfo;