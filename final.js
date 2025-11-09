
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
          ${item.name} (x${item.quantity}) - $${item.price * item.quantity}
          <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(li);
      });

      document.getElementById("total").innerText = total.toFixed(2);
    }