var app = angular.module("TodoApp", []);

  app.controller("TodoCtrl", function($scope) {
     $scope.title = "Welcome to your task list";
     $scope.macaroni = "";

     $scope.todos = [
      "Cut The Grass",
      "mow the Lawn",
      "Trim the weeds"
     ];

     $scope.killTodo = function(todo) {
      var todoIndex = $scope.todos.indexOf(todo);
      if (todoIndex >= 0)
        $scope.todos.splice(todoIndex, 1);
     }
});