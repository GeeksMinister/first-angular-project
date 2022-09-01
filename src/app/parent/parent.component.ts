import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
   @ViewChild(ChildComponent) child: ChildComponent = new ChildComponent;
   ngOnInit() { alert(this.child.message + " here!"); }
   ngAfterViewInit() { alert(this.child.message); }






}
