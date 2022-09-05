import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './stylesheets/addData.css';
import { NavLink } from "react-router-dom";
import EmployForm from './employForm';
import LaptopFrom from './laptopForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '847px',
  height: '580px',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        className='tabPanel'
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  

const AddData = () => {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleNext = (value) => {
        setValue(value);
      };

    return (
    <Box className="tabsContainer">
      <NavLink to="/" className='backIcon'></NavLink>
      <Tabs className="tabs" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="თანამშრომლის ინფო" />
          <Tab label="ლეპტოპის მახასიათებლები" />
        </Tabs>
      <TabPanel value={value} index={0}>
       <EmployForm handleNext={handleNext}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LaptopFrom handleOpen={handleOpen} handleNext={handleNext}/>
      </TabPanel>
      <div className='redberryLogo'></div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='successPhoto'></div>
          <h1 className='succtext'>ჩანაწერი დამატებულია!</h1>
          <NavLink className="button2 mrgnaut marginnn" to="/list">სიაში გადაყვანა</NavLink>     
          <NavLink className="buttonBack mrgnaut wd" to="/">მთავარი</NavLink>
        </Box>
      </Modal>
    </Box>
    );
}

export default AddData;