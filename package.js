Package.describe({
	summary: "jquery timepicker - jquery timepicker for meteor"
});

Package.on_use(function(api, where) {
	api.add_files(['jquery.timepicker.js', 
				   'jquery.timepicker.css'
				  ], 'client');
});
