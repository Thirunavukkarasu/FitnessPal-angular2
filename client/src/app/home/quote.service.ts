import { Injectable } from '@angular/core';

@Injectable()
export class QuoteService {
    constructor() { 

    }
    getQuotes(){
        return [{
            "saying":"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
            "author":"Napoelon Hill",
            "picture":"http://quotes.lifehack.org/media/quotes/quote-Thomas-A.-Edison-our-greatest-weakness-lies-in-giving-up-100467.png"
        },{
            "saying":"Keep your eyes on the stars, and your feet on the ground.",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/t/theodoreroosevelt136001.jpg"
        },{
            "saying":"Always do your best. What you plant now, you will harvest later",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/o/ogmandino164003.jpg"
        },{
            "saying":"You are never too old to set another goal or to dream a new dream",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/l/lesbrown119176.jpg"
        },{
            "saying":"The secret of getting ahead is getting started.",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/m/marktwain118964.jpg"
        },{
            "saying":"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
            "author":"Napoelon Hill",
            "picture":"https://www.mytutorhunt.com/sites/default/files/quotes/m0504-3_opt.jpg"
        },{
            "saying":"The key is to keep company only with people who uplift you, whose presence calls forth your best.",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/e/epictetus386523.jpg"
        },{
            "saying":"Expect problems and eat them for breakfast.",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/a/alfredamontapert109332.jpg"
        },{
            "saying":"With the new day comes new strength and new thoughts.",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/e/eleanorroosevelt143006.jpg"
        },{
            "saying":"Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/t/thomasjefferson120901.jpg"
        },{
            "saying":"I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
            "author":"Napoelon Hill",
            "picture":"http://motivationalreads.com/wp-content/uploads/I-dont-believe-you-have-to-be-better-than-everybody-else.-I-believe-you-have-to-be-better-than-you-ever-thought-you-could-be..jpg"
        },{
            "saying":"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/a/aynrand141517.jpg"
        },{
            "saying":"In order to succeed, we must first believe that we can.",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/n/nikoskazantzakis120259.jpg"
        },{
            "saying":"Without hard work, nothing grows but weeds.",
            "author":"Napoelon Hill",
            "picture":"https://www.brainyquote.com/photos/g/gordonbhinckley404070.jpg"
        },{
            "saying":"If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
            "author":"Napoelon Hill",
            "picture":"https://s-media-cache-ak0.pinimg.com/736x/d7/40/cc/d740ccb1af3c3360a41de44762b7614b.jpg"
        }];
    }
}