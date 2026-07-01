interface Product {
    Id: number;
    name: string;
    price: number;
}

const Product: Product[] = [
    {barcode:"8851234500015", name:"Labtop",price: 20000},
    {barcode:"8851234500024", name:"Printer",price: 8000, discount:5},
    {barcode:"8851234500032", name:"Scanner",price: 12000}
];

type Status = 'Available' | 'Out of Stock';

function addProduct(product: Product, status: Status): void {
    console.log(
        `Product ID: ${product.Id}
        Name: ${product.name}
        Price: ${product.price}
        Status: ${status}`
    );
}

addProduct({ Id: "1234567890", name: "Smartphone",price: 13500}, 'Available');
addProduct({ Id: "0807795131", name: "Tablet", price: 8500}, 'Out of Stock');

console.log("Current of product list:");
for (const product of Product) {
    console.log(`ID: ${product.Id}, Name: ${product.name}, Price: ${product.price}`);
}