async function getDataUsingAxios() {

axios.get('https://dummyjson.com/products')
.then( (response) =>{
  // handle success
  console.log(response.data.products);
  const products = response.data.products;
  //document.querySelector(".products").innerHTML = "";
  for(product of products){
    let content = `
    <div class="product-items">
    <img src=${product.thumbnail} alt="thumbnail"/>
    <div class="row">
    <a href="details.html?product_id=${product.id}">${product.title}</a>
    </div>
    </div>
    `
    document.querySelector(".products").innerHTML += content
  }
  
 })
.catch(function (error) {
  // handle error
  console.log(error);
  //alert(error);
});
}

getDataUsingAxios();