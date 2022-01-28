import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven",
  templateUrl: "./template-driven.component.html",
  styleUrls: ["./template-driven.component.css"],
})
export class TemplateDrivenComponent {
  @ViewChild("f") signUpForm: NgForm;
  defaultQuestion = "pet";
  answer = "";
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secret: "",
    questionAnswer: "",
    gender: "",
  };
  isSubmitted = false;
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  suggestUserName() {
    // this.signUpForm.setValue({
    //   userData: {
    //     username: "avnishssingh",
    //     email: "",
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male",
    // });
    this.signUpForm.form.patchValue({ userData: { username: "avnishsingh" } });
  }
  onSubmit() {
    this.isSubmitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.questionAnswer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    this.signUpForm.reset();
  }
}
