FormGroup:it is used to create form where we can add multiple elements of forms
Syntax:variable =new FormGroup({ })
in FormGroup we pass and add our elements we want to use

formControls():it is used to create form elements
we can pass element default values,validations we want in element etc
syntax:new formControl(defaultValue,validation)

SYNC with template
to sync typescript with html form we need to pass
[formGroup]=formGroupVariable(form which we created in typescript using FormGroup)

to sync form elements of typescript we created with template we use
formControlName in element and write name which we mentiron in formControl to sync them

ADD VALIDTORS
to add validitor we use Validator object of Angula/forms
ex:formContro("",Validator.required)
