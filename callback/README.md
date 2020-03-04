# Callback Pattern

In computer programming, a callback, also known as a "call-after" function, is any executable code that is passed as an argument to other code that is expected to call back (execute) the argument at a given time. This execution may be immediate as in a synchronous callback, or it might happen at a later time as in an asynchronous callback. Programming languages support callbacks in different ways, often implementing them with subroutines, lambda expressions, blocks, or function pointers.
[Wikipedia](https://en.wikipedia.org/wiki/Callback_(computer_programming))

# Callback Hell
One of the common problems on Javascript when using the Callback pattern is the Callback Hell. The callback hell is basically a nested callbacks, it works but it is an Anti-Pattern. Most probably, this is due to poor handling of asynchronous programming.

I suggest to carefully decide and handle all the related events using Promises, Generators or Async/Await. Buuuut, be careful of using those since it will greatly affect the NodeJS performance. It will always boils down on how rich you design a codebase.
