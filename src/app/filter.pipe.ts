import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === "") {
      return value;
    }
    const resultArray = [];
    for (let item of value) {
      if (item[propName].toUpperCase() === filterString.toUpperCase()) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}