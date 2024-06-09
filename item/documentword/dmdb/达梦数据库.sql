-- �л�·��
cd /home/dmdba/dmdbms/tool

-- �鿴��ǰ����Ŀ¼
pwd

-- �鿴��ǰĿ¼��Ϣ
ls

-- ������������(toolĿ¼��)
./dbca.sh

-- �л�root�˺�
su -

-- �����˺�
EXIT

-- �����ݿ��������(toolĿ¼��)
./manager


-- �鿴��ǰ���ݿ�״̬
FROM v$instance

--�л������ݿ�����Ŀ¼
cd /home/dmdba/dmdbms/bin

-- �鿴���ݿ������
ll DmS*

-- �鿴���ݿ��Ƿ������У����ݿ��������DMSERVERΪ����
--./DmService���ݿ������ status
./DmServiceDMSERVER status
-- �ر����ݿ�
./DmServiceDMSERVER stop
-- �����ݿ�
./DmServiceDMSERVER start
-- ͼ�λ��򿪹ر����ݿ�(toolĿ¼��)
./deservice.sh

-- ��ѯ����DMDLģʽ��employee���û�testΪ����
-- ȫ�в�ѯ
SELECT * FROM dmdl.employee;
-- ���в�ѯ
SELECT employee_name FROM dmdl.employee;
-- ���в�ѯ
SELECT employee_name,employee_id FROM dmdl.employee;
-- ������ѯ
SELECT employee_name FROM dmdl.employee WHERE employee_id = 1;
-- ȥ�ز�ѯDISTINCT
SELECT DISTINCT employee_id FROM dmdl.employee;

-- ���н�������a
SELECT employee_name AS a FROM dmdl.employee;
--�ȼ��� 
SELECT employee_name a FROM dmdl.employee;

-- ������(||)
SELECT employee_name || '��ID��' || employee_id FROM dmdl.employee;


-- �����ѯorder by��desc����Ĭ�ϣ�asc����ע�����SQL���ľ�β
-- ���� �������ͣ���С���� -- ����ʱ�����ͣ���Զ����
-- ���� �������ͣ��Ӵ�С -- ����ʱ�����ͣ��ӽ���Զ
SELECT employee_salary FROM dmdl.employee ORDER BY salary;
SELECT employee_salary FROM dmdl.employee ORDER BY salary desc;


-- �����ѯgroup by
-- ���麯�������ۺϺ������У����ø���group by���棬�����ж�Ҫ
COUNT ͳ�ƺ��� select COUNT(*) FROM dmdl.employee;
SUM ��� select SUM(salary) FROM dmdl.employee;
MAX ���ֵ select MAX(salary) FROM dmdl.employee;
MIN ��Сֵ select MIN(salary) FROM dmdl.employee;
AVG ƽ��ֵ select AVG(salary) FROM dmdl.employee;
-- ��ÿ�����Ź����ܺ�
select SUM(salary) FROM dmdl.employee GROUP BY department_id;

-- having�ؼ��֣��Ƕ�group�Ľ�һ�����ˣ�û��group byʱ������
-- ��ѯ���Ź����ܺ���15000���ϵ�,��������
select SUM(salary) FROM dmdl.employee 
HAVING SUM(salary) > 15000 
GROUP BY department_id
ORDER BY SUM(salary) DESC;

-- ���˲�ѯ
-- �Ƚ������ 
= ����
>  ����
>=  ���ڵ���
<  С��
<=   С�ڵ���
<> ������

-- in ���б��е�ֵ����ƥ��
-- ��ѯidΪ101��103������
SELECT employee_name FROM dmdl.employee 
WHERE employee_id IN(101,103);

-- likeģ����ѯ
like_  ƥ��һ���ַ�
like%  ƥ�����ַ�
-- ��ѯ�ԡ������ֿ�ͷ������
SELECT employee_name FROM dmdl.employee
LIKE '��%';
-- ��ѯ�ԡ������ֽ�β������
SELECT employee_name FROM dmdl.employee
LIKE '%��';
-- ��ѯ�����������ֵ�����
SELECT employee_name FROM dmdl.employee
LIKE '%��%';
-- ��ѯ�ڶ�����Ϊ��������
SELECT employee_name FROM dmdl.employee
LIKE '_��%';

-- �ǿղ�ѯ is not null
SELECT employee_id FROM dmdl.employee IS NOT NULL;
-- ��ѯ��ֵ
SELECT employee_id FROM dmdl.employee IS NULL;

-- �߼������
-- and ���������������򷵻�����
-- or ����һ����������������
-- not ����Ϊ��ʱ�򷵻�����

-- ��ѯ���ʴ���6000�Ͳ���Ϊ2��Ա������
SELECT employee_name FROM dmdl.employee 
WHERE salary > 6000 
AND department_id = 2;
-- ��ѯ���ʴ���6000����Ϊ2��Ա��
SELECT employee_name FROM dmdl.employee 
WHERE salary > 6000 
OR department_id = 2;

-- ���Ӳ�ѯ������
-- �����ѯ�����⣩CROSS JOIN
SELECT a.NAME,b.NAME 
FROM dmdl.table1 a CROSS JOIN dmdl.table2 b;
-- �ȼ���
SELECT a.NAME,b.NAME 
FROM dmdl.table1 a,dmdl.table2 b;

-- ��Ȼ���Ӳ�ѯNATURAL JOIN,����Ҫ������ͬ������������ͬ����������
select a.NAME,b.NAME 
FROM dmhr.table1 a NATURAL JOIN dmhr.table2 b;

-- using����������
select a.NAME,b.NAME 
FROM dmhr.table1 a JOIN dmhr.table2 b
using (department_id);

-- on��ѯ���ص㣩
SELECT a.NAME,b.NAME
FROM dmhr.table1 a  JOIN dmhr.table2 b
ON(table1.column_name = table2.column_name);
-- �ȼ���
select a.NAME,b.NAME
FROM dmhr.table1 a ,dmhr.table2 b
where a.DEPARTMENT_ID=b.DEPARTMENT_ID;


-- ���Ӳ�ѯ������
-- �������Ӳ�ѯ
--������߱��ȫ����¼���ұ߱������������ļ�¼��������ľ���null ���档
select a.ID,b.ADDR 
from dmhr.TEST1 a left OUTER join dmhr.test2 
bon a.NAME=b.NAME;
-- �������Ӳ�ѯ
�����ұ߱��ȫ����¼����߱߱������������ļ�¼��������ľ��� null ���档
select a.ID,b.ADDR 
from dmhr.TEST1 a right outer join dmhr.test2 
bon a.NAME=b.NAME;
-- ȫ�����Ӳ�ѯ -- ��������+��������
select a.ID,b.ADDR 
from dmhr.TEST1 a full outer join dmhr.test2 
bon a.NAME=b.NAME;

-- ��ռ����
-- ��ѯ��ռ�
SELECT * FROM dba_tablespaces;

-- �� �� �� �� �� TEST(ʹ��ͼ�λ�)
--�����ļ�/home/dmdba/dmdbms/data/DAMENG/TEST01.DBF,
--��ʼ��СΪ50M��
--�����Զ���չ��ÿ����չ 1M��������չ��1G.
create tablespace "TEST" 
datafile'/home/dmdba/dmdbms/data/DAMENG/TEST01.DBF' 
size 50 
autoextendonnext 1 maxsize 1024 CACHE = NORMAL;

--�鿴��ǰ�û�
SELECT user;
--�鿴��ǰ�û�����
SELECT dba_users;
--USERNAME:�û���
--ACCOUNT_STATUS���û���״̬��open ״̬�����������ݿ�
--LOCK_DATE���û�������ʱ��
--EXPIRY_DATE���೤ʱ����ڣ�����֮���´ε�¼���ݿ�ʱ��Ҫ��������
--DEFAULT_TABLESPACE���û���Ĭ�ϱ�ռ�

-- DM �û�
��ΪԤ�����û����Զ����û���
SYS��ϵͳ�û������ܵ�¼��������ݿ��ֵ����Ϣ��
SYSDBA�����ݿ����Ա
SYSAUDITOR�����ݿ����Ա��������ƹ��򣬲鿴��Ƽ�¼
SYSSSO�����ݿⰲȫԱ��������ȫ����

-- Ȩ��
CREATE table; ������
ALTER database; �޸����ݿ�
CREATE database; �������ݿ�
alert tablespace; �޸ı�ռ�
DROP tablespace; ɾ����ռ�
CREATE user; �����û�
CREATE view; ������ͼ
CREATE procedure; �����洢����
CREATE role; ������ɫ
CREATE schema; ����ģʽ
CREATE index; ��������

-- �����û� DMTEST����ͼ�λ���
--������ Dameng123,
--���û��ڵ�¼ʧ��5 �κ�����3 ���ӣ�
--������ 180 ��֮���Զ����ڡ�
--ӵ�д�����������ͼ������������Ȩ�ޣ�
create user "DMTEST" 
identified by "Dameng123"
limit FAILED_LOGIN_ATTEMPS 5 
PASSWORD_LIFE_TIME 180 
PASSWORD_LOCK_TIME 3;
grant CREATE TABLE,CREATE VIEW,CREATE INDEX to "DMTEST";

--��ɫ��һ��Ҫ��д
--������ɫ ROLE1��
--ӵ�д�����ʹ�����ͼ��Ȩ�ޣ�
--���Բ鿴dmhr.department 
--���Բ鿴dmhr.employee.hire_date
--���Բ鿴dmhr.employee.employee_name
--���Բ鿴���޸�dmhr.employee.email
create role "ROLE1";
grant CREATE TABLE,CREATE VIEW to "ROLE1";
grant SELECT on "DMHR"."DEPARTMENT" to "ROLE1";
grant SELECT("HIRE_DATE") on "DMHR"."EMPLOYEE" to "ROLE1";
grant SELECT("EMPLOYEE_NAME") on "DMHR"."EMPLOYEE" to "ROLE1";
grant SELECT("EMAIL"),UPDATE("EMAIL") on "DMHR"."EMPLOYEE" to"ROLE1";

---�޸��û�TEST������
alter user "TEST" identified by "dameng123";

---����/�����û�TEST
alter USER TEST ACCOUNT LOCK;
alter USER TEST ACCOUNT UNLOCK;

---�޸��û�TEST��Ĭ�ϱ�ռ�Ϊsss
alter user "TEST" default tablespace "SSS";

---�� ROLE1 ��ɫ����� TEST �û�
grant "ROLE1" to "TEST";

---ɾ���û�TEST
drop user "TEST";

-- ��Ҫ��������ģʽ����ı��������ģʽ����
--�л�ģʽΪDMHR
set SCHEMA DMHR;

-- �����ͼ�λ���
-- �Ա���������� insert,update,delete ��һ��Ҫ�ǵ��ύ��
--���ύ���ڰ������ύcommit��

--�������ǿ�Լ��id��
create table 'test'.'TEST1' (id int not null);

-- ΨһԼ��name�У�ͼ�λ���
ΨһԼ��Ҫ������Ψһ������ΨһԼ�����Զ�����Ψһ����
CREATE TABLE 'TEST'.'TEST2'
("ID" INT, "NAME" VARCHAR(50), UNIQUE("NAME")) 
STORAGE(ON "MAIN", CLUSTERBTR) ;

--����Լ�����ؿ�����ͼ�λ���
--����Լ�����Ƿǿ�+Ψһ��һ����ֻ����һ������
CREATE TABLE 'TEST'.'TEST3'
("ID" INTEGER NOT NULL, "NAME" VARCHAR(50), 
NOT CLUSTER PRIMARY KEY("ID")) 
STORAGE(ON "TEST", CLUSTERBTR) ;

--���Լ�����ؿ���
--���Լ��Ҳ�в���Լ������������Լ��
CREATE TABLE 'TEST'.'TEST4'
("ID" INTEGER, "NAME" CHAR(10) NOT NULL, 
NOT CLUSTER PRIMARY KEY("NAME"), FOREIGN KEY("ID") 
REFERENCES "TEST"."TEST3"("ID")) 
STORAGE(ON"TEST", CLUSTERBTR) ;

-- �������Լ����ϵ�ı�
--�ڲ�������ʱ��Ҫ�Ȳ�������Լ�����ڱ�����ݣ�
--�ٲ������Լ�����ڱ�����ݣ�
--��ɾ������ʱ��
--Ҫ��ɾ�����Լ�����ڱ�����ݣ�
--��ɾ������Լ�����ڱ�����ݡ�


-- ���Լ��
CREATE TABLE "TEST"."TEST5"
("ID" INT, CHECK(ID > 8)) 
STORAGE(ON "TEST", CLUSTERBTR) ;

-- ��������
update test.test2 set name='FFF' where id=4;

-- �޸ı�ͼ�λ���
--������
alter table "TEST"."TEST1" add column("ADDR" VARCHAR(100));
--�޸���
alter table "TEST"."TEST1" modify "ADDR" VARCHAR(50);
--����������
alter table test.test1 rename COLUMN addr to addr1;
--�Ա�������
alter table test."test1" rename to TEST1;
--ɾ����
alter table "TEST"."TEST1" drop column "ADDR";

--ɾ����
drop table "TEST"."TEST1" restrict;


--��ͼ
-- ������ͼ
Create view ģʽ��.��ͼ�� 
as select .....;
--ɾ����ͼ��
drop view "ģʽ��"."��ͼ��" restrict;


-- ����
--����������Ҫע�⣺��������д���������Ƿ���ȷ��
create index "ģʽ��"."��ͼ��" 
ON "ģʽ��"."��ͼ��"("Ҫ������������") ;

-- �����ļ���backup
mkdir -p /home/dmdba/dmdbms/BACKUP

-- �������ݿ�
--�䱸��ͼ�λ���
./console

-- �ȱ�
--�����鵵·����ͼ�λ���
mkdir -p /home/dmdba/dmdbms/arch







