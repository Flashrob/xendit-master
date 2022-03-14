# XenElectronic

## Documentation

- Please check the working doc
   `https://tinyurl.com/bdfssez6`

## Prerequesites

1. Installed node
2. Installed postgreSQL
3. Installed yarn

## Installation

1. Clone the repo
   `git clone https://github.com/Flashrob/xendit-api.git`

2. Install dependencies
   `yarn`

## Setting up the DB

1. Create a `local.yml` file from `local.yml.example` in `config` directory
2. Create a new DB by running `createdb xendit -U <your username>`
3. Create the test DB by running `createdb xendit_test -U <your username>`
3. Add your credentials to the `local.yml` files
4. Run `CREATE EXTENSION pgcrypto;` in psql
5. Exist psql and run `yarn migrate up` once your DB is setup and the credential files are in order

If Step 2 does not work, please create the db manually via psql

**NEVER** commit the `local.yml` file.

## Local development

1. Run the server
   `yarn dev`

## Managing dependencies

- With future performance in mind, we are using yarn. So please utilize `yarn add <package>` for adding packages or `yarn add <package> -D` to add dev dependencies.

## View Swagger documentation

- To access the OpenSpec API documentation via Swagger, please start the server and access
   `http://localhost:3000/api-docs/swagger`

## Typescript

- We are using Typescript in strict mode. With `yarn build`, `yarn start` or `yarn dev` Typescript will compile and output into dist/.
- The entrypoint for our app is `dist/src/app.js`.

- More configuration can be found in `tsconfig.json` and `package.json`

## Linting

- For uniform coding style we use eslint and prettier. Configuration is in the `.eslintrc.json` and in `.prettierrc` files in the root directory. Feel free to enforce more rules.

- It is recommended to include the following lines in your VS Code settings.json

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"],
"editor.formatOnSave": true
```

## Running tests

- To run tests
   `yarn test`

- To run tests without recompiling
   `yarn test:no-build`

- To run specific tests
    `yarn test -g 'testName'`

- To check test coverage
   `yarn coverage`
# Authors

- Robert Kolsek

# License

- This project is licensed under the MIT License

# Acknowledgements

- Man this is a tough nut to crack while working a full-time job and being a father :D
