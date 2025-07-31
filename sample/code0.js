gdjs.openLCode = {};
gdjs.openLCode.localVariables = [];
gdjs.openLCode.GDstandObjects1= [];
gdjs.openLCode.GDstandObjects2= [];
gdjs.openLCode.GDstandObjects3= [];
gdjs.openLCode.GDBackgroundObjects1= [];
gdjs.openLCode.GDBackgroundObjects2= [];
gdjs.openLCode.GDBackgroundObjects3= [];
gdjs.openLCode.GDRightKeyObjects1= [];
gdjs.openLCode.GDRightKeyObjects2= [];
gdjs.openLCode.GDRightKeyObjects3= [];
gdjs.openLCode.GDLeftKeyObjects1= [];
gdjs.openLCode.GDLeftKeyObjects2= [];
gdjs.openLCode.GDLeftKeyObjects3= [];
gdjs.openLCode.GDJumpKeyObjects1= [];
gdjs.openLCode.GDJumpKeyObjects2= [];
gdjs.openLCode.GDJumpKeyObjects3= [];
gdjs.openLCode.GDenemyObjects1= [];
gdjs.openLCode.GDenemyObjects2= [];
gdjs.openLCode.GDenemyObjects3= [];
gdjs.openLCode.GDScoreObjects1= [];
gdjs.openLCode.GDScoreObjects2= [];
gdjs.openLCode.GDScoreObjects3= [];
gdjs.openLCode.GDKeyObjects1= [];
gdjs.openLCode.GDKeyObjects2= [];
gdjs.openLCode.GDKeyObjects3= [];
gdjs.openLCode.GDNewTiledSpriteObjects1= [];
gdjs.openLCode.GDNewTiledSpriteObjects2= [];
gdjs.openLCode.GDNewTiledSpriteObjects3= [];
gdjs.openLCode.GDNewTiledSprite2Objects1= [];
gdjs.openLCode.GDNewTiledSprite2Objects2= [];
gdjs.openLCode.GDNewTiledSprite2Objects3= [];
gdjs.openLCode.GDNewTiledSprite3Objects1= [];
gdjs.openLCode.GDNewTiledSprite3Objects2= [];
gdjs.openLCode.GDNewTiledSprite3Objects3= [];
gdjs.openLCode.GDDoorObjects1= [];
gdjs.openLCode.GDDoorObjects2= [];
gdjs.openLCode.GDDoorObjects3= [];
gdjs.openLCode.GDNewTiledSprite4Objects1= [];
gdjs.openLCode.GDNewTiledSprite4Objects2= [];
gdjs.openLCode.GDNewTiledSprite4Objects3= [];
gdjs.openLCode.GDPlatformObjects1= [];
gdjs.openLCode.GDPlatformObjects2= [];
gdjs.openLCode.GDPlatformObjects3= [];
gdjs.openLCode.GDSleeping_9595CowboyObjects1= [];
gdjs.openLCode.GDSleeping_9595CowboyObjects2= [];
gdjs.openLCode.GDSleeping_9595CowboyObjects3= [];
gdjs.openLCode.GDRed_9595laser_959508Objects1= [];
gdjs.openLCode.GDRed_9595laser_959508Objects2= [];
gdjs.openLCode.GDRed_9595laser_959508Objects3= [];
gdjs.openLCode.GDPlantObjects1= [];
gdjs.openLCode.GDPlantObjects2= [];
gdjs.openLCode.GDPlantObjects3= [];
gdjs.openLCode.GDrestartObjects1= [];
gdjs.openLCode.GDrestartObjects2= [];
gdjs.openLCode.GDrestartObjects3= [];
gdjs.openLCode.GDpauseObjects1= [];
gdjs.openLCode.GDpauseObjects2= [];
gdjs.openLCode.GDpauseObjects3= [];
gdjs.openLCode.GDplayObjects1= [];
gdjs.openLCode.GDplayObjects2= [];
gdjs.openLCode.GDplayObjects3= [];
gdjs.openLCode.GDExitscreenObjects1= [];
gdjs.openLCode.GDExitscreenObjects2= [];
gdjs.openLCode.GDExitscreenObjects3= [];
gdjs.openLCode.GDfullscreenObjects1= [];
gdjs.openLCode.GDfullscreenObjects2= [];
gdjs.openLCode.GDfullscreenObjects3= [];
gdjs.openLCode.GDheroObjects1= [];
gdjs.openLCode.GDheroObjects2= [];
gdjs.openLCode.GDheroObjects3= [];


gdjs.openLCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
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


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.openLCode.GDheroObjects2.length !== 0 ? gdjs.openLCode.GDheroObjects2[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fullscreen"), gdjs.openLCode.GDfullscreenObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.openLCode.GDfullscreenObjects2.length;i<l;++i) {
    if ( gdjs.openLCode.GDfullscreenObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.openLCode.GDfullscreenObjects2[k] = gdjs.openLCode.GDfullscreenObjects2[i];
        ++k;
    }
}
gdjs.openLCode.GDfullscreenObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exitscreen"), gdjs.openLCode.GDExitscreenObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.openLCode.GDExitscreenObjects2.length;i<l;++i) {
    if ( gdjs.openLCode.GDExitscreenObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.openLCode.GDExitscreenObjects2[k] = gdjs.openLCode.GDExitscreenObjects2[i];
        ++k;
    }
}
gdjs.openLCode.GDExitscreenObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.openLCode.GDheroObjects2.length === 0 ) ? 0 :gdjs.openLCode.GDheroObjects2[0].getPointX("")), 0.5), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.openLCode.GDheroObjects2.length === 0 ) ? 0 :gdjs.openLCode.GDheroObjects2[0].getPointY("")), 0.5), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.openLCode.GDrestartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.openLCode.GDrestartObjects2.length;i<l;++i) {
    if ( gdjs.openLCode.GDrestartObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.openLCode.GDrestartObjects2[k] = gdjs.openLCode.GDrestartObjects2[i];
        ++k;
    }
}
gdjs.openLCode.GDrestartObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15817716);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "openL", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.openLCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.openLCode.GDheroObjects1, gdjs.openLCode.GDheroObjects2);

{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.openLCode.GDheroObjects1, gdjs.openLCode.GDheroObjects2);

{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15821644);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.openLCode.GDheroObjects1 */
{for(var i = 0, len = gdjs.openLCode.GDheroObjects1.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


};gdjs.openLCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.openLCode.GDheroObjects2.length;i<l;++i) {
    if ( !(gdjs.openLCode.GDheroObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.openLCode.GDheroObjects2[k] = gdjs.openLCode.GDheroObjects2[i];
        ++k;
    }
}
gdjs.openLCode.GDheroObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.openLCode.GDheroObjects2 */
{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.openLCode.GDheroObjects1.length;i<l;++i) {
    if ( gdjs.openLCode.GDheroObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.openLCode.GDheroObjects1[k] = gdjs.openLCode.GDheroObjects1[i];
        ++k;
    }
}
gdjs.openLCode.GDheroObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.openLCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.openLCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RightKey"), gdjs.openLCode.GDRightKeyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.openLCode.GDRightKeyObjects2.length;i<l;++i) {
    if ( gdjs.openLCode.GDRightKeyObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.openLCode.GDRightKeyObjects2[k] = gdjs.openLCode.GDRightKeyObjects2[i];
        ++k;
    }
}
gdjs.openLCode.GDRightKeyObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);
{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftKey"), gdjs.openLCode.GDLeftKeyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.openLCode.GDLeftKeyObjects2.length;i<l;++i) {
    if ( gdjs.openLCode.GDLeftKeyObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.openLCode.GDLeftKeyObjects2[k] = gdjs.openLCode.GDLeftKeyObjects2[i];
        ++k;
    }
}
gdjs.openLCode.GDLeftKeyObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);
{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpKey"), gdjs.openLCode.GDJumpKeyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.openLCode.GDJumpKeyObjects2.length;i<l;++i) {
    if ( gdjs.openLCode.GDJumpKeyObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.openLCode.GDJumpKeyObjects2[k] = gdjs.openLCode.GDJumpKeyObjects2[i];
        ++k;
    }
}
gdjs.openLCode.GDJumpKeyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15825924);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);
{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.openLCode.GDheroObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects2Objects = Hashtable.newFrom({"hero": gdjs.openLCode.GDheroObjects2});
gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDKeyObjects2Objects = Hashtable.newFrom({"Key": gdjs.openLCode.GDKeyObjects2});
gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects2Objects = Hashtable.newFrom({"hero": gdjs.openLCode.GDheroObjects2});
gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.openLCode.GDenemyObjects2});
gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.openLCode.GDenemyObjects2});
gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects2Objects = Hashtable.newFrom({"hero": gdjs.openLCode.GDheroObjects2});
gdjs.openLCode.asyncCallback15830956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.openLCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("hero"), gdjs.openLCode.GDheroObjects3);

{for(var i = 0, len = gdjs.openLCode.GDheroObjects3.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects3[i].setPosition(47,372);
}
}gdjs.openLCode.localVariables.length = 0;
}
gdjs.openLCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.openLCode.localVariables);
for (const obj of gdjs.openLCode.GDheroObjects2) asyncObjectsList.addObject("hero", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.openLCode.asyncCallback15830956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDSleeping_95959595CowboyObjects2Objects = Hashtable.newFrom({"Sleeping_Cowboy": gdjs.openLCode.GDSleeping_9595CowboyObjects2});
gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects2Objects = Hashtable.newFrom({"hero": gdjs.openLCode.GDheroObjects2});
gdjs.openLCode.asyncCallback15831700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.openLCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("hero"), gdjs.openLCode.GDheroObjects3);

{for(var i = 0, len = gdjs.openLCode.GDheroObjects3.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects3[i].setPosition(47,372);
}
}gdjs.openLCode.localVariables.length = 0;
}
gdjs.openLCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.openLCode.localVariables);
for (const obj of gdjs.openLCode.GDheroObjects2) asyncObjectsList.addObject("hero", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.openLCode.asyncCallback15831700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDPlantObjects2Objects = Hashtable.newFrom({"Plant": gdjs.openLCode.GDPlantObjects2});
gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects2Objects = Hashtable.newFrom({"hero": gdjs.openLCode.GDheroObjects2});
gdjs.openLCode.asyncCallback15832780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.openLCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("hero"), gdjs.openLCode.GDheroObjects3);

{for(var i = 0, len = gdjs.openLCode.GDheroObjects3.length ;i < len;++i) {
    gdjs.openLCode.GDheroObjects3[i].setPosition(47,372);
}
}gdjs.openLCode.localVariables.length = 0;
}
gdjs.openLCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.openLCode.localVariables);
for (const obj of gdjs.openLCode.GDheroObjects2) asyncObjectsList.addObject("hero", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.openLCode.asyncCallback15832780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.openLCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.openLCode.GDenemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.openLCode.GDenemyObjects2.length;i<l;++i) {
    if ( gdjs.openLCode.GDenemyObjects2[i].getBehavior("Animation").getAnimationName() == "run" ) {
        isConditionTrue_0 = true;
        gdjs.openLCode.GDenemyObjects2[k] = gdjs.openLCode.GDenemyObjects2[i];
        ++k;
    }
}
gdjs.openLCode.GDenemyObjects2.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.openLCode.GDKeyObjects2);
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects2Objects, gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDKeyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.openLCode.GDKeyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.openLCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.openLCode.GDKeyObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDKeyObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.openLCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDScoreObjects2[i].getBehavior("Text").setText("key :" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.openLCode.GDenemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.openLCode.GDheroObjects2.length;i<l;++i) {
    if ( gdjs.openLCode.GDheroObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.openLCode.GDheroObjects2[k] = gdjs.openLCode.GDheroObjects2[i];
        ++k;
    }
}
gdjs.openLCode.GDheroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects2Objects, gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDenemyObjects2Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.openLCode.GDenemyObjects2 */
{for(var i = 0, len = gdjs.openLCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDenemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.openLCode.GDenemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDenemyObjects2Objects, gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.openLCode.GDenemyObjects2 */
{for(var i = 0, len = gdjs.openLCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDenemyObjects2[i].getBehavior("Animation").setAnimationName("hit");
}
}
{ //Subevents
gdjs.openLCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sleeping_Cowboy"), gdjs.openLCode.GDSleeping_9595CowboyObjects2);
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDSleeping_95959595CowboyObjects2Objects, gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.openLCode.GDenemyObjects2);
{for(var i = 0, len = gdjs.openLCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDenemyObjects2[i].getBehavior("Animation").setAnimationName("hit");
}
}
{ //Subevents
gdjs.openLCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.openLCode.GDPlantObjects2);
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDPlantObjects2Objects, gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.openLCode.GDenemyObjects2);
{for(var i = 0, len = gdjs.openLCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDenemyObjects2[i].getBehavior("Animation").setAnimationName("hit");
}
}
{ //Subevents
gdjs.openLCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects1Objects = Hashtable.newFrom({"hero": gdjs.openLCode.GDheroObjects1});
gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.openLCode.GDDoorObjects1});
gdjs.openLCode.asyncCallback15834668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.openLCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "new", false);
}gdjs.openLCode.localVariables.length = 0;
}
gdjs.openLCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.openLCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.openLCode.asyncCallback15834668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.openLCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.openLCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects1Objects, gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.openLCode.GDDoorObjects1 */
{for(var i = 0, len = gdjs.openLCode.GDDoorObjects1.length ;i < len;++i) {
    gdjs.openLCode.GDDoorObjects1[i].getBehavior("Animation").setAnimationName("Opening");
}
}
{ //Subevents
gdjs.openLCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects1Objects = Hashtable.newFrom({"hero": gdjs.openLCode.GDheroObjects1});
gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.openLCode.GDPlatformObjects1});
gdjs.openLCode.asyncCallback15835052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.openLCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Platform"), gdjs.openLCode.GDPlatformObjects2);

{for(var i = 0, len = gdjs.openLCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.openLCode.GDPlatformObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.openLCode.localVariables.length = 0;
}
gdjs.openLCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.openLCode.localVariables);
for (const obj of gdjs.openLCode.GDPlatformObjects1) asyncObjectsList.addObject("Platform", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.openLCode.asyncCallback15835052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.openLCode.eventsList11 = function(runtimeScene) {

{


gdjs.openLCode.eventsList0(runtimeScene);
}


{


gdjs.openLCode.eventsList2(runtimeScene);
}


{


gdjs.openLCode.eventsList3(runtimeScene);
}


{


gdjs.openLCode.eventsList7(runtimeScene);
}


{


gdjs.openLCode.eventsList9(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.openLCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("hero"), gdjs.openLCode.GDheroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDheroObjects1Objects, gdjs.openLCode.mapOfGDgdjs_9546openLCode_9546GDPlatformObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.openLCode.eventsList10(runtimeScene);} //End of subevents
}

}


};

gdjs.openLCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.openLCode.GDstandObjects1.length = 0;
gdjs.openLCode.GDstandObjects2.length = 0;
gdjs.openLCode.GDstandObjects3.length = 0;
gdjs.openLCode.GDBackgroundObjects1.length = 0;
gdjs.openLCode.GDBackgroundObjects2.length = 0;
gdjs.openLCode.GDBackgroundObjects3.length = 0;
gdjs.openLCode.GDRightKeyObjects1.length = 0;
gdjs.openLCode.GDRightKeyObjects2.length = 0;
gdjs.openLCode.GDRightKeyObjects3.length = 0;
gdjs.openLCode.GDLeftKeyObjects1.length = 0;
gdjs.openLCode.GDLeftKeyObjects2.length = 0;
gdjs.openLCode.GDLeftKeyObjects3.length = 0;
gdjs.openLCode.GDJumpKeyObjects1.length = 0;
gdjs.openLCode.GDJumpKeyObjects2.length = 0;
gdjs.openLCode.GDJumpKeyObjects3.length = 0;
gdjs.openLCode.GDenemyObjects1.length = 0;
gdjs.openLCode.GDenemyObjects2.length = 0;
gdjs.openLCode.GDenemyObjects3.length = 0;
gdjs.openLCode.GDScoreObjects1.length = 0;
gdjs.openLCode.GDScoreObjects2.length = 0;
gdjs.openLCode.GDScoreObjects3.length = 0;
gdjs.openLCode.GDKeyObjects1.length = 0;
gdjs.openLCode.GDKeyObjects2.length = 0;
gdjs.openLCode.GDKeyObjects3.length = 0;
gdjs.openLCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.openLCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.openLCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.openLCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.openLCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.openLCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.openLCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.openLCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.openLCode.GDNewTiledSprite3Objects3.length = 0;
gdjs.openLCode.GDDoorObjects1.length = 0;
gdjs.openLCode.GDDoorObjects2.length = 0;
gdjs.openLCode.GDDoorObjects3.length = 0;
gdjs.openLCode.GDNewTiledSprite4Objects1.length = 0;
gdjs.openLCode.GDNewTiledSprite4Objects2.length = 0;
gdjs.openLCode.GDNewTiledSprite4Objects3.length = 0;
gdjs.openLCode.GDPlatformObjects1.length = 0;
gdjs.openLCode.GDPlatformObjects2.length = 0;
gdjs.openLCode.GDPlatformObjects3.length = 0;
gdjs.openLCode.GDSleeping_9595CowboyObjects1.length = 0;
gdjs.openLCode.GDSleeping_9595CowboyObjects2.length = 0;
gdjs.openLCode.GDSleeping_9595CowboyObjects3.length = 0;
gdjs.openLCode.GDRed_9595laser_959508Objects1.length = 0;
gdjs.openLCode.GDRed_9595laser_959508Objects2.length = 0;
gdjs.openLCode.GDRed_9595laser_959508Objects3.length = 0;
gdjs.openLCode.GDPlantObjects1.length = 0;
gdjs.openLCode.GDPlantObjects2.length = 0;
gdjs.openLCode.GDPlantObjects3.length = 0;
gdjs.openLCode.GDrestartObjects1.length = 0;
gdjs.openLCode.GDrestartObjects2.length = 0;
gdjs.openLCode.GDrestartObjects3.length = 0;
gdjs.openLCode.GDpauseObjects1.length = 0;
gdjs.openLCode.GDpauseObjects2.length = 0;
gdjs.openLCode.GDpauseObjects3.length = 0;
gdjs.openLCode.GDplayObjects1.length = 0;
gdjs.openLCode.GDplayObjects2.length = 0;
gdjs.openLCode.GDplayObjects3.length = 0;
gdjs.openLCode.GDExitscreenObjects1.length = 0;
gdjs.openLCode.GDExitscreenObjects2.length = 0;
gdjs.openLCode.GDExitscreenObjects3.length = 0;
gdjs.openLCode.GDfullscreenObjects1.length = 0;
gdjs.openLCode.GDfullscreenObjects2.length = 0;
gdjs.openLCode.GDfullscreenObjects3.length = 0;
gdjs.openLCode.GDheroObjects1.length = 0;
gdjs.openLCode.GDheroObjects2.length = 0;
gdjs.openLCode.GDheroObjects3.length = 0;

gdjs.openLCode.eventsList11(runtimeScene);
gdjs.openLCode.GDstandObjects1.length = 0;
gdjs.openLCode.GDstandObjects2.length = 0;
gdjs.openLCode.GDstandObjects3.length = 0;
gdjs.openLCode.GDBackgroundObjects1.length = 0;
gdjs.openLCode.GDBackgroundObjects2.length = 0;
gdjs.openLCode.GDBackgroundObjects3.length = 0;
gdjs.openLCode.GDRightKeyObjects1.length = 0;
gdjs.openLCode.GDRightKeyObjects2.length = 0;
gdjs.openLCode.GDRightKeyObjects3.length = 0;
gdjs.openLCode.GDLeftKeyObjects1.length = 0;
gdjs.openLCode.GDLeftKeyObjects2.length = 0;
gdjs.openLCode.GDLeftKeyObjects3.length = 0;
gdjs.openLCode.GDJumpKeyObjects1.length = 0;
gdjs.openLCode.GDJumpKeyObjects2.length = 0;
gdjs.openLCode.GDJumpKeyObjects3.length = 0;
gdjs.openLCode.GDenemyObjects1.length = 0;
gdjs.openLCode.GDenemyObjects2.length = 0;
gdjs.openLCode.GDenemyObjects3.length = 0;
gdjs.openLCode.GDScoreObjects1.length = 0;
gdjs.openLCode.GDScoreObjects2.length = 0;
gdjs.openLCode.GDScoreObjects3.length = 0;
gdjs.openLCode.GDKeyObjects1.length = 0;
gdjs.openLCode.GDKeyObjects2.length = 0;
gdjs.openLCode.GDKeyObjects3.length = 0;
gdjs.openLCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.openLCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.openLCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.openLCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.openLCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.openLCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.openLCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.openLCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.openLCode.GDNewTiledSprite3Objects3.length = 0;
gdjs.openLCode.GDDoorObjects1.length = 0;
gdjs.openLCode.GDDoorObjects2.length = 0;
gdjs.openLCode.GDDoorObjects3.length = 0;
gdjs.openLCode.GDNewTiledSprite4Objects1.length = 0;
gdjs.openLCode.GDNewTiledSprite4Objects2.length = 0;
gdjs.openLCode.GDNewTiledSprite4Objects3.length = 0;
gdjs.openLCode.GDPlatformObjects1.length = 0;
gdjs.openLCode.GDPlatformObjects2.length = 0;
gdjs.openLCode.GDPlatformObjects3.length = 0;
gdjs.openLCode.GDSleeping_9595CowboyObjects1.length = 0;
gdjs.openLCode.GDSleeping_9595CowboyObjects2.length = 0;
gdjs.openLCode.GDSleeping_9595CowboyObjects3.length = 0;
gdjs.openLCode.GDRed_9595laser_959508Objects1.length = 0;
gdjs.openLCode.GDRed_9595laser_959508Objects2.length = 0;
gdjs.openLCode.GDRed_9595laser_959508Objects3.length = 0;
gdjs.openLCode.GDPlantObjects1.length = 0;
gdjs.openLCode.GDPlantObjects2.length = 0;
gdjs.openLCode.GDPlantObjects3.length = 0;
gdjs.openLCode.GDrestartObjects1.length = 0;
gdjs.openLCode.GDrestartObjects2.length = 0;
gdjs.openLCode.GDrestartObjects3.length = 0;
gdjs.openLCode.GDpauseObjects1.length = 0;
gdjs.openLCode.GDpauseObjects2.length = 0;
gdjs.openLCode.GDpauseObjects3.length = 0;
gdjs.openLCode.GDplayObjects1.length = 0;
gdjs.openLCode.GDplayObjects2.length = 0;
gdjs.openLCode.GDplayObjects3.length = 0;
gdjs.openLCode.GDExitscreenObjects1.length = 0;
gdjs.openLCode.GDExitscreenObjects2.length = 0;
gdjs.openLCode.GDExitscreenObjects3.length = 0;
gdjs.openLCode.GDfullscreenObjects1.length = 0;
gdjs.openLCode.GDfullscreenObjects2.length = 0;
gdjs.openLCode.GDfullscreenObjects3.length = 0;
gdjs.openLCode.GDheroObjects1.length = 0;
gdjs.openLCode.GDheroObjects2.length = 0;
gdjs.openLCode.GDheroObjects3.length = 0;


return;

}

gdjs['openLCode'] = gdjs.openLCode;
