module mokuai {
    //十字型
    export class CCX extends XingZhuang {
        constructor(scene: scene.TestScene,posX: number, posY: number, sf: number, mass: number, type: number, peise: any, pz_numb: number, k?: any) {
            if (k) {
                super(scene,"cha_k", posX, posY, sf, mass, type, peise, pz_numb);

            } else
                super(scene,"cha", posX, posY, sf, mass, type, peise, pz_numb);
            this.initShape();
            this.initPost();
            this.initColl();
            this.lx = 12;
            this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(this.lx)[0] * 0.8 / 3;//最小缩放值
            this.k = k;
            this.bitName = "cha";
        }

        public initColl() {
            this.boxShape.collisionMask = mokuai.mokuai_cr
            this.boxShape.collisionGroup = mokuai.mokuai_cr;

            this.boxShape2.collisionMask = mokuai.mokuai_cr
            this.boxShape2.collisionGroup = mokuai.mokuai_cr;
        }

        //初始化形状
        public boxShape: p2.Box;
        public boxShape2: p2.Box;
        public initShape() {
            this.boxShape2 = new p2.Box({ width: this.disp.width * 0.3 * this.sf, height: this.disp.height * this.sf * 1.15 });
            this.boxShape = new p2.Box({ width: this.disp.width * 0.3 * this.sf, height: this.disp.height * this.sf * 1.15 });
            this.addShape(this.boxShape, [0, 0], Math.PI * 0.25);
            this.addShape(this.boxShape2, [0, 0], -Math.PI * 0.25);

            // this.addShape(new p2.Box({ width: this.disp.width * 0.24 * this.sf, height: this.disp.height * this.sf }), [0, 0], 0);
            // this.addShape(new p2.Box({ width: this.disp.width * this.sf, height: this.disp.height * 0.24 * this.sf }), [0, 0], 0);
        }





        //初始化刚体位置
        public initPost() {
            //设置y轴坐标
            let p = Tools.egretTOp2(this.posX, this.posY);
            let pp = Tools.p2TOegretPoitn(p.x, p.y);

            this.position[0] = p.x;
            this.position[1] = p.y;
        }

    }
}