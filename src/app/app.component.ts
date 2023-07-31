import {Component, OnInit} from '@angular/core';
import {PizzeriaService} from "./services/pizzeria.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pizzeria';


  constructor(private pizzeriaService: PizzeriaService) {
  }

  ngOnInit(): void {
    this.pizzeriaService.getPizzas().subscribe(response => {
      console.log("PIZZAS: ", response);
    });

  }
}
