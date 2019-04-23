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
    //1:方块
    //2：圆
    //3：三角
    //4:十字
    //5:五边形
    //6:六边形
    //7:水滴
    //8:横杠
    mokuai.null_cs = Math.pow(2, 0); //不与任何组碰撞˝
    mokuai.mokuai_cr = Math.pow(2, 1);
    var XingZhuang = (function (_super) {
        __extends(XingZhuang, _super);
        function XingZhuang(scene, bitName, posX, posY, sf, mass, type, peise, pz_numb, sf_w) {
            var _this = 
            //建筑物不动
            _super.call(this, { mass: mass }) || this;
            _this.posX = 0;
            _this.posY = 0;
            _this.sf = 1;
            _this.sf_w = 0;
            _this.type_P = 1; //1 白 2 变色 3黑洞 4: 变色不发生碰撞
            _this.is_sk = false;
            _this.pz_numb = 0; //碰撞指数
            _this.pz_mark = 1;
            _this.is_bs = true;
            _this.is_zhongli = false; //是否添加重力
            _this.is_tw = false; //是否挂在缓动动画
            _this.tw_numb = 5;
            _this.tw_zy = [0, 0, 0, 0]; // 缓动数据
            _this.is_xuanzhuan = false; //是否旋转
            _this.xuanzhuan_numb = 0;
            _this.sf_min = 0; //最小缩放值
            _this.is_zq = false; //是否转圈
            _this.pos_mark = [0, 0];
            _this.jd = 0; //角度
            _this.bj = 0; //半径
            _this.jz = 0; //角度增量
            _this.is_bian = false; //变色
            _this.bian_cd = 1000;
            _this.bian_mark = 0;
            _this.bz = 0; //爆竹
            //添加尾翼
            //尾翼cd
            _this.wyCD = 50;
            _this.wyMark = 0;
            _this.scene = scene;
            _this.posX = posX;
            _this.posY = posY;
            _this.sf = sf;
            _this.sf_base = sf;
            if (sf_w) {
                _this.sf_w = sf_w;
            }
            _this.peise_ = peise;
            _this.initBitMap(bitName); //初始化贴图
            _this.damping = 0.9;
            _this.type_P = type;
            _this.pz_numb = pz_numb;
            _this.pz_numb_all = pz_numb;
            var p = Tools.egretTOp2(_this.posX, _this.posY);
            _this.pos_mark[0] = p.x;
            _this.pos_mark[1] = p.y;
            return _this;
        }
        XingZhuang.prototype.initBitMap = function (bitName) {
            this.disp = new egret.Bitmap(RES.getRes(bitName));
            this.disp.anchorOffsetX = this.disp.width * 0.5;
            this.disp.anchorOffsetY = this.disp.height * 0.5;
            if (this.sf_w != 0)
                this.disp.scaleX = this.sf_w;
            else
                this.disp.scaleX = this.sf;
            this.disp.scaleY = this.sf;
            //刚体添加贴图
            this.displays = [this.disp];
            this.peise(this.peise_);
        };
        XingZhuang.prototype.peise = function (rgb) {
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
            // egret.log("BBBBBBBBBBBBBBBBBBB:" + rgb.r)
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.disp.filters = [colorFlilter];
            this.peise_ = rgb;
        };
        XingZhuang.prototype.texiao1 = function () {
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
            this.zjsp1();
        };
        //特效碎裂
        XingZhuang.prototype.zjsp1 = function () {
            var b = new egret.Bitmap(RES.getRes("yuan"));
            b.x = this.disp.x;
            b.y = this.disp.y;
            if (this.peise_) {
                var colorMatrix = [
                    1, 0, 0, 0, this.peise_.r - 255,
                    0, 1, 0, 0, this.peise_.g - 255,
                    0, 0, 1, 0, this.peise_.b - 255,
                    0, 0, 0, 1, 0
                ];
                var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
                b.filters = [colorFlilter];
            }
            // this.scene.addChildAt(b, 10);
            this.scene.addChildAt(b, 3);
            b.anchorOffsetX = b.width * 0.5;
            b.anchorOffsetY = b.height * 0.5;
            var s1 = 1;
            var s2 = 3;
            var j1 = 1000;
            var j2 = 2000;
            //缩放
            var scale = Tools.GetRandomNum(s1, s2) * 0.1 * this.sf;
            b.scaleX = scale;
            b.scaleY = scale;
            var r = 100;
            var x = Tools.GetRandomNum(-r, r);
            var y = Tools.GetRandomNum(-r, r);
            var t = Tools.GetRandomNum(j1, j2);
            egret.Tween.get(b).to({ "x": this.disp.x + x, "y": this.disp.y + y }, t).call(this.dell, this, [b]);
        };
        XingZhuang.prototype.texiao = function () {
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
            this.zjsp();
        };
        //特效碎裂
        XingZhuang.prototype.zjsp = function () {
            var b = new egret.Bitmap(RES.getRes("yuan"));
            b.x = this.disp.x;
            b.y = this.disp.y;
            if (this.peise_) {
                var colorMatrix = [
                    1, 0, 0, 0, this.peise_.r - 255,
                    0, 1, 0, 0, this.peise_.g - 255,
                    0, 0, 1, 0, this.peise_.b - 255,
                    0, 0, 0, 1, 0
                ];
                var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
                b.filters = [colorFlilter];
            }
            // this.scene.addChildAt(b, 10);
            this.scene.addChildAt(b, 3);
            b.anchorOffsetX = b.width * 0.5;
            b.anchorOffsetY = b.height * 0.5;
            var s1 = 1;
            var s2 = 3;
            var j1 = 100;
            var j2 = 600;
            //缩放
            var scale = Tools.GetRandomNum(s1, s2) * 0.1 * this.sf;
            b.scaleX = scale;
            b.scaleY = scale;
            var r = 100;
            var x = Tools.GetRandomNum(-r, r);
            var y = Tools.GetRandomNum(-r, r);
            var t = Tools.GetRandomNum(j1, j2);
            egret.Tween.get(b).to({ "x": this.disp.x + x, "y": this.disp.y + y }, t).call(this.dell, this, [b]);
        };
        //移除缓动动画
        XingZhuang.prototype.dell = function (DD) {
            if (DD.parent) {
                DD.parent.removeChild(DD);
            }
            DD = null;
        };
        XingZhuang.prototype.weiyi = function () {
            if (egret.getTimer() - this.wyMark < this.wyCD && this.disp != null) {
                return;
            }
            this.wyMark = egret.getTimer();
            var b = new egret.Bitmap(RES.getRes(this.bitName));
            b.anchorOffsetX = this.disp.width * 0.5;
            b.anchorOffsetY = this.disp.height * 0.5;
            b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = this.disp.x;
            b.y = this.disp.y;
            b.scaleX = (this.sf * 0.5);
            b.scaleY = (this.sf * 0.5);
            var colorMatrix = [
                1, 0, 0, 0, this.peise_.r - 255,
                0, 1, 0, 0, this.peise_.g - 255,
                0, 0, 1, 0, this.peise_.b - 255,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            b.filters = [colorFlilter];
            if (this.sf) {
                b.scaleX = this.sf;
                b.scaleY = this.sf;
            }
            var y = b.y + 200;
            this.scene.addChildAt(b, 3);
            b.alpha = 0.5;
            egret.Tween.get(b).to({ "alpha": 0.1, "y": y, "scaleX": this.sf * 0.1, "scaleY": this.sf * 0.1 }, 500).call(this.dell, this, [b]);
        };
        XingZhuang.prototype.up = function () { };
        ;
        XingZhuang.prototype.zl = function () {
            this.force = [0, -50];
            this.weiyi();
        };
        //添加缓动动画
        XingZhuang.prototype.addtw = function (tw_zy) {
            if (tw_zy[3] == 0) {
                var go_x = this.position[0] + tw_zy[0] * (Tools.getPhoneW() / 7);
                var back_x = this.position[0] + tw_zy[1] * (Tools.getPhoneW() / 7);
                this.tw_zy[0] = go_x;
                this.tw_zy[1] = back_x;
                this.tw_zy[2] = tw_zy[2];
                this.tw_zy[3] = tw_zy[3];
            }
            if (tw_zy[3] == 1) {
                var go_x = this.position[1] + tw_zy[0] * (Tools.getPhoneW() / 7);
                var back_x = this.position[1] + tw_zy[1] * (Tools.getPhoneW() / 7);
                this.tw_zy[0] = go_x;
                this.tw_zy[1] = back_x;
                this.tw_zy[2] = tw_zy[2];
                this.tw_zy[3] = tw_zy[3];
            }
        };
        //刷新左右移动
        XingZhuang.prototype.upTw = function () {
            if (this.tw_zy[3] == 0) {
                if (this.position[0] < this.tw_zy[0]) {
                    this.tw_zy[2] = Math.abs(this.tw_zy[2]);
                }
                if (this.position[0] > this.tw_zy[1]) {
                    this.tw_zy[2] = -Math.abs(this.tw_zy[2]);
                }
                this.force = [this.tw_zy[2], 0];
            }
            if (this.tw_zy[3] == 1) {
                if (this.position[1] < this.tw_zy[0]) {
                    this.tw_zy[2] = Math.abs(this.tw_zy[2]);
                }
                if (this.position[1] > this.tw_zy[1]) {
                    this.tw_zy[2] = -Math.abs(this.tw_zy[2]);
                }
                this.force = [0, this.tw_zy[2]];
            }
        };
        //刷新旋转
        XingZhuang.prototype.upXuanZhuan = function () {
            this.angularVelocity = this.xuanzhuan_numb;
        };
        //转圈
        XingZhuang.prototype.upZQ = function () {
            this.jd += this.jz;
            var sx = Math.sin(this.jd) * this.bj;
            var sy = Math.cos(this.jd) * this.bj;
            this.position[0] = this.pos_mark[0] + sx;
            this.position[1] = this.pos_mark[1] + sy;
        };
        //变色
        XingZhuang.prototype.upBian = function () {
            if (egret.getTimer() > (this.bian_mark)) {
                this.bian_mark = egret.getTimer() + this.bian_cd;
                if (this.type_P == 1) {
                    this.peise(this.color_2);
                    this.type_P = 2;
                }
                else {
                    this.peise(this.color_1);
                    this.type_P = 1;
                }
            }
        };
        return XingZhuang;
    }(p2.Body));
    mokuai.XingZhuang = XingZhuang;
    __reflect(XingZhuang.prototype, "mokuai.XingZhuang");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=XingZhuang.js.map