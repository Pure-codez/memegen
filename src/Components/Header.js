import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`

     display: flex;
    align-items: center;
    height: 50px;
    background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
    color: white;
    padding: 20px;
    .headerImg{
        height: 100%;
        margin-right: 20px;
    }
    .headerTitle{
        font-size: 1.25rem;
        margin-right: auto;
        font-weight: bold;
    }
   .headerProject{
       font-size: 0.75rem;
       font-weight: 500;
   }

`;

function Header() {
  return (
    <HeaderStyle>
            <img src='./trollface.png' alt='' className='headerImg'/>
            <div className='headerTitle'>Meme Generator</div>
            <div className='headerProject'>Course--Project3</div>
    </HeaderStyle>
  )
}

export default Header