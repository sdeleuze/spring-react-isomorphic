function render(template, model) {

    // Create a real Javascript Object from the model Map
    var data = {};
    for (var k in model) {
        // Convert Java Iterable and List to real Javascript arrays
        if (model[k] instanceof Java.type("java.lang.Iterable")) {
            data[k] = Java.from(model[k]);
        } else {
            data[k] = model[k];
        }
    }
    return new EJS({text: template}).render(data);
}

function renderJsx(template, model) {
    var jsTemplate = JSXTransformer.transform(template).code;
    return render(jsTemplate, model);
}