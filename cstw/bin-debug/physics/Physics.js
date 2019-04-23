var Physics;
(function (Physics) {
    // export const factor: number = 50;//物理世界与像素世界 距离换算 因子 (一米 约等于 50像素)
    function getRelativeDistance(size, pos, unit) {
        var rx, ry;
        var x = pos.x;
        rx = (x - (size.x / 2)) * unit;
        if (rx < 0) {
            rx += unit * 0.5;
        }
        if (rx > 0) {
            rx += unit * 0.5;
        }
        if (rx == 0) {
            rx = unit * 0.5;
        }
        if (size.x == 1) {
            rx = 0;
        }
        if (x - (size.x / 2) == -0.5) {
            rx = 0;
        }
        //----------------------------------
        var y = size.y - (pos.y) - 1;
        // let y = (pos.y)
        ry = (y - (size.y / 2)) * unit;
        if (ry < 0) {
            ry += unit * 0.5;
        }
        if (ry > 0) {
            ry += unit * 0.5;
        }
        if (ry == 0) {
            ry = unit * 0.5;
        }
        if (size.y == 1) {
            ry = 0;
        }
        if (y - (size.y / 2) == -0.5) {
            ry = 0;
        }
        // egret.log("LLLLLLLLLLLLLLLLLLL:" + rx + "_" + ry + "|" + "|" + pos.y + "|" + size.y + "|"+y);
        return egret.Point.create(rx, ry);
    }
    Physics.getRelativeDistance = getRelativeDistance;
})(Physics || (Physics = {}));
//# sourceMappingURL=Physics.js.map