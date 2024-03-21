import styled from "styled-components";

export const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 18px;
        margin-bottom: 12px;
    }
`;

export const Content = styled.span`
    width: 1368px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 324px);
    justify-content: center;
    grid-gap: 24px;
    margin-bottom: 40px;
    margin: auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        grid-template-columns: repeat(3, auto);
        width: auto;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        grid-template-columns: repeat(2, auto);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phoneTwo}) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 16px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 208px);
    grid-gap: 24px;
    padding-top: 24px;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: repeat(auto-fill, 136px);
        grid-gap: 16px;
        padding-top: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        padding-top: 12px;
    }
`;