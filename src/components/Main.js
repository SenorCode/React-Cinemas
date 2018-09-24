import React from 'react'
import styled from 'styled-components'
import Goldenpass from './GoldenPass'
import {Grid, Container, Button, Icon, Header} from 'semantic-ui-react'


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
const Colheader = styled.h2`
    
    font-weight: lighter;
    text-align:center;
    vertical-align:middle;
    line-height:50px;
`
const Centercontent = styled.div`
    text-align:center;
`

const mainbody = () => {
    return(
        <div>
            <Container>
            <Grid>
                <Grid.Column width ={16}>
                    <Background>
                        <Headerstyled> React Cinema</Headerstyled>
                    </Background>
                </Grid.Column>
            </Grid>
            </Container>
            <Grid>
                <Grid.Column width ={4}>
                    <Colheader> Golden Pass</Colheader>
                    <Centercontent>
                        <Goldenpass>

                        </Goldenpass>
                    </Centercontent>

                 
                </Grid.Column>
                <Grid.Column width ={8}>
                   
                        <Colheader> Featured Films</Colheader>

                    
                </Grid.Column>
                <Grid.Column width ={4}>
                   
                    <Colheader> Stay Connected</Colheader>
                        <Centercontent>
                            <Icon circular  color='blue' name='facebook'size='big' link/> 
                            
                            <Icon name='twitter' color='blue' size='big' circular link/>
                            
                            <Icon name='youtube' color='red' size='big' circular link/>
                            
                            <Icon name='instagram' color='teal'  size='big' circular link />
                        </Centercontent>
                    <Colheader>Sign Up For Emails</Colheader>
                        <Centercontent>
                            <Icon color='black' name='mail' size='big'/> Learn More
                        </Centercontent>
                        
                    
                </Grid.Column>
            </Grid>

            
        
        </div>
    );
};

export default mainbody;