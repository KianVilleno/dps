// Imports
import React from "react"
import { Heading, Text, Image } from "theme-ui"
import Section, { Container } from "./Section"
import { Row, Column } from "./Grid"

// Component
export const ContentBlock = props => {
  const { contentBlocks } = props
  return (
    <Section>
      <Container>
        {contentBlocks.map((contentBlock, index) => {
          const { title, content, image } = contentBlock
          return (
            <>
              <Heading
                as="h3"
                variant="text2Xl"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                  margin: "100px auto 100px auto",
                  "@media screen and (min-width: 992px)": {
                    maxWidth: 1045,
                  },
                }}
              >
                {title}
              </Heading>
              <Row>
                <Column>
                  <Text
                    as="p"
                    variant="textBase"
                    sx={{
                      width: "100%",
                      "@media screen and (min-width: 992px)": {
                        maxWidth: 556,
                      },
                    }}
                  >
                    {content}
                  </Text>
                </Column>
                <Column>
                  <Image
                    src={image.url}
                    alt={image.alt}
                    sx={{
                      display: "block",
                      width: "100%",
                      "@media screen and (min-width: 992px)": {
                        maxWidth: 480,
                        marginLeft: "auto",
                      },
                    }}
                  />
                </Column>
              </Row>
            </>
          )
        })}
      </Container>
    </Section>
  )
}
