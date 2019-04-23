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
var mokuai;
(function (mokuai) {
    var BSL = (function (_super) {
        __extends(BSL, _super);
        function BSL(t, y, se, se2) {
            var _this = _super.call(this, t) || this;
            _this.anchorOffsetX = _this.width * 0.5;
            _this.x = Tools.getPhoneW() * 0.5;
            _this.y = y;
            _this.peise(se);
            _this.se = se;
            _this.se2 = se2;
            _this.tw();
            return _this;
        }
        BSL.prototype.peise = function (rgb) {
            if (!rgb) {
                return;
            }
            //变色
            var colorMatrix = [
                1, 0, 0, 0, rgb.r - 255,
                0, 1, 0, 0, rgb.g - 255,
                0, 0, 1, 0, rgb.b - 255,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.filters = [colorFlilter];
        };
        BSL.prototype.tw = function () {
            egret.Tween.get(this, { "loop": true }).wait(100).call(this.peise, this, [this.se2]).wait(100).call(this.peise, this, [this.se]);
        };
        return BSL;
    }(egret.Bitmap));
    mokuai.BSL = BSL;
    __reflect(BSL.prototype, "mokuai.BSL");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=BSL.js.map