import {useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = {
        button:{
                fontSize: 15,
                width: 250,
                backgroundColor: '#1d1e22',
                padding: 10,
                color: "#feda6a",
                display: "flex"
            },
        button1:{
                fontSize: 15,
                width: 250,
                backgroundColor: 'grey',
                padding: 10,
                display: "flex"
            }
};


const Logout = () => {

    const history = useHistory();
    
    const signOut = () => {
        sessionStorage.removeItem("token");
        history.push('/');
    };
    
    //console.log(disable);
    return (  
        <>
        {sessionStorage.getItem('token')!==null ? <Button variant = "outlined" style={styles.button}  onClick={signOut} endIcon= {<ExitToAppIcon/>}>Signout</Button> : <Button variant = "outlined" disabled style={styles.button1} onClick={signOut} endIcon= {<ExitToAppIcon/>}>Signout</Button>}
        </>
    );
}
 
export default Logout;