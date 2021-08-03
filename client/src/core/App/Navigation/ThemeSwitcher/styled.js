import styled, { css } from "styled-components";

export const StyledThemeSwitcher = styled.button`
  width: 64px;
  height: 32px;
  padding: 8px;
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: ${({theme}) => theme.colors.themeSwitcherBackground};
  transition: all 0.3s linear;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  position: absolute;
  top: 4px;
  transition: all 0.3s linear;
`;

export const LightThemeIcon = styled(Icon)`
  left: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};

  ${({ isDarkThemeEnabled }) => isDarkThemeEnabled && css`
    left: calc(100% - 28px);
  `}
`;

export const DarkThemeIcon = styled(Icon)`
  left: 30px;
  width: 20px;
  height: 20px;
  top: 3px;
  background: ${({theme}) => theme.colors.themeSwitcherBackground};

  ${({ isDarkThemeEnabled }) => !isDarkThemeEnabled && css`
    left: -16px;
  `}
`;