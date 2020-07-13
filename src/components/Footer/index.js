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
          allContentfulGlobal(
            limit: 1
            filter: { title: { eq: "Global Settings" } }
          ) {
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
            <FooterWrap>
              <Flex sx={{ flexWrap: "wrap" }}>
                <Box
                  p={3}
                  sx={{
                    width: ["100%", `${(7.5 / 12) * 100}%`],
                    marginLeft: [0],
                    marginRight: [0, `${(0.5 / 12) * 100}%`],
                  }}
                >
                  <Contact>
                    <Heading
                      as="h4"
                      variant="textXl"
                      sx={{
                        fontWeight: "bold",
                        marginBottom: 30,
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
                  p={3}
                  sx={{
                    width: ["100%", `${(4 / 12) * 100}%`],
                    marginRight: [0],
                  }}
                >
                  <Newsletter
                    heading={newsletterHeading}
                    text={newsletterText}
                  />
                </Box>
              </Flex>
            </FooterWrap>
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

const FooterWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
