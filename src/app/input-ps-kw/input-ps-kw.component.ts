import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-ps-kw',
  templateUrl: './input-ps-kw.component.html',
  styleUrls: ['./input-ps-kw.component.css']
})
export class InputPsKwComponent implements OnInit {
  @Input() value = 30;
  @Output() valueChange = new EventEmitter<number>();

  @Input() uom = "Test";
  @Output() uomChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onPowerChanged() {
    this.valueChange.emit(this.value);
  }

  onUomChanged() {
    this.uomChange.emit(this.uom);
  }


}
