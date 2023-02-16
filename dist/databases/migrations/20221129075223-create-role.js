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
            yield queryInterface.createTable('roles', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.BIGINT
                },
                uuid: {
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    allowNull: false
                },
                name: {
                    type: Sequelize.STRING,
                    unique: true
                },
                is_active: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: true
                },
                created_at: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updated_at: {
                    allowNull: true,
                    type: Sequelize.DATE
                },
                deleted_at: {
                    allowNull: true,
                    type: Sequelize.DATE
                }
            });
        })();
    },
    down (queryInterface) {
        return _asyncToGenerator(function*() {
            yield queryInterface.dropTable('roles');
        })();
    }
};

//# sourceMappingURL=20221129075223-create-role.js.map