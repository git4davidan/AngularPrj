import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user'
import { HttpClientService } from 'src/app/http-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayDialog: boolean;

  user: User;

  selectedUser: User;

  newUser: boolean;

  users: User[];

  cols: any[];

  userAddress: string;
  userCompany: string;
  
  constructor(private httpService: HttpClientService) { }

  ngOnInit() {
      this.httpService.getUsers()
      .subscribe( users => {
        this.users = users;
      });

      this.cols = [
          { field: 'id', header: 'ID' },
          { field: 'name', header: 'Name' },
          { field: 'username', header: 'User Name' },
          { field: 'email', header: 'Email' }
      ];
  }

  showDialogToAdd() {
      this.newUser = true;
      this.user;
      this.displayDialog = true;
  }

  close(){
    this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newUser = false;
      this.httpService.getUser( event.data.id )
      .subscribe( user => {
        this.user = user;
        this.userAddress = 
          user.address.suite + ', ' +
          user.address.street + ', ' +
          user.address.city + ', ' +
          'zip: ' + user.address.zipcode + '. ' +
           '(lat:' + user.address.geo.lat + ', lng:' + user.address.geo.lng + ')';

        this.userCompany = 
          user.company.name + ', ' +
          user.company.bs + ', ' +
          user.company.catchPhrase;

        this.displayDialog = true;
      });

  }
}

