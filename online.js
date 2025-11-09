let btnCart=document.querySelector('.cart-icon');
let cart = document.querySelector('.cart');
let btnClose = document.querySelector('.close')

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
})
btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
})

document.addEventListener('DOMContentLoaded',loadFood());

function loadFood(){
    loadContent();
}

function loadContent(){
    //remove items from cart
    let btnRemove = document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem)
    });
    //product item change
    let qtyElements = document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQty)
    });    

}
// remove item
function removeItem(){
    this.parentElement.remove()
}


//change qty
function changeQty(){
    if(isNaN(this.value) || this.value<1 ){
        this.value = 1;
    }
}
let btnBuy = document.querySelector('.btn-buy')
   btnBuy.addEventListener('click',hi)

   function hi(){
    alert("Your order is placed successfully!!!!")
   }