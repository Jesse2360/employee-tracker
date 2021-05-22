-- department
INSERT INTO department (name) VALUES ('neurology)';
INSERT INTO department (name) VALUES ('cardiology');
INSERT INTO department (name) VALUES ('icu');
INSERT INTO department (name) VALUES ('pharmacy');

-- Table for Roles 
INSERT INTO role (title, salary, department_id) VALUES ('neurologist', 130000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('cardiologist', 115000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('doctor', 105000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('pharmacists', 120000, 4);

-- The Employees table
INSERT INTO employee (first_name, last_name, role_id) values ('John', 'Doe',3, 5);
INSERT INTO employee (first_name, last_name, role_id) values ('Jack', 'Sparrow', 2, 10);
INSERT INTO employee (first_name, last_name, role_id) values ('James', 'Harden', 1, 15);
INSERT INTO employee (first_name, last_name, role_id) values ('Crystal', 'Lust', 4, 20);