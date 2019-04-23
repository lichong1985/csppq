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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var guanka;
(function (guanka) {
    var SceneBase = (function (_super) {
        __extends(SceneBase, _super);
        function SceneBase(rgb) {
            var _this = _super.call(this, rgb) || this;
            _this.b = 5;
            _this.qs_y = 0; //主界面 启示坐标
            _this.is_over = false; //游戏结束标识
            _this.is_re = true; //是否切换关卡
            _this.over_mark = 2000; //结束关卡后几秒切换
            _this.over_time = 0;
            _this.initBar();
            _this.initQiPao();
            _this.initText();
            _this.initQian();
            _this.initJinDu();
            _this.qs_y = _this.y;
            return _this;
        }
        SceneBase.prototype.up = function () {
            if (this.is_zou) {
                this.y += this.b;
                this.sk.position[1] += this.b;
                this.yuan_y.y -= this.b;
                this.yuan_z.y -= this.b;
                this.shu_y.y -= this.b;
                this.shu_z.y -= this.b;
                this.tiao_s.y -= this.b;
                this.tiao_x.y -= this.b;
                this.dui_hao.y -= this.b;
                this.dui_hao_test.y -= this.b;
                this.shi_pin.y -= this.b;
                this.shi_ping_text.y -= this.b;
                this.ti_li.y -= this.b;
                this.ti_li_text.y -= this.b;
                if (this.hei) {
                    this.hei.y -= this.b;
                    this.hei_text.y -= this.b;
                }
                if (this.hei_text_) {
                    this.hei_text_.y -= this.b;
                    this.sp_h.y -= this.b;
                }
                //通关失败
                if (this.is_shibai) {
                    this.b = 0.5;
                }
            }
            if (this.sk)
                this.sk.angle = 0;
            this.upJD();
            //通关后开始下一关
            if (this.is_re && this.is_over) {
                if (egret.getTimer() > (this.over_time + this.over_mark)) {
                    this.is_re = false;
                    user.UserInfo.saveAndAddGK();
                    if (user.UserInfo.gg_number < 10) {
                        user.UserInfo.gk_MAX_number--;
                        user.UserInfo.saveAndAddGK_MAK(user.UserInfo.gk_MAX_number);
                    }
                    main.MainR.rLoad2();
                }
            }
        };
        SceneBase.prototype.rmshou = function () {
            if (this.shou) {
                if (this.shou.parent) {
                    this.removeChild(this.shou);
                }
            }
            if (this.jiantou_zuo) {
                if (this.jiantou_zuo.parent) {
                    this.removeChild(this.jiantou_zuo);
                }
            }
            if (this.jiantou_you) {
                if (this.jiantou_you.parent) {
                    this.removeChild(this.jiantou_you);
                }
            }
            if (this.hua_dong_kai_shi) {
                if (this.hua_dong_kai_shi.parent) {
                    this.removeChild(this.hua_dong_kai_shi);
                }
            }
            if (this.guan_ka) {
                if (this.guan_ka.parent) {
                    this.removeChild(this.guan_ka);
                }
            }
        };
        SceneBase.prototype.initBar = function () {
            this.shou = new egret.Bitmap(RES.getRes("tap"));
            this.shou.x = Tools.getPhoneW() * 0.3;
            this.shou.y = -Tools.getPhoneH() * 0.1;
            this.shou.anchorOffsetX = this.shou.width * 0.5;
            this.shou.anchorOffsetY = this.shou.height * 0.5;
            this.shou.scaleX = 0.3;
            this.shou.scaleY = 0.3;
            this.addChildAt(this.shou, 2);
            egret.Tween.get(this.shou, { "loop": true }).to({ "x": Tools.getPhoneW() * 0.7 }, 1500).to({ "x": Tools.getPhoneW() * 0.3 }, 1000);
            this.jiantou_zuo = new egret.Bitmap(RES.getRes("jiantou"));
            this.jiantou_zuo.anchorOffsetY = this.jiantou_zuo.height * 0.5;
            this.jiantou_zuo.x = Tools.getPhoneW() * 0.38;
            this.jiantou_zuo.y = -Tools.getPhoneH() * 0.25;
            this.jiantou_zuo.scaleX = -0.4;
            this.jiantou_zuo.scaleY = 0.4;
            this.jiantou_zuo.alpha = 0.3;
            this.addChildAt(this.jiantou_zuo, 2);
            this.jiantou_you = new egret.Bitmap(RES.getRes("jiantou"));
            this.jiantou_you.anchorOffsetY = this.jiantou_zuo.height * 0.5;
            this.jiantou_you.x = Tools.getPhoneW() * 0.62;
            this.jiantou_you.y = -Tools.getPhoneH() * 0.25;
            this.jiantou_you.scaleX = 0.4;
            this.jiantou_you.scaleY = 0.4;
            this.jiantou_you.alpha = 0.3;
            this.addChildAt(this.jiantou_you, 2);
        };
        SceneBase.prototype.initQiPao = function () {
            this.qipao = new egret.Bitmap(RES.getRes("qipao"));
            this.qipao.anchorOffsetX = this.qipao.width * 0.5;
            this.qipao.anchorOffsetY = this.qipao.height * 0.5;
            this.qipao.x = Tools.getPhoneW() * 0.5;
            this.qipao.y = -Tools.getPhoneH() * 0.8;
            this.addChildAt(this.qipao, 2);
        };
        SceneBase.prototype.initText = function () {
            this.hua_dong_kai_shi = new egret.TextField();
            this.hua_dong_kai_shi.textFlow = [
                { text: "滑动开始", style: { "textColor": 0xf75c2f, "size": 56 } },
            ];
            this.addChildAt(this.hua_dong_kai_shi, 3);
            this.hua_dong_kai_shi.x = Tools.getPhoneW() * 0.5;
            this.hua_dong_kai_shi.y = -Tools.getPhoneH() * 0.4;
            this.hua_dong_kai_shi.anchorOffsetX = this.hua_dong_kai_shi.width * 0.5;
            this.hua_dong_kai_shi.anchorOffsetY = this.hua_dong_kai_shi.height * 0.5;
            this.guan_ka = new egret.TextField();
            this.guan_ka.textFlow = [
                { text: "Level " + (user.UserInfo.gk_number), style: { "textColor": 0xf75c2f, "size": 30 } },
            ];
            this.addChildAt(this.guan_ka, 3);
            this.guan_ka.x = Tools.getPhoneW() * 0.5;
            this.guan_ka.y = -Tools.getPhoneH() * 0.85;
            this.guan_ka.anchorOffsetX = this.guan_ka.width * 0.5;
            this.guan_ka.anchorOffsetY = this.guan_ka.height * 0.5;
        };
        SceneBase.prototype.fxf = function (e) {
            platform.shareAppMessage().then(function (info) {
                egret.log(info);
                user.UserInfo.gk_MAX_number = 3;
            });
            user.UserInfo.gk_MAX_number = 2;
            user.UserInfo.saveAndAddGK_MAK(user.UserInfo.gk_MAX_number);
            this.ti_li_text.text = "" + user.UserInfo.gk_MAX_number + "/3";
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this.removeChild(this.fenxiang_text);
        };
        SceneBase.prototype.spf = function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        //广告
                        return [4 /*yield*/, platform.createRewardedVideoAd().then(function () {
                            }).catch(function (err) {
                            })
                            // //视频回掉奖励
                        ];
                        case 1:
                            //广告
                            _a.sent();
                            // //视频回掉奖励
                            return [4 /*yield*/, platform.rewardedVideoAdQ().then(function () {
                                    user.UserInfo.gk_MAX_number = 3;
                                    user.UserInfo.saveAndAddGK_MAK(user.UserInfo.gk_MAX_number);
                                    user.UserInfo.gg_number++;
                                    user.UserInfo.saveAndAddGG();
                                    _this.ti_li_text.text = "" + user.UserInfo.gk_MAX_number + "/3";
                                    _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.mouseDown, _this);
                                    _this.removeChild(_this.shipin_text);
                                })];
                        case 2:
                            // //视频回掉奖励
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SceneBase.prototype.fenxiang = function () {
            this.fenxiang_text = new egret.TextField();
            this.fenxiang_text.textFlow = [
                { text: "您当前的体力值已经用完，请点击", style: { "fontFamily": "楷体" } },
                { text: "\n           ", style: { "fontFamily": "楷体" } },
                { text: "\n             ", style: { "fontFamily": "楷体" } },
                { text: "分享", style: { "textColor": 0xff0000, "size": 80, "strokeColor": 0x6699cc, "stroke": 2, underline: true, "href": "event:text event triggered" } },
                { text: "\n           ", style: { "fontFamily": "楷体" } },
                { text: "\n            ", style: { "fontFamily": "楷体" } },
                { text: "获取体力", style: { "fontFamily": "楷体" } }
            ];
            this.fenxiang_text.touchEnabled = true;
            this.fenxiang_text.addEventListener(egret.TextEvent.LINK, this.fxf, this);
            this.fenxiang_text.x = Tools.getPhoneW() * 0.5;
            this.fenxiang_text.y = -Tools.getPhoneH() * 0.5;
            this.fenxiang_text.anchorOffsetY = this.fenxiang_text.height * 0.7;
            this.fenxiang_text.anchorOffsetX = this.fenxiang_text.width * 0.5;
            this.addChildAt(this.fenxiang_text, -1);
        };
        SceneBase.prototype.guanggao = function () {
            this.shipin_text = new egret.TextField();
            this.shipin_text.textFlow = [
                { text: "您当前的体力值已经用完，请点击", style: { "fontFamily": "楷体" } },
                { text: "\n           ", style: { "fontFamily": "楷体" } },
                { text: "\n             ", style: { "fontFamily": "楷体" } },
                { text: "视频", style: { "textColor": 0xff0000, "size": 80, "strokeColor": 0x6699cc, "stroke": 2, underline: true, "href": "event:text event triggered" } },
                { text: "\n           ", style: { "fontFamily": "楷体" } },
                { text: "\n            ", style: { "fontFamily": "楷体" } },
                { text: "获取体力", style: { "fontFamily": "楷体" } },
                { text: "\n      ", style: { "fontFamily": "楷体" } },
                { text: "累计观看十只广告将解锁所有限制", style: { "fontFamily": "楷体", "textColor": 0xf000f0, "size": 20 } },
                { text: "\n            ", style: { "fontFamily": "楷体" } },
                { text: "感谢您的支持", style: { "fontFamily": "楷体", "textColor": 0xf000f0, "size": 20 } }
            ];
            this.shipin_text.touchEnabled = true;
            this.shipin_text.addEventListener(egret.TextEvent.LINK, this.spf, this);
            this.shipin_text.x = Tools.getPhoneW() * 0.5;
            this.shipin_text.y = -Tools.getPhoneH() * 0.5;
            this.shipin_text.anchorOffsetY = this.shipin_text.height * 0.7;
            this.shipin_text.anchorOffsetX = this.shipin_text.width * 0.5;
            this.addChildAt(this.shipin_text, -1);
        };
        SceneBase.prototype.isGO = function () {
            if (user.UserInfo.gg_number >= 10) {
                true;
            }
            if (user.UserInfo.gk_MAX_number <= 0) {
                //添加激励广告 获取 体力
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
                var l = Tools.GetRandomNum(1, 6);
                if (l == 1) {
                    this.fenxiang();
                }
                else {
                    this.guanggao();
                }
                return false;
            }
            return true;
        };
        SceneBase.prototype.initQian = function () {
            this.dui_hao = new egret.Bitmap(RES.getRes("gk"));
            this.dui_hao.anchorOffsetX = this.dui_hao.width * 0.5;
            this.dui_hao.anchorOffsetY = this.dui_hao.height * 0.5;
            this.dui_hao.x = Tools.getPhoneW() * 0.05;
            this.dui_hao.y = -Tools.getPhoneH() * 0.97;
            this.addChildAt(this.dui_hao, 3);
            this.dui_hao.scaleX = 0.1;
            this.dui_hao.scaleY = 0.1;
            this.dui_hao_test = new egret.TextField();
            this.dui_hao_test.text = (user.UserInfo.gk_number) + "/50";
            this.dui_hao_test.textColor = 0x00896c;
            this.dui_hao_test.size = 30;
            this.dui_hao_test.x = Tools.getPhoneW() * 0.10;
            this.dui_hao_test.y = -Tools.getPhoneH() * 0.97;
            this.dui_hao_test.anchorOffsetY = this.dui_hao_test.height * 0.5;
            this.addChildAt(this.dui_hao_test, 3);
            this.shi_pin = new egret.Bitmap(RES.getRes("play"));
            this.shi_pin.anchorOffsetX = this.shi_pin.width * 0.5;
            this.shi_pin.anchorOffsetY = this.shi_pin.height * 0.5;
            this.shi_pin.x = Tools.getPhoneW() * 0.05;
            this.shi_pin.y = -Tools.getPhoneH() * 0.91;
            this.addChildAt(this.shi_pin, -1);
            this.shi_pin.scaleX = 0.1;
            this.shi_pin.scaleY = 0.1;
            this.shi_ping_text = new egret.TextField();
            this.shi_ping_text.text = "0/10";
            this.shi_ping_text.textColor = 0x6e75a4;
            this.shi_ping_text.size = 30;
            this.shi_ping_text.x = Tools.getPhoneW() * 0.10;
            this.shi_ping_text.y = -Tools.getPhoneH() * 0.91;
            this.shi_ping_text.anchorOffsetY = this.shi_ping_text.height * 0.5;
            this.addChildAt(this.shi_ping_text, -1);
            this.ti_li = new egret.Bitmap(RES.getRes("power_png"));
            this.ti_li.anchorOffsetX = this.ti_li.width * 0.5;
            this.ti_li.anchorOffsetY = this.ti_li.height * 0.5;
            this.ti_li.x = Tools.getPhoneW() * 0.05;
            this.ti_li.y = -Tools.getPhoneH() * 0.85;
            this.addChildAt(this.ti_li, -1);
            this.ti_li.scaleX = 0.1;
            this.ti_li.scaleY = 0.1;
            this.ti_li_text = new egret.TextField();
            this.ti_li_text.text = "" + user.UserInfo.gk_MAX_number + "/3";
            this.ti_li_text.textColor = 0x000000;
            this.ti_li_text.size = 30;
            this.ti_li_text.x = Tools.getPhoneW() * 0.10;
            this.ti_li_text.y = -Tools.getPhoneH() * 0.85;
            this.ti_li_text.anchorOffsetY = this.ti_li_text.height * 0.5;
            this.addChildAt(this.ti_li_text, -1);
        };
        //刷新进度条
        SceneBase.prototype.upJD = function () {
            this.tiao_s.scaleX = (this.sk.position[1] / Math.abs(this.zd_yy)) * 1.25;
            if (this.tiao_s.scaleX > 1.25) {
                this.tiao_s.scaleX = 1.25;
            }
            if (this.sk.position[1] > Math.abs(this.zd_yy)) {
                this.peise(this.s[2], this.yuan_y);
                this.b -= 0.02;
                if (this.b < 0) {
                    this.b = 0;
                }
            }
            if (!this.is_over) {
                if (this.sk.position[1] > Math.abs(this.zd_yy)) {
                    this.is_over = true;
                    this.over_time = egret.getTimer();
                    Tools.addXXX(this, this.zd_yy);
                    this.gkOver();
                    this.is_mv = false;
                }
            }
        };
        SceneBase.prototype.initJinDu = function () {
            this.yuan_z = new egret.Bitmap(RES.getRes("yuan"));
            this.yuan_z.anchorOffsetX = this.yuan_z.width * 0.5;
            this.yuan_z.anchorOffsetY = this.yuan_z.height * 0.5;
            this.yuan_z.x = Tools.getPhoneW() * 0.3;
            this.yuan_z.y = -Tools.getPhoneH() * 0.9;
            this.yuan_z.scaleX = 0.2;
            this.yuan_z.scaleY = 0.2;
            // this.yuan_z.alpha = 0.5
            this.addChildAt(this.yuan_z, -1);
            this.shu_z = new egret.Bitmap(RES.getRes("s-number-" + user.UserInfo.gk_number));
            this.shu_z.anchorOffsetX = this.shu_z.width * 0.5;
            this.shu_z.anchorOffsetY = this.shu_z.height * 0.5;
            this.shu_z.x = Tools.getPhoneW() * 0.3;
            this.shu_z.y = -Tools.getPhoneH() * 0.9;
            this.shu_z.scaleX = 0.2;
            this.shu_z.scaleY = 0.2;
            this.addChildAt(this.shu_z, -1);
            this.yuan_y = new egret.Bitmap(RES.getRes("yuan"));
            this.yuan_y.anchorOffsetX = this.yuan_y.width * 0.5;
            this.yuan_y.anchorOffsetY = this.yuan_y.height * 0.5;
            this.yuan_y.x = Tools.getPhoneW() * 0.7;
            this.yuan_y.y = -Tools.getPhoneH() * 0.9;
            this.yuan_y.scaleX = 0.2;
            this.yuan_y.scaleY = 0.2;
            this.addChildAt(this.yuan_y, -1);
            this.shu_y = new egret.Bitmap(RES.getRes("s-number-" + (user.UserInfo.gk_number + 1)));
            this.shu_y.anchorOffsetX = this.shu_y.width * 0.5;
            this.shu_y.anchorOffsetY = this.shu_y.height * 0.5;
            this.shu_y.x = Tools.getPhoneW() * 0.7;
            this.shu_y.y = -Tools.getPhoneH() * 0.9;
            this.shu_y.scaleX = 0.2;
            this.shu_y.scaleY = 0.2;
            this.addChildAt(this.shu_y, -1);
            this.tiao_x = new egret.Bitmap(RES.getRes("jdt"));
            this.tiao_x.anchorOffsetY = this.tiao_x.height * 0.5;
            this.tiao_x.x = Tools.getPhoneW() * 0.33;
            this.tiao_x.y = -Tools.getPhoneH() * 0.9;
            this.tiao_x.scaleX = 1.25;
            this.tiao_x.scaleY = 0.2;
            this.tiao_x.alpha = 0.5;
            this.addChildAt(this.tiao_x, -1);
            this.tiao_s = new egret.Bitmap(RES.getRes("jdt"));
            this.tiao_s.anchorOffsetY = this.tiao_s.height * 0.5;
            this.tiao_s.x = Tools.getPhoneW() * 0.33;
            this.tiao_s.y = -Tools.getPhoneH() * 0.9;
            this.tiao_s.scaleX = 0.001;
            this.tiao_s.scaleY = 0.2;
            this.addChildAt(this.tiao_s, -1);
            //变色
            // let colorMatrix = [
            //     1, 0, 0, 0, this.s[1].r - 255,
            //     0, 1, 0, 0, this.s[1].g - 255,
            //     0, 0, 1, 0, this.s[1].b - 255,
            //     0, 0, 0, 1, 0
            // ];
            // var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            // this.tiao_s.filters = [colorFlilter];
        };
        SceneBase.prototype.jd_bs = function () {
            this.peise(this.s[2], this.tiao_s);
            this.peise(this.s[2], this.yuan_z);
        };
        SceneBase.prototype.peise = function (rgb, bit) {
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
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            bit.filters = [colorFlilter];
        };
        SceneBase.prototype.gkOver = function () {
            this.hei = new egret.Bitmap(RES.getRes("gkwc"));
            this.hei.y = this.tiao_s.y + 300;
            this.hei.x = Tools.getPhoneW() * 0.5;
            this.hei.anchorOffsetX = this.hei.width * 0.5;
            this.hei.anchorOffsetY = this.hei.height * 0.5;
            this.hei.scaleY = 0.3;
            this.hei.scaleX = 0.6;
            this.hei.alpha = 0.3;
            this.addChildAt(this.hei, -1);
            this.hei_text = new egret.TextField();
            this.hei_text.text = "关卡完成";
            this.hei_text.textColor = 0xFFFFFF;
            this.hei_text.size = 60;
            this.hei_text.y = this.tiao_s.y + 300;
            this.hei_text.x = Tools.getPhoneW() * 0.5;
            this.hei_text.anchorOffsetY = this.hei_text.height * 0.5;
            this.hei_text.anchorOffsetX = this.hei_text.width * 0.5;
            this.addChildAt(this.hei_text, -1);
        };
        SceneBase.prototype.chengqi = function () {
            this.hei_text_ = new egret.TextField();
            this.hei_text_.text = "点击开始";
            this.hei_text_.textColor = 0xFFFFFF;
            this.hei_text_.size = 40;
            this.hei_text_.y = -this.y + Tools.getPhoneH() * 0.9;
            this.hei_text_.x = Tools.getPhoneW() * 0.5;
            this.hei_text_.anchorOffsetY = this.hei_text_.height * 0.5;
            this.hei_text_.anchorOffsetX = this.hei_text_.width * 0.5;
            this.addChildAt(this.hei_text_, -1);
            this.is_kedianji = true;
        };
        return SceneBase;
    }(scene.TestScene));
    guanka.SceneBase = SceneBase;
    __reflect(SceneBase.prototype, "guanka.SceneBase");
})(guanka || (guanka = {}));
//# sourceMappingURL=SceneBase.js.map