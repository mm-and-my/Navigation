<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>photo</title>
</head>

<body>
    <form action="" method="post" enctype="multipart/form-data" id="form_1">
        <p>请选择要上传的图片:<input type="file" name="photo[]" id="photo" accept=".jpg,.gif,.png" multiple></p>
        <p><input type="button" value="开始上传" id="btn"></p>
    </form>
    <!-- <img src="" alt="" id="pic" width="200"> -->
    <div id="pic"></div>
    <a href="xiang.php">查看图片</a>
</body>
<script src="./js/jquery-3.7.0.min.js"></script>
<script>
    $("#photo").change(function() {
        var t = document.querySelector("#photo").files;
        var str = "";
        for (i = 0; i < t.length; i++) {
            str += `<img src="${window.URL.createObjectURL(t[i])}" alt="" id="pic" width="200">`;
        }
        document.querySelector("#pic").innerHTML = str;
        // document.querySelector("#pic").src = window.URL.createObjectURL(t);
    });

    $("#btn").click(function() {
        $("#btn").prop("disabled", "disabled");
        $("#btn").val("图片上传中");
        var fd = new FormData($("#form_1")[0]);
        $.ajax({
            url: "upload.php",
            type: "post",
            dataType: "json",
            data: fd,
            cache: false,
            processData: false,
            contentType: false,
            success: function(e) {
                console.log(e);
                alert(e.message);
                $("#photo").val("");
                // $("#pic").prop("src", "");
                $("#pic").html();
                $("#btn").prop("disabled", "");
                $("#btn").val("开始上传");
            }
        });
    });
</script>

</html>