
gdjs.evtsExt__ButtonStates__ButtonFSM = gdjs.evtsExt__ButtonStates__ButtonFSM || {};

/**
 * Behavior generated from Button states
 */
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM = class ButtonFSM extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ShouldCheckHovering = true;
    this._behaviorData.State = "Idle";
    this._behaviorData.TouchId = Number("0") || 0;
    this._behaviorData.TouchIsInside = false;
    this._behaviorData.MouseIsInside = false;
    this._behaviorData.Index = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ShouldCheckHovering !== newBehaviorData.ShouldCheckHovering)
      this._behaviorData.ShouldCheckHovering = newBehaviorData.ShouldCheckHovering;
    if (oldBehaviorData.State !== newBehaviorData.State)
      this._behaviorData.State = newBehaviorData.State;
    if (oldBehaviorData.TouchId !== newBehaviorData.TouchId)
      this._behaviorData.TouchId = newBehaviorData.TouchId;
    if (oldBehaviorData.TouchIsInside !== newBehaviorData.TouchIsInside)
      this._behaviorData.TouchIsInside = newBehaviorData.TouchIsInside;
    if (oldBehaviorData.MouseIsInside !== newBehaviorData.MouseIsInside)
      this._behaviorData.MouseIsInside = newBehaviorData.MouseIsInside;
    if (oldBehaviorData.Index !== newBehaviorData.Index)
      this._behaviorData.Index = newBehaviorData.Index;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    ShouldCheckHovering: this._behaviorData.ShouldCheckHovering,
    State: this._behaviorData.State,
    TouchId: this._behaviorData.TouchId,
    TouchIsInside: this._behaviorData.TouchIsInside,
    MouseIsInside: this._behaviorData.MouseIsInside,
    Index: this._behaviorData.Index,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.ShouldCheckHovering !== undefined)
      this._behaviorData.ShouldCheckHovering = networkSyncData.props.ShouldCheckHovering;
    if (networkSyncData.props.State !== undefined)
      this._behaviorData.State = networkSyncData.props.State;
    if (networkSyncData.props.TouchId !== undefined)
      this._behaviorData.TouchId = networkSyncData.props.TouchId;
    if (networkSyncData.props.TouchIsInside !== undefined)
      this._behaviorData.TouchIsInside = networkSyncData.props.TouchIsInside;
    if (networkSyncData.props.MouseIsInside !== undefined)
      this._behaviorData.MouseIsInside = networkSyncData.props.MouseIsInside;
    if (networkSyncData.props.Index !== undefined)
      this._behaviorData.Index = networkSyncData.props.Index;
  }

  // Properties:
  
  _getShouldCheckHovering() {
    return this._behaviorData.ShouldCheckHovering !== undefined ? this._behaviorData.ShouldCheckHovering : true;
  }
  _setShouldCheckHovering(newValue) {
    this._behaviorData.ShouldCheckHovering = newValue;
  }
  _toggleShouldCheckHovering() {
    this._setShouldCheckHovering(!this._getShouldCheckHovering());
  }
  _getState() {
    return this._behaviorData.State !== undefined ? this._behaviorData.State : "Idle";
  }
  _setState(newValue) {
    this._behaviorData.State = newValue;
  }
  _getTouchId() {
    return this._behaviorData.TouchId !== undefined ? this._behaviorData.TouchId : Number("0") || 0;
  }
  _setTouchId(newValue) {
    this._behaviorData.TouchId = newValue;
  }
  _getTouchIsInside() {
    return this._behaviorData.TouchIsInside !== undefined ? this._behaviorData.TouchIsInside : false;
  }
  _setTouchIsInside(newValue) {
    this._behaviorData.TouchIsInside = newValue;
  }
  _toggleTouchIsInside() {
    this._setTouchIsInside(!this._getTouchIsInside());
  }
  _getMouseIsInside() {
    return this._behaviorData.MouseIsInside !== undefined ? this._behaviorData.MouseIsInside : false;
  }
  _setMouseIsInside(newValue) {
    this._behaviorData.MouseIsInside = newValue;
  }
  _toggleMouseIsInside() {
    this._setMouseIsInside(!this._getMouseIsInside());
  }
  _getIndex() {
    return this._behaviorData.Index !== undefined ? this._behaviorData.Index : Number("") || 0;
  }
  _setIndex(newValue) {
    this._behaviorData.Index = newValue;
  }
}

/**
 * Shared data generated from Button states
 */
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.SharedData = class ButtonFSMSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ButtonStates_ButtonFSMSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ButtonStates_ButtonFSMSharedData = new gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.SharedData(
      initialData
    );
  }
  return instanceContainer._ButtonStates_ButtonFSMSharedData;
}

// Methods:
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects5= [];


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMouseIsInside(false)
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldCheckHovering();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3[i].isCollidingWithPoint(gdjs.evtTools.input.getMouseOnlyCursorX(runtimeScene, (gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3[i].getLayer()), 0), gdjs.evtTools.input.getMouseOnlyCursorY(runtimeScene, (gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3[i].getLayer()), 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMouseIsInside(true)
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIsInside(false)
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2[i].isCollidingWithPoint(gdjs.evtTools.input.getTouchX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId(), (gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2[i].getLayer()), 0), gdjs.evtTools.input.getTouchY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId(), (gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2[i].getLayer()), 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIsInside(true)
}}

}


};gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Hovered");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Idle");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("PressedInside")
}}

}


};gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4[i].isCollidingWithPoint(gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex()), (gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4[i].getLayer()), 0), gdjs.evtTools.input.getTouchY(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex()), (gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4[i].getLayer()), 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex()))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIsInside(true)
}
{ //Subevents
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex()+1)
}}

}


};gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount3 = gdjs.evtTools.input.getStartedTouchOrMouseCount(runtimeScene);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(0)
}
{ //Subevents
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseIsInside();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Hovered");
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle")
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseIsInside();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Idle");
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Hovered")
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIsInside();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedInside");
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("PressedOutside")
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIsInside();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedOutside");
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("PressedInside")
}}

}


};gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedInside");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Validated")
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedInside");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Validated");
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle")
}}

}


};gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId());
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(0)
}
{ //Subevents
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Validated");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle")
}}

}


{


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext = {};
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ResetState((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.ResetStateContext = {};
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.ResetStateContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.ResetStateContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.ResetStateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(0)
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.ResetState = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.ResetStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.ResetStateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.ResetStateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.ResetStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.ResetStateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsIdleContext = {};
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsIdleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Idle");
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsIdle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsIdleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsClickedContext = {};
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Validated");
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsHoveredContext = {};
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Hovered");
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsHovered = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsFocusedContext = {};
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Hovered");
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedOutside");
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsFocused = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedContext = {};
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedInside");
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedOutsideContext = {};
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedOutsideContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedOutsideContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedOutsideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedOutside");
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedOutside = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedOutsideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedOutsideContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedOutsideContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedOutsideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.IsPressedOutsideContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.TouchIdContext = {};
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.TouchIdContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.TouchIdContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.TouchIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId(); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.TouchId = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.TouchIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.TouchIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.TouchIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.TouchIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM.prototype.TouchIdContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("ButtonStates::ButtonFSM", gdjs.evtsExt__ButtonStates__ButtonFSM.ButtonFSM);
