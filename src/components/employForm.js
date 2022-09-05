import React from 'react';
import {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import API from '../api/Api';
import './stylesheets/employForm.css'

const EmployForm = ({handleNext}) => {

    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm({
        mode: "onBlur" // "onChange"
      });
      const onSubmit = (data) => {
       handleNext(1)
      };

      

      const emailEndsWith = async (email) => {
        if(email.endsWith('@redberry.ge') !== true){
            return email;  
        }
      };

      const phoneStartsWith = async (phone) => {
        if(phone.startsWith('+995') !== true){
            return phone;  
        }
      };

      const [teams, setTeams] = useState([]);
      const [positions, setPositions] = useState([]);

      const listSelects = async () => {
        try {
          const alldata = await API.getTeam()
          setTeams(alldata)
          const alldatapositions = await API.getPosition()
          setPositions(alldatapositions)
    
        }
        catch(error) {
          console.log("Please, try again later");
          throw error;
        }
      }
    
      useEffect(() => {
        listSelects();
        API.postlaptop('data');
      }, []);

      

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='namesCont padding'>
                    <div>
                        <label className={errors.firstname ? 'red formLabel' : 'formLabel'} for='firstname'>სახელი</label>
                        <input {...register("firstname", { required: true, minLength: 2, pattern: {value: /(.*[ა-ჰ])/} })} className={errors.firstname ? 'redBorder formInput' : 'formInput'} id='firstname' name='firstname' type='text' placeholder='გრიშა'/>
                        <p className={errors.firstname ? 'red helperText' : 'helperText'}>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                    </div>
                    <div>
                        <label className={errors.lastname ? 'red formLabel' : 'formLabel'} for='lastname'>გვარი</label>
                        <input {...register("lastname", { required: true,  minLength: 2, pattern: {value: /(.*[ა-ჰ])/} })} className={errors.lastname ? 'redBorder formInput' : 'formInput'} id='lastname' name='lastname' type='text' placeholder='ბაგრატიონი'/>
                        <p className={errors.lastname ? 'red helperText' : 'helperText'}>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                    </div>
                </div>
                <select {...register("team", { required: true })} className={errors.team ? 'redBorder selectOption' : 'selectOption'}>
                    <option value='' disabled selected>თიმი</option>
                    {
                        teams.map((team) =>(
                            <option key={team.id} value={team.id}>{team.name}</option>
                        ))
                    }
                </select>
                <select {...register("position", { required: true })} className={errors.position ? 'redBorder selectOption' : 'selectOption'}>
                    <option value="" disabled selected>პოზიცია</option>
                    {
                        positions.map((position) =>(
                            <option key={position.id} value={position.id}>{position.name}</option>
                        ))
                    }
                    
                </select>
                <div className='padding'>
                    <label className={errors.email ? 'red formLabel' : 'formLabel'} for='email'>მეილი</label>
                    <input {...register("email", { required: true, validate: emailEndsWith })} className={errors.email ? 'redBorder formInput' : 'formInput'} id='email' name='email' type='text' placeholder='grish666@redberry.ge'/>
                    <p className={errors.email ? 'red helperText' : 'helperText'}>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                </div>
                <div className='padding'>
                    <label className={errors.phone ? 'red formLabel' : 'formLabel'} for='phone'>ტელეფონის ნომერი</label>
                    <input {...register("phone", { required: true,  minLength: 13, maxLength: 13, validate: phoneStartsWith })} className={errors.phone ? 'redBorder formInput' : 'formInput'} id='phone' name='phone' type='text' placeholder='+995 598 00 07 01'/>
                    <p className={errors.phone ? 'red helperText' : 'helperText'}>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
                </div>
                <input className="button" type="submit" value='შემდეგი'/>
            </form>
        </div>
    );
}

export default EmployForm;