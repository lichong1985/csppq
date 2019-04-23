var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var main;
(function (main) {
    var MainR = (function () {
        function MainR() {
        }
        // constructor() { }
        MainR.markM = function (m) {
            MainR.m = m;
        };
        // public static rLoad2() {
        //     let c = MainR.m.stage.getChildAt(0);
        //     if (c) {
        //         if (c.parent) {
        //             c.parent.removeChild(c);
        //             c = null;
        //         }
        //         let z = new guanka.XG1(guanka.all[Main.gk_numb]);
        //         z.x = 0;
        //         z.y = (Tools.getPhoneH());
        //         MainR.m.stage.addChild(Main.scen)
        //         Main.gk_numb++;
        //     }
        // }
        MainR.rLoad2 = function () {
            egret.log("CCCCCCCCCCC:" + MainR.m.stage.numChildren + "     ");
            if (MainR.m.scen) {
                // MainR.m.scen.rem();
                if (MainR.m.scen.parent) {
                    MainR.m.scen.world.clear();
                    MainR.m.scen.rem();
                    MainR.m.stage.removeChild(MainR.m.scen);
                    MainR.m.scen = null;
                }
            }
            MainR.m.scen = new guanka.XG1(guanka.all[user.UserInfo.gk_number - 1], user.UserInfo.gk_number - 1);
            MainR.m.scen.x = 0;
            MainR.m.scen.y = (Tools.getPhoneH());
            MainR.m.stage.addChild(MainR.m.scen);
            MainR.k++;
        };
        MainR.k = 0;
        return MainR;
    }());
    main.MainR = MainR;
    __reflect(MainR.prototype, "main.MainR");
})(main || (main = {}));
//# sourceMappingURL=MainR.js.map