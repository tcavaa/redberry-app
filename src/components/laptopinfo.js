import React from 'react';
import { NavLink } from "react-router-dom";
import './stylesheets/laptopinfo.css';

const LaptopInfo = () => {
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
                            <td>აკაკი წერეთელი</td>
                        </tr>
                        <tr>
                            <th>თიმი:</th>
                            <td>დიზაინერები</td>
                        </tr>
                        <tr>
                            <th>პოზიცია:</th>
                            <td>ილუსტრატორი</td>
                        </tr>
                        <tr>
                            <th>მეილი:</th>
                            <td>ako@redberry.ge</td>
                        </tr>
                        <tr>
                            <th>ტელ. ნომერი:</th>
                            <td>+995 583 38 22 33</td>
                        </tr>
                    </table>
                </div>
                <div className='laptopInfo'>
                <table>
                        <tr>
                            <th>ლეპტოპის სახელი:</th>
                            <td>Razor Bla Bla</td>
                        </tr>
                        <tr>
                            <th>ლეპტოპის ბრენდი:</th>
                            <td>HP</td>
                        </tr>
                        <tr>
                            <th>RAM:</th>
                            <td>16</td>
                        </tr>
                        <tr>
                            <th>მეხსიერების ტიპი:</th>
                            <td>SSD</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>CPU:</th>
                            <td>intel 5</td>
                        </tr>
                        <tr>
                            <th>CPU-ს ბირთვი:</th>
                            <td>13</td>
                        </tr>
                        <tr>
                            <th>CPU-ს ნაკადი:</th>
                            <td>67</td>
                        </tr>
                    </table>
                </div>
                <div className='otherInfo'>
                <table>
                        <tr>
                            <th>ლეპტოპის მდგომარეობა:</th>
                            <td>მეორადი</td>
                        </tr>
                        <tr>
                            <th>ლეპტოპის ფასი:</th>
                            <td>1500</td>
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