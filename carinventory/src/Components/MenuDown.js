import {useState} from 'react';
import {TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';

const styles = {
    menubar :{
        margin:"0",
        padding:"10px",
        // height:"32px",
        float:"left",
        width:"300px",
        display:"block",
        lineHeight:"30px",
        textAlign:"center",
        color:"white",
        textDecoration:"none",
        backgroundcolor:"solid white",
        border:"1px solid white",
    },
};
const MenuDown = ({datasample}) => {

        const [typed, setType] = useState('');
        const [maked, setMake] = useState('');
        const [modeled, setModel] = useState('');
        const [featured, setFeatures] = useState('');
    console.log(typed,maked,modeled,featured);

    const type = [...new Set(datasample.map((dat) => dat.type))];
    const make = [...new Set(datasample.map((dat,index) => dat.make))];
    const model = [...new Set(datasample.map((dat,index) => dat.model))];
    const features = [...new Set(datasample.map((dat,index) => dat.features))];
    
    return (  
        <>
        
        <Autocomplete  options = {type} getOptionLabel = {(make)=>make}
                style={styles.menubar}  onChange={(e,v)=> setType(v)}
                renderInput = {(params)=>(
                    <TextField {...params} label = "Type" variant = "outlined"  onChange={(e)=> setType(e.target.value)}/>
                )}
            />
            <Autocomplete options = {make} getOptionLabel = {(make)=>make} onChange={(e,v)=> setMake(v)}
                style={styles.menubar}
                renderInput = {(params)=>(
                    <TextField {...params} label = "Make" variant = "outlined" onChange={(e)=> setMake(e.target.value)}/>
                )}
            />
            <Autocomplete options = {model} getOptionLabel = {(model)=>model} onChange={(e,v)=> setModel(v)}
                style={styles.menubar}
                renderInput = {(params)=>(
                    <TextField {...params} label = "Model" variant = "outlined" onChange={(e)=> setModel(e.target.value)}/>
                )}

            />
            <Autocomplete options = {features} getOptionLabel = {(features)=>features} onChange={(e,v)=> setFeatures(v)}
                style={styles.menubar}
                renderInput = {(params)=>(
                    <TextField {...params} label = "Features" variant = "outlined" onChange={(e)=> setFeatures(e.target.value)}/>
                )}
            />
        </>
    );
}
 
export default MenuDown;