import React, { useState } from 'react'
import { styled } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuContent from './MenuContent';


const Navbar = () => {
      const [menu, setMenu] = useState(true)
      const handleMenu = () => setMenu(!menu);
      return (
            <Container>
                  <Logo>
                        <a href="#">
                              Y-Do List
                        </a>
                  </Logo>
                  <Search>
                        <Form>
                              <input type="text" placeholder='Search...' />
                              <SearchIcon />
                        </Form>
                  </Search>
                  <Navigate>
                        <a href="#">About Us</a>
                        <a href="#">Our Blogs</a>
                  </Navigate>
                  <HamburgerMenu onClick={handleMenu}>
                        {menu ? <MenuIcon size={30} /> : <CloseIcon />}
                  </HamburgerMenu   >
                  <>
                        {!menu ? <MenuContent /> : <></>}
                  </>
            </Container>
      )
}

export default Navbar

const Container = styled.div`
  height: 3.5em;
  width: 100%;
  background-color: #1B1818;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  @media (max-width: 764px){
  padding: 0 2rem;
    }
  
  `
const Logo = styled.div`
  a{
      color: #fcfcfc;
      font-size: 24px;
      font-weight: 700;
  }

`
const Navigate = styled.div`
display: flex;
gap: 21px;
a{
      color: #fcfcfc;
  }
  
 @media (max-width: 764px){
      display: none
    }
`
const Search = styled.div`
 background-color: white;
 
 input[type="text"]{
     width: 80%;
     outline: none;
     border:none;
     padding: 0 7px;
 }

`
const Form = styled.div`
 display: flex;
 justify-content: space-between;
 cursor: pointer;
 

 @media (max-width: 764px){
      display: none
    }
`
const HamburgerMenu = styled.div`
 color: white;
 position: fixed;
 right: 5%;
 cursor: pointer;
 @media (min-width: 764px){
      display: none
    }
`
