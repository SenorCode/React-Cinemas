import React from 'react'
import styled from 'styled-components'
import {Grid, Container} from 'semantic-ui-react'


const Background = styled.div`
    background-color: black;
    color:white;
    width:100%;   
    min-height:100px;
`
const Headerstyled = styled.h1`
    font-size: 2.6em;
    font-weight: lighter;
    text-align:center;
    vertical-align:middle;
    line-height:100px;
`
const Colheader = styled.h1`
    
    font-weight: lighter;
    text-align:center;
    vertical-align:middle;
    line-height:100px;
`

const mainbody = () => {
    return(
        <div>
            <Container>
            <Grid>
                <Grid.Column width ={16}>
                    <Background>
                        <Headerstyled> Not just movies</Headerstyled>
                    </Background>
                </Grid.Column>
            </Grid>
            </Container>
            <Grid>
                <Grid.Column width ={4}>
                    <Colheader> VIP Membership</Colheader>
                    <h3>Sign up for exclusives</h3>

                    
                </Grid.Column>
                <Grid.Column width ={8}>
                    <Background>
                        <Colheader> Earn Rewards</Colheader>
                    </Background>
                </Grid.Column>
                <Grid.Column width ={4}>
                   
                        <Colheader> Gift Shop</Colheader>
                    
                </Grid.Column>
            </Grid>

            
        
        </div>
    );
};

export default mainbody;