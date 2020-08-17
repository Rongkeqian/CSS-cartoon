import string from "./doraemonCss.js"; //导入css.js

const player = {
    //属性
    id:undefined,
    time:100,
    n:1,
    ui:{
        demo :document.querySelector("#demo"),
        demo2 :document.querySelector("#demo2"),
    },
    events: {
        "#btnPause": 'pause',
        "#btnPlay": 'play',
        "#btnSlow": 'slow',
        "#btnNormal": 'normal',
        "#btnFast": 'fast',
    },
    //player的方法
    init: () => {
        player.ui.demo2.innerText = string.substring(0, player.n);
        player.ui.demo.innerHTML = string.substring(0, player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key];
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id);
            return
        }
        player.ui.demo2.innerHTML = string.substring(0, player.n);
        player.ui.demo.innerText = string.substring(0, player.n);
        player.ui.demo.scrollTo(0, player.ui.demo.scrollHeight);
    },
    play: () => {
        player.id = setInterval(player.run, player.time);
    },
    pause: () => {
        window.clearInterval(player.id);
    },
    slow: () => {
        player.pause();
        player.time = 300;
        player.play();
    },
    normal: () => {
        player.pause();
        player.time = 100;
        player.play();
    },
    fast: () => {
        player.pause();
        player.time = 0;
        player.play();
    },
};

player.init();


