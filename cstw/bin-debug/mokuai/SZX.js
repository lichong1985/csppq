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
    var SZX = (function (_super) {
        __extends(SZX, _super);
        function SZX(scene, posX, posY, sf, mass, type, peise, pz_numb, k) {
            var _this = this;
            if (k) {
                _this = _super.call(this, scene, "shizi_k", posX, posY, sf, mass, type, peise, pz_numb) || this;
            }
            else
                _this = _super.call(this, scene, "shizi", posX, posY, sf, mass, type, peise, pz_numb) || this;
            _this.initShape();
            _this.initPost();
            _this.initColl();
            _this.lx = 8;
            _this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(_this.lx)[0] * 0.8 / 3; //最小缩放值
            _this.k = k;
            _this.bitName = "shizi";
            return _this;
        }
        SZX.prototype.initColl = function () {
            this.boxShape.collisionMask = mokuai.mokuai_cr;
            this.boxShape.collisionGroup = mokuai.mokuai_cr;
            this.boxShape2.collisionMask = mokuai.mokuai_cr;
            this.boxShape2.collisionGroup = mokuai.mokuai_cr;
        };
        SZX.prototype.initShape = function () {
            this.boxShape2 = new p2.Box({ width: this.disp.width * 0.24 * this.sf, height: this.disp.height * this.sf });
            this.boxShape = new p2.Box({ width: this.disp.width * this.sf, height: this.disp.height * 0.24 * this.sf });
            this.addShape(this.boxShape, [0, 0], 0);
            this.addShape(this.boxShape2, [0, 0], 0);
            // this.addShape(new p2.Box({ width: this.disp.width * 0.24 * this.sf, height: this.disp.height * this.sf }), [0, 0], 0);
            // this.addShape(new p2.Box({ width: this.disp.width * this.sf, height: this.disp.height * 0.24 * this.sf }), [0, 0], 0);
        };
        //初始化刚体位置
        SZX.prototype.initPost = function () {
            //设置y轴坐标
            var p = Tools.egretTOp2(this.posX, this.posY);
            var pp = Tools.p2TOegretPoitn(p.x, p.y);
            this.position[0] = p.x;
            this.position[1] = p.y;
        };
        return SZX;
    }(mokuai.XingZhuang));
    mokuai.SZX = SZX;
    __reflect(SZX.prototype, "mokuai.SZX");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=SZX.js.map