# simple-task-manager

### Running the project

#### Install dependencies

```sh
npm install
# OR
yarn
```

#### Running development version

```sh
npm start
# Open http://localhost:9000/
```

#### Running production version

```sh
npm run build
npm run serve
# Open http://localhost:5000/
```

#### Documentation
- Redux is used for state management. Redux also handles persistence by storing data in browswer's localstorage
- Redux state has following schema
```js
state: {
  tasks: [{
    id: uuid,
    text: string,
    createdAt: isoDateString,
    updatedAt: isoDateString
  }]
}
```
- Following actions are dispatched with the parameters:
  - CREATE_TASK
    - id
    - text
    - createdAt
  - UPDATE_TASK
    - id
    - text
    - updatedAt
  - DELETE_TASK
    - id

#### Persistence
[Redux offline](https://github.com/jevakallio/redux-offline) is which store entire redux javascript object state to browser's localstorage and repopulates on app startup.