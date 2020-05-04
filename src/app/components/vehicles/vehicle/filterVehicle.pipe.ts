import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common'

@Pipe({
  name: 'filterv'
})
export class FilterPipeVehicles implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(items: any[], searchNombre: string, searchModelo: string, searchPasajeros: string){
        if (items && items.length){
            return items.filter(item =>{
                if (searchNombre && item.name.toLowerCase().indexOf(searchNombre.toLowerCase()) === -1){
                    return false;
                }
                if (searchModelo && item.model.toLowerCase().indexOf(searchModelo.toLowerCase()) === -1){
                    return false;
                }
                if (searchPasajeros && item.passengers.toLowerCase().indexOf(searchPasajeros.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return items;
        }
    }
}
