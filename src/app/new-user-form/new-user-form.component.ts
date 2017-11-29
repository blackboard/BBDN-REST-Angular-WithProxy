import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from './new-user.interface';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'new-user-form',
    templateUrl: 'new-user-form.component.html',
    styleUrls: ['new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {
  public user: User;

  // THIS IS NOT PRODUCTION CODE! NEVER PUT YOUR KEY AND SECRET DIRECTLY IN CODE!
  private oauthKey = '<Your Key Here>';
  private oauthSecret = '<Your Secret Here>';
  private basicAuthString = this.oauthKey + ':' + this.oauthSecret;

  constructor(private http: Http) {}

    ngOnInit() {
      this.user = {
        username: '',
        password: '',
        confirmPassword: '',
        first: '',
        last: ''
      };
    };
    createUser(newUserForm: NgForm, model: User, isValid: boolean) {

      const basicAuth = 'Basic ' + btoa(this.basicAuthString);
      let token = 'Bearer ';

      const userUrl = '/learn/api/public/v1/users';
      const tokenUrl = '/learn/api/public/v1/oauth2/token?grant_type=client_credentials';

      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': basicAuth });
      let options = new RequestOptions({ headers: headers });
      let body = {};

      console.log(headers);

      // Make the HTTP request:
      this.http.post(tokenUrl, body, options).subscribe(data => {
        // Read the result field from the JSON response.
        console.log(data);
        if (data['status'] === 200) {
          let respBody = JSON.parse(data['_body']);
          token += respBody['access_token'];

          headers = new Headers({ 'Authorization': token });
          options = new RequestOptions({ headers: headers });
          body = {
            'userName': model.username,
            'password': model.password,
            'name': {
              'given': model.first,
              'family': model.last
            },
            'availability': {
              'available': 'Yes'
            },
            'systemRoleIds': [
              'SystemAdmin'
            ]
          };

          console.log(headers);

          // Make the HTTP request:
          this.http.post(userUrl, body, options).subscribe(userData => {
            // Read the result field from the JSON response.
            if (userData['status'] === 201) {
              this.ngOnInit();
              newUserForm.resetForm();
              alert("Success!");
              //newUserForm.markAsPristine();
              //newUserForm.markAsUntouched();
              //newUserForm.updateValueAndValidity();
            }
          });
        };
      });
    };
  }
