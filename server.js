const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');
const fs = require('fs');

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