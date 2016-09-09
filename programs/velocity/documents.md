#Velocity
##Velocity的简介
Velocity是一个和JQ's animaite()使用相同API的一个动画引擎，可以有效的提供像`color animation`, `transforms`,`loops`,`easings`,`SVG support`和`scrolling`的支持。Velocity支持IE8以上的桌面浏览器以及Android 2.3以上的手机浏览器。因为Velocity模仿了JQ's animate()的$.queue(),而且语法和$.animate()完全一样。所以可以直接把JQ的$.animate()替换为$.velocity()就可以，语法不改动。
##下载地址：
[Download Velocity](https://raw.githubusercontent.com/julianshapiro/velocity/master/velocity.min.js);

##参数
Velocity的第一个参数为一个以CSS属性和值为键值对的对象，第二个参数为一个键值对的对象的可选参数。
For example:
```
$element.velocity({
    width:"500px",
    property:value2
},{
    /* Velocity's default options*/
    duration:400,
    easing:"swing",
    queue:"",
    begin:undefined,
    progress:undefined,
    complete:undefined,
    desplay:undefined,
    visibilite:unefined,
    loop:false,
    delay:false,
    mobileHA:true
});
```
Velocity还可以这样传递参数:
```
$element.velocity({
    properties:{opacity:1},
    options:{duration:500}
});
```
Or:
```
$element.velocity({
    p:{opacity:1},
    o:{duration:500}
});
```
`注意`：
velocity的每个属性只能接受一个值，
```
    {padding:1} //true
    {padding:"1 1 1 1"}  //false
```
对于CSS中要传多值的属性，velocity提供了下面的解决方法：[Hook CSS Support](http://velocityjs.org/#cssSupport "Hook CSS Support");
velocity的值可以使用`+,-,*,/`运算。
For example:
```
$element.volocity({
    top:50,     //Defaults to the px unit type
    left:"50%",
    width:"+=5rem",     //Add 5rem to the current rem value
    height:"*=2"    //Double the current height
});
```
## 链式调用
```
    $element.velocity({width:75}).velocity({height:0});
     //first:width to 75,then height to 0;
```

## 具体参数
[duration](#duration),[easing](#easing),[queue](#queue),[begin](#begin),[complete](#complete),[progress](#progress),[mobileHA](#mobileHA),[loop](#loop),[delay](#delay),[dispaly](#dispaly),[visibility](#visibility)
<h3 id="duration">duration</h3>
动画持续时长
```
$element.velocity({opacity:1},{duration:1000});
```
<h3 id="easing">easing</h3>
easing包括的内容有：

1. [ jQuery UI's easings](http://easings.net/zh-cn)中的` back`,`bounce`和`elastic`之外的属性。
    ```
    $element.velocity({width:50},"easeInSine");
    ```
2. `ease`,`ease-in`,`ease-out`and`ease-in-out`;
    ```
    $element.velocity({width:50},"ease");
    ```
3. 贝塞尔曲线([CSS3's bezier curves](http://cubic-bezier.com/));
    ```
    $element.velocity({width:50},[0.17,0.67,0.83,0.67]);
    ```
4. 弹簧式曲线([Spring Physics Tester](http://codepen.io/julianshapiro/pen/hyeDg));
    ```
    $element.velocity({width:50},[250,15]);
    ```
5. 步进式。([step](http://codepen.io/julianshapiro/pen/ylvuh))
    ```
    $element.velocity({width:50},[8]);
    ```
6. 复用
    ```
    $element.evlocity({
        borderBottomWidth:["2px","spring"],     //Uses "spring"
        width:["100px",[250,15]],       //Uses custom spring physics
        height: "100px"     //Defaults to easeInSine,the call's default easing
    },{
        easing:"easeInSine"     //Default easing
    });
    ```
7. 回调函数
    用`$.Velocity.Easings`对象的方法调用。
    + p:动画完成的百分比。
    + opts(可选):Vecocity触发时调用的对象。
    + tweenDelta(可选):动画完成与开始的不同。
    ```
    $.Velocity.Esings.myCustomEasing=function(p,opts,tweenDelta){
        return 0.5-Math.cos(p*Math.PI)/2;
    };
    ```
<h3 id="queue">queue</h3>
队列：可以把`queue`设置为`false`来立即运行当前动画。

    ```
    /*Trigger the first animation(width)*/
    $element.velocity({width:"50px"},{duration:3000});  //Runs for 3s
    setTimeout(function(){
    /*function call Will run in parallel starting the 1500ms mark.*/
    $element.velocity({height:"50px"},{queue:false,duration:1500});
    },1500);
    ```

<h3 id="begin">begin</h3>
<h3 id="complete">complete</h3>
<h3 id="progress">progress</h3>
<h3 id="mobileHA">mobileHA</h3>
<h3 id="loop">loop</h3>
<h3 id="delay">delay</h3>
<h3 id="display">display</h3>
<h3 id="visibility">visibility</h3>


