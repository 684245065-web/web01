function calculatePrice(price:number, discountPercent:number): number{
    const after:number= price-(price*discountPercent/100);
    if(after>0) return after
    else return 0;
}

let p:number= 500;
let d:number= 120;
let AfterDisc = calculatePrice(p,d);

console.log(`Price: ${p}
    Discount(%): ${d} %
    Price Discount: ${AfterDisc} บาท`);