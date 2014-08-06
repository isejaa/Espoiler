define([
    'backbone',
    'scripts/views/home',
    'scripts/models/home'
], function(Backbone, Home, HomeModel) {
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
            console.log('login');
        },

        signup: function() {
            console.log('signup');
        },

        add: function(){
            console.log('add');
        }
    });
});