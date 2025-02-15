import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  
   @Output()
  public onValue : EventEmitter<string> =  new EventEmitter(); 
    @Input()
    public placeholder: string = ''

  public emmitValue( value :string )  {
    this.onValue.emit(value);
  }
}
