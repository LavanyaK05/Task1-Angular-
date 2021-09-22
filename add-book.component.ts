import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

   model = new Book('','','','');
   message:any;
  //  message:any;

  constructor(private httpClient: HttpClient) { }

  onClick()
  {
    
  }

  ngOnInit(): void {
    // let response= this.http.get("http://localhost:8090/books")
    // response.subscribe((data)=>this.books=data);
  }

  public addBooks(title: any,author :any,price:any,date: any)
  {
    console.log(title, author,price,date)
    // let resp = this.service.addBook(this.model);
    // resp.subscribe((data)=>this.message=data)
    this.httpClient.post("http://www.localhost:8090/addBook",{
      "bname" : title,
      "bauthor": author,
      "bprice": price,
      "bdate": date

   }).subscribe((data)=>{
      alert(data);
    })
  }
  //   this.httpClient.get("http://localhost:8090/books").subscribe(data=>{
  //     console.log(data)
  //   })
  // }

}
