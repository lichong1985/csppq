module mokuai {
    export class WJX2 extends XingZhuang {
        constructor(scene: scene.TestScene, posX: number, posY: number, sf: number, mass: number, type: number, peise: any, pz_numb: number, k?: any) {
            if (k) {
                super(scene, "wujiao_k", posX, posY, sf, mass, type, peise, pz_numb);
            } else
                super(scene, "wujiao", posX, posY, sf, mass, type, peise, pz_numb);
            this.initShape();
            this.initPost();
            this.initColl();
            this.lx = 6;
            this.sf_min = (Tools.getPhoneW() / 7) / Tools.getTXInf0(this.lx)[0] * 0.8 / 3;//最小缩放值
            this.k = k;
            this.bitName = "wujiao";
        }

        public initColl() {
            this.boxShape.collisionMask = mokuai.mokuai_cr
            this.boxShape.collisionGroup = mokuai.null_cs;

            this.boxShape2.collisionMask = mokuai.mokuai_cr
            this.boxShape2.collisionGroup = mokuai.null_cs;

            this.boxShape3.collisionMask = mokuai.mokuai_cr
            this.boxShape3.collisionGroup = mokuai.null_cs;

            this.boxShape4.collisionMask = mokuai.mokuai_cr
            this.boxShape4.collisionGroup = mokuai.null_cs;

            this.boxShape5.collisionMask = mokuai.mokuai_cr
            this.boxShape5.collisionGroup = mokuai.null_cs;
        }

        //初始化形状
        public boxShape: p2.Convex;
        public boxShape2: p2.Convex;
        public boxShape3: p2.Convex;
        public boxShape4: p2.Convex;
        public boxShape5: p2.Convex;
        public initShape() {
            // let verts = this.getList(this.disp.width * this.sf, this.disp.height * this.sf);
            let w = this.disp.width * this.sf;
            let h = this.disp.height * this.sf;

            var verts = [
                [(0), (h * 0.5)],
                [(-w * 0.16), (h * 0.17)],
                [(w * 0.16), (h * 0.17)]

            ];

            this.boxShape = new p2.Convex({ vertices: verts });

            verts = [
                [(w * 0.16), (h * 0.17)],
                [(w * 0.24), -(h * 0.13)],
                [(w * 0.47), (h * 0.12)]
            ];

            this.boxShape2 = new p2.Convex({ vertices: verts });


            verts = [
                [(w * 0.24), (-h * 0.13)],
                [(0), (-h * 0.32)],
                [(w * 0.29), (-h * 0.47)]
            ];

            this.boxShape3 = new p2.Convex({ vertices: verts });

            verts = [
                [(0), -(h * 0.33)],
                [(-w * 0.25), -(h * 0.13)],
                [(-w * 0.29), -(h * 0.47)]
            ];

            this.boxShape4 = new p2.Convex({ vertices: verts });

            verts = [
                [(-w * 0.25), -(h * 0.13)],
                [(-w * 0.16), (h * 0.17)],
                [(-w * 0.47), (h * 0.12)]
            ];

            this.boxShape5 = new p2.Convex({ vertices: verts });




            this.addShape(this.boxShape);
            this.addShape(this.boxShape2);
            this.addShape(this.boxShape3);
            this.addShape(this.boxShape4);
            this.addShape(this.boxShape5);

        }


        // public getList(w: number, h: number): any {

        //     var verts = [
        //         [(0), -(h * 0.5)],
        //         [(w * 0.16), -(h * 0.15)],
        //         [(w * 0.5), -(h * 0.15)],
        //         [(w * 0.25), (h * 0.13)],
        //         [(w * 0.34), (h * 0.5)],
        //         [(0), (h * 0.33)],
        //         [(-w * 0.34), (h * 0.5)],
        //         [(-w * 0.25), (h * 0.13)],
        //         [(-w * 0.5), -(h * 0.15)],
        //         [(-w * 0.16), -(h * 0.17)],
        //     ];


        //     return verts;
        // }


        //初始化刚体位置
        public initPost() {
            //设置y轴坐标
            let p = Tools.egretTOp2(this.posX, this.posY);

            this.position[0] = p.x;
            this.position[1] = p.y;
        }

    }
}