function IndexCtrl($scope, $http) {
  $http.get('/api/readRankingAllCategory/').
    success(function(data) {
      $scope.rankAllCategoryPosts = data.rankAllCategoryPosts;
    });
}

function ShowDetailCtrl($scope, $http, $routeParams) {
  var getData = function(){
      $http.get('/api/readAll/' + $routeParams.name).
        success(function(data) {
            $scope.posts = data.posts;
            $scope.postWidth = data.postWidth;
        });
      $http.get('/api/readRanking/' + $routeParams.name).
        success(function(data) {
          $scope.rankPosts = data.rankPosts;
          $scope.rankWidth = data.rankWidth;
        });
    };
    
  getData();

  var timer = setInterval(function(){
      getData()
  }, 1000 * 5);

}

function ReadPostCtrl($scope, $http, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });
}
