import { Component,OnInit} from '@angular/core';
import { UserService } from './Services/user.service';
import { user } from './Models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Auditoria';
  Users:user[]=[]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUsers()
  }
  constructor(private _userService:UserService){
  }

  getUsers(){
    this._userService.getAll().subscribe(Users =>{
      this.Users=Users
      console.log(this.Users)
    })
  }

  }

