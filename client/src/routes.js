export const toResults = ({ gameId } = { gameId: "" }) =>
  `/wyniki/${gameId ? `?gra=${gameId}` : ""}`;
export const toGames = () => "/gry";
export const toUsers = () => "/uzytkownicy";
export const toStats = () => "/statystyki-gier";
export const toLogin = () => "/logowanie";
export const toNewResult = () => "/nowy-wynik";
export const toNewGameSearch = () => "/gry/szukaj/";
export const toNewGame = ({ id } = { id: ":id" }) => `/gry/nowa/${id}`;
export const toUserStats = () => "/moje-statystyki";
export const toHomePage = () => "/";
export const toGame = ({ id } = { id: ":id" }) => `/gry/${id}`;
export const toResult = ({ id } = { id: ":id" }) => `/wyniki/${id}`;