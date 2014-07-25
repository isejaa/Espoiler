angular.module('Espoiler').
  filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
});