const dateToString = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: '2-digit' };
  return new Date(date).toLocaleDateString('en-GB', options);
};

export default dateToString;
