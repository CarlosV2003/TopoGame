({
    handleButtonClick: function(component, event, helper) {
        var buttonNumber = event.target.getAttribute('data-name');
        var buttonClicks = component.get("v.buttonClicks");

        if (buttonClicks[buttonNumber]) {
            buttonClicks[buttonNumber]++;
        } else {
            buttonClicks[buttonNumber] = 1;
        }

        component.set("v.buttonClicks", buttonClicks);

        // Fire the button click event
        var buttonClickEvent = $A.get("e.c:ButtonClick");
        buttonClickEvent.setParams({ "buttonNumber": buttonNumber });
        buttonClickEvent.fire();
    },
})