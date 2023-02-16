"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FileUpload", {
    enumerable: true,
    get: ()=>FileUpload
});
const _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const csvFilter = (_, file, cb)=>{
    if (file.mimetype.includes('csv')) {
        cb(null, true);
    } else {
        cb('Please upload only csv file.', false);
    }
};
const storage = _multer.default.memoryStorage();
const FileUpload = (0, _multer.default)({
    storage,
    fileFilter: csvFilter
}).single('file');

//# sourceMappingURL=multer.js.map