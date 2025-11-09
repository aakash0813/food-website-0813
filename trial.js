//form validator
    document.getElementById("form-validate").addEventListener( 'submit' , function(event){  // after giving dubmit this acion will be triggered
    event.preventDefault();  // to prevent from reloding
let userName = document.getElementById("userName").value.trim()  // trim is used to prevent spaces
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
    alert (`Hey ${userName},Your order placed successfully!!`)
   }
})