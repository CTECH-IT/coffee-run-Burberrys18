(function(window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided!')
        }

        this.$formElement = $(selector);
        if (this.$formElement.length == 0) {
            throw new Error('Could not find the element with selector: ' + selector);
        }

    }

    App.FormHandler = FormHandler;
    window.App = App;

})(window);