<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xiang</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
        }

        .box>ul>li {
            height: 200px;
            list-style: none;
            float: left;
            text-align: center;
            margin-left: 20px;
            margin-bottom: 40px;
        }

        .box>ul>li>img {
            height: 100%;
            border-radius: 20px;
            display: block;
        }

        .box>ul>li>a {
            text-decoration: none;

        }

        .box::after {
            content: "";
            display: block;
            clear: both;
        }

        #page {
            text-align: center;
        }

        #page>a {
            width: 30px;
            height: 30px;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 30px;
            text-decoration: none;
            display: inline-block;
        }
    </style>
</head>

<body>
    <a href="photo.php">上传图片</a>


    <div class="box">
        <ul>
            <?php
            $a = scandir("./thumb/");
            rsort($a);

            foreach ($a as $value) {
                if (is_file("./thumb/$value")) {
                    $pics[] = $value;
                }
            }
            if (empty($pics)) {
                die("未上传图片");
            }
            $pagesize = 6;
            $total = count($pics);
            $pagecount = ceil($total / $pagesize);
            $page = $_GET["page"] ?? 1;
            $showpage = array_slice($pics, ($page - 1) * $pagesize, $pagesize);
            foreach ($showpage as $value) {
                // if (is_file("./photo/$value")) {
            ?>
                    <li><img src="./thumb/<?php echo $value; ?>" alt="">
                        <a href="./upload/<?php echo $value; ?>" target="_blank">查看&nbsp;</a>
                        <a href="#" class="del" data-delete="<?php echo $value; ?>">删除</a>
                    </li>
            <?php
                // }
            }
            ?>


        </ul>
    </div>
    <div id="page">
        <?php
        for ($i = 1; $i <= $pagecount; $i++) {
            echo "<a href='xiang.php?page=$i'>$i</a>";
        }
        ?>
    </div>
    <script src="./js/jquery-3.7.0.min.js"></script>
    <script>
        $(".del").click(function() {
            if (confirm("是否确认删除")) {
                var aaa = $(this);
                $.post("del.php", {
                    fname: $(this).data("delete")
                }, function(e) {
                    if (e.message == "删除成功") {
                        aaa.parent().remove();
                    }
                    alert(e.message);
                }, "json");
            }
        });
    </script>


</body>

</html>