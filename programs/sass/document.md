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

### 投书器嵌套

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
