import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Slider from "react-slick"
import { Heading, Text, Input } from "theme-ui"
import { respondTo } from "../styles/mixins"
import Button from "./Button"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SLIDES = [
  {
    src:
      "/images/instagram/deadpuppetsociety_69942689_2485671011509310_2055107151029991759_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_71139380_163530531507460_1617971732277606146_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_73456027_521622068626531_4797977983415736310_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_75358247_150952449508859_6132501989742779491_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_78815167_2610979492342973_6135854558599552428_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_80460510_526853598038263_8783375829756966261_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_80871921_652509001957353_3527640021637708308_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_81776944_285367269253649_4045056859983882924_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_81779850_175128393545941_6575487550598675621_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_82602988_495437921175334_5432244398227540781_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_84177242_119912932771763_4186290435444184837_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_84444183_508399376535431_4437198581511695460_n.jpg",
    alt: "Hello",
    url: "http://instagram.com",
  },
]

const Footer = props => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
                {SLIDES.map((image, index) => (
                  <SlideImage key={`img-${index}`}>
                    <a href={image.url} target="_blank">
                      <img src={image.src} alt={image.alt} key={index} />
                    </a>
                  </SlideImage>
                ))}
              </Slider>
            </SliderStyled>

            <FooterInner>
              <Contact>
                <Heading
                  as="h4"
                  variant="textXl"
                  sx={{
                    marginBottom: 30,
                    "@media only screen and (min-width: 992px)": {
                      maxWidth: 590,
                    },
                  }}
                >
                  {contactText}
                </Heading>
                <Button href="/contact" variant="primary">
                  Contact Us
                </Button>
              </Contact>

              <Newsletter>
                <Heading
                  as="h4"
                  variant="textXl"
                  sx={{
                    color: "textOther",
                    marginBottom: 30,
                  }}
                >
                  {newsletterTitle}
                </Heading>
                <Text as="p" variant="textBase">
                  {newsletterInfo}
                </Text>
                <Input placeholder="Email address" />
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
  margin-top: 40px;
  width: 100%;
  overflow: hidden;
  height: auto;

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slider {
    .slick-arrow:focus {
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

const SlideImage = styled.div`
  padding: 0 20px;
  &:focus {
    outline: none;
  }
  a {
    display: block;
    &:focus {
      outline: none;
    }
  }
  img {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`

const FooterInner = styled.div`
  margin: 0 auto;
  padding: 100px;
  padding-top: 60px;
  width: 100%;
  max-width: 1440px;
  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
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
