import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


// import * as $ from 'jquery';


declare var $: any;
declare var Swal: any;
declare var grecaptcha: any;


@Component({
  selector: 'app-requestmodal',
  templateUrl: './requestmodal.component.html',
  styleUrls: ['./requestmodal.component.css']
})
export class RequestmodalComponent implements OnInit, AfterViewInit {
  registerForm: FormGroup;
  gToken = '';
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
      interest: new FormControl(null, Validators.required),
      tel: new FormControl(null, Validators.required)
    });
  }

  formSubmit() {
    if (this.registerForm.valid){
      const a = $('form#register');
      if ((<HTMLInputElement>document.querySelector('input[name=token]')).value !== ''){
        $.ajax({
          type: a.attr('method'),
          url: a.attr('action'),
          data: a.serialize(),
          success: function (data, textStatus, xhr) {
            console.log(xhr.status)
            if (xhr.status === 200) {
              Swal.fire({
                title: 'Thank You!',
                type: 'success',
                confirmButtonText: 'Ok'
              });
            } else {
              Swal.fire({
                title: 'Some Error Occurred',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            }
          },
          error: function (data) {
            Swal.fire({
              title: 'An unexpected Error Occurred',
              type: 'error',
              confirmButtonText: 'Ok'
            });
          },
        })

      }
    } else{
      this.registerForm.markAllAsTouched();
      Swal.fire({
        title: "Form Error",
        text: "Please ensure all fields are correct!",
        type: "error",
        confirmButtonText: "Ok",
      })
    }
  }

  ngAfterViewInit(): void {
    grecaptcha.ready(function () {
      grecaptcha.execute("6LcHIYcUAAAAAPnqH0iBwnDeFma0mWAMJKJHAoEO").then(function (token) {
        (<HTMLInputElement>document.querySelector('input[name=token]')).value = token;
      });
    });
  }
}
