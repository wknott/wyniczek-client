export function formatDateString(dateString, length) {
  const date = new Date(dateString);
  let option
  switch (length) {
    case "short":
      option = {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      };
      return date.toLocaleDateString("pl-pl", option);

    case "long":
      option = {
        second: "numeric",
        minute: "numeric",
        hour: "numeric",
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      return date.toLocaleDateString("pl-pl", option);

    default:
      option = {
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      return date.toLocaleDateString("pl-pl", option);
  }
}

export function calculateWinners(result) {
  const sumOfPoints = Math.max(
    ...result.scores.map((score) =>
      Object.values(score.points).reduce((x, y) => x + y, 0)
    )
  );
  const winners = result.scores
    .filter(
      (score) =>
        Object.values(score.points).reduce((x, y) => x + y, 0) ===
        sumOfPoints &&
        Object.values(score.points).reduce((x, y) => x + y, 0) > 0
    )
    .map((score) => score.user.name);
  return winners;
}

export function compareObjects(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

export function getNumberOfResults(user, results) {
  let numberOfResults = 0;
  let numberOfWins = 0;
  results.map((result) => {
    calculateWinners(result).map((winner) =>
      winner === user.name ? numberOfWins++ : {}
    );
    result.scores.map((score) =>
      score.user.name === user.name ? numberOfResults++ : {}
    );
    return result;
  }
  );
  return [numberOfResults, numberOfWins];
}

export function getNumberOfGameResults(game, results) {
  let numberOfResults = 0;
  results.map((result) =>
    result.game.name === game.name ? numberOfResults++ : {}
  );
  return numberOfResults;
}
