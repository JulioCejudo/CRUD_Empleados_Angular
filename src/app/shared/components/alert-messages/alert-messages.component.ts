import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-alert-messages',
  templateUrl: './alert-messages.component.html',
  styles: `
  .alert {
    align-items: center;
    border-radius: 20px;
    bottom: 15px;
    color: black;
    display: flex;
    padding: 5px 10px;
    position: fixed;
    right: 15px;
  }`
})
export class AlertMessagesComponent {
  @Input()
  public alertShow:boolean = false;

  @Input()
  public message:string = "";

  @Input()
  public clase:string = "";
}
