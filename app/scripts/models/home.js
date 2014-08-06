define([
    'backbone',
    'scripts/collections/shows'
], function(Backbone, Shows) {
    'use strict';
    return Backbone.Model.extend({
        defaults: {
            alphabet: ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
            'X','Y', 'Z'],

            genres: ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
              'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
              'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
              'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
              'Travel'],

            headingTitle: 'Top 12 Shows'
        },

        constructor: function() {
            this.shows = new Shows();
            Backbone.Model.apply(this, arguments);
        }
    });
});