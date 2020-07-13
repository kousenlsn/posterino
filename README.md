## Posterino

*Basic orange ninja front stack.*

Sample app developed for a job application.

**Requirements were**: consult an endpoint for fetching mocked posts; edit and persist locally.

### Setup :construction_worker:

1. `npm install`
2. `npm start`
3. Open [http://localhost:3000](http://localhost:3000)

### Composition :hammer:

- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) - Boilerplate <br/>
- [eslint](https://eslint.org/) (comes with Create react App) - Linting <br/>
- [Redux](https://react-redux.js.org/) - State management <br/>
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) - Async actions with redux <br/>
- [Redux-persist](https://github.com/rt2zz/redux-persist) - Keeping the store state preserved on refreshes <br/>
- [Redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - Timetravel debugging tools for redux in Chrome <br/>
- [React-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - Routing for SPA with react <br/>
- [React-jss](https://github.com/cssinjs/react-jss) - CSS in JS lib <br/>
- [Axios](https://github.com/axios/axios) - HTTP request lib <br/>
- [Moment](https://momentjs.com/) - Date time lib <br/>
- [Ant Design](https://ant.design/) - Material UI based visual lib <br/>
- [Rc Queue Anim](https://www.npmjs.com/package/rc-queue-anim) - Animation lib <br/><br/>
- Partially using [React-Hooks](https://reactjs.org/docs/hooks-intro.html).

### Nuances :mag_right:

- [Try access an invalid route](http://localhost:3000/posts/1500);
- Try refresh the page after changing any state, it should keep the previous state;
- [Check responsiveness of the pages](http://localhost:3000/posts/1);
