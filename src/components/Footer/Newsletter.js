import React from "react"
import styled from "@emotion/styled"
import { Heading, Text, Input } from "theme-ui"

const Newsletter = ({ heading, text }) => {
  return (
    <Wrap>
      <Heading
        as="h4"
        variant="textXl"
        sx={{
          color: "textOther",
          marginBottom: [".6em"],
        }}
      >
        {heading}
      </Heading>
      <Text
        as="p"
        variant="textBase"
        sx={{
          marginBottom: ["1.8em"],
        }}
      >
        {text}
      </Text>
      <InputWrap>
        <Input as="input" placeholder="Email address" />
        <Button />
      </InputWrap>
    </Wrap>
  )
}

const Button = () => {
  return (
    <ButtonEl>
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5 0L38.25 3.41635L47.5836 12.75L51 25.5L47.5836 38.25L38.25 47.5836L25.5 51L12.75 47.5836L3.41635 38.25L0 25.5L3.41635 12.75L12.75 3.41635L25.5 0Z"
          fill="white"
        />
        <path
          d="M35.838 23.662L29.1271 16.9512L27.7129 18.3654L33.3477 24.0001H15V26.0001H33.4999L27.7188 31.7812L29.133 33.1955L35.838 26.4905L35.8477 26.5002L37.2619 25.0859L37.2522 25.0762L37.2635 25.065L35.8492 23.6508L35.838 23.662Z"
          fill="#2C2D48"
        />
      </svg>
    </ButtonEl>
  )
}

export default Newsletter

const Wrap = styled.div`
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding-right: 20%;
  }
`

const InputWrap = styled.div`
  display: flex;
`

const ButtonEl = styled.button`
  background: transparent;
  outline: none;
  border: none;
  width: 51px;
  height: 51px;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
  }
`
