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
    var LBX = (function (_super) {
        __extends(LBX, _super);
        function LBX(scene, posX, posY, sf, mass, type, peise, pz_numb, k) {
            var _this = this;
            if (k) {
                _this = _super.call(this, scene, "liubian_k", posX, posY, sf, mass, type, peise, pz_numb) || this;
            }
            else
                _this = _super.call(this, scene, "liubian", posX, posY, sf, mass, type, peise, pz_numb) || this;
            _this.initShape();
            _this.initPost();
            _this.initColl();
            _this.lx = 10;
            _this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(_this.lx)[0] * 0.8 / 3; //最小缩放值
            _this.k = k;
            _this.bitName = "liubian";
            return _this;
        }
        LBX.prototype.initColl = function () {
            this.boxShape.collisionMask = mokuai.mokuai_cr;
            this.boxShape.collisionGroup = mokuai.mokuai_cr;
        };
        LBX.prototype.initShape = function () {
            var verts = this.getList(this.disp.width * this.sf, this.disp.height * this.sf);
            this.boxShape = new p2.Convex({ vertices: verts });
            this.addShape(this.boxShape);
        };
        LBX.prototype.getList = function (w, h) {
            // var verts = [
            //     [-w * 0.25, -h * 0.5],
            //     [w * 0.25, -h * 0.5],
            //     [w * 0.5, 0],
            //     [w * 0.25, h * 0.5],
            //     [-w * 0.25, h * 0.5],
            //     [-w * 0.5, 0]
            // ];
            var verts = [
                [-w * 0.25, h * 0.5],
                [-w * 0.5, 0],
                [-w * 0.25, -h * 0.5],
                [w * 0.25, -h * 0.5],
                [w * 0.5, 0],
                [w * 0.25, h * 0.5]
            ];
            return verts;
        };
        //初始化刚体位置
        LBX.prototype.initPost = function () {
            //设置y轴坐标
            var p = Tools.egretTOp2(this.posX, this.posY);
            var pp = Tools.p2TOegretPoitn(p.x, p.y);
            this.position[0] = p.x;
            this.position[1] = p.y;
        };
        return LBX;
    }(mokuai.XingZhuang));
    mokuai.LBX = LBX;
    __reflect(LBX.prototype, "mokuai.LBX");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=LBX.js.map