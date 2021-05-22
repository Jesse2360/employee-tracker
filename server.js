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
        connection.end();
        vamonos();
    });

const vamonos = () => {
    inquirer.prompt({
        name: 'enter',
        type:'list',
        message: 'What would you like to do?',
        choices: ['add department', 'add roles', 'add employees', 'view department',
         'view roles', 'view employees', 'update employee roles'],
    })
    .then((answers) => {
        switch (answer.enter) {
            case 'add department':
                addDepartment();
                break;

            case 'add roles':
                addEmployees();
                break;

            case 'view department':
                viewDepartment();
                break;

            case 'update employee roles':
                updateEmployeeRoles();
                break;

            default:
                console.log(`error what you enter is not valid: ${answer.enter}`);
                break;
        }
    });
};

const addDepartment = () => {
    inquirer.prompt([
    {
        name: 'department_name',
        type: 'input',
        message: 'please enter department name',
    },
    ])
    .then((answer) => {
        connection.query('INSERT INTO department SET?',
            {
                name: answer.department_name,
            },
            (err) => {
                if (err) throw err;
                console.log('added name success');
                vamonos();
            } 
        );
    });
};

const addEmployees = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'please enter employee first name',
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'please enter employee last name',
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'please enter employee role id',
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'please enter manager id',
        },
    ])
    .then((answer) => {
        connection.query('INSERT INTO employees SET ?',
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id,
            },
            (err) => {
                if (err) throw err;
                console.log('added employeee success');
                vamonos();
            }  
        );
    });
};