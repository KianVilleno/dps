import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Slider from "react-slick"
import { Heading, Text, Input } from "theme-ui"
import Button from "./Button"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SLIDES = [
  {
    src:
      "/images/instagram/deadpuppetsociety_81776944_285367269253649_4045056859983882924_n.jpg",
    url: "https://www.instagram.com/p/CBh3bDinpl6/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_102649375_3974948112622716_6265989303920364268_n.jpg",
    url: "https://www.instagram.com/p/CBKhvg-n9M2/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_97249867_330306931267201_2840925895007275276_n.jpg",
    url: "https://www.instagram.com/p/CACAD8iHWkZ/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_96080595_1300080133715161_7890574089719473988_n.jpg",
    url: "https://www.instagram.com/p/B_4aKrlHBVp/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_95632154_723380445074155_3614028165750630253_n.jpg",
    url: "https://www.instagram.com/p/B_tlU6bHf6Z/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_95037881_134334918172328_337811929804376490_n.jpg",
    url: "https://www.instagram.com/p/B_mSlTKHTbG/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_94444756_1523464211139857_4762390259102982954_n.jpg",
    url: "https://www.instagram.com/p/B_TIsMLniLq/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_93223155_216555029666264_6488606177338359457_n.jpg",
    url: "https://www.instagram.com/p/B-0zi_JHvvg/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_85211035_585689168690261_3148721197193338179_n.jpg",
    url: "https://www.instagram.com/p/B9EWLRInmNm/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_84471942_228705314960881_6896834661047837666_n.jpg",
    url: "https://www.instagram.com/p/B8j74YDnMp7/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_84177242_119912932771763_4186290435444184837_n.jpg",
    url: "https://www.instagram.com/p/B8dY79onYqf/",
  },
  {
    src:
      "/images/instagram/deadpuppetsociety_80460510_526853598038263_8783375829756966261_n.jpg",
    url: "https://www.instagram.com/p/B7cV-a_HJMf/",
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
                    <a href={image.url} target="_blank" rel="noreferrer">
                      <img
                        src={image.src}
                        alt="Dead Puppet Society Instagram"
                        key={index}
                      />
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

const Newsletter = styled.div`
  width: 100%;
  max-width: 333px;
`

// const NewsletterTitle = styled.h4`
//   color: #000000;
//   font-size: 38px;
//   font-weight: 300;
//   line-height: 1.2;
// `
// const NewsletterInfo = styled.p`
//   margin-top: 20px;
//   color: #000000;
//   font-size: 22px;
//   line-height: 1.4;
// `

export default Footer
