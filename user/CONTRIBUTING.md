# CONTRIBUTING

## filenames:

Regarding filenames most common are short, lower-case filenames. If your file can only be described with two words most JavaScript projects use an underscore as delimiter.

## variables:

Regarding variables same "rules" apply as for filenames. Prototypes or classes however should use camel-case.

    For example:
      `// for class name we use UpperCamelCase
      class SomeClassExample {}

      // for const names we use the const keyword and lowerCamelCase
      const config = {
        key: 'value'
      };

      // for variables and functions names we use lowerCamelCase
      let someVariableExample = 'value';
      function doSomething() {}`

## run lint to check linting
    npm run lint

## run test
    npm run test

## throw proper error

  ```// throwing an Error from typical function, whether sync or async
  if(!productToAdd)
      throw new Error("How can I add new product when no value provided?");

  // 'throwing' an Error from EventEmitter
  const myEmitter = new MyEmitter();
  myEmitter.emit('error', new Error('whoops!'));

  // 'throwing' an Error from a Promise
  return new Promise(function (resolve, reject) {
      return DAL.getProduct(productToAdd.id).then((existingProduct) => {
          if(existingProduct != null)
              reject(new Error("Why fooling us and trying to add an existing product?"));
      });
  });```
  