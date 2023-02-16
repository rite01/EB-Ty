"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_exportStar(require("./index.routes"), exports);
_exportStar(require("./deapartment.routes"), exports);
_exportStar(require("./branch.routes"), exports);
_exportStar(require("./designation.routes"), exports);
_exportStar(require("./userProfile.routes"), exports);
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