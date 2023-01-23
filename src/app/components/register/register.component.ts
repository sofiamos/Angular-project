import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  user: User = { email: '' , password: ''}

  constructor(private us: UsersService, private router:Router){
  
  }

  ngOnInit(): void {
    
  }
 
  register(){
    this.us
    .register(this.user)
    .then ((data) => {
        sessionStorage.setItem('isLoggedIn', 'true')
        sessionStorage.setItem('email',data.user.email as string);
        this.router.navigateByUrl('home');
    })
    .catch((err)=> console.log(err));
     
  }
}
