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
const bcrypt = require('bcrypt');
module.exports = {
    up: function() {
        var _ref = _asyncToGenerator(function*(queryInterface) {
            try {
                const [_, adminRole] = yield queryInterface.sequelize.query("SELECT id FROM public.roles WHERE name='admin'");
                const [__, superAdminRole] = yield queryInterface.sequelize.query("SELECT id FROM public.roles WHERE name='super_admin'");
                const [___, userRole] = yield queryInterface.sequelize.query("SELECT id FROM public.roles WHERE name='admin'");
                if (adminRole.rowCount <= 0 && superAdminRole.rowCount <= 0 && userRole.rowCount <= 0) {
                    return yield queryInterface.bulkInsert('roles', [
                        {
                            uuid: '08dfb76f-e3c8-481d-9ecd-878ed600d6e8',
                            name: 'admin',
                            is_active: true,
                            created_at: new Date()
                        },
                        {
                            uuid: '40b7d4fb-0442-45d2-a3ad-1a96128549d3',
                            name: 'user',
                            is_active: true,
                            created_at: new Date()
                        },
                        {
                            uuid: '443f9af7-78b4-4354-b484-a50c23d56d85',
                            name: 'super_admin',
                            is_active: true,
                            created_at: new Date()
                        }
                    ]);
                }
            } catch (error) {
                process.env.NODE_ENV !== 'production' && console.log({
                    error
                });
            }
        });
        return function(queryInterface) {
            return _ref.apply(this, arguments);
        };
    }(),
    down: (queryInterface)=>queryInterface.bulkDelete('roles', null, {})
};

//# sourceMappingURL=20221101104849-roles.js.map