const switchLang = (lang) => {
  if (lang === "eng") {
    return { type: "SWITCH_LANGUAGE_FRENCH" }
  } else if (lang === "fr") {
    return { type: "SWITCH_LANGUAGE_ENGLISH" }
  }
}

export default switchLang
