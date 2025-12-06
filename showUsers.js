async function showUsers(ids) {
  console.log("loading");

  try {
    const users = await loadUsers(ids);
    console.log(users);
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("loading finished");
  }
}

showUsers([0, 1, 3]);
showUsers([0, 10, 2]);
