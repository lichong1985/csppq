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
var guanka;
(function (guanka) {
    var XG1 = (function (_super) {
        __extends(XG1, _super);
        function XG1(numb, size) {
            var _this = _super.call(this, guanka.all_color[size].db) || this;
            _this.gk_number = 0;
            _this.jg_ = 14;
            _this.gk_base = 0;
            _this.gk_max = _this.gk_base;
            _this.gk_now = 0;
            _this.s = [
                {},
                { "r": 255, "g": 255, "b": 255 },
                guanka.all_color[size].s2,
                { "r": 12, "g": 12, "b": 12 }
            ];
            _this.gk = numb;
            // this.initInfoNew(guanka.xgk50);
            if (_this.gk[_this.gk.length - 1].zd) {
                var base_x = Tools.getPhoneW() / 7;
                var y = _this.gk[_this.gk.length - 1].y;
                _this.zd_yy = -base_x * y - base_x * 0.5 - Tools.getPhoneH();
                var x25 = new egret.TextField();
                x25.text = "- - - - 25%";
                x25.textColor = 0xFFFFFF;
                x25.size = 40;
                x25.y = (_this.zd_yy - Tools.getPhoneH()) * 0.25;
                x25.x = Tools.getPhoneW();
                x25.anchorOffsetY = x25.height * 0.25;
                x25.anchorOffsetX = x25.width;
                _this.addChildAt(x25, 5);
                var x50 = new egret.TextField();
                x50.text = "- - - - 50%";
                x50.textColor = 0xFFFFFF;
                x50.size = 40;
                x50.y = (_this.zd_yy - Tools.getPhoneH()) * 0.5;
                x50.x = Tools.getPhoneW();
                x50.anchorOffsetY = x50.height * 0.5;
                x50.anchorOffsetX = x50.width;
                _this.addChildAt(x50, 5);
                var x75 = new egret.TextField();
                x75.text = "- - - - 75%";
                x75.textColor = 0xFFFFFF;
                x75.size = 40;
                x75.y = (_this.zd_yy - Tools.getPhoneH()) * 0.75;
                x75.x = Tools.getPhoneW();
                x75.anchorOffsetY = x75.height * 0.5;
                x75.anchorOffsetX = x75.width;
                _this.addChildAt(x75, 5);
            }
            _this.initSuKe();
            return _this;
        }
        XG1.prototype.up = function () {
            _super.prototype.up.call(this);
            // let mark = Math.floor((this.sk.position[1] - this.sk_y) / (Tools.getPhoneW() / 7)) + this.gk_base;
            var mark = Math.floor((this.y - Tools.getPhoneH()) / (Tools.getPhoneW() / 7)) + this.gk_base;
            // egret.log("MMMMMMMM:" + this.world.bodies.length + " --- " + mark + " |||| " + this.sk.position[1] + " ---- " + this.sk_y + " -- " + this.y + " -- " + Tools.getPhoneH())
            // egret.log("MMMMMMMMM:" + Math.floor((this.sk.position[1] - this.sk_y) / (Tools.getPhoneW() / 7)) + " --- " + Math.floor((this.y - Tools.getPhoneH() )/ (Tools.getPhoneW() / 7)));
            if (mark > this.gk_max) {
                this.gk_max = mark;
            }
            if (this.gk_max > this.gk_now) {
                this.initInfoNew();
                this.gk_now = this.gk_max;
            }
        };
        XG1.prototype.initInfoNew = function () {
            var base_x = Tools.getPhoneW() / 7;
            var base_y = base_x;
            for (var size = 0; size < this.gk.length; size++) {
                var info = this.gk[size];
                var y = this.gk[size].y;
                var h = this.gk[size].h;
                if (y > this.gk_max || (y + h - 1) <= this.gk_now) {
                    continue;
                }
                // egret.log("SSSSSSSS:" + y);
                var sf_w = this.gk[size].sf_w;
                var sf_h = this.gk[size].sf_h;
                // if (sf_h == null) {
                //     sf_h = sf_w;
                // }
                var jg = this.gk[size].jg;
                var w = this.gk[size].w;
                var lx = this.gk[size].lx;
                var k = this.gk[size].k;
                var x = this.gk[size].x;
                var bsl = this.gk[size].bsl;
                var tw_zy = this.gk[size].tw_zy;
                var xuan_zhuan = this.gk[size].xz;
                var zq = this.gk[size].zq;
                var bian = this.gk[size].bian;
                //终点
                if (this.gk[size].zd) {
                    var bit = new egret.Bitmap(RES.getRes("zhongdian"));
                    bit.x = Tools.getPhoneW() * 0.5;
                    bit.y = -base_x * y - base_x * 0.5 - Tools.getPhoneH();
                    bit.anchorOffsetX = bit.width * 0.5;
                    this.addChildAt(bit, -1);
                    this.zd_yy = bit.y;
                    return;
                }
                //变色栏
                if (bsl) {
                    this.bs_yy = -base_x * y - Tools.getPhoneH();
                    for (var b = 0; b < 10; b++) {
                        var yy = -base_x * y - Tools.getPhoneH() - b * 1;
                        var bit1 = void 0;
                        if (b % 2 == 0)
                            bit1 = new mokuai.BSL(RES.getRes("bsl"), yy, this.s[1], this.s[2]);
                        else
                            bit1 = new mokuai.BSL(RES.getRes("bsl"), yy, this.s[2], this.s[1]);
                        this.addChildAt(bit1, 5);
                    }
                    continue;
                }
                var i = this.gk_max - y;
                // for (let i = 0; i < h; i++) {
                for (var j = 0; j < w; j++) {
                    var z = void 0;
                    if (this.gk[size].df) {
                        var jin = true;
                        for (var dd = 0; dd < this.gk[size].df.length; dd++) {
                            if (this.gk[size].df[dd][0] == j && this.gk[size].df[dd][1] == i || this.gk[size].df[dd][0] == -1) {
                                this.addXZ(this.gk[size].df[dd][3], j + x, i + y, sf_w, sf_h, this.gk[size].df[dd][2], tw_zy, i * this.jg_ + this.jg_, k, xuan_zhuan, zq, bian);
                                jin = false;
                                if (jin) {
                                    this.addXZ(lx, j + x, i + y, sf_w, sf_h, 1, tw_zy, i * this.jg_ + this.jg_, k, xuan_zhuan, zq, bian);
                                }
                            }
                            else {
                                this.addXZ(lx, j + x, i + y, sf_w, sf_h, 1, tw_zy, i * this.jg_ + this.jg_, k, xuan_zhuan, zq, bian);
                            }
                        }
                    }
                    else {
                        this.addXZ(lx, j + x, i + y, sf_w, sf_h, 1, tw_zy, i * this.jg_ + this.jg_, k, xuan_zhuan, zq, bian);
                    }
                }
                // }
            }
        };
        XG1.prototype.addXZ = function (lx, x, y, sf_w, sf_h, type_p, tw_zy, wait, k, xuan_zhuan, zq, bian) {
            var base_x = Tools.getPhoneW() / 7;
            var base_y = base_x;
            var z;
            if (sf_h == 0.3) {
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 1; j++) {
                        var s = base_x / Tools.getTXInf0(lx)[0] * 0.8 / 3;
                        var xx = base_x * x + base_x / 1 * j + base_x / 6 + base_x / 6;
                        var yy = -base_x * y - base_x / 3 * i - Tools.getPhoneH();
                        var jz = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 1, k);
                        jz.type_P = type_p;
                        if (tw_zy) {
                            jz.is_tw = true;
                            jz.addtw(tw_zy);
                            jz.tw_numb = wait + this.jg_ / 3 * i;
                        }
                        if (xuan_zhuan) {
                            jz.is_xuanzhuan = true;
                            jz.xuanzhuan_numb = xuan_zhuan;
                        }
                        if (bian) {
                            jz.is_bian = true;
                            jz.color_2 = this.s[2];
                            jz.color_1 = this.s[1];
                        }
                        this.addBuilding(jz);
                    }
                }
            }
            else if (sf_h != null && sf_w != sf_h) {
                if (sf_h == -3) {
                    for (var i = 0; i < 3; i++) {
                        for (var j = 0; j < 1; j++) {
                            var s = base_x / Tools.getTXInf0(lx)[1] * 0.9 * 0.33333;
                            var sw = base_x / Tools.getTXInf0(lx)[0] * 0.9 * sf_w;
                            var xx = base_x * x + base_x * sf_w * 0.5;
                            var yy = -base_x * y - base_x / 3 * i - Tools.getPhoneH() - base_x / 6;
                            var jz = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 1, k);
                            jz.type_P = type_p;
                            if (tw_zy) {
                                jz.is_tw = true;
                                jz.addtw(tw_zy);
                                jz.tw_numb = wait + this.jg_ / 3 * i;
                            }
                            if (xuan_zhuan) {
                                jz.is_xuanzhuan = true;
                                jz.xuanzhuan_numb = xuan_zhuan;
                            }
                            if (bian) {
                                jz.is_bian = true;
                                jz.color_2 = this.s[2];
                                jz.color_1 = this.s[1];
                            }
                            this.addBuilding(jz);
                        }
                    }
                }
                else {
                    var s = base_x / Tools.getTXInf0(lx)[1] * 0.9 * sf_h;
                    var sw = base_x / Tools.getTXInf0(lx)[0] * 0.9 * sf_w;
                    var xx = base_x * x + base_x * 0.5 * sf_w;
                    var yy = -base_x * y - base_x * 0.5 - Tools.getPhoneH();
                    z = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 1, k);
                    z.type_P = type_p;
                }
            }
            else if (sf_w == 1) {
                var s = base_x / Tools.getTXInf0(lx)[0] * 0.9;
                var xx = base_x * x + base_x * 0.5;
                var yy = -base_x * y - base_x * 0.5 - Tools.getPhoneH();
                z = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 9, k);
                z.type_P = type_p;
                if (zq) {
                    z.is_zq = true;
                    z.jd = zq[0];
                    z.bj = base_x * zq[1];
                    z.jz = zq[2];
                }
            }
            else if (sf_w == -3) {
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        var s = base_x / Tools.getTXInf0(lx)[0] * 0.8 / 3;
                        if (lx == 7) {
                            s = base_x / Tools.getTXInf0(lx)[1] * 0.8 / 3;
                        }
                        var xx = base_x * x + base_x / 3 * j + base_x / 6;
                        var yy = -base_x * y - base_x / 3 * i - Tools.getPhoneH() - base_x / 6;
                        var jz = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 1, k);
                        jz.type_P = type_p;
                        if (tw_zy) {
                            jz.is_tw = true;
                            jz.addtw(tw_zy);
                            jz.tw_numb = wait + (this.jg_ / 3) * i;
                        }
                        if (xuan_zhuan) {
                            jz.is_xuanzhuan = true;
                            jz.xuanzhuan_numb = xuan_zhuan;
                        }
                        if (bian) {
                            jz.is_bian = true;
                            jz.color_2 = this.s[2];
                            jz.color_1 = this.s[1];
                        }
                        this.addBuilding(jz);
                    }
                }
            }
            else if (sf_w == 0.3) {
                for (var i = 0; i < 1; i++) {
                    for (var j = 0; j < 3; j++) {
                        var s = base_x / Tools.getTXInf0(lx)[0] * 0.8 / 3;
                        var xx = base_x * x + base_x / 3 * j + base_x / 6;
                        var yy = -base_x * y - base_x / 3 * 1 - Tools.getPhoneH() - base_x / 6;
                        var jz = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 1, k);
                        jz.type_P = type_p;
                        if (tw_zy) {
                            jz.is_tw = true;
                            jz.addtw(tw_zy);
                            jz.tw_numb = wait + (this.jg_ / 3) * (j);
                        }
                        if (xuan_zhuan) {
                            jz.is_xuanzhuan = true;
                            jz.xuanzhuan_numb = xuan_zhuan;
                        }
                        if (bian) {
                            jz.is_bian = true;
                            jz.color_2 = this.s[2];
                            jz.color_1 = this.s[1];
                        }
                        this.addBuilding(jz);
                    }
                }
            }
            else if (sf_w == 1.5) {
                var s = base_x / Tools.getTXInf0(lx)[0] * 0.9 * 1.5;
                var xx = base_x * x + base_x * 0.5;
                var yy = -base_x * y - base_x * 0.5 - Tools.getPhoneH();
                z = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 14, k);
                z.type_P = type_p;
            }
            else if (sf_w == 2) {
                var s = base_x / Tools.getTXInf0(lx)[0] * 0.9 * 2;
                var xx = base_x * x + base_x;
                var yy = -base_x * y - base_x - Tools.getPhoneH();
                z = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 36, k);
                z.type_P = type_p;
            }
            else if (sf_w == 3) {
                var s = base_x / Tools.getTXInf0(lx)[0] * 0.9 * 2.6;
                var xx = base_x * x + base_x + base_x * 0.5;
                var yy = -base_x * y - base_x - base_x * 0.5 - Tools.getPhoneH();
                z = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 81, k);
                z.type_P = type_p;
            }
            else if (sf_w == -2) {
                for (var i = 0; i < 2; i++) {
                    for (var j = 0; j < 2; j++) {
                        var s = base_x / Tools.getTXInf0(lx)[0] * 0.8 / 2;
                        if (lx == 7) {
                            s = base_x / Tools.getTXInf0(lx)[1] * 0.8 / 2;
                        }
                        var xx = base_x * x + base_x / 2 * j + base_x / 4;
                        var yy = -base_x * y - base_x / 2 * i - Tools.getPhoneH() - base_x / 4;
                        var jz = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 2, k);
                        // egret.log("ssssssssss:" + this.yuList.length)
                        // let jz = this.yuList.pop()
                        jz.position[0] = xx;
                        jz.position[1] = -yy;
                        jz.type_P = type_p;
                        if (tw_zy) {
                            jz.is_tw = true;
                            jz.addtw(tw_zy);
                            jz.tw_numb = wait + this.jg_ / 2 * i;
                        }
                        if (xuan_zhuan) {
                            jz.is_xuanzhuan = true;
                            jz.xuanzhuan_numb = xuan_zhuan;
                        }
                        if (bian) {
                            jz.is_bian = true;
                            jz.color_2 = this.s[2];
                            jz.color_1 = this.s[1];
                        }
                        this.addBuilding(jz);
                    }
                }
            }
            if (z) {
                if (tw_zy) {
                    z.is_tw = true;
                    z.addtw(tw_zy);
                    z.tw_numb = wait;
                }
                if (xuan_zhuan) {
                    z.is_xuanzhuan = true;
                    z.xuanzhuan_numb = xuan_zhuan;
                }
                if (bian) {
                    z.is_bian = true;
                    z.color_2 = this.s[2];
                    z.color_1 = this.s[1];
                }
                this.addBuilding(z);
            }
        };
        return XG1;
    }(guanka.SceneBase));
    guanka.XG1 = XG1;
    __reflect(XG1.prototype, "guanka.XG1");
})(guanka || (guanka = {}));
//# sourceMappingURL=XG1.js.map