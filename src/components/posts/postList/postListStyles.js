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

  listEntryContainer: {
    minWidth: 0,
    "& .ant-list-item-meta-content": {
      minWidth: 0
    },
    "& .ant-list-item-meta-title": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  },
  title: {
    fontSize: 20
  },
  subtitle: {
    fontSize: 15,
    opacity: 0.6
  },
  description: {
    color: theme.primaryColor,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
});

export default styles;
