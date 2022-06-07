function makeFriendsList(friends) {
  let friendsName = friends.map(friends => friends.firstName + ' ' + friends.lastName);

  const ul = document.createElement('ul');

  friendsName.forEach(el => {
    const li = document.createElement('li');
    li.textContent = `${el}`;
    ul.appendChild(li);
  });

  return ul;
}
