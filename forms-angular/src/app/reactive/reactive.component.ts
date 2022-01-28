import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"],
})
export class ReactiveComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsername = ["Anna", "jacob"];
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmail.bind(this)
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    // this.signupForm.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });

    // this.signupForm.setValue({
    //   userData: {
    //     username: "jatt",
    //     email: "abc@gmail.com",
    //   },
    //   gender: "malle",
    //   hobbies: [],
    // });

    this.signupForm.patchValue({
      userData: {
        username: "avnish",
      },
    });
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }
  getControls() {
    return (<FormArray>this.signupForm.get("hobbies")).controls;
  }
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.controls.userData["email"].reset();
  }
  forbiddenNames(controls: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsername.indexOf(controls.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }
  forbiddenEmail(controls: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (controls.value == "test@test.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
