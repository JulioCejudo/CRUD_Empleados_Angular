import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Region } from '../../../countries/interfaces/region.type';

@Component({
  selector: 'shared-combo-box',
  templateUrl: './combo-box.component.html',
  styles: ``
})
export class ComboBoxComponent implements OnInit, OnDestroy{

  // public value:Region = '';
  private valueSubscription?: Subscription;

  @Input()
  public value:Region | string = '';

  @Input()
  public list:string[] = [];

  @Output()
  public onNewValue: EventEmitter<Region | string> = new EventEmitter();

  sendSelected(){
    this.onNewValue.emit(this.value);
  }

  ngOnInit(): void {
     this.onNewValue.subscribe();
    //  console.log('El valor recibido es: '+this.valorDefault);
  }

  ngOnDestroy(): void {
    this.valueSubscription?.unsubscribe(); //Checar que puedo destruir aquí
  }

}
