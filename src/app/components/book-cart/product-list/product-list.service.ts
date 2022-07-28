import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from "./model/books.model";

export const books: Book[] = [
    { id: '1', name: 'Book1' , price: 10, quantity: 1, category: "Acao", img:"img1"},
    { id: '2', name: 'Book2' , price: 10, quantity: 1, category: "Acao", img:"img2"},
    { id: '3', name: 'Book3' , price: 10, quantity: 1, category: "Acao", img:"img3"},

  ];

@Injectable()


export class BooksService {

  private url = 'https://sheet.best/api/sheets/f8f4e688-2d1c-4e72-b46a-00b1d2d3d6b1';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}


    getBooks() {
      return this.http.get(this.url)

  
    }

}