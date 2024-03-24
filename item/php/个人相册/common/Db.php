<?php
class Db
{
    public $host;
    public $dbname;
    public $username;
    public $password;
    public $pdo;

    public function __construct($info = [])
    {
        //$this->host=isset($info["host"])?$info["host"]:"localhost"
        $this->host = $info["host"] ?? "localhost";
        $this->dbname = $info["dbname"] ?? "photo";
        $this->username = $info["username"] ?? "root";
        $this->password = $info["password"] ?? "";

        //数据源字符串
        $dsn = "mysql:host=$this->host;dbname=$this->dbname;charset=utf8";
        //使用POD对象来创建一个pdo的连接对象实例
        $this->pdo = new PDO($dsn, $this->username, $this->password);
        //设置显示详细错误信息
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);
    }

    //增加，修改，删除语句
    public function exec($sql, $params)
    {
        $stmt = $this->pdo->prepare($sql);//预处理
        $stmt->execute($params);//真正执行
        if ($this->pdo->lastInsertId()) {
            return $this->pdo->lastInsertId();
        }
        return true;
    }

    //执行查询的语句
    public function query($sql, $params)
    {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        if ($stmt->rowCount()) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        return false;
    }
}
