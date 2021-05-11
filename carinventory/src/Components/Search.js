import SearchBar from 'material-ui-search-bar';
import {useState, useEffect} from 'react';
import FilteredData from '../Pages/FilteredData';
import {FormControl, InputLabel, Select, MenuItem, Input} from '@material-ui/core';
import Logout from '../Pages/Logout';

const styles = {
    menubar :{
        margin: "15px",
        padding:"5px",
        // height:"32px",
        //float:"left",
        width:"230px",
        //float: "left",
        lineHeight:"20px",
        //textAlign:"left",
        textColor:"black",
        textDecoration:"none", 
    },
    formcontrol:{
        padding:"0px 25px",
        textDecoration:"none", 
    },
    searchbox:{
        // display: "flex",
        width:1030,

    },
    divbox:{
        display: "flex",
        //width:"530px",

    }
};

const Search = () => {
    const[keyword, setKeyword] = useState('');
    const[data,setData] = useState([])
    const [type, setType] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [features, setFeatures] = useState('');
    //console.log(typed,maked,modeled,featured);

    useEffect(()=>{
        fetch('http://localhost:8000/vehicleData')
        .then(res => res.json())
        .then(data => setData(data))

    },[]);
    const typed = [...new Set(data.map((dat) => dat.type))];
    const maked = [...new Set(data.map((dat,index) => dat.make))];
    const modeled = [...new Set(data.map((dat,index) => dat.model))];
    const featured = [...new Set(data.map((dat,index) => dat.features))];
     
    //console.log(data,keyword); 
    //(rows.filter((row)=> row.type.toLowerCase().indexOf(keyword) > -1))
    data.sort(function(a, b) 
    {
        if (a.make > b.make) return 1;
        if (a.make < b.make) return -1;

        if (a.model > b.model) return 1;
        if (a.model < b.model) return -1;
    });

    // function filter(rows){
    //     if(maked!==null || maked!==""){
    //         console.log('here',maked)
    //         return (rows.filter((row)=> row.make.toLowerCase().indexOf(maked) > -1))
    //     }
    // }

    function search(rows)
    {
        if(type){
                //console.log('here',typed,type)
                return rows.filter(d => d.type.toLowerCase().indexOf(type.toLowerCase()) > -1)
            }
        if(make){
            return rows.filter(d => d.make.toLowerCase().indexOf(make.toLowerCase()) > -1)
        }
        if(model){
            return rows.filter(d => d.model.toLowerCase().indexOf(model.toLowerCase()) > -1)
        }
        if(features){
            return rows.filter(d => d.features.toLowerCase().indexOf(features.toLowerCase()) > -1)
        }
            else{
                return rows.filter(({type, make, model}) => {
            
            return type.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
                make.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
                model.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            })
                
            }
            
        
    }
    
    return(
       <>
        <div style = {styles.divbox}>
            <div>
            <SearchBar style = {styles.searchbox} value = {keyword} onInput={(e) => setKeyword(e.target.value)} onBlur={(e) => setKeyword(e.target.value)} placeholder="Search Body Type, Make, Model or Features" autoFocus/>
            </div>
            <div>
            <Logout/>
            </div>
        </div>
            <br/>
            <>
                    <FormControl style={styles.formcontrol} xs={12} sm={6} md={4} onSelect={(e) => setType(e.target.value)}>
                        <InputLabel id="type">Type</InputLabel>
                        <Select labelId="type" style={styles.menubar} id="demo-mutiple-name" value ={type}
                        onChange={(e) => setType(e.target.value)} input={<Input />}>
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        {typed.map((name) => (
                            <MenuItem key={name} value={name}>
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <FormControl style={styles.formcontrol} xs={12} sm={6} md={4}>
                        <InputLabel id="make">Make</InputLabel>
                        <Select labelId="make" style={styles.menubar}id="demo-mutiple-name" value={make}
                        onChange={(e) => setMake(e.target.value)} input={<Input />}>
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        {maked.map((name) => (
                            <MenuItem key={name} value={name}>
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                   <FormControl style={styles.formcontrol} xs={12} sm={6} md={4}>
                        <InputLabel id="model">Model</InputLabel>
                        <Select labelId="model" style={styles.menubar} id="demo-mutiple-name" value={model}
                        onChange={(e) => setModel(e.target.value)} onBlur={(e) => setKeyword(e.target.value)}input={<Input />}>
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        {modeled.map((name) => (
                            <MenuItem key={name} value={name}>
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <FormControl style={styles.formcontrol} xs={12} sm={6} md={4}>
                        <InputLabel id="features">Features</InputLabel>
                        <Select labelId="features" style={styles.menubar} id="demo-mutiple-name" value={features}
                        onChange={(e) => setFeatures(e.target.value)} input={<Input />}>
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        {featured.map((name) => (
                            <MenuItem key={name} value={name}>
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
            </>
            <FilteredData data = {search(data)}/>
       </>
    )
    
}
 
export default Search;
 