gdjs.newCode = {};
gdjs.newCode.localVariables = [];
gdjs.newCode.GDNewPanelSpriteObjects1= [];
gdjs.newCode.GDNewPanelSpriteObjects2= [];
gdjs.newCode.GDnewObjects1= [];
gdjs.newCode.GDnewObjects2= [];
gdjs.newCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.newCode.GDRedButtonWithStoneFrameObjects2= [];
gdjs.newCode.GDNewSpriteObjects1= [];
gdjs.newCode.GDNewSpriteObjects2= [];
gdjs.newCode.GDNewSprite2Objects1= [];
gdjs.newCode.GDNewSprite2Objects2= [];
gdjs.newCode.GDNewSprite3Objects1= [];
gdjs.newCode.GDNewSprite3Objects2= [];
gdjs.newCode.GDheroObjects1= [];
gdjs.newCode.GDheroObjects2= [];


gdjs.newCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.newCode.GDRedButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.newCode.GDRedButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.newCode.GDRedButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.newCode.GDRedButtonWithStoneFrameObjects1[k] = gdjs.newCode.GDRedButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.newCode.GDRedButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.newCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.newCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.newCode.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.newCode.GDNewSprite3Objects1[k] = gdjs.newCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.newCode.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.newCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.newCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.newCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.newCode.GDNewSpriteObjects1[k] = gdjs.newCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.newCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "openL", false);
}}

}


};

gdjs.newCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.newCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.newCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.newCode.GDnewObjects1.length = 0;
gdjs.newCode.GDnewObjects2.length = 0;
gdjs.newCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.newCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.newCode.GDNewSpriteObjects1.length = 0;
gdjs.newCode.GDNewSpriteObjects2.length = 0;
gdjs.newCode.GDNewSprite2Objects1.length = 0;
gdjs.newCode.GDNewSprite2Objects2.length = 0;
gdjs.newCode.GDNewSprite3Objects1.length = 0;
gdjs.newCode.GDNewSprite3Objects2.length = 0;
gdjs.newCode.GDheroObjects1.length = 0;
gdjs.newCode.GDheroObjects2.length = 0;

gdjs.newCode.eventsList0(runtimeScene);
gdjs.newCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.newCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.newCode.GDnewObjects1.length = 0;
gdjs.newCode.GDnewObjects2.length = 0;
gdjs.newCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.newCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.newCode.GDNewSpriteObjects1.length = 0;
gdjs.newCode.GDNewSpriteObjects2.length = 0;
gdjs.newCode.GDNewSprite2Objects1.length = 0;
gdjs.newCode.GDNewSprite2Objects2.length = 0;
gdjs.newCode.GDNewSprite3Objects1.length = 0;
gdjs.newCode.GDNewSprite3Objects2.length = 0;
gdjs.newCode.GDheroObjects1.length = 0;
gdjs.newCode.GDheroObjects2.length = 0;


return;

}

gdjs['newCode'] = gdjs.newCode;
