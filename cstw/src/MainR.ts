module main {
    export class MainR {
        public static m: Main;
        public static k: number = 0;
        // constructor() { }

        public static markM(m: Main) {
            MainR.m = m;
        }

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

        public static rLoad2(t: number) {
            egret.log("CCCCCCCCCCC:" + MainR.m.stage.numChildren + "     " + (egret.getTimer() - main.MainR.m.bgl_now) % main.MainR.m.bgl)

            platform.createBann(0, Tools.getPhoneH() * 0.2,Tools.getPhoneW());
            if (!main.MainR.m.sound) {
                main.MainR.m.sound = RES.getRes("bg_mp3");
                main.MainR.m._channel = main.MainR.m.sound.play(0, -1);
                Main.is_stop = true;
            }
            if (t == 1) {

                main.MainR.m._channel.stop()
                main.MainR.m._channel = main.MainR.m.sound.play(0, -1);
            }
            if (t == 2 && !Main.is_stop) {
                main.MainR.m._channel.stop()
                main.MainR.m._channel = main.MainR.m.sound.play(0, -1);
                Main.is_stop = true;
            }


            // if (main.MainR.m.is_stop) {
            //     main.MainR.m._channel.stop();
            //     main.MainR.m._channel = main.MainR.m.sound.play(0, -1);
            //     main.MainR.m.is_stop = false;

            // }
            // main.MainR.m.bgl_now = egret.getTimer();

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
            MainR.m.stage.addChild(MainR.m.scen)
            MainR.k++;

        }

        // public static rLoad1() {
        //     if (Main.scen) {

        //         if (Main.scen.parent) {
        //             Main.scen.parent.removeChild(Main.scen);
        //             Main.scen = null;
        //         }
        //     }
        // }
    }
}