function getUser(id) {
  const users = [
    { id: 0, name: "John",  age: 20, city: "Kyiv" },
    { id: 1, name: "Anna",  age: 22, city: "Lviv" },
    { id: 2, name: "Mark",  age: 25, city: "Odesa" },
    { id: 3, name: "Iryna", age: 21, city: "Dnipro" }
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users[id];
      if (user) resolve(user);
      else reject(new Error("User not found"));
    }, 1000);
  });
}
