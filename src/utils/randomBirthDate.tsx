function randomDate(start:Date, end:Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(randomDate(new Date(2012, 0, 1), new Date()));

export default date;
