## Posterino

*Basic orange ninja front stack.*

![CI](https://github.com/kousenlsn/posterino/workflows/CI/badge.svg?branch=master&event=push)
![CD](https://github.com/kousenlsn/posterino/workflows/CD/badge.svg)

Quick sample app developed for a job application.

**Requirements**: consult an endpoint for fetching mocked posts; edit and persist locally.

### Setup :construction_worker:

1. `npm install`
2. `npm start`
3. Open [http://localhost:3000](http://localhost:3000)

### Composition :hammer:

- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) - Boilerplate
- [eslint](https://eslint.org/) (comes with Create react App) - Linting
- [Redux](https://react-redux.js.org/) - State management
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) - Async actions for redux
- [Redux-persist](https://github.com/rt2zz/redux-persist) - Keeping the store state preserved between reloads
- [Redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - Timetravel debugging tools for redux
- [React-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - Routing for SPA with react
- [React-jss](https://github.com/cssinjs/react-jss) - CSS in JS lib
- [Axios](https://github.com/axios/axios) - HTTP request lib
- [Moment](https://momentjs.com/) - Date time lib
- [Ant Design](https://ant.design/) - Material UI based visual lib
- [Rc Queue Anim](https://www.npmjs.com/package/rc-queue-anim) - Animation lib
- Partially using [React-Hooks](https://reactjs.org/docs/hooks-intro.html). (containers with classes, components with functional components)

### Nuances :mag_right:

- [Try access an invalid route](http://localhost:3000/posts/1500);
- Try refresh the page after changing any state, it should keep the previous state;
- [Check responsiveness of the pages](http://localhost:3000/posts/1);
