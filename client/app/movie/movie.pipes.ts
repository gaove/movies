import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'popularity'
})
export class popularity implements PipeTransform{
   transform(value: number): number {
        return Math.round(value*1000)/1000
    }
 }