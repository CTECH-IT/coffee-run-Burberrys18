(function (window) {
    'use strict;'

    let App = window.App || {};

    function DataStore() {
        console.log('Running the DataStore function...')
        this.data = {};
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);
