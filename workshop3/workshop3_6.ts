type category="Electronics" | "Clothing" | "Food"
interface Product{
    cat: category
}
let products: Product[] = [
    {ID:1, name: "Computer", price: 15000,cat:"Electronics"},
    {ID:2, name: "Sandwitch", price: 15,cat:"Food"},
    {ID:3, name: "T-Shirt", price: 199,cat:"Clothing"},
    {ID:4, name: "NoteBook", price: 25000,cat:"Electronics"},
    {ID:5, name: "Shirt", price: 299,cat:"Clothing"},
];

function showCat(cat: category){
    const result = [];
    for(let i=0; i<products.length; i++){
        if(products[i].cat === cat){
            result.push(products[i]);
        }
    }
    console.log(result);
}
showCat("Clothing");