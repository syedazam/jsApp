require.config({
	baseUrl:"js/lib", 
	paths:{
		"rQ"	: "require",
		"jQ"	: "jquery/jquery-1.11.2",
		"ng"	: "angular/angular.min",
		"cM" 	: "codemirror/codemirror",
		"xml"	: "codemirror/xml",
		"cAL"	: "codemirror/active-line"
	}
})

requirejs(['rQ','jQ','ng','cM','xml','cAL'],
	function($){
		alert('ad')
		var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
			styleActiveLine: true,
			lineNumbers: true,
			lineWrapping: true
		});
	}
)
