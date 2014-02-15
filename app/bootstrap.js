require.config({
  paths:{
    'angular': 'bower_components/angular/angular',
    'angular-animate': 'bower_components/angular-animate/angular-animate',
    '_': 'bower_components/underscore/underscore'        
  },
  shim:{
    'angular': {'exports': 'angular'},
    'angular-animate': ['angular'],
    '_': {'exports': '_'},
  },
  deps: ['main.js']
});

