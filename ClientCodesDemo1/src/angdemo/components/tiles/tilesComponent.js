"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tilesController_1 = require("./tilesController");
var TilesComponent = (function () {
    function TilesComponent() {
        this.template = require("./tilesView.html");
        this.controller = tilesController_1.default;
        this.bindings = {
            item: '<'
        };
    }
    return TilesComponent;
}());
exports.default = TilesComponent;
//# sourceMappingURL=tilesComponent.js.map