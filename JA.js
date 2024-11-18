class Product {
    constructor(id, name, price) {
      this.id = id;       
      this.name = name;    
      this.price = price; 
    }
  }
  
  // 2. ShoppingCartItem Class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product; 
      this.quantity = quantity; 
    }
  
   
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // 3. ShoppingCart Class
  class ShoppingCart {
    constructor() {
      this.items = []; 
    }
  
    
    getTotal() {
      
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {

      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {

        existingItem.quantity += quantity;
      } else {

        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  

    removeItem(productId) {

      const index = this.items.findIndex(item => item.product.id === productId);
      if (index !== -1) {

        this.items.splice(index, 1);
      }
    }
  
    // Method to display the items in the cart with their quantity and total price
    displayItems() {
      if (this.items.length === 0) {
        console.log("The cart is empty.");
      } else {
        console.log("Items in the cart:");
        
        
        this.items.forEach(item => {
          console.log(`${item.product.name} (x${item.quantity}) - $${item.getTotalPrice().toFixed(2)}`);
        });
      }
    }
  }
  
  // Testing the functionality of the ShoppingCart system
  
  // Creating products (instances of the Product class)
  const apple = new Product(1, "Apple", 1.5);  
  const banana = new Product(2, "Banana", 1.2); 
  const orange = new Product(3, "Orange", 2.0); 
  
  // Creating a shopping cart (instance of the ShoppingCart class)
  const cart = new ShoppingCart();
  
  // Adding items to the cart
  cart.addItem(apple, 3);  
  cart.addItem(banana, 5); 
  cart.addItem(orange, 2); 
  
  // Displaying cart items
  cart.displayItems();
  console.log(`Total: $${cart.getTotal().toFixed(2)}`); 
  
  // Removing an item from the cart (Banana with id 2)
  cart.removeItem(2); 
  
  // Displaying cart items again after removing Banana
  cart.displayItems();
  console.log(`Total: $${cart.getTotal().toFixed(2)}`); 