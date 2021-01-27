import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  table = [];
  constructor() { }

  getAllData(){
    return this.table.slice(0, this.table.length);
  }


  addTable(data){
    this.table.push(data);
    console.log(this.table);
    return this.table.slice(0, this.table.length);
  }

  deleteTable(tableId){
    this.table = this.table.filter(data => {return tableId !== data.id});
    return this.table.slice(0, this.table.length);
  }
}
