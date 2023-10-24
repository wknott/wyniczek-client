export const buildQueryString = (parameters) => {
  const urlSearchParams = new URLSearchParams("");

  for (const key in parameters) {
    const value = parameters[key];

    if (!value) {
      urlSearchParams.delete(key);
    } else {
      urlSearchParams.set(key, value);
    }
  }

  return urlSearchParams.toString();
}