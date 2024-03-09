async function getDetailsUsingAxios() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('product_id');
    // Make a request for a user with a given ID
  axios.get('https://dummyjson.com/products/'+id)
  .then(function (response) {
    // handle success
    console.log(response.data);
    const product = response.data;

      let content = `
      <img src=${product.thumbnail} alt="thumbnail"/>
      <h3>${product.title}</h3>
      <p>${product.description}</p>      
      <p>Price: ${product.price}</p>
      `
      document.querySelector(".products_details").innerHTML += content;
  
   })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  }
  
  getDetailsUsingAxios();