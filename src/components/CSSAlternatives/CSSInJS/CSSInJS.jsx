import Child from "./Child";
import styled from "styled-components"

const color = "green"

const StyledDiv = styled.div`
    color: ${color};
`

export default function CSSInJS() {
    return (
        <>
            <StyledDiv>Parent</StyledDiv>
            <Child />
        </>
    )
}