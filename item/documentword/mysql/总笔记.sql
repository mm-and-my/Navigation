--创建并连接数据库
cd C:\xampp\mysql\bin
--登录账号密码
--学校密码123456，自己电脑空白
mysql -u root -p
--创建数据库(mydb为自定义数据库名称)
create databases mydb;
--查看数据库
show databases;
--查看刚刚创建的新的数据库
show CREATE DATABASE  mydb;
--选择数据库
USE mydb;
--删除数据库
DROP DATABASE mydb;
--查看数据表
show tables;
--创建数据表(goods为数据表名称)
--varchar()括号内数字为可输入字符串的长度
CREATE TABLE goods(
id INT comment '编号',
name VARCHAR(32) comment '商品名',
);
--查看数据表详细内容
SELECT * FROM goods;

--查看表结构
DESC goods;

--创建表

CREATE TABLE students(
sno CHAR(7) PRIMARY KEY comment '学号',
sname VARCHAR(8) DEFAULT '谢明益' comment '姓名'
) engine=innodb DEFAULT charset = utf8;

--添加一条数据
INSERT INTO students VALUES
('2023001','谢明益');

--添加多条数据
INSERT INTO students VALUES
('2023002','李李'),
('2023003','红红'),
('2023004','明明');
--只查看数据表编号为u004的详细信息
SELECT * FROM USER WHERE sno = 'u004';

--修改u004的会员信息
UPDATE USER SET svip = 1000 WHERE sno = 'u004';

--删除表数据信息
DELETE FROM user WHERE sno = 'u005';

--UNIQUE不能重复，同PRIMARY KEY唯一标识一样，效果较弱一点
--auto_increment 未填写时自动增长下一位
--NOT NULL非空
--ENUM限制
--timestamp时间格式，精确小时分钟
--CURRENT_TIMESTAMP默认现在时间
--TINYINT类型，限制长度
--unsigned不能为负数
CREATE TABLE USER(
id INT unsigned PRIMARY KEY auto_increment comment '用户id',
usname VARCHAR(20) UNIQUE NOT NULL comment '用户名',
usphone CHAR(11) NOT NULL comment '手机号码',
ussex ENUM('男','女','保密') NOT NULL comment '性别',
ustime timestamp DEFAULT CURRENT_TIMESTAMP comment '注册时间',
usvip TINYINT unsigned NOT NULL comment '会员等级'
)engine=innodb DEFAULT charset = utf8;

--now()现在时间
INSERT INTO user VALUES
('01','小明','15207682657','男',now(),99),
('02','小红','17818523390','女',now(),11),
('03','小绿','13421056635','保密','2023-09-21 08:54:11',9),
('04','小黄','13076492888','男','2023-09-21 08:54:11',66),
('05','小天','15820140691','女','2023-09-21 08:52:22',77);

--auto_increment自动增长
--TINYINT比int更小一点的整数
CREATE TABLE Hero(
Hero_id INT PRIMARY KEY auto_increment comment '英雄编号',
Hero_name VARCHAR(12) NOT NULL comment '英雄姓名',
Hero_gender enum('男','女') comment '性别',
Hero_age TINYINT comment '年龄',
Hero_honor VARCHAR(20) comment '获得荣誉'
)engine=innodb DEFAULT charset = utf8;

INSERT INTO hero VALUES
(1,'钟南山','男',86,'共和国勋章'),
(2,'张伯礼','男',74,'人民英雄'),
(3,'张定宇','男',59,'人民英雄'),
(4,'陈薇','女',56,'人民英雄');

--查询表中所有抗疫英雄的详细信息。
SELECT * FROM hero;

--查询表中获得“共和国勋章”荣誉的抗疫英雄详细信息。
SELECT * FROM hero WHERE Hero_honor = '共和国勋章';

--查询表中年龄超过60岁的抗疫英雄姓名和年龄。
--SELECT Hero_name,Hero_age  FROM hero WHERE Hero_age >= '60';
SELECT Hero_name,Hero_age  FROM hero WHERE Hero_age >60;

--查询表中最大年龄的抗疫英雄
--全部信息
SELECT * FROM hero WHERE Hero_age = (SELECT max(Hero_age) FROM Hero);
--单独姓名
SELECT Hero_name FROM hero WHERE Hero_age = (SELECT max(Hero_age) FROM Hero);

--查询表中获得“人民英雄”国家荣誉称号的抗疫英雄人数
--*代表全部
SELECT COUNT(*) FROM hero WHERE Hero_honor = '人民英雄';


--查询年龄的最大值
SELECT max(Hero_age) FROM Hero；--86


-- 查询Goods（商品信息表）中所有的商品编号，名称，价格和销售数量。
SELECT gdCode AS 商品编号,gdName AS 商品名称,gdPrice AS 商品价格,gdSaleQty AS 销售数量 FROM goods;

-- 查询Goods中每件商品的销售总价，其中销售总价=销售数量*价格，显示商品名称和销售总价。
SELECT gdName AS 商品名称,gdPrice*gdSaleQty AS 销售总价 FROM goods;

-- 查询Users（用户信息表）中，用户名和年龄。
SELECT uName AS 用户名,YEAR(NOW())-YEAR(uBirth) AS 年龄 FROM users;

-- 查询Goods表中的商品名称，价格和所处城市，结果集中各列的标题指定为商品名，价格，城市。
SELECT gdName AS 商品名称,gdPrice AS 商品价格,gdCity AS 所处城市 FROM goods;

-- 查询Users表中uID为8的用户姓名
SELECT uName AS 用户姓名 FROM users WHERE uId = 8;

-- 查询Users表中2000年后出生的姓名，电话号码，出生年月。
SELECT uName AS 姓名,uPhone AS 电话号码, uBirth AS 出生日期 FROM users WHERE uBirth>=2000-1-1;

-- 查询Users表中2000年后出生的，且性别为“男”的用户姓名，电话号码，出生年月。
SELECT  uName AS 姓名,uPhone AS 电话号码, uBirth AS 出生日期 FROM Users WHERE uBirth>=2000-1-1 AND uSex='男';

-- 查询Goods表中gdPriced不大于50的商品名称,商品价格
SELECT gdName AS 商品名称 ,gdPrice AS 商品价格 FROM goods WHERE gdPrice < 50;

-- 查询Goods表中gdCity值为“长沙或“西安”，且gdPriced小于等于50的商品名称,商品价格。
SELECT gdName AS 商品名称 ,gdPrice AS 商品价格 FROM goods WHERE  gdPrice<=50  AND  (gdCity='长沙' OR gdCity='西安' );

-- 查询Goods表中gdPriced在100到500元的商品名称,商品价格
SELECT gdName AS 商品名称 ,gdPrice AS 商品价格 FROM goods WHERE gdPrice BETWEEN 100 AND 500;

-- 查询Goods表中gdCity为长沙、西安、上海三个城市的商品名称,商品价格
SELECT gdName AS 商品名称 ,gdPrice AS 商品价格  FROM goods WHERE gdcity IN('长沙','西安','上海');

-- 查询Users表中gdName为“李”开头的用户姓名、性别和手机号
SELECT uName AS 用户姓名,usex AS 性别,uPhone AS 手机号 FROM users WHERE uName LIKE '李%';

-- 查询Users表中gdName第2个字为“湘”的用户姓名、性别和手机号
SELECT uName AS 用户姓名,usex AS 性别,uPhone AS 手机号 FROM users WHERE uName LIKE '_湘%';

-- 查询Goods表中gdName以“华为P9_”开头的gdCode
SELECT gdCode FROM goods WHERE gdName LIKE '华为P9\_%';

-- 查询Users表中uPhone以“5”结尾用户的姓名，性别和电话
SELECT uName AS 用户姓名,usex AS 性别,uPhone AS 手机号 FROM users WHERE uphone REGEXP '5$'; 

-- 查询Users表中uPhone以“16,17,18”开头用户的姓名，性别和电话
SELECT uName AS 用户姓名,usex AS 性别,uPhone AS 手机号 FROM users WHERE uphone REGEXP '^16|17|18';

-- 查询Users表中uImage为空的用户姓名和性别
SELECT uName AS 用户姓名,usex AS 性别 FROM users WHERE uimage IS NULL;

-- 查询Goods表中gdPrice大于200的商品来源哪些城市
SELECT gdname AS 商品名称,gdCity AS 来源城市 FROM goods WHERE gdPrice >200;

-- 查询Goods表tID为1的商品编号、名称和价格，并按价格升序排列
SELECT gdCode AS 商品编号 ,gdName AS 商品名称,gdPrice AS 商品价格 FROM goods WHERE tID=1 ORDER BY gdPrice; 

-- 查询Goods表tID为1的商品编号、名称、价格和销售量，并先按销售量降序，再价格升序排列
SELECT gdCode AS 商品编号 ,gdName AS 商品名称,gdPrice AS 商品价格,gdSaleQty AS 销售量 FROM goods WHERE tID=1 ORDER BY gdSaleQty DESC,gdPrice; 

-- 查询Goods表前3行记录的商品编号、名称和价格。
SELECT gdCode AS 商品编号,gdName AS 商品名称,gdPrice AS 商品价格 FROM goods LIMIT 3; 

-- 查询Goods表，统计所有商品的总销售量。
SELECT SUM(gdSaleQty) FROM goods; 

-- 查询Goods表，显示商品的最高价格。
SELECT MAX(gdprice) FROM goods;

-- 查询Orders表，显示购买过商品的用户人数。
SELECT COUNT(DISTINCT uID) FROM orders;

-- 查询Users表，按uCity列进行分组
SELECT uID,uName,uSex,uCity FROM users GROUP BY uCity;

-- 查询Users表，统计各城市的用户人数。
SELECT uCity,COUNT(*) FROM users GROUP BY uCity;  

-- 查询Users表，将同一城市的uID值用逗号“,”连接起来，列名为uIDs。
SELECT uCity,GROUP_CONCAT(uID) AS uIDs FROM users GROUP BY uCity;  

-- 查询Users表，将同一城市的uID值用下划线“_”连接起来，列名为uIDs。
SELECT uCity,GROUP_CONCAT(uid ORDER BY uid SEPARATOR '_')  AS uids FROM users GROUP BY ucity;

-- 查询Users表，统计“上海”和“长沙”两地用户人数。
SELECT uCity,COUNT(*) FROM users WHERE uCity IN ('长沙','上海') GROUP BY uCity WITH ROLLUP; 

-- 查询Users表，统计各城市的用户人数，显示人数在3人以上的城市。
SELECT uCity,COUNT(*) FROM users GROUP BY uCity HAVING COUNT(*)>=3;


-- 查询有考试成绩的课程名称
SELECT DISTINCT 课程名称 FROM score WHERE 成绩 IS NOT NULL;

--  查询汉族的男生信息
SELECT * FROM student WHERE 民族 = '汉' AND 性别 = '男';

-- 查询山西或者广西学生的姓名、性别和年龄，显示列名分别为“姓名”、“性别”和“年龄”
SELECT 姓名,性别,YEAR(NOW())-YEAR(出生日期) AS 年龄 FROM student WHERE (地区='山西' OR 地区='广西');

-- 查询考试成绩在60~70分的学生学号和成绩
SELECT 学号,成绩 FROM score WHERE 成绩 BETWEEN 60 AND 70;


-- 1查询所有学生的基本信息、所有课程的基本信息和所有学生的成绩信息（用三条SQL语句）
SELECT * FROM student;
SELECT * FROM course;
SELECT * FROM score;

-- 2查询所有学生的学号、姓名、性别和出生日期
SELECT 学号,姓名,性别, 出生日期 FROM student;

-- 3查询所有课程的课程名称
SELECT DISTINCT 课程名称 FROM course;

-- 4查询前10门课程的课号及课程名称
SELECT 课号,课程名称 FROM course LIMIT 10;

-- 5查询所有学生的姓名及年龄
SELECT 姓名,YEAR(now())-YEAR(出生日期) AS 年龄 FROM student;

-- 6查询所有年龄大于18岁的女生的学号和姓名
SELECT 姓名,学号 FROM student WHERE YEAR(NOW())-YEAR(出生日期)>18 AND 性别='女';

-- 7查询所有男生的信息
SELECT * FROM student WHERE 性别='男';

-- 8查询所有任课教师的姓名和所在系别
SELECT 教师姓名,所在系别 FROM teacher;

-- 9查询“电子商务”专业的学生姓名、性别和出生日期
SELECT 姓名, 性别,出生日期 FROM student WHERE 专业='电子商务';

-- 10查询Student表中的所有系名
SELECT DISTINCT 系名 FROM student;

-- 11查询“C01”课程的开课学期
SELECT 开课学期 FROM teaching WHERE 序号='C01';

-- 12查询成绩在80～90分之间的学生学号及课号
SELECT 学生学号,课号 FROM score WHERE 成绩 BETWEEN 80 AND 90;

-- 13查询在1970年1月1日之前出生的男教师信息
SELECT * FROM teacher WHERE 性别='男' AND 出生日期<'1970-01-01';

-- 14输出有成绩的学生学号
SELECT 学生学号 FROM score WHERE 成绩 IS NOT NULL;

-- 15查询所有姓“刘”的学生信息
SELECT * FROM student WHERE 姓名 LIKE '%刘%';

-- 16查询生源地不是山东省的学生信息
SELECT * FROM student WHERE 生源地 NOT LIKE '%山东省%';

-- 17查询成绩为79分、89分或99分的记录
SELECT * FROM score WHERE 成绩 = 79 OR 成绩= 89 OR 成绩= 99;

-- 18查询名字中第二个字是“小”字的男生的学生姓名和地址
SELECT 姓名,地址 FROM student WHERE sname 姓名 '_小%' AND 性别 = '男';

-- 19查询名称以“计算机”开头的课程名称
SELECT 课程名称 FROM course WHERE 课程名称 LIKE '^计算机';

-- 20查询计算机工程系和软件工程系的学生信息
SELECT * FROM student WHERE 系别='计算机工程系' OR 系别='软件工程系';

















