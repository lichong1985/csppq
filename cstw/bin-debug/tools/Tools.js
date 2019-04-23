var Tools;
(function (Tools) {
    //p2  坐标 转 白鹭 坐标
    function p2TOegretPoitn(x, y) {
        return egret.Point.create(x, -y);
    }
    Tools.p2TOegretPoitn = p2TOegretPoitn;
    // 白鹭 坐标 转 p2 坐标
    function egretTOp2(x, y) {
        return egret.Point.create(x, -y);
    }
    Tools.egretTOp2 = egretTOp2;
    //获取设备分辨率宽
    function getPhoneW() {
        return main.MainR.m.game_w;
    }
    Tools.getPhoneW = getPhoneW;
    //获取设备分辨率高
    function getPhoneH() {
        return main.MainR.m.game_h;
    }
    Tools.getPhoneH = getPhoneH;
    //求两个点之间的向量
    function xiangliang(from, to, sd) {
        var jl = egret.Point.distance(to, from);
        var pi = sd / jl;
        var rx = (to.x - from.x) * pi;
        var ry = (to.y - from.y) * pi;
        return egret.Point.create(rx, ry);
    }
    Tools.xiangliang = xiangliang;
    //生成随机数
    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }
    Tools.GetRandomNum = GetRandomNum;
    //-----------------图形尺寸--------------------------
    var ZFX = [177, 177]; //正方形
    var YX = [176, 176]; //圆形
    var XSJ = [175, 154]; //斜三角
    var YZX = [176, 51]; //一字型
    var WJX = [176, 166]; //五角星
    var SDX = [136, 176]; //水滴形
    var SZX = [177, 176]; //十字星
    var SJX = [177, 157]; //三角形
    var LBX = [175, 159]; //六边形
    var LX = [176, 175]; //菱形
    var XX = [176, 176]; //叉叉
    function getTXInf0(type) {
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
    Tools.getTXInf0 = getTXInf0;
    function getTX(scene, type, x, y, sf, s, pz_numb, k, sf_w) {
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
    Tools.getTX = getTX;
    function peise(bit, rgb) {
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
    Tools.peise = peise;
    var color1 = { "s2": { "r": 254, "g": 229, "b": 35 } };
    var color2 = { "s2": { "r": 51, "g": 255, "b": 58 } };
    var color3 = { "s2": { "r": 119, "g": 26, "b": 254 } };
    var color4 = { "s2": { "r": 45, "g": 0, "b": 254 } };
    var color5 = { "s2": { "r": 49, "g": 255, "b": 77 } };
    var ss = [color1, color2, color3, color4, color5];
    function addXXX(scene, yy) {
        for (var i = 0; i < 30; i++) {
            var s = ss[i % 5];
            var x = new mokuai.WJX2(scene, 0, yy, 0.1, 1, 4, s.s2, null);
            x.is_zhongli = true;
            x.velocity = [GetRandomNum(50, 100), GetRandomNum(180, 150)];
            x.damping = 0.2;
            x.bz = Math.abs(yy);
            var y = new mokuai.WJX2(scene, Tools.getPhoneW(), yy, 0.1, 1, 4, s.s2, null);
            y.is_zhongli = true;
            y.velocity = [-GetRandomNum(50, 100), GetRandomNum(180, 150)];
            y.damping = 0.2;
            y.bz = Math.abs(yy);
            scene.addBuilding(x);
            scene.addBuilding(y);
        }
    }
    Tools.addXXX = addXXX;
})(Tools || (Tools = {}));
//# sourceMappingURL=Tools.js.map