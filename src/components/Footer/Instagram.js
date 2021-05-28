import React from "react"
import styled from "@emotion/styled"
import { Flex } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import useWindowSize from "../../hooks/useWindowSize"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Instagram = () => {
  const windowSize = useWindowSize()
  const slidesToShow = windowSize.width > 768 || !windowSize.width ? 6 : 4
  const slidesToScroll = windowSize.width > 768 || !windowSize.width ? 3 : 2

  const slideSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  }

  // return (
  //   <WrapOuter>
  //     <Wrap></Wrap>
  //   </WrapOuter>
  // )

  return (
    <>
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
                localFile {
                  childImageSharp {
                    fixed(height: 500, width: 500) {
                      srcWebp
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          data = data.allInstaNode.nodes.filter(node => node.localFile !== null)
          const images = data.map((node, index) => {
            return (
              <SlideImage key={`img-${index}`}>
                <ImageWrap>
                  <a
                    href={`https://instagram.com/p/${node.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={node.localFile.childImageSharp.fixed.srcWebp}
                      alt=""
                    />
                  </a>
                </ImageWrap>
              </SlideImage>
            )
          })

          return (
            <WrapOuter>
              <Wrap>
                <Flex flexWrap="wrap">
                  <SliderStyled>
                    <Slider {...slideSettings}>{images}</Slider>
                  </SliderStyled>
                </Flex>
              </Wrap>
            </WrapOuter>
          )
        }}
      />
    </>
  )
}

export default Instagram

const WrapOuter = styled.div`
  width: 100%;
  overflow-x: hidden;
`

const Wrap = styled.div`
  margin-top: 5vw;
  margin-bottom: 5vw;
  margin-left: -15%;
  margin-right: -15%;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-top: 1vw;
    margin-bottom: 85px;
    margin-left: -10%;
    margin-right: -10%;
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
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
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
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    padding: 0 10px;
  }
`
