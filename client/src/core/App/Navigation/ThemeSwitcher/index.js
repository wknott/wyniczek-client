import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../../../../themeSlice";
import { DarkThemeIcon, LightThemeIcon, StyledThemeSwitcher } from "./styled";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const isDarkThemeEnabled = theme === "dark";
  return (
    <StyledThemeSwitcher onClick={() => dispatch(toggleTheme())}>
      <LightThemeIcon isDarkThemeEnabled={isDarkThemeEnabled}></LightThemeIcon>
      <DarkThemeIcon isDarkThemeEnabled={isDarkThemeEnabled}></DarkThemeIcon>
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;