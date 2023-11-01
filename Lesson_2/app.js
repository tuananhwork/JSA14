// Lấy tham chiếu đến danh sách UL trên trang HTML
const itemList = document.getElementById("item-list");

// Thực hiện yêu cầu fetch để tải tệp JSON từ máy chủ
fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Lỗi mạng");
    }
    console.log();
    return response.json();
  })
  .then((data) => {
    // Lặp qua danh sách mặt hàng và hiển thị thông tin trên trang
    data.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>Giá: $${item.price}</p>
            `;
      itemList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error(error);
  });
