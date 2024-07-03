// Get the elements to display the time and day
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');

// Function to update the time and day
function updateTimeAndDay() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    currentTimeUTC.textContent = now.toTimeString(options);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    currentDay.textContent = days[now.getDay()];
}

// Call the function initially to display the time and day
updateTimeAndDay();

// Update the time and day every second
setInterval(updateTimeAndDay, 1000);

// slack display name
const slackDisplayName = "machipedia"
document.querySelector('[data-testid="slackDisplayName"]').innerText = slackDisplayName;

// slack display email
const slackEmail = "mavalour.mc@gmail.com"
document.querySelector('[data-testid="slackEmail"]').innerText = slackEmail;


// hngLink
const hngLink = "https://hng.tech/learn"
const hngWord = "HNG Internship Program"
const hngElement = document.querySelector('[data-testid = "hngLink"]').innerText = hngWord;
hngElement.href = hngLink

//keywordLink
const keywordLink = "https://keyword.dog"
const keyWord = "Keyword.dog"
const keywordElement = document.querySelector('[data-testid = "keywordLink"]').innerText = keyWord;
keywordElement.href = keywordLink

// scrapeanywebLink
const scrapeanywebLink = "https://scrapeanyweb.site"
const scrapeanywebWord = "Scrapeanyweb.site"
const scrapeanywebElement = document.querySelector('[data-testid = "scrapeanywebLink"]').innerText = scrapeanywebWord;
scrapeanywebElement.href = scrapeanywebLink
