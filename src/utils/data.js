export function storeData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getData(key) {
  const data = JSON.parse(localStorage.getItem(key));

  return data;
}