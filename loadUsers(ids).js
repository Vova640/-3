function loadUsers(ids) {
  return Promise.all(
    ids.map(id =>
      getUser(id).catch(err => ({ error: err.message, id }))
    )
  );
}

loadUsers([0, 2, 5]).then(result => console.log(result));
