const  buildify = require('buildify'),
	filesJS = [
		'./src/js/sumar.js',
		'./src/js/restar.js',
		'./src/js/multiplicar.js',
		'./src/js/dividir.js',
		'./src/js/script.js',
	],
	filesCSS = [		
		'./dist/css/style.css',		
	];

	buildify()
		.concat( filesCSS )
		.cssmin()
		.save( './dist/css/style.min.css' );

	buildify()
		.concat( filesJS )
		.save( './dist/js/calculadora.js' )
		.uglify()
		.save( './dist/js/calculadora.min.js' );