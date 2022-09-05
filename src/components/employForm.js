import React from 'react';
import './stylesheets/employForm.css'

const EmployForm = ({handleNext}) => {
    return (
        <div className='formContainer'>
            <div className='namesCont padding'>
                <div>
                    <label className='formLabel' for='firstname'>სახელი</label>
                    <input className='formInput' id='firstname' name='firstname' type='text' placeholder='გრიშა'/>
                    <p className='helperText'>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                </div>
                <div>
                    <label className='formLabel' for='lastname'>გვარი</label>
                    <input className='formInput' id='lastname' name='lastname' type='text' placeholder='ბაგრატიონი'/>
                    <p className='helperText'>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                </div>
            </div>
            <select className='selectOption'>
                <option disabled selected>თიმი</option>
                <option>2</option>
            </select>
            <select className='selectOption'>
                <option disabled selected>პოზიცია</option>
                <option>2</option>
            </select>
            <div className='padding'>
                <label className='formLabel' for='email'>მეილი</label>
                <input className='formInput' id='email' name='email' type='text' placeholder='grish666@redberry.ge'/>
                <p className='helperText'>უნდა მთავრდებოდეს @redberry.ge-ით</p>
            </div>
            <div className='padding'>
                <label className='formLabel' for='phone'>ტელეფონის ნომერი</label>
                <input className='formInput' id='phone' name='phone' type='text' placeholder='+995 598 00 07 01'/>
                <p className='helperText'>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
            </div>
            <button className="button" value="1" onClick={() => handleNext(1)}>შემდეგი</button>
        </div>
    );
}

export default EmployForm;