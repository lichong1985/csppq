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
    var WJX2 = (function (_super) {
        __extends(WJX2, _super);
        function WJX2(scene, posX, posY, sf, mass, type, peise, pz_numb, k) {
            var _this = this;
            if (k) {
                _this = _super.call(this, scene, "wujiao_k", posX, posY, sf, mass, type, peise, pz_numb) || this;
            }
            else
                _this = _super.call(this, scene, "wujiao", posX, posY, sf, mass, type, peise, pz_numb) || this;
            _this.initShape();
            _this.initPost();
            _this.initColl();
            _this.lx = 6;
            _this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(_this.lx)[0] * 0.8 / 3; //最小缩放值
            _this.k = k;
            _this.bitName = "wujiao";
            return _this;
        }
        WJX2.prototype.initColl = function () {
            this.boxShape.collisionMask = mokuai.mokuai_cr;
            this.boxShape.collisionGroup = mokuai.null_cs;
            this.boxShape2.collisionMask = mokuai.mokuai_cr;
            this.boxShape2.collisionGroup = mokuai.null_cs;
            this.boxShape3.collisionMask = mokuai.mokuai_cr;
            this.boxShape3.collisionGroup = mokuai.null_cs;
            this.boxShape4.collisionMask = mokuai.mokuai_cr;
            this.boxShape4.collisionGroup = mokuai.null_cs;
            this.boxShape5.collisionMask = mokuai.mokuai_cr;
            this.boxShape5.collisionGroup = mokuai.null_cs;
        };
        WJX2.prototype.initShape = function () {
            // let verts = this.getList(this.disp.width * this.sf, this.disp.height * this.sf);
            var w = this.disp.width * this.sf;
            var h = this.disp.height * this.sf;
            var verts = [
                [(0), (h * 0.5)],
                [(-w * 0.16), (h * 0.17)],
                [(w * 0.16), (h * 0.17)]
            ];
            this.boxShape = new p2.Convex({ vertices: verts });
            verts = [
                [(w * 0.16), (h * 0.17)],
                [(w * 0.24), -(h * 0.13)],
                [(w * 0.47), (h * 0.12)]
            ];
            this.boxShape2 = new p2.Convex({ vertices: verts });
            verts = [
                [(w * 0.24), (-h * 0.13)],
                [(0), (-h * 0.32)],
                [(w * 0.29), (-h * 0.47)]
            ];
            this.boxShape3 = new p2.Convex({ vertices: verts });
            verts = [
                [(0), -(h * 0.33)],
                [(-w * 0.25), -(h * 0.13)],
                [(-w * 0.29), -(h * 0.47)]
            ];
            this.boxShape4 = new p2.Convex({ vertices: verts });
            verts = [
                [(-w * 0.25), -(h * 0.13)],
                [(-w * 0.16), (h * 0.17)],
                [(-w * 0.47), (h * 0.12)]
            ];
            this.boxShape5 = new p2.Convex({ vertices: verts });
            this.addShape(this.boxShape);
            this.addShape(this.boxShape2);
            this.addShape(this.boxShape3);
            this.addShape(this.boxShape4);
            this.addShape(this.boxShape5);
        };
        // public getList(w: number, h: number): any {
        //     var verts = [
        //         [(0), -(h * 0.5)],
        //         [(w * 0.16), -(h * 0.15)],
        //         [(w * 0.5), -(h * 0.15)],
        //         [(w * 0.25), (h * 0.13)],
        //         [(w * 0.34), (h * 0.5)],
        //         [(0), (h * 0.33)],
        //         [(-w * 0.34), (h * 0.5)],
        //         [(-w * 0.25), (h * 0.13)],
        //         [(-w * 0.5), -(h * 0.15)],
        //         [(-w * 0.16), -(h * 0.17)],
        //     ];
        //     return verts;
        // }
        //初始化刚体位置
        WJX2.prototype.initPost = function () {
            //设置y轴坐标
            var p = Tools.egretTOp2(this.posX, this.posY);
            this.position[0] = p.x;
            this.position[1] = p.y;
        };
        return WJX2;
    }(mokuai.XingZhuang));
    mokuai.WJX2 = WJX2;
    __reflect(WJX2.prototype, "mokuai.WJX2");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=WJX2.js.map