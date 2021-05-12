import {useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useState} from 'react'
const styles = {
     button:{
                fontSize: 15,
                width: 250,
                backgroundColor: '#1d1e22',
                padding: 10,
                color: "#feda6a",
                display: "flex"
            },
};


const Logout = () => {

    const[disable, setDisable] = useState(0);

    const history = useHistory();
    
    const signOut = () => {
        sessionStorage.removeItem("token");
        setDisable(-1)
        history.push('/');
    };
    
    //console.log(disable);
    return (  
        <>
        <Button disable = {disable} variant = "outlined" style={styles.button} onClick={signOut} endIcon= {<ExitToAppIcon/>}>Signout</Button>
        </>
    );
}
 
export default Logout;