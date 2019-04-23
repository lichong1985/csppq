module mokuai {
    //1:方块
    //2：圆
    //3：三角
    //4:十字
    //5:五边形
    //6:六边形
    //7:水滴
    //8:横杠

    export let null_cs: number = Math.pow(2, 0);//不与任何组碰撞˝
    export let mokuai_cr: number = Math.pow(2, 1);

    export class XingZhuang extends p2.Body {
        public posX: number = 0;
        public posY: number = 0;
        public sf: number = 1;
        public sf_base: number;
        public sf_w: number = 0;
        public type_P: number = 1;//1 白 2 变色 3黑洞 4: 变色不发生碰撞
        public peise_: any
        public is_sk: boolean = false;
        public pz_numb: number = 0;//碰撞指数
        public pz_numb_all: number;
        public pz_mark = 1;
        public lx: number;//形状
        public k: any;
        public bitName: string;
        public is_bs: boolean = true;
        public is_zhongli: boolean = false;//是否添加重力
        public is_tw: boolean = false;//是否挂在缓动动画
        public tw_numb: number = 5;
        public tw_zy: any = [0, 0, 0, 0];// 缓动数据
        public is_xuanzhuan: boolean = false;//是否旋转
        public xuanzhuan_numb = 0;
        public sf_min: number = 0;//最小缩放值

        public is_zq: boolean = false;//是否转圈
        public pos_mark: number[] = [0, 0];
        public jd: number = 0;//角度
        public bj: number = 0;//半径
        public jz: number = 0;//角度增量

        public is_bian: boolean = false;//变色
        public bian_cd = 1000;
        public bian_mark = 0;
        public color_2: any;
        public color_1: any;

        public scene: scene.TestScene;

        public bz: number = 0;//爆竹

        public is_ix: boolean = true;



        constructor(scene: scene.TestScene, bitName: string, posX: number, posY: number, sf: number, mass: number, type: number, peise: any, pz_numb: number, sf_w?: number) {
            //建筑物不动
            super({ mass: mass })
            this.scene = scene;
            this.posX = posX;
            this.posY = posY;
            this.sf = sf;
            this.sf_base = sf
            if (sf_w) {
                this.sf_w = sf_w;
            }
            this.peise_ = peise;
            this.initBitMap(bitName);//初始化贴图
            this.damping = 0.9;
            this.type_P = type;

            this.pz_numb = pz_numb;
            this.pz_numb_all = pz_numb;

            let p = Tools.egretTOp2(this.posX, this.posY);
            this.pos_mark[0] = p.x;
            this.pos_mark[1] = p.y;



        }


        //初始化贴图
        public disp: egret.Bitmap;
        public initBitMap(bitName: string) {
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
        }

        public peise(rgb: any) {
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
        }
        public texiao1() {
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
        }
        //特效碎裂
        public zjsp1() {
            let b = new egret.Bitmap(RES.getRes("yuan"))
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
            let s1 = 1;
            let s2 = 3;
            let j1 = 1000;
            let j2 = 2000;

            //缩放
            let scale = Tools.GetRandomNum(s1, s2) * 0.1 * this.sf;
            b.scaleX = scale;
            b.scaleY = scale;
            let r = 100;
            let x = Tools.GetRandomNum(-r, r);
            let y = Tools.GetRandomNum(-r, r);
            let t = Tools.GetRandomNum(j1, j2);

            egret.Tween.get(b).to({ "x": this.disp.x + x, "y": this.disp.y + y }, t).call(this.dell, this, [b]);
        }

        public texiao() {
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
        }
        //特效碎裂
        public zjsp() {
            let b = new egret.Bitmap(RES.getRes("yuan"))
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
            let s1 = 1;
            let s2 = 3;
            let j1 = 100;
            let j2 = 600;

            //缩放
            let scale = Tools.GetRandomNum(s1, s2) * 0.1 * this.sf;
            b.scaleX = scale;
            b.scaleY = scale;
            let r = 100;
            let x = Tools.GetRandomNum(-r, r);
            let y = Tools.GetRandomNum(-r, r);
            let t = Tools.GetRandomNum(j1, j2);

            egret.Tween.get(b).to({ "x": this.disp.x + x, "y": this.disp.y + y }, t).call(this.dell, this, [b]);
        }
        //移除缓动动画
        public dell(DD: egret.DisplayObject) {
            if (DD.parent) {
                DD.parent.removeChild(DD);
            }
            DD = null;
        }

        //添加尾翼
        //尾翼cd
        public wyCD: number = 50;
        public wyMark: number = 0;
        public weiyi() {
            if (egret.getTimer() - this.wyMark < this.wyCD && this.disp != null) {
                return;
            }
            this.wyMark = egret.getTimer();
            let b: egret.Bitmap = new egret.Bitmap(RES.getRes(this.bitName));
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
            let y = b.y + 200;
            this.scene.addChildAt(b, 3);
            b.alpha = 0.5;
            egret.Tween.get(b).to({ "alpha": 0.1, "y": y, "scaleX": this.sf * 0.1, "scaleY": this.sf * 0.1 }, 500).call(this.dell, this, [b]);

        }

        public up() { };
        public zl() {
            this.force = [0, -50];

            this.weiyi();
        }

        //添加缓动动画
        public addtw(tw_zy: any) {

            if (tw_zy[3] == 0) {

                let go_x = this.position[0] + tw_zy[0] * (Tools.getPhoneW() / 7);
                let back_x = this.position[0] + tw_zy[1] * (Tools.getPhoneW() / 7);
                this.tw_zy[0] = go_x;
                this.tw_zy[1] = back_x;
                this.tw_zy[2] = tw_zy[2];
                this.tw_zy[3] = tw_zy[3];
            }

            if (tw_zy[3] == 1) {

                let go_x = this.position[1] + tw_zy[0] * (Tools.getPhoneW() / 7);
                let back_x = this.position[1] + tw_zy[1] * (Tools.getPhoneW() / 7);
                this.tw_zy[0] = go_x;
                this.tw_zy[1] = back_x;
                this.tw_zy[2] = tw_zy[2];
                this.tw_zy[3] = tw_zy[3];
            }
        }
        //刷新左右移动
        public upTw() {
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
        }

        //刷新旋转
        public upXuanZhuan() {
            this.angularVelocity = this.xuanzhuan_numb;
        }
        //转圈
        public upZQ() {
            this.jd += this.jz;
            let sx = Math.sin(this.jd) * this.bj;
            let sy = Math.cos(this.jd) * this.bj;
            this.position[0] = this.pos_mark[0] + sx;
            this.position[1] = this.pos_mark[1] + sy;
        }

        //变色
        public upBian() {
            if (egret.getTimer() > (this.bian_mark)) {

                this.bian_mark = egret.getTimer() + this.bian_cd;
                if (this.type_P == 1) {
                    this.peise(this.color_2);
                    this.type_P = 2;
                } else {
                    this.peise(this.color_1);
                    this.type_P = 1;
                }
            }
        }
    }
}