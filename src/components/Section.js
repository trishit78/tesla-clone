import React from 'react'
// import styled from "styled-componets"
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Wrap bgImage ={props.backgroundImg}>
        <Fade bottom>
        <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        </ItemText>
        </Fade>
      
        <Buttons>
            <Fade button>
            <ButtonGroup>
            <LeftButton>
                {props.leftBtnText}
            </LeftButton>
            <RightButton>
            {props.rightBtnText}
            </RightButton>
        </ButtonGroup>
            </Fade>
        
        <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
        
        width:100vw;
        height:100vh;
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        background-image: url('/images/model-s.jpg');
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        background-image:${props=> `url("images/${props.bgImage}")`}

`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    

`

const ButtonGroup = styled.div`
    dispaly:flex;
    margin-bottom:30px;
`
const LeftButton = styled.div`

    background-color: rgba(23 ,26 , 32 , 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 100px;
    opacity :0.85;
    text-transformation:uppercase;
    font-size:12px;
    cursor:pointer;
    margin : 8px;
`
const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;
`

const DownArrow= styled.img`
    margin-top:1px;
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`

const Buttons = styled.div``