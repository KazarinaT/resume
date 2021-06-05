import { AstMemoryEfficientTransformer, isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ABOUT} from './mock-info'

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  myinfo = ABOUT; 

  constructor() { }

  ngOnInit(): void {
  }

}
