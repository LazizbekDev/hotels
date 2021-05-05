import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components/macro'
import { Button } from './Button';
import { IoMdArrowRoundForward, IoMdArrowBack } from 'react-icons/io'

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HerWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const HeroSlider = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0,0,0,.2) 0%,
            rgba(0,0,0,.2) 50%,
            rgba(0,0,0,.6) 100%
        )
    }
`;

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h2 {
        font-size: clamp(1rem 8vw 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }
    
    p{
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        margin-bottom: 1.2rem;
    }
`;
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;
const SliderButtons = styled.div`
    position: absolute;
    bottom: 100px;
    right: 50px;
    display: flex;
    z-index: 10;
`;
const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background-color: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: .3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.5);
    }
`;

const PreArrey = styled(IoMdArrowBack)`
    ${arrowButtons}
`;

const NextArrey = styled(IoMdArrowBack)`
    ${arrowButtons}
    transform: rotate(180deg);
    &:hover {
        transform: rotate(180deg) scale(1.5);
    }
`;

const Hero = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === length -1 ? 0 : current + 1))
    //     }

    //     timeout.current = setTimeout(nextSlide, 3000);

    //     return function() {
    //         if(timeout.current) {
    //             clearTimeout(nextSlide, 3000);
    //         }
    //     }
    // }, [current, length])

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    const PrevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <HeroSection>
            <HerWrapper>
                {
                    slides.map((slide, index) => {
                        return (
                            <HeroSlide key={index}>
                                {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt}/>
                                    <HeroContent>
                                        <h2>{slide.title}</h2>
                                        <p>{slide.price}</p>
                                        <Button to={slide.path} primary="true"
                                            css={`max-width: 160px`}
                                        >
                                            {slide.label}
                                            <Arrow/>
                                        </Button>
                                    </HeroContent>
                                </HeroSlider>
                                )}
                            </HeroSlide>
                        )
                    })
                }
                <SliderButtons>
                    <PreArrey onClick={PrevSlide}/>
                    <NextArrey onClick={nextSlide}/>
                </SliderButtons>
            </HerWrapper>
        </HeroSection>
    )
}

export default Hero
