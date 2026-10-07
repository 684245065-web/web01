const dao = new ProductDAO();

const product = new Product(1,"Keyboard",1500,30);

dao.addProduct(product);

const product = dao.getProducts();

for (const product of products) {
    console.log(product);
}