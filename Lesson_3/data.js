// Products List
const shoes = {
  data: [
    {
      productName: "Shoe 1",
      productImage: "./assets/img/img_1.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 2",
      productImage: "./assets/img/img_2.jfif",
      productDesc:
        "Lorem ipsum odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 3",
      productImage: "./assets/img/img_3.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit",
    },
    {
      productName: "Shoe 4",
      productImage: "./assets/img/img_4.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 5",
      productImage: "./assets/img/img_5.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 6",
      productImage: "./assets/img/img_6.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 7",
      productImage: "./assets/img/img_7.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 8",
      productImage: "./assets/img/img_8.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 9",
      productImage: "./assets/img/img_9.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 10",
      productImage: "./assets/img/img_10.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 11",
      productImage: "./assets/img/img_11.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 12",
      productImage: "./assets/img/img_12.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 13",
      productImage: "./assets/img/img_13.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 14",
      productImage: "./assets/img/img_14.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
    {
      productName: "Shoe 15",
      productImage: "./assets/img/img_15.jfif",
      productDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur unde ut earum asperiores perspiciatis, illo odit amet distinctio veniam temporibus doloribus velit quisquam fugit consequatur obcaecati quos saepe! Provident?",
    },
  ],
};

// Gender HTML
for (let item of shoes.data) {
  let card = document.createElement("div");
  card.classList.add("card");

  let cardImg = document.createElement("img");
  cardImg.setAttribute("src", item.productImage);
  cardImg.classList.add("card-img");

  card.appendChild(cardImg);

  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  let cardName = document.createElement("h2");
  cardName.classList.add("card-name");
  cardName.innerText = item.productName.toUpperCase();

  cardInfo.appendChild(cardName);

  let cardDesc = document.createElement("p");
  cardDesc.classList.add("card-desc");
  cardDesc.innerText = item.productDesc;

  cardInfo.appendChild(cardDesc);

  card.appendChild(cardInfo);

  document.getElementById("grid-container").appendChild(card);
}

// Handle search
const searchBtn = document.getElementById("search_btn");
const searchInput = document.getElementById("search-input");
const cards = document.querySelectorAll(".card");
const cardsName = document.querySelectorAll(".card-name");

searchBtn.addEventListener("click", search);
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    search();
  }
});

function search() {
  let searchValue = searchInput.value.toUpperCase();

  cardsName.forEach(function (item, index) {
    if (item.innerText.includes(searchValue.trim())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
}
