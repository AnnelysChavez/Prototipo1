console.log('producto.js')

const btnCart = document.querySelector('.container-cart-icon')
console.log(btnCart)
const containercartproducts = document.querySelector('.container-cart-products')
console.log(containercartproducts)
btnCart.addEventListener('click',(e)=> {
    containercartproducts.classList.toggle('hidden-cart')
})

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')
const productsList = document.querySelector('.container-items')
let allProducts =[]
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos')



productsList.addEventListener('click', e => {
    if(e.target.classList.contains('btn-add-cart')){
        const infoproduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price:  product.querySelector('p').textContent,
        };
        const exits = allProducts.some(product => product.title === infoproduct.title)
        if (exits){
            const products = allProducts.map(product =>{
                if(product.title === infoproduct.title){
                    product.quantity++;
                    return product
                } else {
                    return product
                }
            })
            allProducts = [...products]
        } else{
            allProducts= [...allProducts,infoproduct];
        }
        
        showHtml();
    }
    
   
});
rowProduct.addEventListener('click',() => {
   if(e.target.classList.contains('icon-close')){
    const product = e.target.parenElement
    const title = product.querySelector('p').textContent
    allProducts = allProducts.filter(product => product.title!== title)
    console.log(allProducts)
    showHtml()    
   } 
})

const showHtml = () => {
    rowProduct.innerHTML= '';
   let total = 0;
   let totalOfproducts = 0;
       
    allProducts.forEach(product => {
       const containerProduct = document.createElement('div');
       containerProduct.classList.add('cart-product');
       
    containerProduct.innerHTML = `
     <div class="info-cart-product">
       <span class="cantidad-producto-carrito">${product.quantity}</span>
       <span class="titulo-producto-carrito">${product.title}</span>
       <span class="precio-producto-carrito">${product.price}</span>
     </div>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="icon-close">
       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      `;
      rowProduct.append(containerProduct);
      total = total + parseInt(product.quantity*product.price.slice(1))
      totalOfproducts = totalOfproducts + product.quantity;
    });
  valorTotal.innerText = `$${total}`;
  countProducts.innerText = totalOfproducts;
};