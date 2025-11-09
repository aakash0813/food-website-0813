
    let cart = [];

    function addToCart(name, price) {
      const item = cart.find(product => product.name === name);
      if (item) {
        item.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
      renderCart();
    }

    function removeFromCart(name) {
      cart = cart.filter(product => product.name !== name);
      renderCart();
    }

    function renderCart() {
      const cartItems = document.getElementById("cart-items");
      cartItems.innerHTML = "";
      let total = 0;

      cart.forEach(item => {
        total += item.price * item.quantity;

        const li = document.createElement("li");
        li.classList.add("cart-item");
        li.innerHTML = `
          ${item.name} (x${item.quantity}) - Rs${item.price * item.quantity}
          <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(li);
      });

      document.getElementById("total").innerText = total.toFixed(2);
    }



    // button
    const menuButton = document.getElementById('menuButton');
    const navBar = document.getElementById('navBar');
    const closeButton = document.getElementById('closeButton');

    menuButton.addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Add Items To Place Order"); 
    return; 
  }
  navBar.classList.toggle('open');
});
closeButton.addEventListener('click', () => {
  navBar.classList.remove('open');
});
      

    //form validator
    document.getElementById("form-validate").addEventListener( 'submit' , function(event){  
    event.preventDefault(); 
let userName = document.getElementById("userName").value.trim() 
let email = document.getElementById("email").value.trim()
let contactNumber = document.getElementById("contactNumber").value.trim()
let address = document.getElementById("address").value.trim()

let uNameError = document.getElementById( "uName-error" )
let emailError = document.getElementById( "mail-error" )
let cNumberError = document.getElementById( "contactNumber-error" )
let addressError = document.getElementById( "address-error" )

let isValid = true

let uNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/
let cNumberPattern = /^[0-9]{10,}$/
if( userName === ""){
    uNameError.innerText = "*Name Is Required"
    isValid = false
}
else if(!uNamePattern.test(userName)){
    uNameError.innerText = "*Enter your full name"
    isValid = false
}
else if(uNamePattern.test(userName)){
    uNameError.innerText = ""
    
}
if( email === ""){
    emailError.innerText = "*Email Is Required"
    isValid = false
}
else if(!emailPattern.test(email)){
    emailError.innerText = "*Check Email"
    isValid = false
}
else if(emailPattern.test(email)){
    emailError.innerText = ""
    
}
if( contactNumber === ""){
    cNumberError.innerText = "*Contact Number Is Required"
    isValid = false
}
else if(!cNumberPattern.test(contactNumber)){
    cNumberError.innerText = "* Enter 10 digit value "
    isValid = false
}
else if(cNumberPattern.test(contactNumber)){
    cNumberError.innerText = ""
    
}
if( address === ""){
    addressError.innerText = "*Ender Address"
    isValid = false
}
else{
    addressError.innerText = ""
    
}
   if (isValid ){
    alert (`Hey ${userName},Your Order Placed Successfully!!`)
   }
})
