let store: [product: string, price: number, quantity: number]] = [["GPU", 25000, 5], ["Smartphon"];
for(let [product, price, quantity] of store) {
    console.log(` Product: ${product}, Price: ${price}, Quantity: ${Squantity}`);
}
store. push(["Laptop", 20000, 8]);
store. push (["Mouse", 2400, 12]);
store. push (["Keyboard"1 3500, 20]);
console.log ("\nUpdated store inventory:");
for (let [product, price, quantity] of store) {
    console.log(`Product: $(product), price: $(price), Quantity: $(quantity)`);
}