import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('total') all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number = 0;

  selectedRadioButtonValue: string = 'All';

  @Output()
  filterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonChange(){
    this.filterRadioButtonChange.emit(this.selectedRadioButtonValue)
    //console.log(this.selectedRadioButtonValue);
  }
}
