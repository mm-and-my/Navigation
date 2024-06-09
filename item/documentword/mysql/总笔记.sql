--�������������ݿ�
cd C:\xampp\mysql\bin
--��¼�˺�����
--ѧУ����123456���Լ����Կհ�
mysql -u root -p
--�������ݿ�(mydbΪ�Զ������ݿ�����)
create databases mydb;
--�鿴���ݿ�
show databases;
--�鿴�ոմ������µ����ݿ�
show CREATE DATABASE  mydb;
--ѡ�����ݿ�
USE mydb;
--ɾ�����ݿ�
DROP DATABASE mydb;
--�鿴���ݱ�
show tables;
--�������ݱ�(goodsΪ���ݱ�����)
--varchar()����������Ϊ�������ַ����ĳ���
CREATE TABLE goods(
id INT comment '���',
name VARCHAR(32) comment '��Ʒ��',
);
--�鿴���ݱ���ϸ����
SELECT * FROM goods;

--�鿴��ṹ
DESC goods;

--������

CREATE TABLE students(
sno CHAR(7) PRIMARY KEY comment 'ѧ��',
sname VARCHAR(8) DEFAULT 'л����' comment '����'
) engine=innodb DEFAULT charset = utf8;

--���һ������
INSERT INTO students VALUES
('2023001','л����');

--��Ӷ�������
INSERT INTO students VALUES
('2023002','����'),
('2023003','���'),
('2023004','����');
--ֻ�鿴���ݱ���Ϊu004����ϸ��Ϣ
SELECT * FROM USER WHERE sno = 'u004';

--�޸�u004�Ļ�Ա��Ϣ
UPDATE USER SET svip = 1000 WHERE sno = 'u004';

--ɾ����������Ϣ
DELETE FROM user WHERE sno = 'u005';

--UNIQUE�����ظ���ͬPRIMARY KEYΨһ��ʶһ����Ч������һ��
--auto_increment δ��дʱ�Զ�������һλ
--NOT NULL�ǿ�
--ENUM����
--timestampʱ���ʽ����ȷСʱ����
--CURRENT_TIMESTAMPĬ������ʱ��
--TINYINT���ͣ����Ƴ���
--unsigned����Ϊ����
CREATE TABLE USER(
id INT unsigned PRIMARY KEY auto_increment comment '�û�id',
usname VARCHAR(20) UNIQUE NOT NULL comment '�û���',
usphone CHAR(11) NOT NULL comment '�ֻ�����',
ussex ENUM('��','Ů','����') NOT NULL comment '�Ա�',
ustime timestamp DEFAULT CURRENT_TIMESTAMP comment 'ע��ʱ��',
usvip TINYINT unsigned NOT NULL comment '��Ա�ȼ�'
)engine=innodb DEFAULT charset = utf8;

--now()����ʱ��
INSERT INTO user VALUES
('01','С��','15207682657','��',now(),99),
('02','С��','17818523390','Ů',now(),11),
('03','С��','13421056635','����','2023-09-21 08:54:11',9),
('04','С��','13076492888','��','2023-09-21 08:54:11',66),
('05','С��','15820140691','Ů','2023-09-21 08:52:22',77);

--auto_increment�Զ�����
--TINYINT��int��Сһ�������
CREATE TABLE Hero(
Hero_id INT PRIMARY KEY auto_increment comment 'Ӣ�۱��',
Hero_name VARCHAR(12) NOT NULL comment 'Ӣ������',
Hero_gender enum('��','Ů') comment '�Ա�',
Hero_age TINYINT comment '����',
Hero_honor VARCHAR(20) comment '�������'
)engine=innodb DEFAULT charset = utf8;

INSERT INTO hero VALUES
(1,'����ɽ','��',86,'���͹�ѫ��'),
(2,'�Ų���','��',74,'����Ӣ��'),
(3,'�Ŷ���','��',59,'����Ӣ��'),
(4,'��ޱ','Ů',56,'����Ӣ��');

--��ѯ�������п���Ӣ�۵���ϸ��Ϣ��
SELECT * FROM hero;

--��ѯ���л�á����͹�ѫ�¡������Ŀ���Ӣ����ϸ��Ϣ��
SELECT * FROM hero WHERE Hero_honor = '���͹�ѫ��';

--��ѯ�������䳬��60��Ŀ���Ӣ�����������䡣
--SELECT Hero_name,Hero_age  FROM hero WHERE Hero_age >= '60';
SELECT Hero_name,Hero_age  FROM hero WHERE Hero_age >60;

--��ѯ�����������Ŀ���Ӣ��
--ȫ����Ϣ
SELECT * FROM hero WHERE Hero_age = (SELECT max(Hero_age) FROM Hero);
--��������
SELECT Hero_name FROM hero WHERE Hero_age = (SELECT max(Hero_age) FROM Hero);

--��ѯ���л�á�����Ӣ�ۡ����������ƺŵĿ���Ӣ������
--*����ȫ��
SELECT COUNT(*) FROM hero WHERE Hero_honor = '����Ӣ��';


--��ѯ��������ֵ
SELECT max(Hero_age) FROM Hero��--86


-- ��ѯGoods����Ʒ��Ϣ�������е���Ʒ��ţ����ƣ��۸������������
SELECT gdCode AS ��Ʒ���,gdName AS ��Ʒ����,gdPrice AS ��Ʒ�۸�,gdSaleQty AS �������� FROM goods;

-- ��ѯGoods��ÿ����Ʒ�������ܼۣ����������ܼ�=��������*�۸���ʾ��Ʒ���ƺ������ܼۡ�
SELECT gdName AS ��Ʒ����,gdPrice*gdSaleQty AS �����ܼ� FROM goods;

-- ��ѯUsers���û���Ϣ���У��û��������䡣
SELECT uName AS �û���,YEAR(NOW())-YEAR(uBirth) AS ���� FROM users;

-- ��ѯGoods���е���Ʒ���ƣ��۸���������У�������и��еı���ָ��Ϊ��Ʒ�����۸񣬳��С�
SELECT gdName AS ��Ʒ����,gdPrice AS ��Ʒ�۸�,gdCity AS �������� FROM goods;

-- ��ѯUsers����uIDΪ8���û�����
SELECT uName AS �û����� FROM users WHERE uId = 8;

-- ��ѯUsers����2000���������������绰���룬�������¡�
SELECT uName AS ����,uPhone AS �绰����, uBirth AS �������� FROM users WHERE uBirth>=2000-1-1;

-- ��ѯUsers����2000�������ģ����Ա�Ϊ���С����û��������绰���룬�������¡�
SELECT  uName AS ����,uPhone AS �绰����, uBirth AS �������� FROM Users WHERE uBirth>=2000-1-1 AND uSex='��';

-- ��ѯGoods����gdPriced������50����Ʒ����,��Ʒ�۸�
SELECT gdName AS ��Ʒ���� ,gdPrice AS ��Ʒ�۸� FROM goods WHERE gdPrice < 50;

-- ��ѯGoods����gdCityֵΪ����ɳ������������gdPricedС�ڵ���50����Ʒ����,��Ʒ�۸�
SELECT gdName AS ��Ʒ���� ,gdPrice AS ��Ʒ�۸� FROM goods WHERE  gdPrice<=50  AND  (gdCity='��ɳ' OR gdCity='����' );

-- ��ѯGoods����gdPriced��100��500Ԫ����Ʒ����,��Ʒ�۸�
SELECT gdName AS ��Ʒ���� ,gdPrice AS ��Ʒ�۸� FROM goods WHERE gdPrice BETWEEN 100 AND 500;

-- ��ѯGoods����gdCityΪ��ɳ���������Ϻ��������е���Ʒ����,��Ʒ�۸�
SELECT gdName AS ��Ʒ���� ,gdPrice AS ��Ʒ�۸�  FROM goods WHERE gdcity IN('��ɳ','����','�Ϻ�');

-- ��ѯUsers����gdNameΪ�����ͷ���û��������Ա���ֻ���
SELECT uName AS �û�����,usex AS �Ա�,uPhone AS �ֻ��� FROM users WHERE uName LIKE '��%';

-- ��ѯUsers����gdName��2����Ϊ���桱���û��������Ա���ֻ���
SELECT uName AS �û�����,usex AS �Ա�,uPhone AS �ֻ��� FROM users WHERE uName LIKE '_��%';

-- ��ѯGoods����gdName�ԡ���ΪP9_����ͷ��gdCode
SELECT gdCode FROM goods WHERE gdName LIKE '��ΪP9\_%';

-- ��ѯUsers����uPhone�ԡ�5����β�û����������Ա�͵绰
SELECT uName AS �û�����,usex AS �Ա�,uPhone AS �ֻ��� FROM users WHERE uphone REGEXP '5$'; 

-- ��ѯUsers����uPhone�ԡ�16,17,18����ͷ�û����������Ա�͵绰
SELECT uName AS �û�����,usex AS �Ա�,uPhone AS �ֻ��� FROM users WHERE uphone REGEXP '^16|17|18';

-- ��ѯUsers����uImageΪ�յ��û��������Ա�
SELECT uName AS �û�����,usex AS �Ա� FROM users WHERE uimage IS NULL;

-- ��ѯGoods����gdPrice����200����Ʒ��Դ��Щ����
SELECT gdname AS ��Ʒ����,gdCity AS ��Դ���� FROM goods WHERE gdPrice >200;

-- ��ѯGoods��tIDΪ1����Ʒ��š����ƺͼ۸񣬲����۸���������
SELECT gdCode AS ��Ʒ��� ,gdName AS ��Ʒ����,gdPrice AS ��Ʒ�۸� FROM goods WHERE tID=1 ORDER BY gdPrice; 

-- ��ѯGoods��tIDΪ1����Ʒ��š����ơ��۸�������������Ȱ������������ټ۸���������
SELECT gdCode AS ��Ʒ��� ,gdName AS ��Ʒ����,gdPrice AS ��Ʒ�۸�,gdSaleQty AS ������ FROM goods WHERE tID=1 ORDER BY gdSaleQty DESC,gdPrice; 

-- ��ѯGoods��ǰ3�м�¼����Ʒ��š����ƺͼ۸�
SELECT gdCode AS ��Ʒ���,gdName AS ��Ʒ����,gdPrice AS ��Ʒ�۸� FROM goods LIMIT 3; 

-- ��ѯGoods��ͳ��������Ʒ������������
SELECT SUM(gdSaleQty) FROM goods; 

-- ��ѯGoods����ʾ��Ʒ����߼۸�
SELECT MAX(gdprice) FROM goods;

-- ��ѯOrders����ʾ�������Ʒ���û�������
SELECT COUNT(DISTINCT uID) FROM orders;

-- ��ѯUsers����uCity�н��з���
SELECT uID,uName,uSex,uCity FROM users GROUP BY uCity;

-- ��ѯUsers��ͳ�Ƹ����е��û�������
SELECT uCity,COUNT(*) FROM users GROUP BY uCity;  

-- ��ѯUsers����ͬһ���е�uIDֵ�ö��š�,����������������ΪuIDs��
SELECT uCity,GROUP_CONCAT(uID) AS uIDs FROM users GROUP BY uCity;  

-- ��ѯUsers����ͬһ���е�uIDֵ���»��ߡ�_����������������ΪuIDs��
SELECT uCity,GROUP_CONCAT(uid ORDER BY uid SEPARATOR '_')  AS uids FROM users GROUP BY ucity;

-- ��ѯUsers��ͳ�ơ��Ϻ����͡���ɳ�������û�������
SELECT uCity,COUNT(*) FROM users WHERE uCity IN ('��ɳ','�Ϻ�') GROUP BY uCity WITH ROLLUP; 

-- ��ѯUsers��ͳ�Ƹ����е��û���������ʾ������3�����ϵĳ��С�
SELECT uCity,COUNT(*) FROM users GROUP BY uCity HAVING COUNT(*)>=3;


-- ��ѯ�п��Գɼ��Ŀγ�����
SELECT DISTINCT �γ����� FROM score WHERE �ɼ� IS NOT NULL;

--  ��ѯ�����������Ϣ
SELECT * FROM student WHERE ���� = '��' AND �Ա� = '��';

-- ��ѯɽ�����߹���ѧ�����������Ա�����䣬��ʾ�����ֱ�Ϊ�������������Ա𡱺͡����䡱
SELECT ����,�Ա�,YEAR(NOW())-YEAR(��������) AS ���� FROM student WHERE (����='ɽ��' OR ����='����');

-- ��ѯ���Գɼ���60~70�ֵ�ѧ��ѧ�źͳɼ�
SELECT ѧ��,�ɼ� FROM score WHERE �ɼ� BETWEEN 60 AND 70;


-- 1��ѯ����ѧ���Ļ�����Ϣ�����пγ̵Ļ�����Ϣ������ѧ���ĳɼ���Ϣ��������SQL��䣩
SELECT * FROM student;
SELECT * FROM course;
SELECT * FROM score;

-- 2��ѯ����ѧ����ѧ�š��������Ա�ͳ�������
SELECT ѧ��,����,�Ա�, �������� FROM student;

-- 3��ѯ���пγ̵Ŀγ�����
SELECT DISTINCT �γ����� FROM course;

-- 4��ѯǰ10�ſγ̵Ŀκż��γ�����
SELECT �κ�,�γ����� FROM course LIMIT 10;

-- 5��ѯ����ѧ��������������
SELECT ����,YEAR(now())-YEAR(��������) AS ���� FROM student;

-- 6��ѯ�����������18���Ů����ѧ�ź�����
SELECT ����,ѧ�� FROM student WHERE YEAR(NOW())-YEAR(��������)>18 AND �Ա�='Ů';

-- 7��ѯ������������Ϣ
SELECT * FROM student WHERE �Ա�='��';

-- 8��ѯ�����ον�ʦ������������ϵ��
SELECT ��ʦ����,����ϵ�� FROM teacher;

-- 9��ѯ����������רҵ��ѧ���������Ա�ͳ�������
SELECT ����, �Ա�,�������� FROM student WHERE רҵ='��������';

-- 10��ѯStudent���е�����ϵ��
SELECT DISTINCT ϵ�� FROM student;

-- 11��ѯ��C01���γ̵Ŀ���ѧ��
SELECT ����ѧ�� FROM teaching WHERE ���='C01';

-- 12��ѯ�ɼ���80��90��֮���ѧ��ѧ�ż��κ�
SELECT ѧ��ѧ��,�κ� FROM score WHERE �ɼ� BETWEEN 80 AND 90;

-- 13��ѯ��1970��1��1��֮ǰ�������н�ʦ��Ϣ
SELECT * FROM teacher WHERE �Ա�='��' AND ��������<'1970-01-01';

-- 14����гɼ���ѧ��ѧ��
SELECT ѧ��ѧ�� FROM score WHERE �ɼ� IS NOT NULL;

-- 15��ѯ�����ա�������ѧ����Ϣ
SELECT * FROM student WHERE ���� LIKE '%��%';

-- 16��ѯ��Դ�ز���ɽ��ʡ��ѧ����Ϣ
SELECT * FROM student WHERE ��Դ�� NOT LIKE '%ɽ��ʡ%';

-- 17��ѯ�ɼ�Ϊ79�֡�89�ֻ�99�ֵļ�¼
SELECT * FROM score WHERE �ɼ� = 79 OR �ɼ�= 89 OR �ɼ�= 99;

-- 18��ѯ�����еڶ������ǡ�С���ֵ�������ѧ�������͵�ַ
SELECT ����,��ַ FROM student WHERE sname ���� '_С%' AND �Ա� = '��';

-- 19��ѯ�����ԡ����������ͷ�Ŀγ�����
SELECT �γ����� FROM course WHERE �γ����� LIKE '^�����';

-- 20��ѯ���������ϵ���������ϵ��ѧ����Ϣ
SELECT * FROM student WHERE ϵ��='���������ϵ' OR ϵ��='�������ϵ';

















