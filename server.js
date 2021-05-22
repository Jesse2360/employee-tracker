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
                addEployees();
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
