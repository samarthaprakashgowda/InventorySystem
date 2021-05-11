import {Box, CssBaseline, ButtonGroup,  FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Button, Typography} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import {useState, useEffect} from 'react';
import Image from '../images/potrait2.jpg'; 
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {useFormik} from 'formik';
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
       
        // const handleSubmit = (e)=>{ 
        //     e.preventDefault();
        //     if( type && make && model && time && features && retailprice && qty)
        //     {
        //         //console.log(type,make,model,time.getFullYear(),features,price,qty);
        //         fetch('http://localhost:8000/vehicleData',{
        //             method: 'POST',
        //             headers: {"Content-type": "application/json"},
        //             body: JSON.stringify({type, make, model, retailprice, year, features, qty})
        //         })
        //     }
        // }
    const  AddCar = () => {

        const initialValues = {
                making: '',
                moding: '',
                pricing: '',
                qtying: ''
            }
        const onSubmit = (values) =>{
                setMake(values.making);
                setModel(values.moding);
                setPrice(values.pricing);
                setQty(values.qtying)
                //console.log(type,make,model,time.getFullYear(),features,retailprice,qty);
                const year = time.getFullYear();
                fetch('http://localhost:8000/vehicleData',{
                    method: 'POST',
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify({type, make, model, retailprice, year, features, qty})
                })
            }
        
       const validationSchema = Yup.object({
           making: Yup.string().required("Please enter the required field").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed "),
           moding: Yup.string().required("Please enter the required field").matches(/^[a-z0-9]+$/i, "Can use aplhanumeric"),
           pricing: Yup.string().required("Please enter the required field").matches(/^[0-9]*$/, "Only numbers are allowed "),
           qtying: Yup.string().required("Please enter the required field").matches(/^[0-9]*$/, "Only numbers are allowed ")
       })
            const formik = useFormik({
                initialValues,
                onSubmit,
                validationSchema,
                currState:"",
            })
        const[data, setData] = useState([]);
        const [type, setType] = useState('');
        const [make, setMake] = useState('');
        const [model, setModel] = useState('');
        const [time, setTime] = useState(new Date());
        const [features, setFeatures] = useState('');
        const [retailprice, setPrice] = useState('');
        const [qty, setQty] = useState('');

          (useEffect(()=>{
            fetch('http://localhost:8000/vehicleData')
            .then(res => res.json())
            .then(data => setData(data))
        },[]))


    return ( 
        <>
            
            <CssBaseline/>
            <div style={{ width: '100%'}}>
                <form>
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper" style={styles.box}>
                        <Box p={1} bgcolor="grey.300" style={styles.leftContainer}>
                        </Box>
                        <Box p={1} bgcolor="grey.300">
                            <Typography variant = 'subtitle1' style = {styles.typo}>Enter Car Information </Typography>
                            <FormLabel>Type</FormLabel>
                            <RadioGroup  aria-label="Type" name="type" style={styles.radioGroup}>
                                <FormControlLabel value="Car" control={<Radio />} label="Car" onChange={(e)=> setType(e.target.value)}/>
                                <FormControlLabel value="Truck" control={<Radio />} label="Truck" onChange={(e)=> setType(e.target.value)}/>
                            </RadioGroup>
                            <br/>
                            
                            <TextField label="Make"  name = "making" variant="outlined"  value = {formik.values.making}
                            required onChange = {formik.handleChange} style={{ width: 250 }} onBlur = {formik.handleBlur}
                            />{formik.touched.making && formik.errors.making ? <div style={{color: "red"}}>{formik.errors.making}</div> : null}
                            
                            <br/><br/>    
                            <TextField label="Model"  name = "moding" variant="outlined"  value = {formik.values.moding}
                            required onChange = {formik.handleChange} style={{ width: 250 }} onBlur = {formik.handleBlur}
                            />{formik.touched.moding && formik.errors.moding ? <div style={{color: "red"}}>{formik.errors.moding}</div> : null}

                            <br/><br/>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker  views={['year']} label="Year" value={time} onChange={setTime}/>
                            </MuiPickersUtilsProvider>
                            <br/><br/>
                            <FormLabel component="legend">Features</FormLabel>
                            <RadioGroup aria-label="features" name="features" style={styles.radioGroup}>
                                <FormControlLabel value="2Door" control={<Radio />} label="2-Door" onChange={(e)=> setFeatures(e.target.value)}/>
                                <FormControlLabel value="4Door" control={<Radio />} label="4-Door" onChange={(e)=> setFeatures(e.target.value)}/>
                            </RadioGroup>
                            <br/>
                            <TextField label="Retail Price"  name = "pricing" variant="outlined"  value = {formik.values.pricing}
                            required onChange = {formik.handleChange} style={{ width: 250 }} onBlur = {formik.handleBlur}
                            />{formik.touched.pricing && formik.errors.pricing ? <div style={{color: "red"}}>{formik.errors.pricing}</div> : null}
                            <br/><br/>              
                             <TextField label="Qty in Stock"  name = "qtying" variant="outlined"  value = {formik.values.qtying}
                            required onChange = {formik.handleChange} style={{ width: 250 }} onBlur = {formik.handleBlur}
                            />{formik.touched.qtying && formik.errors.qtying ? <div style={{color: "red"}}>{formik.errors.qtying}</div> : null}
                            <br/><br/>
                            <ButtonGroup>
                                <Button variant = "outlined"  style = {styles.button} onClick={formik.handleSubmit} endIcon= {<KeyboardArrowRightIcon/>}>Submit</Button>
                                <Button variant = "outlined" style = {styles.button} endIcon = {<RotateLeftIcon/>} onClick={ e => formik.resetForm()}>Reset</Button>
                            </ButtonGroup> 
                            <br/><br/>
                            <Logout/>
                        </Box>
                    </Box>
                </form>
            </div>
          </>
     );
}
 
export default  AddCar;