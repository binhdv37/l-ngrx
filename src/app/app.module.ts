import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './counter/my-counter.component';
import {counterReducer} from "./counter/reducer/counter.reducer";
import {AppRoutingModule} from "./app-routing.module";
import {booksReducer} from "./booklist/state/books.reducer";
import {collectionReducer} from "./booklist/state/collection.reducer";
import { BookListComponent } from './booklist/component/book-list/book-list.component';
import { BookCollectionComponent } from './booklist/component/book-collection/book-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, books: booksReducer, collection: collectionReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
