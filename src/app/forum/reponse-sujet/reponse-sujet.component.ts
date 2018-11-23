import { Component, OnInit, Input } from '@angular/core';
import { SujetForum } from '../../dot/forum/sujet-forum';

@Component({
  selector: 'app-reponse-sujet',
  templateUrl: './reponse-sujet.component.html',
  styleUrls: ['./reponse-sujet.component.css']
})
export class ReponseSujetComponent implements OnInit {

  @Input() sujet: SujetForum
  
  constructor() { }

  ngOnInit() {
  }

}
