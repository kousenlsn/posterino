## Posterino

*Simple React web app in between React and React Hooks.**

![CI](https://github.com/kousenlsn/posterino/workflows/CI/badge.svg?branch=master&event=push)
![CD](https://github.com/kousenlsn/posterino/workflows/CD/badge.svg)

### Motivation :running:

- Knowledge test app.

##### Requirements: 

- Consult an endpoint for fetching mocked posts; edit and persist locally;
- Implement Container pattern.*

### Run locally :construction_worker:

1. `npm install`
2. `npm start`

### Composition :hammer:

- Presentation components using [React-Hooks](https://reactjs.org/docs/hooks-intro.html), and Container using classic React;*


- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) - Boilerplate;
- [Redux](https://react-redux.js.org/) - State management;
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) - Async actions for redux;
- [Redux-persist](https://github.com/rt2zz/redux-persist) - Keeping the store state preserved between reloads;
- [Redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - Timetravel debugging tools for redux;
- [React-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - Routing for SPA with react;
- [React-jss](https://github.com/cssinjs/react-jss) - CSS in JS lib;
- [Axios](https://github.com/axios/axios) - HTTP request lib;
- [Moment](https://momentjs.com/) - Date time lib;
- [Ant Design](https://ant.design/) - Visual components library;
- [Rc Queue Anim](https://www.npmjs.com/package/rc-queue-anim) - Animation lib.

### Nuances :mag_right:

- State is preserved between page refreshes using rehydration.
