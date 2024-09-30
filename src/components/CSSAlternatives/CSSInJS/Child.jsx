import styled from "styled-components"

const StyledChild = styled.div`
    color: ${props => props.color};
`

export default function Child() {
    return (
        <>
            <StyledChild color="orange">Child</StyledChild>
            <StyledChild color="red">Child</StyledChild>
        </>
    )
}