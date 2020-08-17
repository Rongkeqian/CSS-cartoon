const string =`
body {
    background: #d4ecf9;
}
.propeller {
    position: relative;
    top: 15px;
}
.propeller-map {
    width: 20px;
    height: 10px;
    border: 2px solid #000;
    background: #fcc136;
    border-radius: 10px 10px 0 0;
    margin: 0 auto;
}
.propeller-neck {
    width: 7px;
    height: 30px;
    background-color: #fcc136;
    border: 2px solid #000;
    margin: 0 auto;
}
.propeller-kua {
    width: 100px;
    height: 5px;
    background: #fcc136;
    border: 1px solid #000;
    margin: 0 auto;
    animation: rotation 500ms infinite linear;
    position: relative;
}
.propeller-kua .small {
    width: 40px;
    height: 5px;
    background: #f00;
    border: 1px solid #000;
    position: absolute;
    left: 50%;
    margin-left: -20px;
    top: -1px;
    animation: rotation1 1s infinite linear;
}
@keyframes rotation {
    from {
        transform: rotate3d(0, 1, 0, 0deg);
    }
    to {
        transform: rotate3d(0, 1, 0, 360deg);
    }
}
@keyframes rotation1 {
    from {
        transform: rotate3d(0, 1, 0, 360deg);
    }
    to {
        transform: rotate3d(0, 1, 0, 0deg);
    }
}
.main {
    width: 400px;
    margin: 50px auto;
    position: relative;
}
.main .head {
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    background: #35a1c9;
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    z-index: 10;
}
.main .head .face {
    width: 172px;
    height: 172px;
    border: 2px solid #000;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 12px;
    transform: translateX(-85px);
}
.face .eye {
    border: 1px solid #000;
    width: 48px;
    height: 48px;
    position: absolute;
    left: 50%;
    margin-left: -24px;
    border-radius: 50%;
    background: #fff;
}
.face .eye.left {
    transform: translateX(-24px);
}
.face .eye.right {
    transform: translateX(24px);
    overflow: hidden;
}
.face .eye.left::before {
    content: "";
    display: block;
    width: 15px;
    height: 23px;
    background: #000;
    border-radius: 100%;
    position: absolute;
    right: 5px;
    bottom: 10px;
    transform: rotate(-10deg);
}
.face .eye.left::after {
    content: "";
    display: block;
    width: 5px;
    height: 9px;
    background: #fff;
    border-radius: 100%;
    position: absolute;
    right: 8px;
    bottom: 12px;
}

.face .eye.right::before {
    content: "";
    display: block;
    width: 23px;
    height: 23px;
    border: 2px solid #000;
    border-radius: 100%;
    position: absolute;
    right: 10px;
    bottom: -15px;
}

.face .nose {
    border: 1px solid #000;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    background: #b11735;
    position: absolute;
    top: 40px;
    left: 50%;
    margin-left: -17px;
    z-index: 1;
}
.face .nose::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 5px;
}

.face .mustache {
    width: 56px;
    height: 30px;
    position: absolute;
    top: 48px;
}
.face .mustache li {
    width: 56px;
    height: 2px;
    background: #000;
}
.face .mustache.right {
    right: 0;
}
.face .mustache.left li:first-child {
    margin-bottom: 18px;
    transform: rotate(25deg);
}
.face .mustache.right li:first-child {
    margin-bottom: 18px;
    transform: rotate(-25deg);
}
.face .mustache.left li:nth-child(2),
.face .mustache.right li:nth-child(2) {
    margin-bottom: 10px;
}
.face .mustache.left li:nth-child(3) {
    transform: rotate(-15deg);
}
.face .mustache.right li:nth-child(3) {
    transform: rotate(15deg);
}


.face .mouth {
    width: 140px;
    height: 70px;
    background: #b11735;
    position: absolute;
    bottom: 8px;
    left: 15px;
    border-bottom-left-radius: 140px;
    border-bottom-right-radius: 140px;
    overflow: hidden;
}
.face .mouth::before,
.face .mouth::after {
    content: "";
    display: block;
    width: 140px;
    height: 70px;
    background: #ca2533;
    position: absolute;
    border-radius: 50px;

    bottom: -50px;
}
.face .mouth::before {
    transform: rotate(45deg);
}
.face .mouth::after {
    transform: rotate(-45deg);
}
.face .line {
    width: 2px;
    height: 30px;
    background: #000;
    position: absolute;
    bottom: 76px;
    left: 50%;
}

.body {
    width: 160px;
    height: 172px;
    border: 2px solid #000;
    margin: 0 auto;
    border-radius: 50%;
    position: relative;
    top: -100px;
    background: #35a1c9;
    position: relative;
}
.body .hand {
    width: 55px;
    height: 100px;
    border: 2px solid #000000;
    background: #35a1c9;
    position: absolute;
    top: -30px;
}
.body .hand.left {
    transform: rotate(-55deg);
    transform-origin: bottom right;
    border-radius: 34px 180px;
}
.body .hand.right {
    right: 0px;
    transform-origin: bottom left;
    transform: rotate(55deg);
    border-radius: 180px 34px;
}
.body .hand.left::before,
.body .hand.right::before {
    content: "";
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #000;
    position: absolute;
}
.body .hand.left::before {
    top: -25px;
    left: -5px;
}

.body .hand.right::before {
    top: -25px;
    right: -5px;
}
.body .foot {
    width: 60px;
    height: 100px;
    border: 2px solid #000;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 50%;
    z-index: -1;
}
.body .foot.left {
    left: 20px;
}
.body .foot.right {
    right: 20px;
}
.body .bellyband {
    width: 100px;
    height: 60px;
    background: #fff;
    border-radius: 100%;
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50px);
}
.body .bellyband::before {
    content: "";
    display: block;
    width: 60px;
    height: 30px;
    border: 2px solid #000;
    border-radius: 0 0 30px 30px;
    position: absolute;
    bottom: 6px;
    left: 50%;
    margin-left: -30px;
}

.body .necklace {
    width: 100px;
    height: 40px;
    border-radius: 100%;
    background: #b11735;
    position: relative;
    top: 64px;
    left: 28px;
    z-index: 1;
}
.body .necklace .bell {
    content: "";
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    background: #f19629;
    border: 2px solid #000;
    position: absolute;
    top: 34px;
    left: 32px;
}
.body .necklace .bell::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    bottom: 8px;
    left: 50%;
    margin-left: -4px;
}
.body .necklace .bell::after {
    content: "";
    display: block;
    width: 16px;
    height: 3px;
    background: #000;
    position: absolute;
    bottom: 5px;
    left: 50%;
    margin-left: -8px;
}

`;
export default string