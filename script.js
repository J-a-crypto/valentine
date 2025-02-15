const loveMessages = [
    "To my brooklyn girl, I am so glad you accepted me for being a Queens Boy. Te Quiero Mucho, Kim.",
    "From the moment you saw me eat and not judge me eating with chopsticks, I knew my life would never be the same. You have became something special to me, Kim.",
    "I am so happy that you asked me to be your valentine, I love you so much. This is our 2nd valentine's day together and I'm so happy to be spending it with you.",
    "Kim, you're the reason I smile every day. I can't get your smile and eyes out of my head",
    "I love your ears, your eyes, your lips, your tongue, your small nose, your soft ears, your kisses, your hugs, your body, your heart, your laugh, your bites (BITE ME MORE) and your love. I love you, Kim.",
    "Kim, you light up my world like nobody else. The way that you flip your hair it ain't hard to tell, you don't know that you are BEAUTIFUL.",
    "I love how you remember the lyrics and who is singing in a One Direction song, even the Oh's. I was so impressed by you",
];

// Love letter typing effect
function typeMessage() {
    // Select a random message from the array
    let message = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    let index = 0;
    let speed = 100; // Speed of typing effect
    let typingElement = document.getElementById("love-letter");

    typingElement.innerHTML = ""; // Clear the previous message (if any)

    function type() {
        if (index < message.length) {
            typingElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // Once the love letter is done, show a random quote
            displayRandomQuote();

            setTimeout(typeMessage, 2000 ); // Wait for 2s before showing the sweet message
        }
    }

    type();
}
// Function to reveal sweet message
const quotes = [
    // The Beatles
    "And when the broken-hearted people living in the world agree, there will be an answer, let it be. – The Beatles, 'Let It Be'",
    "All you need is love, love, love is all you need. – The Beatles, 'All You Need Is Love'",
    "Something in the way she moves, attracts me like no other lover. – The Beatles, 'Something'",
  
    // One Direction
    "You’re still the one I run to, the one that I belong to, the one I want for life. – One Direction",
    "I’m in love with you, and all your little things. – One Direction",
    "If I could fly, I'd be coming right back home to you. – One Direction",
  
    // Harry Styles
    "Just let me adore you, oh honey. – Harry",
    "I’m in love with you, and I don’t know what to do. – Harry",
    "There’s a light at the end of the tunnel, but you have to walk through it. – Harry",
  
    // Zayn Malik
    "I know that you’re the one for me, that's why I’ll love you endlessly. - Zayn",
    "Cause I just wanna see you smile. – Zayn",
    "I’m falling for you, oh, I’m falling for you. – Zayn",
  
    // Chance the Rapper
    "I think you’re the one, but I think you already knew. – Chance",
  ];
  

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("random-quote").textContent = quotes[randomIndex];
}
function showMessage() {
    const sweetMessage = document.getElementById('sweet-message');
    const filmStrip = document.getElementById('film-strip');


    // Show the hidden message and film strip
    sweetMessage.classList.remove('hidden');
    filmStrip.classList.remove('hidden');
    document.getElementById('film-strip2').classList.remove('hidden');
}

// Function to generate a personalized message (still allows customization)

// Function to generate falling hearts
function generateHearts() {
    const heartRain = document.querySelector('.heart-rain');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-drop');
        
        // Randomize the left position for variety
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Randomize the animation speed
        heart.style.animationDuration = Math.random() * 5 + 3 + 's';
        
        heartRain.appendChild(heart);

        // Remove heart after animation ends to keep DOM clean
        setTimeout(() => {
            heart.remove();
        }, 8000); // Ensure heart is removed after 8s
    }, 200); // Generate a new heart every 200ms
}

// Start generating hearts when the page loads
generateHearts();
typeMessage();
 