import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { Acct } from '../acct';



@Component({
  selector: 'app-acct-form',
  templateUrl: './acct-form.component.html',
  styleUrls: ['./acct-form.component.css']
})
export class AcctFormComponent {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  shirttype = ['Youth', 'Female', 'Male'];
  phtype = ['Mobile', 'Fixed'];
  contactprefs = ['Email', 'Phone'];

  model = new Acct(7, 'Jack', 'Smith', '1 Pine Drive', 
    'Cocoa', 'FL', '32922', '3214567890', 'jack@email.com', 
    this.phtype[0], this.contactprefs[0], '2020', this.shirttype[1],
    'M', '2020', '2020'); 
  
  submitted = false;

  onSubmit() {this.submitted = true; }
  
  newAcct() {
    this.model = new Acct(8, '','','','','','','','','','','','','','',''); 
  } 

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

}
