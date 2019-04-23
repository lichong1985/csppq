module suke {
    export class Suke extends mokuai.YX {
        constructor(scene: scene.TestScene,type: number, color: number, x, y) {
            super(scene,x, y, 0.4, 100, 1, { "r": 253, "g": 255, "b": 253 }, 9);
            this.is_sk = true;

        }

        public up() {
            // this.weiyi();
        };



    }

}