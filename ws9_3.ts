export{};
abstract class PaymentGateway{
    protected tid: string;
    constructor(protected amount: number){
        this.tid = "TXN-" + Math.floor(1000+Math.random()*9000);
    }
    abstract processPaymant():boolean;
    printReceeipt(success: boolean): void{
        if
    }
}

class CreditCardPayment extends PaymentGateway{
    constructor(protected amount: number, private cardNumber: string){
        super(amount);
    }
    processPaymant(): boolean {
        if(this.phoneNumber.length === 10){
            console.log(``)
        }
    }
}
class PromPayPayment extends PaymentGateway{
    constructor(protected amount: number, private phoneNumber: string){
        super(amount);
    }
    processPaymant(): boolean {
        if(this.phoneNumber.length === 10){
            console.log(`สร้าง QR code จำนวนเงิน ${this.amount} จาก Promtpay เรียบร้อยแล้ว`);
            return true;
        }else{
            console.log(`หมายเลขโทรศัพท์ไม่ถูกต้อง ไม่สามารถชำระเงิน`);
            return true;
        }
    }
}
const payments: PaymentGateway[] = [
    new CreditCardPayment(1000,"1234567890123456"),
    new CreditCardPayment(5000,"1234"),
    new PromPayPayment(500,"1234567890"),
    new PromPayPayment(10000,"1234")
];
payments.forEach(payments => {
    payments.printReceeipt(payments.processPaymant())
});