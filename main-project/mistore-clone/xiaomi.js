  const carouselImages = [
    {
      img: "https://mistore.pk/cdn/shop/files/Mid_Summer_Sale_Web_Banner_2_e0c42d1f-9dba-4715-8d07-68b9586881ca.jpg?v=1753187016",
      theme: "light-slide",
      href: "#midsummersale"
    },

    {
    img: "../Xiaomi/carousel/Mystery_Box1_Mi_Web_Banner_2.webp",
    theme: "light-slide",
    href: "#mystery"
    },
    {
    img: "../Xiaomi/carousel/2.webp",
    theme: "light-slide",
    href: "#redminote14"
    },
    {
    img: "../Xiaomi/carousel/3.webp",
    theme: "light-slide",
    href: "#loyaltypoints"
    },
    {
    img: "../Xiaomi/carousel/4.webp",
    theme: "light-slide",
    href: "#buynow"
    },
    {
    img: "../Xiaomi/carousel/5.webp",
    theme: "light-slide",
    href: "#redminote14"
    },
    {
    img: "../Xiaomi/carousel/6.webp",
    theme: "dark-slide",
    href: "#curvedgaming"
    },
    {
    img: "../Xiaomi/carousel/7.webp",
    theme: "light-slide",
    href: "#vacuume5"
    },
    {
    img: "../Xiaomi/carousel/8.webp",
    theme: "light-slide",
    href: "smartprojector"
    },
    {
    img: "../Xiaomi/carousel/9.webp",
    theme: "light-slide",
    href: "#smartblender"
    },
    {
    img: "../Xiaomi/carousel/10.webp",
    theme: "light-slide",
    href: "#tvapro"
    },
    {
    img: "../Xiaomi/carousel/11.webp",
    theme: "light-slide",
    href: "#vacuumx10"
    },
    {
    img: "../Xiaomi/carousel/12.webp",
    theme: "light-slide",
    href: "#pressurewasher"
    },
    {
    img: "../Xiaomi/carousel/13.webp",
    theme: "dark-slide",
    href: "#tvboxs"
    },
    {
    img: "../Xiaomi/carousel/14.webp",
    theme: "dark-slide",
    href: "#poco"

    }
  ];

  const carouselInner = document.getElementById("carousel-images")

  carouselImages.forEach(function(item,index){
    const div = document.createElement("div")
    div.className = `carousel-item ${item.theme}`;

    if(index === 0) div.classList.add("active");

    div.innerHTML = `<a href="${item.href}"><img src="${item.img}" class="d-block w-100" alt="slide ${index+1}" /></a>`;
    carouselInner.appendChild(div)
  })


  const categoryIcons = [
    {
        href: "Smartphones.html",
        img: "../Xiaomi/category/SmartPhone_26546b63-b537-4911-bafe-b4590ee20d19.avif",
        alt: "Smartphones",
        label: "Smartphones"
    },
    {
        href: "Gear&Device.html",
        img: "../Xiaomi/category/Gear_Devices.avif",
        alt: "Gear&Devices",
        label: "Gear & Devices"
    },
    {
        href: "audio.html",
        img: "../Xiaomi/category/Audio.avif",
        alt: "audio",
        label: "Audio"
    },
    {
        href: "Camera&Visual.html",
        img: "../Xiaomi/category/Camera_Visual.avif",
        alt: "camera&visuals",
        label: "Camera & Visuals"
    },
    {
        href: "PowerBank&Charging.html",
        img: "../Xiaomi/category/SmartPhone_26546b63-b537-4911-bafe-b4590ee20d19.avif",
        alt: "Powerbankcharging",
        label: "Power Bank & Charging"
    },
  ];

  const categoryContainer = document.getElementById("categoryIcons")

  categoryIcons.forEach(category => {
    const anchor = document.createElement("a")
    anchor.href = category.href
    anchor.className = "text-decoration-none text-dark text-center mx-2"

    const img = document.createElement("img")
    img.src = category.img;
    img.alt = category.alt;
    img.className = "category-icon";

    const label = document.createElement("div");
    label.textContent = category.label;
    label.className = "category-label"

    anchor.appendChild(img);
    anchor.appendChild(label);
    categoryContainer.appendChild(anchor)

  })


  
  const clickableImages = [
    {
        row: "row1",
        image: [
            {
                href: "#redmiwatch5",
                img:"../Xiaomi/clickables/Redmi_Watch_5_Active_Mobile_Tile_7_1000x.webp",
                alt: "RedmiWatch5",
                // width: "590px",
                height: "370px"
            },

            {
                href: "#TVaseries",
                img:"../Xiaomi/clickables/2.webp",
                alt: "TV A Series",
                // width: "590px",
                height: "370px"
            }
        ]
    },
    {
        row: "row2",
        image: [
            {
                href: "#smartcamera",
                img:"../Xiaomi/clickables/3.webp",
                alt: "Smart Camera C Series",
                // width: "590px",
                height: "370px"
            },

            {
                href: "#C500",
                img:"../Xiaomi/clickables/4.webp",
                alt: "C 500",
                // width: "292px",
                height: "370px"
            },
            {
                href: "#airfryer",
                img:"../Xiaomi/clickables/5.webp",
                alt: "Air Fryer",
                // width: "292px",
                height: "370px"
            },
        ]
    },
  ];

  const clickables = document.getElementById("clickableImages")

  clickableImages.forEach((rowdata) => {
    const row = document.createElement("div")
    row.className = rowdata.row

    rowdata.image.forEach((item)=>{
        const anchor = document.createElement("a")
        anchor.href = item.href
        anchor.className = "text-decoration-none";

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.alt;
        img.className = "clickables img-fluid";
        img.style.height = item.height;
        // img.style.width = item.width;

        anchor.appendChild(img)
        row.appendChild(anchor)
    });

    clickables.appendChild(row)
  })

 
  const newArrivals = [
  {
    title: "Mystery Box 1",
    price: "Rs. 25,999",
    img: "../Xiaomi/newarrivals/1.webp",
    link: "mystery-box.html"
  },
  {
    title: "Mystery Box 2",
    price: "Rs. 25,999",
    img: "../Xiaomi/newarrivals/2.webp",
    link: "mystery-box.html"
  },
  {
    title: "Redmi Note 14(8GB - 128GB)",
    price: "Rs. 49,999",
    oldPrice: "Rs. 53,999",
    img: "../Xiaomi/newarrivals/3.webp",
    link: "redminote14.html"
  },
  {
    title: "Redmi Note 14(8GB - 256GB)",
    price: "Rs. 53,899",
    oldPrice: "Rs. 57,999",
    img: "../Xiaomi/newarrivals/4.webp",
    link: "redminote14.html"
  },
  {
    title: "Xiaomi Robot Vacuum E5",
    price: "Rs. 34,999",
    img: "../Xiaomi/newarrivals/5.webp",
    link: "vacuume5"
  },
  {
    title: "Xiaomi Smart Audio Glasses",
    price: "Rs. 29,999",
    img: "../Xiaomi/newarrivals/6.webp",
    link: "smartglasses.html"
  },
  {
    title: "Xiaomi Faucet Water Purifier",
    price: "Rs. 6,899",
    img: "../Xiaomi/newarrivals/7.webp",
    link: "faucetwater"
  },
  {
    title: "Xiaomi Rechargeable Mini Fan",
    price: "Rs. 9,999",
    img: "../Xiaomi/newarrivals/8.webp",
    link: "minifan"
  },
  {
    title: "Xiaomi Toaster",
    price: "Rs. 12,999",
    img: "../Xiaomi/newarrivals/9.webp",
    link: "toaster"
  },
  {
    title: "Xiaomi Nose Hair Trimmer",
    price: "Rs. 3,999",
    img: "../Xiaomi/newarrivals/10.webp",
    link: "hairtrimmer"
  },
  {
    title: "Xiaomi Electric Pressure Cooker 4.8L",
    price: "Rs. 34,999",
    img: "../Xiaomi/newarrivals/11.webp",
    link: "pressurecooker"
  },
  {
    title: "Xiaomi Luggae Classic Pro 24",
    price: "Rs. 34,999",
    img: "../Xiaomi/newarrivals/12.webp",
    link: "luggage"
  },
  {
    title: "Xiaomi Smart Audio Glasses Replacement Kit",
    price: "Rs. 11,999",
    img: "../Xiaomi/newarrivals/13.webp",
    link: "replacementkit"
  },
  {
    title: "Xiaomi Water Flosser 2",
    price: "Rs. 7,999",
    img: "../Xiaomi/newarrivals/14.webp",
    link: "waterflosser"
  },
  {
    title: "Xiaomi Oscillation Electric Toothbrush",
    price: "Rs. 6,499",
    img: "../Xiaomi/newarrivals/15.webp",
    link: "electrictoothbrush"
  },
  {
    title: "Xiaomi Smart Scent Diffuser Refill (rose and lychee)",
    price: "Rs. 2,199",
    img: "../Xiaomi/newarrivals/16.webp",
    link: "smartscent"
  },
];

const container = document.querySelector("#new-arrivals-slider .swiper-wrapper");

newArrivals.forEach(product => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  slide.innerHTML = `
    <div class="product-card p-2 text-center">
    <a href="${product.link}" class="text-decoration-none" style="color:black">
      <img src="${product.img}" style="height: 200px; class="mx-auto d-block" />
      <div class="card-information mt-2">
        <h5 class="card_heading fw-semibold" style="font-size:16px">${product.title}</h5>
        <div class="price-container d-flex justify-content-center gap-2">
          <span class="fw-bold"  style="color: #ff6d00;">${product.price}</span>
          ${product.oldPrice ? `<s class="text-muted">${product.oldPrice}</s>` : ""}
        </div>
      </div>
      </a>
    </div>
  `;
  
  container.appendChild(slide);
});



const swiper =  new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 15 },
    576: { slidesPerView: 2.5, spaceBetween: 15 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    992: { slidesPerView: 4, spaceBetween: 20 },
  },

});



const powerBanks = [
  
    {
      title:"Xiaomi 165W Power Bank 10000(Integrated Cable)",
      price:"Rs. 11,499",
      img:"https://mistore.pk/cdn/shop/files/Xiaomi165WPowerBank10000_IntegratedCable.jpg?v=1736937301&width=533",
      link: "xiaomiPowerbank.html"
    },

    {
      title:"Xiaomi Ultra Slim Power Bank 5000mah",
      price:"Rs. 6,999",
      img:"https://mistore.pk/cdn/shop/files/XiaomiUltraSlimPowerBank5000mAh_0000s_0001_XiaomiUltraSlimPowerBank5000mAh.jpg?v=1753942531&width=533",
      link: "ultraslimpowerbank.html"
    },

    {
      title: "Xiaomi 33W Power Bank 20000mAh (Integrated Cable)",
      price:"Rs. 8,499",
      img:"https://mistore.pk/cdn/shop/files/Untitled-1_0006_Xiaomi33WPowerBank20000mAh_IntegratedCable.jpg?v=1734088264&width=533",
      link: "xiaomiPowerbank.html"
    },

    {
      title:"Xiaomi 120W HyperCharge Combo (Type-A)",
      price:"Rs. 6,999",
      oldPrice: "Rs. 7,999",
      img:"https://mistore.pk/cdn/shop/files/Xiaomi120WHyperChargeCombo_Type-A_EU.jpg?v=1739881601&width=533",
      link: "hyperchargercombo.html"
    },

     {
      title:"Redmi Power Bank 3 (20,000 mAh)",
      price:"Rs. 5,999",
      oldPrice: "Rs. 8,999",
      img:"https://mistore.pk/cdn/shop/products/RedmiPowerbank320000.jpg?v=1616614075&width=533",
      link: "powerbank3.html"
    },

    {
      title:"Xiaomi Power Bank 10000mAh (Integrated Cable)",
      price:"Rs. 5,299",
      oldPrice: "Rs. 5,699",
      img:"https://mistore.pk/cdn/shop/files/Xiaomi_Powerbank.jpg?v=1734328091&width=533",
      link: "xiaomipowerbank10000"
    },
    {
      title:"Xiaomi Power Bank 10000mAh 22.5W Lite",
      price:"Rs. 4,499",
      img:"https://mistore.pk/cdn/shop/files/ProductImages_0000s_0006_XiaomiPowerBank10000mAh22.5WLite.jpg?v=1735730063&width=533",
      link: "xiaomipb22.5"
    },
    {
      title:"Xiaomi Magnetic Power Bank 6000mAh",
      price:"Rs. 11,499",
      oldPrice: "Rs. 12,499",
      img:"https://mistore.pk/cdn/shop/files/NewArrival_0000s_0017_XiaomiMagneticPowerBank6000mAhGL2.jpg?v=1729326362&width=533",
      link: "magneticpowerbank"
    },
];

const powerBanksContainer = document.querySelector("#top-seller-slider .swiper-wrapper");

powerBanks.forEach(product => {
  
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide")
  slide.innerHTML = `
    <div class="product-card p-2 text-center">
      <a href="${product.link}" class="text-decoration-none product-container" style="color:black">
      <img src="${product.img}" style="height: 200px;" class-"mx-auto d-block" />
      <div class="card-information mt-2">
        <h5 class="card_heading fw-semibold" style="font-size:16px">${product.title}</h5>
        <div class="price-container d-flex justify-content-center gap-2">
          <span class="fw-bold" style="color: #ff6d00">${product.price}</span>
          ${product.oldPrice ? `<br><s class="text-muted">${product.oldPrice}</s>` : ""}
        </div>
      </div>
      </a>
    </div>
  `;
  powerBanksContainer.appendChild(slide);
});

const swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 15 },
    576: { slidesPerView: 2.5, spaceBetween: 15 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    992: { slidesPerView: 4, spaceBetween: 20 },
  }
});

