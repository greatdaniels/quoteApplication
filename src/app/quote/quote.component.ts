import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'Food for thought...'

  quotes: Quote[] = [
    new Quote(1, 'Christian','Away from negativity','Stay away from negative people, they have a problem for every solution','Albert Einstein', new Date(2020,2,29),0,0),
    new Quote(2, 'Dan','Great Triumph','The harder the conflict the greater the triumph','George Washington', new Date(2020,2,29),0,0),
    new Quote(3, 'Mayuko','Art resides Within','Every child is an artist, the problem is staying an artist when you grow up','Pablo Picasso', new Date(2020,2,29),0,0),
  ]

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`)

      if(toDelete) {
        this.quotes.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
