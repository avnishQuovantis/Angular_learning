import { Component } from "@angular/core";

@Component({
    selector:"app-notes",
    templateUrl:"./notes.component.html",
    styleUrls:["./notes.component.css"]
})
export class NotesComponent{
    username=""
    password=''
    displayNotes=false
    notes=["hey","hi"];
    textColor='black'
    
    checkNamePassword(){
        if(this.username=='avnish'&&this.password=='singh'){
            this.username="";
            this.password="";
            this.displayNotes=!this.displayNotes;
            this.textColor='green'
            return true
        }
        else{
            this.username="";
            this.password="";
            this.textColor='red'
            return false
        } 
    }
   
    checkEmpty(){
        return this.username=='' || this.password==''
    }
    
}