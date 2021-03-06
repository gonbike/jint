/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch07/7.6/7.6.1/7.6.1-6-5.js
 * @description Allow reserved words as property names by dot operator assignment, accessed via indexing: finally, return, void
 */


function testcase() {
        var tokenCodes  = {};
        tokenCodes.finally = 0;
        tokenCodes.return = 1;
        tokenCodes.void = 2;
        var arr = [
            'finally', 
            'return', 
            'void'
         ];
         for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
