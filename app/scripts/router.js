define([
    'backbone',
    'scripts/views/home',
    'scripts/views/add',
    'scripts/views/signup',
    'scripts/views/login',
    'scripts/models/home',
], function(Backbone, Home, Add, SignUp, Login, HomeModel) {
    'use strict';
    return Backbone.Router.extend({
        routes: {
            '': 'home',
            'shows/:id': 'detail',
            'login': 'login',
            'signup': 'signup',
            'add': 'add'
        },

        home: function(){
            new Home({ model: new HomeModel() });
        },

        detail: function() {
            console.log('detail');
        },

        login: function() {
            (new Login()).render();
        },

        signup: function() {
            (new SignUp()).render();
        },

        add: function(){
            (new Add()).render();
        }
    });
});