const raw_foods = [
    {
        name: "Bún cá chấm Truyền thống",
        price: 42000,
        image: "https://images.foody.vn/res/g106/1050353/s400x400/8bb5b288-a4d0-431c-bc7f-a362e215-e91f84e8-201029095652.jpeg"
    },
    {
        name: "Bún cá chấm Đặc Biệt",
        price: 42000,
        image: "https://images.foody.vn/res/g106/1050353/s400x400/9562570f-4769-46c1-acda-04ba7a52-97e625bf-201127082615.jpeg"
    },
    {
        name: "Bún cá chấm đậu phụ giòn ",
        price: 42000,
        image: "https://images.foody.vn/res/g106/1050353/s400x400/125dacfd-e16d-4e1c-9fde-b41db827-52c69357-201029095839.jpeg"
    },
    {
        name: "Bánh đa Trộn cá ",
        price: 54000,
        image: "https://images.foody.vn/res/g106/1050353/s400x400/e1c43a4b-e12c-4fdc-9709-411afde0-3570e61b-230517232430.jpeg"
    },
    {
        name: "Há cảo chiên giòn",
        price: 30000,
        image: "https://images.foody.vn/res/g106/1050353/s400x400/5b34c732-fa44-4c4a-9c27-3f9d31a2-7638f98a-210409115114.jpeg"
    },
    {
        name: "Cơm cá chấm Đặc Biệt Full Topping",
        price: 60000,
        image: "https://images.foody.vn/res/g106/1050353/s400x400/e0dde175-658f-465b-b422-01f67561-6aa69a92-211206175031.jpeg"
    },
    {
        name: "Canh thịt bò bằm cải ngọt",
        price: 420000,
        image: "https://images.foody.vn/res/g103/1021427/s400x400/6bff8ec6-d72d-4623-9907-3681d3ed-a5fde4ad-230602170818.jpeg"
    },
    {
        name: "Canh thịt bò rong biển",
        price: 420000,
        image: "https://images.foody.vn/res/g103/1021427/s400x400/4f56cfdb-6e35-4dc7-b173-e5a5efe6-2811118b-230602170745.jpeg"
    }
];

localStorage.setItem("foods", JSON.stringify(raw_foods));

// const inputEl = document.getElementById("simple-search");
// const pEl = document.getElementById("search-input");
// inputEl.addEventListener("input", function (event) {
//     pEl.innerHTML =
//     const searchValue = inputEl.value;
//     if (searchValue.trim() != ) {
//         foods.forEach((item) => {
//             if (item.name.toLowerCase().includes(searchValue.trim().toLowerCase())) {
//                 pEl.innerHTML = pEl.innerHTML + item.name + item.price + item.image + "<br>";
//             }
//         });

//     }
// })
