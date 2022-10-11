'use strict';

let validator = require('../middleware/validator');

describe('Test validator middleware ', () => {
    // required parameters

    let req = { name: 'jack' }
    let res = {}
    let next = jest.fn();
    
    it('confirms that the query is not empty', () => {
        validator(req, res, next);
        
        expect(req).toEqual({ name: 'jack' })
        expect(next).toHaveBeenCalled();
        // expect(next).toHaveBeenCalled();
    })


    // ? Not sure if this should be handled here or in server.js, error handling may be overlapping or conflicting
//     it('throws error on empty query', () => {
//         req = {}
//         validator(req, res, next);
//         expect(res).toEqual('name required')
//     });

})
