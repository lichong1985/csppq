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
    var ZFX = (function (_super) {
        __extends(ZFX, _super);
        function ZFX(scene, posX, posY, sf, mass, type, peise, pz_numb, k) {
            var _this = this;
            if (k) {
                _this = _super.call(this, scene, "zhengfang_k", posX, posY, sf, mass, type, peise, pz_numb) || this;
            }
            else
                _this = _super.call(this, scene, "zhengfang", posX, posY, sf, mass, type, peise, pz_numb) || this;
            _this.initShape();
            _this.initPost();
            _this.initColl();
            _this.lx = 1;
            _this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(_this.lx)[0] * 0.8 / 3; //最小缩放值
            _this.k = k;
            _this.bitName = "zhengfang";
            return _this;
        }
        ZFX.prototype.initColl = function () {
            this.boxShape.collisionMask = mokuai.mokuai_cr;
            this.boxShape.collisionGroup = mokuai.mokuai_cr;
        };
        ZFX.prototype.initShape = function () {
            this.boxShape = new p2.Box({ width: this.disp.width * this.sf, height: this.disp.height * this.sf });
            this.addShape(this.boxShape);
        };
        //初始化刚体位置
        ZFX.prototype.initPost = function () {
            //设置y轴坐标
            var p = Tools.egretTOp2(this.posX, this.posY);
            var pp = Tools.p2TOegretPoitn(p.x, p.y);
            this.position[0] = p.x;
            this.position[1] = p.y;
        };
        return ZFX;
    }(mokuai.XingZhuang));
    mokuai.ZFX = ZFX;
    __reflect(ZFX.prototype, "mokuai.ZFX");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=ZFX.js.map