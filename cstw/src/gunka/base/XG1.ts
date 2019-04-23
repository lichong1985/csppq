module guanka {
    export class XG1 extends SceneBase {
        public gk_number = 0;
        public jg_ = 14;
        public gk: any;
        public gk_base = 0
        public gk_max = this.gk_base;
        public gk_now = 0;


        constructor(numb: any, size: number) {
            super(guanka.all_color[size].db);
            this.s = [
                {},
                { "r": 255, "g": 255, "b": 255 },
                guanka.all_color[size].s2,
                { "r": 12, "g": 12, "b": 12 }
            ]
            this.gk = numb;
            // this.initInfoNew(guanka.xgk50);

            if (this.gk[this.gk.length - 1].zd) {
                let base_x = Tools.getPhoneW() / 7;
                let y = this.gk[this.gk.length - 1].y;
                this.zd_yy = -base_x * y - base_x * 0.5 - Tools.getPhoneH();

                let x25 = new egret.TextField();
                x25.text = "- - - - 25%";
                x25.textColor = 0xFFFFFF;
                x25.size = 40;
                x25.y = (this.zd_yy - Tools.getPhoneH()) * 0.25
                x25.x = Tools.getPhoneW();
                x25.anchorOffsetY = x25.height * 0.25;
                x25.anchorOffsetX = x25.width;
                this.addChildAt(x25, 5);

                let x50 = new egret.TextField();
                x50.text = "- - - - 50%";
                x50.textColor = 0xFFFFFF;
                x50.size = 40;
                x50.y = (this.zd_yy - Tools.getPhoneH()) * 0.5
                x50.x = Tools.getPhoneW();
                x50.anchorOffsetY = x50.height * 0.5;
                x50.anchorOffsetX = x50.width;
                this.addChildAt(x50, 5);

                let x75 = new egret.TextField();
                x75.text = "- - - - 75%";
                x75.textColor = 0xFFFFFF;
                x75.size = 40;
                x75.y = (this.zd_yy - Tools.getPhoneH()) * 0.75
                x75.x = Tools.getPhoneW();
                x75.anchorOffsetY = x75.height * 0.5;
                x75.anchorOffsetX = x75.width;
                this.addChildAt(x75, 5);




            }
            this.initSuKe();
        }

        public up() {
            super.up();
            // let mark = Math.floor((this.sk.position[1] - this.sk_y) / (Tools.getPhoneW() / 7)) + this.gk_base;
            let mark = Math.floor((this.y - Tools.getPhoneH()) / (Tools.getPhoneW() / 7)) + this.gk_base;
            // egret.log("MMMMMMMM:" + this.world.bodies.length + " --- " + mark + " |||| " + this.sk.position[1] + " ---- " + this.sk_y + " -- " + this.y + " -- " + Tools.getPhoneH())

            // egret.log("MMMMMMMMM:" + Math.floor((this.sk.position[1] - this.sk_y) / (Tools.getPhoneW() / 7)) + " --- " + Math.floor((this.y - Tools.getPhoneH() )/ (Tools.getPhoneW() / 7)));
            if (mark > this.gk_max) {
                this.gk_max = mark;

            }
            if (this.gk_max > this.gk_now) {
                this.initInfoNew();
                this.gk_now = this.gk_max;
            }



        }

        public initInfoNew() {

            let base_x = Tools.getPhoneW() / 7;
            let base_y = base_x
            for (let size = 0; size < this.gk.length; size++) {
                let info = this.gk[size];
                let y: number = this.gk[size].y;
                let h = this.gk[size].h;


                if (y > this.gk_max || (y + h - 1) <= this.gk_now) {

                    continue;
                }
                // egret.log("SSSSSSSS:" + y);




                let sf_w = this.gk[size].sf_w;
                let sf_h = this.gk[size].sf_h;
                // if (sf_h == null) {
                //     sf_h = sf_w;
                // }
                let jg = this.gk[size].jg;

                let w = this.gk[size].w;
                let lx = this.gk[size].lx;
                let k = this.gk[size].k;
                let x = this.gk[size].x;
                let bsl = this.gk[size].bsl;
                let tw_zy = this.gk[size].tw_zy
                let xuan_zhuan = this.gk[size].xz;
                let zq = this.gk[size].zq;
                let bian = this.gk[size].bian;
                //终点
                if (this.gk[size].zd) {
                    let bit = new egret.Bitmap(RES.getRes("zhongdian"));
                    bit.x = Tools.getPhoneW() * 0.5;
                    bit.y = -base_x * y - base_x * 0.5 - Tools.getPhoneH();
                    bit.anchorOffsetX = bit.width * 0.5;
                    this.addChildAt(bit, -1);
                    this.zd_yy = bit.y
                    return;
                }
                //变色栏
                if (bsl) {
                    this.bs_yy = -base_x * y - Tools.getPhoneH();
                    for (let b = 0; b < 10; b++) {
                        let yy = -base_x * y - Tools.getPhoneH() - b * 1;
                        let bit1;
                        if (b % 2 == 0)
                            bit1 = new mokuai.BSL(RES.getRes("bsl"), yy, this.s[1], this.s[2]);
                        else
                            bit1 = new mokuai.BSL(RES.getRes("bsl"), yy, this.s[2], this.s[1]);
                        this.addChildAt(bit1, 5);
                    }
                    continue;
                }

                let i = this.gk_max - y;
                // for (let i = 0; i < h; i++) {
                for (let j = 0; j < w; j++) {
                    let z: mokuai.XingZhuang;
                    if (this.gk[size].df) {
                        let jin = true;
                        for (let dd = 0; dd < this.gk[size].df.length; dd++) {
                            if (this.gk[size].df[dd][0] == j && this.gk[size].df[dd][1] == i || this.gk[size].df[dd][0] == -1) {
                                this.addXZ(this.gk[size].df[dd][3], j + x, i + y, sf_w, sf_h, this.gk[size].df[dd][2], tw_zy, i * this.jg_ + this.jg_, k, xuan_zhuan, zq, bian);
                                jin = false;
                                if (jin) {
                                    this.addXZ(lx, j + x, i + y, sf_w, sf_h, 1, tw_zy, i * this.jg_ + this.jg_, k, xuan_zhuan, zq, bian);
                                }
                            } else {
                                this.addXZ(lx, j + x, i + y, sf_w, sf_h, 1, tw_zy, i * this.jg_ + this.jg_, k, xuan_zhuan, zq, bian);
                            }
                        }
                    } else {
                        this.addXZ(lx, j + x, i + y, sf_w, sf_h, 1, tw_zy, i * this.jg_ + this.jg_, k, xuan_zhuan, zq, bian);
                    }
                }

                // }
            }
        }

        public addXZ(lx: number, x: number, y: number, sf_w: number, sf_h: number, type_p: number, tw_zy: any, wait: number, k: number, xuan_zhuan: number, zq: any, bian: number) {
            let base_x = Tools.getPhoneW() / 7;
            let base_y = base_x
            let z: mokuai.XingZhuang;
            if (sf_h == 0.3) {
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 1; j++) {
                        let s = base_x / Tools.getTXInf0(lx)[0] * 0.8 / 3;
                        let xx = base_x * x + base_x / 1 * j + base_x / 6 + base_x / 6;
                        let yy = -base_x * y - base_x / 3 * i - Tools.getPhoneH();
                        let jz = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 1, k)
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

            } else
                if (sf_h != null && sf_w != sf_h) {
                    if (sf_h == -3) {
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 1; j++) {
                                let s = base_x / Tools.getTXInf0(lx)[1] * 0.9 * 0.33333;
                                let sw = base_x / Tools.getTXInf0(lx)[0] * 0.9 * sf_w;
                                let xx = base_x * x + base_x * sf_w * 0.5
                                let yy = -base_x * y - base_x / 3 * i - Tools.getPhoneH() - base_x / 6;
                                let jz = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 1, k)
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

                    } else {
                        let s = base_x / Tools.getTXInf0(lx)[1] * 0.9 * sf_h;
                        let sw = base_x / Tools.getTXInf0(lx)[0] * 0.9 * sf_w;
                        let xx = base_x * x + base_x * 0.5 * sf_w;
                        let yy = -base_x * y - base_x * 0.5 - Tools.getPhoneH();
                        z = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 1, k)
                        z.type_P = type_p;
                    }
                } else
                    if (sf_w == 1) {
                        let s = base_x / Tools.getTXInf0(lx)[0] * 0.9;
                        let xx = base_x * x + base_x * 0.5;
                        let yy = -base_x * y - base_x * 0.5 - Tools.getPhoneH();
                        z = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 9, k)
                        z.type_P = type_p;
                        if (zq) {
                            z.is_zq = true;
                            z.jd = zq[0];
                            z.bj = base_x * zq[1];
                            z.jz = zq[2];
                        }





                    } else if (sf_w == -3) {
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                let s = base_x / Tools.getTXInf0(lx)[0] * 0.8 / 3;
                                if (lx == 7) {
                                    s = base_x / Tools.getTXInf0(lx)[1] * 0.8 / 3;
                                }
                                let xx = base_x * x + base_x / 3 * j + base_x / 6;
                                let yy = -base_x * y - base_x / 3 * i - Tools.getPhoneH() - base_x / 6;
                                let jz = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 1, k)
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

                    } else if (sf_w == 0.3) {
                        for (let i = 0; i < 1; i++) {
                            for (let j = 0; j < 3; j++) {
                                let s = base_x / Tools.getTXInf0(lx)[0] * 0.8 / 3;
                                let xx = base_x * x + base_x / 3 * j + base_x / 6;
                                let yy = -base_x * y - base_x / 3 * 1 - Tools.getPhoneH() - base_x / 6;
                                let jz = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 1, k)
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

                    } else if (sf_w == 1.5) {
                        let s = base_x / Tools.getTXInf0(lx)[0] * 0.9 * 1.5;
                        let xx = base_x * x + base_x * 0.5;
                        let yy = -base_x * y - base_x * 0.5 - Tools.getPhoneH();
                        z = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 14, k)
                        z.type_P = type_p;
                    } else if (sf_w == 2) {
                        let s = base_x / Tools.getTXInf0(lx)[0] * 0.9 * 2;
                        let xx = base_x * x + base_x;
                        let yy = -base_x * y - base_x - Tools.getPhoneH();
                        z = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 36, k)
                        z.type_P = type_p;
                    } else if (sf_w == 3) {
                        let s = base_x / Tools.getTXInf0(lx)[0] * 0.9 * 2.6;
                        let xx = base_x * x + base_x + base_x * 0.5;
                        let yy = -base_x * y - base_x - base_x * 0.5 - Tools.getPhoneH();
                        z = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 81, k)
                        z.type_P = type_p;
                    } else if (sf_w == -2) {
                        for (let i = 0; i < 2; i++) {
                            for (let j = 0; j < 2; j++) {
                                let s = base_x / Tools.getTXInf0(lx)[0] * 0.8 / 2;
                                if (lx == 7) {
                                    s = base_x / Tools.getTXInf0(lx)[1] * 0.8 / 2;
                                }
                                let xx = base_x * x + base_x / 2 * j + base_x / 4;
                                let yy = -base_x * y - base_x / 2 * i - Tools.getPhoneH() - base_x / 4;
                                let jz = Tools.getTX(this, lx, xx, yy, s, this.s[type_p], 2, k)
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

        }


    }
}