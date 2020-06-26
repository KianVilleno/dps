import React from "react"
import "../styles/index.css"
import Layout from "../layouts/Layout"

import Seo from "../components/Seo"
import HeroChoice from "../components/HeroChoice"
import CardsSection from "../components/CardsSection"

const DATA = {
  hero: {
    title: "Production",
    subtitle: "Current productions showing across Australia and United States.",
    categories: [],
  },
  cards: {
    edges: [
      {
        node: {
          category: "",
          slug: "ishmael",
          title: "Ishmael",
          subtitle: "...",
          previewImage: {
            url: "/images/thumb-ishmael.jpg",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "the-riddle-of-washpool-gully",
          title: "The Riddle of Washpool Gully",
          subtitle: "...",
          previewImage: {
            url: "/images/thumb-the-riddle-of-washpool-gully.jpg",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "the-wider-earth",
          title: "The Wider Earth",
          subtitle: "...",
          previewImage: {
            url: "/images/thumb-the-wider-earth.jpg",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "laser-beak-man",
          title: "Laser Beak Man",
          subtitle: "...",
          previewImage: {
            url: "/images/thumb-laser-beak-man.jpg",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "storm-boy",
          title: "Storm Boy",
          subtitle: "...",
          previewImage: {
            url: "/images/thumb-storm-boy.jpg",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "argus",
          title: "Argus",
          subtitle: "...",
          previewImage: {
            url: "/images/thumb-argus.jpg",
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
      <Seo title="Production" />
      <HeroChoice
        parent="education"
        title={DATA.hero.title}
        subtitle={DATA.hero.subtitle}
        categories={DATA.hero.categories}
      />
      <CardsSection cardsData={DATA.cards.edges} parent="education" />
    </Layout>
  )
}

export default Production
