import {Box, CssBaseline, TextField, Button, Typography} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {useState} from 'react';
import Image from '../images/potrait1.jpg'; 
import {useFormik} from 'formik';
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
        const initialValues = {
                logging: '',
                passwording: ''
            }
        const [login, setLogin] = useState('');
        const [password, setPassword] = useState('');
        const onSubmit = (values) =>{
                setLogin(values.logging);
                setPassword(values.passwording);
                if (login === "admin@email.com" && password === "123abc") {
                        sessionStorage.setItem('token', JSON.stringify(login));
                        history.push('/addcar');
                }
                else{
                    alert('Email & Password do not match Click again');
                }
                
            }
        
       const validationSchema = Yup.object({
           logging: Yup.string().email().required("Please enter the required field"), //.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/, "Invalid Email"),
           passwording: Yup.string().required("Please enter the required field")//.matches(/^[a-z0-9]+$/i, "Use alphanumeric")
       })
            const formik = useFormik({
                initialValues,
                onSubmit,
                validationSchema,
                currState:"",
            })
    return ( 
        <>
            <CssBaseline/>
            <div style={{ width: '100%'}}>
                <form>
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper" style={styles.box}>
                        <Box p={1} bgcolor="grey.300" style={styles.leftContainer}>
                        </Box>
                        <Box p={1} bgcolor="grey.300">
                            <Typography variant = 'subtitle1' style = {styles.typo}>Enter Login Information </Typography>

                            <TextField label="login"  name = "logging" variant="outlined"  value = {formik.values.logging}
                             onChange = {formik.handleChange} onBlur = {formik.handleBlur}
                            />{formik.touched.logging && formik.errors.logging ? <div style={{color: "red"}}>{formik.errors.logging}</div> : null}
                                <br/><br/>
                            <TextField label="password" type="password"  name = "passwording" variant="outlined"  value = {formik.values.passwording}
                              onChange = {formik.handleChange} onBlur = {formik.handleBlur}
                            />{formik.touched.passwording && formik.errors.passwording ? <div style={{color: "red"}}>{formik.errors.passwording}</div> : null}

                            <br/><br/>

                                <Button variant = "outlined"  style = {styles.button} onClick={formik.handleSubmit} endIcon= {<KeyboardArrowRightIcon/>}>Login</Button>
                               
                        </Box>
                    </Box>
                </form>
            </div>
          </>
     ); 
}
 
export default  Login;