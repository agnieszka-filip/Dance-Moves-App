import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchValue: string, name: string): any[] {
    if (!items) return [];
    if (!searchValue) return items;
    searchValue = searchValue.toLowerCase();
    return items.filter((item) => {
      return item[name].toLowerCase().includes(searchValue);
    });
  }
}
