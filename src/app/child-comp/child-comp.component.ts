import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  @Input('group')
  parentForm: FormGroup;

  childForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) {
    this.childForm = formBuilder.group({
      PhoneNumber: [{ value: '', disabled: false }, Validators.required],
      PhoneNumbers: new FormArray([])
    });
  }

  ngOnInit() {
    console.log('Inside child Comp');
    this.parentForm.addControl('childForm', this.childForm);
    //console.log(this.parentForm);

    //console.log(this.parentForm);

    //console.log(this.parentForm.get('childForm')['controls']['PhoneNumbers']);
    //console.log(this.parentForm.get('childForm')['controls']['PhoneNumbers']);
    //console.log(this.parentForm.get('childForm')['controls']);
  }

  getControls(): FormArray {
    return this.parentForm.get('childForm')['controls']['PhoneNumbers'];
  }

  deleteUrlBtnCLicked(i: number): void {
    const phoneNumbers = this.getControls();
    phoneNumbers.removeAt(i);
  }
}
