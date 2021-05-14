import {Box, CssBaseline, ButtonGroup,  FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Button, Typography} from '@material-ui/core';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import {useState} from 'react';
import Image from '../images/potrait2.jpg'; 
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Formik } from "formik";
import * as Yup from "yup";
import Logout from './Logout';

        const styles = {
            box:{
                backgroundColor: '#1d1e22',
               
            },
            typo:{
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                height:88,
                color: 'grey'
            },
            radioGroup: {
                flexDirection: 'row',
                color: '#1d1e22'
            },
            button:{
                fontSize: 15,
                textAlign: "center",
                backgroundColor: '#1d1e22',
                padding: 15,
                color: "#feda6a"
            },
            leftContainer:{
                width: '40vw',
                alignItems: "stretch",
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover"
            },
    };
    
    const  AddCar = () => {

        const [features, setFeatures] = useState('');
        const [time, setTime] = useState(new Date());
        const [type, setType] = useState('');

        
       const validationSchema = Yup.object({
                make: Yup.string().required("Required").matches(/^[aA-zZ\s]+$/, "Numbers not allowed"),
                model: Yup.string().required("Required"),
                retailprice: Yup.string().required("Required").matches(/^[0-9]*$/, "Only numbers are allowed "),
                qty: Yup.string().required("Required").matches(/^[0-9]*$/, "Only numbers are allowed ")
            });
            

    return ( 
        <>
            
            <CssBaseline/>
            <div style={{ width: '100%'}}>
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper" style={styles.box}>
                        <Box p={1} bgcolor="grey.300" style={styles.leftContainer}>
                        </Box>
                        <Box p={1} bgcolor="grey.300">
                            <Typography variant = 'subtitle1' style = {styles.typo}>Enter Car Information </Typography>
                             
                             
                            <Formik
                                initialValues={{  make: '',
                                            model: '',
                                            retailprice: '',
                                            qty: ''}}
                                validationSchema={validationSchema}
                                onSubmit={values => {
                                //console.log(values,features,time.getFullYear(),type);
                                 var year = time.getFullYear();
                                 let make = values.make;
                                 let model = values.model;
                                 let retailprice = values.retailprice;
                                 let qty = values.qty;
                                        fetch('http://localhost:8000/vehicleData',{
                                    method: 'POST',
                                    headers: {"Content-type": "application/json"},
                                    body: JSON.stringify({type, make, model, retailprice, year, features, qty})
                                })
                                }}
                            >
                            {({ handleSubmit, handleChange, values, errors, resetForm }) => (
                                <form onSubmit={handleSubmit}>

                            <FormLabel>Type</FormLabel>
                            <RadioGroup  aria-label="Type" name="type">
                                <FormControlLabel value="Car" control={<Radio />} label="Car" onChange={(e)=> setType(e.target.value)}/>
                                <FormControlLabel value="Truck" control={<Radio />} label="Truck" onChange={(e)=> setType(e.target.value)}/>
                            </RadioGroup>
                            <br/>
                            <TextField label="Make"  name = "make" variant="outlined"  value = {values.make}
                                required onChange = {handleChange} style={{ width: 250 }}
                                />{errors.make ? <div style={{color: "red"}}>{errors.make}</div> : null}

                            <br/><br/>
                            <TextField label="Model"  name = "model" variant="outlined"  value = {values.model}
                                required onChange = {handleChange} style={{ width: 250 }}
                                />{errors.model ? <div style={{color: "red"}}>{errors.model}</div> : null}

                                <br/><br/>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker  views={['year']} label="Year" value={time} onChange={setTime}/>
                                </MuiPickersUtilsProvider>
                                <br/><br/>
     
                            <FormLabel component="legend">Features</FormLabel>
                            <RadioGroup aria-label="features" name="features">
                                <FormControlLabel value="2Door" control={<Radio />} label="2-Door" onChange={(e)=> setFeatures(e.target.value)}/>
                                <FormControlLabel value="4Door" control={<Radio />} label="4-Door" onChange={(e)=> setFeatures(e.target.value)}/>
                            </RadioGroup>
                            <br/>
                            <TextField label="Retail Price"  name = "retailprice" variant="outlined"  value = {values.retailprice}
                            required onChange = {handleChange} style={{ width: 250 }}
                            />{errors.retailprice ? <div style={{color: "red"}}>{errors.retailprice}</div> : null}
                            <br/><br/>

                        <TextField label="Qty in Stock"  name = "qty" variant="outlined" value = {values.qty}
                            required onChange = {handleChange} style={{ width: 250 }}
                            />{errors.qty ? <div style={{color: "red"}}>{errors.qty}</div> : null}
                            <br/><br/>
                        <ButtonGroup>
                                <Button variant = "outlined"  style = {styles.button} type= "submit" endIcon= {<KeyboardArrowRightIcon/>}>Submit</Button>
                                <Button variant = "outlined" style = {styles.button} endIcon = {<RotateLeftIcon/>} onClick={resetForm}>Reset</Button>
                        </ButtonGroup> 
                            <br/><br/>
                        </form>
                    )}
                    </Formik>
                            <Logout/>
                        </Box>
                    </Box>
            </div>
          </>
     );
}
 
export default  AddCar;