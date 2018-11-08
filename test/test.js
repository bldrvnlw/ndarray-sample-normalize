"use strict"

var assert = require("chai").assert,
    ndtest = require('ndarray-tests'),
    pack = require('ndarray-pack'),
    samp_norm = require('../normalize');


// some test data for a rox/column zscore example/test - from matlab magic(5)
var magic5 = [
    [17, 24,  1,  8, 15],
    [23,  5,  7, 14, 16],
     [4,  6, 13, 20, 22],
    [10, 12, 19, 21,  3],
    [11, 18, 25,  2,  9]
];

//from matlab zscore(magic(5), 0, 2)
var expected_row_zscore = [
    [0.454369467397652, 1.249516035343543,  -1.363108402192956,  -0.567961834247065,   0.227184733698826],
    [1.380131118684709,  -1.104104894947767,  -0.828078671210825,   0.138013111868471,   0.414039335605413],
    [-1.116312611302876,  -0.868243142124459,                   0,   0.868243142124459,   1.116312611302876],
    [-0.414039335605413,  -0.138013111868471,   0.828078671210825,   1.104104894947767,  -1.380131118684709],
    [-0.227184733698826,   0.567961834247065,   1.363108402192956,  -1.249516035343543,  -0.454369467397652]
];

//from matlab zscore(magic(5), 0, 1)
var expected_col_zscore = [
   [0.552052447473883,   1.364382080481293,  -1.264911064067352,  -0.620173672946042,   0.276026223736942],
   [1.380131118684709,  -0.992277876713668,  -0.632455532033676,   0.124034734589208,   0.414039335605413],
  [-1.242118006816238,  -0.868243142124459,                   0,   0.868243142124459,   1.242118006816238],
  [-0.414039335605413,  -0.124034734589208,   0.632455532033676,   0.992277876713668,  -1.380131118684709],
  [-0.276026223736942,   0.620173672946042,   1.264911064067352,  -1.364382080481293,  -0.552052447473883]
];

var tolerance = 1e-15;
describe("A test and example in one. It emulates matlab zscore with sample statistics ", function() {
    var test_mat;
    beforeEach(function() {
        test_mat = pack(magic5);
    });

    it('Can be use to emulate matlab zscore(x, 0, 2) - row zscore, sample statistics', function() {
        for (let i =0, len = test_mat.shape[0]; i < len; i++ ) {
            samp_norm(test_mat.pick(i, null));
        }
        assert(ndtest.approximatelyEqual(pack(expected_row_zscore), test_mat, tolerance));
    });

    it('Can be use to emulate matlab zscore(x, 0, 1) - col zscore, sample statistics', function() {
        for (let i =0, len = test_mat.shape[1]; i < len; i++ ) {
            samp_norm(test_mat.pick(null, i));
        }
        assert(ndtest.approximatelyEqual(pack(expected_col_zscore), test_mat, tolerance));
    });
})

