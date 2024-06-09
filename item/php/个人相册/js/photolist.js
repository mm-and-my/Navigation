$(".del").click(function() {
    if (confirm("是否要删除")) {
        let id = $(this).data("index");
        let that = $(this);
        $.post("configPhoto.php", {
            id: id,
            kind: "delPhoto"
        }, function(e) {
            console.log(e);
            alert(e.message);
            if (e.status == "success") {
                that.parent().remove();
            }
        }, "json");
    }
});