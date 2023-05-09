class AppAnimations {
  static commonTransitions = {
    when: "beforeChildren",
    duration: 1,
    type: "spring",
    stiffness: 100,
    staggerChildren: 0.5,
  };
  static slideToRight = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: this.commonTransitions,
    },
  };
  static slideToRight2 = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: this.commonTransitions,
    },
  };
  static slideToTop = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: this.commonTransitions,
    },
  };
  static slideToLeft = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: this.commonTransitions,
    },
  };
  static SentenceTyping = {
    hidden: {
      color: "#f26822",
      diplay: "none",
    },
    visible: {
      diplay: "inline",
      color: "#888",
      transition: {
        staggerChildren: 0.08,
        when: "afterChildren",
        duration: 2,
      },
    },
  };

  static LetterTyping = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  static none = {
    hidden: {},
    visible: {},
  };
}

export default AppAnimations;
