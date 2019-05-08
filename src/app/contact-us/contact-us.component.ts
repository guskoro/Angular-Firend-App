import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  emailBlackList = ['test@test.com', 'temp@temp.com'];

  contactForm: FormGroup;
  submitted = false;

  constructor() {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      username: new FormControl(null, [Validators.required, this.blankSpaces]),
      useremail: new FormControl(null, [
        Validators.required,
        Validators.email,
        this.inEmailBlackList.bind(this)
      ]),
      usermessage: new FormControl(null, [Validators.required])
    });
  }

  blankSpaces(control: FormControl): { [s: string]: boolean } {
    if (control.value != null && control.value.trim().length === 0) {
      return { blankSpaces: true };
    }
    return null;
  }

  inEmailBlackList(control: FormControl): { [s: string]: boolean } {
    if (this.emailBlackList.indexOf(control.value) !== -1) {
      return { emailBlackListed: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.contactForm);
    this.submitted = true;
  }
}
