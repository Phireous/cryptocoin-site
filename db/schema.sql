DROP DATABASE IF EXISTS project2_db;

CREATE DATABASE project2_db;

USE project2_db;

CREATE TABLE emails_list(
    email VARCHAR(250),
    name VARCHAR(250),
    date TIMESTAMP,
);