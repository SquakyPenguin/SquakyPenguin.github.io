// ============================================================
// PROJECT CONTENT — edit everything here, no need to touch index.html.
//
// This is the one file to open when you want to:
//   - change a PHOTO CAPTION            -> photos[].caption
//   - add/replace a photo               -> photos[].src
//   - rewrite a project's DESCRIPTION    -> description (shown in the modal
//                                          when you click a project card)
//   - update the "What's next?" text    -> whatsNext
//   - add a link/download button        -> links: [{ label, href, download }]
//
// Each top-level key (buildbeyond, somethingos, ...) must match the
// data-project="..." attribute on that project's <article class="card">
// in index.html - that's what tells the site which entry to show when a
// card is clicked. Don't rename a key unless you also update the matching
// data-project attribute in index.html.
//
// `description` and `whatsNext` accept plain text OR simple HTML like
// <p>...</p> - use multiple <p> tags to add paragraph breaks.
//
// The "Right now, I am working on..." tile on the landing section is
// controlled by NOW_CARD below - edit its heading/image/description the
// same way. Leave image.src empty ("") to keep showing the dashed
// placeholder box instead of a photo.
// ============================================================

const NOW_CARD = {
  heading: "Right now, I am working on...",
  image: {
    src: "Photo Assets/Landing/currentlyworkingon.jpg",   // e.g. "Photo Assets/Landing/current-project.png"
    alt: ""    // describe the image once you add one
  },
  description: "Organising the Sciopolis x Dyson exhibition (11-12 September) with my friend Jubilee!"
};

const PROJECTS = {
  buildbeyond: {
    title: "Build Beyond",
    meta: "Masters Solo Project / Feb 2026 - ongoing",
    photos: [
      { src: "Photo Assets/Heroes/BuildBeyond_hero.jpg", caption: "[add a caption for this photo]" },
      //{ src: "Photo Assets/BuildBeyond1.png", caption: "[add a caption for this photo]" },
      { src: "Photo Assets/BuildBeyond2.JPG", caption: "[add a caption for this photo]" }
    ],
    description: "<p>Rethinking instruction-based play for opportunities to practice creative thinking, demonstrated using LEGO.</p><p>[Add a more in-depth description here - process, methods, key insights.]</p>",
    links: [
      { label: "download intro deck (PDF)", href: "BuildBeyond/Build Beyond Intro Deck Lucy Tam 2026.pdf", download: true }
    ],
    whatsNext: "Under review for a larger scale exhibit at the London Design Museum."
  },
  somethingos: {
    title: "SomethingOS",
    meta: "Masters Group Project / 3 months Sep 2025",
    photos: [
      { src: "Photo Assets/Heroes/SomethingOS_Hero.jpg", caption: "[add a caption for this photo]" },
      { src: "Photo Assets/SomethingOS1.jpg", caption: "[add a caption for this photo]" },
      //{ src: "Photo Assets/SomethingOS2.PNG", caption: "[add a caption for this photo]" }
    ],
    description: "<p>The smartphone operating system designed to protect your attention, using an intention based user interface.</p><p>[Add a more in-depth description here.]</p>",
    links: [],
    whatsNext: "Creating a website to document the learnings. Hardware?"
  },
  underseamusicians: {
    title: "Undersea Musicians",
    meta: "IDE / 5 weeks 2024",
    photos: [
      { src: "Photo Assets/Heroes/Cyberphysicalsystems_hero.jpg", caption: "[add a caption for this photo]" },
      //{ src: "Photo Assets/Cyberphysicalsystems1.png", caption: "[add a caption for this photo]" }, // file no longer on disk
      { src: "Photo Assets/Cyberphysicalsystems2.jpg", caption: "[add a caption for this photo]" }
    ],
    description: "<p>A mechanical underwater creature themed band of instruments that play music responding to one's physical imitations of various sea creatures.</p><p>[Add a more in-depth description here.]</p>",
    links: [],
    whatsNext: "-"
  },
  sheepsprout: {
    title: "Sheepsprout",
    meta: "IDE / 4 weeks 2025",
    photos: [
      { src: "Photo Assets/Heroes/Supergreen_Hero.jpg", caption: "[add a caption for this photo]" },
      //{ src: "Photo Assets/Supergreen1.png", caption: "[add a caption for this photo]" }, // file no longer on disk - only a .HEIC copy remains
      { src: "Photo Assets/Supergreen2.jpg", caption: "[add a caption for this photo]" }
    ],
    description: "<p>The use of waste wool for use in garden planters for aerating plant roots.</p><p>[Add a more in-depth description here.]</p>",
    links: [],
    whatsNext: "Upgrade to include a water wicking core."
  },
  stemoutreach: {
    title: "Various STEM outreach and education events.",
    meta: "Ongoing",
    photos: [
      { src: "Photo Assets/Heroes/DesignSprint_hero.jpg", caption: "[add a caption for this photo]" },
      { src: "Photo Assets/DesignSprint1.jpg", caption: "[add a caption for this photo]" },
      //{ src: "Photo Assets/DesignSprint2.JPG", caption: "[add a caption for this photo]" }, // file no longer on disk
      { src: "Photo Assets/GERF2.jpg", caption: "[add a caption for this photo]" }
    ],
    description: "<p>I have been significantly involved with STEM events including running exhibits for GERF London and working with Big Ideas to run school workshops.</p><p>[Add a more in-depth description here.]</p>",
    links: [],
    whatsNext: "Continue running workshops and events!"
  }
};
