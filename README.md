# fmt

[![CircleCI](https://circleci.com/gh/segmentio/fmt.svg?style=shield&circle-token=a8e3741191a19d98b7d5796fd9bfc1b544d18a25)](https://circleci.com/gh/segmentio/fmt)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/fmt/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/fmt)

`util.format`-like string format utility.

## Installation

```sh
$ npm install @segment/fmt
```

## Example

```js
fmt('%d %s %o', '0n', 'str', {});
// => "0 str {}"

fmt.f = function(n){
  return Number(n || 0).toFixed(2);
};

fmt('floats: %f', 1);
// => "floats: 1.00"
```

## API

### fmt(str, ...)

Format the given `str` with `...` args.

```js
`%o`: JSON.stringify
`%d`: parseInt
`%s`: String
```
