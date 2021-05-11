import {Box, CssBaseline, Typography, Grid, Card, CardMedia, CardContent} from '@material-ui/core';
import {useState, useEffect} from 'react';
const styles = {
      cardGrid:{
        //padding: '20px 0',
    },
    card:{
        height: '100%',
        width: '50vw',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        display: 'flex',
        paddingTop: '56.25%', //16:9
        height: "50vh"
    },
    cardContent:{
        display: 'flex',
        flexGrow:1
    },
};

const ViewPage = (id) => {
    //console.log(id.location.state)
    const[data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/vehicleData')
        .then(res => res.json())
        .then(data => setData(data))

    },[]);
    const collectionID = 2102317;
     function search(rows)
        {
            if(id){
                //console.log('here',id.location.state)
                return rows.filter(d => d.id === id.location.state);
            }
        }

    return ( 
        <>
            <CssBaseline/>
                           <Box p={1} bgcolor="grey.300" style ={{height: "100vh"}}>
                             {search(data).map((car)=>(
                                <Grid item key={car.id} xs={12} sm={6} md={4}>
                                    <Card style={styles.card}>
                                        <CardMedia  style={styles.cardMedia} image = {`https://source.unsplash.com/collection/${collectionID}`} title="image title"/>
                                        <CardContent >
                                            <Typography variant="h5">{car.make} {car.model}</Typography>
                                            <Typography variant = "h6" align="right"> {car.retailprice}</Typography>
                                            <Typography variant = "subtitle1"> Features</Typography>
                                            <Typography variant = "subtitle2"> {car.features}</Typography>
                                            <Typography variant = "subtitle2">Year: {car.year}</Typography>
                                            <Typography variant = "subtitle2">Qty: {car.qty}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}  
                            </Box>
        </>
     );
}
 
export default ViewPage;