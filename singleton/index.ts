import SingletonClass from './SingletonClass'

const singletonClass1 = SingletonClass.getInstance();
const singletonClass2 = SingletonClass.getInstance();

if(singletonClass1 === singletonClass2) {
    console.log('Single is working')
}
//Increment counter on singletonClass1
singletonClass1.increaseCounter()

if(singletonClass2.getCounter() === singletonClass1.getCounter()) {
    console.log('Singleton is working even changing attributes')
}
