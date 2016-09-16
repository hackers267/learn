# SASS

## 变量

### 普通变量

```
$w:640;
```

### 默认变量

```
$w:640 !default;
```

SASS还有全局变量和局部变量之分。

## 嵌套

### 选择器嵌套

```
nav{
    color:red;
   a{color:blue;} 
   header & span{color:black;}
}
```

### 属性嵌套

```
.box{
    border:{
        top:1px solid red;
        bottom:1px solid green;
    }
}
```

### 伪类嵌套

```
.box{
    :before{
        content:"伪类嵌套";
    }
}
```

## 混合宏

`@mixin`

### 声明混合宏

#### 没有参数的混合宏

```
@mixin border-radius{
    -webkit-border-radius:5px;
    border-radius:5px;
}
```

#### 有参数的混合宏

```
@mixin border-radius($radius){
    -webkit-border-radius:$radius;
    border-radius:$radius;
}
```

#### 复杂的混合宏

```
@mixin box-shadow($shadow...){
    @if length($shadow) >= 1 {
        @include prefixer(box-shadow,$shadow);
    } @else{
        $shadow:0 0 4px rgba(0,0,0,.3);
        @include prefixer(box-shadow,$shadow);
    }
}
```

### 调用混合宏

```
.border{
    @include border-radius();
}
```

## 继承

`@extend`

```
.btn{
    border:1px solid red;
    padding:6px 4px;
    font-size:14px;
}
.btn-primary{
    background-color:#f36;
    color:#fff;
    @extend .btn;
}
```

## 点位符%
```
%mt5{
    margin-top:5px;
}
```
## 点位符、混合宏和继承的比较
![55263aa30001913307940364.png](https://ooo.0o0.ooo/2016/09/10/57d3bda865c78.png)

## 插值#{}
```
    $properties:{margin,padding};
    @mixin set-value(@side,$value){
        @each $prop in $properties{
            #{$prop}-#{$side}:$value;
        }
    }
    .login-box{
        @include set-value{top,14px};
    }
```
编译结果：
```
.login-box{
    margin-top:14px;
    padding-top:14px;
}
```
### 注释
有两种注释，一种为`//`另一种是`/**/`.其中`/**/`会被编辑成css的注释，而`//`不会。
## 数据类型
+ 数字
+ 字符串
+ 颜色
+ 布尔
+ 空值
+ 值列表 `1.5rem 1em 0`

### 运算
SASS支持`+,-,*,/,%`等运算。

### @if
@if 可以和 @mixin配合使用来处理代码块，还可以和 @else 或 @else if一起使用。
For Exampel:
```
@mixin blockOrHidden($boolean:true){
    @if $boolean{
        @debug "$boolean is #{$boolean};
        display:block;
    }#else{
        #debug "$boolean is #{$boolean};
        display:none;
    }
}
.block{@include blockOrHidden}
.hidden{@include bolckOrHidden(false)}
```
编译为：
```
.block{display:block;}
.hidden{display:none;}
```
###@for
SASS中的@for有两种形式，
```
@for $i form <start> to <end>
@for $i form <start> through <end>
```
to 不包含end,through包含end
For Example:
```
@for $i from 0 through 3{
    .item-#{$i}{width:2em*$i;}
}
```
编译为：
```
.item-1{width:2em;}
.item-2{width:4em;}
.item-3{width:6em;}
```
Example2:
```
$grid-prefix:span !default;
$grid-width:60px !default;
$grid-gutter:20px !default;
%grid{
    float:left;
    margin-left:$grid-gutter/2;
    margin-right:$grid-gutter/2;
}
@for $i from 1 through 12{
    #{$grid-prefix}#{$i}{
    width:$grid-width*$i + $grid-gutter*($i-1);
    @extend %grid;
    }
}
```
编译为:
```
.span1,.span2,.span3,.span4,.span5,.span6,.span7,.span8,.span9,.span10,.span11,.span12{
    float:left;
    margin-left:10px;
    margin-right:10px;
}
.span1{width:60px}
.span2{width:140px}
.span3{width:220px}
.span4{width:300px}
.span5{width:380px}
.span6{width:460px}
.span7{width:540px}
.span8{width:600px}
.span9{width:660px}
.span10{width:720px}
.span11{width:800px}
.span2{width:860px}
```
### @while
For Example：
```
$types:4;
$type-width:20px;
@while $types>0{
    .while-$types{
        width:$type-width+$types;
    }
    $types:$types-1;
}
```
编译为：
```
.while-4{
    width:24px;
}
.while-3{
    width:23px;
}
.while-2{
    width:22px;
}
.while-1{
    width:21px;
}
```
@each
遍历
For Example:
```
$list:adam john wynn mason kuroir;
@mixin $author-image{
    @each $author in $list{
        .photo-#{$author}{
            background:url("/images/avatars/#{$author}.png" no-repeat;)
        }
    }
}
.author-bio{@include author-image;}
```
编译为：
```
.author .photo-adam{background:url("/images/avatars/adam.png" no-repeat;)}
.author .photo-john{background:url("/images/avatars/john.png" no-repeat;)}
.author .photo-wynn{background:url("/images/avatars/wynn.png" no-repeat;)}
.author .photo-mason{background:url("/images/avatars/mason.png" no-repeat;)}
.author .photo-kuroir{background:url("/images/avatars/kuroir.png" no-repeat;)}
```
## SASS函数
### unquote()和quote()
+ unquote() --删除字符串中的引号
+ quote()   --给字符串加引号
```
.test1{content: unquote("Hello SASS!")}
.test2{content: quote(Hello SASS!)}
```
编译为：
```
.test1{content:Hello SASS!}
.test2{content:"Hello SASS!"}
```
### To-upper-case()和To-lower-case()
```
.test{
    text:to-upper-case(aaa);
    text:to-lower-case(BBB);
}
```
编译为:
```
.test{
    text:AAA;
    text:bbb;
}
```
### 数字函数
+ percentage($value)
+ round($value)
+ ceil($value)
+ floor($value)
+ abs($value)
+ min($numbers)
+ max($numbers)
+ random()
### 列表函数
+ length($list)
+ nth($list)
+ join($list1,$list2,\[$separator\])
+ append($list1,$val,\[$separator\])
+ zip($lists...)
+ index($list,$value)
### Introspection函数
+ type-of($value)   //返回一个值的类型
+ unit($number)     //返回一个值的单位
+ unitless($number) //判断一个值是否有单位
+ comparable($number1,$number2) //判断两个值是否可以做加、减和合并
####type-of()
+ `number`为数值型
+ `string`为字符串型
+ `bool`为布尔型
+ `color`为颜色型
### Miscellaneous函数
```
if(true,8em,20em)
if(false,8em,20em)
```
### Map
map类似于JSON数据
```
$theme-color:(
    default:(
        background-color:#FFF,
        text-color:#444,
        link-color:#39F
    ),
    primary:(
        background-color:#000,
        text-color:#FFF,
        link-color:#93F
    ),
    negative:(
        background-color:#F36,
        text-color:#FEFEFE,
        link-color:#D4E
    )
)
```
### SASS Maps函数
+ map-get($map,$key)    //根据给定的key值，返回map中相关的值
+ map-merge($map1,$map2)    //将两个map便笺成一个新的map
+ map-remove($map,$key)     //从map中删除一个key,返回一个新的map
+ map-key($map)     //返回map中所有的key
+ map-values($map)  //返回map中所有的value
+ map-has-key($map,$key)    //根据给定的key值判断mpa是否有对应的value值，如果有返回true,没有返回false
+ keywords($args)   //返回一个函数的参数，这个参数可以动态的设置key 和value
####map-get()
```
$social-colors:(
    dribble:#EA4C89,
    facebook:#3B5998,
    github:#171515,
    google:#DB4437,
    twitter:#55ACEE
)
.btn-dribble{color:map-get($social-colors,facebook)}
```
编译为
```
.btn-dribble{color:#3B5998;}
```
#### map-has-key($map,$key)
```
@function colors($color){
@if not map-has-key($social-colors,$color){
    @warn "No color found for `#{$color}` in $social-colors map.Property omitted.";
}
@return map-get($social-colors,$color);
}
.btn-dribble{color:colors(dribble)}
.btn-facebook{color:colors(faceboo)}
```
当传递的参数在`$social-colors`这个map中不存在的时候，在终端会有`No color found for (颜色) in $social-colors map.Property omitted.`的提示。
#### map-keys($map)
返回`$map`中所有的`key`
```
map-keys($social-colors)
```
返回：
```
"dribble","facebook","github","google","twitter"
```
#### map-values()
返回`$map`中所有的`value`
```
map-values($social-colors)
```
返回：
```
#EA4C89,#3B5998,#171515,#DB4437,#55ACEE
```
#### map-merge($map1,$map2)
合并`$map1`和`$map2`,返回一个新的`map`
#### map-remove($map,$key)和keywords($args)
### RGB()颜色函数
+ rgb($red,$green,$blue)    //根据红绿蓝创建一个颜色
+ rgba($red,$green,$blue,$alpha)    //根据红绿蓝和透明度创建一个颜色
+ rgba($color,$alpha)    //将一个Hex颜色转换成rgba颜色
+ red($color)   //从一个颜色中获取其中红色值
+ green($color) //从一个颜色中获取其中绿色值
+ blue($color)  //从一个颜色中获取其中蓝色值
+ mix($color1,$color2,\[$weight\])  //把两种颜色混合在一起
### HSL()函数
+ hsl($hue,$saturation,$lightness)  //通过色相(hue)、饱和度(saturation)和亮度($lightness)创建一个颜色
+ hsla($hue,$saturation,$lightness,$alpha)  //通过色相(hue)、饱和度(saturation)、亮度(lightness)和透明度(alpha)创建一个颜色
+ hue($color)   //从一个颜色中获取色相
+ saturation($color)    //从一个颜色中获取饱和度
+ lightness($color)     //从一个颜色中获取亮度
+ adjust-hue($color,$degrees)   //通过改变一个颜色的色相值，创建一个新的颜色
+ lighten($color,$amount)   //通过改变一个颜色的亮度值，让颜色变亮，创建一个新的颜色
+ darken($color,$amount)    //通过改变一个颜色的亮度值，让颜色变暗，创建一个新的颜色
+ saturate($color,$amount)   //通过改变一个颜色的饱和度，让颜色更饱和，创建一个新的颜色
+ desaturate($color,$amount)    //通过改变一个颜色的饱和度，让颜色更少的饱和，创建一个新的颜色
+ grayscale($color)     //将一个颜色变成灰色，相当于desaturate($color,100%)
+ complement($color)    //返回一个补充色，相当于adjust-hue($color,180deg)
+ invert($color)        返回一个反相色
### Opacity函数
+ alpht($color)/opacity($color) //获取颜色透明度值
+ rgba($color,$alpha)   //改变颜色的透明度值
+ opacity($color,$amount)/fade-in($color,$amount)   //使颜色更不透明
+ transparentize($color,$amount)/fade-out($color,$amount)   //使颜色更加透明
##@import
Sass扩展了CSS的@import规则，让它能够引入SCSS和SASS文件，所有引入的SCSS和SASS文件都会被合并并输出一个单一的CSS文件。另外，被导入的文件中所定义的变量或mixins都可以在主文件中使用。

Sass会在当前目录下寻找其他SASS或SCSS文件，如果是Rack、Rails或Merb环境中则是SASS目录。也可以通过`:load_path`选项或者在命令行中使用`--load-path`选项来指定额外的搜索目录。

@import根据文件名引入。默认情况下，它会寻找SASS或SCSS文件并直接引入，但是，在少数情况下，它会被编译成SCC的@import规则：
+ 如果文件的扩展名是`.css`
+ 如果文件名以`http://`开头
+ 如果文件名是`url()`
+ 如果@import包含了任何媒体查询(media queries)

如果有一个SCSS或SASS文件需要引入，但又不希望它被编译为一个CSS文件，可以在文件名前面加一个下划线，就能避免被编译。引入的时候可以不加下划线。
`注意`：在同一个目录中不能同时存在带下划线和不带下划线的同名文件。例如，`_colors.scss`和`colors.scss`不能共存。
###@media
和CSS的@media一样，但它可以嵌套在CSS规则中。
```
.sidebar{
    width:300px;
    @media screen and (orientation:landscape){
    width:500px;
    }
}
```
编译为：
```
.sidebar{width:300px}
@media screen and (orientation:landscape){
.sidebar{width:500px;}
}
```
### @at-root
跳出根元素
```
.a{
    color:red;
    .b{
        color:orange;
        .c{
            color:yellow;
            @at-root .d{
                color:green;
            }
        }
    }
}
```
编译为：
```
.a{color:red;}
.a .b{color:orange;}
.a .b .c{color:yellow;}
.d{color:green;}
```
###@debug
@debug在SASS中是用来调试的。当在SASS的源码中使用了@debug指令之后，SASS代码在编译出错时，在命令终端会输出你设置的提示Bug。
```
@debug 10em+12em
```
会输出：
```
Line 1 DEBUG:22em
```
### @warn和@error
@warn和@error和@debug类似。