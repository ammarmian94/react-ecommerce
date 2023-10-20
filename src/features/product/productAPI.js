export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard-core server URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter(filter, sort) {
  // filter = {"category":"smartphone"}
  // sort = {_sort:"price", order:"desc"}
  // TODO: on server we will support multip;e values
  // console.log(filter);
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCateforyValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCateforyValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  return new Promise(async (resolve) => {
    // TODO: we will not hard-core server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
