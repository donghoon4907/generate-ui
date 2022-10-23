import { css } from 'styled-components';

export const mixinBox = css`
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.boxBgColor};
    overflow: hidden;
`;

export const mixinCentered = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const mixinEllipsis = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const mixinButtonAndText = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > div:nth-child(2) {
        display: flex;
        justify-content: flex-start;
        flex-grow: 1;
    }
`;

export const mixinAlignIconCenter = (withTransform = '') => css`
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0) ${withTransform};
`;

export const mixinCancelAndSubmit = (gap = 0) => css`
    display: flex;
    justify-content: space-between;
    gap: ${gap}px;

    & > button {
        flex: 1;
    }

    & > button:nth-child(1) {
        background: ${({ theme }) => theme.colors.info};
        border: 1px solid ${({ theme }) => theme.colors.info};
    }
`;
