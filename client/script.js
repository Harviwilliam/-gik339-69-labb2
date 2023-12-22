const url = "http://localhost:3000/users";

const userList = document.createElement("ul");

fetch(url)
  .then((response) => response.json())
  .then((users) => {
    //sortera användare beroende på färg
    users.sort((a, b) => {
      return a.color && b.color ? a.color.localeCompare(b.color) : 0;
    });

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.classList.add("mt-2");
      listItem.classList.add("rounded-1");
      listItem.textContent = `${user.id} ${user.firstName} ${user.lastName} ${user.color}`;

      if (user.color) {
        listItem.style.backgroundColor = user.color;
      }

      userList.appendChild(listItem);
    });
    document.body.appendChild(userList);
  });
