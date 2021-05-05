import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;
const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    }
`;
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;
const ColumnRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '2' : '1')};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`;

const InfoSection = (props) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{props.heading}</h1>
                    <p>{props.paragraph}</p>
                    <p>{props.paragraph2}</p>

                    <Button to="/homes" primary="true">
                        {props.label}
                    </Button>
                </ColumnLeft>

                <ColumnRight reverse={props.reverse}>
                    <img src={props.image} alt="homes"/>                
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
