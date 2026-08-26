class PaymentGateway {
    process(amount: number): void {
        console.log(`ประมวลผลการชำระเงินจำนวน ${amount} บาท`);
    }
}

class CreditCardPayment extends PaymentGateway {
    process(amount: number): void {
        console.log(`กำลังประมวลผลการชำระเงินด้วยบัตรเครดิต จำนวน ${amount} บาท`);
    }
}

class PayPalPayment extends PaymentGateway {
    process(amount: number): void {
        console.log(`กำลังเปลี่ยนเส้นทางไปชำระเงินด้วย PayPal จำนวนเงิน ${amount} บาท`);
    }
}

function executePayment(p: PaymentGateway, amt: number): void {
    p.process(amt);
}

const payments: PaymentGateway[] = [
    new CreditCardPayment(),
    new PayPalPayment()
];

payments.forEach(p => {
    executePayment(p, 500);
});