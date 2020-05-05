import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

    transform(items: any[], datosFiltrado: any, filtros: Object): unknown {
        if (items && items.length){
            items=items.filter(item => {
                let incluir = true;
                for (const atributo in filtros) {
                    if (filtros[atributo] && item[atributo] && item[atributo].toLowerCase().trim().indexOf(filtros[atributo].toLowerCase().trim()) === -1) {
                        incluir = false;
                    }
                }
                return incluir;
            })
            if (datosFiltrado) {
                datosFiltrado.textContent = items.length;
            }
        } else {
            datosFiltrado.textContent = 0;
        }
        return items;
    }

}