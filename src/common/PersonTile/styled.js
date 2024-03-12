import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PersonNavLink = styled(NavLink)`
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    transition: transform ease 300ms;
    text-decoration: none;
    width: 208px;
    min-height: 339px;
    box-shadow: 0 4px 12px 0 rgba(186, 199, 213, 0.5);
    border-radius: 5px;

    &:hover {
        transform: translate(0, -10px);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 136px;
        min-height: 245px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 12px;
    padding: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-gap: 8px;
        padding: 8px;
    }
`;

export const StyledImage = styled.img`
    width: 176px;
    height: 231px;
    object-fit: cover;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 120px;
        height: 178px;
    }
`;

export const Description = styled.div`
    text-align: center;
    word-break: break-word;
`;

export const StyledTitle = styled.div`
    font-size: 22px;
    font-weight: 500;
    line-height: 29px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 14px;
        line-height: 18px;
    }
`;

export const StyledSubtitle = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    margin-top: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        line-height: 18px;
        margin-top: 3px;
    }
`;