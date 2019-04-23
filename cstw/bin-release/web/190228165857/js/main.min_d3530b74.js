var __reflect=this&&this.__reflect||function(t,i,o){t.__class__=i,o?o.push(i):o=[i],t.__types__=t.__types__?o.concat(t.__types__):o},__extends=this&&this.__extends||function(t,i){function o(){this.constructor=t}for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);o.prototype=i.prototype,t.prototype=new o},__awaiter=this&&this.__awaiter||function(t,i,o,e){return new(o||(o=Promise))(function(s,n){function h(t){try{r(e.next(t))}catch(i){n(i)}}function a(t){try{r(e["throw"](t))}catch(i){n(i)}}function r(t){t.done?s(t.value):new o(function(i){i(t.value)}).then(h,a)}r((e=e.apply(t,i||[])).next())})},__generator=this&&this.__generator||function(t,i){function o(t){return function(i){return e([t,i])}}function e(o){if(s)throw new TypeError("Generator is already executing.");for(;r;)try{if(s=1,n&&(h=n[2&o[0]?"return":o[0]?"throw":"next"])&&!(h=h.call(n,o[1])).done)return h;switch(n=0,h&&(o=[0,h.value]),o[0]){case 0:case 1:h=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,n=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(h=r.trys,!(h=h.length>0&&h[h.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!h||o[1]>h[0]&&o[1]<h[3])){r.label=o[1];break}if(6===o[0]&&r.label<h[1]){r.label=h[1],h=o;break}if(h&&r.label<h[2]){r.label=h[2],r.ops.push(o);break}h[2]&&r.ops.pop(),r.trys.pop();continue}o=i.call(t,r)}catch(e){o=[6,e],n=0}finally{s=h=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}var s,n,h,a,r={label:0,sent:function(){if(1&h[0])throw h[1];return h[1]},trys:[],ops:[]};return a={next:o(0),"throw":o(1),"return":o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},mokuai;!function(t){t.null_cs=Math.pow(2,0),t.mokuai_cr=Math.pow(2,1);var i=function(t){function i(i,o,e,s,n,h,a){var r=t.call(this,{mass:n})||this;return r.posX=0,r.posY=0,r.sf=1,r.type_P=1,r.posX=o,r.posY=e,r.sf=s,r.peise_=a,r.initBitMap(i),r.damping=.1,r.type_P=h,r}return __extends(i,t),i.prototype.initBitMap=function(t){this.disp=new egret.Bitmap(RES.getRes(t)),this.disp.anchorOffsetX=.5*this.disp.width,this.disp.anchorOffsetY=.5*this.disp.height,this.disp.scaleX=this.sf,this.disp.scaleY=this.sf,this.displays=[this.disp],this.peise(this.peise_)},i.prototype.peise=function(t){if(t){var i=[1,0,0,0,t.r-255,0,1,0,0,t.g-255,0,0,1,0,t.b-255,0,0,0,1,0],o=new egret.ColorMatrixFilter(i);this.disp.filters=[o]}},i}(p2.Body);t.XingZhuang=i,__reflect(i.prototype,"mokuai.XingZhuang")}(mokuai||(mokuai={}));var scene;!function(t){var i=function(t){function i(i){var o=t.call(this)||this;return o.is_zou=!1,o.is_sk=!0,o.down_mark=egret.Point.create(0,0),o.removeList=new Array,o.initP2World(),o.initBG(i),o.initTestData(),o.initSuKe(),o.addShuKeListener(),o}return __extends(i,t),i.prototype.initBG=function(t){this.bg=new egret.Bitmap(RES.getRes("bgb_png")),this.bg.width=Tools.getPhoneW(),this.bg.height=3*Tools.getPhoneH(),this.bg.x=0,this.bg.y=3*-Tools.getPhoneH(),this.addChild(this.bg);var i=[1,0,0,0,t.r-255,0,1,0,0,t.g-255,0,0,1,0,t.b-255,0,0,0,1,0],o=new egret.ColorMatrixFilter(i);this.bg.filters=[o]},i.prototype.initP2World=function(){this.world=new p2.World,this.world.gravity=[0,0],this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this)},i.prototype.initSuKe=function(){var t=.5*Tools.getPhoneW(),i=.25*-Tools.getPhoneH();this.sk=new suke.Suke(1,1,t,i),this.addBuilding(this.sk)},i.prototype.onEnterFrame=function(){this.p2Updata(),this.up(),this.remove()},i.prototype.remove=function(){for(var t=this.removeList.length,i=0;t>i;i++){var o=this.removeList.pop();this.removeChild(o.disp),this.world.removeBody(o)}},i.prototype.p2Updata=function(){this.world.step(.06);for(var t=this.world.bodies.length,i=0;t>i;i++){var o=this.world.bodies[i];(o.position[1]<this.y-(Tools.getPhoneH()+100)||o.position[0]<-100||o.position[0]>Tools.getPhoneW()+100)&&this.removeList.push(o);for(var e=0;e<o.displays.length;e++){var s=o.displays[e];if(s){var n=Tools.p2TOegretPoitn(o.position[0],o.position[1]);s.x=n.x,s.y=n.y,s.rotation=360-180*o.angle/Math.PI}}}},i.prototype.addBuilding=function(t){this.world.addBody(t),this.addChildAt(t.disp,5)},i.prototype.initTestData=function(){},i.prototype.addShuKeListener=function(){this.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this),this.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this)},i.prototype.mouseUp=function(t){this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},i.prototype.mouseDown=function(t){this.down_mark.x=t.stageX,this.down_mark.y=t.stageY,this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this),this.is_zou=!0},i.prototype.mouseMove=function(t){var i=egret.Point.create(t.stageX-this.down_mark.x,-(t.stageY-this.down_mark.y));this.sk.position[0]+=i.x,this.sk.position[1]+=i.y,this.down_mark.x=t.stageX,this.down_mark.y=t.stageY},i.prototype.up=function(){},i}(egret.DisplayObjectContainer);t.TestScene=i,__reflect(i.prototype,"scene.TestScene")}(scene||(scene={}));var guanka;!function(t){var i=function(t){function i(i){var o=t.call(this,i)||this;return o.b=3,o.initBar(),o.initQiPao(),o.initText(),o.initQian(),o.initJinDu(),o}return __extends(i,t),i.prototype.up=function(){this.is_zou&&(this.y+=this.b,this.sk.position[1]+=this.b,this.yuan_y.y-=this.b,this.yuan_z.y-=this.b,this.shu_y.y-=this.b,this.shu_z.y-=this.b,this.tiao_s.y-=this.b,this.tiao_x.y-=this.b,this.dui_hao.y-=this.b,this.dui_hao_test.y-=this.b,this.shi_pin.y-=this.b,this.shi_ping_text.y-=this.b),this.sk.angle=0},i.prototype.initBar=function(){this.shou=new egret.Bitmap(RES.getRes("tap_png")),this.shou.x=.3*Tools.getPhoneW(),this.shou.y=.1*-Tools.getPhoneH(),this.shou.anchorOffsetX=.5*this.shou.width,this.shou.anchorOffsetY=.5*this.shou.height,this.shou.scaleX=.3,this.shou.scaleY=.3,this.addChildAt(this.shou,5),egret.Tween.get(this.shou,{loop:!0}).to({x:.7*Tools.getPhoneW()},1500).to({x:.3*Tools.getPhoneW()},1e3),this.jiantou_zuo=new egret.Bitmap(RES.getRes("jiantou_png")),this.jiantou_zuo.anchorOffsetY=.5*this.jiantou_zuo.height,this.jiantou_zuo.x=.38*Tools.getPhoneW(),this.jiantou_zuo.y=.25*-Tools.getPhoneH(),this.jiantou_zuo.scaleX=-.4,this.jiantou_zuo.scaleY=.4,this.jiantou_zuo.alpha=.3,this.addChildAt(this.jiantou_zuo,5),this.jiantou_you=new egret.Bitmap(RES.getRes("jiantou_png")),this.jiantou_you.anchorOffsetY=.5*this.jiantou_zuo.height,this.jiantou_you.x=.62*Tools.getPhoneW(),this.jiantou_you.y=.25*-Tools.getPhoneH(),this.jiantou_you.scaleX=.4,this.jiantou_you.scaleY=.4,this.jiantou_you.alpha=.3,this.addChildAt(this.jiantou_you,5)},i.prototype.initQiPao=function(){this.qipao=new egret.Bitmap(RES.getRes("qipao_png")),this.qipao.anchorOffsetX=.5*this.qipao.width,this.qipao.anchorOffsetY=.5*this.qipao.height,this.qipao.x=.5*Tools.getPhoneW(),this.qipao.y=.8*-Tools.getPhoneH(),this.addChildAt(this.qipao,5)},i.prototype.initText=function(){this.hua_dong_kai_shi=new egret.TextField,this.hua_dong_kai_shi.textFlow=[{text:"滑动开始",style:{textColor:16210991,size:56}}],this.addChildAt(this.hua_dong_kai_shi,5),this.hua_dong_kai_shi.x=.5*Tools.getPhoneW(),this.hua_dong_kai_shi.y=.4*-Tools.getPhoneH(),this.hua_dong_kai_shi.anchorOffsetX=.5*this.hua_dong_kai_shi.width,this.hua_dong_kai_shi.anchorOffsetY=.5*this.hua_dong_kai_shi.height,this.guan_ka=new egret.TextField,this.guan_ka.textFlow=[{text:"Level 1",style:{textColor:16210991,size:30}}],this.addChildAt(this.guan_ka,5),this.guan_ka.x=.5*Tools.getPhoneW(),this.guan_ka.y=.85*-Tools.getPhoneH(),this.guan_ka.anchorOffsetX=.5*this.guan_ka.width,this.guan_ka.anchorOffsetY=.5*this.guan_ka.height},i.prototype.initQian=function(){this.dui_hao=new egret.Bitmap(RES.getRes("gk_png")),this.dui_hao.anchorOffsetX=.5*this.dui_hao.width,this.dui_hao.anchorOffsetY=.5*this.dui_hao.height,this.dui_hao.x=.05*Tools.getPhoneW(),this.dui_hao.y=.97*-Tools.getPhoneH(),this.addChildAt(this.dui_hao,6),this.dui_hao.scaleX=.1,this.dui_hao.scaleY=.1,this.dui_hao_test=new egret.TextField,this.dui_hao_test.text="1/100",this.dui_hao_test.textColor=35180,this.dui_hao_test.size=30,this.dui_hao_test.x=.1*Tools.getPhoneW(),this.dui_hao_test.y=.97*-Tools.getPhoneH(),this.dui_hao_test.anchorOffsetY=.5*this.dui_hao_test.height,this.addChildAt(this.dui_hao_test,6),this.shi_pin=new egret.Bitmap(RES.getRes("play_png")),this.shi_pin.anchorOffsetX=.5*this.shi_pin.width,this.shi_pin.anchorOffsetY=.5*this.shi_pin.height,this.shi_pin.x=.05*Tools.getPhoneW(),this.shi_pin.y=.91*-Tools.getPhoneH(),this.addChildAt(this.shi_pin,6),this.shi_pin.scaleX=.1,this.shi_pin.scaleY=.1,this.shi_ping_text=new egret.TextField,this.shi_ping_text.text="0/60",this.shi_ping_text.textColor=7239076,this.shi_ping_text.size=30,this.shi_ping_text.x=.1*Tools.getPhoneW(),this.shi_ping_text.y=.91*-Tools.getPhoneH(),this.shi_ping_text.anchorOffsetY=.5*this.shi_ping_text.height,this.addChildAt(this.shi_ping_text,6)},i.prototype.initJinDu=function(){this.yuan_z=new egret.Bitmap(RES.getRes("yuan_png")),this.yuan_z.anchorOffsetX=.5*this.yuan_z.width,this.yuan_z.anchorOffsetY=.5*this.yuan_z.height,this.yuan_z.x=.3*Tools.getPhoneW(),this.yuan_z.y=.9*-Tools.getPhoneH(),this.yuan_z.scaleX=.2,this.yuan_z.scaleY=.2,this.yuan_z.alpha=.5,this.addChildAt(this.yuan_z,6),this.shu_z=new egret.Bitmap(RES.getRes("s-number-0_png")),this.shu_z.anchorOffsetX=.5*this.shu_z.width,this.shu_z.anchorOffsetY=.5*this.shu_z.height,this.shu_z.x=.3*Tools.getPhoneW(),this.shu_z.y=.9*-Tools.getPhoneH(),this.shu_z.scaleX=.2,this.shu_z.scaleY=.2,this.addChildAt(this.shu_z,7),this.yuan_y=new egret.Bitmap(RES.getRes("yuan_png")),this.yuan_y.anchorOffsetX=.5*this.yuan_y.width,this.yuan_y.anchorOffsetY=.5*this.yuan_y.height,this.yuan_y.x=.7*Tools.getPhoneW(),this.yuan_y.y=.9*-Tools.getPhoneH(),this.yuan_y.scaleX=.2,this.yuan_y.scaleY=.2,this.yuan_y.alpha=.5,this.addChildAt(this.yuan_y,6),this.shu_y=new egret.Bitmap(RES.getRes("s-number-1_png")),this.shu_y.anchorOffsetX=.5*this.shu_y.width,this.shu_y.anchorOffsetY=.5*this.shu_y.height,this.shu_y.x=.7*Tools.getPhoneW(),this.shu_y.y=.9*-Tools.getPhoneH(),this.shu_y.scaleX=.2,this.shu_y.scaleY=.2,this.addChildAt(this.shu_y,7),this.tiao_x=new egret.Bitmap(RES.getRes("yizi_png")),this.tiao_x.anchorOffsetY=.5*this.tiao_x.height,this.tiao_x.x=.33*Tools.getPhoneW(),this.tiao_x.y=.9*-Tools.getPhoneH(),this.tiao_x.scaleX=1.25,this.tiao_x.scaleY=.2,this.tiao_x.alpha=.5,this.addChildAt(this.tiao_x,6),this.tiao_s=new egret.Bitmap(RES.getRes("yizi_png")),this.tiao_s.anchorOffsetY=.5*this.tiao_s.height,this.tiao_s.x=.33*Tools.getPhoneW(),this.tiao_s.y=.9*-Tools.getPhoneH(),this.tiao_s.scaleX=.001,this.tiao_s.scaleY=.2,this.addChildAt(this.tiao_s,7);var t={r:247,g:92,b:47},i=[1,0,0,0,t.r-255,0,1,0,0,t.g-255,0,0,1,0,t.b-255,0,0,0,1,0],o=new egret.ColorMatrixFilter(i);this.tiao_s.filters=[o]},i}(scene.TestScene);t.SceneBase=i,__reflect(i.prototype,"guanka.SceneBase")}(guanka||(guanka={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"yuan_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){this.boxShape=new p2.Circle({radius:.5*this.disp.width*this.sf}),this.addShape(this.boxShape,[0,0],0)},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.YX=i,__reflect(i.prototype,"mokuai.YX")}(mokuai||(mokuai={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"wujiao_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr,this.boxShape2.collisionMask=t.mokuai_cr,this.boxShape2.collisionGroup=t.mokuai_cr,this.boxShape3.collisionMask=t.mokuai_cr,this.boxShape3.collisionGroup=t.mokuai_cr,this.boxShape4.collisionMask=t.mokuai_cr,this.boxShape4.collisionGroup=t.mokuai_cr,this.boxShape5.collisionMask=t.mokuai_cr,this.boxShape5.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){var t=this.disp.width*this.sf,i=this.disp.height*this.sf,o=[[0,.5*i],[.16*-t,.17*i],[.16*t,.17*i]];this.boxShape=new p2.Convex({vertices:o}),o=[[.16*t,.17*i],[.24*t,-(.13*i)],[.47*t,.12*i]],this.boxShape2=new p2.Convex({vertices:o}),o=[[.24*t,.13*-i],[0,.32*-i],[.29*t,.47*-i]],this.boxShape3=new p2.Convex({vertices:o}),o=[[0,-(.33*i)],[.25*-t,-(.13*i)],[.29*-t,-(.47*i)]],this.boxShape4=new p2.Convex({vertices:o}),o=[[.25*-t,-(.13*i)],[.16*-t,.17*i],[.47*-t,.12*i]],this.boxShape5=new p2.Convex({vertices:o}),this.addShape(this.boxShape),this.addShape(this.boxShape2),this.addShape(this.boxShape3),this.addShape(this.boxShape4),this.addShape(this.boxShape5)},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.WJX=i,__reflect(i.prototype,"mokuai.WJX")}(mokuai||(mokuai={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"cha_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr,this.boxShape2.collisionMask=t.mokuai_cr,this.boxShape2.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){this.boxShape2=new p2.Box({width:.3*this.disp.width*this.sf,height:this.disp.height*this.sf*1.15}),this.boxShape=new p2.Box({width:.3*this.disp.width*this.sf,height:this.disp.height*this.sf*1.15}),this.addShape(this.boxShape,[0,0],.25*Math.PI),this.addShape(this.boxShape2,[0,0],.25*-Math.PI)},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.CCX=i,__reflect(i.prototype,"mokuai.CCX")}(mokuai||(mokuai={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"liubian_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){var t=this.getList(this.disp.width*this.sf,this.disp.height*this.sf);this.boxShape=new p2.Convex({vertices:t}),this.addShape(this.boxShape)},o.prototype.getList=function(t,i){var o=[[.25*-t,.5*i],[.5*-t,0],[.25*-t,.5*-i],[.25*t,.5*-i],[.5*t,0],[.25*t,.5*i]];return o},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.LBX=i,__reflect(i.prototype,"mokuai.LBX")}(mokuai||(mokuai={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"ling_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){var t=this.getList(this.disp.width*this.sf,this.disp.height*this.sf);this.boxShape=new p2.Convex({vertices:t}),this.addShape(this.boxShape)},o.prototype.getList=function(t,i){var o=[[0,-(.5*i)],[.5*t,0],[0,.5*i],[.5*-t,0]];return o},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.LX=i,__reflect(i.prototype,"mokuai.LX")}(mokuai||(mokuai={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"shuidi_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr,this.boxShape1.collisionMask=t.mokuai_cr,this.boxShape1.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){var t=this.getList(this.disp.width*this.sf*.85,this.disp.height*this.sf*.47);this.boxShape=new p2.Convex({vertices:t}),this.boxShape1=new p2.Circle({radius:.5*this.disp.width*this.sf}),this.addShape(this.boxShape,[0,0],0),this.addShape(this.boxShape1,[0,.13*-this.disp.height*this.sf],0)},o.prototype.getList=function(t,i){var o=[[0,.5*i+.55*i],[.5*-t,.5*-i+.55*i],[.5*t,.5*-i+.55*i]];return o},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.SDX=i,__reflect(i.prototype,"mokuai.SDX")}(mokuai||(mokuai={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"sanjiao_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){var t=this.getList(this.disp.width*this.sf,this.disp.height*this.sf);this.boxShape=new p2.Convex({vertices:t}),this.addShape(this.boxShape)},o.prototype.getList=function(t,i){var o=[[0,.5*i],[.5*-t,.5*-i],[.5*t,.5*-i]];return o},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.SJX=i,__reflect(i.prototype,"mokuai.SJX")}(mokuai||(mokuai={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"shizi_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr,this.boxShape2.collisionMask=t.mokuai_cr,this.boxShape2.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){this.boxShape2=new p2.Box({width:.24*this.disp.width*this.sf,height:this.disp.height*this.sf}),this.boxShape=new p2.Box({width:this.disp.width*this.sf,height:.24*this.disp.height*this.sf}),this.addShape(this.boxShape,[0,0],0),this.addShape(this.boxShape2,[0,0],0)},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.SZX=i,__reflect(i.prototype,"mokuai.SZX")}(mokuai||(mokuai={}));var Main=function(t){function i(){var i=t.call(this)||this;return i.addEventListener(egret.Event.ADDED_TO_STAGE,i.onAddToStage,i),i}return __extends(i,t),i.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},i.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,i;return __generator(this,function(o){switch(o.label){case 0:return[4,this.loadResource()];case 1:return o.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=o.sent(),this.startAnimation(t),[4,platform.login()];case 3:return o.sent(),[4,platform.getUserInfo()];case 4:return i=o.sent(),console.log(i),[2]}})})},i.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,i;return __generator(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return o.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return o.sent(),this.stage.removeChild(t),[3,4];case 3:return i=o.sent(),console.error(i),[3,4];case 4:return[2]}})})},i.prototype.createGameScene=function(){egret.log("CCCCCCCCCC"),i.game_w=this.stage.stageWidth,i.game_h=this.stage.$stageHeight;var t=new guanka.XG1;t.x=0,t.y=Tools.getPhoneH(),this.addChild(t)},i.prototype.hutu=function(){var t=1,i=2*Math.acos(0),o=t*Math.cos(36*i/180),e=t*Math.sin(36*i/180),s=t*Math.cos(72*i/180),n=t*Math.sin(72*i/180),h=e*Math.tan(72*i/180),a=e/Math.cos(72*i/180),r=a*Math.sin(54*i/180),u=a*Math.cos(54*i/180)+t;egret.log("PI:"+i+" R:"+(h+o)),egret.log(" 1 :0 ** "+(h+o)),egret.log(" 2 :"+e+" ** "+o),egret.log(" 3 :"+(e+a)+" ** "+o),egret.log(" 4 :"+n+" ** "+-s),egret.log(" 5 :"+r+" ** "+-u),egret.log(" 6 :0 ** "+-t),egret.log(" 7 :"+-r+" ** "+-u),egret.log(" 8 :"+-n+" ** "+-s),egret.log(" 9 :"+(-e-a)+" ** "+o),egret.log(" 10 :"+-e+" ** "+o)},i.prototype.createBitmapByName=function(t){var i=new egret.Bitmap,o=RES.getRes(t);return i.texture=o,i},i.prototype.startAnimation=function(t){var i=this,o=new egret.HtmlTextParser,e=t.map(function(t){return o.parse(t)}),s=this.textfield,n=-1,h=function(){n++,n>=e.length&&(n=0);var t=e[n];s.textFlow=t;var o=egret.Tween.get(s);o.to({alpha:1},200),o.wait(2e3),o.to({alpha:0},200),o.call(h,i)};h()},i.game_w=0,i.game_h=0,i}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var LoadingUI=function(t){function i(){var i=t.call(this)||this;return i.createView(),i}return __extends(i,t),i.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},i.prototype.onProgress=function(t,i){this.textField.text="Loading..."+t+"/"+i},i}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"youxiesanjiao_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){var t=this.getList(this.disp.width*this.sf,this.disp.height*this.sf);this.boxShape=new p2.Convex({vertices:t}),this.addShape(this.boxShape)},o.prototype.getList=function(t,i){var o=[[.5*t,.5*i],[.5*-t,.5*-i],[.5*t,.5*-i]];return o},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.YXSJ=i,__reflect(i.prototype,"mokuai.YXSJ")}(mokuai||(mokuai={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"yizi_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){this.boxShape=new p2.Box({width:this.disp.width*this.sf,height:this.disp.height*this.sf}),this.addShape(this.boxShape,[0,0],0)},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.YZX=i,__reflect(i.prototype,"mokuai.YZX")}(mokuai||(mokuai={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"zhengfang_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){this.boxShape=new p2.Box({width:this.disp.width*this.sf,height:this.disp.height*this.sf}),this.addShape(this.boxShape)},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.ZFX=i,__reflect(i.prototype,"mokuai.ZFX")}(mokuai||(mokuai={}));var mokuai;!function(t){var i=function(i){function o(t,o,e,s,n,h){var a=i.call(this,"xiesanjiao_png",t,o,e,s,n,h)||this;return a.initShape(),a.initPost(),a.initColl(),a}return __extends(o,i),o.prototype.initColl=function(){this.boxShape.collisionMask=t.mokuai_cr,this.boxShape.collisionGroup=t.mokuai_cr},o.prototype.initShape=function(){var t=this.getList(this.disp.width*this.sf,this.disp.height*this.sf);this.boxShape=new p2.Convex({vertices:t}),this.addShape(this.boxShape)},o.prototype.getList=function(t,i){var o=[[.5*-t,.5*i],[.5*-t,.5*-i],[.5*t,.5*-i]];return o},o.prototype.initPost=function(){var t=Tools.egretTOp2(this.posX,this.posY);Tools.p2TOegretPoitn(t.x,t.y);this.position[0]=t.x,this.position[1]=t.y},o}(t.XingZhuang);t.ZXSJ=i,__reflect(i.prototype,"mokuai.ZXSJ")}(mokuai||(mokuai={}));var Physics;!function(t){function i(t,i,o){var e,s,n=i.x;e=(n-t.x/2)*o,0>e&&(e+=.5*o),e>0&&(e+=.5*o),0==e&&(e=.5*o),1==t.x&&(e=0),n-t.x/2==-.5&&(e=0);var h=t.y-i.y-1;return s=(h-t.y/2)*o,0>s&&(s+=.5*o),s>0&&(s+=.5*o),0==s&&(s=.5*o),1==t.y&&(s=0),h-t.y/2==-.5&&(s=0),egret.Point.create(e,s)}t.getRelativeDistance=i}(Physics||(Physics={}));var guanka;!function(t){var i=function(t){function i(){var i=t.call(this,{r:226,g:216,b:193})||this;return i.s1={r:253,g:255,b:253},i.s2={r:209,g:11,b:52},i.initInfo(),i}return __extends(i,t),i.prototype.initInfo=function(){for(var t=-Tools.getPhoneH()-100,i=Tools.getPhoneW(),o=0;12>o;o++)for(var e=0;15>e;e++){var s=.205*Tools.getPhoneW()+1*e+26*e,n=t-1*o-26*o,h=new mokuai.ZFX(s,n,.14,.1,1,this.s1);h.peise(this.s1),this.addBuilding(h)}for(var o=0;4>o;o++){var s=.1*Tools.getPhoneW(),a=t-1*o-100*o,r=new mokuai.YX(s,a,.5,.1,1,this.s1);r.peise(this.s1),this.addBuilding(r)}for(var o=0;4>o;o++){var s=.9*Tools.getPhoneW(),u=t-1*o-100*o,p=new mokuai.YX(s,u,.5,.1,1,this.s1);p.peise(this.s1),this.addBuilding(p)}t=-Tools.getPhoneH()-100-400;var l=new mokuai.LX(.2*i,t,.5,.1,1,this.s1);this.addBuilding(l),l=new mokuai.LX(.8*i,t,.5,.1,1,this.s1),this.addBuilding(l),t=-Tools.getPhoneH()-100-450,l=new mokuai.LX(.1*i,t,.5,.1,1,this.s2),this.addBuilding(l),l=new mokuai.LX(.9*i,t,.5,.1,1,this.s2),this.addBuilding(l);var c=new mokuai.YX(.5*i,t,.8,.1,1,this.s2);this.addBuilding(c)},i}(t.SceneBase);t.XG1=i,__reflect(i.prototype,"guanka.XG1")}(guanka||(guanka={}));var suke;!function(t){var i=function(t){function i(i,o,e,s){return t.call(this,e,s,.2,100,1,{r:253,g:255,b:253})||this}return __extends(i,t),i}(mokuai.YX);t.Suke=i,__reflect(i.prototype,"suke.Suke")}(suke||(suke={}));var tools;!function(t){var i=function(){function t(){}return t}();t.NumbTools=i,__reflect(i.prototype,"tools.NumbTools")}(tools||(tools={}));var tools;!function(t){function i(){t.suspended_mark=egret.getTimer()}function o(){t.suspended_number+=egret.getTimer()-t.suspended_mark}function e(){return egret.getTimer()-t.suspended_number}t.suspended_number=0,t.suspended_mark=0,t.suspended=i,t.start=o,t.getTimer=e}(tools||(tools={}));var Tools;!function(t){function i(t,i){return egret.Point.create(t,-i)}function o(t,i){return egret.Point.create(t,-i)}function e(){return Main.game_w}function s(){return Main.game_h}function n(t,i,o){var e=egret.Point.distance(i,t),s=o/e,n=(i.x-t.x)*s,h=(i.y-t.y)*s;return egret.Point.create(n,h)}function h(t,i){var o=i-t,e=Math.random();return t+Math.round(e*o)}function a(t,i){if(i){var o=[1,0,0,0,i.r-255,0,1,0,0,i.g-255,0,0,1,0,i.b-255,0,0,0,1,0],e=new egret.ColorMatrixFilter(o);this.bit.filters=[e]}}t.p2TOegretPoitn=i,t.egretTOp2=o,t.getPhoneW=e,t.getPhoneH=s,t.xiangliang=n,t.GetRandomNum=h;t.peise=a}(Tools||(Tools={}));