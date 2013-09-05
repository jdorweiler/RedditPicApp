'use strict';

/* Controllers */

function RedditPosts($scope, $http) {
    $scope.orderProp = '-data.score';
    $scope.subreddit = 'pics';
    $scope.updatePosts = function () {
        $http.jsonp('http://reddit.com/r/'+$scope.subreddit+'.json?jsonp=JSON_CALLBACK').success(function (response) {
            $scope.Post = response.data
        });
    };
    $scope.updatePosts();
}

