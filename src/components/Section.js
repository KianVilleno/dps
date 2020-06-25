import styled from "@emotion/styled"

const Section = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 80px 0;
  padding-top: ${(props => props.pt) ? props => props.pt : "80px"};
  padding-bottom: ${(props => props.pb) ? props => props.pb : "80px"};
`
export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  padding: 0 25px;
  width: 100%;
  max-width: 1440px;
`

export default Section
