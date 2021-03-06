import React from "react";
import { Typography, AppBar,Button, Card, CardContent, CardMedia, CardActions, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./style";

const cards = [1,2,3,4,5,6,7,8,9];
const App = () => {
    const classes = useStyles(); 
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                        <Typography variant="h6">
                             Photo Album
                        </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" style={{marginTop:'80px'}}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom> Photo Album</Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, sequi iure quam quis aliquam iusto omnis, expedita animi aperiam maiores autem eaque deserunt? Ipsam, sit excepturi quaerat fuga quis soluta.
                        </Typography>
                    </Container>
                </div>
                <div className={classes.button}>
                    <Grid container spacing={2} justify="center">
                        <Grid item >
                            <Button variant="contained" color="primary">
                                See My Photos
                            </Button>
                        </Grid>

                        <Grid item >
                            <Button variant="outlined" color="primary">
                                See My Photos
                            </Button>
                        </Grid>
                    </Grid>
                </div>

                <Container className= {classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card)=>(

                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image Title"/>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur sed a iusto ipsam ut, iste quibusdam exercitationem mollitia, maxime et nihil. Vel, nam? Qui saepe, vel quisquam sed odit ipsa.
                                    </Typography>
                                    <CardActions>
                                        <Button size ="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                        ))}
                        
                    </Grid>
                </Container>

            </main>
            <footer className={classes.footer}>
                <Typography align="center" variant="h5" color="primary" gutterBottom>Footer</Typography>
                <Typography align="center" variant="subtitle1" color="text-secondary" gutterBottom>This is the subtitle text</Typography>
            </footer>
        </>
    )
}

export default App;