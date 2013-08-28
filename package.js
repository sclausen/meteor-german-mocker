Package.describe({summary:"A generator for german cities and names for people"});

Package.on_use(function (api) {

  api.use(["underscore"]);
  api.add_files([
    'license.js',
    'german-mocker.js',
    'cities.js',
    'surnames.js',
    'female-forenames.js',
    'male-forenames.js'
  ], 'server');

  api.export('GermanMocker', 'server');

});