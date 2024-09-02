const button = document.querySelector (".newQuotes");
const quote = document.querySelector (".quote")

const quotes = [
    "«Start by doing what's necessary; then do what's possible and suddenly you are doing the impossible». Francis of Assisi",
    "«Be yourself. Everyone else is already taken». Oscar Wilde",
    "«Our fatigue is often caused not by work, but by worry, frustration and resentment». Dale Carnegie",
    "«Discipline is the bridge between goals and accomplishment». Jim Rohn",
    "«Life isn't about finding yourself, it is about creating yourself». George Bernard Shaw",
    "«You may have to fight a battle more than once to win it». Margaret Thatcher",
    "«Many of life's failures are people who did not realize how close they were to success when they gave up». Thomas A. Edison",
    "«Do what you have always done and you'll get what you have always got.» Sue Knight",
    "«Don't tell people how to do things; tell them what to do and let them surprise you with their results.»  George S. Patton Jr.",
    "«The only way to do great work is to love what you do. Steve Jobs»",
]

button.addEventListener ("click", function(){
    let randomNumber = Math.floor(Math.random()*quotes.length);
    quote.textContent = quotes[randomNumber];
})
