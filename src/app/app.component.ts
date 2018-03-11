import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private http: Http;

  public title = 'Account Sign Up';
  public instructions = 'Fill out the form below to create a user account on the Blackboard Learn server';
  public authenticated = false;
}
