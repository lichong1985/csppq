var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tools;
(function (tools) {
    var NumbTools = (function () {
        function NumbTools() {
        }
        return NumbTools;
    }());
    tools.NumbTools = NumbTools;
    __reflect(NumbTools.prototype, "tools.NumbTools");
})(tools || (tools = {}));
//# sourceMappingURL=NumbTools.js.map