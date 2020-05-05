import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formtry',
  templateUrl: './formtry.component.html',
  styleUrls: ['./formtry.component.css']
})
export class FormtryComponent implements OnInit {

  formParams: any = {};
  monthlyqrcode
  fullqrcode;
  constructor() { }

  ngOnInit(): void {
  }

}
