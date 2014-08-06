define([
    'jquery',
    'backbone',
    'handlebars',
    'text!views/login.html'
], function( $, Backbone, Handelbars, Template ) {
    'use strict';
    return Backbone.View.extend({
        el: $('#main'),

        template: Handelbars.compile(Template),

        events: {
            'submit .form': 'addShow',
            'keyUp': 'processKey'
        },

        initialize: function() {},

        render: function() {
            $(this.el).html(this.template({}));
            return this;
        },

        addShow: function(event) {
            event.preventDefault();
            console.log('add');
        },

        processKey: function(event) {
            if(event.which === 13) { // enter key
                this.submit();
            }
        }
    });
});