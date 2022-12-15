export const storeItems = (function () {
  const setItem = (name, list) => {
    return window.localStorage.setItem(name, JSON.stringify(list));
  };

  const getItem = (list) => {
    return JSON.parse(window.localStorage.getItem(list));
  };

  return {
    setItem,
    getItem,
  };
})();
