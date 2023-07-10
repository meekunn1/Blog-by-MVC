const path = require('path');
const express = require('express');
const session = require('express-session');
const hdbr = require('express-handlebars');
const routes = require('./controllers');
const helper = require('./utils');

const sequelize = require('./config/connection')