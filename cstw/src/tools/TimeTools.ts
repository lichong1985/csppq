module tools {
    export let suspended_number: number = 0;
    export let suspended_mark: number = 0;
    //暂停
    export function suspended() {
        tools.suspended_mark = egret.getTimer();
    }

    //开始游戏
    export function start() {
        tools.suspended_number += (egret.getTimer() - tools.suspended_mark);
    }

    export function getTimer(): number {
        return egret.getTimer() - tools.suspended_number;
    }



}