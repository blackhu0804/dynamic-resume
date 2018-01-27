var result =
  `
/* 
  你好，我是Black。
  我将以讲义的动画介绍我自己，只用文字太单调了。
*/

/* 白色背景太单调了，首先我们改下背景 */
html {
  background: #ccc;
  font-size: 16px;
}
/* 下面我们加个边框 */
#text {
  border: 1px solid red;
}
/* 下面将代码高亮 */
.token.comment{color:slategray;}
.token.selector{color: #690;}
.token.punctuation {color: #999;}
.token.property {color: #905;} 
/* 加点3D效果怎么样。Let‘s begin！ */
html{
  perspective: 1000px;
  -webkit-perspective: 1000px;
}
#text {
  position: fixed; 
  left: 1rem; 
  top: 0; 
  transition: .5;
  -webkit-transition: .5; 
  transform: rotateY(10deg) translateZ(-100px);
  -webkit-transform: rotateY(10deg) translateZ(-100px);
}
/* 接下来我们准备一个编辑器，正式介绍下自己。 */
.resume-wrap{
  width: 48vw; 
  height: 90vh; 
  position: fixed; 
  right: .5rem; 
  top: 0;
  padding: .5em;
  border: 1px solid;
  background: white; 
  color: #222;
  overflow: auto;
  transition: .5;
  -webkit-transition: .5; 
  transform: rotateY(-10deg) translateZ(-100px);
  -webkit-transform: rotateY(-10deg) translateZ(-100px);
}
`

const showStyles = (num, callback) => {
  let n = 0;
  let id = setInterval(() => {
    if (n >= result.length) {
      window.clearInterval(id);
      callback && callback();
    } else {
      text.innerHTML = result.substring(0, n);
      text.innerHTML = Prism.highlight(text.innerHTML, Prism.languages.css);
    
      cssCode.innerHTML = result.substring(0, n);
      text.scrollTop = 1000;
      n += 1;
    }
  }, 10)
}


var resumeText = 
`
# Black
----

一只迷途的前端小码农，徜徉在计算机的世界，渴望成为一名有点点厉害的全栈开发工程师

### 技能
----
* HTML、CSS、JavaScript
* Nodejs

### 学习经历
----
* 鲁东大学 本科

### 链接
----

* [github](https://github.com/hu970804)
* [我的博客](http://www.blackhu.site/)
`

const showResume = (callback) => {
  let n = 0;
  let timer = setInterval( () => {
    if(n >= resumeText.length){
      clearInterval(timer);
      callback && callback();
    } else {
      resume.innerHTML = resumeText.substring(0, n);
      resume.scrollTop = 1000; 
      n += 1;
    }
  }, 10);
}

showStyles(0, () => {
  showResume( () => {
    //showStyles(1)
  })
})