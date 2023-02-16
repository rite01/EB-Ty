"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: ()=>UserService
});
const _bcrypt = require("bcrypt");
const _exceptions = require("../../exceptions/index");
const _models = _interopRequireDefault(require("../../databases/models/index"));
const _utils = require("../../utils/utils");
const _bcrypt1 = require("../bcrypt/index");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
const { roles , users  } = _models.default.models;
let UserService = class UserService {
    createUser(userData) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(userData)) throw new _exceptions.BadRequestException('userData is empty');
            const findUser = yield users.findOne({
                where: {
                    email: userData.email
                }
            });
            if (findUser) {
                throw new _exceptions.ConflictException(`This email ${userData.email} already exists`);
            }
            const hashedPassword = yield (0, _bcrypt.hash)(userData.password, 10);
            const createUserData = yield users.create(_objectSpreadProps(_objectSpread({}, userData), {
                password: hashedPassword
            }));
            return createUserData;
        })();
    }
    login(userData) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(userData)) throw new _exceptions.BadRequestException('userData is empty');
            const findUser = yield users.findOne({
                include: [
                    {
                        model: roles,
                        as: 'role'
                    }
                ],
                where: {
                    email: userData.email
                }
            });
            if (!findUser) {
                throw new _exceptions.ConflictException(`This email ${userData.email} was not found`);
            }
            const isPasswordMatching = yield _bcrypt1.bcryptService.comparePassword(userData.password.toString(), findUser.password);
            if (!isPasswordMatching) {
                throw new _exceptions.ConflictException('Password is not matching');
            }
            const tokenData = _bcrypt1.bcryptService.createToken(findUser);
            return _objectSpread({
                data: findUser
            }, tokenData);
        })();
    }
    findAllUser() {
        return _asyncToGenerator(function*() {
            const user = yield users.findAll({
                include: [
                    {
                        model: roles,
                        as: 'role'
                    }
                ]
            });
            const foundRoles = yield roles.findAll({
                include: [
                    {
                        model: users,
                        as: 'users'
                    }
                ]
            });
            return {
                user
            };
        })();
    }
    findUserById(userId) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(userId)) throw new _exceptions.BadRequestException('UserId is empty');
            const findUser = yield users.findOne({
                where: {
                    id: userId
                },
                include: {
                    model: roles
                }
            });
            if (!findUser) throw new _exceptions.ConflictException("User doesn't exist");
            return findUser;
        })();
    }
    uploadFile(userDataFile) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(userDataFile)) throw new _exceptions.BadRequestException('Please select file');
            const createUserDataFile = yield users.bulkCreate(userDataFile);
            return createUserDataFile;
        })();
    }
    deleteUser(userId) {
        return _asyncToGenerator(function*() {
            const result = yield users.destroy({
                where: {
                    id: userId
                }
            });
            if (!result) throw new _exceptions.ConflictException("User doesn't exist");
            return result;
        })();
    }
    updateUserDetail(userId, userData) {
        return _asyncToGenerator(function*() {
            const { name , phoneNumber  } = userData;
            if ((0, _utils.isEmpty)(userData)) throw new _exceptions.BadRequestException('user not found');
            if (name || phoneNumber) {
                const result = yield users.findOne({
                    where: {
                        name,
                        phoneNumber
                    }
                });
                if (result) throw new _exceptions.ConflictException('This user already exists');
            }
            const updateUserById = yield users.update({
                name,
                phoneNumber
            }, {
                where: {
                    id: userId
                },
                returning: true
            });
            if (!updateUserById) throw new _exceptions.ConflictException("Designation doesn't exist");
            return updateUserById;
        })();
    }
};

//# sourceMappingURL=index.js.map