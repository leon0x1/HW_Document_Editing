'use strict';


//#region HW 1 TASK

const events = [
  {
    name: "Music Festival",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D",
    date: "2025-06-15"
  },
  {
    name: "Art Exhibition",
    image: "https://images.stockcake.com/public/2/3/9/2397d77f-af92-4b51-8bb9-d60d138cf4d0_large/vibrant-art-exhibition-stockcake.jpg",
    date: "2025-07-01"
  },
  {
    name: "Tech Conference",
    image: "https://images.stockcake.com/public/a/7/a/a7acb612-27c9-469a-bb4f-92695cc7d178_large/tech-conference-presentation-stockcake.jpg",
    date: "2025-08-10"
  },
  {
    name: "City Marathon",
    image: "https://i.ytimg.com/vi/gL2S7-Rjv5Y/maxresdefault.jpg",
    date: "2025-09-05"
  }
];

const gallery = document.getElementById("galleryGrid");

events.forEach(event => {
  const card = document.createElement("div");
  card.className = "event-card";

  const img = document.createElement("img");
  img.src = event.image;
  img.alt = event.name;

  const info = document.createElement("div");
  info.className = "event-info";
  info.innerHTML = `<h3><strong>${event.name}</strong></h3><p>${event.date}</p>`;

  card.addEventListener('mouseover', () => {
    info.style.opacity = '1';
  });

  card.addEventListener('mouseleave', () => {
    info.style.opacity = '0';
  });

  card.appendChild(img);
  card.appendChild(info);

  gallery.appendChild(card);
});


//#endregion