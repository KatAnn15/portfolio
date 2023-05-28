const cx = (classes: { [key: string]: any }): string => {
  return Object.entries(classes)
    .map((item, index) => {
      if (item[1]) return item[0];
      return "";
    })
    .join(" ");
};

export { cx };
