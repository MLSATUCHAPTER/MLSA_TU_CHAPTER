var pastEvents = [
  {
    Poster: "events/assets/events/WhatsApp Image 2024-11-04 at 21.15.33_4106955d.jpg",
    Name: "MLSA Workshop",
    Desc: ""
  },
  {
    Poster: "events/assets/events/WhatsApp Image 2024-11-04 at 21.15.35_6f5e17c2.jpg",
    Name: "MLSA Workshop",
    Desc: ""
  },
   {
    Poster: "events/assets/events/WhatsApp Image 2024-11-04 at 21.15.35_40fc8743.jpg",
    Name: "MLSA Workshop",
    Desc: ""
  }, 
  {
    Poster: "events/assets/events/WhatsApp Image 2024-11-04 at 21.15.37_12bf952e.jpg",
    Name: "MLSA Workshop",
    Desc: ""
  },
   {
    Poster: "events/assets/events/WhatsApp Image 2024-11-04 at 21.15.36_303577fa.jpg",
    Name: "MLSA Workshop",
    Desc: ""
  }, 
]

htmlCode = ``;
pastEvents.forEach(function (pastEvent) {
  htmlCode = htmlCode + `
    <div class="past-card">
      <div class="past-event-poster">
        <div class="past-event-poster">
          <img src="${pastEvent.Poster}"  class="past-photo" alt="Event Poster">
          <h3 class="past-title">${pastEvent.Name}</h3>
          <figcaption>${pastEvent.Desc}</figcaption>
        </div>
      </div>
    </div> `;
});

document.getElementById("past-events-details").innerHTML = htmlCode;

// for the Upcoming event automation 

var mainEvent = [
  { // fallback event
    Poster: "events/assets/events.png",
    Name: "Join Us",
    Desc: `Hey, many great events are planned for you. Stay tuned to get to know about such opportunities in the future.`,
    Btntext: 'Coming Soon',
    dateComEvent: `2022-01-01`, // please add date in yyyy-mm-dd formate
    link: `#`
  },
  { // upcoming event
    Poster: "events/assets/events/join-core-1.jpeg",
    Name: "Connect with Us",
    Desc: `Do you want to know more about us? Join our group to stay updated by clicking on the button below`,
    Btntext: 'Join Us',
    dateComEvent: `2022-11-10`,
    link: ``
  }
];

var upcomingEventHtmlCode = ``;

// function for checking if the event is expired or not
var checkEventDatefreshness = (eventDate) => {
  var TodayDate = new Date().getTime();
  var eveDate = new Date(eventDate).getTime();

  if (eveDate <= TodayDate) {
    return 0;
  }

  else {
    return 1;
  }
}

// checking if the event is expired or not
var CommEventToggle = checkEventDatefreshness(mainEvent[1].dateComEvent); // 1 for fresh && 0 for Stale community event

upcomingEventHtmlCode += ` 
  <div class="poster">
    <img src="${mainEvent[CommEventToggle].Poster}" alt="join team poster" class="event-poster" />
  </div>

  <div class="event-info">
    <div class="event-name">
      <h2>
        ${mainEvent[CommEventToggle].Name}
      </h2>
    </div>
    
    <div class="event-details">
      <pre>${mainEvent[CommEventToggle].Desc}</pre>
    </div>
  </div>
`

document.getElementById("event-desc").innerHTML = upcomingEventHtmlCode;

upcomingEventHtmlCode = `
<button class="register" ${CommEventToggle ? "" : 'disabled'}>
  <a ${CommEventToggle ? `href=${mainEvent[CommEventToggle].link}` : ``} target="_blank" class="register-btn_text">
    ${mainEvent[CommEventToggle].Btntext}
  </a>
</button>
`
document.getElementById("EventRegButton").innerHTML = upcomingEventHtmlCode

function slider() {
  // initialising slider
  let slides = document.getElementsByClassName("past-card");
  let slideIndex = 1;
  showSlides(slideIndex);

  // function to change slides number getting displayed
  function plusSlides(n) {
    slideIndex += n;

    // setting lower limit 
    if (slideIndex < 1) {
      slideIndex = slides.length - 2;
    }

    // setting upper limit
    else if (slideIndex >= (slides.length - 1)) {
      slideIndex = 1;
    }
    showSlides(slideIndex);
  }

  //function to display required slides
  function showSlides(pos) {
    // media query to show required no. of slides
    let screenSize = window.matchMedia("(max-width: 450px)");
    let i;
    for (i = 0; i < slides.length; i++) {
      // makes all the slides disappear
      slides[i].style.display = "none";
    }

    // makes the required slides reappear
    slides[pos - 1].style.display = "block";
    slides[pos].style.display = "block";

    // shows 3 slides only when it is not the phone webpage
    if (!screenSize.matches) {
      slides[pos + 1].style.display = "block";
    }
  }

  // adding click action to both the anchor tags
  document.getElementById("prev").addEventListener("click", () => plusSlides(-1));
  document.getElementById("next").addEventListener("click", () => plusSlides(1));
}

function slider2() {
  // initialising slider
  let slides = document.getElementsByClassName("past-card");
  let slideIndex = 0;
  showSlides(slideIndex);

  // function to change slides number getting displayed
  function plusSlides(n) {
    slideIndex += n;

    // setting lower limit 
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    // setting upper limit
    else if (slideIndex >= (slides.length - 1)) {
      slideIndex = 0;
    }
    showSlides(slideIndex);
  }

  //function to display required slides
  function showSlides(pos) {
    let i;
    for (i = 0; i < slides.length; i++) {
      // makes all the slides disappear
      slides[i].style.display = "none";
    }

    // makes the required slides reappear
    slides[pos].style.display = "block";
  }

  // adding click action to both the anchor tags
  document.getElementById("prev").addEventListener("click", () => plusSlides(-1));
  document.getElementById("next").addEventListener("click", () => plusSlides(1));
}

//trial media query to display 1 card in mobile view
let screenSize = window.matchMedia("(max-width: 450px)");
if (screenSize.matches) {
  slider2();
}

else {
  slider();
}





