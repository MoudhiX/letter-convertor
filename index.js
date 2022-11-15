function arabicToEnglish(str) {
    let result ;
    let strinVal = "";
    var charArray = str.split('');
    charArray.forEach(element => {

        result = lettersUnicode.filter( x => x.asciiAr == element.charCodeAt(0));
        strinVal += result[0].charEn ;

    });
    return strinVal ;
}



module.exports.arabicToEnglish =  arabicToEnglish ;


var lettersUnicode = [] ;
lettersUnicode = [
    {
      "asciiAr": 32,
      "charAr": " ",
      "charEn": " ",
      "asciiEn": "32"
    },
     {
       "asciiAr": 1570,
       "charAr": "",
       "charEn": "",
       "asciiEn": ""
     },
     {
       "asciiAr": 1571,
       "charAr": "أ",
       "charEn": "A",
       "asciiEn": "97"
     },
     {
       "asciiAr": 1572,
       "charAr": "ؤ",
       "charEn": " ",
       "asciiEn": ""
     },
     {
       "asciiAr": 1573,
       "charAr": "إ",
       "charEn": "E",
       "asciiEn": "101"
     },
     {
       "asciiAr": 1574,
       "charAr": "ئ",
       "charEn": "A",
       "asciiEn": "97"
     },
     {
       "asciiAr": 1575,
       "charAr": "ا",
       "charEn": "A",
       "asciiEn": "97"
     },
     {
       "asciiAr": 1576,
       "charAr": "ب",
       "charEn": "B",
       "asciiEn": "98"
     },
     {
       "asciiAr": 1577,
       "charAr": "ة",
       "charEn": "H",
       "asciiEn": "104"
     },
     {
       "asciiAr": 1578,
       "charAr": "ت",
       "charEn": "T",
       "asciiEn": "116"
     },
     {
       "asciiAr": 1579,
       "charAr": "ث",
       "charEn": "TH",
       "asciiEn": "116,104"
     },
     {
       "asciiAr": 1580,
       "charAr": "ج",
       "charEn": "J",
       "asciiEn": "106"
     },
     {
       "asciiAr": 1581,
       "charAr": "ح",
       "charEn": "H",
       "asciiEn": "104"
     },
     {
       "asciiAr": 1582,
       "charAr": "خ",
       "charEn": "KH",
       "asciiEn": "107,104"
     },
     {
       "asciiAr": 1583,
       "charAr": "د",
       "charEn": "D",
       "asciiEn": "100"
     },
     {
       "asciiAr": 1584,
       "charAr": "ذ",
       "charEn": "TH",
       "asciiEn": "116,104"
     },
     {
       "asciiAr": 1585,
       "charAr": "ر",
       "charEn": "R",
       "asciiEn": "114"
     },
     {
       "asciiAr": 1586,
       "charAr": "ز",
       "charEn": "Z",
       "asciiEn": "122"
     },
     {
       "asciiAr": 1587,
       "charAr": "س",
       "charEn": "S",
       "asciiEn": "115"
     },
     {
       "asciiAr": 1588,
       "charAr": "ش",
       "charEn": "SH",
       "asciiEn": "115,104"
     },
     {
       "asciiAr": 1589,
       "charAr": "ص",
       "charEn": "S",
       "asciiEn": "115"
     },
     {
       "asciiAr": 1590,
       "charAr": "ض",
       "charEn": "D",
       "asciiEn": "100"
     },
     {
       "asciiAr": 1591,
       "charAr": "ط",
       "charEn": "T",
       "asciiEn": "116"
     },
     {
       "asciiAr": 1592,
       "charAr": "ظ",
       "charEn": "Z",
       "asciiEn": "122"
     },
     {
       "asciiAr": 1593,
       "charAr": "ع",
       "charEn": "A",
       "asciiEn": "97"
     },
     {
       "asciiAr": 1594,
       "charAr": "غ",
       "charEn": "GH",
       "asciiEn": "103,104"
     },
     {
       "asciiAr": 1595,
       "charAr": "ػ",
       "charEn": " ",
       "asciiEn": ""
     },
     {
       "asciiAr": 1596,
       "charAr": "ؼ",
       "charEn": " ",
       "asciiEn": ""
     },
     {
       "asciiAr": 1597,
       "charAr": "ؽ",
       "charEn": " ",
       "asciiEn": ""
     },
     {
       "asciiAr": 1598,
       "charAr": "ؾ",
       "charEn": " ",
       "asciiEn": ""
     },
     {
       "asciiAr": 1599,
       "charAr": "ؿ",
       "charEn": " ",
       "asciiEn": ""
     },
     {
       "asciiAr": 1600,
       "charAr": "ـ",
       "charEn": " ",
       "asciiEn": ""
     },
     {
       "asciiAr": 1601,
       "charAr": "ف",
       "charEn": "F",
       "asciiEn": "102"
     },
     {
       "asciiAr": 1602,
       "charAr": "ق",
       "charEn": "G",
       "asciiEn": "103"
     },
     {
       "asciiAr": 1603,
       "charAr": "ك",
       "charEn": "K",
       "asciiEn": "107"
     },
     {
       "asciiAr": 1604,
       "charAr": "ل",
       "charEn": "L",
       "asciiEn": "108"
     },
     {
       "asciiAr": 1605,
       "charAr": "م",
       "charEn": "M",
       "asciiEn": "109"
     },
     {
       "asciiAr": 1606,
       "charAr": "ن",
       "charEn": "N",
       "asciiEn": "110"
     },
     {
       "asciiAr": 1607,
       "charAr": "ه",
       "charEn": "H",
       "asciiEn": "104"
     },
     {
       "asciiAr": 1608,
       "charAr": "و",
       "charEn": "W",
       "asciiEn": "119"
     },
     {
       "asciiAr": 1609,
       "charAr": "ى",
       "charEn": "A",
       "asciiEn": "97"
     },
     {
       "asciiAr": 1610,
       "charAr": "ي",
       "charEn": "Y",
       "asciiEn": "121"
     },
     {
      "asciiAr": 48,
      "charAr": "",
      "charEn": "0",
      "asciiEn": "48"
    },
    {
      "asciiAr": 49,
      "charAr": "",
      "charEn": "1",
      "asciiEn": "49"
    },
    {
      "asciiAr": 50,
      "charAr": "",
      "charEn": "2",
      "asciiEn": "50"
    },
    {
      "asciiAr": 51,
      "charAr": "",
      "charEn": "3",
      "asciiEn": "51"
    },
    {
      "asciiAr": 52,
      "charAr": "",
      "charEn": "4",
      "asciiEn": "52"
    },
    {
      "asciiAr": 53,
      "charAr": "",
      "charEn": "5",
      "asciiEn": "53"
    },
    {
      "asciiAr": 54,
      "charAr": "",
      "charEn": "6",
      "asciiEn": "54"
    },
    {
      "asciiAr": 55,
      "charAr": "",
      "charEn": "7",
      "asciiEn": "55"
    },
    {
      "asciiAr": 56,
      "charAr": "",
      "charEn": "8",
      "asciiEn": "56"
    },
    {
      "asciiAr": 57,
      "charAr": "",
      "charEn": "9",
      "asciiEn": "57"
    }, 
    {
          "asciiAr": 1632,
          "charAr": "٠",
          "charEn": 0,
          "asciiEn": ""
    },
    {
          "asciiAr": 1633,
          "charAr": "١",
          "charEn": 1,
          "asciiEn": ""
    },
    {
          "asciiAr": 1634,
          "charAr": "٢",
          "charEn": 2,
          "asciiEn": ""
    },
    {
          "asciiAr": 1635,
          "charAr": "٣",
          "charEn": 3,
          "asciiEn": ""
    },
    {
          "asciiAr": 1636,
          "charAr": "٤",
          "charEn": 4,
          "asciiEn": ""
    },
    {
          "asciiAr": 1637,
          "charAr": "٥",
          "charEn": 5,
          "asciiEn": ""
    },
    {
          "asciiAr": 1638,
          "charAr": "٦",
          "charEn": 6,
          "asciiEn": ""
    },
    {
          "asciiAr": 1639,
          "charAr": "٧",
          "charEn": 7,
          "asciiEn": ""
    },
    {
          "asciiAr": 1640,
          "charAr": "٨",
          "charEn": 8,
          "asciiEn": ""
    },
    {
          "asciiAr": 1641,
          "charAr": "٩",
          "charEn": 9,
          "asciiEn": ""
    }
       
]  