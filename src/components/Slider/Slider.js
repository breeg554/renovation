import React, { Component } from "react"
import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { data } from "../../data-content/slider.js"
import { Title } from "../SectionTitle"

const Wrapper = styled.div`
  width: 100%;
  padding: 0.5em;
  overflow: hidden;
  margin: 1.5em 0;
`
const SliderWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  .slick-arrow {
    z-index: 1;
  }
  .slick-prev {
    left: 1em;
  }
  .slick-next {
    right: 1em;
  }
`
const Slide = styled.div`
  height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    height: 50vh;
  }
`

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const Slides = data.map(slide => (
      <Slide key={slide.id}>
        <img src={slide.img} alt="slider-img" />
      </Slide>
    ))
    return (
      <Wrapper>
        <Title>Ostatnie Projekty</Title>

        <SliderWrapper>
          <Slider {...settings}>{Slides}</Slider>
        </SliderWrapper>
      </Wrapper>
    )
  }
}
