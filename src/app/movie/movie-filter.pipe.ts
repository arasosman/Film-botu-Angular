import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from './Movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(value: Movie[], filterText?: string): Movie[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;

    return filterText ? value.filter((p: Movie) =>
      p.title.toLocaleLowerCase().indexOf(filterText) !== -1
    ) : value;
  }

}
