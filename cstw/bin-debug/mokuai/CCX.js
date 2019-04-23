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
    //十字型
    var CCX = (function (_super) {
        __extends(CCX, _super);
        function CCX(scene, posX, posY, sf, mass, type, peise, pz_numb, k) {
            var _this = this;
            if (k) {
                _this = _super.call(this, scene, "cha_k", posX, posY, sf, mass, type, peise, pz_numb) || this;
            }
            else
                _this = _super.call(this, scene, "cha", posX, posY, sf, mass, type, peise, pz_numb) || this;
            _this.initShape();
            _this.initPost();
            _this.initColl();
            _this.lx = 12;
            _this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(_this.lx)[0] * 0.8 / 3; //最小缩放值
            _this.k = k;
            _this.bitName = "cha";
            return _this;
        }
        CCX.prototype.initColl = function () {
            this.boxShape.collisionMask = mokuai.mokuai_cr;
            this.boxShape.collisionGroup = mokuai.mokuai_cr;
            this.boxShape2.collisionMask = mokuai.mokuai_cr;
            this.boxShape2.collisionGroup = mokuai.mokuai_cr;
        };
        CCX.prototype.initShape = function () {
            this.boxShape2 = new p2.Box({ width: this.disp.width * 0.3 * this.sf, height: this.disp.height * this.sf * 1.15 });
            this.boxShape = new p2.Box({ width: this.disp.width * 0.3 * this.sf, height: this.disp.height * this.sf * 1.15 });
            this.addShape(this.boxShape, [0, 0], Math.PI * 0.25);
            this.addShape(this.boxShape2, [0, 0], -Math.PI * 0.25);
            // this.addShape(new p2.Box({ width: this.disp.width * 0.24 * this.sf, height: this.disp.height * this.sf }), [0, 0], 0);
            // this.addShape(new p2.Box({ width: this.disp.width * this.sf, height: this.disp.height * 0.24 * this.sf }), [0, 0], 0);
        };
        //初始化刚体位置
        CCX.prototype.initPost = function () {
            //设置y轴坐标
            var p = Tools.egretTOp2(this.posX, this.posY);
            var pp = Tools.p2TOegretPoitn(p.x, p.y);
            this.position[0] = p.x;
            this.position[1] = p.y;
        };
        return CCX;
    }(mokuai.XingZhuang));
    mokuai.CCX = CCX;
    __reflect(CCX.prototype, "mokuai.CCX");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=CCX.js.map