import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Slider from "react-slick"
import { respondTo } from "../styles/mixins"
import Button from "./Button"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Footer = props => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          datoCmsFooter {
            footerGallery {
              alt
              url
            }
            contactText
            newsletterInfo
            newsletterTitle
          }
        }
      `}
      render={data => {
        const {
          footerGallery,
          contactText,
          newsletterTitle,
          newsletterInfo,
        } = data.datoCmsFooter
        return (
          <FooterSection>
            <SliderStyled>
              <Slider {...settings}>
                {footerGallery.map(image => (
                  <SlideImage src={image.url} alt={image.alt} />
                ))}
              </Slider>
            </SliderStyled>

            <FooterInner>
              <Contact>
                <Content>{contactText}</Content>
                <Button to="#" mt="46px">
                  Contact Us
                </Button>
              </Contact>

              <Newsletter>
                <NewsletterTitle>{newsletterTitle}</NewsletterTitle>
                <NewsletterInfo>{newsletterInfo}</NewsletterInfo>
                <Button to="#" mt="46px">
                  Button
                </Button>
              </Newsletter>
            </FooterInner>
          </FooterSection>
        )
      }}
    />
  )
}

// Styled Components
const FooterSection = styled.footer``

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

const SlideImage = styled.img``

const FooterInner = styled.div`
  margin: 0 auto;
  padding: 100px;
  width: 100%;
  max-width: 1440px;
  ${respondTo.md`
    display: flex;
    justify-content: space-between;
  `}
`

const Contact = styled.div`
  width: 100%;
  max-width: 680px;
`

const Content = styled.p`
  color: #000000;
  font-size: 34px;
  font-weight: 300;
  line-height: 1.4;
`

const Newsletter = styled.div`
  width: 100%;
  max-width: 333px;
`

const NewsletterTitle = styled.h4`
  color: #000000;
  font-size: 38px;
  font-weight: 300;
  line-height: 1.2;
`
const NewsletterInfo = styled.p`
  margin-top: 20px;
  color: #000000;
  font-size: 22px;
  line-height: 1.4;
`

export default Footer
