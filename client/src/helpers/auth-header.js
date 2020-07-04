export function authHeader() {
  // return authorization header with jwt token
  const user = getCurrentUser()

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function getCurrentUserId() {
  const user = getCurrentUser()
  return user ? user.id : null
}
