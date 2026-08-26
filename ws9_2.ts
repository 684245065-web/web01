export{};
abstract class StorageService{
    save(data: string):void;
    load():string;
}
abstract class Storage{
    protected data: string =" ";
}
class CloudStorage extends Storage implements StorageService{
    save(data: string): void {
        console.log(`Saving data in Cloud: ${data}`)
    }
    load():string{
        return this.data;
    }
}
class LocalStorage extends Storage implements StorageService{
    save(data: string): void {
        console.log(`Saving data in Cloud: ${data}`)
    }
    load():string{
        return this.data;
    }
}

const storage1 = new CloudStorage();
const storage2 = new LocalStorage();
storage1.save("dgfermog oelpr,g ef, rgrs");
storage1.load();
storage2.save("ewfekm wldp wepf,s");
storage2.load();