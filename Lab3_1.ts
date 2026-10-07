interface NotificationService {
    email: string;
}

class NotificationService implements Person {
    constructor(private name: string){
        
    }
}
