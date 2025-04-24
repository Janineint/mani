// Random msg frame1
const randomMsgFrame1 = [
    "Close your eyes and take a deep breath.",
    "Feel the excitement of your dreams coming true.",
    "Your journey to a fulfilled and happy life starts now.",
];
  
// Random msg2
const randomMsg2 = [
    "Imagine your life filled with joy, success, and abundance.",
    "Picture yourself living your best life.",
    "Visualize your deepest desires becoming reality.",
];
  
// randQuestion
const randQuestion = [
    "What is the one thing you desire most?",
    "What is the one goal you want to achieve?",
    "What is the one thing you want to manifest today?",
];
  


function generateRandomMessage() {
    // Which page check from URL
    const path = window.location.pathname;

    let messages;
    let elementId;

    // if go to Page 2
    if (path.includes("page2.html")) {
        messages = randomMsg2; // use randomMsg2
        elementId = "random-msg-frame"; // show in random-msg-frame
    } 
    // if go to Page 3
    else if (path.includes("page3.html")) {
        messages = randQuestion; // use randQuestion for Page 3
        elementId = "random-question-frame"; // show question in random-question-frame
    } 
    // else
    else {
        messages = randomMsgFrame1; // default
        elementId = "random-msg-frame"; // use random-msg-frame
    }

    // random msg from selected Array
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // Check if the element exists
    const element = document.getElementById(elementId);
    if (element) {
        console.log('Element found:', elementId);  
        element.textContent = messages[randomIndex];
    } else {
        console.error('Element not found:', elementId);  
    }
}

// load function
window.onload = generateRandomMessage;








// open popup
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.icon-container2').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'block'; 
    });

    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none'; 
    });
});

const popup = document.getElementById('popup');
const iconContainer2 = document.querySelector('.icon-container2');  
const closePopup = document.getElementById('close-popup');  

iconContainer2.addEventListener('click', function() {
  popup.style.display = 'block';  
});

closePopup.addEventListener('click', function() {
  popup.style.display = 'none';  
});



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('popup').style.display = 'block';

    // close popup
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none'; // hide popup
    });

    // send form to another page
    document.getElementById('popup-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        // get msg from form
        const userName = document.getElementById('message').value;
        
        // send form to page4.html
        const nextPageUrl = 'page4.html?name=' + encodeURIComponent(userName);
        
    
        window.location.href = nextPageUrl;
    });
});

