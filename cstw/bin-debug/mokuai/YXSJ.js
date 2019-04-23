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
    var YXSJ = (function (_super) {
        __extends(YXSJ, _super);
        function YXSJ(scene, posX, posY, sf, mass, type, peise, pz_numb, k) {
            var _this = this;
            if (k)
                _this = _super.call(this, scene, "youxiesanjiao_k", posX, posY, sf, mass, type, peise, pz_numb) || this;
            else
                _this = _super.call(this, scene, "youxiesanjiao", posX, posY, sf, mass, type, peise, pz_numb) || this;
            _this.initShape();
            _this.initPost();
            _this.initColl();
            _this.lx = 4;
            _this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(_this.lx)[0] * 0.8 / 3; //最小缩放值
            _this.k = k;
            _this.bitName = "youxiesanjiao";
            return _this;
        }
        YXSJ.prototype.initColl = function () {
            this.boxShape.collisionMask = mokuai.mokuai_cr;
            this.boxShape.collisionGroup = mokuai.mokuai_cr;
        };
        YXSJ.prototype.initShape = function () {
            var verts = this.getList(this.disp.width * this.sf, this.disp.height * this.sf);
            this.boxShape = new p2.Convex({ vertices: verts });
            this.addShape(this.boxShape);
        };
        YXSJ.prototype.getList = function (w, h) {
            var verts = [
                [w * 0.5, h * 0.5],
                [-w * 0.5, -h * 0.5],
                [w * 0.5, -h * 0.5]
            ];
            return verts;
        };
        //初始化刚体位置
        YXSJ.prototype.initPost = function () {
            //设置y轴坐标
            var p = Tools.egretTOp2(this.posX, this.posY);
            var pp = Tools.p2TOegretPoitn(p.x, p.y);
            this.position[0] = p.x;
            this.position[1] = p.y;
        };
        return YXSJ;
    }(mokuai.XingZhuang));
    mokuai.YXSJ = YXSJ;
    __reflect(YXSJ.prototype, "mokuai.YXSJ");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=YXSJ.js.map