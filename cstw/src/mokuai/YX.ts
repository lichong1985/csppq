module mokuai {
    //十字型
    export class YX extends XingZhuang {
        constructor(scene: scene.TestScene,posX: number, posY: number, sf: number, mass: number, type: number, peise: any, pz_numb: number, k?: any) {
            if (k) {
                super(scene,"yuan_k", posX, posY, sf, mass, type, peise, pz_numb);
            } else
                super(scene,"yuan", posX, posY, sf, mass, type, peise, pz_numb);
            this.initShape();
            this.initPost();
            this.initColl();
            this.lx = 2;
            this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(this.lx)[0] * 0.8 / 3;//最小缩放值
            this.k = k;
            this.bitName = "yuan";
        }

        public initColl() {
            this.boxShape.collisionMask = mokuai.mokuai_cr
            this.boxShape.collisionGroup = mokuai.mokuai_cr;


        }

        //初始化形状
        public boxShape: p2.Circle;

        public initShape() {
            this.boxShape = new p2.Circle({ radius: this.disp.width * 0.5 * this.sf });
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