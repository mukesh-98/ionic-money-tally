import {Component, DoCheck} from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements DoCheck{
  tableInfo =[];
  count=1;
  constructor(
      private dataService: DataService,
      private router: Router
  ) { }
  addTableInPage(){
    let c = this.count++;
    const data ={
      id : c,
      name: 'Table '+ c,
      number: c,
      order: []
    };
    this.dataService.addTable(data);
  }

  deleteTableById(id){
    this.dataService.deleteTable(id);
  }
  navigate(orderId){
    this.router.navigate(["/home/order",orderId])
  }
  ngDoCheck(){
    this.tableInfo = this.dataService.getAllData();
  }
}
