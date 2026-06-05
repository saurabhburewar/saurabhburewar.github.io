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

const stringLength = 200
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
  Exp Nodes Curved Path Layout
*/
document.addEventListener("DOMContentLoaded", () => {
  const pathEl = document.getElementById("expPathLine");
  const svgEl = pathEl ? pathEl.ownerSVGElement : null;

  // Distribute nodes along the path (start -> end represents earliest -> most recent)
  const nodeFractions = [
    { selector: "#upraisedNode", fraction: 0.05 },
    { selector: "#finezzaNode",  fraction: 0.35 },
    { selector: "#deloitteNode", fraction: 0.65 },
    { selector: "#wbdNode",      fraction: 0.97 },
  ];

  function positionExpNodes() {
    if (!pathEl || !svgEl) return;
    const totalLength = pathEl.getTotalLength();
    if (!totalLength) return;

    const vb = svgEl.viewBox.baseVal;
    const vbWidth = vb && vb.width ? vb.width : 400;
    const vbHeight = vb && vb.height ? vb.height : 600;

    nodeFractions.forEach(({ selector, fraction }) => {
      const node = document.querySelector(selector);
      if (!node) return;
      const pt = pathEl.getPointAtLength(fraction * totalLength);
      node.style.left = `${(pt.x / vbWidth) * 100}%`;
      node.style.top  = `${(pt.y / vbHeight) * 100}%`;
    });
  }

  positionExpNodes();
  window.addEventListener("resize", positionExpNodes);
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
  Projects: render from JSON + wire up filter / detail toggle
*/

// Decorative SVG shared by every project list item (purely visual)
const PROJ_ITEM_BACK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width="100%" height="100%"><g transform="translate(10, 10)"><path class="projItemBackSVG" d="M 33 22 L 33 118 L 38 122 L 38 25 Z" fill="#7a141d" /><path class="projItemBackSVG" d="M 38 122 L 72 98 L 72 95 L 38 118 Z" fill="#520b11" /><path class="projItemBackSVG" d="M 38 25 L 72 2 L 72 95 L 38 122 Z" fill="#9e1b24" /><path class="projItemBackSVG" d="M 38 25 L 72 2 L 72 15 L 38 38 Z" fill="#cf232e" /><path class="projItemBackSVG" d="M 41 42 L 69 22 L 69 91 L 41 113 Z" fill="none" stroke="#ff4d5a" stroke-width="1.5" opacity="0.8" /><path class="projItemBackSVG" d="M 44 23 L 56 15" stroke="#ffb3b8" stroke-width="2.5" stroke-linecap="round" /><path class="projItemBackSVG" d="M 45 58 L 58 49" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" /><path class="projItemBackSVG" d="M 45 68 L 60 57" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" /><path class="projItemBackSVG" d="M 45 80 L 65 66" stroke="#ff4d5a" stroke-width="2" stroke-linecap="round" /><path class="projItemBackSVG" d="M 45 88 L 63 75" stroke="#ff4d5a" stroke-width="2" stroke-linecap="round" /><path class="projItemBackSVG" d="M 45 96 L 58 87" stroke="#ff4d5a" stroke-width="2" stroke-linecap="round" /></g></svg>`;

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildProjItemMarkup(project) {
  const star = project.favourite ? " &#9733;" : "";
  return `
    <div class="projItemContainer" data-category="${escapeHtml(project.category)}" data-favourite="${project.favourite ? "true" : "false"}" data-target="${escapeHtml(project.id)}">
      <div class="projItemBack">${PROJ_ITEM_BACK_SVG}</div>
      <div class="projItemBox">
        <div class="projItemMargin"></div>
        <div class="projItemTitle">${escapeHtml(project.title)}${star}</div>
      </div>
    </div>`;
}

function buildProjDescMarkup(project) {
  const imageBlock = project.image
    ? `<div class="projDescImg"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}"></div>`
    : `<div class="projDescImg"></div>`;
  const linkBlock = project.link
    ? `<div class="projDescLink"><a href="${escapeHtml(project.link)}" class="projDescLinkBut" target="_blank" rel="noopener noreferrer">SHOW MORE</a></div>`
    : `<div class="projDescLink"></div>`;
  const descText = project.description && project.description.trim().length > 0
    ? escapeHtml(project.description)
    : "Details coming soon...";
  return `
    <div class="projDescPage" data-category="${escapeHtml(project.id)}">
      <div class="projDescHeader">${escapeHtml(project.title)}</div>
      ${imageBlock}
      ${linkBlock}
      <div class="projDescText">${descText}</div>
    </div>`;
}

function sortByFavourite(items) {
  return items.sort((a, b) => {
    const aFav = a.getAttribute("data-favourite") === "true";
    const bFav = b.getAttribute("data-favourite") === "true";
    if (aFav && !bFav) return -1;
    if (!aFav && bFav) return 1;
    return 0;
  });
}

function wireProjectInteractions() {
  const projFilButtons = document.querySelectorAll(".projFilterBut");
  const projFilItemList = document.getElementById("projectList");
  const projDescPages = document.querySelectorAll(".projDescPage");

  projFilButtons.forEach(projFilBut => {
    projFilBut.addEventListener("click", () => {
      const targetCat = projFilBut.getAttribute("data-target");
      const items = Array.from(document.querySelectorAll(".projItemContainer"));

      items.forEach(item => {
        const itemCat = item.getAttribute("data-category");
        if (targetCat === "all" || targetCat === itemCat) {
          item.classList.remove("projItemContainerHide");
        } else {
          item.classList.add("projItemContainerHide");
        }
      });

      sortByFavourite(items).forEach(item => projFilItemList.appendChild(item));
    });
  });

  document.querySelectorAll(".projItemContainer").forEach(item => {
    item.addEventListener("click", () => {
      const itemTarget = item.getAttribute("data-target");
      projDescPages.forEach(page => {
        if (page.getAttribute("data-category") === itemTarget) {
          page.classList.remove("projDescPageHide");
        } else {
          page.classList.add("projDescPageHide");
        }
      });
    });
  });

  const defaultFilter = document.querySelector('.projFilterBut[data-target="all"]');
  if (defaultFilter) defaultFilter.click();
}

function renderProjects(projects) {
  const listEl = document.getElementById("projectList");
  const descEl = document.getElementById("projectDescriptionPages");
  if (!listEl || !descEl) return;

  listEl.innerHTML = projects.map(buildProjItemMarkup).join("");
  descEl.innerHTML = projects.map(buildProjDescMarkup).join("");

  // Show only the first description page initially; the rest start hidden
  const descPages = descEl.querySelectorAll(".projDescPage");
  descPages.forEach((page, idx) => {
    if (idx !== 0) page.classList.add("projDescPageHide");
  });

  wireProjectInteractions();
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("./src/static/projects/projects.json")
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(renderProjects)
    .catch(err => {
      console.error("Failed to load projects.json:", err);
      const listEl = document.getElementById("projectList");
      if (listEl) {
        listEl.innerHTML = `<div class="projItemContainer"><div class="projItemBox"><div class="projItemMargin"></div><div class="projItemTitle">Could not load projects.</div></div></div>`;
      }
    });
});