import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})
export class GetBookComponent {

  constructor(private service: BookService, private httpClient: HttpClient) { }

  
  books :Book[] =[];

  ngOnInit(): void {
    this.getbook();

  }


  getbook(): void{
    // this.service.getBook().subscribe(books => (this.books = books));
    this.service.getBook()
      .subscribe(books => (this.books = books));

      
    // this.http.get("http://localhost:8090/books").subscribe(data=>{
    //   console.log(data)
  }

  // public getbook()
  // {
  //   let res = this.httpClient.get("http://localhost:8090/books").subscribe(data=>{
  //         console.log(data)
  //       })
  // }

}
