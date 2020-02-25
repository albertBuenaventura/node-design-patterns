import SingletonClass from './SingletonClass'

const singletonClass1 = SingletonClass.getInstance();
const singletonClass2 = SingletonClass.getInstance();

if(singletonClass1 === singletonClass2) {
    console.log('Single is now working')
}
