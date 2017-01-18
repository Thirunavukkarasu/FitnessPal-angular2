import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { AuthService } from '../shared/auth.service';
import { QuoteService } from './quote.service';
import { Quote } from './quote';

@Component({
  selector    : 'home',
  templateUrl : 'home.component.html',
  styleUrls   : ['home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
		quotes: Array<Quote>;
		currentQuote: Object = {
					"saying":"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
					"author":"Napoelon Hill",
					"picture":"http://quotes.lifehack.org/media/quotes/quote-Thomas-A.-Edison-our-greatest-weakness-lies-in-giving-up-100467.png"
		};
		subscription: Subscription;

  	constructor(private authService: AuthService, private quoteService:QuoteService) {

  	}
	  ngOnInit(): void {
			  this.quotes = this.quoteService.getQuotes();
				let timer = TimerObservable.create(2000, 10000);
    		this.subscription = timer.subscribe(t => {
					 this.currentQuote = this.quotes[Math.floor(Math.random()*this.quotes.length)];
    		});
	  }
		
		ngOnDestroy() {
    	this.subscription.unsubscribe();
    }
}