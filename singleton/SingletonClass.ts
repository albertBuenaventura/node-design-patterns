export default class SingletonClass {
    private static instance: SingletonClass;
    private counter:number=0;
    
    static getInstance() : SingletonClass {
        if (!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass();
        }
        return SingletonClass.instance;
    }

    public increaseCounter(): void {
        this.counter++
    }

    public getCounter(): number {
        return this.counter
    }

}