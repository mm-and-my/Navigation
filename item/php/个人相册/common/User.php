<?php
require "Db.php";

class User
{
    //设置成员属性
    private $username;
    private $password;
    private $wx;
    private $phone;
    private $db;

//构造函数，初始化函数属性
    public function __construct($users)
    {
        $this->username = $users["username"] ?? "";
        $this->password = $users["password"] ?? "";
        $this->wx = $users["wx"] ?? "";
        $this->phone = $users["phone"] ?? "";
        $this->db = new Db();
    }
//注册用户的方法
    public function addUser()
    {
        $sql = "insert into users (username,password,wx,phone) values (?,?,?,?)";
        $params = [$this->username, $this->password, $this->wx, $this->phone];
        return $this->db->exec($sql, $params);
    }
//查询用户信息的方法
    public function getUserInfo()
    {
        $sql = "select * from users where username =?";
        $params = [$this->username];
        return $this->db->query($sql, $params);
    }

//修改个人资料
    public function updataUserInfo($newpwd=null)
    {
        if($newpwd==null){
            $sql = "update users set wx=?,phone=? where username=? ";
            $params = [$this->wx,$this->phone,$this->username];
        }
        else{
            $sql = "update users set password=? where username=? ";
            $params = [$newpwd,$this->username];
        }
        return $this->db->exec($sql, $params);
    }





}
