import {CssBaseline, AppBar, Toolbar, InputBase, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button} from '@material-ui/core';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import {useEffect, useState} from 'react';

const styles = {
    cardGrid:{
        padding: '20px 0',
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        paddingTop: '56.25%' //16:9
    },
    cardContent:{
        flexGrow:1
    }
};


const Inventory = () => {

    const [vehicleinfo, setVehicleInfo] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/vehicleData')
        .then(res => res.json())
        .then(data => setVehicleInfo(data))

    },[])
    return (  
        <>
            <CssBaseline/>
            <AppBar position = "relative">
                <Toolbar>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <AssignmentIndRoundedIcon/>
                    <Typography variant = "h6"> Sign In</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container maxWidth='md' style={styles.cardGrid}>
                    <Grid container spacing = {4}>
                    {vehicleinfo.map((car)=>(
                        <Grid item key={car.id} xs={12} sm={6} md={4}>
                            <Card style={styles.card}>
                                <CardMedia  style={styles.cardMedia}image = "https://source.unsplash.com/collection/2102317" title="image title"/>
                                <CardContent style={styles.cardContent}>
                                    <Typography variant="h5" gutterBottom>{car.make} {car.model}</Typography>
                                    <Typography variant = "h6"> {car.retailprice}</Typography>
                                    <Typography variant = "subtitle1"> Features</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size ="small" color = "primary">View</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography align="center" gutterBottom variant="h6">Footer</Typography>
                <Typography align="center" variant = "subtitle1" color = "textSecondary">Some icons here</Typography>
            </footer>
        </>
    );
}
 
export default Inventory;