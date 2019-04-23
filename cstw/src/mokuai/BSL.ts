module mokuai {
    export class BSL extends egret.Bitmap {
        public se: any;
        public se2: any;

        constructor(t: egret.Texture, y, se: any, se2: any) {
            super(t);
            this.anchorOffsetX = this.width * 0.5;
            this.x = Tools.getPhoneW() * 0.5;
            this.y = y;
            this.peise(se);
            this.se = se;
            this.se2 = se2;
            this.tw();

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

            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.filters = [colorFlilter];
        }

        public tw() {
            egret.Tween.get(this, { "loop": true }).wait(100).call(this.peise, this, [this.se2]).wait(100).call(this.peise, this, [this.se])
        }

    }
}