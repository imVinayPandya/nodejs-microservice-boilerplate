# TODO


- [x] Basic express app setup
- [x] Eslint
- [x] Logger: Winston
- [x] Centralized error handling
- [x] Api Test cases: Basic Mocha test setup
- [x] Git Prehook
- [x] Swagger doc
- [x] Config file which can be override by .env file by deveops
- [] Js Doc: Documantation within a code
- [] clustering
- [] dockerize
- [] nginx docker
- [] SSL
- [] CI, CD

# Env

There is configuration file in this project, which you can override by .env file.

> if you don't have .env file, create .env file in the root of this project

There are several configuration you can set in your .env file.

- NODE_ENV : node environment variable
- HOST : on which host app is running, for example: localhost.com, production.hostname.com 
- PORT : on which port you want to run this project
- DB_HOST : database host name or ip address
- DB_PORT : database port
- DB_USER : database user name
- DB_PASS : database password


# GIT Tips and Tricks

## combine / merge two or more commits to single commit

  ref: https://stackoverflow.com/questions/2563632/how-can-i-merge-two-commits-into-one-if-i-already-started-rebase

