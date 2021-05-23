/*!
 * aksTelephoneInput v1.0.0
 * International Telephone Numbers
 * (c) 2021 Ahmet Aksungur
 * MIT License
 * https://github.com/Ahmetaksungur
 */

(function ($) {
  "use strict";
  $.fn.aksTelephoneInput = function (options) {
    const aks = $(this);
    var settings = $.extend(
      {
        allCountries: [
          {
            country: "Afghanistan (‫افغانستان‬‎)",
            countryCode: "af",
            countryNumber: "93",
            countryNumberExample: "070 123 4567"
          },
          {
            country: "Albania (Shqipëri)",
            countryCode: "al",
            countryNumber: "355",
            countryNumberExample: "067 212 3456"
          },
          {
            country: "Algeria (‫الجزائر‬‎)",
            countryCode: "dz",
            countryNumber: "213",
            countryNumberExample: "0551 23 45 67"
          },
          {
            country: "American Samoa",
            countryCode: "as",
            countryNumber: "1",
            countryNumberExample: "(684) 733-1234"
          },
          {
            country: "Andorra",
            countryCode: "ad",
            countryNumber: "376",
            countryNumberExample: "312 345"
          },
          {
            country: "Angola",
            countryCode: "ao",
            countryNumber: "244",
            countryNumberExample: "923 123 456"
          },
          {
            country: "Anguilla",
            countryCode: "ai",
            countryNumber: "1",
            countryNumberExample: "(264) 235-1234"
          },
          {
            country: "Antigua and Barbuda",
            countryCode: "ag",
            countryNumber: "1",
            countryNumberExample: "(268) 464-1234"
          },
          {
            country: "Argentina",
            countryCode: "ar",
            countryNumber: "54",
            countryNumberExample: "011 15-2345-6789"
          },
          {
            country: "Armenia (Հայաստան)",
            countryCode: "am",
            countryNumber: "374",
            countryNumberExample: "077 123456"
          },
          {
            country: "Aruba",
            countryCode: "aw",
            countryNumber: "297",
            countryNumberExample: "560 1234"
          },
          {
            country: "Australia",
            countryCode: "au",
            countryNumber: "61",
            countryNumberExample: "0412 345 678"
          },
          {
            country: "Austria (Österreich)",
            countryCode: "at",
            countryNumber: "43",
            countryNumberExample: "0664 123456"
          },
          {
            country: "Azerbaijan (Azərbaycan)",
            countryCode: "az",
            countryNumber: "994",
            countryNumberExample: "040 123 45 67"
          },
          {
            country: "Bahamas",
            countryCode: "bs",
            countryNumber: "1",
            countryNumberExample: "(242) 359-1234"
          },
          {
            country: "Bahrain (‫البحرين‬‎)",
            countryCode: "bh",
            countryNumber: "973",
            countryNumberExample: "3600 1234"
          },
          {
            country: "Bangladesh (বাংলাদেশ)",
            countryCode: "bd",
            countryNumber: "880",
            countryNumberExample: "01812-345678"
          },
          {
            country: "Barbados",
            countryCode: "bb",
            countryNumber: "1",
            countryNumberExample: "(246) 250-1234"
          },
          {
            country: "Belarus (Беларусь)",
            countryCode: "by",
            countryNumber: "375",
            countryNumberExample: "8 029 491-19-11"
          },
          {
            country: "Belgium (België)",
            countryCode: "be",
            countryNumber: "32",
            countryNumberExample: "0470 12 34 56"
          },
          {
            country: "Belize",
            countryCode: "bz",
            countryNumber: "501",
            countryNumberExample: "622-1234"
          },
          {
            country: "Benin (Bénin)",
            countryCode: "bj",
            countryNumber: "229",
            countryNumberExample: "90 01 12 34"
          },
          {
            country: "Bermuda",
            countryCode: "bm",
            countryNumber: "1",
            countryNumberExample: "(441) 370-1234"
          },
          {
            country: "Bhutan (འབྲུག)",
            countryCode: "bt",
            countryNumber: "975",
            countryNumberExample: "17 12 34 56"
          },
          {
            country: "Bolivia",
            countryCode: "bo",
            countryNumber: "591",
            countryNumberExample: "71234567"
          },
          {
            country: "Bosnia and Herzegovina (Босна и Херцеговина)",
            countryCode: "ba",
            countryNumber: "387",
            countryNumberExample: "061 123 456"
          },
          {
            country: "Botswana",
            countryCode: "bw",
            countryNumber: "267",
            countryNumberExample: "71 123 456"
          },
          {
            country: "Brazil (Brasil)",
            countryCode: "br",
            countryNumber: "55",
            countryNumberExample: "(11) 96123-4567"
          },
          {
            country: "British Indian Ocean Territory",
            countryCode: "io",
            countryNumber: "246",
            countryNumberExample: "380 1234"
          },
          {
            country: "British Virgin Islands",
            countryCode: "vg",
            countryNumber: "1",
            countryNumberExample: "(284) 300-1234"
          },
          {
            country: "Brunei",
            countryCode: "bn",
            countryNumber: "673",
            countryNumberExample: "712 3456"
          },
          {
            country: "Bulgaria (България)",
            countryCode: "bg",
            countryNumber: "359",
            countryNumberExample: "048 123 456"
          },
          {
            country: "Burkina Faso",
            countryCode: "bf",
            countryNumber: "226",
            countryNumberExample: "70 12 34 56"
          },
          {
            country: "Burundi (Uburundi)",
            countryCode: "bi",
            countryNumber: "257",
            countryNumberExample: "79 56 12 34"
          },
          {
            country: "Cambodia (កម្ពុជា)",
            countryCode: "kh",
            countryNumber: "855",
            countryNumberExample: "091 234 567"
          },
          {
            country: "Cameroon (Cameroun)",
            countryCode: "cm",
            countryNumber: "237",
            countryNumberExample: "6 71 23 45 67"
          },
          {
            country: "Canada",
            countryCode: "ca",
            countryNumber: "1",
            countryNumberExample: "(506) 234-5678"
          },
          {
            country: "Cape Verde (Kabu Verdi)",
            countryCode: "cv",
            countryNumber: "238",
            countryNumberExample: "991 12 34"
          },
          {
            country: "Caribbean Netherlands",
            countryCode: "bq",
            countryNumber: "599",
            countryNumberExample: "318 1234"
          },
          {
            country: "Cayman Islands",
            countryCode: "ky",
            countryNumber: "1",
            countryNumberExample: "(345) 323-1234"
          },
          {
            country: "Central African Republic (République centrafricaine)",
            countryCode: "cf",
            countryNumber: "236",
            countryNumberExample: "70 01 23 45"
          },
          {
            country: "Chad (Tchad)",
            countryCode: "td",
            countryNumber: "235",
            countryNumberExample: "63 01 23 45"
          },
          {
            country: "Chile",
            countryCode: "cl",
            countryNumber: "56",
            countryNumberExample: "(2) 2123 4567"
          },
          {
            country: "China (中国)",
            countryCode: "cn",
            countryNumber: "86",
            countryNumberExample: "131 2345 6789"
          },
          {
            country: "Christmas Island",
            countryCode: "cx",
            countryNumber: "61",
            countryNumberExample: "0412 345 678"
          },
          {
            country: "Cocos (Keeling) Islands",
            countryCode: "cc",
            countryNumber: "61",
            countryNumberExample: "0412 345 678"
          },
          {
            country: "Colombia",
            countryCode: "co",
            countryNumber: "57",
            countryNumberExample: "321 1234567"
          },
          {
            country: "Comoros (‫جزر القمر‬‎)",
            countryCode: "km",
            countryNumber: "269",
            countryNumberExample: "321 23 45"
          },
          {
            country: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
            countryCode: "cd",
            countryNumber: "243",
            countryNumberExample: "0991 234 567"
          },
          {
            country: "Congo (Republic) (Congo-Brazzaville)",
            countryCode: "cg",
            countryNumber: "242",
            countryNumberExample: "06 123 4567"
          },
          {
            country: "Cook Islands",
            countryCode: "ck",
            countryNumber: "682",
            countryNumberExample: "71 234"
          },
          {
            country: "Costa Rica",
            countryCode: "cr",
            countryNumber: "506",
            countryNumberExample: "8312 3456"
          },
          {
            country: "Côte d’Ivoire",
            countryCode: "ci",
            countryNumber: "255",
            countryNumberExample: "01 23 45 67"
          },
          {
            country: "Croatia (Hrvatska)",
            countryCode: "hr",
            countryNumber: "385",
            countryNumberExample: "092 123 4567"
          },
          {
            country: "Cuba",
            countryCode: "cu",
            countryNumber: "53",
            countryNumberExample: "05 1234567"
          },
          {
            country: "Curaçao",
            countryCode: "cw",
            countryNumber: "599",
            countryNumberExample: "9 518 1234"
          },
          {
            country: "Cyprus (Κύπρος)",
            countryCode: "cy",
            countryNumber: "357",
            countryNumberExample: "96 123456"
          },
          {
            country: "Czech Republic (Česká republika)",
            countryCode: "cz",
            countryNumber: "420",
            countryNumberExample: "601 123 456"
          },
          {
            country: "Denmark (Danmark)",
            countryCode: "dk",
            countryNumber: "45",
            countryNumberExample: "32 12 34 56"
          },
          {
            country: "Djibouti",
            countryCode: "dj",
            countryNumber: "253",
            countryNumberExample: "77 83 10 01"
          },
          {
            country: "Dominica",
            countryCode: "dm",
            countryNumber: "1",
            countryNumberExample: "(767) 225-1234"
          },
          {
            country: "Dominican Republic (República Dominicana)",
            countryCode: "do",
            countryNumber: "1",
            countryNumberExample: "(809) 234-5678"
          },
          {
            country: "Ecuador",
            countryCode: "ec",
            countryNumber: "593",
            countryNumberExample: "099 123 4567"
          },
          {
            country: "Egypt (‫مصر‬‎)",
            countryCode: "eg",
            countryNumber: "20",
            countryNumberExample: "0100 123 4567"
          },
          {
            country: "El Salvador",
            countryCode: "sv",
            countryNumber: "503",
            countryNumberExample: "7012 3456"
          },
          {
            country: "Equatorial Guinea (Guinea Ecuatorial)",
            countryCode: "gq",
            countryNumber: "240",
            countryNumberExample: "222 123 456"
          },
          {
            country: "Eritrea",
            countryCode: "er",
            countryNumber: "291",
            countryNumberExample: "07 123 456"
          },
          {
            country: "Estonia (Eesti)",
            countryCode: "ee",
            countryNumber: "372",
            countryNumberExample: "5123 4567"
          },
          {
            country: "Eswatini",
            countryCode: "sz",
            countryNumber: "268",
            countryNumberExample: "7612 3456"
          },
          {
            country: "Ethiopia",
            countryCode: "et",
            countryNumber: "251",
            countryNumberExample: "091 123 4567"
          },
          {
            country: "Falkland Islands (Islas Malvinas)",
            countryCode: "fk",
            countryNumber: "500",
            countryNumberExample: "51234"
          },
          {
            country: "Faroe Islands (Føroyar)",
            countryCode: "fo",
            countryNumber: "298",
            countryNumberExample: "211234"
          },
          {
            country: "Fiji",
            countryCode: "fj",
            countryNumber: "679",
            countryNumberExample: "701 2345"
          },
          {
            country: "Finland (Suomi)",
            countryCode: "fi",
            countryNumber: "358",
            countryNumberExample: "041 2345678"
          },
          {
            country: "France",
            countryCode: "fr",
            countryNumber: "33",
            countryNumberExample: "06 12 34 56 78"
          },
          {
            country: "French Guiana (Guyane française)",
            countryCode: "gf",
            countryNumber: "594",
            countryNumberExample: "0694 20 12 34"
          },
          {
            country: "French Polynesia (Polynésie française)",
            countryCode: "pf",
            countryNumber: "689",
            countryNumberExample: "87 12 34 56"
          },
          {
            country: "Gabon",
            countryCode: "ga",
            countryNumber: "241",
            countryNumberExample: "06 03 12 34"
          },
          {
            country: "Gambia",
            countryCode: "gm",
            countryNumber: "220",
            countryNumberExample: "301 2345"
          },
          {
            country: "Georgia (საქართველო)",
            countryCode: "ge",
            countryNumber: "995",
            countryNumberExample: "555 12 34 56"
          },
          {
            country: "Germany (Deutschland)",
            countryCode: "de",
            countryNumber: "49",
            countryNumberExample: "01512 3456789"
          },
          {
            country: "Ghana (Gaana)",
            countryCode: "gh",
            countryNumber: "233",
            countryNumberExample: "023 123 4567"
          },
          {
            country: "Gibraltar",
            countryCode: "gi",
            countryNumber: "350",
            countryNumberExample: "57123456"
          },
          {
            country: "Greece (Ελλάδα)",
            countryCode: "gr",
            countryNumber: "30",
            countryNumberExample: "691 234 5678"
          },
          {
            country: "Greenland (Kalaallit Nunaat)",
            countryCode: "gl",
            countryNumber: "299",
            countryNumberExample: "22 12 34"
          },
          {
            country: "Grenada",
            countryCode: "gd",
            countryNumber: "1",
            countryNumberExample: "(473) 403-1234"
          },
          {
            country: "Guadeloupe",
            countryCode: "gp",
            countryNumber: "590",
            countryNumberExample: "0690 00 12 34"
          },
          {
            country: "Guam",
            countryCode: "gu",
            countryNumber: "1",
            countryNumberExample: "(671) 300-1234"
          },
          {
            country: "Guatemala",
            countryCode: "gt",
            countryNumber: "502",
            countryNumberExample: "5123 4567"
          },
          {
            country: "Guernsey",
            countryCode: "gg",
            countryNumber: "44",
            countryNumberExample: "07781 123456"
          },
          {
            country: "Guinea (Guinée)",
            countryCode: "gn",
            countryNumber: "224",
            countryNumberExample: "601 12 34 56"
          },
          {
            country: "Guinea-Bissau (Guiné Bissau)",
            countryCode: "gw",
            countryNumber: "245",
            countryNumberExample: "955 012 345"
          },
          {
            country: "Guyana",
            countryCode: "gy",
            countryNumber: "592",
            countryNumberExample: "609 1234"
          },
          {
            country: "Haiti",
            countryCode: "ht",
            countryNumber: "509",
            countryNumberExample: "34 10 1234"
          },
          {
            country: "Honduras",
            countryCode: "hn",
            countryNumber: "504",
            countryNumberExample: "9123-4567"
          },
          {
            country: "Hong Kong (香港)",
            countryCode: "hk",
            countryNumber: "852",
            countryNumberExample: "5123 4567"
          },
          {
            country: "Hungary (Magyarország)",
            countryCode: "hu",
            countryNumber: "36",
            countryNumberExample: "06 20 123 4567"
          },
          {
            country: "Iceland (Ísland)",
            countryCode: "is",
            countryNumber: "354",
            countryNumberExample: "611 1234"
          },
          {
            country: "India (भारत)",
            countryCode: "in",
            countryNumber: "91",
            countryNumberExample: "081234 56789"
          },
          {
            country: "Indonesia",
            countryCode: "id",
            countryNumber: "62",
            countryNumberExample: "0812-345-678"
          },
          {
            country: "Iran (‫ایران‬‎)",
            countryCode: "ir",
            countryNumber: "98",
            countryNumberExample: "0912 345 6789"
          },
          {
            country: "Iraq (‫العراق‬‎)",
            countryCode: "iq",
            countryNumber: "964",
            countryNumberExample: "0791 234 5678"
          },
          {
            country: "Ireland",
            countryCode: "ie",
            countryNumber: "353",
            countryNumberExample: "085 012 3456"
          },
          {
            country: "Isle of Man",
            countryCode: "im",
            countryNumber: "44",
            countryNumberExample: "07924 123456"
          },
          {
            country: "Israel (‫ישראל‬‎)",
            countryCode: "il",
            countryNumber: "972",
            countryNumberExample: "050-234-5678"
          },
          {
            country: "Italy (Italia)",
            countryCode: "it",
            countryNumber: "39",
            countryNumberExample: "312 345 6789"
          },
          {
            country: "Jamaica",
            countryCode: "jm",
            countryNumber: "1",
            countryNumberExample: "(876) 210-1234"
          },
          {
            country: "Japan (日本)",
            countryCode: "jp",
            countryNumber: "81",
            countryNumberExample: "090-1234-5678"
          },
          {
            country: "Jersey",
            countryCode: "je",
            countryNumber: "44",
            countryNumberExample: "07797 712345"
          },
          {
            country: "Jordan (‫الأردن‬‎)",
            countryCode: "jo",
            countryNumber: "962",
            countryNumberExample: "07 9012 3456"
          },
          {
            country: "Kazakhstan (Казахстан)",
            countryCode: "kz",
            countryNumber: "7",
            countryNumberExample: "8 (771) 000 9998"
          },
          {
            country: "Kenya",
            countryCode: "ke",
            countryNumber: "254",
            countryNumberExample: "0712 123456"
          },
          {
            country: "Kiribati",
            countryCode: "ki",
            countryNumber: "686",
            countryNumberExample: "72001234"
          },
          {
            country: "Kosovo",
            countryCode: "xk",
            countryNumber: "383",
            countryNumberExample: "043 201 234"
          },
          {
            country: "Kuwait (‫الكويت‬‎)",
            countryCode: "kw",
            countryNumber: "965",
            countryNumberExample: "500 12345"
          },
          {
            country: "Kyrgyzstan (Кыргызстан)",
            countryCode: "kg",
            countryNumber: "996",
            countryNumberExample: "0700 123 456"
          },
          {
            country: "Laos (ລາວ)",
            countryCode: "la",
            countryNumber: "856",
            countryNumberExample: "020 23 123 456"
          },
          {
            country: "Latvia (Latvija)",
            countryCode: "lv",
            countryNumber: "371",
            countryNumberExample: "21 234 567"
          },
          {
            country: "Lebanon (‫لبنان‬‎)",
            countryCode: "lb",
            countryNumber: "961",
            countryNumberExample: "71 123 456"
          },
          {
            country: "Lesotho",
            countryCode: "ls",
            countryNumber: "266",
            countryNumberExample: "5012 3456"
          },
          {
            country: "Liberia",
            countryCode: "lr",
            countryNumber: "231",
            countryNumberExample: "077 012 3456"
          },
          {
            country: "Libya (‫ليبيا‬‎)",
            countryCode: "ly",
            countryNumber: "218",
            countryNumberExample: "091-2345678"
          },
          {
            country: "Liechtenstein",
            countryCode: "li",
            countryNumber: "423",
            countryNumberExample: "660 234 567"
          },
          {
            country: "Lithuania (Lietuva)",
            countryCode: "lt",
            countryNumber: "370",
            countryNumberExample: "(8-612) 34567"
          },
          {
            country: "Luxembourg",
            countryCode: "lu",
            countryNumber: "352",
            countryNumberExample: "628 123 456"
          },
          {
            country: "Macau (澳門)",
            countryCode: "mo",
            countryNumber: "853",
            countryNumberExample: "6612 3456"
          },
          {
            country: "Macedonia (FYROM) (Македонија)",
            countryCode: "mk",
            countryNumber: "389",
            countryNumberExample: "072 345 678"
          },
          {
            country: "Madagascar (Madagasikara)",
            countryCode: "mg",
            countryNumber: "261",
            countryNumberExample: "032 12 345 67"
          },
          {
            country: "Malawi",
            countryCode: "mw",
            countryNumber: "265",
            countryNumberExample: "0991 23 45 67"
          },
          {
            country: "Malaysia",
            countryCode: "my",
            countryNumber: "60",
            countryNumberExample: "012-345 6789"
          },
          {
            country: "Maldives",
            countryCode: "mv",
            countryNumber: "960",
            countryNumberExample: "771-2345"
          },
          {
            country: "Mali",
            countryCode: "ml",
            countryNumber: "223",
            countryNumberExample: "65 01 23 45"
          },
          {
            country: "Malta",
            countryCode: "mt",
            countryNumber: "356",
            countryNumberExample: "9696 1234"
          },
          {
            country: "Marshall Islands",
            countryCode: "mh",
            countryNumber: "692",
            countryNumberExample: "235-1234"
          },
          {
            country: "Martinique",
            countryCode: "mq",
            countryNumber: "596",
            countryNumberExample: "0696 20 12 34"
          },
          {
            country: "Mauritania (‫موريتانيا‬‎)",
            countryCode: "mr",
            countryNumber: "222",
            countryNumberExample: "22 12 34 56"
          },
          {
            country: "Mauritius (Moris)",
            countryCode: "mu",
            countryNumber: "230",
            countryNumberExample: "5251 2345"
          },
          {
            country: "Mayotte",
            countryCode: "yt",
            countryNumber: "262",
            countryNumberExample: "0639 01 23 45"
          },
          {
            country: "Mexico (México)",
            countryCode: "mx",
            countryNumber: "52",
            countryNumberExample: "222 123 4567"
          },
          {
            country: "Micronesia",
            countryCode: "fm",
            countryNumber: "691",
            countryNumberExample: "350 1234"
          },
          {
            country: "Moldova (Republica Moldova)",
            countryCode: "md",
            countryNumber: "373",
            countryNumberExample: "0621 12 345"
          },
          {
            country: "Monaco",
            countryCode: "mc",
            countryNumber: "377",
            countryNumberExample: "06 12 34 56 78"
          },
          {
            country: "Mongolia (Монгол)",
            countryCode: "mn",
            countryNumber: "976",
            countryNumberExample: "8812 3456"
          },
          {
            country: "Montenegro (Crna Gora)",
            countryCode: "me",
            countryNumber: "382",
            countryNumberExample: "067 622 901"
          },
          {
            country: "Montserrat",
            countryCode: "ms",
            countryNumber: "1",
            countryNumberExample: "(664) 492-3456"
          },
          {
            country: "Morocco (‫المغرب‬‎)",
            countryCode: "ma",
            countryNumber: "212",
            countryNumberExample: "0650-123456"
          },
          {
            country: "Mozambique (Moçambique)",
            countryCode: "mz",
            countryNumber: "258",
            countryNumberExample: "82 123 4567"
          },
          {
            country: "Myanmar (Burma) (မြန်မာ)",
            countryCode: "mm",
            countryNumber: "95",
            countryNumberExample: "09 212 3456"
          },
          {
            country: "Namibia (Namibië)",
            countryCode: "na",
            countryNumber: "264",
            countryNumberExample: "081 123 4567"
          },
          {
            country: "Nauru",
            countryCode: "nr",
            countryNumber: "674",
            countryNumberExample: "555 1234"
          },
          {
            country: "Nepal (नेपाल)",
            countryCode: "np",
            countryNumber: "977",
            countryNumberExample: "984-1234567"
          },
          {
            country: "Netherlands (Nederland)",
            countryCode: "nl",
            countryNumber: "31",
            countryNumberExample: "06 12345678"
          },
          {
            country: "New Caledonia (Nouvelle-Calédonie)",
            countryCode: "nc",
            countryNumber: "687",
            countryNumberExample: "75.12.34"
          },
          {
            country: "New Zealand",
            countryCode: "nz",
            countryNumber: "64",
            countryNumberExample: "021 123 4567"
          },
          {
            country: "Nicaragua",
            countryCode: "ni",
            countryNumber: "505",
            countryNumberExample: "8123 4567"
          },
          {
            country: "Niger (Nijar)",
            countryCode: "ne",
            countryNumber: "227",
            countryNumberExample: "93 12 34 56"
          },
          {
            country: "Nigeria",
            countryCode: "ng",
            countryNumber: "234",
            countryNumberExample: "0802 123 4567"
          },
          {
            country: "Niue",
            countryCode: "nu",
            countryNumber: "683",
            countryNumberExample: "888 4012"
          },
          {
            country: "Norfolk Island",
            countryCode: "nf",
            countryNumber: "672",
            countryNumberExample: "3 81234"
          },
          {
            country: "North Korea (조선 민주주의 인민 공화국)",
            countryCode: "kp",
            countryNumber: "850",
            countryNumberExample: "0192 123 4567"
          },
          {
            country: "Northern Mariana Islands",
            countryCode: "mp",
            countryNumber: "1",
            countryNumberExample: "(670) 234-5678"
          },
          {
            country: "Norway (Norge)",
            countryCode: "no",
            countryNumber: "47",
            countryNumberExample: "406 12 345"
          },
          {
            country: "Oman (‫عُمان‬‎)",
            countryCode: "om",
            countryNumber: "968",
            countryNumberExample: "9212 3456"
          },
          {
            country: "Pakistan (‫پاکستان‬‎)",
            countryCode: "pk",
            countryNumber: "92",
            countryNumberExample: "0301 2345678"
          },
          {
            country: "Palau",
            countryCode: "pw",
            countryNumber: "680",
            countryNumberExample: "620 1234"
          },
          {
            country: "Palestine (‫فلسطين‬‎)",
            countryCode: "ps",
            countryNumber: "970",
            countryNumberExample: "0599 123 456"
          },
          {
            country: "Panama (Panamá)",
            countryCode: "pa",
            countryNumber: "507",
            countryNumberExample: "6123-4567"
          },
          {
            country: "Papua New Guinea",
            countryCode: "pg",
            countryNumber: "675",
            countryNumberExample: "7012 3456"
          },
          {
            country: "Paraguay",
            countryCode: "py",
            countryNumber: "595",
            countryNumberExample: "0961 456789"
          },
          {
            country: "Peru (Perú)",
            countryCode: "pe",
            countryNumber: "51",
            countryNumberExample: "912 345 678"
          },
          {
            country: "Philippines",
            countryCode: "ph",
            countryNumber: "63",
            countryNumberExample: "0905 123 4567"
          },
          {
            country: "Poland (Polska)",
            countryCode: "pl",
            countryNumber: "48",
            countryNumberExample: "512 345 678"
          },
          {
            country: "Portugal",
            countryCode: "pt",
            countryNumber: "351",
            countryNumberExample: "912 345 678"
          },
          {
            country: "Puerto Rico",
            countryCode: "pr",
            countryNumber: "1",
            countryNumberExample: "(787) 234-5678"
          },
          {
            country: "Qatar (‫قطر‬‎)",
            countryCode: "qa",
            countryNumber: "974",
            countryNumberExample: "3312 3456"
          },
          {
            country: "Réunion (La Réunion)",
            countryCode: "re",
            countryNumber: "262",
            countryNumberExample: "0692 12 34 56"
          },
          {
            country: "Romania (România)",
            countryCode: "ro",
            countryNumber: "40",
            countryNumberExample: "0712 034 567"
          },
          {
            country: "Russia (Россия)",
            countryCode: "ru",
            countryNumber: "7",
            countryNumberExample: "8 (912) 345-67-89"
          },
          {
            country: "Rwanda",
            countryCode: "rw",
            countryNumber: "250",
            countryNumberExample: "0720 123 456"
          },
          {
            country: "Saint Barthélemy",
            countryCode: "bl",
            countryNumber: "590",
            countryNumberExample: "0690 00 12 34"
          },
          {
            country: "Saint Helena",
            countryCode: "sh",
            countryNumber: "290",
            countryNumberExample: "51234"
          },
          {
            country: "Saint Kitts and Nevis",
            countryCode: "kn",
            countryNumber: "1",
            countryNumberExample: "(869) 765-2917"
          },
          {
            country: "Saint Lucia",
            countryCode: "lc",
            countryNumber: "1",
            countryNumberExample: "(758) 284-5678"
          },
          {
            country: "Saint Martin (Saint-Martin (partie française))",
            countryCode: "mf",
            countryNumber: "590",
            countryNumberExample: "0690 00 12 34"
          },
          {
            country: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
            countryCode: "pm",
            countryNumber: "508",
            countryNumberExample: "055 12 34"
          },
          {
            country: "Saint Vincent and the Grenadines",
            countryCode: "vc",
            countryNumber: "1",
            countryNumberExample: "(784) 430-1234"
          },
          {
            country: "Samoa",
            countryCode: "ws",
            countryNumber: "685",
            countryNumberExample: "72 12345"
          },
          {
            country: "San Marino",
            countryCode: "sm",
            countryNumber: "378",
            countryNumberExample: "66 66 12 12"
          },
          {
            country: "São Tomé and Príncipe (São Tomé e Príncipe)",
            countryCode: "st",
            countryNumber: "239",
            countryNumberExample: "981 2345"
          },
          {
            country: "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
            countryCode: "sa",
            countryNumber: "966",
            countryNumberExample: "051 234 5678"
          },
          {
            country: "Senegal (Sénégal)",
            countryCode: "sn",
            countryNumber: "221",
            countryNumberExample: "70 123 45 67"
          },
          {
            country: "Serbia (Србија)",
            countryCode: "rs",
            countryNumber: "381",
            countryNumberExample: "060 1234567"
          },
          {
            country: "Seychelles",
            countryCode: "sc",
            countryNumber: "248",
            countryNumberExample: "2 510 123"
          },
          {
            country: "Sierra Leone",
            countryCode: "sl",
            countryNumber: "232",
            countryNumberExample: "(025) 123456"
          },
          {
            country: "Singapore",
            countryCode: "sg",
            countryNumber: "65",
            countryNumberExample: "8123 4567"
          },
          {
            country: "Sint Maarten",
            countryCode: "sx",
            countryNumber: "1",
            countryNumberExample: "(721) 520-5678"
          },
          {
            country: "Slovakia (Slovensko)",
            countryCode: "sk",
            countryNumber: "421",
            countryNumberExample: "0912 123 456"
          },
          {
            country: "Slovenia (Slovenija",
            countryCode: "si",
            countryNumber: "386",
            countryNumberExample: "031 234 567"
          },
          {
            country: "Solomon Islands",
            countryCode: "sb",
            countryNumber: "677",
            countryNumberExample: "74 21234"
          },
          {
            country: "Somalia (Soomaaliya)",
            countryCode: "so",
            countryNumber: "252",
            countryNumberExample: "7 1123456"
          },
          {
            country: "South Africa",
            countryCode: "za",
            countryNumber: "27",
            countryNumberExample: "071 123 4567"
          },
          {
            country: "South Korea (대한민국)",
            countryCode: "kr",
            countryNumber: "82",
            countryNumberExample: "010-2000-0000"
          },
          {
            country: "South Sudan (‫جنوب السودان‬‎)",
            countryCode: "ss",
            countryNumber: "211",
            countryNumberExample: "0977 123 456"
          },
          {
            country: "Spain (España)",
            countryCode: "es",
            countryNumber: "34",
            countryNumberExample: "612 34 56 78"
          },
          {
            country: "Sri Lanka (ශ්‍රී ලංකාව)",
            countryCode: "lk",
            countryNumber: "94",
            countryNumberExample: "071 234 5678"
          },
          {
            country: "Sudan (‫السودان‬‎)",
            countryCode: "sd",
            countryNumber: "249",
            countryNumberExample: "091 123 1234"
          },
          {
            country: "Suriname",
            countryCode: "sr",
            countryNumber: "597",
            countryNumberExample: "741-2345"
          },
          {
            country: "Svalbard and Jan Mayen",
            countryCode: "sj",
            countryNumber: "47",
            countryNumberExample: "412 34 567"
          },
          {
            country: "Sweden (Sverige)",
            countryCode: "se",
            countryNumber: "46",
            countryNumberExample: "070-123 45 67"
          },
          {
            country: "Switzerland (Schweiz)",
            countryCode: "ch",
            countryNumber: "41",
            countryNumberExample: "078 123 45 67"
          },
          {
            country: "Syria (‫سوريا‬‎)",
            countryCode: "sy",
            countryNumber: "963",
            countryNumberExample: "0944 567 890"
          },
          {
            country: "Taiwan (台灣)",
            countryCode: "tw",
            countryNumber: "886",
            countryNumberExample: "0912 345 678"
          },
          {
            country: "Tajikistan",
            countryCode: "tj",
            countryNumber: "992",
            countryNumberExample: "917 12 3456"
          },
          {
            country: "Tanzania",
            countryCode: "tz",
            countryNumber: "255",
            countryNumberExample: "0621 234 567"
          },
          {
            country: "Thailand (ไทย)",
            countryCode: "th",
            countryNumber: "66",
            countryNumberExample: "081 234 5678"
          },
          {
            country: "Timor-Leste",
            countryCode: "tl",
            countryNumber: "670",
            countryNumberExample: "7721 2345"
          },
          {
            country: "Togo",
            countryCode: "tg",
            countryNumber: "228",
            countryNumberExample: "90 11 23 45"
          },
          {
            country: "Tokelau",
            countryCode: "tk",
            countryNumber: "690",
            countryNumberExample: "7290"
          },
          {
            country: "Tonga",
            countryCode: "to",
            countryNumber: "676",
            countryNumberExample: "771 5123"
          },
          {
            country: "Trinidad and Tobago",
            countryCode: "tt",
            countryNumber: "1",
            countryNumberExample: "(868) 291-1234"
          },
          {
            country: "Tunisia (‫تونس‬‎)",
            countryCode: "tn",
            countryNumber: "216",
            countryNumberExample: "20 123 456"
          },
          {
            country: "Turkey (Türkiye)",
            // As Bayrakları As As
            countryCode: "tr",
            countryNumber: "90",
            countryNumberExample: "0543 653 51 01"
          },
          {
            country: "Turkmenistan",
            countryCode: "tm",
            countryNumber: "993",
            countryNumberExample: "8 66 123456"
          },
          {
            country: "Turks and Caicos Islands",
            countryCode: "tc",
            countryNumber: "1",
            countryNumberExample: "(649) 231-1234"
          },
          {
            country: "Tuvalu",
            countryCode: "tv",
            countryNumber: "688",
            countryNumberExample: "90 1234"
          },
          {
            country: "U.S. Virgin Islands",
            countryCode: "vi",
            countryNumber: "1",
            countryNumberExample: "(340) 642-1234"
          },
          {
            country: "Uganda",
            countryCode: "ug",
            countryNumber: "256",
            countryNumberExample: "0712 345678"
          },
          {
            country: "Ukraine (Україна)",
            countryCode: "ua",
            countryNumber: "380",
            countryNumberExample: "050 123 4567"
          },
          {
            country: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
            countryCode: "ae",
            countryNumber: "971",
            countryNumberExample: "050 123 4567"
          },
          {
            country: "United Kingdom",
            countryCode: "gb",
            countryNumber: "44",
            countryNumberExample: "07400 123456"
          },
          {
            country: "United States",
            countryCode: "us",
            countryNumber: "1",
            countryNumberExample: "(201) 555-0123"
          },
          {
            country: "Uruguay",
            countryCode: "uy",
            countryNumber: "598",
            countryNumberExample: "094 231 234"
          },
          {
            country: "Uzbekistan (Oʻzbekiston)",
            countryCode: "uz",
            countryNumber: "998",
            countryNumberExample: "8 91 234 56 78"
          },
          {
            country: "Vanuatu",
            countryCode: "vu",
            countryNumber: "678",
            countryNumberExample: "591 2345"
          },
          {
            country: "Vatican City (Città del Vaticano)",
            countryCode: "va",
            countryNumber: "39",
            countryNumberExample: "312 345 6789"
          },
          {
            country: "Venezuela",
            countryCode: "ve",
            countryNumber: "58",
            countryNumberExample: "0412-1234567"
          },
          {
            country: "Vietnam (Việt Nam)",
            countryCode: "vn",
            countryNumber: "84",
            countryNumberExample: "091 234 56 78"
          },
          {
            country: "Wallis and Futuna (Wallis-et-Futuna)",
            countryCode: "wf",
            countryNumber: "681",
            countryNumberExample: "50 12 34"
          },
          {
            country: "Western Sahara (‫الصحراء الغربية‬‎)",
            countryCode: "eh",
            countryNumber: "212",
            countryNumberExample: "0650-123456"
          },
          {
            country: "Yemen (‫اليمن‬‎)",
            countryCode: "ye",
            countryNumber: "967",
            countryNumberExample: "0712 345 678"
          },
          {
            country: "Zambia",
            countryCode: "zm",
            countryNumber: "260",
            countryNumberExample: "095 5123456"
          },
          {
            country: "Zimbabwe",
            countryCode: "zw",
            countryNumber: "263",
            countryNumberExample: "071 234 5678"
          },
          {
            country: "Åland Islands",
            countryCode: "ax",
            countryNumber: "358",
            countryNumberExample: "041 2345678"
          }
        ],
        onlyCountries: [],
        primaryCountries: [],
        currentCountries: "",
        autoCountry: false,
        geoCountries: function (callback) {
          $.get("https://ipwhois.app/json/", function (data) {
            callback(data.country_code);
          });
        },
        changeCountry: function () {},
        placeholderNumber: true,
        valueNumberCode: false,
        searchBar: true
      },
      options
    );
    return this.each(function (i) {
      function listCurrentHtml(current) {
        if (settings.placeholderNumber === true) {
          aksTelephone
            .find(".aks-TI-input input")
            .attr("placeholder", current.countryNumberExample);
        }
        if (settings.valueNumberCode === true) {
          aksTelephone
            .find(".aks-TI-input input")
            .val("+" + current.countryNumber);
        }
        var html =
          '<div class="aks-TI-btn"><div class="aks-TI-btn-flag"><img src="flags/' +
          current.countryCode +
          '.svg" alt="' +
          current.country +
          '" /></div><div class="aks-TI-btn-arrow"><div class="aks-TI-btn-arrow-down"><svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"><path d="M6 9l6 6 6-6"></path></svg></div></div>  </div>';
        return html;
      }

      function listCurrent() {
        if (settings.currentCountries.length) {
          var currentCountries = settings.allCountries.filter(function (
            country
          ) {
            return settings.currentCountries.indexOf(country.countryCode) > -1;
          });
        } else {
          var currentCountries = settings.allCountries;
        }
        return currentCountries[0];
      }

      function listSearch() {
        var html =
          '<div class="aks-TI-search-row"><div class="aks-TI-search-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path><path d="M16 16l4.5 4.5"></path></svg></div><div class="aks-TI-search-input"><input type="text" id="aks-telephone-search-input" name="aks-telephone-search-input" placeholder="Search..." /></div></div>';
        return html;
      }
      function listBtn(btn) {
        var html =
          '<div data-country="' +
          btn.country +
          '" data-country-code="' +
          btn.countryCode +
          '" data-country-number="' +
          btn.countryNumber +
          '" class="aks-TI-item" role="button"><div class="aks-TI-item-row"><div class="aks-TI-item-flag"><img src="flags/' +
          btn.countryCode +
          '.svg" alt="' +
          btn.country +
          '" /></div><div class="aks-TI-item-title">' +
          btn.country +
          "</div></div></div>";
        return html;
      }
      function listCountries() {
        if (settings.onlyCountries.length) {
          var lowerCaseOnlyCountries = settings.onlyCountries.map(function (
            country
          ) {
            return country.toLowerCase();
          });
          var countries = settings.allCountries.filter(function (country) {
            return lowerCaseOnlyCountries.indexOf(country.countryCode) > -1;
          });
        } else {
          var countries = settings.allCountries;
        }
        if (settings.primaryCountries.length) {
          var primarycountries = settings.allCountries.filter(function (
            country
          ) {
            return settings.primaryCountries.indexOf(country.countryCode) > -1;
          });
          primarycountries.map(function (countriesLists, i) {
            return aksTelephone
              .find(".aks-TI-lists")
              .append(listBtn(countriesLists));
          });
          aksTelephone
            .find(".aks-TI-lists")
            .append('<div class="aks-TI-hr"></div>');
        }
        countries.map(function (countriesLists, i) {
          return aksTelephone
            .find(".aks-TI-lists")
            .append(listBtn(countriesLists));
        });
      }
      $(aks).before(
        '<div class="aks-telephone-input"><div class="aks-TI-row"><div class="aks-TI-wrap aks-TI-current"></div><div class="aks-TI-wrap aks-TI-input"></div></div><div class="aks-TI-list"><div class="aks-TI-search"></div> <div class="aks-TI-lists"> </div></div></div>'
      );
      var aksTelephone = $(".aks-telephone-input");
      var aksTelephoneTarget = aksTelephone.find(".aks-TI-input");
      $(aks).remove().clone().appendTo(aksTelephoneTarget);

      if (settings.autoCountry === true) {
        settings.geoCountries(function (data) {
          var currentCountries = settings.allCountries.filter(function (
            country
          ) {
            return data.toLowerCase().indexOf(country.countryCode) > -1;
          });
          aksTelephone
            .find(".aks-TI-current")
            .append(listCurrentHtml(currentCountries[0]));
        });
      } else {
        aksTelephone
          .find(".aks-TI-current")
          .append(listCurrentHtml(listCurrent()));
      }

      if (settings.searchBar === true) {
        aksTelephone.find(".aks-TI-search").append(listSearch());
        aksTelephone
          .find("[name=aks-telephone-search-input]")
          .keyup(function () {
            var filter = $(this).val(),
              count = 0;
            aksTelephone.find(".aks-TI-item").each(function () {
              if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
              } else {
                $(this).show();
                count++;
              }
            });
          });
      }

      listCountries();

      aksTelephone.find(".aks-TI-current").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        aksTelephone.find(".aks-TI-list").toggleClass("aks-TI-opened");
      });
      aksTelephone.find(".aks-TI-list").click(function (e) {
        e.stopPropagation();
      });

      $("body").on("click", function (e) {
        aksTelephone.find(".aks-TI-list").removeClass("aks-TI-opened");
        aksTelephone.find(".aks-TI-item").each(function (i, item) {
          if ($(item).hasClass("aks-active")) {
            $(item)[0].scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "center"
            });
          }
        });
      });

      aksTelephone.find(".aks-TI-item").click(function () {
        $(this).addClass("aks-active");
        $(this).siblings().removeClass("aks-active");
        aksTelephone.find(".aks-TI-list").removeClass("aks-TI-opened");
        var getCountryCode = $(this).attr("data-country-code");
        var currentCountriesPush = settings.allCountries.filter(function (
          country
        ) {
          return getCountryCode.indexOf(country.countryCode) > -1;
        });
        aksTelephone
          .find(".aks-TI-current")
          .html(listCurrentHtml(currentCountriesPush[0]));
        settings.changeCountry.call(currentCountriesPush[0]);
      });
    });
  };
})(jQuery);
