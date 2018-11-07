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
