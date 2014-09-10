Package.describe({
  summary: "A generator for german cities and names for people",
  version: '0.1.0',
  git: "https://github.com/sclausen/meteor-german-mocker.git",
  name: "phosphoros:german-mocker"
});

Package.onUse(function(api) {
  api.use(["underscore"]);
  api.addFiles([
    'german-mocker.js',
    'cities.js',
    'surnames.js',
    'female-forenames.js',
    'male-forenames.js'
  ], 'server');

  api.export('GermanMocker', 'server');
});