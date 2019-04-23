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
    //水滴
    var SDX = (function (_super) {
        __extends(SDX, _super);
        function SDX(scene, posX, posY, sf, mass, type, peise, pz_numb, k) {
            var _this = this;
            if (k) {
                _this = _super.call(this, scene, "shuidi_k", posX, posY, sf, mass, type, peise, pz_numb) || this;
            }
            else
                _this = _super.call(this, scene, "shuidi", posX, posY, sf, mass, type, peise, pz_numb) || this;
            _this.initShape();
            _this.initPost();
            _this.initColl();
            _this.lx = 7;
            _this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(_this.lx)[0] * 0.8 / 3; //最小缩放值
            _this.k = k;
            _this.bitName = "shuidi";
            return _this;
        }
        SDX.prototype.initColl = function () {
            this.boxShape.collisionMask = mokuai.mokuai_cr;
            this.boxShape.collisionGroup = mokuai.mokuai_cr;
            this.boxShape1.collisionMask = mokuai.mokuai_cr;
            this.boxShape1.collisionGroup = mokuai.mokuai_cr;
        };
        SDX.prototype.initShape = function () {
            var verts = this.getList(this.disp.width * this.sf * 0.85, this.disp.height * this.sf * 0.47);
            this.boxShape = new p2.Convex({ vertices: verts });
            this.boxShape1 = new p2.Circle({ radius: this.disp.width * 0.5 * this.sf });
            this.addShape(this.boxShape, [0, 0], 0);
            this.addShape(this.boxShape1, [0, -this.disp.height * 0.13 * this.sf], 0);
        };
        SDX.prototype.getList = function (w, h) {
            var verts = [
                [0, h * 0.5 + h * 0.55],
                [-w * 0.5, -h * 0.5 + h * 0.55],
                [w * 0.5, -h * 0.5 + h * 0.55]
            ];
            return verts;
        };
        //初始化刚体位置
        SDX.prototype.initPost = function () {
            //设置y轴坐标
            var p = Tools.egretTOp2(this.posX, this.posY);
            var pp = Tools.p2TOegretPoitn(p.x, p.y);
            this.position[0] = p.x;
            this.position[1] = p.y;
        };
        return SDX;
    }(mokuai.XingZhuang));
    mokuai.SDX = SDX;
    __reflect(SDX.prototype, "mokuai.SDX");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=SDX.js.map