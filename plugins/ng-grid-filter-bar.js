'use strict';

var filterBarPlugin = {
  init: function(scope, grid) {
    filterBarPlugin.scope = scope;
    filterBarPlugin.grid = grid;
    scope.$watch(function() {
      var searchQuery = '';
      angular.forEach(filterBarPlugin.scope.columns, function(col) {
        if (col.visible && col.filterText) {
          var filterText = col.filterText.replace('*', '');
          searchQuery += col.displayName + ': ' + filterText + ': ';
        }
      });
      return searchQuery;
    }, function(searchQuery) {
      filterBarPlugin.scope.$parent.filterText = searchQuery;
      filterBarPlugin.grid.searchProvider.evalFilter();
    });
  },
  scope: undefined,
  grid: undefined,
};
