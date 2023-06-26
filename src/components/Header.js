import React ,{useState} from 'react'

import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

import CloseIcon from '@mui/icons-material/Close';

function Header() {

  const [BurgerStatus, setBurgerStatus] = useState(false);



  return (
    <Container>
      <a>
        <img src = "/images/logo.svg" alt="" />
      </a>

      <Menu>
      <p>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
        <a href='#'>Accessories</a>
      </p>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick= {()=>setBurgerStatus(false)}/>
      </RightMenu>
      {/* <BurgerNav show={BurgerStatus}>
        <li>
          <CloseWrapper>
          <CustomClose onClick= {()=>setBurgerStatus(true)}/>
          </CloseWrapper>
          
          <a href='#'>Existing Inventory</a>
          <a href='#'>Used Inventory</a>
          <a href='#'>Trade In</a>
          <a href='#'>Cyber Truck</a>
          <a href='#'>Roadaster</a>
          <a href='#'>IN</a>
          <a href='#'>Existing Inventory</a>
          <a href='#'>Existing Inventory</a>
          <a href='#'>Existing Inventory</a>
          <a href='#'>Existing Inventory</a>

        </li>
      </BurgerNav> */}

    </Container>
  )
}

export default Header

const Container = styled.div`
  
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top :0;
  left:0;
  right:0;
  z-index:1;

  `

const Menu = styled.div`
  postion:fixed;
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;

  a{
    font-weight:600;
    text-decoration:uppercase;
    margin-right:30px;
    margin-left:30px;align-items:center;
    
  }
  padding: 0 20px;
  flex-wrap:nowrap;

  @media (max-width:768px){
    display:none;
  }
`


const RightMenu = styled.div`
display:flex;
a{
  font-weight:600;
  text-decoration:uppercase;
  margin-right:10px;
  margin-left:10px;
  
}
`

const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`

const BurgerNav = styled.div`
  postion :fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:16;
  list-style:none;
  padding:20px;
  transform: ${props=>props.show ? 'translateX(100%)':'translateX(0)'};
  li{
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    a{
      font-weight:600;
    }
  }

`

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
` 

const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
`