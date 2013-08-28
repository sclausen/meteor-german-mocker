GermanMocker = function() {
  var self = this;

  self.sanitizeName = function(name) {
    name = name.
      replace(/ä/g,"ae").
      replace(/ö/g,"oe").
      replace(/ü/g,"ue").
      replace(/Ä/g,"Ae").
      replace(/Ö/g,"Oe").
      replace(/Ü/g,"Ue").
      replace(/ß/g,"ss").
      replace(/,/g,"").
      replace(/\-/g,"");
    return name;
  }

  getRandomGenderCode = function() {
    return Math.floor(Math.random());
  }

  self.forenames = [maleForenames,femaleForenames];
  self.surnames = surnames;
  self.cities = cities;

  self.getRandomCity = function() {
    return cities[_.random(0, cities.length)];
  }

  self.getRandomPhoneNumber = function(length) {
    if(!length) {
      length = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
    }

    var number = "";
    for(var i = 0; i < length; i++) {

      var rnd = Math.floor(Math.random() * 10);

      if(i == 0 && rnd == 0) {
        rnd = 1;
      }

      number += rnd;
    }

    if(_.contains(["112", "110", "911", "115"], number)) {
      return self.getRandomPhoneNumber(length);
    }

    if(length == 6 && number.substring(0, 5) == "11800") {
      return self.getRandomPhoneNumber(length);
    }

    if(length == 6 && _.contains(["116", "118"], number.substring(0, 3))) {
      return self.getRandomPhoneNumber(length);
    }

    return number;
  }

  self.getCityByName = function(name) {
    return _.findWhere(cities, {city: name});
  }

  self.getRandomForename = function (gender) {
    if(!gender) {
      gender = getRandomGenderCode();
    }
    check(gender, Number);

    return self.forenames[gender][_.random(0, self.forenames[gender].length)];
  }

  self.getRandomSurname = function () {
    return surnames[_.random(0, surnames.length)];
  }

  self.getRandomName = function (gender) {
    return self.getRandomForename(gender) + " " + self.getRandomSurname();
  }

  self.getRandomNameWithGender = function (gender) {
    if(!gender) {
      gender = getRandomGenderCode();
    }
    var text = ["Herr","Frau"];
    return text[gender] + " " + self.getRandomForename(gender) + " " + self.getRandomSurname();
  }

  self.getRandomUserName = function () {
    var forename = self.sanitizeName(self.getRandomForename().toLowerCase());
    var surname = self.sanitizeName(self.getRandomSurname().toLowerCase());
    return forename[1] + surname;
  }

  self.getRandomAddress = function(gender) {
    if(!gender) {
      gender = getRandomGenderCode();
    }
    var city = self.getRandomCity();
    var text = ["Herr","Frau"];
    return {
      gender: text[gender],
      forename: self.getRandomForename(),
      surname: self.getRandomSurname(),
      city: city.city,
      postcode: city.postcode,
      prefix: city.prefix,
      phone: self.getRandomPhoneNumber(Math.floor(Math.random() * (7 - 3 + 1)) + 3)
    }
  }

  return self;
}