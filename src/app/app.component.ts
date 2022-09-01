import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startValue = 5;
  height = 4;
  public dictionary = new Map();

  public calculate() {
    this.dictionary.clear()
    this.multiplication();
    this.division();
    this.startValue
    this.startValue = 2;
  }

  multiplication() {
    let count = 1;
    while (this.height > count) {
      count++;
      const expression = `${this.startValue} * ${count}`;
      this.dictionary.set(expression, this.startValue = (this.startValue * count))
    }
  }

  division() {
    let count = 1;
    while (this.height > count) {
      count++;
      const expression = `${this.startValue} / ${count}`;
      this.dictionary.set(expression, this.startValue = (this.startValue / count))
    }
  }

}
