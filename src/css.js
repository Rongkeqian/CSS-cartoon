const string = `
/*
*首先，需要准备皮卡丘的皮肤
*/
.skin {
  background-color: #ffe600;
    height: 100vh;
    position: relative;
  }
  /*
  接下来，画皮卡丘的鼻子
  */
  .nose {
    border: 10px solid #000;
    border-color: #000 transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 140px;
    margin-left: -10px;
  }
  .nose::before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-top-left-radius: 10px 6px;
    border-top-right-radius: 10px 6px;
    background: #000;
  }
  /*
  *让皮卡丘的鼻子可以动起来
  */
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(-10deg);
    }
    66% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: bottom center;
    animation: wave 500ms infinite linear;
  }
  /*
  *接下来，画皮卡丘的双眼
  */
  .eye {
    width: 50px;
    height: 50px;
    border: 2px solid #000;
    background: #2e2e2e;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -25px;
  }
  .eye::before {
    content: "";
    display: block;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 50%;
    position: relative;
    left: 8px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  /*
  *接下来就是画皮卡丘的嘴
  */
  .mouth {
    width: 200px;
    height: 160px;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -100px;
    overflow: hidden;
  }
  
  .mouth::before {
    content: "";
    display: block;
    border: 3px solid black;
    height: 25px;
    width: 100px;
    border-top: none;
    position: absolute;
    border-bottom-left-radius: 40px 25px;
    border-right: none;
    transform: rotate(-25deg);
    left: 1px;
    z-index: 1;
    background: #ffe600;
    box-shadow: -10px -20px 0 #ffe600;
  }
  .mouth::after {
    content: "";
    display: block;
    border: 3px solid black;
    height: 25px;
    width: 100px;
    border-top: none;
    position: absolute;
    border-bottom-right-radius: 40px 25px;
    border-left: none;
    transform: rotate(25deg);
    right: 1px;
    top: 0;
    background: #ffe600;
    box-shadow: 0px -20px 0 #ffe600;
  }
  .mouth .down {
    width: 100%;
    height: 1000px;
    border-radius: 100%;
    border: 2px solid #000;
    background-color: #990513;
    position: absolute;
    bottom: 30px;
    left: 0;
    overflow: hidden;
  }
  .mouth .down::after {
    content: "";
    position: absolute;
    bottom: -15px;
    width: 100px;
    height: 100px;
    background: #ff485f;
    left: 50%;
    border-radius:40px/43px;
    transform:translateX(-50%);
  }
  
  .face {
    position: absolute;
    left: 50%;
    top: 230px;
    width: 68px;
    height: 68px;
    border: 2px solid #000;
    border-radius: 50%;
    background-color: #f00;
    margin-left: -32px;
  }
  /*
  *最后，给皮卡丘画脸
  */
  .face.left {
    transform: translateX(-150px);
  }
  .face.right {
    transform: translateX(150px);
  }
`;
export default string;
