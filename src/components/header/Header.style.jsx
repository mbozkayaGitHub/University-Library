import styled from "styled-components";
import Flex from "../../styles/Flex";



export const HeaderContainer = styled(Flex)`
    flex-direction: column;
`

export const HeaderTitle = styled.h2`
    margin-top: 2rem;
    font-size: 3rem;
    color: ${({theme})=> theme.colors.detailColor};
`
