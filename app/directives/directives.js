(function () {
  var app = angular.module('app-directives', []);

  app.directive('componentHeader', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/component-header.html'
    };
  });

  app.directive('componentPostList', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/component-post-list.html',
      controller: function () {

       this.editPost = function (post) {
          console.log(post);
       };

       this.removePost = function (postList, index) {
          postList.posts.splice(index, 1);
       }
      },
      controllerAs: 'postCtrl'
    };
  });

  app.directive('componentAddPost', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/component-add-post.html',
      controller: function () {
       this.post = {};

       this.addPost = function (postList) {
         postList.posts.push(this.post);
         this.post = {}; // clear the form.
       };

      },
      controllerAs: 'addPostCtrl'
    };
  });

})();
