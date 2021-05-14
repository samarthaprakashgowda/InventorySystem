import { TextField, Button } from '@material-ui/core';
import {Formik} from 'formik';



const Sample = () => {
    
    
    return ( 
        <form>
            <Formik
                initialValues = {{make: '', model: ''}}
                handleSubmit={(values)=>{
                        console.log(values);
                }}
            >
                {(props)=>(
                    <>
                             <TextField placeholder = "make" onChange={props.handleChange("make")} value = {props.values.make} />
                             <TextField placeholder = "model" onChange={props.handleChange("model")} value = {props.values.model}/>
                            <Button variant = "outlined" onClick={props.handleSubmit}>Submit</Button>
                    </>        

                )}
            </Formik>
        </form>

     );
}
 
export default Sample;