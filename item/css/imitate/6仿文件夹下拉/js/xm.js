
$(function(){
    $("#folioModal").modal("show");//模态框初始化就显示了

    getFolioToParentDir(0,$("#folioModalBody .folioAll"));//初始化时得到根目录下的文件夹

    var $div =$("#folioModalBody>div:eq(0)");
    $div.on('click',"div.p:not(.now)",function(){
        $("div.p").removeClass("active-p").css("border-color","rgba(0,0,0,0)");
        $(this).addClass("active-p").css("border-color","#9acdfd");

        var $fa1=$(this).find(".fa1:eq(0)");
        if($fa1.hasClass("fa-plus-square-o")){
            $fa1.addClass("fa-minus-square-o").removeClass("fa-plus-square-o fa-spinner");
            //$fa1.parents(".p").siblings(".childrenDiv").show();
            $fa1.siblings(".fa2").removeClass("fa-folder").addClass("fa-folder-open");
            if($(this).parent().hasClass("childrenDiv"))//多做一步优化 - 得到该文件夹的子文件夹
                getFolioToParentDir($fa1.attr("data-folioId"),$fa1.closest(".childrenDiv"));
        }else if($fa1.hasClass("fa-minus-square-o")){
            $fa1.addClass("fa-plus-square-o").removeClass("fa-minus-square-o fa-spinner");
            $fa1.parents(".p").siblings(".childrenDiv").hide();
            $fa1.siblings(".fa2").removeClass("fa-folder-open").addClass("fa-folder");
        }
    }).end().on('click','.fa1',function(){

    });
    //创建文件夹 操作
    //记得保存到数据库还要刷新，新增好的文件夹是使用jq动态创建节点实现的
    $("#creatFolio").click(function(){
        var $active=$(".active-p");
        var parentDir=parseInt($active.parent().attr("data-parentDir"))+1;

        var $children=$('<div class="childrenDiv new"><div class="p now">'+
            '<i class="fa fa1"></i> <i class="fa fa2 fa-folder"></i>'+
            ' <input type="text" name="fileName"><span class="text-center spanOption ok">√</span>'+
            '<span class="text-center spanOption toHide">×</span>'+
            '</div></div>');
        $children.find(".p").css("padding-left",parentDir*20+"px");
        $children.find(".toHide").on('click',function(){
            $children.remove();
            /*if($active.find(".childrenDiv").length==0){
             $active.find(".fa1").removeClass("fa-plus-square-o fa-minus-square-o fa-spinner")
             .end().find(".fa2").removeClass("fa-folder-open").addClass("fa-folder");
             }//多余的*/
        }).end().find(".ok").on('click',function(){
            var $fileName = $children.find("input[name=fileName]").val();
            if ($fileName.trim().length == 0) {//确定创建文件夹
                alert("文件名不能为空");
            } else {
                //ajax在这里执行 - 新增操作
                var res = {msg:"新增成功","status":200};//模拟ajax返回为新增成功的结果
                /*$active.removeClass("active-p");//多余的
                 $children.find("[name=fileName],span").remove()//多余的
                 .end().find(".p").append('<span>'+$fileName+'</span>')//多余的
                 .end().find(".p.now").removeClass("now").addClass("active-p")//多余的
                 .end().removeClass("new");//多余的*/
                if(res.status==200){
                    $active.find(".fa1").removeClass("fa-plus-square-o fa-spinner").addClass("fa-minus-square-o")
                        .end().find(".fa2").removeClass("fa-folder").addClass("fa-folder-open");
                    getFolioToParentDir($active.find(".fa1").attr("data-folioId"),$active.parent());
                }
            }
        });
        //var $oldChildrenDiv=$(".childrenDiv.new");
        /*if($oldChildrenDiv.siblings(".childrenDiv").length==0){
         $oldChildrenDiv.parent().find(".fa1").removeClass("fa-plus-square-o fa-minus-square-o fa-spinner")
         .end().find(".fa2").removeClass("fa-folder-open").addClass("fa-folder");
         }*/
        //$oldChildrenDiv.remove();
        $active.parent().append($children).find("[name=fileName]").focus();
    });
});

//更具文件当前文件夹的id得到该文件夹的子文件
//参数1：父文件Id 参数2：父文件夹节点
function getFolioToParentDir(folioId,$el){
    $el.find(".childrenDiv").remove();
    var dir = parseInt($el.attr("data-parentDir"))+1;//第几个级别

    var tarClazz=""; // 这个变量还没有用得上
    if($el.find(".fa1").hasClass("fa-plus-square-o")){
        tarClazz="fa-plus-square-o";
    }else if($el.find(".fa1").hasClass("fa-minus-square-o")){
        tarClazz="fa-minus-square-o";
    }
    var folios = getChildren(folioId); ///模拟ajax数据数据
    $.each(folios,function(i,obj){
        var clazz = obj.children>0?'fa-plus-square-o':'';
        var $children=$('<div class="childrenDiv" data-parentDir="'+dir+'"><div class="p">'+
            '<i class="fa fa1 '+clazz+'" data-folioId="'+obj.id+'"></i> <i class="fa fa2 fa-folder"></i>'+
            '<span>'+obj.folioName+'</span>'+
            '</div></div>');
        $children.find(".p").css("padding-left",dir*20+"px");
        $el.append($children);
    });
}


/*得到一个文件夹下的子文件 --- 模拟ajax数据*/
function getChildren(folioId){
    var arrParO = [
        {"id":1,"folioName":"文件夹A","parentDir":0,"children":2},
        {"id":7,"folioName":"文件夹B","parentDir":0,"children":0},
        {"id":5,"folioName":"文件夹C","parentDir":0,"children":0},
        {"id":2,"folioName":"文件夹D","parentDir":0,"children":2}
    ];
    var arrPar1 = [
        {"id":3,"folioName":"文件夹E","parentDir":1,"children":1},
        {"id":6,"folioName":"文件夹F","parentDir":1,"children":0}
    ];
    var arrPar3 = [
        {"id":8,"folioName":"文件夹G","parentDir":3,"children":0}
    ];
    var arrPar2 = [
        {"id":4,"folioName":"文件夹H","parentDir":2,"children":1},
        {"id":9,"folioName":"文件夹I","parentDir":2,"children":0}
    ];
    var arrPar4 = [
        {"id":10,"folioName":"文件夹K","parentDir":4,"children":0}
    ];
    if(folioId>4)
        return [];
    else if(folioId==0)
        return arrParO;
    else if(folioId==1)
        return arrPar1;
    else if(folioId==2)
        return arrPar2;
    else if(folioId==3)
        return arrPar3;
    else if(folioId==4)
        return arrPar4;
}