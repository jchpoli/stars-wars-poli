import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

    transform(items: any[], filtros: Object): unknown {
        if (items && items.length) {
            return items.filter(item => {
                let incluir = true;
                for (const atributo in filtros) {
                    if (filtros[atributo] && item[atributo] && item[atributo].toLowerCase().indexOf(filtros[atributo].toLowerCase()) === -1) {
                        incluir = false;
                    }
                }
                return incluir;
            })
        } else {
            return items;
        }
    }

}