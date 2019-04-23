var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var guanka;
(function (guanka) {
    var XG2 = (function (_super) {
        __extends(XG2, _super);
        function XG2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return XG2;
    }(guanka.SceneBase));
    guanka.XG2 = XG2;
    __reflect(XG2.prototype, "guanka.XG2");
})(guanka || (guanka = {}));
//# sourceMappingURL=XG2.js.map