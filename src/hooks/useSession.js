export function useSession() {
  const { activeUser, activeUserId } =
    JSON.parse(sessionStorage.getItem("current_user")) || {}

  return { activeUser, activeUserId }
}
