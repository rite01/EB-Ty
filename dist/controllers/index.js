"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_exportStar(require("./user/index"), exports);
_exportStar(require("./department/index"), exports);
_exportStar(require("./branch/index"), exports);
_exportStar(require("./designation/index"), exports);
_exportStar(require("./userProfile/index"), exports);
function _exportStar(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) Object.defineProperty(to, k, {
            enumerable: true,
            get: function() {
                return from[k];
            }
        });
    });
    return from;
}

//# sourceMappingURL=index.js.map