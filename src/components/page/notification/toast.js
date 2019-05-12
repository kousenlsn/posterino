import React from "react";
import { connect } from "react-redux";

import { notification } from "antd";

import {
  clearNotification,
  clearError
} from "../../../redux/actions/pageActions";

class ToastContainer extends React.Component {
  constructor() {
    super();

    this.notification = notification;

    notification.config({
      placement: "bottomRight"
    });
  }

  componentDidUpdate(prevProps) {
    const newMessages =
      this.props.notifications &&
      this.props.notifications.filter(
        item => !prevProps.notifications.some(prev => prev.key === item.key)
      );
    const newErrors =
      this.props.errors &&
      this.props.errors.filter(
        item => !prevProps.errors.some(prev => prev.key === item.key)
      );

    if (newMessages && newMessages.length > 0)
      newMessages.forEach(notification => {
        this.notification.success({
          key: notification.key,
          message: "Success",
          description: notification.message,
          onClose: () => this.props.clearError(notification.key)
        });
      });

    if (newErrors && newErrors.length > 0)
      newErrors.forEach(notification => {
        this.notification.error({
          key: notification.key,
          message: "Error",
          description: notification.message,
          duration: 3,
          onClose: () => this.props.clearError(notification.key)
        });
      });
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  errors: state.page.errorMessages,
  notifications: state.page.notificationMessages
});

const mapDispatchToProps = dispatch => ({
  clearNotification: notificationKey =>
    dispatch(clearNotification(notificationKey)),
  clearError: errorKey => dispatch(clearError(errorKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastContainer);
