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
var scene;
(function (scene) {
    //战斗场景宽
    // export const battle_sceneW: number = 4000;
    // //战斗场景高
    // export const battle_sceneH: number = 4000;
    var TestScene = (function (_super) {
        __extends(TestScene, _super);
        function TestScene(rgb) {
            var _this = _super.call(this) || this;
            _this.is_zou = false;
            _this.is_sk = true;
            _this.bs_yy = 0;
            _this.zd_yy = 0;
            _this.sk_y = 0;
            _this.k = 0;
            _this.is_shibai = false; //通关失败
            _this.is_kedianji = false; //失败播放特效后可点击表示
            //帧同步物理引擎
            _this.yuList = new Array();
            //---------------------------------触控相关-------------------------------------
            _this.down_mark = egret.Point.create(0, 0);
            _this.mark = 0;
            _this.is_mv = true;
            _this.removeList = new Array();
            _this.addList = new Array();
            for (var i = 0; i < 400; i++) {
                var s = (Tools.getPhoneW() / 7) / Tools.getTXInf0(2)[0] * 0.8 / 2;
                var jz = Tools.getTX(_this, 2, -10, -10, s, { "r": 251, "g": 0, "b": 25 }, 2, null);
                _this.yuList.push(jz);
            }
            _this.initP2World();
            _this.initBG(rgb);
            _this.initTestData();
            _this.addShuKeListener();
            _this.initcoll();
            _this.k = main.MainR.k;
            return _this;
        }
        TestScene.prototype.initBG = function (rgb) {
            this.bg = new egret.Bitmap(RES.getRes("bgb"));
            this.bg.width = Tools.getPhoneW() + 40;
            this.bg.height = 10000;
            this.bg.x = -20;
            this.bg.y = -10000;
            this.addChildAt(this.bg, 1);
            var colorMatrix = [
                1, 0, 0, 0, rgb.r - 255,
                0, 1, 0, 0, rgb.g - 255,
                0, 0, 1, 0, rgb.b - 255,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.bg.filters = [colorFlilter];
        };
        TestScene.prototype.initP2World = function () {
            this.world = new p2.World();
            // this.world.sleepMode = p2.World.BODY_SLEEPING;
            this.world.gravity = [0, 0];
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this); //添加帧同步
        };
        TestScene.prototype.rem = function () {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        };
        TestScene.prototype.initSuKe = function () {
            var x = Tools.getPhoneW() * 0.5;
            var y = -Tools.getPhoneH() * 0.25;
            this.sk_y = Tools.getPhoneH() * 0.25;
            // let y = 800;
            this.sk = new suke.Suke(this, 1, 1, x, y);
            this.addBuilding(this.sk);
        };
        //添加游戏引擎帧同步
        TestScene.prototype.onEnterFrame = function () {
            this.addPZ();
            this.p2Updata();
            this.up();
            this.remove();
        };
        TestScene.prototype.addPZ = function () {
            var size = this.addList.length;
            if (size == 0) {
                return;
            }
            for (var i = 0; i < size; i++) {
                var m = this.addList.pop();
                this.addBuilding(m);
            }
        };
        TestScene.prototype.remove = function () {
            var size = this.removeList.length;
            for (var i = 0; i < size; i++) {
                var m = this.removeList.pop();
                if (m.disp.parent) {
                    this.removeChild(m.disp);
                }
                this.world.removeBody(m);
                // this.yuList.push(m);
            }
        };
        //创建碰撞检测函数
        TestScene.prototype.initcoll = function () {
            var s = this;
            this.world.on('beginContact', function (evt) {
                if (!s.is_zou) {
                    return;
                }
                var a = evt.bodyA;
                var b = evt.bodyB;
                if (a.is_tw) {
                    a.is_tw = false;
                }
                if (b.is_tw) {
                    b.is_tw = false;
                }
                if (a.is_xuanzhuan) {
                    a.is_xuanzhuan = false;
                }
                if (b.is_xuanzhuan) {
                    b.is_xuanzhuan = false;
                }
                if (a.is_zq) {
                    a.is_zq = false;
                }
                if (b.is_zq) {
                    b.is_zq = false;
                }
                if (a.is_bian) {
                    a.is_bian = false;
                }
                if (b.is_bian) {
                    b.is_bian = false;
                }
                if (a.type_P == 3 && b.type_P == 3) {
                    return;
                }
                if (a.type_P == 1 && b.type_P == 1) {
                    return;
                }
                if (a.type_P == 2 && b.type_P == 2) {
                    return;
                }
                if (a.is_sk && b.type_P == 4) {
                    return;
                }
                if (b.is_sk && a.type_P == 4) {
                    return;
                }
                //大黑球
                if (a.type_P == 3) {
                    if (a.pz_mark < 1) {
                        return;
                    }
                    a.pz_mark--;
                    s.pengzhuang(a, b);
                }
                if (b.type_P == 3) {
                    if (b.pz_mark < 1) {
                        return;
                    }
                    b.pz_mark--;
                    s.pengzhuang(a, b);
                }
                //sk
                if (a.type_P != b.type_P && b.is_sk) {
                    if (!s.is_shibai) {
                        b.texiao1();
                        s.sanping();
                        s.is_shibai = true;
                    }
                    return;
                }
                if (b.type_P != a.type_P && a.is_sk) {
                    if (!s.is_shibai) {
                        a.texiao1();
                        s.sanping();
                        s.is_shibai = true;
                    }
                    return;
                }
                //---
            });
        };
        //添加新球
        TestScene.prototype.addNewOne = function (oldPZ, newPZ, mark) {
            this.removeList.push(mark);
            var jz = Tools.getTX(this, mark.lx, mark.position[0], -mark.position[1], mark.sf_base - (((mark.pz_numb_all - newPZ) / mark.pz_numb_all) * (mark.sf_base - mark.sf_min)), mark.peise_, newPZ, mark.k);
            jz.pz_numb_all = mark.pz_numb_all;
            jz.sf_base = mark.sf_base;
            jz.pz_mark = 1;
            jz.type_P = mark.type_P;
            jz.angle = mark.angle;
            this.addList.push(jz);
        };
        //碰撞
        TestScene.prototype.pengzhuang = function (a, b) {
            if (a.pz_numb > b.pz_numb) {
                this.addNewOne(a.pz_numb, a.pz_numb - b.pz_numb, a);
                a.pz_numb -= b.pz_numb;
                this.removeList.push(b);
                b.texiao();
            }
            if (a.pz_numb == b.pz_numb) {
                this.removeList.push(b);
                this.removeList.push(a);
                b.texiao();
                a.texiao();
            }
            if (a.pz_numb < b.pz_numb) {
                this.addNewOne(b.pz_numb, b.pz_numb - a.pz_numb, b);
                b.pz_numb -= a.pz_numb;
                this.removeList.push(a);
                a.texiao();
            }
        };
        TestScene.prototype.p2Updata = function () {
            this.world.step(25 / 1000);
            // this.world.step(1/60.0);
            var l = this.world.bodies.length;
            // egret.log("LLLLLLLLL:" + l + " --- " + Tools.getPhoneH() / (Tools.getPhoneW() / 7));
            for (var i = 0; i < l; i++) {
                var boxBody = this.world.bodies[i];
                var xz = boxBody;
                if (boxBody.position[1] < (this.y - (Tools.getPhoneH() - 150)) || boxBody.position[0] < -100 || boxBody.position[0] > (Tools.getPhoneW() + 100)
                    && this.is_zou && !xz.is_zhongli && !xz.is_sk) {
                    this.removeList.push(boxBody);
                }
                if (xz.is_sk) {
                    xz.up();
                }
                if (xz.is_zhongli) {
                    xz.zl();
                }
                if (xz.is_zq) {
                    xz.upZQ();
                }
                if (xz.is_bs && this.bs_yy != 0 && -xz.position[1] < this.bs_yy) {
                    if (xz.is_sk) {
                        xz.peise(this.s[2]);
                        xz.is_bs = false;
                        xz.texiao();
                        this.jd_bs();
                        xz.type_P = 2;
                    }
                    else if (xz.type_P == 1) {
                        xz.peise(this.s[2]);
                        xz.is_bs = false;
                        xz.type_P = 4;
                    }
                }
                if (xz.is_bian) {
                    xz.upBian();
                }
                if (xz.is_tw == true) {
                    if (xz.tw_numb > 0) {
                        xz.tw_numb--;
                    }
                    if (xz.tw_numb <= 0) {
                        xz.upTw();
                    }
                }
                if (xz.is_xuanzhuan) {
                    xz.upXuanZhuan();
                }
                for (var i_1 = 0; i_1 < boxBody.displays.length; i_1++) {
                    var box = boxBody.displays[i_1];
                    if (box) {
                        var p = Tools.p2TOegretPoitn(boxBody.position[0], boxBody.position[1]);
                        // egret.log("INFO:" + boxBody.displays.length + " -- " + l + " | " + p.x + " -- " + p.y);
                        box.x = p.x;
                        box.y = p.y;
                        box.rotation = 360 - boxBody.angle * 180 / Math.PI;
                        // box.rotation = boxBody.angle * 180 / Math.PI;                       
                    }
                }
            }
        };
        //场景内添加建筑物
        TestScene.prototype.addBuilding = function (bd) {
            //变色栏设置
            if (this.bs_yy != 0 && -bd.position[1] < this.bs_yy) {
                bd.is_bs = false;
            }
            this.world.addBody(bd);
            if (bd instanceof suke.Suke) {
                this.addChildAt(bd.disp, 2);
            }
            else {
                this.addChildAt(bd.disp, 2);
            }
        };
        //初始化测试数据
        TestScene.prototype.initTestData = function () {
        };
        TestScene.prototype.addShuKeListener = function () {
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        };
        TestScene.prototype.mouseUp = function (evt) {
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        };
        TestScene.prototype.mouseDown = function (evt) {
            //失败点击重启
            if (this.is_shibai && this.is_kedianji) {
                user.UserInfo.gk_MAX_number--;
                user.UserInfo.saveAndAddGK_MAK(user.UserInfo.gk_MAX_number);
                main.MainR.rLoad2();
                return;
            }
            this.down_mark.x = evt.stageX;
            this.down_mark.y = evt.stageY;
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            // this.mark++;
            // if ((this.mark % 2) == 1)
            //     this.is_zou = true;
            // else {
            //     this.is_zou = false;
            // }
            egret.log("AAAAAAAAA");
            // platform.createInnerAudioContext();
            var sound = RES.getRes("bianse_mp3");
            sound.play();
            if (!this.isGO()) {
                //添加激励广告 获取 体力
                return;
            }
            this.is_zou = true;
            this.rmshou();
        };
        TestScene.prototype.isGO = function () {
            return;
        };
        TestScene.prototype.rmshou = function () { };
        TestScene.prototype.mouseMove = function (evt) {
            if (this.is_mv || this.is_shibai) {
                var pp = egret.Point.create((evt.stageX - this.down_mark.x), -(evt.stageY - this.down_mark.y));
                this.sk.position[0] += pp.x;
                this.sk.position[1] += pp.y;
                if ((this.sk.position[0]) < 0) {
                    this.sk.position[0] = 0;
                }
                if ((this.sk.position[0]) > Tools.getPhoneW()) {
                    this.sk.position[0] = Tools.getPhoneW();
                }
                if (this.sk.position[1] < (this.y - (Tools.getPhoneH() - 160))) {
                    this.sk.position[1] = (this.y - (Tools.getPhoneH() - 160));
                }
                this.down_mark.x = evt.stageX;
                this.down_mark.y = evt.stageY;
            }
        };
        TestScene.prototype.sanping = function () {
            this.removeList.push(this.sk);
            this.sp_b = new egret.Bitmap(RES.getRes("zhengfang"));
            this.sp_b.width = Tools.getPhoneW() * 1.5;
            this.sp_b.height = Tools.getPhoneH() * 2;
            this.sp_b.x = -Tools.getPhoneW() * 0.25;
            this.sp_b.y = -this.y - Tools.getPhoneH();
            this.sp_b.alpha = 0;
            this.addChildAt(this.sp_b, -1);
            egret.Tween.get(this.sp_b).to({ "alpha": 1 }, 100).to({ "alpha": 0 }, 100).call(this.heiping, this);
            egret.Tween.get(this).to({ "x": -20 }, 100).to({ "x": 20 }, 100).to({ "x": 0 }, 100).to({ "x": -20 }, 100).to({ "x": 0 }, 100);
            egret.log();
        };
        TestScene.prototype.heiping = function () {
            this.removeChild(this.sp_b);
            this.sp_h = new egret.Bitmap(RES.getRes("gkwc"));
            this.sp_h.width = Tools.getPhoneW() * 1.5;
            this.sp_h.height = Tools.getPhoneH() * 4;
            this.sp_h.x = -Tools.getPhoneW() * 0.25;
            this.sp_h.y = -this.y - Tools.getPhoneH();
            this.sp_h.alpha = 0;
            egret.Tween.get(this.sp_h).to({ "alpha": 0.8 }, 500).call(this.chengqi, this);
            this.addChildAt(this.sp_h, -1);
        };
        TestScene.prototype.chengqi = function () {
        };
        //------------------------------------------------------------------------
        TestScene.prototype.up = function () {
        };
        TestScene.prototype.jd_bs = function () { };
        return TestScene;
    }(egret.DisplayObjectContainer));
    scene.TestScene = TestScene;
    __reflect(TestScene.prototype, "scene.TestScene");
})(scene || (scene = {}));
//# sourceMappingURL=TestScene.js.map