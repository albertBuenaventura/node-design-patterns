interface Error {
    type: string;
    message: string;
}

interface ICallback { (err: Error|null, message?:string) : void; }

const callback = (err: Error|null, message?:string) => {
    if(err){
        console.info(`Error: ${err}`)
        throw err;
    }

    console.info(`Message: ${message}`);
}

const asynchronousFunction = (message:string, callback:ICallback) => {
    setTimeout(() => {
        callback(null, message); //This will be fire after a second
    }, 1000)
}


/**
 * Output:
 * First to log
 * This will execute after a second
 * Second to log
 */
(() => {
  console.log('First to log');
  asynchronousFunction('This will execute after a second', callback);
  console.log('Second to log');
})()
