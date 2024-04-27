import React from "react";
import "./App.css";
import styled from "styled-components";
import {CardContainer} from "./components/CardContainer";
import {Button} from "./components/Button";
import {TextContent} from "./components/TextContent";
import cardImg from './assets/images/card-img.png';


function App() {
    return (
        <Section>
            <CardContainer>
                <img src={cardImg} alt="дюна"/>
                <TextContent>
                    <h1>Headline</h1>
                    <p>Faucibus. Faucibus. Sit sit sapien sit <br/>tempusrisu ut. Sit molestie ornare in venen.</p>
                    <Button btnType={"primary"}>See more</Button>
                    <Button btnType={"outlined"}>Save</Button>
                </TextContent>
            </CardContainer>
        </Section>
    );
}

export default App;

const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

