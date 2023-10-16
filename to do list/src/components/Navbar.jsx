import React from 'react'
import { styled } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
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
            </Container>
      )
}

export default Navbar

const Container = styled.div`
  height: 39px;
  width: 100%;
  background-color: #1B1818;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
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
`