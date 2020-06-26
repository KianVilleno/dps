import React from "react"
import "../styles/index.css"
import Layout from "../layouts/Layout"
import { Heading } from "theme-ui"

import Seo from "../components/Seo"
import HeroChoice from "../components/HeroChoice"
import CardsSection from "../components/CardsSection"

const DATA = {
  hero: {
    title: "Activation",
    subtitle: "Bringing unique experiences to events and public spaces.",
    categories: [],
  },
  cards: {
    edges: [
      {
        node: {
          category: "",
          slug: "megafauna",
          title: "Megafauna",
          subtitle: "...",
          previewImage: {
            url: "/images/thumb-megafauna.jpg",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "pelicans",
          title: "Pelicans",
          subtitle: "...",
          previewImage: {
            url: "/images/thumb-pelicans.jpg",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "hive-mind",
          title: "Hive Mind",
          subtitle: "...",
          previewImage: {
            url: "/images/thumb-hive-mind.jpg",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "1000-doors",
          title: "1000 Doors",
          subtitle: "...",
          previewImage: {
            url: "/images/dps-thumb-1000-doors.jpg",
            alt: "",
          },
        },
      },
    ],
  },
}

const Production = ({ data }) => {
  return (
    <Layout>
      <Seo title="Activation" />
      <HeroChoice
        parent="education"
        title={DATA.hero.title}
        subtitle={DATA.hero.subtitle}
        categories={DATA.hero.categories}
      />
      <Heading
        as="h2"
        variant="textXl"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          width: "100%",
          maxWidth: 1045,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 0,
          marginBottom: 100,
        }}
      >
        Add whimsy and wonder to your next event or engage passersby with
        one-of-a-kind, laser-cut artefacts or open-air performance. From
        accessible art in public spaces to large-scale installations, we can
        create captivating experiences to wow any crowd. Recent Activations
        include a suite of intriguing new and existing works for cultural
        establishments and corporate organisations such as the Commonwealth
        Games, West Village, State Library of Queensland and Brisbane Festival.
      </Heading>
      <CardsSection cardsData={DATA.cards.edges} parent="education" />
    </Layout>
  )
}

export default Production
