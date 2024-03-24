let imgSrc = null;
let originalEl = null;
let flag = true;
//点击图片函数
document.querySelector('.list').onclick = function (e) {
    originalEl = e.target;
    imgSrc = originalEl.cloneNode(true);
    originalEl.style.opacity = 0;
    openModal();
};
//打开遮罩
function openModal() {
    //添加遮罩
    const modalEl = document.createElement('div');
    modalEl.classList.add('modal');
    document.body.appendChild(modalEl);

    //添加遮罩内图片
    const { top, left } = originalEl.getBoundingClientRect();
    changeElStyle(imgSrc, [`left:${left}px`, `top:${top}px`]);
    modalEl.appendChild(imgSrc);
    const modalClick = function () {
        if (flag) {
            const { top, left } = originalEl.getBoundingClientRect();
            changeElStyle(imgSrc, ['transition:all .3s', `width:${originalEl.offsetWidth}px`, `transform:scale${0}`, `left:${left}px`, `top:${top}px`]);
            setTimeout(() => {
                document.body.removeChild(this);
                originalEl.style.opacity = 1;
                modalEl.removeEventListener('click', modalClick);
            }, 300);
        }
    }
    //遮罩点击关闭
    modalEl.addEventListener('click', modalClick);

    //移动图片位置
    //窗口中心点坐标
    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const scaleNum = scalcScale();//缩放系数
    //目标宽高
    const elTargeWH = { w: originalEl.offsetWidth * scaleNum, h: originalEl.offsetHeight * scaleNum };

    const imgRect = imgSrc.getBoundingClientRect();
    const xTarget = center.x - elTargeWH.w / 2;//目标左边位置
    const yTarget = center.y - elTargeWH.h / 2;//目标上边位置

    flag = false;//表示正在动画中
    changeElStyle(imgSrc, ['transition:all .3s', `width:${elTargeWH.w}px`, `left:${xTarget}px`, `top:${yTarget}px`])

    //动画结束
    setTimeout(() => {
        flag = true;
    }, 300);

    //滚动事件
    let scale = 1;
    modalEl.addEventListener('wheel', function (e) {
        e.preventDefault();
        const origin = `${e.offsetX}px ${e.offsetY}px`;
        if (e.deltaY < 0) {
            //放大
            scale += 0.1;
            if (scale > 4) {
                scale = 4;
            }
        }
        else {
            //缩小
            scale -= 0.1;
            if (scale < 0.1) {
                scale = 0.1;
            }
        }
        console.log(scale);
        changeElStyle(imgSrc, ['transition:all .3s', `transform-origin:${origin}`, `transform:scale(${scale})`])
    })
};
//改变指定节点样式
function changeElStyle(el, styles) {
    const cssTextArr = el.style.cssText.split(';');
    cssTextArr.pop();
    el.style.cssText = cssTextArr.concat(styles).join(';') + ';';
};
//计算缩放系数
function scalcScale() {
    const imgWigth = originalEl.offsetWidth;
    const imgHeight = originalEl.offsetHeight;
    const winWigth = window.innerWidth;
    const winHeight = window.innerHeight;

    //缩放到窗口一半的宽度
    let scale = (winWigth / 2) / imgWigth;
    //高度超出了，按高度的计算
    if (imgHeight * scalcScale >= winHeight) {
        scale = (winHeight / 2) / imgHeight;
    }
    return scale /2;
};