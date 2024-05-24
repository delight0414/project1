## 🚩Project - 넥슨게임즈

#### 📰 Intro 
HTML, jQuery, CSS로 개발한 팀프로젝트입니다. 인터랙션을 위해 다양한 라이브러리와 setInterval() 함수를 사용하였고 네비게이션에 focusin(),focusout() 이벤트로 웹접근성을 향상시켰습니다. Figma로 디자인 협업을 해보았습니다.
##
#### 👩‍💻 Stack 
<div>
  <img src="https://img.shields.io/badge/html-e34f26?style=for-the-badge&logo=html&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572b6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
</div>
<div>
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

##
#### 💻 Code review
🔸 video를 메인페이지에 넣고 배포해보니 iOS환경에서 작동이 안되는 이슈가 발생했다.
```html
<video src="images/video/main_video.mp4" id="main_video" muted autoplay playsinline poster=""></video>
```
W3C에 따르면 autoplay, muted를 권장하고 playsinline을 추가해야 iOS에서 재생이 된다.

🔸 뉴스리스트가 정적으로 있지않고 돌아가면서 첫번째 줄에 보여지도록 만들고 싶었다.
```html
<div class="news-list_wrap">
  <div class="list-active"></div> //position:relative;
  <div class="news-list">
    <div class="boxIn">
        <ul> //position:absolute;
            <li>
                <a href="">
                    <span><p class="date">****.**.**</p>
                        <strong>sss</strong><p class="headline">ppp</p>
                      .
                    .
                  .
```
```javascript
setInterval(function() {
    let boxIn = $('.boxIn ul');
    let boxRow = $('.boxIn ul li:first'); 
    let Area = function(){ 
        boxRow.appendTo(boxIn).show();
    };
    $(boxRow).hide(100, ARea);    
},4000);
```
`li:first`가 4초 뒤에 맨 뒷 줄로 가도록 설정하여 `li`요소들이 회전하게끔 보이게 만들었다.

