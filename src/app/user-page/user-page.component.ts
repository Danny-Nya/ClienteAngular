import { Component, OnInit } from '@angular/core';
import { TokenPostBackendService } from '../autenticacionYRegistro/token-post-backend.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{

  userInfo: any;
  constructor(private postBackendAuthService: TokenPostBackendService){}
  ngOnInit(): void {



    const token = localStorage.getItem('jwtToken') || '';

    this.postBackendAuthService.sendPostRequestWithToken(token)
      .subscribe(
        (response) => {

          this.userInfo = response;
          console.log('User Info:', this.userInfo);
        },
        (error) => {
          console.error('Error fetching user info:', error);

        }
      );
  }


  }




