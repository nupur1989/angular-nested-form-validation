import { Component, OnInit, VERSION } from '@angular/core';

import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  public parentForm: FormGroup;

  ngOnInit(): void {
    console.log('Inside Parent Comp');
    this.parentForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    // Process checkout data here
    //console.warn('Your order has been submitted', this.parentForm.value);
    //this.parentForm.reset();
  }

  getControls(): FormArray {
    //console.log('Inside getControls');
    //console.log(this.parentForm.get('childForm')['controls']['PhoneNumbers']);
    //console.log(this.parentForm.get('childForm')['controls']);
    return this.parentForm.get('childForm')['controls']['PhoneNumbers'];
  }

  addPhoneNumber(): void {
    const phoneNumbers = this.getControls();

    const phoneNumber = this.parentForm.get('childForm')['controls'][
      'PhoneNumber'
    ];

    phoneNumbers.push(phoneNumber);
  }

  clearPhoneNumbersList(): void {
    const phoneNumbers = this.getControls();
    phoneNumbers.clear();
  }
}
