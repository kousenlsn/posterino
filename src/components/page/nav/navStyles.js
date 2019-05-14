const height = 64;

const styles = theme => ({
  container: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    height,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: theme.dark
  },

  flex: {
    display: "flex",
    alignItems: "center",
    color: theme.paper
  },
  flexRight: {
    flexGrow: 1,
    textAlign: "right"
  },

  icon: {
    backgroundColor: theme.dark,
    marginRight: 5
  },

  button: {
    backgroundColor: theme.secondaryColor,
    borderColor: theme.secondaryColor,
    color: theme.paper,
    "&:hover": {
      backgroundColor: theme.secondaryColorHover,
      borderColor: theme.secondaryColorHover,
      color: theme.paper
    }
  }
});

export default styles;
