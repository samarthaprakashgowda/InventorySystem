import {Box, CssBaseline, TextField, Button, Typography} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Image from '../images/potrait1.jpg'; 
import { Formik } from "formik";
import * as Yup from "yup";
import {useHistory} from 'react-router-dom';

const Login = (props) => {
        const history = useHistory();
        const styles = {
            box:{
                backgroundColor: '#1d1e22',
                height: '100vh'
            },
            typo:{
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                height:88,
                color: 'grey'
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
        
       const validationSchema = Yup.object({
           logging: Yup.string().email().required("Please enter the required field"), //.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/, "Invalid Email"),
           passwording: Yup.string().required("Please enter the required field")//.matches(/^[a-z0-9]+$/i, "Use alphanumeric")
       })
    return ( 
        <>
                   
                    <CssBaseline/>
                    <div style={{ width: '100%'}}>
                            <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper" style={styles.box}>
                                <Box p={1} bgcolor="grey.300" style={styles.leftContainer}>
                                </Box>
                                <Box p={1} bgcolor="grey.300">
                                    <Typography variant = 'subtitle1' style = {styles.typo}>Enter Login Information </Typography>
                           <Formik
                                initialValues={{ logging: '',
                                            passwording: '' }}
                                validationSchema={validationSchema}
                                onSubmit={values => {
                                    //console.log(values);
                                     if (values.logging === "admin@email.com" && values.passwording === "123abc") {
                                                    sessionStorage.setItem('token', JSON.stringify(values.logging));
                                                    history.push('/addcar');
                                            }
                                            else{
                                                alert('Email & Password do not match Click again');
                                            }
                                }} >
                           {({ handleSubmit, handleChange, values, errors }) => (
                                <form onSubmit={handleSubmit}>
                                    <TextField type = "text" label="login" variant="outlined"  
                                    onChange = {handleChange} value = {values.logging} name = "logging"
                                    />{errors.logging ? <div style={{color: "red"}}>{errors.logging}</div> : null}
                                        <br/><br/>

                                    <TextField type="password"  label="password" variant="outlined" 
                                    onChange = {handleChange}  value = {values.passwording} name = "passwording" />
                                    {errors.passwording ? <div style={{color: "red"}}>{errors.passwording}</div> : null}

                                    <br/><br/>

                                        <Button variant = "outlined"  type = "submit" style = {styles.button} endIcon= {<KeyboardArrowRightIcon/>}>Login</Button>
                                </form>
                            )}
                             </Formik>
                        </Box>
                    </Box>
                </div>
          </>
     ); 
}
 
export default  Login;