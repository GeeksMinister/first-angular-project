import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';

  todos = ['Angular', 'Typescript', 'C#', 'ASP.NET']

  public inputField: string = "";   // try nullable
  public addItem() {
    if (this.inputField.trim() != "") {
      this.todos.push(this.inputField);
      this.inputField = "";
    } else {
      alert('Type in a value to add to the list');
    }
  }

  public removeItem(item: string) {
    // const i: number = this.todos.indexOf(item);
    this.todos.splice(this.todos.indexOf(item), 1)
  }

  alertMessage(message: string) {
    alert(message);
  }


}
