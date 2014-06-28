function IndexCtrl($scope, $http) {
  $http.get('/api/readRankingAllCategory/').
    success(function(data) {
      $scope.rankAllCategoryPosts = data.rankAllCategoryPosts;
    });
}

function ShowDetailCtrl($scope, $http, $routeParams) {

  var timer = '';

  // var getData = function(){
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

  function updateTweetList(data) {
    posts = data.rankPosts || data.posts;
    width = data.rankWidth || data.postWidth;
    target = data.rankPosts !== undefined ? "ranking" : "new"

    posts.forEach(function(newData, newDataIndex){

        if(target === "ranking") {
          idx = _.findIndex($scope.rankPosts, {tweetId: newData.tweetId});
        } else {
          idx = _.findIndex($scope.posts, {tweetId: newData.tweetId});
        }

        // console.log("posts.newData", newData);
        // console.log("idx = " + idx);
        // console.log("newDataIndex = " + newDataIndex);

        // もし、新しい画像があれば
        if(idx === -1) {

          console.log("追加します！！");

          if(target === "ranking") {
            $scope.rankPosts.push(posts[newDataIndex]);
            $scope.rankWidth　= width;
          } else {
            $scope.posts.push(posts[newDataIndex]);
            $scope.postWidth = width;
          }
          return;
        }

        // リツイート数、ふぁぼ数に変化があれば更新
        if($scope.rankPosts[idx].favNum !== newData.favNum) {

          // console.log("fav数を更新します！！" + $scope.rankPosts[idx].favNum + " -> " + newData.favNum);
          if(target === "ranking") {
            $scope.rankPosts[idx].favNum = newData.favNum;
          } else {
            $scope.posts[idx].favNum = newData.favNum;
          }
        }

        if($scope.rankPosts[idx].retweetNum !== newData.retweetNum){

          // console.log("retweet数を更新します！！" + $scope.rankPosts[idx].retweetNum + " -> " + newData.retweetNum);
          if(target === "ranking") {
            $scope.rankPosts[idx].retweetNum = newData.retweetNum;
          } else {
            $scope.posts[idx].retweetNum = newData.retweetNum;
          }
        }
    });
  }

  timer = setInterval(function() {
    $http.get('/api/readAll/' + $routeParams.name).
      success(function(data) {
        updateTweetList(data);
      });
    $http.get('/api/readRanking/' + $routeParams.name).
      success(function(data) {

        // console.log("data.rankPosts", data.rankPosts);
        updateTweetList(data);
      });
  }, 1000 * 5);

}
