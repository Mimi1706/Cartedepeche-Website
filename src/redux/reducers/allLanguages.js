const initialState = {
  langPath: "Cartedepeche-Website/src/data/lang/fr.js",
}

const allLanguages = (state = initialState, action, payload) => {
  if (action.type === "SWITCH_LANGUAGE_FRENCH") {
    return { langPath: "Cartedepeche-Website/src/data/lang/fr.js" }
  } else if (action.type === "SWITCH_LANGUAGE_ENGLISH") {
    return { langPath: "Cartedepeche-Website/src/data/lang/eng.js" }
  }
  return state
}

export default allLanguages
