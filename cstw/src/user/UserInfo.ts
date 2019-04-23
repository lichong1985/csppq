module user {
    export class UserInfo {
        public static path_gk: string = 'gk.txt';
        public static path_gg: string = 'gg.txt';
        public static path_gk_MAK: string = 'gk_MAK.txt';

        public static gk_number: number = 0;
        public static gg_number: number = 0;
        public static gk_MAX_number: number = 5;

        public static async saveAndAddGK() {
            UserInfo.gk_number++;
            if (UserInfo.gk_number >= 51) {
                UserInfo.gk_number = 1;
            }
            await platform.saveUserInfo(UserInfo.gk_number + '', UserInfo.path_gk).catch(function (err) {
                egret.log("关卡存储异常:" + err.errMsg);
            }
            );

        }

        public static async saveAndAddGG() {
            await platform.saveUserInfo(UserInfo.gg_number + '', UserInfo.path_gg)
        }

        public static async saveAndAddGK_MAK(num: number) {
            UserInfo.gk_MAX_number = num;
            await platform.saveUserInfo(UserInfo.gk_MAX_number + '', UserInfo.path_gk_MAK)

        }

    }
}