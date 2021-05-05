import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Image from '../images/darkSplash.jpg'; 
import Paper from '@material-ui/core/Paper';
import { FiChevronsDown } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';



const styles = {
    link: {
         color: 'inherit', textDecoration: 'inherit'
    },
    button:{
        fontSize: 20,
        textAlign: "center",
        backgroundColor: '#1d1e22',
        padding: 15,
        color: "#feda6a"

    },
    box:{   
        display:"flex" ,
        width:1300,
        height:100,
        alignItems:"center",
        justifyContent:"center" 
        },
    typo:{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            height:150,
            color: "#d4d4dc"
    },
    paperContainer: {
        backgroundSize: "cover",
        height: "100vh",
        backgroundImage: `url(${Image})`
    }
};


const Home = () => {
    return ( 
        <>
         <Paper style={styles.paperContainer}>
              <Typography variant = "h3" style={styles.typo}>Welcome to Our Car Lot</Typography>
              {/* <IconContext.Provider value= {{ color: "#d4d4dc", size: '25px', display: "flex" }}>
                    <div>
                        <FiChevronsDown/>
                    </div>
                </IconContext.Provider> */}
             <Box style={styles.box}>
                <ButtonGroup>
                    
                        <Button size = "large" variant = "contained" color = "primary" 
                            style = {styles.button}>
                                <Link to= '/Inventory' style={styles.link}>View Inventory
                                </Link>
                        </Button>
                        <Button size = "large" variant = "contained" color = "primary"
                            style = {styles.button}>
                            <Link to= '/Addcar' style={styles.link}>Login to Add Cars
                            </Link>
                        </Button>
                </ButtonGroup>
                </Box>
            </Paper>
        </>
     );
}
 
export default Home;