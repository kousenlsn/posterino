import { CLEAR_NOTIFICATION, CLEAR_ERROR } from "./actionTypes";

export function clearNotification(notificationKey) {
  return { type: CLEAR_NOTIFICATION, payload: { key: notificationKey } };
}
export function clearError(errorKey) {
  return { type: CLEAR_ERROR, payload: { key: errorKey } };
}
