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
var suke;
(function (suke) {
    var Suke = (function (_super) {
        __extends(Suke, _super);
        function Suke(scene, type, color, x, y) {
            var _this = _super.call(this, scene, x, y, 0.4, 100, 1, { "r": 253, "g": 255, "b": 253 }, 9) || this;
            _this.is_sk = true;
            return _this;
        }
        Suke.prototype.up = function () {
            // this.weiyi();
        };
        ;
        return Suke;
    }(mokuai.YX));
    suke.Suke = Suke;
    __reflect(Suke.prototype, "suke.Suke");
})(suke || (suke = {}));
//# sourceMappingURL=Suke.js.map