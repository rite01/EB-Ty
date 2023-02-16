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
            yield queryInterface.createTable('birthday_reminder', {
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
                user_id: {
                    type: Sequelize.BIGINT,
                    references: {
                        model: 'users',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                },
                status: {
                    type: Sequelize.STRING
                },
                failed_count: {
                    type: Sequelize.INTEGER
                },
                error_message: {
                    type: Sequelize.STRING
                },
                is_active: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
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
            yield queryInterface.dropTable('birthday_reminder');
        })();
    }
};

//# sourceMappingURL=20221129122949-birthday_reminder.js.map