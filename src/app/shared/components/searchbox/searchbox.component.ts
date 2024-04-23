import { STRING_TYPE } from '@angular/compiler';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent implements OnInit, OnDestroy {
  
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder:string = '';

  @Input()
  public sizeBox:boolean = true;

  @Input()
  public valorAnterior: string = ''

  @Output()
  // public onNewText: EventEmitter<string> = new EventEmitter();
  
  @Output()
  public onNewBounce = new EventEmitter();

  public tipo!:string;
  public tipoEmit!:string;
  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onNewBounce.emit(value);
    });
    //Aquí tambien se puede usar un SwitchCase si se requieren mas opcioness
    
    if(this.sizeBox){
      this.tipo="text";
    }else{
      this.tipo="number"
    }
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  onKeyPress( searchTerm:string){
    this.debouncer.next(searchTerm);
  }

}
