/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {

    getUserInfo(): Promise<any>;

    login(): Promise<any>
    saveUserInfo(info, path): Promise<any>;
    readUserInfo(path): Promise<any>;
    getFileInfo(path): Promise<any>;

    //右上角按钮分享
    showShareMenu(): Promise<any>;
    //按钮分享
    shareAppMessage(): Promise<any>;

    //创建视频广告
    createRewardedVideoAd(): Promise<any>;
    // 视频回掉
    rewardedVideoAdQ(): Promise<any>;
    //后台切换回掉
    myonShow(): Promise<any>;
    //广告条
    createBann(x, y,w): Promise<any>;
    //关闭广告条
    cloesBann(): Promise<any>;

}



class DebugPlatform implements Platform {
    async getUserInfo() {
        return { nickName: "username" }
    }
    async login() { }
    async saveUserInfo() { }
    async readUserInfo() { }
    async getFileInfo() { }
    async showShareMenu() { }
    async shareAppMessage() { }
    async createRewardedVideoAd() { }
    async rewardedVideoAdQ() { }
    async myonShow() { }
    async createBann(x, y,w) { }
    async cloesBann() { };

}




if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}





