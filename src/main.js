/* 
  Mouse Pointer
*/

const follower = document.querySelector(".cursorTrail")

window.addEventListener('mousemove', (e) => {
  follower.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});



/* 
  Typing Animation
*/

const typedTextSpan = document.getElementById("typing_text_target");
const textArray = ["Saurabh Burewar"];

// Timing controls
const typingDelay = 100; // Speed of typing (ms per letter)
const erasingDelay = 60; // Speed of erasing (ms per letter)
const newTextDelay = 5000; // Pause before starting to erase

let textIndex = 0; // Which sentence are we on?
let charIndex = 0; // Which character are we on?

// Type characters one by one
function type() {
  if (charIndex < textArray[textIndex].length) {
    typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    // Pause before erasing
    setTimeout(erase, newTextDelay);
  }
}

// Erase characters one by one
function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    // Move to the next text
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, typingDelay);
  }
}

// Kick things off when the page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newTextDelay);
});


/* 
  Encoded String Background Animation
*/

const stringLength = 150
const circleLength1 = 80
const circleLength2 = 60
const circleLength3 = 80
const circleLength4 = 90
const updateSpeed = 50
const contactBoundary = document.getElementById('contactBoundary');
const encoded1 = document.getElementById('encoded1');
const encoded2 = document.getElementById('encoded2');
const encoded3 = document.getElementById('encoded3');
const encoded4 = document.getElementById('encoded4');
const encoded5 = document.getElementById('encoded5');
const encoded6 = document.getElementById('encoded6');
const circleEncoded1 = document.getElementById('circleEncoded1');
const circleEncoded2 = document.getElementById('circleEncoded2');
const circleEncoded3 = document.getElementById('circleEncoded3');
const circleEncoded4 = document.getElementById('circleEncoded4');
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%. '

const charArray = Array.from({ length: stringLength }, () => 
  chars[Math.floor(Math.random() * chars.length)]
);

const circleArray1 = Array.from({ length: circleLength1 }, () => 
  chars[Math.floor(Math.random() * chars.length)]
);
const circleArray2 = Array.from({ length: circleLength2 }, () => 
  chars[Math.floor(Math.random() * chars.length)]
);
const circleArray3 = Array.from({ length: circleLength3 }, () => 
  chars[Math.floor(Math.random() * chars.length)]
);
const circleArray4 = Array.from({ length: circleLength4 }, () => 
  chars[Math.floor(Math.random() * chars.length)]
);

setInterval(() => {
  // Pick a random index to change
  const randomIndex = Math.floor(Math.random() * charArray.length);
  const randCircleIndex1 = Math.floor(Math.random() * circleArray1.length);
  const randCircleIndex2 = Math.floor(Math.random() * circleArray2.length);
  const randCircleIndex3 = Math.floor(Math.random() * circleArray3.length);
  const randCircleIndex4 = Math.floor(Math.random() * circleArray4.length);
  
  // Swap it with a new random character
  charArray[randomIndex] = chars[Math.floor(Math.random() * chars.length)];
  circleArray1[randCircleIndex1] = chars[Math.floor(Math.random() * chars.length)];
  circleArray2[randCircleIndex2] = chars[Math.floor(Math.random() * chars.length)];
  circleArray3[randCircleIndex3] = chars[Math.floor(Math.random() * chars.length)];
  circleArray4[randCircleIndex4] = chars[Math.floor(Math.random() * chars.length)];
  
  // Update the DOM with the single combined string
  contactBoundary.textContent = charArray.join(' ');
  encoded1.textContent = charArray.join(' ');
  encoded2.textContent = charArray.join(' ');
  encoded3.textContent = charArray.join(' ');
  encoded4.textContent = charArray.join(' ');
  encoded5.textContent = charArray.join(' ');
  encoded6.textContent = charArray.join(' ');
  circleEncoded1.textContent = circleArray1.join(' ');
  circleEncoded2.textContent = circleArray2.join(' ');
  circleEncoded3.textContent = circleArray3.join(' ');
  circleEncoded4.textContent = circleArray4.join(' ');
}, updateSpeed);



/* 
  Experience Calculator
*/

document.addEventListener("DOMContentLoaded", () => {
  const expStartDate = "2022-06-13"
  const startDate = new Date(expStartDate);
  const currentDate = new Date();

  const timeDifference = currentDate - startDate;
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const yearsExperience = timeDifference / millisecondsInYear;
  const totalYears = yearsExperience.toFixed(1);

  document.getElementById("expCounter").innerText = `${totalYears}`;
})

/* 
  Multi Page Structure
*/

document.addEventListener("DOMContentLoaded", () => {
  const pageButtons = document.querySelectorAll(".topBarButton");
  const pageBlocks = document.querySelectorAll(".pageBlock");

  pageButtons.forEach(pageBut => {
    pageBut.addEventListener("click", () => {
      const pageButCat = pageBut.getAttribute("data-target");

      pageBlocks.forEach(pageBl => {
        const pageBlCat = pageBl.getAttribute("data-category");

        if (pageButCat === pageBlCat) {
            pageBl.classList.remove("hidepage");
        } else {
            pageBl.classList.add("hidepage");
        }
      });
    });
  });
});

/*
  Exp Page Toggle
*/
document.addEventListener("DOMContentLoaded", () => {
  const expButtons = document.querySelectorAll(".expNode");
  const expBlocks = document.querySelectorAll(".expDescBox");

  expButtons.forEach(expBut => {
    expBut.addEventListener("click", () => {
      const expButCat = expBut.getAttribute("data-target");

      expBlocks.forEach(expBl => {
        const expBlCat = expBl.getAttribute("data-category");

        if (expButCat === expBlCat) {
            expBl.classList.remove("hideExpBox");
        } else {
            expBl.classList.add("hideExpBox");
        }
      });
    });
  });
});

/*
  Project Filter Toggle
*/
document.addEventListener("DOMContentLoaded", () => {
  const projFilButtons = document.querySelectorAll(".projFilterBut");
  const projFilItemList = document.getElementById("projectList");

  const projFilItems = Array.from(document.querySelectorAll(".projItemContainer"));

  projFilButtons.forEach(projFilBut => {
    projFilBut.addEventListener("click", () => {
      const projFilButCat = projFilBut.getAttribute("data-target");

      projFilItems.forEach(projFilItem => {
        const projFilItemCat = projFilItem.getAttribute("data-category");

        if (projFilButCat === "all" || projFilButCat === projFilItemCat) {
            projFilItem.classList.remove("projItemContainerHide");
        } else {
            projFilItem.classList.add("projItemContainerHide");
        }
      });

      projFilItems.sort((a, b) => {
          const aFav = a.getAttribute("data-favourite") === "true";
          const bFav = b.getAttribute("data-favourite") === "true";

          // If 'a' is a fav and 'b' is not, move 'a' up (return -1)
          if (aFav && !bFav) return -1;
          if (!aFav && bFav) return 1;
          return 0; // Keep original order if both are same status
        });

        projFilItems.forEach(projFilItem => projFilItemList.appendChild(projFilItem));
    });
  });

  document.querySelector('.projFilterBut[data-target="all"]').click();
});

/*
  Project Pages Toggle
*/

document.addEventListener("DOMContentLoaded", () => {
  const projItemContainers = document.querySelectorAll(".projItemContainer");
  const projDescPages = document.querySelectorAll(".projDescPage");

  projItemContainers.forEach(projItemContainer => {
    projItemContainer.addEventListener("click", () => {
      const projItemContainerCat = projItemContainer.getAttribute("data-target");

      projDescPages.forEach(projDescPage => {
        const projDescPageCat = projDescPage.getAttribute("data-category");

        if (projItemContainerCat === projDescPageCat) {
            projDescPage.classList.remove("projDescPageHide");
        } else {
            projDescPage.classList.add("projDescPageHide");
        }
      });
    });
  });
});