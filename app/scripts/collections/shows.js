define([
    'backbone',
    'scripts/models/show'
], function(Backbone, Show) {
    'use strict';
    return Backbone.Collection.extend({
        model: Show,
        url: '/api/shows'
    });
});