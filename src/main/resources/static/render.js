function render(template, model) {
    var data = toJsonObject(model);
    return new EJS({text: template}).render(data);
}

function renderJsx(template, model) {
    var jsTemplate = JSXTransformer.transform(template).code;
    var data = toJsonObject(model);
    return render(jsTemplate, data);
}

// Create a real JSON object from the model Map 
function toJsonObject(model) {
    var o = {}; 
    for (var k in model) { 
        // Convert Iterable like List to real JSON array
        if (model[k] instanceof Java.type("java.lang.Iterable")) {
            o[k] = Java.from(model[k]);
        }
        else {
            o[k] = model[k]; 
        } 
    }  
    return o;
}