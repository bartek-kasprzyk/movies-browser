import styled from "styled-components";

export const Content = styled.main`
    width: 1368px;
    display: grid;
    grid-template-columns: repeat(4, 324px);
    justify-content: center;
    grid-gap: 24px;
    margin-bottom: 40px;
    margin: auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        grid-template-columns: repeat(4, minmax(200px, 1fr));
        width: 100%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletOne}) {
        grid-template-columns: repeat(3, minmax(200px, 1fr));
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phoneTwo}) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 16px;
    }
`;


export const MainTitle = styled.h1`
    grid-column: 1 / -1;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.xl6};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.xl5};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;