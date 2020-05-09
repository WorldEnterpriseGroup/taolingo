import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formtry',
  templateUrl: './formtry.component.html',
  styleUrls: ['./formtry.component.css']
})
export class FormtryComponent implements OnInit {

  formParams: any = {};
  multiStepForm: any;
  stage = 'stage';
  fullqrcode = '0';
  monthlyqrcode = '0';
  direction;
  formValidation = false;
  toggleJSONView = false;
  toggleFormErrorsView =false;
  formData = {
    payneeded: 'yes',
    _gotcha: '',
    website: 'Tao Lingo',
    test: 'on',
    owner: '76986198-30f2-e911-a972-000d3a34e213',
    fisrtname: '',
    lastname: '',
    email: '',
    partner: '',
    students: '1',
    months: '12',
    lessons: '2',
    current_level: 'Beginner',
    monthlyPlanTotal: '2406',
    priceTotal: '24064',
    message: ''
  };
  constructor(private http: HttpClient) { }

  coursecalc() {
    let theForm = this.multiStepForm;
    let students = this.multiStepForm.value.students;
    let months = this.multiStepForm.value.months;
    let lessons = this.multiStepForm.value.lessons;
    let current_level = this.multiStepForm.value.current_level;
    let levelCost = 60;
    let courseCost = 1529;
    let studentCost = 0;
    let monthCost = 0;
    let discount = 0;
    let regfee = 500;

    // var couponcode = document.getElementById('couponcode').value;

    // APPLY DISCOUNT FOR MULTIPLE STUDENTS
    if (students === '1') {
      studentCost = 1;
    } else if (students === '2') {
      studentCost = 1.95;
    } else if (students === '3') {
      studentCost = 2.9;
    } else if (students === '4') {
      studentCost = 3.85;
    } else if (students === '5') {
      studentCost = 4.8;
    } else if (students === '10') {
      studentCost = 9.5;
    } else if (students === '20') {
      studentCost = 18;
    } else if (students === '50') {
      studentCost = 45;
    }
    // APPLY DISCOUNT FOR BULK MONTHS
    if (months === '1') {
      monthCost = 1;
    } else if (months === '6') {
      monthCost = 6;
    } else if (months === '12') {
      monthCost = 11.5;
    } else if (months === '24') {
      monthCost = 23;
    } else if (months === '48') {
      monthCost = 44;
    }

    if (current_level === 'Beginner') {
      levelCost = 60;
      courseCost = Number(1529);
    } else if (current_level === 'Social') {
      levelCost = 100;
      courseCost = Number(1729);
    } else if (current_level === 'Business') {
      levelCost = 180;
      courseCost = Number(2129);
    }

    // 52/48 is 52 weeks actual and 48 counted in our form which equates around 4.33.
    // Use this to find total number of coachings requested.
    let lessonTotal = lessons * 52 / 48 * 4 * levelCost * monthCost * studentCost;
    let courseTotal = monthCost * studentCost * courseCost;
    let courseTotalPrice = (lessonTotal + courseTotal + regfee);
    let paymentplan;
    let monthlyPlanTotal;
    if (months === '1') {
      // add 20% interest for paying monthly
      paymentplan = courseTotalPrice;
    } else {
      paymentplan = courseTotalPrice / months * 1.2;
    }

    courseTotalPrice =  +courseTotalPrice.toFixed(0);
    monthlyPlanTotal = paymentplan.toFixed(0);

    // document.getElementById('priceTotal').innerHTML = "$" + courseTotalPrice;
    // document.getElementById('monthlyPlanTotal').innerHTML = "$" + monthlyPlanTotal;
    this.formData.priceTotal = courseTotalPrice.toString();
    this.formData.monthlyPlanTotal = monthlyPlanTotal.toString();
    this.multiStepForm.patchValue({
      priceTotal: courseTotalPrice.toString(),
      monthlyPlanTotal: monthlyPlanTotal.toString()
    })
    console.log("Lesson Total " + lessonTotal);
    console.log("Course Total " + courseTotal);




    return courseTotalPrice;
  } // END COURSE CALCULTION

  ngOnInit(): void {

    this.multiStepForm = new FormGroup({
      payneeded: new FormControl(this.formData.payneeded),
      _gotcha: new FormControl(this.formData._gotcha),
      website: new FormControl(this.formData.website),
      test: new FormControl(this.formData.test),
      owner: new FormControl(this.formData.owner),
      firstname: new FormControl(this.formData.fisrtname, [Validators.required, Validators.maxLength(250)]),
      lastname: new FormControl(this.formData.lastname, [Validators.required, Validators.maxLength(250)]),
      email: new FormControl(this.formData.email, [Validators.required, Validators.maxLength(100), Validators.email]),
      partner: new FormControl(this.formData.partner, [Validators.maxLength(250)]),
      students: new FormControl(this.formData.students),
      months: new FormControl(this.formData.months),
      lessons: new FormControl(this.formData.lessons),
      current_level: new FormControl(this.formData.current_level),
      tel: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      monthlyPlanTotal: new FormControl(this.formData.monthlyPlanTotal),
      priceTotal: new FormControl(this.formData.priceTotal),
      message: new FormControl(this.formData.message),
      monthlybudget: new FormControl(''),
      budget: new FormControl(''),
      interest: new FormControl(''),
      time: new FormControl('')
    });

  }
  next(stage1) {
     this.formValidation = true;
     this.stage = stage1;
     this.direction = 0;
     this.formValidation = false;
  }
  back(stage){
    this.direction = 0;
    console.log(this.stage)
    this.stage = stage;
  }
  reset(){
    this.multiStepForm.reset();
    this.stage = '';
  }
  submitForm(){
    const message = "Students: " + this.multiStepForm.controls.students.value + "\r\n Lessons: " + this.multiStepForm.controls.lessons.value + "\r\n Monthly Total: $" + this.multiStepForm.controls.monthlyPlanTotal.value + "\r\n Price Total: $" + this.multiStepForm.controls.priceTotal.value;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const wsUrl = 'https://prod-20.eastus.logic.azure.com:443/workflows/a8bed9230a7445338ffbbecaa103ec67/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tz8jPn70VwbD7XM6aZw6T2gNB_sxAutBWp5I-hKv6cA';
    console.log('Attempting...');
    if (this.multiStepForm.valid){
      this.multiStepForm.patchValue({
        message,
        website: this.formData.website,
        _gotcha: this.formData._gotcha,
        monthlybudget: this.multiStepForm.controls.monthlyPlanTotal.value,
        budget: this.multiStepForm.controls.priceTotal.value,
        interest: this.multiStepForm.controls.current_level.value,
        time: this.multiStepForm.controls.months.value + ' Months '
      });
      // this.multiStepForm.controls.message.set = message;
      // this.multiStepForm.controls.monthlybudget.value = this.multiStepForm.controls.monthlyPlanTotal.value;
      // this.multiStepForm.controls.budget.value = this.multiStepForm.controls.priceTotal.value;
      // this.multiStepForm.controls.interest.value = this.multiStepForm.controls.current_level.value;
      // this.multiStepForm.controls.time.value = this.multiStepForm.controls.months.value + ' Months ';
      let data = this.multiStepForm.value;
      let serializedForm = new HttpParams();
      Object.keys(data).forEach(function (key) {
        serializedForm = serializedForm.append(key, data[key]);
      });
      this.http.post(
             wsUrl,
             serializedForm,
        { headers, observe: 'response'})
            .subscribe(res => {
              if (res.status === 200){
                this.fullqrcode = res.body['full'];
                this.monthlyqrcode = res.body['monthly'];
                console.log('Success...', this.fullqrcode, this.monthlyqrcode);
                this.stage = 'fullpayment';
              } else{
                console.log('Status:' + res.status);
                this.stage = 'error';
              }
            }, err => {
              this.stage = 'error';
              console.log(err);
            });
    } else{
        this.stage = 'error';
    }


  }

}
