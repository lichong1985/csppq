//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {


    public game_w: number = 0;
    public game_h: number = 0;
    public scen: scene.TestScene;
    public bgl: number = 130 * 1000;
    public bgl_now: number = 0;
    public _channel: egret.SoundChannel;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private textfield: egret.TextField;
    public sound: egret.Sound
    public static is_stop: boolean = true;
    public static ison: boolean = false;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private async createGameScene() {
        for (let i = 0; i < 10; i++) {
            egret.log("KKKK:" + Tools.GetRandomNum(0, 1));
        }

        this.game_w = this.stage.stageWidth;
        this.game_h = this.stage.$stageHeight;
        await this.loadinfo();

        main.MainR.markM(this);
        main.MainR.rLoad2(1);

        this.myon()

    }
    public mz() {
        main.MainR.m._channel.stop();
        main.MainR.m.sound.play(0, -1)
    }
    public myon() {
        platform.myonShow().then(function (fulfilled) {
            // main.MainR.m.mz();
            Main.ison = true;
            Main.is_stop = false;
        })
    }

    private async loadinfo() {

        await platform.showShareMenu();


        let is_gk: boolean = true;
        let is_gg: boolean = true;
        let isgk_max: boolean = true;
        await platform.getFileInfo(user.UserInfo.path_gk)
            .catch(function (err) {
                is_gk = false;
                egret.log("关卡异常:" + err.errMsg);
            });

        await platform.getFileInfo(user.UserInfo.path_gg)
            .catch(function (err) {
                is_gg = false;
                egret.log("广告异常:" + err.errMsg);
            });

        await platform.getFileInfo(user.UserInfo.path_gk_MAK)
            .catch(function (err) {
                isgk_max = false;
                egret.log("关卡上限异常:" + err.errMsg);
            });
        //-------------------------------------------------------------------------------
        if (is_gk) {
            await platform.readUserInfo(user.UserInfo.path_gk).then(function (fulfilled) {
                user.UserInfo.gk_number = Number(fulfilled);
                egret.log("关卡数据:" + fulfilled + " --- " + user.UserInfo.gk_number);


            })
        } else {
            egret.log("初始化关卡")
            user.UserInfo.saveAndAddGK();
        }

        if (is_gg) {
            await platform.readUserInfo(user.UserInfo.path_gg).then(function (fulfilled) {
                egret.log("广告数据:" + fulfilled);
                user.UserInfo.gg_number = Number(fulfilled);
            })
        } else {
            egret.log("初始广告")
            user.UserInfo.saveAndAddGG();
        }

        if (isgk_max) {
            await platform.readUserInfo(user.UserInfo.path_gk_MAK).then(function (fulfilled) {
                egret.log("关卡上限:" + fulfilled);
                user.UserInfo.gk_MAX_number = Number(fulfilled);
            })
        } else {
            egret.log("初始关卡上限")
            user.UserInfo.saveAndAddGK_MAK(user.UserInfo.gk_MAX_number)
        }

    }





    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }
}