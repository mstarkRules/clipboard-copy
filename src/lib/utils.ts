export function decodeText(text: string) {
  return decodeURIComponent(text);
}

export function getUrlParam(paramName: string) {
  let url = new URL(window.location.href);
  let params = new URLSearchParams(url.search);

  return params.get(paramName as string);
}
