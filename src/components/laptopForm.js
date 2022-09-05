import React from 'react';
import { useForm } from "react-hook-form";
import {useState, useEffect} from 'react';
import API from '../api/Api';
import './stylesheets/laptopForm.css'

const LaptopFrom = ({handleNext, handleOpen}) => {

    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm({
        mode: "onBlur" // "onChange"
      });
      const onSubmit = (data) => {
        handleOpen()
      };

      const [cpus, setCpus] = useState([]);
      const [brands, setBrands] = useState([]);

      const listSelects = async () => {
        try {
          const alldata = await API.getCpus()
          setCpus(alldata)
          const alldatabrands = await API.getbrands()
          setBrands(alldatabrands)
    
        }
        catch(error) {
          console.log("Please, try again later");
          throw error;
        }
      }
    
      useEffect(() => {
        listSelects();
      }, []);

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mainInfo padding'>
                    <div className='dragndrop'>
                        <p className={errors.file ? 'red' : ''}>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
                        <input className={errors.file ? 'red' : ''} {...register("file", { required: true })} type='file' />
                    </div>
                    <div className='formcont'>
                        <div>
                            <label className={errors.laptopname ? 'red formLabel' : 'formLabel'} for='laptopname'>ლეპტოპის სახელი</label>
                            <input {...register("laptopname", { required: true, pattern: {value: /^[A-Za-z][A-Za-z0-9]*$/} })} className={errors.laptopname ? 'redBorder formInput' : 'formInput'} id='laptopname' name='laptopname' type='text' placeholder='HP'/>
                            <p className={errors.laptopname ? 'red helperText' : 'helperText'}>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </p>
                        </div>
                        <div>
                            <select {...register("brand", { required: true })} className={errors.brand ? 'redBorder selectOption' : 'selectOption'}>
                                <option value='' disabled selected>ლეპტოპის ბრენდი</option>
                                {
                                    brands.map((brand) =>(
                                        <option key={brand.id} value={brand.name}>{brand.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className='cpuInfo padding'>
                    <div className='width33'>
                        <select {...register("cpu", { required: true })} className={errors.cpu ? 'redBorder selectOption' : 'selectOption'}>
                            <option value='' disabled selected>CPU</option>
                            {
                                cpus.map((cpu) =>(
                                    <option key={cpu.id} value={cpu.name}>{cpu.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='width33'>
                        <label className={errors.cpugh ? 'red formLabel' : 'formLabel'} for='cpugh'>CPU-ს ბირთვი</label>
                        <input {...register("cpugh", { required: true, pattern: {value: /^(0|[1-9]\d*)(\.\d+)?$/ } })} className={errors.cpugh ? 'redBorder formInput' : 'formInput'} id='cpugh' name='cpugh' type='text' placeholder='14'/>
                        <p className={errors.cpugh ? 'red helperText' : 'helperText'}>მხოლოდ ციფრები</p>
                    </div>
                    <div className='width33'>
                        <label className={errors.cpunk ? 'red formLabel' : 'formLabel'} for='cpunk'>CPU-ს ნაკადი</label>
                        <input className={errors.cpunk ? 'redBorder formInput' : 'formInput'} {...register("cpunk", { required: true, pattern: {value: /^(0|[1-9]\d*)(\.\d+)?$/ } })} id='cpunk' name='cpunk' type='text' placeholder='365'/>
                        <p className={errors.cpunk ? 'red helperText' : 'helperText'}>მხოლოდ ციფრები</p>
                    </div>
                    <div className='width50 margintop'>
                        <label className={errors.ram ? 'red formLabel' : 'formLabel'} for='ram'>ლეპტოპის RAM (GB)</label>
                        <input className={errors.ram ? 'redBorder formInput' : 'formInput'} {...register("ram", { required: true, pattern: {value: /^(0|[1-9]\d*)(\.\d+)?$/ } })} id='ram' name='ram' type='text' placeholder='16'/>
                        <p className={errors.ram ? 'red helperText' : 'helperText'}>მხოლოდ ციფრები</p>
                    </div>
                    <div className='width50 margintop'>
                        <label className={errors.storage ? 'red formLabel' : 'formLabel'} for='storage'>მეხსიერების ტიპი</label>
                        <input {...register("storage", { required: true})} type='radio' id='SSD' name='storage' value='SSD'/> <label className='radiosLabels' for='SSD'>SSD</label>
                        <input {...register("storage", { required: true})} type='radio' id='HDD' name='storage' value='HDD'/> <label className='radiosLabels' for='HDD'>HDD</label>
                    </div>
                    
                </div>
                <div className='info padding'>
                    <div className='width50'>
                        <label className={errors.date ? 'red formLabel' : 'formLabel'} for='date'>შეძენის რიცხვი (არჩევითი)</label>
                        <input className={errors.date ? 'redBorder formInput' : 'formInput'} {...register("date", { required: true})} id='date' name='date' type='date' placeholder='დდ / თთ / წწწწ'/>
                    </div>
                    <div className='width50'>
                        <label className={errors.price ? 'red formLabel' : 'formLabel'} for='price'>ლეპტოპის ფასი</label>
                        <input className={errors.price ? 'redBorder formInput' : 'formInput'} {...register("price", { required: true, pattern: {value: /^(0|[1-9]\d*)(\.\d+)?$/ } })} id='price' name='price' type='text' placeholder='0000'/>
                        <p className={errors.price ? 'red helperText' : 'helperText'}>მხოლოდ ციფრები</p>
                    </div>
                    <div className='width50'>
                        <label className={errors.condition ? 'red formLabel' : 'formLabel'} for='condition'>ლეპტოპის მდგომარეობა</label>
                        <input {...register("condition", { required: true})} type='radio' id='new' name='condition' value='new'/> <label className='radiosLabels' for='new'>ახალი</label>
                        <input {...register("condition", { required: true})} type='radio' id='used' name='condition' value='used'/> <label className='radiosLabels' for='used'>მეორადი</label>
                    </div>
                </div>
                <div className='buttns'>
                    <button className="buttonBack" onClick={() => handleNext(0)}>უკან</button>
                    <input type='submit' value='დამახსოვრება' className="button2"/>
                </div>
            </form>
        </div>
    );
}

export default LaptopFrom;