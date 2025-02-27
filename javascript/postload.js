// Buttons collection

const headerHelpButton = document.getElementById('header-help');
const helpCloseButton = document.getElementById('help-close');
const locationButton = document.getElementById('location');
const closeButton = document.getElementById('close');
const submitButton = document.getElementById('submit');
const linkButton = document.getElementById('link');

const thumbnailButton0 = document.getElementById('chicago-l');
const thumbnailButton1 = document.getElementById('mbta-t');
const thumbnailButton2 = document.getElementById('nyc-subway');
const thumbnailButton3 = document.getElementById('path');
const thumbnailButton4 = document.getElementById('sir');
const thumbnailButton5 = document.getElementById('septa-metro');
const thumbnailButton6 = document.getElementById('patco');
const thumbnailButton7 = document.getElementById('dc-metro');
const thumbnailButton8 = document.getElementById('marta');
const thumbnailButton9 = document.getElementById('miami-metro');
const thumbnailButton10 = document.getElementById('la-metro');
const thumbnailButton11 = document.getElementById('bart');

// Alterable elements collection

const defaultHeader= document.getElementById('default');
const operatorHeader= document.getElementById('operator');
const mainSection= document.getElementById('main');
const helpSection= document.getElementById('help');
const contentSection= document.getElementById('content');

const promptText = document.getElementById('prompt');

const audioFile = document.getElementById('sfx');

const operatorsLogo = document.getElementById('logo');
const operatorsNameText = document.getElementById('operators-name');
const locationText = document.getElementById('location-text');
const pictureLargePhoto = document.getElementById('picture-large');
const imageLargePhoto = document.getElementById('image-large');

const zodiacSignText = document.getElementById('zodiac-sign');
const durationText = document.getElementById('duration');
const titleText = document.getElementById('title');
const descriptionText = document.getElementById('description');

// Buttons in headers

headerHelpButton.addEventListener('click', () => {displaySections(1)});

helpCloseButton.addEventListener('click', () => {displaySections(0)});

closeButton.addEventListener('click', () => {displaySections(0)});

// All data sets [index][...]

// cOperator [0-handle, 1-system name, 2-url]
// cLoation [0-text, 1-url]
// cWritings [0-title, 1-context]

function infoAlteration(zIndex) {
    operatorsLogo.src = 'media/logos/' + cOperator[zIndex][0] + '.svg';
    operatorsNameText.innerHTML = cOperator[zIndex][1];
    locationText.innerHTML = cLocation[zIndex][0];
    locationButton.href = cLocation[zIndex][1];

    pictureLargePhoto.srcset = 'media/images-optimized/' + cOperator[zIndex][0] + '.webp';
    imageLargePhoto.src = 'media/images-optimized/' + cOperator[zIndex][0] + '.jpg';
    linkButton.href = cOperator[zIndex][2];
    
    zodiacSignText.innerHTML = 'Astrological Sign: ' + arrayZodiac[zIndex][0];
    durationText.innerHTML = arrayZodiac[zIndex][1];
    titleText.innerHTML = cWritings[zIndex][0];
    descriptionText.innerHTML = cWritings[zIndex][1];

    displaySections(2);

    playAudio(zIndex);
}

// Function for info alteration

function displaySections(dIndex) {
    if (dIndex == 0) {
        defaultHeader.classList.remove('hide');
        operatorHeader.classList.add("hide");
        headerHelpButton.classList.remove('hide');
        helpCloseButton.classList.add("hide");
        mainSection.classList.remove('hide');
        helpSection.classList.add('hide');
        contentSection.classList.add("hide");
    } else if (dIndex == 1) {
        defaultHeader.classList.remove('hide');
        operatorHeader.classList.add("hide");
        headerHelpButton.classList.add("hide");
        helpCloseButton.classList.remove('hide');
        mainSection.classList.add('hide');
        helpSection.classList.remove('hide');
        contentSection.classList.add("hide");
    } else if (dIndex == 2) {
        defaultHeader.classList.add('hide');
        operatorHeader.classList.remove("hide");
        headerHelpButton.classList.remove('hide');
        helpCloseButton.classList.add("hide");
        mainSection.classList.add('hide');
        helpSection.classList.add('hide');
        contentSection.classList.remove("hide");
    }
}

// Function to play audios

function playAudio(zIndex) {
    audioFile.src = 'media/sfx/' + cOperator[zIndex][0] + '.mp3';
    audioFile.pause();
    audioFile.currentTime = 0;
    audioFile.play();
}

// Register clicks on thumbnail images

thumbnailButton0.addEventListener('click', () => {infoAlteration(0)});
thumbnailButton1.addEventListener('click', () => {infoAlteration(1)});
thumbnailButton2.addEventListener('click', () => {infoAlteration(2)});
thumbnailButton3.addEventListener('click', () => {infoAlteration(3)});
thumbnailButton4.addEventListener('click', () => {infoAlteration(4)});
thumbnailButton5.addEventListener('click', () => {infoAlteration(5)});
thumbnailButton6.addEventListener('click', () => {infoAlteration(6)});
thumbnailButton7.addEventListener('click', () => {infoAlteration(7)});
thumbnailButton8.addEventListener('click', () => {infoAlteration(8)});
thumbnailButton9.addEventListener('click', () => {infoAlteration(9)});
thumbnailButton10.addEventListener('click', () => {infoAlteration(10)});
thumbnailButton11.addEventListener('click', () => {infoAlteration(11)});

// Input date and submission

function validifyDateInput(vIndex) {
    if (vIndex == 0) {
        promptText.classList.remove('red');
        promptText.innerHTML = 'Enter Your Date of Birth to Find out';
    } else if (vIndex == 1) {
        promptText.classList.add('red');
        promptText.innerHTML = 'That was an invalid entry. Try again.';
    }
}

submitButton.addEventListener('click', () => {
    const dateInput = document.getElementById('input').valueAsDate;
    if (dateInput) {
        validifyDateInput(0);
        const tzOffset = dateInput.getTimezoneOffset() * 10 * 6000;
        const birthDateEST = new Date(dateInput.getTime() + tzOffset);
        const month = birthDateEST.getMonth() + 1;
        const date = birthDateEST.getDate();
        console.log('Received a date of birth of: ' + month + "/" + date);
        const aSequence = findAstrologicalSequence(month, date);
        infoAlteration(aSequence);
    } else {
        validifyDateInput(1);
    }
});
