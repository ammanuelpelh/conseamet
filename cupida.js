function defaultTitle(fieldDef, config) {
    if (fieldDef && fieldDef.title) {
        return fieldDef.title; // If fieldDef has a specific title defined, return it
    } else if (config && config.defaultTitle) {
        return config.defaultTitle; // If a default title is configured in the global config, return it
    } else {
        return "Untitled"; // Default fallback title if no specific title or default is found
    }
}
