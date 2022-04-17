# express-example
node express server hosted on [tiramisu.cloud](https://www.tiramisu.cloud/)

# add handler

if you don't have an express app yet you can first follow the steps in [create app with express-generator](#create-app-with-express-generator)</br>
and the add the handler

```bash
npm install @vendia/serverless-express
```

add file handler.js at the root of the project
```bash
touch handler.js
```

with the following content
```js
// handler.js
const serverlessExpress = require('@vendia/serverless-express')
const app = require('./app.js')

export default serverlessExpress({
  app,
})
```

# create app with express-generator
```bash
npm init -y
```

```bash
npx express-generator
```

destination is not empty, continue? [y/N]

```bash
y
```

Install NPM dependencies
```bash
npm install
```

Launch the development server on [localhost:3000](http://localhost:3000)
```bash
npm run start
```

stop server by pressing control + c on Windows or CMD + C on macOS/Linux.


