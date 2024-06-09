<?php
require "Db.php";

class Photo
{
    //设置成员属性
    private $id;
    private $photoTitle;
    private $photoDesc;
    private $photoSrc;
    private $createTime;
    private $username;
    private $db;

    //构造函数，初始化函数属性
    public function __construct($photoInfo = [])
    {
        $this->id = $photoInfo["id"] ?? "";
        $this->photoTitle = $photoInfo["photoTitle"] ?? "";
        $this->photoDesc = $photoInfo["photoDesc"] ?? "";
        $this->photoSrc = $photoInfo["photoSrc"] ?? "";
        $this->createTime = $photoInfo["createTime"] ?? "";
        $this->username = $photoInfo["username"] ?? "";
        $this->db = new db();
    }

    //添加相片的方法
    public function addPhoto()
    {
        $sql = "insert into photo (photoTitle,photoDesc,photoSrc,createTime,username) value (?,?,?,now(),?)";
        $params = [$this->photoTitle, $this->photoDesc, $this->photoSrc, $this->username];
        return $this->db->exec($sql, $params);
    }

    //根据id来获取相片信息的方法
    public function getPhotoById()
    {
        $sql = "select * from photo where id=?";
        $params = [$this->id];
        return $this->db->query($sql, $params);
    }

    //根据页码显示读取记录
    public function getPhotoList($page = 1, $pageSize = 6)
    {
        $sql = "select * from photo where username=? order by id desc limit ?,?";
        $params = [$this->username, ($page - 1) * $pageSize, $pageSize];
        return $this->db->query($sql, $params);
    }
    //获取总页数
    public function getPageCount($pageSize = 6)
    {
        $sql = "select count(id) as c from photo where username=?";
        $params = [$this->username];
        $total = $this->db->query($sql, $params);
        return ceil($total[0]["c"] / $pageSize);
    }


    //更新数据表
    public function updataPhoto()
    {
        $sql = "update photo set photoTitle =?,photoDesc=? where id=?";
        $params = [$this->photoTitle, $this->photoDesc, $this->id];
        return $this->db->exec($sql, $params);
    }

    //删除相片
    public function delPhoto()
    {
        $photoInfo = $this->getPhotoById();
        $photoSrc = $photoInfo[0]["photoSrc"];
        $sql = "delete from photo where id=?";
        $params = [$this->id];
        $this->db->exec($sql, $params);
        @unlink("./photo/$photoSrc");
        @unlink("./thumb/$photoSrc");
        return true;
    }
}
