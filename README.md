ndarray-sample-normalize
========================
Normalizes an ndarray so that the mean is 0 and the sample standard deviation is 1.

## Example

```javascript
var moments = require("ndarray-moments")
var baboon = require("luminance")(require("baboon-image"))
var baboon2 = require("luminance")(require("baboon-image"))

console.log("Before normalization:", moments(2, baboon))

console.log("\nSample stddev normalize")
require("../normalize")(baboon)

console.log("After sample normalization:", moments(2, baboon))

console.log("\nReqular normalize for comparison")
require("ndarray-normalize")(baboon2)

console.log("After regular normalization:", moments(2, baboon2))
```

This prints out:

    Before normalization: [ 129.61546083073952, 18590.46474900778 ]

    Sample stddev normalize
    After sample normalization: [ -1.273097946508095e-10, 0.9999961854456416 ]

    Reqular normalize for comparison
    After regular normalization: [ 4.570595291131241e-11, 1.0000000001111533 ]

## Install

    npm install ndarray-sample-normalize

### `require("ndarray-sample-normalize")(output, input)`
Normalizes an ndarray

* `output` gets the result
* `input` is the array that gets normalized (if unspecified, output is normalized in place)

**Returns** `output`

## Credits
(c) 2013 Mikola Lysenko. MIT License
adapted 2018 Baldur van Lew
