#Angular
###Angular基础指令

+ ng-app
+ ng-bind
+ ng-bind-html
+ ng-bind-template
+ ng-blur
+ ng-change
+ ng-checked
+ ng-class
+ ng-class-even
+ ng-class-odd
+ ng-click
+ ng-cloak
+ ng-controller
+ ng-copy
+ ng-csp
+ ng-dblclick
+ ng-focus
+ ng-form
+ ng-hide
+ ng-href
+ ng-if
+ ng-include
+ ng-init
+ ng-jq
+ ng-keydown
+ ng-keypress
+ ng-keyup
+ ng-list
+ ng-model
+ ng-model-options
+ ng-mousedown
+ ng-mouseenter
+ ng-mouseleave
+ ng-mousemove
+ ng-mouseover
+ ng-mouseup
+ ng-non-bindable
+ ng-open
+ ng-options
+ ng-paste
+ ng-pluralize
+ ng-readonly
+ ng-repeat
+ ng-selected
+ ng-show
+ ng-src
+ ng-srcset
+ ng-style
+ ng-submit
+ ng-switch
+ ng-transclude
+ ng-value

布局：

+ ng-repeat
+ ng-class
+ ng-options
+ ng-show
+ ng-hide
+ ng-disabled

+ np-app
+ ng-init

数据绑定：

+ ng-model

表单验证：

+ ng-minlength
+ ng-maxlength
+ ng-submit
+ ng-if
+ ng-disabled
+ required

ng-model指令根据表单域的状态添加/移除以下类：

+ ng-empty
+ ng-not-empty
+ ng-untouched
+ ng-valid
+ ng-invalid
+ ng-dirty
+ ng-pending
+ ng-pristine


状态值：

+ $valid    [字段内容是合法的]
+ $invalid  [字段内容是非法的]
+ $touched
+ $dirty    [表单有填写记录]
+ $pristine [表单没有填写记录]
+ $error
    + $error.email
    + $error.minlength
    + $error.maxlength
+ $even
+ $odd
+ $index


作用域：

+ $scope
+ $rootscope 根作用域

过滤器

+ currency  [格式化数字为货币格式]
+ filter    [从数组中选择一个子集]
+ lowercase [小写]
+ orderBy   [根据某个表达式排列数组]
+ uppercase [大写]
使用方法：
`{{ lastname | uppercase}}`

###Angular服务 Service
自带服务：

+ $location [返回当前页面的 URL 地址]
+ $http     
+ $timeout
+ $interval
+ 
自定义服务：
```
app.service('hexafy',function(){
    this.MyFunc=function(x){
        return x.toString(16);
    }
})
```
使用自定义服务：
```
app.controller('myCtrl',function($scope,hexafy){
    $scope.hex=hexafy.MyFunc(255);
});
```
在过滤器中使用自定义服务：
```
app.filter('myFormat',['hexafy',function(hexafy){
    return function(x){
        return hexafy.MyFunc(x);
    }
}])
```

###创建自定义指令

####.directive
使用驼峰法来命名一个指令， runoobDirective, 但在使用它时需要以 - 分割, runoob-directive;
```
var app=angular.module('myApp',[]);
app.directive('zhpf',function(){
    return {
        restrict:'EA',
        replace:true,
        template:'<h1>zhangpengfei</h1>
    }
}
```
restrict的取值一般为：

+ E:元素名使用[element]
+ A:属性使用  [attr]
+ C:类名使用  [class]
+ M:注释使用  [comment] `<!--directive: zhpf -->`

###AngularJS Select(选择框)
ng-repeat 指令是通过数组来循环 HTML 代码来创建下拉列表，但 ng-options 指令更适合创建下拉列表，它有以下优势：
使用 ng-options 的选项的一个对象， ng-repeat 是一个字符串。
ng-options 使用对象有很大的不同：
使用对象作为数据源, x 为键(key), y 为值(value)。

###AngularJS 表格


###AngularJS 事件

+ ng-click

