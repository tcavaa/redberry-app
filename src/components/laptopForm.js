import React from 'react';
import './stylesheets/laptopForm.css'

const LaptopFrom = ({handleNext, handleOpen}) => {
    return (
        <div className='formContainer'>
            <div className='mainInfo padding'>
                <div className='dragndrop'>
                    <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
                    <input type='file' />
                </div>
                <div className='formcont'>
                    <div>
                        <label className='formLabel' for='laptopname'>ლეპტოპის სახელი</label>
                        <input className='formInput' id='laptopname' name='laptopname' type='text' placeholder='HP'/>
                        <p className='helperText'>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </p>
                    </div>
                    <div>
                        <select className='selectOption'>
                            <option disabled selected>ლეპტოპის ბრენდი</option>
                            <option>2</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='cpuInfo padding'>
                <div className='width33'>
                    <select className='selectOption'>
                        <option disabled selected>CPU</option>
                        <option>2</option>
                    </select>
                </div>
                <div className='width33'>
                    <label className='formLabel' for='cpugh'>CPU-ს ბირთვი</label>
                    <input className='formInput' id='cpugh' name='cpugh' type='text' placeholder='14'/>
                    <p className='helperText'>მხოლოდ ციფრები</p>
                </div>
                <div className='width33'>
                    <label className='formLabel' for='cpunk'>CPU-ს ნაკადი</label>
                    <input className='formInput' id='cpunk' name='cpunk' type='text' placeholder='365'/>
                    <p className='helperText'>მხოლოდ ციფრები</p>
                </div>
                <div className='width50 margintop'>
                    <label className='formLabel' for='ram'>ლეპტოპის RAM (GB)</label>
                    <input className='formInput' id='ram' name='ram' type='text' placeholder='16'/>
                    <p className='helperText'>მხოლოდ ციფრები</p>
                </div>
                <div className='width50 margintop'>
                    <label className='formLabel' for='storage'>მეხსიერების ტიპი</label>
                    <input type='radio' id='SSD' name='storage' value='SSD'/> <label className='radiosLabels' for='SSD'>SSD</label>
                    <input type='radio' id='HDD' name='storage' value='HDD'/> <label className='radiosLabels' for='HDD'>HDD</label>
                </div>
                
            </div>
            <div className='info padding'>
                <div className='width50'>
                    <label className='formLabel' for='date'>შეძენის რიცხვი (არჩევითი)</label>
                    <input className='formInput' id='date' name='date' type='date' placeholder='დდ / თთ / წწწწ'/>
                </div>
                <div className='width50'>
                    <label className='formLabel' for='price'>ლეპტოპის ფასი</label>
                    <input className='formInput' id='price' name='price' type='text' placeholder='0000'/>
                    <p className='helperText'>მხოლოდ ციფრები</p>
                </div>
                <div className='width50'>
                    <label className='formLabel' for='storage'>ლეპტოპის მდგომარეობა</label>
                    <input type='radio' id='new' name='condition' value='new'/> <label className='radiosLabels' for='new'>ახალი</label>
                    <input type='radio' id='used' name='condition' value='used'/> <label className='radiosLabels' for='used'>მეორადი</label>
                </div>
                
            </div>
            <div className='buttns'>
                <button className="buttonBack" onClick={() => handleNext(0)}>უკან</button>
                <button className="button2" onClick={handleOpen}>დამახსოვრება</button>
            </div>
        </div>
    );
}

export default LaptopFrom;