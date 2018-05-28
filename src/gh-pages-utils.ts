export function checkForRedirect() {
  const { location } = window;
  const urlParams = new URLSearchParams(location.search);
  if (urlParams.get("redirect") === "true") {
    // location.replace(urlParams.get("pathname")!);
  }
}
