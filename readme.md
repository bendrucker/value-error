# value-error [![Build Status](https://travis-ci.org/bendrucker/value-error.svg?branch=master)](https://travis-ci.org/bendrucker/value-error) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/value-error.svg)](https://greenkeeper.io/)

> Extract the data from an Error to a plain object


## Install

```
$ npm install --save value-error
```


## Usage

```js
var valueError = require('value-error')
var err = new Error('OH NO')
err.data = {foo: 'bar'}
valueError(err)
//=> {message: 'OH NO', data: {foo: 'bar'}}
```

## API

#### `valueError(err)` -> `object`

##### err

*Required*  
Type: `error`

An `Error` instance to be copied into a plain object. All enumerable properties will be copied. The `message` will be copied even if it is non-enumerable. Other non-enumerable/inherited properties like `stack` and `name` will not be included. 


## License

MIT © [Ben Drucker](http://bendrucker.me)
