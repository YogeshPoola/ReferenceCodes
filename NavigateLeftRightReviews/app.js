// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Testing
// reviews.forEach(function (list) {
//   console.log(list);
//   // console.log(list["id"]);
//   // console.log(list["name"]);
//   // for (let props = 0; props < reviews.length; props++) {
//   //   console.log(list.props);
//   // }
// });

const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const img = document.getElementById("person-img");
const btn = document.getElementsByClassName("prev-btn");
/// My Approach
// let currentid = Math.floor(reviews.length / 2);

// btn[0].addEventListener("click", changeperson);
// btn[1].addEventListener("click", changeperson);
// function changeperson(e) {
//   if (e.target.className === "fas fa-chevron-left") {
//     document.querySelector(".review");
//     currentid -= 1;
//     console.log(currentid);
//     img.src = reviews[currentid].img;
//     author.textContent = reviews[currentid].name;
//     job.textContent = reviews[currentid].job;
//     info.textContent = reviews[currentid].text;
//   } else if (e.target.className === "fas fa-chevron-right") {
//     currentid += 1;
//     console.log(currentid);
//     img.src = reviews[currentid].img;
//     author.textContent = reviews[currentid].name;
//     job.textContent = reviews[currentid].job;
//     info.textContent = reviews[currentid].text;
//   }
// }

/// Best Approach
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let currentitem = 0;

//Load Initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentitem);
});

//Show Person Function
function showPerson() {
  const item = reviews[currentitem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
//Show Next Person
nextBtn.addEventListener("click", function () {
  currentitem++;
  if (currentitem > reviews.length - 1) {
    currentitem = 0;
  }
  showPerson();
});
//Show Previous Person
prevBtn.addEventListener("click", function () {
  currentitem--;
  if (currentitem < 0) {
    currentitem = reviews.length - 1;
  }
  showPerson();
});

//Show Random Person
const randomBtn = document.querySelector(".random-btn");

randomBtn.addEventListener("click", function () {
  currentitem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
