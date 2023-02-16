"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "readBuffer", {
    enumerable: true,
    get: ()=>readBuffer
});
const _bcrypt = require("bcrypt");
const _models = _interopRequireDefault(require("../databases/models/index"));
const _enumConstants = require("../constants/enum.constants");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { roles  } = _models.default.models;
const readBuffer = function() {
    var _ref = _asyncToGenerator(function*(buffer) {
        const dataArray = [];
        const data = buffer.toString().split('\n');
        const [fields, ...userData] = data;
        const fieldsArray = fields.split(',');
        const getRoles = function() {
            var _ref = _asyncToGenerator(function*() {
                const foundRole = yield roles.findOne({
                    where: {
                        name: _enumConstants.UserRoles.USER
                    }
                });
                return foundRole;
            });
            return function getRoles() {
                return _ref.apply(this, arguments);
            };
        }();
        for (const item of userData){
            const test = {};
            const itemArray = item.split(',');
            for(let i = 0; i < itemArray.length; i++){
                test[fieldsArray[i]] = itemArray[i];
            }
            const hashedPassword = (0, _bcrypt.hashSync)(`${test.name.slice(0, 2).toLowerCase()}@12345`, 10);
            test.password = hashedPassword;
            if (!test.roleId) {
                const result = yield getRoles();
                if (!result) {
                    throw new Error('role not found');
                }
                test.roleId = result.id;
            }
            dataArray.push(test);
        }
        return dataArray;
    });
    return function readBuffer(buffer) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=fs.utils.js.map