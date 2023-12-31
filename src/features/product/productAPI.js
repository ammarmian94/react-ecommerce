export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products/" + product.id,
      {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter(filter, sort, pagination, admin) {
  // filter = {"category":"smartphone"}
  // sort = {_sort:"price", order:"desc"}
  // pagination = {_page:1,_limit:10} //_page=1&_limit=10
  // TODO: on server we will support multip;e values
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

  // console.log(pagination)
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  if (admin) {
    console.log("query: ", queryString);
    queryString += `admin=true`;
  }

  return new Promise(async (resolve) => {
    // TODO: we will not hard-core server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: totalItems } });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    resolve({ data });
  });
}
