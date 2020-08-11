export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const myDate = new Date();
  const thisYear = myDate.getFullYear();
  const result = collection.find(item => {
    return item.age <= thisYear - 2000 && item.age >= thisYear - 2010;
  });
  return result.name;
}
