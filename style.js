document.addEventListener("DOMContentLoaded", function () {
    
    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = currentDate.toISOString().split('T')[1].split('.')[0];

    
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${dayOfWeek}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${utcTime}`;


    document.querySelector('[data-testid="slackUserName"]').textContent = 'Harrison Itotia';
    document.querySelector('[data-testid="slackDisplayImage"]').src = 'images/slack_profile_picture.jpeg'; 
    document.querySelector('[data-testid="slackDisplayImage"]').alt = 'HarrisonItotia';


    document.querySelector('[data-testid="githubURL"]').href = 'https://github.com/ItotiaHarrison/Personal-details'; 
});
