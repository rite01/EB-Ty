"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
module.exports = {
    up (queryInterface, Sequelize) {
        return _asyncToGenerator(function*() {
            try {
                const [_, result] = yield queryInterface.sequelize.query("SELECT id FROM public.branches WHERE street='Mahu Naka' OR street='Prabhu Nagar' OR street='Vijay Nagar'");
                if (result.rowCount <= 0) {
                    return yield queryInterface.bulkInsert('branches', [
                        {
                            uuid: 'c752bc22-580d-4f9d-b069-14cf1565e72c',
                            building_no: 11,
                            street: 'Sachidanand Nagar',
                            landmark: 'Annapurna Road',
                            city: 'Indore',
                            state: 'Madhya Pradesh',
                            country: 'India',
                            zip_code: 452001,
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            uuid: '1fe4f1ee-40da-470f-af08-42ffd8d891e7',
                            building_no: 101,
                            street: 'Patidar Avenue',
                            landmark: 'Annapurna Road',
                            city: 'Indore',
                            state: 'Madhya Pradesh',
                            country: 'india',
                            zip_code: 452009,
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            uuid: '24b531d7-d127-42be-8011-0ceae68f8c98',
                            building_no: 102,
                            street: 'Vijay Nagar',
                            landmark: 'A.B Rode',
                            city: 'Indore',
                            state: 'Madhya Pradesh',
                            country: 'india',
                            zip_code: 452010,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                    ]);
                }
            } catch (error) {
                process.env.NODE_ENV !== 'production' && console.log({
                    error
                });
            }
        })();
    },
    down: (queryInterface)=>queryInterface.bulkDelete('branches', null, {})
};

//# sourceMappingURL=20221215070334-branch.js.map