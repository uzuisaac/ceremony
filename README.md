# Wedding Invitation Website (GitHub Pages)

A responsive, static wedding invitation page with an animated countdown, event details, photo gallery and RSVP button. It uses plain HTML, CSS and JavaScript, so it can be hosted on GitHub Pages for free.

## 1. Personalise the invitation

Open `config.js` and update these fields before publishing:

- `coupleNames` and `shortInitials`
- `weddingDate` (include the timezone offset, e.g. `2027-05-15T13:00:00+01:00` for Nigeria)
- `dateLabel` and `fullDateLabel`
- Ceremony and reception times, venues and addresses
- `ceremonyMapUrl` and `receptionMapUrl` (optional Google Maps links)
- `rsvpDeadline`
- `googleFormUrl`
- `heroImage`, `storyImage` and each image in `gallery`

The included names, dates, venue labels and photos are demo content. Replace them with the couple's actual details and photos before sharing the site publicly.

## 2. Connect the Google RSVP form

1. Create a Google Form for guest responses.
2. In Google Forms, click **Send** and copy the respondent link (often starts with `https://forms.gle/` or `https://docs.google.com/forms/`).
3. Paste that link into `googleFormUrl` in `config.js`, keeping the link inside the quotation marks.
4. Save the file. The invitation's RSVP button will open the Google Form in a new tab.

Suggested form questions: guest full name, attendance (Accept / Decline), number of guests, phone number (optional), and a message for the couple (optional).

## 3. Preview on your computer

Keep all five files in the same folder. Open `index.html` in a browser. An internet connection is needed for the web fonts and sample images. You can also use the VS Code Live Server extension for local preview.

## 4. Publish using GitHub Pages

1. Sign in to GitHub and create a new **public** repository, e.g. `wedding-invitation`.
2. Upload `index.html`, `styles.css`, `config.js`, `script.js` and this `README.md` to the repository's root (not inside an extra nested folder).
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then click **Save**.
6. Wait for GitHub Pages to finish publishing. The link will look like `https://YOUR-USERNAME.github.io/wedding-invitation/`.

## Important notes

- GitHub Pages hosts static files only. Guest RSVP submissions are stored by Google Forms, not by this website.
- Use the actual couple's images for a personal invitation. The supplied gallery/hero photos are samples loaded from Unsplash. Review the [Unsplash License](https://unsplash.com/license) and use images appropriately; recognisable people may have separate privacy/publicity rights.
- Do not publish until the demo names, dates, location details and Google Form link have been replaced and tested.
