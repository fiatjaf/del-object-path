## del-object-path

Del given (deep) object path

See also: [get-object-path](http://github.com/azer/get-object-path), [set-object-path](http://github.com/azer/set-object-path)

## Install

```bash
$ npm install del-object-path
```

## Usage

```js
var del = require('del-object-path')
var data = {
  title: 'My Products',
  products: {
    eggs: [{ kind: 'white', amount: 300 }, { kind: 'brown', amount: 200 }]
  }
}

del(data, 'products.eggs[0].amount')
data.products.eggs[0].amount
// => undefined
del(data, 'products.eggs')
Object.keys(data.products)
// => ['title']
```
