  
document.querySelector(".close-btn").addEventListener("click", function(){
  document.querySelector(".bottom-bar").style.display = "none";
})

const navbarLinks = [
  { text: "New Arrivals", href: "xiaomilogin.html" },
  { text: "Smartphones", href: "Smartphones.html" },
  { text: "Power Bank and Charging", href: "PowerBank&Charging.html" },
  { text: "Gear & Device", href: "Gear&Device.html" },
  { text: "Camera & Visual", href: "Camera&Visual.html" },
  { text: "Audio", href: "audio.html" },
  { text: "Lifestyle", href: "lifestyle.html" },
  { text: "Deals", href: "deals.html"},
  { text: "Reward Points", href: "rewards.html"}
];


const navbar_dropdown = {
  "New Arrivals": [

  {
    title: "Mystery Box 1",
    price: "Rs. 14,999",
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
  },
  {
    title: "Xiaomi Smart Audio Glasses",
    price: "Rs. 29,999",
    img: "../Xiaomi/newarrivals/6.webp",
    link: "smartglasses.html"
  },
  {
        title: "Xiaomi Ultra Slim Power Bank 5000mah",
        price: "Rs. 6,999",
        img: "https://mistore.pk/cdn/shop/files/XiaomiUltraSlimPowerBank5000mAh_0000s_0001_XiaomiUltraSlimPowerBank5000mAh.jpg?v=1753942531&width=533",
        
    },

  {
    title: "Redmi Pad 2 (4G)",
    price: "Rs. 62,999",
    img: "https://mistore.pk/cdn/shop/files/Redmi_Pad_2_4G_Grey.jpg?v=1753778432&width=533",

  },
  {
    title: "Redmi Pad 2 (8+256 GB)",
    price: "Rs. 57,999",
    img: "https://mistore.pk/cdn/shop/files/Redmi_Pad_2_4G_Grey.jpg?v=1753778432&width=533",

  },
  {
    title: "Xiaomi Tv Stick 4K (2nd Gen)",
    price: "Rs. 15,999",
    img: "https://mistore.pk/cdn/shop/files/XiaomiTVStick4K_2ndGen_ProductImagecopy2.jpg?v=1753778429&width=533",
 
  },
  {
    title: "Xiaomi Faucet Water Purifier",
    price: "Rs. 6,899",
    img: "../Xiaomi/newarrivals/7.webp",

  },
  {
    title: "Xiaomi Rechargeable Mini Fan",
    price: "Rs. 9,999",
    img: "../Xiaomi/newarrivals/8.webp",
 
  },
  {
    title: "Xiaomi Toaster",
    price: "Rs. 12,999",
    img: "../Xiaomi/newarrivals/9.webp",

  },
  {
    title: "Xiaomi Nose Hair Trimmer",
    price: "Rs. 3,999",
    img: "../Xiaomi/newarrivals/10.webp",

  },
  {
    title: "Xiaomi Electric Pressure Cooker 4.8L",
    price: "Rs. 34,999",
    img: "../Xiaomi/newarrivals/11.webp",

  },
  {
    title: "Xiaomi Luggae Classic Pro 24",
    price: "Rs. 34,999",
    img: "../Xiaomi/newarrivals/12.webp",

  },
  {
    title: "Xiaomi Smart Audio Glasses Replacement Kit",
    price: "Rs. 11,999",
    img: "../Xiaomi/newarrivals/13.webp",

  },
  {
    title: "Xiaomi Water Flosser 2",
    price: "Rs. 7,999",
    img: "../Xiaomi/newarrivals/14.webp",

  },
  {
    title: "Xiaomi Oscillation Electric Toothbrush",
    price: "Rs. 6,499",
    img: "../Xiaomi/newarrivals/15.webp",

  },
  {
    title: "Xiaomi Smart Scent Diffuser Refill (rose and lychee)",
    price: "Rs. 2,199",
    img: "../Xiaomi/newarrivals/16.webp",

  },

  {
    title: "Xiaomi Smart Band 10",
    price: "Rs. 12,999",
    img: "https://mistore.pk/cdn/shop/files/Xiaomismartband.jpg?v=1750851543&width=533",

  },
  {
    title: "Xiaomi Watch Charging Dock",
    price: "Rs. 2,749",
    img: "https://mistore.pk/cdn/shop/files/Xiaomi_Watch_Charging_Dock.jpg?v=1750066077&width=533",
 
  },
  {
    title: "Redmi A5 (4GB+ 128GB)",
    price: "Rs. 25,999",
    oldPrice: "Rs. 26,999",
    img: "https://mistore.pk/cdn/shop/files/RedmiA5bLACK_fbfabfdd-ab04-4fbf-a92e-e7553b2e3532.jpg?v=1744881784&width=533",
 
  },
  {
    title: "Xiaomi TV A Pro 65 2025",
    price: "Rs. 204,999",
    img: "https://mistore.pk/cdn/shop/files/XiaomiTVAPro652025.jpg?v=1738835427&width=533",
 
  },
  {
    title: "Xiaomi TV Box S (3rd Gen)",
    price: "Rs. 18,499",
    oldPrice: "Rs. 19,499",
    img: "https://mistore.pk/cdn/shop/files/Xiaomi_tv_box_s_3rd_gen__0000s_0000_Xiaomi_tv_box_s_3rd_gen.jpg?v=1746733384&width=533",
 
  }
],

  "Smartphones": [
    { title: "Redmi 13 (8GB - 128GB)",
      price: "Rs. 32,899",
      oldPrice: "Rs. 42,999",
      img: "https://mistore.pk/cdn/shop/files/black.webp?v=1731258862&width=533",
 
    },

    { title: "Redmi Note 14 Pro (8GB - 256GB)",
      price:"Rs. 73,899",
      oldPrice: "Rs. 79,999",
      img: "https://mistore.pk/cdn/shop/files/Note_14_Pro_Sand_Gold_1.jpg?v=1752324063&width=533",
      link: "redminote14.html"
    },

    { title: "Redmi Note 14 Pro (12GB-512GB)",
      price: "Rs. 88,899",
      oldPrice: "Rs. 94,999",
      img: "https://mistore.pk/cdn/shop/files/Note_14_Pro_Sand_Gold_1.jpg?v=1752324063&width=533",
      link: "Redminote14.html"
    },

    { title: "Redmi Note 14 (8GB-256GB)",
      price: "Rs. 53,899",
      oldPrice: "Rs. 57,999",
      img: "https://mistore.pk/cdn/shop/files/Redmi_Note_14_Sand_Gold.jpg?v=1751460774&width=533",
      link: "redminote14.html"
    },

    { title: "Redmi Note 14 Pro + 5G (12GB-512GB)",
      price: "Rs. 136,899",
      oldPrice: "Rs. 144,999",
      img: "https://mistore.pk/cdn/shop/files/Note14Por_5GBlack.jpg?v=1736750198&width=533",
      link: "redminote14.html"
    },
    { title:"Redmi 14C (6GB - 128GB)",
      price: "Rs. 27,499",
      oldPrice: "Rs. 32,999",
      img: "https://mistore.pk/cdn/shop/files/REDMI14CBLUE_grande_3d6d98e3-83b5-4b26-90fd-9bc1d2d2d4da.webp?v=1731259405&width=533",
      link: "redmi14c.html"
    },

    { title: "Redmi A3x (3GB-64GB)",
      price: "Rs. 17,599",
      oldPrice: "Rs. 20,999",
      img: "https://mistore.pk/cdn/shop/files/redmi-a3x-Mistore.webp?v=1731257299&width=533",
      link: "redmia3x.html"
    },

    { title: "Xiaomi 15 (12GB-512GB)",
      price: "Rs 269,999",
      img: "https://mistore.pk/cdn/shop/files/xiaomi_15_green.webp?v=1742196235&width=533",
      link: "redmi15"
    },

    { title: "Redmi 15 Ultra (16GB+512GB)",
      price: "Rs. 399,999",
      img: "https://mistore.pk/cdn/shop/files/xiaomi_15_ultra_black.webp?v=1742195858&width=533",
      link: "Xiaomi15ultra"
    },

    { title: "Redmi Note 13 (8GB-256GB)",
      price: "Rs. 44,912",
      oldPrice: "Rs. 57,999",
      img: "https://mistore.pk/cdn/shop/files/redmi-note-13-8gb-256gb-_black.webp?v=1743145973&width=533",
      link: "redminote13"
    },

    { title: "POCO X7 Pro 5G (12GB-512GB)",
      price:"Rs. 139,999",
      img: "https://mistore.pk/cdn/shop/files/X7ProBlack..jpg?v=1736417303&width=533",
      link: "pocox7"
    },
  ],

  "Power Bank and Charging": [
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
      link: "xiaomiPowerbank1000.html"
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
      link: "xiaomipowerbank1000.html"
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
    
  ],

  "Gear & Device": [
    {
      title:"Xiaomi Smart Band 10",
      price:"Rs. 12,999",
      img: "https://mistore.pk/cdn/shop/files/Xiaomismartband.jpg?v=1750851543&width=533",
      link: "smartband10"
    },

    {
      title: "Redmi Watch 5",
      price:"Rs. 24,999",
      oldPrice: "Rs. 29,999",
      img: "https://mistore.pk/cdn/shop/files/Redmi_Watch_5_0000s_0000_Layer_1_1.jpg?v=1736769255&width=533",
      link: "redmiwatch5"
    },
    {
      title: "Redmi Watch 5 Active",
      price:"Rs. 8,499",
      oldPrice: "Rs. 10,499",
      img: "https://mistore.pk/cdn/shop/files/RedmiWatch5ActiveBlackFront.jpg?v=1728636441&width=533",
      link: "watch5active"
    },
    {
      title: "Xiaomi Dual-mode Wireless Mouse 2",
      price:"Rs. 3,999",
      oldPrice: "Rs. 4,299",
      img: "https://mistore.pk/cdn/shop/files/XiaomiDual-modeWirelessMouse2_White_Black.jpg?v=1739878988&width=533",
      link: "dual-modewirelessmouse"
    },
    {
      title: "Xiaomi WiFi Range Extender N300",
      price:"Rs. 4,599",
      oldPrice: "Rs. 5,199",
      img: "https://mistore.pk/cdn/shop/files/XiaomiWiFiRangeExtenderN300.jpg?v=1698750648&width=533",
      link: "wifirangeextender"
    },
    {
      title: "Xiaomi Wireless Keyboard and Mouse Combo",
      price:"Rs. 6,999",
      img: "https://mistore.pk/cdn/shop/products/XiaomiWirelessKeyboardandMouseCombo.png?v=1673508534&width=533",
      link: "wirelesskeyboard"
    },
    {
      title: "Redmi Watch 5 Active",
      price:"Rs. 12,499",
      oldPrice: "Rs. 13,999",
      img: "https://mistore.pk/cdn/shop/files/RedmiWatch5LiteBlack.jpg?v=1728636950&width=533",
      link: "watch5lite"
    },

    {
      title: "Xiaomi Watch S4",
      price:"Rs. 39,999",
      img: "https://mistore.pk/cdn/shop/files/Xiaomiwatchs4_grande_73edf668-1f9b-4015-bd15-0d8915878f39.webp?v=1742295944&width=533",
      link: "watchS4"
    },
  ],

  "Camera & Visual": [

    {
      title: "Xiaomi TV Stick 4K (2nd Gen)",
      price: "Rs. 15,999",
      img: "https://mistore.pk/cdn/shop/files/XiaomiTVStick4K_2ndGen_ProductImagecopy2.jpg?v=1753778429&width=533",
      link: "tvstick"
    },

    {
      title: "Xiaomi TV A 55 2025",
      price: "Rs. 118,999",
      oldPrice: "Rs. 142,999",
      img: "https://mistore.pk/cdn/shop/files/XiaomiTVA552025.jpg?v=1738834684&width=533",
      link: "tva55"
    },
    {
      title: "Xiaomi Gaming Monitor G27i",
      price: "Rs. 44,999",
      oldPrice: "Rs. 49,999",
      img: "https://mistore.pk/cdn/shop/files/XiaomiGamingMonitorG27i.jpg?v=1707983027&width=162",
      link: "gamingmonitor"
    },
    {
      title: "Xiaomi TV Box S (3rd Gen)",
      price: "Rs. 18,499",
      oldPrice: "Rs. 19,499",
      img: "https://mistore.pk/cdn/shop/files/Xiaomi_tv_box_s_3rd_gen__0000s_0000_Xiaomi_tv_box_s_3rd_gen.jpg?v=1746733384&width=533",
      link: "tvboxs"
    },
    {
      title: "Xiaomi Outdoor Camera CW400",
      price: "Rs. 17,999",
      oldPrice: "Rs. 18,999",
      img: "https://mistore.pk/cdn/shop/files/XiaomiOutdoorCameraCW400.jpg?v=1707982045&width=533",
      link: "outdoorcamera"
    },
    {
      title: "Xiaomi Smart Camera C500 Pro",
      price: "Rs. 17,999",
      oldPrice: "Rs. 21,999",
      img: "https://mistore.pk/cdn/shop/files/XiaomiSmartCameraC500Pro.jpg?v=1719396715&width=533",
      link: "smartcamerac500"
    },
    {
      title: "Xiaomi Outdoor Camera AW200",
      price: "Rs. 8,999",
      oldPrice: "Rs. 9,699",
      img: "https://mistore.pk/cdn/shop/files/XiaomiOutdoorCameraAW200-01.jpg?v=1682486579&width=533",
      link: "outdoorcameraaw200"
    },
    {
      title: "MI Wireless Outdoor Security Camera 1080P",
      price: "Rs. 13,799",
      img: "https://mistore.pk/cdn/shop/products/MIWIRELESSOUTDOORSECURITYCAMERA1080P.png?v=1663846432&width=533",
      link: "outdoorsecccamera"
    },
    {
      title: "MI Smart Projector 2 Pro",
      price: "Rs. 249,999",
      img: "https://mistore.pk/cdn/shop/products/Product-Images---600x600---Mi-Smart-Projector-2-Pro---02_1.png?v=1622708354&width=533",
      link: "smartprojector"
    },
    {
      title: "Xiaomi Smart Camera C400",
      price: "Rs. 15,999",
      oldPrice: "Rs. 17,499",
      img: "https://mistore.pk/cdn/shop/files/XiaomiSmartCameraC400.jpg?v=1707981766&width=533",
      link: "smartcamerac400"
    },
  ],

  "Audio": [

    {
      title: "Redmi Buds 6",
      price: "Rs. 9,999",
      oldPrice: "Rs. 10,499",
      img: "https://mistore.pk/cdn/shop/files/RedmiBuds6Blac.webp?v=1740075830&width=533",
      link: "redmibuds6"
    },

    {
      title: "Redmi Buds 6 Play",
      price: "Rs. 3,499",
      img:  "https://mistore.pk/cdn/shop/files/RedmiBuds6Playcopy2.png?v=1726058497&width=533",
      link: "redmibuds6play"
    },
    {
      title: "Redmi Buds 6 Active",
      price: "Rs. 5,299",
      oldPrice: "Rs. 5,499",
      img:  "https://mistore.pk/cdn/shop/files/RedmiBuds6Active-Black.jpg?v=1723540974&width=533",
      link: "redmibuds6actvie"
    },
    {
      title: "Xiaomi Type-C Earphones",
      price: "Rs. 1,649",
      img:  "https://mistore.pk/cdn/shop/files/XiaomiType-CEarphones2.png?v=1727436137&width=533",
      link: "type-cearphones"
    },
    {
      title: "Piston Basics (Handsfree)",
      price: "Rs. 1,549",
      img:  "https://mistore.pk/cdn/shop/products/Piston_Basic_Hand_free_Black_grande_664dc185-81d4-46fd-a7f9-a17094c655c8.png?v=1616614005&width=533",
      link: "pistonbasic"
    },
    {
      title: "Xiaomi Buds 5",
      price: "Rs. 25,999",
      oldPrice: "Rs. 29,499",
      img:  "https://mistore.pk/cdn/shop/files/XiaomiBuds5Black.png?v=1727080964&width=533",
      link: "xiaomibuds5"
    },
    {
      title: "Xiaomi Bluetooth Speaker",
      price: "Rs. 21,499",
      img:  "https://mistore.pk/cdn/shop/files/XiaomiBluetoothSpeaker.png?v=1726057390&width=533",
      link: "bluetoothspeaker"
    },
    {
      title: "Xiaomi Soundbar 2.0ch",
      price: "Rs. 12,999",
      oldPrice: "Rs. 13,499",
      img:  "https://mistore.pk/cdn/shop/files/XiaomiSoundbar2.0ch.jpg?v=1738319970&width=533",
      link: "soundbar2.0"
    },
    {
      title: "Xiaomi Bluetooth Speaker Mini",
      price: "Rs. 10,499",
      img:  "https://mistore.pk/cdn/shop/files/XiaomiBluetoothSpeakerMini.png?v=1726054138&width=533",
      link: "bluetoothspeakermini"
    },
  ],

  "Lifestyle": [

    {
      title: "Xiaomi Smart Air Purifier 4 Compact",
      price: "Rs. 34,999",
      img: "https://mistore.pk/cdn/shop/products/xiaomismartairpurifier4compact.jpg?v=1666260405&width=533",
      link: "airpurifier"
    },
    {
      title: "Xiaomi Robot Vacuum x10",
      price: "Rs. 84,999",
      oldPrice: "Rs. 89,999",
      img: "https://mistore.pk/cdn/shop/files/NewArrival_0000s_0004_XiaomiRobotVacuumX10EU2_1.jpg?v=1741453652&width=533",
      link: "robotvacuum"
    },

    {
      title: "Xiaomi Smart Air Purifier 4 Compact Filter Pro",
      price: "Rs. 7,699",
      oldPrice: "Rs. 8,499",
      img: "https://mistore.pk/cdn/shop/products/XiaomiSmartAirPurifier4CompactFilterpro.png?v=1736850549&width=533",
      link: "airpurifierfilterpro"
    },
    {
      title: "Xiaomi Smart Air Purifier 4",
      price: "Rs. 69,999",
      img: "https://mistore.pk/cdn/shop/products/Xiaomi-Smart-Air-Purifier-4--product-image.png?v=1647068323&width=533",
      link: "airpurifier4"
    },
    {
      title: "Xiaomi Smart Air Purifier 4 Pro",
      price: "Rs. 89,999",
      img: "https://mistore.pk/cdn/shop/products/Xiaomi-Smart-Air-Purifier-4-Pro--Product-image.png?v=1653291039&width=533",
      link: "airpurifier4pro"
    },
    {
      title: "Mi Vacuum Cleaner mini",
      price: "Rs. 15,999",
      oldPrice: "Rs. 16,499",
      img: "https://mistore.pk/cdn/shop/products/MiVacuumCleanermini.jpg?v=1616613969&width=533",
      link: "vacuumcleanermini"
    },
    {
      title: "Xiaomi Robot Vacuum E5",
      price: "Rs. 34,999",
      img: "https://mistore.pk/cdn/shop/files/e5.jpg?v=1751978356&width=533",
      link: "robotvacuume5"
    },
    {
      title: "Xiaomi Vacuum Cleaner G20 Lite",
      price: "Rs. 32,499",
      img: "https://mistore.pk/cdn/shop/files/XiaomiVacuumCleanerG20Lite2.png?v=1726217357&width=533",
      link: "vcg20"
    },

    {
      title: "Xiaomi Smart Air Purifier 4 Lite",
      price: "Rs. 57,999",
      oldPrice: "Rs. 61,499",
      img: "https://mistore.pk/cdn/shop/products/airpurifier4lite.jpg?v=1666009463&width=533",
      link: "ap4lite"
    },

    {
      title: "Mi Robot Vacuum-Mop Essential",
      price: "32,000",
      img: "https://mistore.pk/cdn/shop/products/1Moo.png?v=1616613907&width=533",
      link: "vacuum-mop"
    }
  ],

  "Deals": [

    {
      title: "Redmi Buds 6 Active",
      price:"Rs. 5,299",
      oldPrice: "Rs. 5,499",
      img: "https://mistore.pk/cdn/shop/files/RedmiBuds6Active-Black.jpg?v=1723540974&width=360",
      link: "redmibuds5active"
    },
    {
      title: "E-Gift Card",
      price:"Rs. 5,000",
      img: "https://mistore.pk/cdn/shop/products/evoucherproductimages-04.jpg?v=1670063370&width=360",
      link: "e-giftcard"
    },
    {
      title: "Redmi A5 (4GB+64GB)",
      price:"Rs. 21, 399",
      oldPrice: "Rs. 22,999",
      img: "https://mistore.pk/cdn/shop/files/RedmiA5Gold.jpg?v=1744882177&width=360",
      link: "redmia5"
    },
    {
      title: "Redmi A5 (4GB+128GB)",
      price:"Rs. 25,999",
      oldPrice: "Rs. 26,999",
      img: "https://mistore.pk/cdn/shop/files/RedmiA5bLACK_fbfabfdd-ab04-4fbf-a92e-e7553b2e3532.jpg?v=1744881784&width=360",
      link: "redmia5128gb"
    },
    {
      title: "Redmi A3x (3GB-64GB)",
      price:"Rs. 12,599",
      oldPrice: "Rs. 20,999",
      img: "https://mistore.pk/cdn/shop/files/redmi-a3x-Mistore.webp?v=1731257299&width=360",
      link: "redmia3x"
    },
    {
      title: "Redmi 14C (6GB-128GB)",
      price:"Rs. 27,499",
      oldPrice: "Rs. 32,999",
      img: "https://mistore.pk/cdn/shop/files/REDMI14CBLUE_grande_3d6d98e3-83b5-4b26-90fd-9bc1d2d2d4da.webp?v=1731259405&width=360",
      link: "redmi14c"
    },
    {
      title: "Redmi 13 (8GB-128GB)",
      price:"Rs. 32,899",
      oldPrice: "Rs. 42,999",
      img: "https://mistore.pk/cdn/shop/files/black.webp?v=1731258862&width=360",
      link: "redmi13"
    },
    {
      title: "Redmi Buds 6 Play",
      price:"Rs. 3, 499",
      img: "https://mistore.pk/cdn/shop/files/RedmiBuds6Playcopy2.png?v=1726058497&width=360",
      link: "redmibuds6"
    },
    {
      title: "Redmi Pad 2 (8+256GB)",
      price:"Rs. 57,999",
      img: "https://mistore.pk/cdn/shop/files/RedmiPad2Grey.jpg?v=1753778425&width=360",
      link: "redmipad2"
    },

    {
      title: "Mi Tv Stick",
      price: "Rs. 12,499",
      oldPrice: "Rs. 13,999",
      img: "https://mistore.pk/cdn/shop/products/MiTVStickEU.png?v=1735807272&width=360",
      link: "tvstick"
    },

    {
      title: "Mi Casual Daypack",
      price: "Rs. 2,199",
      oldPrice: "2,399",
      img: "https://mistore.pk/cdn/shop/products/xiaomicasualdaypackskyblue.png?v=1663072628&width=360",
      link: "daypack"
    }
  ]

};


const navList = document.getElementById("third-links");

navbarLinks.forEach(link => {
  const li = document.createElement("li");
  li.className = "nav-item";

  li.innerHTML = `
      <a class="nav-link third-navbar-item" href="${link.href}">
        <h2>${link.text}</h2>
      </a>`;

  if (navbar_dropdown[link.text]) {

    // li.innerHTML = `
    //   <a class="nav-link third-navbar-item" href="${link.href}">
    //     <h2>${link.text}</h2>

    const navlink = li.querySelector(".nav-link");
    navlink.innerHTML += `
      
      <div class="dropdown-panel position-absolute bg-white p-3 shadow-sm"  style="min-width:300px; display: none;">
       <div class="container-fluid">
        <div class="row new-arrivals-preview flex-nowrap"></div>
      </div>  
      </div>
    `;

    navList.appendChild(li);

    const dropdownMenu = li.querySelector(".dropdown-panel");
    const previewRow = li.querySelector(".new-arrivals-preview");

    const categoryData = navbar_dropdown[link.text];

    categoryData.slice(0, 5).forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "dropdown-card text-center";

        productDiv.innerHTML = `
        <a href="${product.link}" style="text-decoration: none; color: inherit;">
          <img src="${product.img}" class="img-fluid" />
          <p class="mb-1 small fw-semibold">${product.title}</p>
          <p class="mb-0 text-orange fw-bold" style="color: #ff6d00">${product.price}</p>
          ${product.oldPrice ? `<s class="text-muted">${product.oldPrice}</s>` : ""}
          </a>
          `;

        previewRow.appendChild(productDiv);
   
    });

    if(categoryData.length > 5){
       const viewMoreDiv = document.createElement("div");
        viewMoreDiv.className = "dropdown-card text-center";

        viewMoreDiv.innerHTML = `
        <a href="${link.href}" class="view-more-button">
          <img src ="//mistore.pk/cdn/shop/files/5B4554A1-2C96-DBA2-9C56-0B14A672F827.png?v=10975034313490779201" class="img-fluid" />
          <p class=" fw-semibold">VIEW MORE</p>
          </a>
        `;

        previewRow.appendChild(viewMoreDiv);

    }
  
        let hoverTimeout;

        li.addEventListener("mouseenter", () => {
          clearTimeout(hoverTimeout);
          dropdownMenu.style.display = "block";
        });

        li.addEventListener("mouseleave", () => {
          hoverTimeout = setTimeout(() => {
            dropdownMenu.style.display = "none";
          }, 150); 
        });


        dropdownMenu.addEventListener("mouseenter", () => {
          clearTimeout(hoverTimeout);
          dropdownMenu.style.display = "block";
        });

        dropdownMenu.addEventListener("mouseleave", () => {
          dropdownMenu.style.display = "none";
        });
}
  navList.appendChild(li)  

});
  

function extractPrice(priceString) {
  return parseInt(priceString.replace(/[^\d]/g, ''));
}

function calculateSavings(currentPrice, oldPrice) {
  const current = extractPrice(currentPrice);
  const old = extractPrice(oldPrice);
  return old - current;
}


function displayProducts(categoryName, sortedArray = null){

  const container = document.querySelector(".newProductCards");
  container.innerHTML = '';

  if(!navbar_dropdown[categoryName]){
    console.error(`Category "${categoryName} not found."`)
    return;
  }

   const products = Array.isArray(sortedArray)
    ? sortedArray
    : navbar_dropdown[categoryName];

    products.forEach(product => {
    const slide = document.createElement("div");
    slide.className = "col-lg-3 col-md-6 col-12 mb-4";


  let savingsHTML = '';
  if (product.oldPrice) {
    const savings = calculateSavings(product.price, product.oldPrice);
    savingsHTML = `<div class="savings-badge mb-2" style="background-color: red; color: white">
                     <span class="badge">Save Rs. ${savings.toLocaleString()}</span>
                   </div>`;
  }


  const productLink = product.link ? product.link : "generalproduct.html";

  slide.innerHTML = `
    <div class="product-card p-2 text-center">
    <a href="${productLink}" class="text-decoration-none" style="color:black">
      <img src="${product.img}" style="height: 200px;" class="mx-auto d-block" />
      <div class="card-information mt-2">
        <h5 class="card_heading fw-semibold" style="font-size:16px">${product.title}</h5>
        <div class="price-container d-flex justify-content-center gap-2">
          <span class="fw-bold"  style="color: #ff6d00;">${product.price}</span>
          ${product.oldPrice ? `<s class="text-muted">${product.oldPrice}</s>` : ""}
          </div>
          ${savingsHTML}
      </div>
      </a>
    </div>
  `;
  
  container.appendChild(slide);
});
}


document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.getElementById("cart-count");
    const popUp = document.querySelector(".view-cart-popup");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalCartPriceElement = document.getElementById("total-cart-price");

    // Update cart count badge
    function updateCartCount() {
        if (cartCountElement) {
            cartCountElement.textContent = cart.length;
        }
    }

    // Render mini-cart popup
    function renderMiniCart() {
        if (!popUp) return;

        popUp.innerHTML = "";
        if (cart.length === 0) {
            popUp.innerHTML = "<p style='text-align: center;'>Your Cart is empty</p>";
            return;
        }

        let subTotal = 0;
        cart.forEach((product,index) => {
            const priceNum = parseInt(product.price.toString().replace(/[^0-9]/g, "")) || 0;
            const quantity = product.quantity || 1;
            const totalForItem = priceNum * quantity;
            subTotal += totalForItem;

            popUp.innerHTML += `
                <div class="mini-cart-item">
                    <img src="${product.img}" alt="${product.title}">
                    <div class="mini-cart-details d-flex justify-content-between">
                      <section>
                        <div class="mini-cart-name">${product.title}</div>
                        <div class="mini-cart-price">Rs. ${priceNum.toLocaleString()} x ${quantity}</div>
                      </section>
                        <button class="remove-btn" data-index="${index}"><i class="bi bi-x-lg"></i></button>
                    </div>
                </div>
            `;
        });

        popUp.innerHTML += `
            <div class="mini-cart-subtotal d-flex justify-content-between mt-4" style="font-size:16px; font-weight:bold;">
                <p class="product-total-text">TOTAL:</p>
                <p class="product-total-price">Rs. ${subTotal.toLocaleString()}</p>
            </div>
            <div class="mini-cart-buttons">
                <a href="checkout.html" class="checkout">Checkout</a>
                <a href="cart.html" class="view-cart">View Cart</a>
            </div>
        `;

    }

    // 🔹 Render full cart page
    function renderCartPage() {
        if (!cartItemsContainer) return;

        cartItemsContainer.innerHTML = "";
        let totalCartPrice = 0;

        cart.forEach((product, index) => {
            const priceNum = parseInt(product.price.toString().replace(/[^0-9]/g, "")) || 0;
            const qty = product.quantity || 1;
            const itemTotal = priceNum * qty;
            totalCartPrice += itemTotal;

            const productRow = document.createElement("div");
            productRow.classList.add("cart-item");
            productRow.innerHTML = `
                <img src="${product.img}" alt="${product.title}" class="cart-product-img">
                <div class="cart-product-details">
                    <span class="cart-product-name">${product.title}</span>
                    <span class="cart-product-extra">Color: ${product.color || "Default"} | Storage: ${product.storageOption || "N/A"}</span>
                </div>
                <span class="cart-product-price">Rs. ${priceNum.toLocaleString()}</span>
                <input type="number" class="cart-product-quantity" value="${qty}" min="1" data-index="${index}">
                <span class="cart-product-total" style="color:#ff6d00">Rs. ${itemTotal.toLocaleString()}</span>
                <button class="remove-btn" data-index="${index}"><i class="bi bi-x-lg"></i></button>
            `;

            cartItemsContainer.appendChild(productRow);
        });

        //  Update total in summary
        if (totalCartPriceElement) {
            totalCartPriceElement.textContent = "Rs. " + totalCartPrice.toLocaleString();
        }
    }

    //  Handle quantity change
    document.addEventListener("input", (e) => {
        if (e.target.classList.contains("cart-product-quantity")) {
            const index = e.target.dataset.index;
            cart[index].quantity = parseInt(e.target.value) || 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCartPage();
            renderMiniCart();
        }
    });

    //  Handle remove item
    document.addEventListener("click", (e) => {
        if (e.target.closest(".remove-btn")) {
            const index = e.target.closest(".remove-btn").dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
            renderCartPage();
            renderMiniCart();
        }
    });

    // Initial render
    updateCartCount();
    renderMiniCart();
    renderCartPage();
});


//  SEARCH BUTTON FUNCTIONALITY

document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("search-icon");
  const searchBox = document.getElementById("search-box");
  const searchContainer = document.querySelector(".search-container")
  

  const resultContainer = document.createElement("div");
  resultContainer.classList.add("search-result");
  searchContainer.appendChild(resultContainer);

  // flattem all the products  from navbar array
  const allProducts = Object.values(navbar_dropdown).flat();


  // toggle search input 
  searchIcon.addEventListener("click", () => {
    searchBox.classList.remove("d-none");
    searchBox.classList.add("active");    
  });



  // filter products on typing
  searchBox.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    resultContainer.innerHTML = "";

    if(query.length > 0) {
      const filtered = allProducts.filter(product => 
        product.title.toLowerCase().includes(query)
            );

      resultContainer.style.display = "block";      

      if (filtered.length > 0){
        filtered.forEach(product => {
          const item = document.createElement("div");
          item.classList.add("search-item");

          item.innerHTML = `
          <img src ="${product.img}" alt="${product.title}">
          <span>${product.title}</span>`;

          resultContainer.appendChild(item);

          item.addEventListener("click", () => {
            window.location.href = product.link || "generalproduct.html"
          });
        });
      }    else{
        resultContainer.innerHTML = `<p class ="no-result">No product found</p>`
      }  
    } else {
      resultContainer.style.display = "none"
    }
  });

  // also hide results on outside click
  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target)) {
      searchBox.classList.remove("active");
      searchBox.classList.add("d-none");
      resultContainer.innerHTML = "";
      resultContainer.style.display = "none"; // hide properly
    }
  })
});





// filter for price 

const tags = [document.getElementById("Relevance"), document.getElementById("new"), document.getElementById("highestprice"), document.getElementById("lowestprice")]

let currentIndex = 0

function activePage(){
   tags.forEach(function(page, index){
     if(index === currentIndex){
       page.classList.add("activeClass")
    }
    else{
      page.classList.remove("activeClass")
    }
  })
}

tags.forEach(function(page, index){
  page.addEventListener("click", function(e){
    e.preventDefault();
    currentIndex = index;
    activePage();

  })
});
activePage();


