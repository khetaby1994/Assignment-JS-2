var qoutes={
    qoute:["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.","You only live once, but if you do it right, once is enough.","Be the change that you wish to see in the world.","In three words I can sum up everything I've learned about life: it goes on.","If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","Don't walk in front of me… I may not follow Don't walk behind me… I may not lead Walk beside me… just be my friend.","If you tell the truth, you don't have to remember anything.","I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",'A friend is someone who knows all about you and still loves you.','To live is the rarest thing in the world. Most people exist, that is all.','Always forgive your enemies; nothing annoys them so much.','Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.','Live as if you were to die tomorrow. Learn as if you were to live forever.'],

    qouter:[
        'Albert Einstein',
        'Marcus Tullius Cicero',
        'Bernard M. Baruch',
        'William W. Purkey',
        'Dr. Seuss',
        'Mae West',
        'Mahatma Gandhi',
        'Robert Frost',
        'J.K. Rowling',
        'Albert Camus',
        'Mark Twain',
        'Maya Angelou','Elbert Hubbard','Oscar Wilde','Oscar Wilde','Martin Luther King','Mahatma Gandhi']
};
var r;
var i;
function getQoute(){
    while (r==i) {
        r=Math.ceil(Math.random()*16);
    }
    i=r;
    var qoute=`
    <h3 class="text-center my-3">${qoutes.qoute[i]}</h3>
    <h3>${qoutes.qouter[i]}</h3>`;
    document.getElementById('qoute').innerHTML=qoute;
}