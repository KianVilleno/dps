// Imports
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Box, Heading, Image } from "theme-ui"
import { Button } from "../Button"
import Section, { Container } from "../Section"
import { Row, Column } from "../Grid"

// Component
const AboutSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query AboutSection {
          datoCmsAboutSection {
            image {
              alt
              url
            }
            title
          }
        }
      `}
      render={data => {
        const { title, image } = data.datoCmsAboutSection
        return (
          <Section>
            <Container>
              <Row>
                <Column>
                  <Box
                    sx={{
                      textAlign: "center",
                      width: "100%",
                      marginBottom: 30,
                    }}
                  >
                    <Heading
                      as="h4"
                      variant="text2Xl"
                      sx={{ marginBottom: 30 }}
                    >
                      {title}
                    </Heading>
                    <Button href="/company" variant="primary">
                      About us
                    </Button>
                  </Box>
                </Column>
                <Column>
                  <Image
                    src={image.url}
                    alt={image.alt}
                    sx={{
                      display: "block",
                      "@media only screen and (min-width: 992px)": {
                        maxWidth: 480,
                        marginLeft: "auto",
                        marginRight: 0,
                      },
                    }}
                  />
                </Column>
              </Row>
            </Container>
          </Section>
        )
      }}
    />
  )
}

// Styled Components

// Exports
export default AboutSection
