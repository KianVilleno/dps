import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { maxWidth } from "../../styles/settings"
import { Heading, Flex, Box } from "theme-ui"
import Instagram from "./Instagram"
import Newsletter from "./Newsletter"
import TagLink from "../TagLink"

const Footer = () => {
  // const { theme, colorMode } = useThemeUI()

  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulGlobal {
            edges {
              node {
                newsletterHeading
                newsletterText
                footerText {
                  json
                }
                footerLink
                footerLinkText
              }
            }
          }
        }
      `}
      render={data => {
        if (!data.allContentfulGlobal || !data.allContentfulGlobal.edges[0])
          return null

        const { node } = data.allContentfulGlobal.edges[0]
        const {
          newsletterHeading,
          newsletterText,
          footerText,
          footerLink,
          footerLinkText,
        } = node
        return (
          <FooterSection>
            <Instagram />
            <Flex>
              <Box
                p={3}
                sx={{
                  width: ["100%", `${(6 / 12) * 100}%`],
                  marginLeft: [0, `${(1 / 12) * 100}%`],
                  marginRight: [0, `${(1 / 12) * 100}%`],
                }}
              >
                <Contact>
                  <Heading
                    as="h4"
                    variant="textXl"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: 30,
                      paddingRight: "10%",
                    }}
                  >
                    {documentToReactComponents(footerText.json, {})}
                  </Heading>
                  <TagLink to={footerLink} variant="primary">
                    {footerLinkText}
                  </TagLink>
                </Contact>
              </Box>
              <Box
                p={2}
                sx={{
                  width: ["100%", `${(3 / 12) * 100}%`],
                  marginRight: [0, `${(1 / 12) * 100}%`],
                }}
              >
                <Newsletter heading={newsletterHeading} text={newsletterText} />
              </Box>
            </Flex>
          </FooterSection>
        )
      }}
    />
  )
}

const FooterSection = styled.footer`
  margin-top: 1em;
  margin-bottom: 4em;
`

// const FooterInner = styled.div`
//   margin: 0 auto;
//   padding: 40px 20px 40px 20px;
//   width: 100%;
//   max-width: ${maxWidth};
//   @media only screen and (min-width: 992px) {
//     display: flex;
//     justify-content: space-between;
//   }
//   @media (min-width: ${props => props.theme.breakpoints[1]}) {
//     padding: 60px 100px 100px 100px;
//   }
// `

const Contact = styled.div``

export default Footer
