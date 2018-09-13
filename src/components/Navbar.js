import React, { Component } from 'react'
import Styled from 'styled-components'
import {
   Menu, 
   Icon, 
   Input, 
   Segment,
   Button,
   Container,
   Dropdown,
   } from 'semantic-ui-react'


export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
      <Menu stackable inverted size='large'borderless attached>
      <Container>
        <Menu.Item>
          <Icon  color='orange' name ='video camera' size='big' />
        </Menu.Item>

        <Menu.Item header>React Cinemas</Menu.Item>
        <Dropdown item text='Browse'>
            <Dropdown.Menu>
              <Dropdown.Item>New Movies</Dropdown.Item>
              <Dropdown.Item>Popular Movies</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>

        <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick}>
          Submit
        </Menu.Item>

         <Menu.Menu position='right'>
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
            Sign Up
          </Menu.Item>

          <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
            Join
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
      
      
      
    </div>
    )
  }
}