import defaultState from "../store/defaultState";
import { CLEAR_NOTIFICATION, CLEAR_ERROR } from "../actions/actionTypes";

function actionType(action) {
  return action.split("_")[0];
}

function actionStatus(action) {
  return action.split("_").pop();
}

const pageReducer = (state = defaultState.page, action) => {
  switch (actionType(action.type)) {
    case "FETCH": {
      switch (actionStatus(action.type)) {
        case "_REQUEST":
          return {
            ...state,
            fetchCallsInProgress: state.fetchCallsInProgress + 1
          };
        case "_SUCCESS":
          return {
            ...state,
            fetchCallsInProgress: state.fetchCallsInProgress - 1
          };
        case "_FAILURE":
          return {
            ...state,
            fetchCallsInProgress: state.fetchCallsInProgress - 1,
            errorMessages:
              action.payload.message && action.payload.message.length > 1
                ? [
                    ...state.errorMessages,
                    {
                      key: new Date().toISOString().replace(/-/g, ""),
                      message: action.payload.message,
                      code: action.payload.statusCode
                    }
                  ]
                : state.errorMessages
          };
        default:
          return state;
      }
    }
    case "PERSIST": {
      switch (actionStatus(action.type)) {
        case "_REQUEST":
          return {
            ...state,
            postCallsInProgress: state.postCallsInProgress + 1
          };
        case "_SUCCESS":
          return {
            ...state,
            postCallsInProgress: state.postCallsInProgress - 1,
            notificationMessages:
              action.payload.message && action.payload.message.length > 1
                ? [
                    ...state.notificationMessages,
                    {
                      key: new Date().toISOString().replace(/-/g, ""),
                      message: action.payload.message
                    }
                  ]
                : state.notificationMessages
          };
        case "_FAILURE":
          return {
            ...state,
            postCallsInProgress: state.postCallsInProgress - 1,
            errorMessages:
              action.payload.message && action.payload.message.length > 1
                ? [
                    ...state.errorMessages,
                    {
                      key: new Date().toISOString().replace(/-/g, ""),
                      message: action.payload.message,
                      code: action.payload.statusCode
                    }
                  ]
                : state.errorMessages
          };
        default:
          return state;
      }
    }
    case "CLEAR": {
      switch (action.type) {
        case CLEAR_NOTIFICATION:
          return {
            ...state,
            notificationMessages: state.notificationMessages.filter(
              message => message.key !== action.payload.key
            )
          };
        case CLEAR_ERROR:
          return {
            ...state,
            errorMessages: state.errorMessages.filter(
              error => error.key !== action.payload.key
            )
          };
        default:
          return state;
      }
    }
    default:
      return state;
  }
};

export default pageReducer;
