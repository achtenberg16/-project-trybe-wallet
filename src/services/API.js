export default async function requestApi() {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const result = await response.json();
  delete result.USDT;
  return result;
}
