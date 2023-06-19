// function log(
//   _target: Object,
//   propertyKey: string | symbol,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     console.log(`Calling ${propertyKey.toString()} with arguments: ${args}`);
//     return originalMethod.apply(this, args);
//   };

//   return descriptor;
// }

// class Calculator {
//   @log
//   add(a: number, b: number): number {
//     return a + b;
//   }
// }

// const calculator = new Calculator();
// calculator.add(1, 2);


// This file only working when, we set up corerct TextMetrics.configuration set up with this project ...