import {CssBaseline, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button} from '@material-ui/core';
import {DeleteRounded} from '@material-ui/icons';
import {useHistory} from 'react-router-dom';
import NumberFormat from 'react-number-format';

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
    },
    delete:{
        display: 'flex',
       alignItems: "right"
    }
};

const FilteredData = ({data}) => {

    //console.log(data)
    const history = useHistory();

    const handleClick = (id)=>{
            console.log(id)
            fetch('http://localhost:8000/vehicleData/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(()=>{history.push('/')})
    }
    const handleView = (id)=>{
         history.push({
             pathname: '/view',
             state: id
         })
    }

    //data.sort((a, b) => (a.make > b.make) ? 1 : -1) || data.sort((a, b) => (a.model > b.model) ? 1 : -1)
    // if(data.sort((a, b) => (a.make > b.make) ? 1 : -1))
    // {
    //     data.sort((a, b) => (a.make > b.make) ? 1 : -1)
    // }
    // data.sort(function(a, b) {
    // if (a.make > b.make) return 1;
	// if (a.make < b.make) return -1;

    // if (a.model > b.model) return 1;
	// if (a.model < b.model) return -1;
    // });
    const collectionID = 2102317;
    return (  
        <>
            <CssBaseline/>
            <main>
                <Container maxWidth='md' style={styles.cardGrid}>
                    <Grid container spacing = {4}>
                    {data.map((car)=>(
                        <Grid item key={car.id} xs={12} sm={6} md={4}>
                            <Card style={styles.card}>
                                <CardMedia  style={styles.cardMedia} image = {`https://source.unsplash.com/collection/${collectionID}`} title="image title"/>
                                <CardContent style={styles.cardContent}>
                                    <Typography variant="h5" gutterBottom>{car.make} {car.model}</Typography>
                                    <Typography variant = "h6" align="right"><NumberFormat value = {car.retailprice} displayType={'text'} thousandSeparator={true}prefix={'$'}/></Typography>
                                    <Typography variant = "subtitle1"> Features</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size ="small" color = "primary" onClick = {()=>handleView(car.id)}>Click to view</Button>
                                    
                                    <Button size ="small" color = "secondary" onClick={()=>handleClick(car.id)}>Delete<DeleteRounded/></Button>
                                    
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </main>
            {/* <footer>
                <Typography align="center" gutterBottom variant="h6">Footer</Typography>
                <Typography align="center" variant = "subtitle1" color = "textSecondary" style={styles.delete}>Some icons here</Typography>
            </footer> */}
        </>
    );
}
 
export default FilteredData;