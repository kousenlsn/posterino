const styles = theme => ({
  container: {
    margin: "0 16px"
  },
  pageBreadcrumbsSection: {
    margin: "16px 0",
    display: "inline-block"
  },
  paperContainer: {
    padding: 24,
    background: theme.paper,
    minHeight: 400,
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

  title: {
    fontSize: 20
  },
  subtitle: {
    fontSize: 15,
    opacity: 0.8
  },
  description: {
    color: "blue"
  }
});

export default styles;
