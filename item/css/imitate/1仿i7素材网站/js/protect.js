document.onkeydown=function(){
    var e = window.event||arguments[0];
    if(e.keyCode==123){
    	alert('前端元素www.eleui.cn');
            return false;
    }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
    	alert('前端元素www.eleui.cn');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==85)){
            alert('前端元素www.eleui.cn');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==83)){
           alert('前端元素www.eleui.cn');
           return false;
    }
}
document.oncontextmenu=function(){
	alert('前端元素www.eleui.cn');
    return false;
}