import React from "react"
import styled from "@emotion/styled"
import Slider from "react-slick"
import Section from "./Section"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SimpleSlider = props => {
  const { sectionData } = props

  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Section>
      <PreText>Company</PreText>
      <SliderStyled>
        <Slider {...settings}>
          {sectionData.map(slide => (
            <Slide
              titleOne={slide.titleOne}
              images={slide.slideImages}
              titleTwo={slide.titleTwo}
            />
          ))}
        </Slider>
      </SliderStyled>
    </Section>
  )
}

const Slide = props => {
  const { titleOne, images, titleTwo } = props
  return (
    <SlideStyled>
      <TitleOne>{titleOne}</TitleOne>
      {images.map(image => (
        <SlideImage src={image.url} alt={image.alt} />
      ))}
      <TitleTwo>{titleTwo}</TitleTwo>
    </SlideStyled>
  )
}

// Styled Components
const PreText = styled.h5`
  color: #000000;
  font-size: 22px;
  line-height: 1.4;
  text-align: center;
`

const SliderStyled = styled.div`
  margin: 0 auto;
  max-width: 1440px;

  .slick-slider {
    .slick-arrow:focus {
      background: red;
    }

    .slick-arrow.slick-prev::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      background-image: url(./static/images/arrow-left.svg);
      background-size: contain;
      background-repeat: no-repeat;
    }

    .slick-arrow.slick-next::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      background-image: url(./static/images/arrow-right.svg);
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`

const SlideStyled = styled.div`
  padding: 40px;
`

const TitleOne = styled.h4``

const TitleTwo = styled.h4``

const SlideImage = styled.img``

// Mock Data
const slidesData = [
  {
    titleOne: "Title one",
    imgSrc: "https://www.stevensegallery.com/640/360",
    imgAlt: "Steven Segall",
    titleTwo: "Title two",
  },
  {
    titleOne: "Title one",
    imgSrc: "https://www.stevensegallery.com/640/480",
    imgAlt: "Steven Segall",
    titleTwo: "Title two",
  },
]

export default SimpleSlider
