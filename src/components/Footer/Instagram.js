import React from "react"
import styled from "@emotion/styled"
import { Flex, Box } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import useWindowSize from "../../hooks/useWindowSize"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Instagram = () => {
  const windowSize = useWindowSize()
  const slidesToShow = windowSize.width > 1000 || !windowSize.width ? 4 : 2

  const slideSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 20) {
            nodes {
              id
              thumbnails {
                src
                config_width
                config_height
              }
            }
          }
        }
      `}
      render={data => {
        const images = data.allInstaNode.nodes.map((node, index) => {
          return (
            <SlideImage key={`img-${index}`}>
              <ImageWrap>
                <a
                  href={`https://instagram.com/p/${node.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={node.thumbnails[4].src} alt="" />
                </a>
              </ImageWrap>
            </SlideImage>
          )
        })
        return (
          <Wrap>
            <Flex>
              <Box width={[1 / 2, 1]} px={2}>
                <p>
                  Follow us on&nbsp;
                  <a
                    href="https://www.instagram.com/happy_haus/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <u>Instagram</u>
                  </a>
                </p>
              </Box>
            </Flex>
            <Flex flexWrap="wrap">
              <SliderStyled>
                <Slider {...slideSettings}>{images}</Slider>
              </SliderStyled>
            </Flex>
          </Wrap>
        )
      }}
    />
  )
}

export default Instagram

const Wrap = styled.div`
  margin-top: 85px;
  margin-bottom: 85px;
  @media (max-width: 800px) {
    margin-top: 5vw;
    margin-bottom: 5vw;
  }
  a {
    color: "#000";
  }
`

const ImageWrap = styled.div`
  img {
    max-width: 100%;
    display: block;
  }
  @media (max-width: 800px) {
    margin-bottom: 5vw;
  }
`

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
