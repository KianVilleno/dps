import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { maxWidth } from "../styles/settings"
import { Heading } from "theme-ui"
import Button from "./Button"
import Instagram from "./Footer/Instagram"

const Footer = props => {
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
        const { contactText } = data.datoCmsFooter
        return (
          <FooterSection>
            <Instagram />

            <FooterInner>
              <Contact>
                <Heading
                  as="h4"
                  variant="text2Xl"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 30,
                  }}
                >
                  {contactText}
                </Heading>
                <Button href="/contact" variant="primary">
                  Contact Us
                </Button>
              </Contact>

              {/* <Newsletter>
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
              </Newsletter> */}
            </FooterInner>
          </FooterSection>
        )
      }}
    />
  )
}

// Styled Components
const FooterSection = styled.footer``

const FooterInner = styled.div`
  margin: 0 auto;
  padding: 40px 20px 40px 20px;
  width: 100%;
  max-width: ${maxWidth};
  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 60px 100px 100px 100px;
  }
`

const Contact = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
  margin: 0 auto;
`

// const Newsletter = styled.div`
//   width: 100%;
//   max-width: 333px;
// `

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
