window.onload = function () {
    let timer = null;

    const containerEl = document.querySelector(".container");
    const ulEl = document.querySelector(".list");
    const view = document.querySelector(".view");

    let len = ulEl.offsetWidth;
    let x = 0;
    let speed = 0.5;
    containerEl.onmouseenter = function () {
        speed = 0.2;
    }
    containerEl.onmouseleave = function () {
        speed = 0.5;
    }

    function animationStart() {
        timer = setInterval(() => {
            x += speed;
            if (x > len) {
                x = 0;
            }
            view.style = `will-change:transform; transform:translateX(${-x}px)`;
        });
    }

    animationStart();

    document.addEventListener("visibilitychange" = function(){
        if(document.visibilityState === "hidden"){
            clearInterval(timer);
        }
        else{
            animationStart();
        }
    })
}