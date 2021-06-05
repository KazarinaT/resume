import { Component, OnInit } from '@angular/core';
import{MyCertificat} from './mycertif'
//import{MYCER} from './mock-mycertif'
import { from } from 'rxjs';
@Component({
  selector: 'app-certif',
  templateUrl: './certif.component.html',
  styleUrls: ['./certif.component.css']
})
export class CertifComponent implements OnInit {

 //mycert=MYCER;
  MyCertificat=["../assets/img/certificat/cert6.jpg",
  "../assets/img/certificat/cert4.jpg",
  "../assets/img/certificat/cert2.jpg",
  "../assets/img/certificat/cert1.jpg",  
  "../assets/img/certificat/cert3.jpg",  
  "../assets/img/certificat/cert5.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
