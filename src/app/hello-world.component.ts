import { Component, OnInit, OnDestroy } from "@angular/core";

@Component ({
    selector: 'hello',
    styles: [`
    h1{
        color: red
    }
    `],
    template: '<h1>{{interpolate(5, 2, title)}}</h1>'
})

export class HelloWorld {
    title = 'Hi dude!'
    interpolate(a: number, b: number, s: string){
         return (a + b).toString() + ' ' + s;
    }
}