export const formatDateRange = (period?: string[]): string => {
  if (period && period.length === 2) {
    return period.map((point) => {
      const date = new Date(point);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // add 1 to get 1-based month
      return `${year}.${month.toString().padStart(2, '0')}`;
    }).join("-")
  } else {
    return ""
  }
}

export const formatDate = (date?: string): string => {
  if (date) {
      const day = new Date(date);
      const year = day.getFullYear();
      const month = day.getMonth() + 1; // add 1 to get 1-based month
      return `${year}.${month.toString().padStart(2, '0')}`;
  } else {
    return ""
  }
}
