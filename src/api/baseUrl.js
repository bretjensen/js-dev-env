export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:2881' : '/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "")
}
