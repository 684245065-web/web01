import Database from "better-sqlite3";
import { Product } from "./Product";

class ProductDAO {
    private db: Database.Database;

    constructor(){
        this.db = new Database("shop.db");

        this.db.prepare(`
            CREATE TABLE IF NOT EXISTS products ( 
            id INTEGER PRIMARY KEY,
            name TEXT, 
            price REAL 
            )
        `).run();
    }
    
    addProduct(product: Product): void {
        const sql = (`
            INSERT INTO products (id,name,price,stock)
            VALUES (?,?,?)
            `);
    }

    getProducts(): Product[] {
        const rows = this.db
        .prepare("SELECT * FROM products")
        .all() as Product[];

        return rows;
    }
}