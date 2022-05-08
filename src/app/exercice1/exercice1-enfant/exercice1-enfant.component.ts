import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public el: number;
  @Output() test: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public add() {
    this.el++;
    this.test.emit(this.el);
  }

  public less() {
    this.el--;
    this.test.emit(this.el);
  }
}
