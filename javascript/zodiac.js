console.log('The zodiac system is successfully imported.')

const arrayZodiac = [
    ['Aries', 'March 21st - April 20th'],
    ['Taurus', 'April 21st - May 20th'],
    ['Gemini', 'May 21st - June 20th'],
    ['Cancer', 'June 21st - July 22nd'],
    ['Leo', 'July 23rd - August 22nd'],
    ['Virgo', 'August 23rd - September 22nd'],
    ['Libra', 'September 23rd - October 22nd'],
    ['Scorpio', 'October 23rd - November 21st'],
    ['Sagittarius', 'Noveber 22nd - December 21st'],
    ['Capicorn', 'January 1st - 19th<br>December 22nd - 31st'],
    ['Aquarius', 'January 20th - February 18th'],
    ['Pisces', 'February 19th - March 20th']
];

function findAstrologicalSequence(month, date) {
    if ((month === 3 && date >= 21) || (month === 4 && date <= 19)) {astrologicalSequence = 0;} 
    else if ((month === 4 && date >= 20) || (month === 5 && date <= 20)) {astrologicalSequence = 1;}
    else if ((month === 5 && date >= 21) || (month === 6 && date <= 21)) {astrologicalSequence = 2;}
    else if ((month === 6 && date >= 22) || (month === 7 && date <= 22)) {astrologicalSequence = 3;}
    else if ((month === 7 && date >= 23) || (month === 8 && date <= 22)) {astrologicalSequence = 4;}
    else if ((month === 8 && date >= 23) || (month === 9 && date <= 22)) {astrologicalSequence = 5;}
    else if ((month === 9 && date >= 23) || (month === 10 && date <= 23)) {astrologicalSequence = 6;}
    else if ((month === 10 && date >= 24) || (month === 11 && date <= 21)) {astrologicalSequence = 7;}
    else if ((month === 11 && date >= 22) || (month === 12 && date <= 21)) {astrologicalSequence = 8;}
    else if ((month === 12 && date >= 22) || (month === 1 && date <= 19)) {astrologicalSequence = 9;}
    else if ((month === 1 && date >= 20) || (month === 2 && date <= 18)) {astrologicalSequence = 10;}
    else if ((month === 2 && date >= 19) || (month === 3 && date <= 20)) {astrologicalSequence = 11;}

    return astrologicalSequence;
}
