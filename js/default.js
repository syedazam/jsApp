var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: "scheme",
	theme: "night",
    lineNumbers: true,
	extraKeys: {
        "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
    }
  });
  var pending;
  editor.on("change", function() {
    clearTimeout(pending);
    pending = setTimeout(update, 400);
  });
  function looksLikeScheme(code) {
    return !/^\s*\(\s*function\b/.test(code) && /^\s*[;\(]/.test(code);
  }
  function update() {
    editor.setOption("mode", looksLikeScheme(editor.getValue()) ? "scheme" : "javascript");
  }