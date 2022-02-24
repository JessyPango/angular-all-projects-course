import { Component } from "@angular/core";


@Component({
    selector:'bonjour',
    template:'<h1>Bonjour tous le monde</h1>',
    styles:['h1 {font-family:Arial;}']
})


export class Bonjour {
    hello = hello();
}

function hello(){
    return "Bonjour tous le monde";
}