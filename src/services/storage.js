export function localSave(key, value) {
  localStorage.setItem(key, value);
}

export function localRead(key) {
  return localStorage.getItem(key);
}