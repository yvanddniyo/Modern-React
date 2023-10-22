import React, { useState } from 'react'
import { styled } from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuContent from './MenuContent';
import { Link } from 'react-router-dom';


const Navbar = () => {
      const [menu, setMenu] = useState(true)
      const handleMenu = () => setMenu(!menu);
      return (
            <Container>
                  <Wrapper>
                        <Link to='/'>
                              <Logo>

                                    <p>Y-Do List</p>

                              </Logo>
                        </Link>

                        <Navigate>
                              <li>About Us</li>
                              <Link to="/blogsection">
                                    <li>Our Blogs</li>
                              </Link>
                        </Navigate>
                        <HamburgerMenu onClick={handleMenu}>
                              {menu ? <MenuIcon size={30} /> : <CloseIcon />}
                        </HamburgerMenu   >
                        <>
                              {!menu ? <MenuContent /> : <></>}
                        </>
                  </Wrapper>
            </Container>
      )
}

export default Navbar

const Container = styled.div`
  positiion: relative;
  
  
  `
const Wrapper = styled.div`
overflow: hidden;
position: fixed;
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
position: relative;
  p{
      position: fixed;
      top: 2%;
      color: #fcfcfc;
      font-size: 24px;
      font-weight: 700;
     
  }

`
const Navigate = styled.div`
display: flex;
gap: 21px;
li{
      color: #fcfcfc;
  }
  
 @media (max-width: 764px){
      display: none
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
