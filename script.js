(function () {
  const cfg = window.weddingConfig || {};
  const $ = (id) => document.getElementById(id);
  const setText = (id, value) => { if ($(id) && value) $(id).textContent = value; };

  setText("couple-names", cfg.coupleNames || "Your Names Here");
  setText("signature-names", cfg.coupleNames || "Your Names Here");
  setText("footer-names", cfg.coupleNames || "Your Names Here");
  setText("hero-date", cfg.dateLabel || "Your Wedding Date");
  setText("ceremony-date", cfg.fullDateLabel || cfg.dateLabel || "Your Wedding Date");
  setText("reception-date", cfg.fullDateLabel || cfg.dateLabel || "Your Wedding Date");
  setText("ceremony-time", cfg.ceremonyTime || "Time to be confirmed");
  setText("ceremony-venue", cfg.ceremonyVenue || "Ceremony Venue");
  setText("ceremony-address", cfg.ceremonyAddress || "Venue address to be confirmed");
  setText("reception-time", cfg.receptionTime || "Time to be confirmed");
  setText("reception-venue", cfg.receptionVenue || "Reception Venue");
  setText("reception-address", cfg.receptionAddress || "Venue address to be confirmed");
  setText("rsvp-note", cfg.rsvpDeadline || "Please confirm your attendance.");

  if (cfg.heroImage) {
    document.querySelector(".hero").style.setProperty("--hero-image", `url("${cfg.heroImage}")`);
  }
  if (cfg.storyImage) {
    document.querySelector(".story-image").style.backgroundImage = `url("${cfg.storyImage}")`;
  }

  const mapSetup = (id, url) => {
    const link = $(id);
    if (!link) return;
    if (url && /^https?:\/\//i.test(url)) {
      link.href = url;
    } else {
      link.hidden = true;
    }
  };
  mapSetup("map-link", cfg.ceremonyMapUrl);
  mapSetup("reception-map-link", cfg.receptionMapUrl);

  // Build the photo gallery from config.js so photos can be changed in one place.
  const gallery = $("gallery-grid");
  if (gallery && Array.isArray(cfg.gallery)) {
    gallery.innerHTML = "";
    cfg.gallery.forEach((photo, index) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-item " + (index === 0 ? "gallery-tall" : index === 3 ? "gallery-wide" : "");
      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.alt || "Wedding gallery photo";
      img.loading = "lazy";
      img.onerror = function () { figure.classList.add("image-failed"); img.remove(); };
      const caption = document.createElement("figcaption");
      caption.textContent = photo.caption || "A LOVELY MEMORY";
      figure.append(img, caption);
      gallery.appendChild(figure);
    });
  }

  const rsvpButton = $("rsvp-button");
  const rsvpNote = $("rsvp-note");
  if (rsvpButton) {
    rsvpButton.addEventListener("click", function () {
      const url = (cfg.googleFormUrl || "").trim();
      if (/^https:\/\/(docs\.google\.com\/forms|forms\.gle\/)/i.test(url) && !/xxxxx|replace|your-form/i.test(url)) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        rsvpNote.textContent = "The RSVP form link has not been added yet. Open config.js and paste the couple's Google Forms link in googleFormUrl.";
        rsvpNote.classList.add("rsvp-warning");
        rsvpNote.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  // Live wedding countdown. Date in config.js should include a timezone offset.
  const target = new Date(cfg.weddingDate || "");
  const countdownFields = ["days", "hours", "minutes", "seconds"];
  function updateCountdown() {
    if (Number.isNaN(target.getTime())) {
      countdownFields.forEach((id) => setText(id, "--"));
      return;
    }
    const diff = target.getTime() - Date.now();
    if (diff <= 0) {
      setText("days", "00"); setText("hours", "00"); setText("minutes", "00"); setText("seconds", "00");
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    setText("days", String(days).padStart(2, "0"));
    setText("hours", String(hours).padStart(2, "0"));
    setText("minutes", String(minutes).padStart(2, "0"));
    setText("seconds", String(seconds).padStart(2, "0"));
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
