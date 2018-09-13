import React, {Component} from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import { Container } from 'semantic-ui-react';


class App extends Component {
    render() {
        return (
            <Container fluid>
            <Navbar></Navbar>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
            </Container>
        );
    }
}

export default App;