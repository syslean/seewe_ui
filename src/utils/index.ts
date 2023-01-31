
export function getYearAndMonth(date: Date | string): string {
  if(typeof date === "string"){
    date = new Date(date);
  }
  return `${date.getFullYear()}.${date.getMonth() + 1}`
}
