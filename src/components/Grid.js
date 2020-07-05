import styled from "@emotion/styled"

const Row = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: ${props =>
      props.flexDirection ? props.flexDirection : "row"};
    justify-content: space-between;
    align-items: stretch;
  }
`

const Column = styled.div`
  width: 100%;
`

export { Row, Column }
