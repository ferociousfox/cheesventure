import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Output() newUserSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  submitForm(name, history, skills, hairColor, weapon) {
    let newCharacter: Player = new Player(name, history, skills, hairColor, weapon);
    console.log(newCharacter);
    this.newUserSender.emit(newCharacter);
  }
}
