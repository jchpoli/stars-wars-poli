import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(items: any[], searchNombre: string, searchProductor: string, searchDirector : string, searchLanzamiento: string ){
        if (items && items.length){
            console.log(searchLanzamiento);
            searchLanzamiento = this.datePipe.transform(searchLanzamiento, 'yyyy-MM-dd');
            console.log(searchLanzamiento);
            return items.filter(item =>{
                if (searchNombre && item.title.toLowerCase().indexOf(searchNombre.toLowerCase()) === -1){
                    return false;
                }
                if (searchProductor && item.producer.toLowerCase().indexOf(searchProductor.toLowerCase()) === -1){
                    return false;
                }
                if (searchDirector && item.director.toLowerCase().indexOf(searchDirector.toLowerCase()) === -1){
                    return false;
                }
                if (searchLanzamiento && item.created.indexOf(searchLanzamiento) === -1){
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