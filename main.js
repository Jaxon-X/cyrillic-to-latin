class CyrillicToLatin {
  constructor() {
    this.mapping = {
      А: "A",
      Б: "B",
      В: "V",
      Г: "G",
      Д: "D",
      Е: "E",
      Ё: "Yo",
      Ж: "J",
      З: "Z",
      И: "I",
      Й: "Y",
      К: "K",
      Л: "L",
      М: "M",
      Н: "N",
      О: "O",
      П: "P",
      Р: "R",
      С: "S",
      Т: "T",
      У: "U",
      Ф: "F",
      Х: "X",
      Ц: "Ts",
      Ч: "Ch",
      Ш: "Sh",
      Щ: "Sh",
      Ы: "I",
      Э: "E",
      Ю: "Yu",
      Я: "Ya",
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "yo",
      ж: "j",
      з: "z",
      и: "i",
      й: "y",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "x",
      ц: "ts",
      ч: "ch",
      ш: "sh",
      щ: "sh",
      э: "e",
      ю: "yu",
      я: "ya",
      " ": " ",
    };
  }

  convert(text) {
    let result = "";
    for (const char of text) {
      if (this.mapping[char]) {
        result += this.mapping[char];
      }
    }
    return result;
  }
}

module.exports = new CyrillicToLatin();
