import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector    : 'layout-header',
  templateUrl : 'header.component.html',
  styleUrls   : ['header.component.css']
})
export class HeaderComponent implements OnInit {
  	title = 'FitnessPal';

  	constructor(private authService: AuthService) {

  	}
		ngOnInit(): void {
			
		}
}
