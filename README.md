# German-Mocker

A small mocking tool from which you can get random names of people and cities in Germany.

## License
MIT

## Installation

German-Mocker can be installed with
[Meteorite](https://github.com/oortcloud/meteorite/). From inside a
Meteorite-managed app:

```sh
$ mrt add german-mocker
```

## API

### Basics

Currently the functions are simply:

```js
  GermanMocker().getCityByName("Hamburg");
  /*
    {
      city:"Hamburg",
      postcode:"20095",
      prefix:"040",
      state:"Hamburg"
    }
  */
  GermanMocker().getRandomCity(); // conforms getCityByName()
  GermanMocker().getRandomForename(); // eg. Frank
  GermanMocker().getRandomSurname(); // eg. Schmidt
  GermanMocker().getRandomUserName(); // eg. pmeinert
  GermanMocker().getRandomName(); // eg. Herbert Niemann
  GermanMocker().getRandomNameWithGender(); // eg. Frau Claudia Nießen
  GermanMocker().getRandomPhoneNumber(); // eg. 774931
  GermanMocker().getRandomAddress();
  /*
    eg.:
    {
      gender: "Herr",
      forename: "Heinzdieter",
      surname: "Schick",
      city: "Icking",
      postcode: "82057",
      prefix: "08178",
      phone: "4800786"
    }
  */
```

The function `getRandomUserName()` creates a lowercase username with the first character
of a random forename and the subsequent surname.
