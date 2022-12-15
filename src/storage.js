export const storedItems = (function () {
  const setItem = (key, value) => {
    return window.localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
  };

  return {
    setItem,
    getItem,
  };
})();
