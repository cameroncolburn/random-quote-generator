// event listener for button click
var quoteButton = document.getElementById("quote-button");
quoteButton.addEventListener("click", displayQuote);
//authors and quotes
var quoteAuthor = [
    "Helen Keller",
    "Francis of Assisi",
    "Jimmy Dean",
    "William Shakespeare",
    "Aristotle",
    "H. Jackson Brown, Jr.",
    "Walt Whitman",
    "Ralph Waldo Emerson",
    "Aesop",
    "Robert Louis Stevenson"
];
var quoteContent = [
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "We know what we are, but know not what we may be.",
    "It is during our darkest moments that we must focus to see the light.",
    "The best preparation for tomorrow is doing your best today.",
    "Keep your face always toward the sunshine - and shadows will fall behind you.",
    "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    "No act of kindness, no matter how small, is ever wasted.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant."
];
// function for random number generation and DOM change
function displayQuote() {
    var randomNumber = (function() {
        var n = Math.floor(Math.random()* 10);
        return n;
      }() );
      var quoteParagraph1 = document.getElementById("quote-paragraph");
      var quoteParagraph2 = document.getElementById("quote-author");
      quoteParagraph1.innerHTML = quoteContent[randomNumber];
      quoteParagraph2.innerHTML = quoteAuthor[randomNumber];
    }
