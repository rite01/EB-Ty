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
                const [_, admin] = yield queryInterface.sequelize.query("SELECT id FROM public.roles WHERE name='admin'");
                if (admin.rowCount <= 0) {
                    throw new Error('admin not found!');
                }
                const [__, superAdminResult] = yield queryInterface.sequelize.query("SELECT id FROM public.roles WHERE name='super_admin'");
                if (superAdminResult.rowCount <= 0) {
                    throw new Error('superAdminResult not found!');
                }
                const adminSalt = yield bcrypt.genSalt();
                const adminPassword = yield bcrypt.hash('admin@12345', adminSalt);
                const superAdminPassword = yield bcrypt.hash('super_admin@12345', adminSalt);
                queryInterface.bulkInsert('users', [
                    {
                        name: 'Admin',
                        uuid: '29f8fe4a-8cd1-41f4-aa04-5c400644a181',
                        email: 'admin@thoughtwin.com',
                        password: adminPassword,
                        created_at: new Date(),
                        updated_at: new Date(),
                        role_id: admin.rows[0].id
                    },
                    {
                        name: 'SuperAdmin',
                        uuid: '29f8fe4a-8cd1-41f4-aa04-5c400644a181',
                        email: 'super_admin@thoughtwin.com',
                        password: superAdminPassword,
                        created_at: new Date(),
                        updated_at: new Date(),
                        role_id: superAdminResult.rows[0].id
                    }
                ]);
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
    down: (queryInterface)=>queryInterface.bulkDelete('users', null, {})
};

//# sourceMappingURL=20221129132559-admin.js.map