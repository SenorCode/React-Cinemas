import React from 'react'
import{Container, Grid, GridRow, Header} from 'semantic-ui-react'
import styled from 'styled-components'



const Footerstyled = styled.div`
    min-height:300px;
    background-color:black;
    color:white;
`

const footer =() => {
    return (
        <Footerstyled>
            <Container>
                <Grid  relaxed='very' columns={4}>
                    <Grid.Row >
                        <Grid.Column>
                            <Header inverted>Customer Service</Header>
                            <p>Help & FAQ</p>
                            <p>Contact Us</p>
                            <p>Para Ayuda</p>
                            <p>Shipping and Delivery</p>
                        </Grid.Column>

                        <Grid.Column >
                        <Header inverted>Customer Service</Header>
                            <p>Help & FAQ</p>
                            <p>Contact Us</p>
                            <p>Para Ayuda</p>
                            <p>Shipping and Delivery</p>
                                
                        </Grid.Column>

                        <Grid.Column >
                        <Header inverted>Customer Service</Header>
                            <p>Help & FAQ</p>
                            <p>Contact Us</p>
                            <p>Para Ayuda</p>
                            <p>Shipping and Delivery</p>
                                
                        </Grid.Column>
                        <Grid.Column>
                        <Header inverted>React Cinemas Inc</Header>
                            <p>Corporate Site</p>
                            <p>Careers</p>
                            <p>Press Room</p>
                            <p>Investors</p>
                                
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        </Footerstyled>

    );
};


export default footer;