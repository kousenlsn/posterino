const styles = theme => ({
  container: {
    margin: "0 16px"
  },
  headerContainer: {
    display: "flex"
  },
  pageBreadcrumbsSection: {
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16,
    display: "inline-block",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    flexGrow: 1
  },
  actionsContainer: {
    float: "right",
    display: "flex",
    margin: "10px 0"
  },
  button: {
    width: "100%",
    backgroundColor: theme.primaryColor,
    borderColor: theme.primaryColor,
    "&:hover": {
      backgroundColor: theme.primaryColorHover
    }
  },

  paperContainer: {
    padding: 24,
    background: theme.paper,
    position: "relative"
  },

  spinner: {
    textAlign: "center",
    paddingTop: 50,
    "& span": {
      "& i": {
        backgroundColor: theme.primaryColor
      }
    }
  },

  inputContainer: {
    marginLeft: 12,
    marginBottom: 7,
    paddingBottom: 3
  },

  titleContainer: {
    margin: 0,
    paddingBottom: 0
  },

  title: {
    fontSize: 20,
    padding: "4px 11px"
  },

  subtitle: {
    opacity: 0.6
  },

  inputText: {
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none"
  },

  inputDisabled: {
    border: "none",
    cursor: "default !important",
    backgroundColor: "white !important",
    color: theme.dark,
    resize: "none",
    "& input": {
      border: "none",
      cursor: "default !important",
      backgroundColor: "white !important",
      resize: "none",
      "& span": {
        display: "none"
      }
    }
  }
});

export default styles;
