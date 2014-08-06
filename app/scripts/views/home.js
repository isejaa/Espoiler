define([
    'jquery',
    'backbone',
    'handlebars',
    'text!views/home.html'
], function( $, Backbone, Handelbars, Template ) {
    'use strict';
    return Backbone.View.extend({
        el: $('#main'),

        template: Handelbars.compile(Template),

        events: {
            'click .alphabet span' : 'filterByAlphabet',
            'click .genres span' : 'filterByGenre'
        },

        initialize: function() {
            this.listenTo(this.model.shows, 'reset', this.render);
            this.model.shows.fetch({ reset: true });
        },

        render: function() {
            this.model.set({ shows: this.model.shows.toJSON() });
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        },

        filterByAlphabet: function() {
            console.log('a');
        },

        filterByGenre: function() {
            console.log('b');
        }
    });
});