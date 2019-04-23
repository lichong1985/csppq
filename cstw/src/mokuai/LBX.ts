module mokuai {
    export class LBX extends XingZhuang {
        constructor(scene: scene.TestScene, posX: number, posY: number, sf: number, mass: number, type: number, peise: any, pz_numb: number, k?: any) {
            if (k) {
                super(scene, "liubian_k", posX, posY, sf, mass, type, peise, pz_numb);
            } else
                super(scene, "liubian", posX, posY, sf, mass, type, peise, pz_numb);
            this.initShape();
            this.initPost();
            this.initColl();
            this.lx = 10;
            this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(this.lx)[0] * 0.8 / 3;//最小缩放值
            this.k = k;
            this.bitName = "liubian";
        }

        public initColl() {
            this.boxShape.collisionMask = mokuai.mokuai_cr
            this.boxShape.collisionGroup = mokuai.mokuai_cr;
        }

        //初始化形状
        public boxShape: p2.Convex;
        public initShape() {
            let verts = this.getList(this.disp.width * this.sf, this.disp.height * this.sf);
            this.boxShape = new p2.Convex({ vertices: verts });
            this.addShape(this.boxShape);

        }


        public getList(w: number, h: number): any {

            // var verts = [
            //     [-w * 0.25, -h * 0.5],
            //     [w * 0.25, -h * 0.5],
            //     [w * 0.5, 0],
            //     [w * 0.25, h * 0.5],
            //     [-w * 0.25, h * 0.5],
            //     [-w * 0.5, 0]
            // ];
            var verts = [
                [-w * 0.25, h * 0.5],
                [-w * 0.5, 0],
                [-w * 0.25, -h * 0.5],
                [w * 0.25, -h * 0.5],
                [w * 0.5, 0],
                [w * 0.25, h * 0.5]
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