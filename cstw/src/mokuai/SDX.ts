module mokuai {
    //水滴
    export class SDX extends XingZhuang {
        constructor(scene: scene.TestScene,posX: number, posY: number, sf: number, mass: number, type: number, peise: any, pz_numb: number, k?: any) {
            if (k) {
                super(scene,"shuidi_k", posX, posY, sf, mass, type, peise, pz_numb);
            } else
                super(scene,"shuidi", posX, posY, sf, mass, type, peise, pz_numb);
            this.initShape();
            this.initPost();
            this.initColl();
            this.lx = 7;
            this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(this.lx)[0] * 0.8 / 3;//最小缩放值
            this.k = k;
            this.bitName = "shuidi";
        }

        public initColl() {
            this.boxShape.collisionMask = mokuai.mokuai_cr
            this.boxShape.collisionGroup = mokuai.mokuai_cr;

            this.boxShape1.collisionMask = mokuai.mokuai_cr
            this.boxShape1.collisionGroup = mokuai.mokuai_cr;
        }

        //初始化形状
        public boxShape: p2.Convex;
        public boxShape1: p2.Circle;

        public initShape() {
            let verts = this.getList(this.disp.width * this.sf * 0.85, this.disp.height * this.sf * 0.47);
            this.boxShape = new p2.Convex({ vertices: verts });
            this.boxShape1 = new p2.Circle({ radius: this.disp.width * 0.5 * this.sf });
            this.addShape(this.boxShape, [0, 0], 0);
            this.addShape(this.boxShape1, [0, -this.disp.height * 0.13 * this.sf], 0);


        }


        public getList(w: number, h: number): any {

            var verts = [
                [0, h * 0.5 + h * 0.55],
                [-w * 0.5, -h * 0.5 + h * 0.55],
                [w * 0.5, -h * 0.5 + h * 0.55]
            ];


            return verts;
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