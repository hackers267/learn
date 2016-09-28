/**
 * Created by zhangpengfei8987 on 16.9.28.
 */
angular.module('myApp',[]).controller('SignUpController',function($scope){
    $scope.userdata={};
    $scope.submitForm=function(){
        console.log($scope.userdata);
    }
});