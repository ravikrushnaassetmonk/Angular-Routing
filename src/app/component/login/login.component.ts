import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faLock = faLock;
  loginform = new FormGroup({
    email : new FormControl(""),
    password : new FormControl("")
  })
  constructor(private auth:AuthService,private router: Router) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin'])
    }
  }
  onSubmit():void{
    
    if (this.loginform.valid) {
      this.auth.login(this.loginform.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
  }

  }
}
