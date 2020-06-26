import React from "react"
import "../styles/index.css"
import Layout from "../layouts/Layout"

import Seo from "../components/Seo"
import HeroChoice from "../components/HeroChoice"
import CardsSection from "../components/CardsSection"

const DATA = {
  hero: {
    title: "Activation",
    subtitle: "...",
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
            url: "/images/test-thumb.png",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "the-riddle-of-washpool-gully",
          title: "The Riddle of Washpool Gully",
          subtitle:
            "Far beyond the outskirts of the big city, near a tiny town that nearly everyone forgot, lay a dry creek bed of no special significance.",
          previewImage: {
            url: "/images/test-thumb.png",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "the-wider-earth",
          title: "The Wider Earth",
          subtitle:
            "With a bevy of astonishing puppets bringing to life creatures great and small.",
          previewImage: {
            url: "/images/test-thumb.png",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "laser-beak-man",
          title: "Laser Beak Man",
          subtitle:
            "Presented by Dead Puppet Society, La Boite and Brisbane Festival in association with PowerArts",
          previewImage: {
            url: "/images/test-thumb.png",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "storm-boy",
          title: "Storm Boy",
          subtitle:
            "Presented by Melbourne Theatre Company and Queensland Theatre in association with Dead Puppet Society",
          previewImage: {
            url: "/images/test-thumb.png",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "argus",
          title: "Argus",
          subtitle:
            "Step into this whimsical wonderland where table tops grow grass and water bottles become the depths of the ocean.",
          previewImage: {
            url: "/images/test-thumb.png",
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
      <CardsSection cardsData={DATA.cards.edges} parent="education" />
    </Layout>
  )
}

export default Production
