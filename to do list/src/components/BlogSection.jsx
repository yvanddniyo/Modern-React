import React from 'react';
import { styled } from 'styled-components';

const BlogSection = () => {
      return (
            <Container>
                  <h1>Our  Blog pages</h1>
            </Container>
      )
}

export default BlogSection

const Container = styled.div`
padding-top: 4rem;
height: 100vh;
padding-bottom: 2rem;

h1{
      font-weight: 700;
      text-align: center;
}
`