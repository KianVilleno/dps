import styled from "@emotion/styled"
import { respondTo } from "../styles/mixins"

const Row = styled.div`
  width: 100%;
  ${respondTo.md`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  `}
`

const Column = styled.div`
  width: 100%;
`

export { Row, Column }
