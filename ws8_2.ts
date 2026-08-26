class Notifications {
    send(message:string){
        console.log(message);
    }
}

class EmailNotfication extends Notifications{
    send(message: string){
        console.log(`Email Notification: ${message}`);
    }
}
class SMSNotfication extends Notifications{
    send(message: string){
        console.log(`SMS Notification: ${message}`);
    }
}
class PushNotfication extends Notifications{
    send(message: string){
        console.log(`Push Notification: ${message}`);
    }
}
const notis: Notifications[] = [
    new EmailNotfication(),
    new SMSNotfication(),
    new PushNotfication()
]
notis.forEach(noti=>noti.send("สวัสดี"))