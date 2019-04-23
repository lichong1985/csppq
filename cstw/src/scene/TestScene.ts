
module scene {
    //战斗场景宽
    // export const battle_sceneW: number = 4000;
    // //战斗场景高
    // export const battle_sceneH: number = 4000;

    export class TestScene extends egret.DisplayObjectContainer {
        public bg: egret.Bitmap;
        public is_zou: boolean = false;
        public is_sk: boolean = true;
        public removeList: Array<mokuai.XingZhuang>;
        public addList: Array<mokuai.XingZhuang>;
        public bs_yy: number = 0;
        public zd_yy: number = 0;
        public s: any;
        public sk_y: number = 0;
        public k: number = 0;
        public yaoqing: egret.TextField;
        public shipin: egret.TextField;

        public is_bann: boolean = true;

        public is_shibai: boolean = false;//通关失败
        public is_kedianji: boolean = false;//失败播放特效后可点击表示

        constructor(rgb: any) {
            super();
            this.removeList = new Array<mokuai.XingZhuang>();
            this.addList = new Array<mokuai.XingZhuang>();
            for (let i = 0; i < 400; i++) {
                let s = (Tools.getPhoneW() / 7) / Tools.getTXInf0(2)[0] * 0.8 / 2;
                let jz = Tools.getTX(this, 2, -10, -10, s, { "r": 251, "g": 0, "b": 25 }, 2, null);
                this.yuList.push(jz);
            }

            this.initP2World();
            this.initBG(rgb);
            this.initTestData();
            this.addShuKeListener();
            this.initcoll();
            this.k = main.MainR.k;

        }

        public initBG(rgb: any) {
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


        }

        //2D物理世界
        public world: p2.World;
        public initP2World() {

            this.world = new p2.World();
            // this.world.sleepMode = p2.World.BODY_SLEEPING;
            this.world.gravity = [0, 0];
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);//添加帧同步


        }

        public rem() {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        }

        //初始化苏克
        public sk: suke.Suke;
        public initSuKe() {
            let x = Tools.getPhoneW() * 0.5;
            let y = - Tools.getPhoneH() * 0.25;
            this.sk_y = Tools.getPhoneH() * 0.25;
            // let y = 800;
            this.sk = new suke.Suke(this, 1, 1, x, y);
            this.addBuilding(this.sk);

        }

        //添加游戏引擎帧同步
        public onEnterFrame() {
            this.addPZ();
            this.p2Updata();
            this.up();
            this.remove();
            if (Main.ison) {
                main.MainR.m.myon();
                Main.ison = false;
                egret.log("QQQQQQQQQQQQQQQQQ")
                var sound: egret.Sound = RES.getRes("pz_mp3");
                sound.play(0, 1);
            }

        }

        public addPZ() {
            let size = this.addList.length;
            if (size == 0) {
                return;
            }
            for (let i = 0; i < size; i++) {
                let m = this.addList.pop();
                this.addBuilding(m);
            }
        }

        public remove() {
            let size = this.removeList.length;
            for (let i = 0; i < size; i++) {
                let m = this.removeList.pop();
                if (m.disp.parent) {
                    this.removeChild(m.disp);
                }
                this.world.removeBody(m);
                // this.yuList.push(m);
            }
        }

        //创建碰撞检测函数
        public initcoll() {
            let s: scene.TestScene = this;
            this.world.on('beginContact', function (evt) {
                if (!s.is_zou) {
                    return;
                }
                let a = <mokuai.XingZhuang>evt.bodyA;
                let b = <mokuai.XingZhuang>evt.bodyB;
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


                if (a.is_sk && b.type_P == a.type_P) {
                    if (b.is_ix) {
                        var sound: egret.Sound = RES.getRes("pz_mp3");
                        sound.play(0, 1);
                        b.is_ix = false;
                    }
                    return;
                }
                if (b.is_sk && a.type_P == b.type_P) {
                    if (a.is_ix) {
                        var sound: egret.Sound = RES.getRes("pz_mp3");
                        sound.play(0, 1);
                        a.is_ix = false;
                    }
                    return;
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
                    var sound: egret.Sound = RES.getRes("pz_mp3");
                    sound.play(0, 1);
                    return;
                }
                if (b.is_sk && a.type_P == 4) {
                    var sound: egret.Sound = RES.getRes("pz_mp3");
                    sound.play(0, 1);
                    return;
                }


                //大黑球

                if (a.type_P == 3) {
                    if (a.pz_mark < 1) {
                        return;
                    }
                    a.pz_mark--;
                    s.pengzhuang(a, b)
                    var sound: egret.Sound = RES.getRes("rh_mp3");
                    sound.play(0, 1);
                }
                if (b.type_P == 3) {
                    if (b.pz_mark < 1) {
                        return;
                    }
                    b.pz_mark--;
                    s.pengzhuang(a, b)
                    var sound: egret.Sound = RES.getRes("rh_mp3");
                    sound.play(0, 1);
                }


                //sk
                if (a.type_P != b.type_P && b.is_sk) {
                    if (!s.is_shibai) {
                        b.texiao1();
                        s.sanping();
                        s.is_shibai = true;
                        var sound: egret.Sound = RES.getRes("rh_mp3");
                        sound.play(0, 1);
                    }

                    return;
                }

                if (b.type_P != a.type_P && a.is_sk) {
                    if (!s.is_shibai) {
                        a.texiao1();
                        s.sanping();
                        s.is_shibai = true;
                        var sound: egret.Sound = RES.getRes("rh_mp3");
                        sound.play(0, 1);
                    }

                    return;
                }


                //---
            })
        }


        //添加新球
        public addNewOne(oldPZ: number, newPZ: number, mark: mokuai.XingZhuang) {
            this.removeList.push(mark);
            let jz: mokuai.XingZhuang = Tools.getTX(this, mark.lx, mark.position[0], -mark.position[1], mark.sf_base - (((mark.pz_numb_all - newPZ) / mark.pz_numb_all) * (mark.sf_base - mark.sf_min)), mark.peise_, newPZ, mark.k)
            jz.pz_numb_all = mark.pz_numb_all;
            jz.sf_base = mark.sf_base;
            jz.pz_mark = 1;
            jz.type_P = mark.type_P;
            jz.angle = mark.angle;
            this.addList.push(jz);
        }

        //碰撞
        public pengzhuang(a: mokuai.XingZhuang, b: mokuai.XingZhuang) {
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

        }



        //帧同步物理引擎

        public yuList: Array<mokuai.XingZhuang> = new Array<mokuai.XingZhuang>();

        public p2Updata() {
            this.world.step(25 / 1000);
            // this.world.step(1/60.0);

            var l: number = this.world.bodies.length;

            // egret.log("LLLLLLLLL:" + l + " --- " + Tools.getPhoneH() / (Tools.getPhoneW() / 7));
            for (var i: number = 0; i < l; i++) {
                var boxBody: p2.Body = this.world.bodies[i];
                let xz = <mokuai.XingZhuang>boxBody
                if (boxBody.position[1] < (this.y - (Tools.getPhoneH() - 150)) || boxBody.position[0] < -100 || boxBody.position[0] > (Tools.getPhoneW() + 100)
                    && this.is_zou && !xz.is_zhongli && !xz.is_sk) {
                    this.removeList.push(<mokuai.XingZhuang>boxBody);
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
                    } else if (xz.type_P == 1) {
                        xz.peise(this.s[2])
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


                for (let i = 0; i < boxBody.displays.length; i++) {
                    var box: egret.DisplayObject = boxBody.displays[i];
                    if (box) {
                        let p: egret.Point = Tools.p2TOegretPoitn(boxBody.position[0], boxBody.position[1])
                        // egret.log("INFO:" + boxBody.displays.length + " -- " + l + " | " + p.x + " -- " + p.y);
                        box.x = p.x;
                        box.y = p.y;
                        box.rotation = 360 - boxBody.angle * 180 / Math.PI;
                        // box.rotation = boxBody.angle * 180 / Math.PI;                       
                    }
                }

            }
        }

        //场景内添加建筑物
        public addBuilding(bd: mokuai.XingZhuang) {
            //变色栏设置
            if (this.bs_yy != 0 && -bd.position[1] < this.bs_yy) {
                bd.is_bs = false;
            }
            this.world.addBody(bd);
            if (bd instanceof suke.Suke) {
                this.addChildAt(bd.disp, 2);
            } else {
                this.addChildAt(bd.disp, 2);
            }

        }



        //初始化测试数据
        public initTestData() {
        }

        //---------------------------------触控相关-------------------------------------
        public down_mark: egret.Point = egret.Point.create(0, 0);
        public addShuKeListener() {
            this.touchEnabled = true
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        }

        private mouseUp(evt: egret.TouchEvent) {
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        }
        public mark: number = 0;
        public mouseDown(evt: egret.TouchEvent) {
            if (evt.stageY > Tools.getPhoneH() * 0.9) {
                return;
            }
            //失败点击重启
            if (this.is_shibai && this.is_kedianji) {
                user.UserInfo.gk_MAX_number--;
                user.UserInfo.saveAndAddGK_MAK(user.UserInfo.gk_MAX_number);
                main.MainR.rLoad2(1);
                return;
            }

            if (this.is_bann) {
                platform.cloesBann();
                this.is_bann = false;
            }

            egret.log("yyyyyyy:" + evt.stageY)

            this.down_mark.x = evt.stageX;
            this.down_mark.y = evt.stageY;
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            // this.mark++;
            // if ((this.mark % 2) == 1)
            //     this.is_zou = true;
            // else {
            //     this.is_zou = false;
            // }           

            if (!this.isGO()) {
                //添加激励广告 获取 体力
                return;
            }

            this.is_zou = true;
            this.rmshou();

        }

        public isGO(): boolean {
            return;
        }

        public rmshou() { }
        public is_mv: boolean = true;
        private mouseMove(evt: egret.TouchEvent) {
            if (this.is_mv || this.is_shibai) {
                let pp = egret.Point.create((evt.stageX - this.down_mark.x), -(evt.stageY - this.down_mark.y))

                this.sk.position[0] += pp.x;
                this.sk.position[1] += pp.y;


                if ((this.sk.position[0]) < 0) {
                    this.sk.position[0] = 0
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
        }



        //-----------------------------------------------------------------------

        //闪屏特效
        public sp_b: egret.Bitmap;//闪屏白
        public sanping() {
            this.removeList.push(this.sk);
            this.sp_b = new egret.Bitmap(RES.getRes("zhengfang"));
            this.sp_b.width = Tools.getPhoneW() * 1.5;
            this.sp_b.height = Tools.getPhoneH() * 2;
            this.sp_b.x = -Tools.getPhoneW() * 0.25;
            this.sp_b.y = -this.y - Tools.getPhoneH();
            this.sp_b.alpha = 0;
            this.addChildAt(this.sp_b, -1);
            egret.Tween.get(this.sp_b).to({ "alpha": 1 }, 100).to({ "alpha": 0 }, 100).call(this.heiping, this);
            egret.Tween.get(this).to({ "x": -20 }, 100).to({ "x": 20 }, 100).to({ "x": 0 }, 100).to({ "x": -20 }, 100).to({ "x": 0 }, 100)

            egret.log()

        }
        //添加黑屏
        public sp_h: egret.Bitmap;
        public heiping() {
            this.removeChild(this.sp_b);
            this.sp_h = new egret.Bitmap(RES.getRes("gkwc"));
            this.sp_h.width = Tools.getPhoneW() * 1.5;
            this.sp_h.height = Tools.getPhoneH() * 4;
            this.sp_h.x = -Tools.getPhoneW() * 0.25;
            this.sp_h.y = -this.y - Tools.getPhoneH();
            this.sp_h.alpha = 0;
            egret.Tween.get(this.sp_h).to({ "alpha": 0.8 }, 500).call(this.chengqi, this);
            this.addChildAt(this.sp_h, -1);
        }

        public hei_text
        public chengqi() {


        }
        //------------------------------------------------------------------------

        public up() {

        }

        public jd_bs() { }
    }
}