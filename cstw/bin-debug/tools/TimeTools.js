var tools;
(function (tools) {
    tools.suspended_number = 0;
    tools.suspended_mark = 0;
    //暂停
    function suspended() {
        tools.suspended_mark = egret.getTimer();
    }
    tools.suspended = suspended;
    //开始游戏
    function start() {
        tools.suspended_number += (egret.getTimer() - tools.suspended_mark);
    }
    tools.start = start;
    function getTimer() {
        return egret.getTimer() - tools.suspended_number;
    }
    tools.getTimer = getTimer;
})(tools || (tools = {}));
//# sourceMappingURL=TimeTools.js.map