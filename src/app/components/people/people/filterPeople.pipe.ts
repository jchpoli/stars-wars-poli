import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common'

@Pipe({
  name: 'filterpeople'
})
export class FiltroPipePeople implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(items: any[], searchNombre : string, searchGenero: string, searchEstatura: string, searchPeso: string ){
        if (items && items.length){
            return items.filter(item =>{
                if (searchNombre && item.name.toLowerCase().indexOf(searchNombre.toLowerCase()) === -1){
                    return false;
                }
                if (searchGenero && item.gender.toLowerCase().indexOf(searchGenero.toLowerCase()) === -1){
                    return false;
                }
                if (searchEstatura && item.height.toLowerCase().indexOf(searchEstatura.toLowerCase()) === -1){
                    return false;
                }
                if (searchPeso && item.mass.indexOf(searchPeso) === -1){
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
