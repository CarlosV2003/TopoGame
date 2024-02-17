({
    handleButtonClickEvent: function(component, event, helper) {
        var isRecording = component.get("v.isRecording");
    
        if (isRecording) {
            var buttonName = event.getParam("buttonNumber");
            var buttonSequence = component.get("v.buttonSequence");
    
            buttonSequence += buttonName + ",";
    
            component.set("v.buttonSequence", buttonSequence);
        }
    },

    handleRecordClick: function(component, event, helper) {
        component.set("v.isRecording", true);
        component.set("v.buttonSequence", "");
    },

    handleStopClick: function(component, event, helper) {
        component.set("v.isRecording", false);

        var buttonSequence = component.get("v.buttonSequence").split(",");
        var allSequences = component.get("v.allSequences").slice(); // Create a new array

        allSequences.push(buttonSequence);

        component.set("v.allSequences", allSequences);
    },
})