create database Employee;
use Employee;

CREATE TABLE employees (
  Ename VARCHAR(255) NOT NULL,
  Ejob varchar(255) NOT NULL,
  Ephonenumber varchar(255) NOT NULL,
  Email VARCHAR(255) NOT NULL primary key,
  adress VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL
  );
  
select * from employees;
-- delete from employees where Email = "";
-- SELECT * FROM employees LIMIT 5  OFFSET 5;
-- SELECT COUNT(*) as total FROM employees;
drop table employees;


  CREATE TABLE contact_details (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_mail varchar(255) NOT NULL,
  primarycontact VARCHAR(255),
   phone1 varchar(255),
  prelationship varchar(255) ,
  secondarycontact varchar(255),
  phone2 varchar(255) ,
  srelationship varchar(255),
  FOREIGN KEY (employee_mail) REFERENCES employees(Email) ON DELETE CASCADE ON update cascade
  );
  select * from contact_details;
--   delete from contact_details where employee_mail = "";
  drop table contact_details;
  
  
  
  