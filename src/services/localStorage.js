export function setLocalStorage(expenses) {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

export function getLocalStorage(key) {
  const results = localStorage.getItem(key);
  return JSON.parse(results);
}
