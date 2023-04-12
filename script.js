// const numberConvert = (arr) => {
//   const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
//   let newArr = [];
//   arr.split("").forEach((x) => {
//     newArr.push(arabicNumerals[x]);
//   });
//   return newArr.join("");
// };

// console.log();

// const play = () => {
//   const quran = new Audio(
//     `https://cdn.islamic.network/quran/audio-surah/128/ar.muhammadabdulkareem/${surah}.mp3`
//   );
//   quran.play();
// };

// const ayahPlay = (num) => {
//   const quran = new Audio(
//     `https://cdn.islamic.network/quran/audio/192/ar.abdurrahmaansudais/${num}.mp3`
//   );
//   quran.play();
// };

// console.log(num("3 - Al-Imran"));

// fetch("http://api.alquran.cloud/v1/ayah/262/editions/en.asad")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const h1 = document.querySelector(`h1`);

// let i = 0,
//   text;

// text = "hello world";

// const typing = () => {
//   if (i < text.length) {
//     document.querySelector("h1").innerHTML += text[i];
//     i++;
//     console.log(i);
//     setTimeout(typing, 100);
//   }
// };

// typing();
// const main = [
//   {
//     number: 1,
//     name: "Al-Fatiha",
//     arabicName: "الفاتحة",
//   },
//   {
//     number: 2,
//     name: "Al-Baqarah",
//     arabicName: "البقرة",
//   },
//   {
//     number: 3,
//     name: "Al-Imran",
//     arabicName: "آل عمران",
//   },
//   {
//     number: 4,
//     name: "An-Nisa",
//     arabicName: "النساء",
//   },
//   {
//     number: 5,
//     name: "Al-Maidah",
//     arabicName: "المائدة",
//   },
//   {
//     number: 6,
//     name: "Al-An`am",
//     arabicName: "الأنعام",
//   },
//   {
//     number: 7,
//     name: "Al-A`raf",
//     arabicName: "الأعراف",
//   },
//   {
//     number: 8,
//     name: "Al-Anfal",
//     arabicName: "الأنفال",
//   },
//   {
//     number: 9,
//     name: "At-Tawbah",
//     arabicName: "التوبة",
//   },
//   {
//     number: 10,
//     name: "Yunus",
//     arabicName: "يونس",
//   },
//   {
//     number: 11,
//     name: "Hud",
//     arabicName: "هود",
//   },
//   {
//     number: 12,
//     name: "Yusuf",
//     arabicName: "يوسف",
//   },
//   {
//     number: 13,
//     name: "Ar-Ra`d",
//     arabicName: "الرعد",
//   },
//   {
//     number: 14,
//     name: "Ibrahim",
//     arabicName: "إبراهيم",
//   },
//   {
//     number: 15,
//     name: "Al-Hijr",
//     arabicName: "الحجر",
//   },
//   {
//     number: 16,
//     name: "An-Nahl",
//     arabicName: "النحل",
//   },
//   {
//     number: 17,
//     name: "Al-Isra",
//     arabicName: "الإسراء",
//   },
//   {
//     number: 18,
//     name: "Al-Kahf",
//     arabicName: "الكهف",
//   },
//   {
//     number: 19,
//     name: "Maryam",
//     arabicName: "مريم",
//   },
//   {
//     number: 20,
//     name: "Taha",
//     arabicName: "طه",
//   },
//   {
//     number: 21,
//     name: "Al-Anbiya",
//     arabicName: "الأنبياء",
//   },
//   {
//     number: 22,
//     name: "Al-Hajj",
//     arabicName: "الحج",
//   },
//   {
//     number: 23,
//     name: "Al-Mu`minun",
//     arabicName: "المؤمنون",
//   },
//   {
//     number: 24,
//     name: "An-Nur",
//     arabicName: "النور",
//   },
//   {
//     number: 25,
//     name: "Al-Furqan",
//     arabicName: "الفرقان",
//   },
//   {
//     number: 26,
//     name: "Ash-Shu`ara",
//     arabicName: "الشعراء",
//   },
//   {
//     number: 27,
//     name: "An-Naml",
//     arabicName: "النمل",
//   },
//   {
//     number: 28,
//     name: "Al-Qasas",
//     arabicName: "القصص",
//   },
//   {
//     number: 29,
//     name: "Al-Ankabut",
//     arabicName: "العنكبوت",
//   },
//   {
//     number: 30,
//     name: "Ar-Rum",
//     arabicName: "الروم",
//   },
//   {
//     number: 31,
//     name: "Luqman",
//     arabicName: "لقمان",
//   },
//   {
//     number: 32,
//     name: "As-Sajdah",
//     arabicName: "السجدة",
//   },
//   {
//     number: 33,
//     name: "Al-Ahzab",
//     arabicName: "الأحزاب",
//   },
//   {
//     number: 34,
//     name: "Saba",
//     arabicName: "سبأ",
//   },
//   {
//     number: 35,
//     name: "Fatir",
//     arabicName: "فاطر",
//   },
//   {
//     number: 36,
//     name: "Ya-Sin",
//     arabicName: "يس",
//   },
//   {
//     number: 37,
//     name: "As-Saffat",
//     arabicName: "الصافات",
//   },
//   {
//     number: 38,
//     name: "Sad",
//     arabicName: "ص",
//   },
//   {
//     number: 39,
//     name: "Az-Zumar",
//     arabicName: "الزمر",
//   },
//   {
//     number: 40,
//     name: "Ghafir",
//     arabicName: "غافر",
//   },
//   {
//     number: 41,
//     name: "Fussilat",
//     arabicName: "فصلت",
//   },
//   {
//     number: 42,
//     name: "Ash-Shura",
//     arabicName: "الشورى",
//   },
//   {
//     number: 43,
//     name: "Az-Zukhruf",
//     arabicName: "الزخرف",
//   },
//   {
//     number: 44,
//     name: "Ad-Dukhan",
//     arabicName: "الدخان",
//   },
//   {
//     number: 45,
//     name: "Al-Jathiyah",
//     arabicName: "الجاثية",
//   },
//   {
//     number: 46,
//     name: "Al-Ahqaf",
//     arabicName: "الأحقاف",
//   },
//   {
//     number: 47,
//     name: "Muhammad",
//     arabicName: "محمد",
//   },
//   {
//     number: 48,
//     name: "Al-Fath",
//     arabicName: "الفتح",
//   },
//   {
//     number: 49,
//     name: "Al-Hujurat",
//     arabicName: "الحجرات",
//   },
//   {
//     number: 50,
//     name: "Qaf",
//     arabicName: "ق",
//   },
//   {
//     number: 51,
//     name: "Adh-Dhariyat",
//     arabicName: "الذاريات",
//   },
//   {
//     number: 52,
//     name: "At-Tur",
//     arabicName: "الطور",
//   },
//   {
//     number: 53,
//     name: "An-Najm",
//     arabicName: "النجم",
//   },
//   {
//     number: 54,
//     name: "Al-Qamar",
//     arabicName: "القمر",
//   },
//   {
//     number: 55,
//     name: "Ar-Rahman",
//     arabicName: "الرحمن",
//   },
//   {
//     number: 56,
//     name: "Al-Waqiah",
//     arabicName: "الواقعة",
//   },
//   {
//     number: 57,
//     name: "Al-Hadid",
//     arabicName: "الحديد",
//   },
//   {
//     number: 58,
//     name: "Al-Mujadilah",
//     arabicName: "المجادلة",
//   },
//   {
//     number: 59,
//     name: "Al-Hashr",
//     arabicName: "الحشر",
//   },
//   {
//     number: 60,
//     name: "Al-Mumtahanah",
//     arabicName: "الممتحنة",
//   },
//   {
//     number: 61,
//     name: "As-Saff",
//     arabicName: "الصف",
//   },
//   {
//     number: 62,
//     name: "Al-Jumuah",
//     arabicName: "الجمعة",
//   },
//   {
//     number: 63,
//     name: "Al-Munafiqun",
//     arabicName: "المنافقون",
//   },
//   {
//     number: 64,
//     name: "At-Taghabun",
//     arabicName: "التغابن",
//   },
//   {
//     number: 65,
//     name: "At-Talaq",
//     arabicName: "الطلاق",
//   },
//   {
//     number: 66,
//     name: "At-Tahrim",
//     arabicName: "التحريم",
//   },
//   {
//     number: 67,
//     name: "Al-Mulk",
//     arabicName: "الملك",
//   },
//   {
//     number: 68,
//     name: "Al-Qalam",
//     arabicName: "القلم",
//   },
//   {
//     number: 69,
//     name: "Al-Haqqah",
//     arabicName: "الحاقة",
//   },
//   {
//     number: 70,
//     name: "Al-Maarij",
//     arabicName: "المعارج",
//   },
//   {
//     number: 71,
//     name: "Nuh",
//     arabicName: "نوح",
//   },
//   {
//     number: 72,
//     name: "Al-Jinn",
//     arabicName: "الجن",
//   },
//   {
//     number: 73,
//     name: "Al-Muzzammil",
//     arabicName: "المزمل",
//   },
//   {
//     number: 74,
//     name: "Al-Muddaththir",
//     arabicName: "المدثر",
//   },
//   {
//     number: 75,
//     name: "Al-Qiyamah",
//     arabicName: "القيامة",
//   },
//   {
//     number: 76,
//     name: "Al-Insan",
//     arabicName: "الإنسان",
//   },
//   {
//     number: 77,
//     name: "Al-Mursalat",
//     arabicName: "المرسلات",
//   },
//   {
//     number: 78,
//     name: "An-Naba",
//     arabicName: "النبأ",
//   },
//   {
//     number: 79,
//     name: "An-Naziat",
//     arabicName: "النازعات",
//   },
//   {
//     number: 80,
//     name: "Abasa",
//     arabicName: "عبس",
//   },
//   {
//     number: 81,
//     name: "At-Takwir",
//     arabicName: "التكوير",
//   },
//   {
//     number: 82,
//     name: "Al-Infitar",
//     arabicName: "الإنفطار",
//   },
//   {
//     number: 83,
//     name: "Al-Mutaffifin",
//     arabicName: "المطففين",
//   },
//   {
//     number: 84,
//     name: "Al-Inshiqaq",
//     arabicName: "الانشقاق",
//   },
//   {
//     number: 85,
//     name: "Al-Buruj",
//     arabicName: "البروج",
//   },
//   {
//     number: 86,
//     name: "At-Tariq",
//     arabicName: "الطارق",
//   },
//   {
//     number: 87,
//     name: "Al-Ala",
//     arabicName: "الأعلى",
//   },
//   {
//     number: 88,
//     name: "Al-Ghashiyah",
//     arabicName: "الغاشية",
//   },
//   {
//     number: 89,
//     name: "Al-Fajr",
//     arabicName: "الفجر",
//   },
//   {
//     number: 90,
//     name: "Al-Balad",
//     arabicName: "البلد",
//   },
//   {
//     number: 91,
//     name: "Ash-Shams",
//     arabicName: "الشمس",
//   },
//   {
//     number: 92,
//     name: "Al-Layl",
//     arabicName: "الليل",
//   },
//   {
//     number: 93,
//     name: "Ad-Duha",
//     arabicName: "الضحى",
//   },
//   {
//     number: 94,
//     name: "Ash-Sharh",
//     arabicName: "الشرح",
//   },
//   {
//     number: 95,
//     name: "At-Tin",
//     arabicName: "التين",
//   },
//   {
//     number: 96,
//     name: "Al-Alaq",
//     arabicName: "العلق",
//   },
//   {
//     number: 97,
//     name: "Al-Qadr",
//     arabicName: "القدر",
//   },
//   {
//     number: 98,
//     name: "Al-Baiyinah",
//     arabicName: "البينة",
//   },
//   {
//     number: 99,
//     name: "Az-Zalzalah",
//     arabicName: "الزلزلة",
//   },
//   {
//     number: 100,
//     name: "Al-Adiyat",
//     arabicName: "العاديات",
//   },
//   {
//     number: 101,
//     name: "Al-Qariah",
//     arabicName: "القارعة",
//   },
//   {
//     number: 102,
//     name: "At-Takathur",
//     arabicName: "التكاثر",
//   },
//   {
//     number: 103,
//     name: "Al-Asr",
//     arabicName: "العصر",
//   },
//   {
//     number: 104,
//     name: "Al-Humazah",
//     arabicName: "الهمزة",
//   },
//   {
//     number: 105,
//     name: "Al-Fil",
//     arabicName: "الفيل",
//   },
//   {
//     number: 106,
//     name: "Quraish",
//     arabicName: "قريش",
//   },
//   {
//     number: 107,
//     name: "Al-Maun",
//     arabicName: "الماعون",
//   },
//   {
//     number: 108,
//     name: "Al-Kauthar",
//     arabicName: "الكوثر",
//   },
//   {
//     number: 109,
//     name: "Al-Kafirun",
//     arabicName: "الكافرون",
//   },
//   {
//     number: 110,
//     name: "An-Nasr",
//     arabicName: "النصر",
//   },
//   {
//     number: 111,
//     name: "Al-Lahab",
//     arabicName: "المسد",
//   },
//   {
//     number: 112,
//     name: "Al-Ikhlas",
//     arabicName: "الإخلاص",
//   },
//   {
//     number: 113,
//     name: "Al-Falaq",
//     arabicName: "الفلق",
//   },
//   {
//     number: 114,
//     name: "An-Nas",
//     arabicName: "الناس",
//   },
// ];

// const num = [
//   7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111,
//   110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45,
//   83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55,
//   78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20,
//   56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21,
//   11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6,
// ];

// const newMain = main.map((x, i) => ({ ...x, verses: num[i] }));

// console.log(newMain);

fetch("http://api.alquran.cloud/v1/edition?language=en")
  .then((res) => res.json())
  .then((data) => console.log(data));
