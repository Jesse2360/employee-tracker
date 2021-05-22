const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');
const cTable = require('console.table');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'intramuscular10',
    database: 'employee_DB',
});

    connection.connect((err) => {
        if (err) throw err;
        console.log(`connected as id ${connection.threadId}`);
        //connection.end();
        vamonos();
    });

function vamonos() {
    inquirer.prompt({
        name: 'enter',
        type:'list',
        message: 'What would you like to do?',
        choices: ['add department', 'add employees', 'view department',
         'view roles', 'view employees', 'update employee roles', 'exit'],
    })
    .then(function (answers) {
        switch (answers.enter) {
            case 'add department':
                addDepartment();
                break;

            case 'add employees':
                addEmployees();
                break;

            case 'view department':
                viewDepartment();
                break;

            case 'view roles':
                viewRoles();
                break;

            case 'view eployees':
                viewEmployees();
                break;

            case 'update employee roles':
                updateEmployeeRoles();
                break;

            case 'exit':
                exit();
                break;

            default:
                console.log(`error what you enter is not valid: ${answer.enter}`);
                break;
        }
    });
};

function addDepartment() {
    inquirer.prompt([
        {
            name: 'department_name', 
            type: 'input', 
            message: 'Which department would you like to add?'
        }
    ]).then(function (answer) {
        connection.query(
        'INSERT INTO department SET ?',
            {
                name: answer.department_name
            });
                let query = 'SELECT * FROM department';
                connection.query(query, function(err, res) {
                if(err)throw err;
                console.log('Your department has been added!');
                console.table('Departments:', res);
                vamonos();
                })
            })
};

const addEmployees = () => {
    connection.query('SELECT * FROM role', function (err, res) {
        if (err) throw err;
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input', 
            message: "What is the employee's fist name? ",
        },
        {
            name: 'last_name',
            type: 'input', 
            message: "What is the employee's last name? "
        },
        {
            name: 'manager_id',
            type: 'input', 
            message: "What is the employee's manager's ID? "
        },
        {
            name: 'role', 
            type: 'list',
            choices: function() {
            let roleArray = [];
            for (let i = 0; i < res.length; i++) {
                roleArray.push(res[i].title);
            }
            return roleArray;
            },
            message: "What is this employee's role? "
        }
        ]).then(function (answer) {
            let role_id;
            for (let a = 0; a < res.length; a++) {
                if (res[a].title == answer.role) {
                    role_id = res[a].id;
                    console.log(role_id)
                }                  
            }  
            connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                manager_id: answer.manager_id,
                role_id: role_id,
            },
            function (err) {
                if (err) throw err;
                console.log('Your employee has been added!');
                console.table('employee', res);
                vamonos();
            })
        })
})
};

function viewDepartment() {
    let query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.table('departments:', res);
        vamonos();
    })
};
