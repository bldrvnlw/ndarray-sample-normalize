"use strict"

var moments = require("ndarray-moments")
var cwise = require("cwise")

var do_normalize = cwise({
  args: ["array", "array", "scalar", "scalar"],
  body: function normalizeBody(out, a, mu, sigma) {
    out = (a - mu) / sigma
  }
})

function sampleNormalize(out, a) {
  var m = moments(2, a)
  var mean = m[0]
  var unbias = a.size/(a.size - 1)
  var stddev = Math.sqrt((m[1] - mean*mean) * unbias)
  do_normalize(out, a, mean, stddev)
  return out
}

module.exports = function sampleNormalizeWrap(a, b) {
  if(arguments.length === 1) {
    return sampleNormalize(a, a)
  } else if(arguments.length === 2) {
    return sampleNormalize(a, b)
  } else {
    throw new Error("Invalid arguments")
  }
}
