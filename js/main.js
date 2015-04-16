requirejs.config({
	baseUrl: 'js/lib',
	paths : {
		jQueryjs 	: 'jquery-1.11.2',
		requirejs	: 'require',
		angularjs	: 'ng/angular.min'
	}
})

require(['jQueryjs','requirejs','angularjs'],
	function($){
		//alert('hi')
	}
)