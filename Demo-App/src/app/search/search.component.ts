import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SearchInput: string ='';

  @Output()
  searchedTextEvent: EventEmitter<string> = new EventEmitter<string>();

  searchContent(searchData: Event){
    this.searchedTextEvent.emit(this.SearchInput);
    console.log(this.SearchInput);
  }
}
