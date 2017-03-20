angular.module('stackets.searchResults', [])
  .controller('RecentResultsController', function ($scope, Snippets) {
    $scope.recentResultsTitle = 'Recent Snippets';
    $scope.data = {};
    Snippets.getAllSnippets().then(function (snippets) {
      $scope.data.snippets = snippets;
    });
  });