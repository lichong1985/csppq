module Tools {

    //p2  坐标 转 白鹭 坐标
    export function p2TOegretPoitn(x: number, y: number): egret.Point {
        return egret.Point.create(x, - y);

    }

    // 白鹭 坐标 转 p2 坐标
    export function egretTOp2(x: number, y: number): egret.Point {
        return egret.Point.create(x, - y);
    }




    //获取设备分辨率宽
    export function getPhoneW(): number {

        return main.MainR.m.game_w;


    }

    //获取设备分辨率高
    export function getPhoneH(): number {
        return main.MainR.m.game_h;
    }

    //求两个点之间的向量
    export function xiangliang(from: egret.Point, to: egret.Point, sd: number): egret.Point {
        let jl = egret.Point.distance(to, from);
        let pi = sd / jl;

        let rx = (to.x - from.x) * pi;
        let ry = (to.y - from.y) * pi;
        return egret.Point.create(rx, ry);

    }

    //生成随机数
    export function GetRandomNum(Min, Max): number {
        let Range: number = Max - Min;
        let Rand: number = Math.random();
        return (Min + Math.round(Rand * Range));
    }

    //-----------------图形尺寸--------------------------
    let ZFX: number[] = [177, 177];//正方形
    let YX: number[] = [176, 176];//圆形
    let XSJ: number[] = [175, 154];//斜三角
    let YZX: number[] = [176, 51];//一字型
    let WJX: number[] = [176, 166];//五角星
    let SDX: number[] = [136, 176];//水滴形
    let SZX: number[] = [177, 176];//十字星
    let SJX: number[] = [177, 157];//三角形
    let LBX: number[] = [175, 159];//六边形
    let LX: number[] = [176, 175];//菱形
    let XX: number[] = [176, 176];//叉叉

    export function getTXInf0(type: number): any {
        if (type == 1) {
            return ZFX;
        }

        if (type == 2) {
            return YX;
        }
        if (type == 3) {
            return XSJ;
        }
        if (type == 4) {
            return XSJ;
        }
        if (type == 5) {
            return ZFX;
        }
        if (type == 6) {
            return WJX;
        }
        if (type == 7) {
            return SDX;
        }
        if (type == 8) {
            return SZX;
        }
        if (type == 9) {
            return SJX;
        }
        if (type == 10) {
            return LBX;
        }
        if (type == 11) {
            return LX;
        }
        if (type == 12) {
            return XX;
        }
    }


    export function getTX(scene: scene.TestScene, type: number, x: number, y: number, sf: number, s: any, pz_numb: number, k: any, sf_w?: number): mokuai.XingZhuang {
        if (type == 1) {
            return new mokuai.ZFX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 2) {
            return new mokuai.YX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 3) {
            return new mokuai.ZXSJ(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 4) {
            return new mokuai.YXSJ(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 5) {
            if (sf_w)
                return new mokuai.YZX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
            else
                return new mokuai.YZX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 6) {
            return new mokuai.WJX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 7) {
            return new mokuai.SDX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 8) {
            return new mokuai.SZX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 9) {
            return new mokuai.SJX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 10) {
            return new mokuai.LBX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 11) {
            return new mokuai.LX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }

        if (type == 12) {
            return new mokuai.CCX(scene, x, y, sf, 0.1, 1, s, pz_numb, k);
        }
        return null;
    }


    export function peise(bit: egret.Bitmap, rgb: any) {
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
        this.bit.filters = [colorFlilter];
    }

    let color1: any = { "s2": { "r": 254, "g": 229, "b": 35 } }
    let color2: any = { "s2": { "r": 51, "g": 255, "b": 58 } }
    let color3: any = { "s2": { "r": 119, "g": 26, "b": 254 } }
    let color4: any = { "s2": { "r": 45, "g": 0, "b": 254 } }
    let color5: any = { "s2": { "r": 49, "g": 255, "b": 77 } }
    let ss: any[] = [color1, color2, color3, color4, color5]

    export function addXXX(scene: scene.TestScene, yy: number) {
        for (let i = 0; i < 30; i++) {

            let s = ss[i % 5];

            let x = new mokuai.WJX2(scene, 0, yy, 0.1, 1, 4, s.s2, null);
            x.is_zhongli = true;
            x.velocity = [GetRandomNum(50, 100), GetRandomNum(180, 150)];
            x.damping = 0.2;
            x.bz = Math.abs(yy);

            let y = new mokuai.WJX2(scene, Tools.getPhoneW(), yy, 0.1, 1, 4, s.s2, null);
            y.is_zhongli = true;
            y.velocity = [- GetRandomNum(50, 100), GetRandomNum(180, 150)];
            y.damping = 0.2;
            y.bz = Math.abs(yy);
            scene.addBuilding(x);
            scene.addBuilding(y);
        }
    }




}