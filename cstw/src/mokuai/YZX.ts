module mokuai {
    //十字型
    export class YZX extends XingZhuang {
        public sf_w: number;
        constructor(scene: scene.TestScene,posX: number, posY: number, sf: number, mass: number, type: number, peise: any, sf_w: number, pz_numb: number, k?: any) {
            if (k) {
                super(scene,"zhengfang_k", posX, posY, sf, mass, type, peise, pz_numb);
            } else
                super(scene,"zhengfang", posX, posY, sf, mass, type, peise, sf_w);
            this.sf_w = sf_w


            this.initShape();
            this.initPost();
            this.initColl();
            this.lx = 5;
            this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(this.lx)[0] * 0.8 / 3;//最小缩放值
            this.k = k;
            this.bitName = "zhengfang";
        }



        public initColl() {
            this.boxShape.collisionMask = mokuai.mokuai_cr
            this.boxShape.collisionGroup = mokuai.mokuai_cr;
        }

        //初始化形状
        public boxShape: p2.Box;
        public initShape() {
            this.boxShape = new p2.Box({ width: this.disp.width * this.sf_w, height: this.disp.height * this.sf });
            this.addShape(this.boxShape, [0, 0], 0);


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