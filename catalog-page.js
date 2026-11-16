(() => {
  // object-details.js
  var use = {
    Hanging: ["\uC637\uC7A5\uC758 \uBD09\uC5D0 \uCCB4\uC778\uC744 \uAC78\uC5B4 \uB450\uB294 \uD5A5 \uC624\uBE0C\uC81C", "A scent object suspended by its chain from a wardrobe rail", "\uACE0\uB9AC \uD3EC\uD568 \uB192\uC774 \uC57D 120 mm", "Approx. 120 mm high, including loop"],
    Badge: ["\uC637\uAE43\uC774\uB098 \uAC00\uBC29\uC758 \uC6D0\uB2E8\uC744 \uC0AC\uC774\uC5D0 \uB450\uACE0 \uC790\uC11D\uC73C\uB85C \uACE0\uC815\uD558\uB294 \uD5A5 \uC624\uBE0C\uC81C", "A scent object that fastens magnetically through the fabric of a lapel or bag", "\uAC00\uC7A5 \uAE34 \uCABD \uC57D 30 mm", "Approx. 30 mm at its longest point"],
    Stack: ["\uD3C9\uD3C9\uD55C \uC120\uBC18\uC774\uB098 \uD14C\uC774\uBE14\uC5D0 \uB193\uB294 \uD5A5 \uC624\uBE0C\uC81C", "A scent object for a shelf or tabletop", "\uAC00\uB85C \uC57D 100 mm", "Approx. 100 mm wide"]
  };
  var form = {
    moss: ["\uC774\uB07C\uC758 \uACB0\uC744 \uB2EE\uC740 \uAC00\uB2E5\uC774 \uC911\uC2EC\uC5D0\uC11C \uAE38\uAC8C \uB0B4\uB824\uC635\uB2C8\uB2E4.", "Moss-like strands fall in a long fringe from the centre."],
    "moss-badge": ["\uB465\uADFC \uB3CC\uAE30\uAC00 \uC11C\uB85C \uB2E4\uB978 \uB192\uC774\uB85C \uC19F\uC740 \uD615\uD0DC\uC785\uB2C8\uB2E4.", "Rounded lobes rise at different heights."],
    "moss-stack": ["\uBD80\uB4DC\uB7EC\uC6B4 \uCD08\uB85D \uB369\uC5B4\uB9AC\uAC00 \uAC01\uC9C4 \uBC1B\uCE68\uC744 \uB530\uB77C \uB0B4\uB824\uC635\uB2C8\uB2E4.", "Soft green forms spill over an angular base."],
    "dopamine-hanging": ["\uAE34 \uAC00\uC2DC\uC640 \uC9E7\uC740 \uAC00\uC2DC\uAC00 \uC911\uC2EC\uC744 \uB530\uB77C \uBC88\uAC08\uC544 \uC19F\uC2B5\uB2C8\uB2E4.", "Long and short spikes alternate around a central point."],
    "dopamine-hanging2": ["\uB9DE\uC7A1\uC740 \uC190 \uC704\uC5D0 \uC791\uC740 \uCCB4\uC778 \uACE0\uB9AC\uAC00 \uB2EC\uB824 \uC788\uC2B5\uB2C8\uB2E4.", "A small eyelet sits above the figures\u2019 joined hands."],
    "dopamine-badge": ["\uC120\uBA85\uD55C \uBD89\uC740 \uBA74\uC774 \uC791\uC740 \uBCC4 \uBAA8\uC591\uC73C\uB85C \uBAA8\uC785\uB2C8\uB2E4.", "Bright red facets meet in a compact star."],
    "dopamine-stack": ["\uBC14\uB2E5\uC744 \uC9DA\uC740 \uAF2C\uB9AC\uC5D0\uC11C \uBCC4\uC758 \uC911\uC2EC\uC73C\uB85C \uAC08\uC218\uB85D \uBD89\uC740 \uBA74\uC774 \uB450\uAEBC\uC6CC\uC9D1\uB2C8\uB2E4.", "The red facets thicken from the grounded tip towards the centre of the star."],
    "rains-hanging": ["\uAE08\uC18D\uBE5B \uACE0\uB9AC \uC0AC\uC774\uB85C \uBC30\uACBD\uC774 \uBE44\uCE69\uB2C8\uB2E4.", "The background shows through nested metallic ripples."],
    "rains-badge": ["\uBB3C\uBC29\uC6B8\uCC98\uB7FC \uD718\uC5B4\uC9C4 \uC724\uACFD \uC548\uC73C\uB85C \uBE48 \uACF5\uAC04\uC774 \uC5F4\uB9BD\uB2C8\uB2E4.", "An open space interrupts the curved, droplet-like outline."],
    "rains-stack": ["\uC911\uC2EC\uC5D0\uC11C \uBC14\uAE65\uC73C\uB85C \uC5F4\uB9B0 \uBB3C\uACB0\uC744 \uB530\uB77C \uC644\uB9CC\uD55C \uAD74\uACE1\uC774 \uC774\uC5B4\uC9D1\uB2C8\uB2E4.", "Rounded contours follow a series of open rings."]
  };
  function objectDetails(p, lang) {
    const i = Number(lang === "en");
    const modelSize = {
      moss: ["\uB192\uC774 \uC57D 120 mm", "Approx. 120 mm high"],
      "moss-badge": ["\uAC00\uC7A5 \uAE34 \uCABD \uC57D 64 mm", "Approx. 64 mm at its longest point"],
      "moss-stack": ["\uAC00\uB85C \uC57D 102 mm", "Approx. 102 mm wide"],
      "rains-hanging": ["\uB192\uC774 \uC57D 156 mm", "Approx. 156 mm high"],
      "rains-badge": ["\uAC00\uC7A5 \uAE34 \uCABD \uC57D 71 mm", "Approx. 71 mm at its longest point"],
      "dopamine-badge": ["\uAC00\uB85C \uC57D 50 mm", "Approx. 50 mm wide"],
      "dopamine-hanging": ["\uACE0\uB9AC \uD3EC\uD568 \uB192\uC774 \uC57D 107 mm", "Approx. 107 mm high, including eyelet"],
      "dopamine-hanging2": ["\uACE0\uB9AC \uD3EC\uD568 \uB192\uC774 \uC57D 94 mm", "Approx. 94 mm high, including eyelet"],
      "dopamine-stack": ["\uAC00\uB85C \uC57D 176 mm", "Approx. 176 mm wide"],
      "rains-stack": ["\uAC00\uB85C \uC57D 130 mm \xB7 \uAE4A\uC774 \uC57D 156 mm", "Approx. 130 mm wide \xD7 156 mm deep"]
    };
    return [form[p.id][i], use[p.category][i], (i ? "Design model \xB7 " : "\uC124\uACC4 \uBAA8\uB378 \uAE30\uC900 \xB7 ") + modelSize[p.id][i]].join("<br>");
  }

  // lens.js
  var lens = document.createElement("div");
  lens.setAttribute("aria-hidden", "true");
  lens.style.cssText = "position:fixed;pointer-events:none;z-index:100;border:1px solid #777;background-color:white;background-repeat:no-repeat;border-radius:50%;display:none";
  document.body.append(lens);
  var active;
  function closeLens() {
    active = null;
    lens.style.display = "none";
  }
  function move(x, y) {
    const r = active.getBoundingClientRect();
    const scale = Math.min(r.width / active.naturalWidth, r.height / active.naturalHeight);
    const w = active.naturalWidth * scale, h = active.naturalHeight * scale;
    const left = r.left + (r.width - w) / 2, top = r.top + (r.height - h) / 2;
    x = Math.max(left, Math.min(left + w, x));
    y = Math.max(top, Math.min(top + h, y));
    const size = Math.min(190, w * 0.55, h * 0.55);
    Object.assign(lens.style, {
      display: "block",
      width: size + "px",
      height: size + "px",
      left: x - size / 2 + "px",
      top: y - size / 2 + "px",
      backgroundImage: 'url("' + active.currentSrc + '")',
      backgroundSize: w * 2 + "px " + h * 2 + "px",
      backgroundPosition: size / 2 - (x - left) * 2 + "px " + (size / 2 - (y - top) * 2) + "px"
    });
  }
  function imageAt(event) {
    const target = event.target.closest(".zoom-image, #gallery-track img");
    const img = target?.matches("img") ? target : target?.querySelector("img");
    return img?.naturalWidth ? img : null;
  }
  document.addEventListener("click", (event) => {
    const img = imageAt(event);
    if (img && active === img && event.detail && matchMedia("(hover:hover)").matches) return;
    if (!img || active === img) return closeLens();
    active = img;
    const r = img.getBoundingClientRect();
    move(event.detail ? event.clientX : r.left + r.width / 2, event.detail ? event.clientY : r.top + r.height / 2);
  });
  document.addEventListener("pointermove", (event) => {
    if (event.pointerType === "mouse" || event.pointerType === "pen" && !event.buttons) active = imageAt(event);
    if (!active) return closeLens();
    if (event.target === active || active.parentElement?.matches(".zoom-image") && active.parentElement.contains(event.target)) move(event.clientX, event.clientY);
    else closeLens();
  });
  document.addEventListener("scroll", closeLens, true);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLens();
  });
  window.addEventListener("hashchange", closeLens);
  document.documentElement.addEventListener("pointerleave", closeLens);
  window.addEventListener("blur", closeLens);

  // i18n.js
  var phrases = {
    "\uAE30\uB85D\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?": "Remove this archive entry?",
    "\uAE30\uB85D \uC0AD\uC81C": "Remove entry",
    "\uC218\uB7C9 \uC904\uC774\uAE30": "Decrease quantity",
    "\uC218\uB7C9 \uB298\uB9AC\uAE30": "Increase quantity",
    "\uC7A5\uB871\uC774 \uC5F4\uB9AC\uBA70 Moss \uC624\uBE0C\uC81C\uAC00 \uB098\uD0C0\uB098\uB294 Vollik \uC601\uC0C1": "A wardrobe opens to reveal the Moss object",
    "\uBCF8\uBB38\uC73C\uB85C \uAC74\uB108\uB6F0\uAE30": "Skip to content",
    "\uCEEC\uB809\uC158 \uBA54\uB274": "Collection menu",
    "\uCEEC\uB809\uC158 \uB610\uB294 \uC624\uBE0C\uC81C \uAC80\uC0C9": "Search collections or objects",
    "\uC7A5\uB871 \uC548\uC744 \uCC44\uC6B4 \uC774\uB07C\uC640 \uB9E4\uB2EC\uB9B0 Moss \uC624\uBE0C\uC81C": "A Moss object suspended inside a moss-lined wardrobe",
    "Moss \uD589\uC789\uC744 \uC6C0\uC9C1\uC774\uB294 Status \uCCB4\uD5D8": "Interactive Moss hanging object in Status",
    "\uC0C1\uD488 \uC774\uBBF8\uC9C0 \uD655\uB300": "Magnify product image",
    "\uCEEC\uB809\uC158 \uB458\uB7EC\uBCF4\uAE30": "Explore the shop",
    "\uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC624\uBE0C\uC81C\uB97C \uB2F4\uC544\uBCF4\uC138\uC694.": "Save your favourite objects here.",
    "\uCE74\uCE74\uC624\uB85C \uACC4\uC18D\uD558\uAE30": "Continue with Kakao",
    "Apple\uB85C \uACC4\uC18D\uD558\uAE30": "Continue with Apple",
    "\uACB0\uC81C \uD655\uC778 \uC911\u2026": "Confirming payment\u2026",
    "Status \uD654\uBA74\uC5D0\uC11C \uC624\uBE0C\uC81C\uB97C \uC7A1\uC544 \uC704\uC544\uB798, \uC88C\uC6B0\uB85C \uC6C0\uC9C1\uC5EC\uBCF4\uC138\uC694. \uB193\uC73C\uBA74 \uCCB4\uC778\uC774 \uD33D\uD33D\uD574\uC84C\uB2E4 \uB290\uC2A8\uD574\uC9C0\uBA70 \uD754\uB4E4\uB9BD\uB2C8\uB2E4.": "Drag the object in Status. Release it to see the chain tighten and sway.",
    "\uBA54\uC778 \uBA54\uB274": "Main menu",
    "Vollik \uC571 \uC124\uCE58": "Install Vollik",
    "\uCEEC\uB809\uC158": "collection",
    "\uC18C\uC7A5\uD55C \uC624\uBE0C\uC81C\uB97C \uC120\uD0DD\uD574 \uAE30\uB85D\uD558\uC138\uC694. \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.": "Choose an object to record. Saved in this browser.",
    "\uC81C\uD488 \uC790\uC138\uD788 \uBCF4\uAE30": "View product details",
    "\uC544\uCE74\uC774\uBE0C\uC5D0 \uAE30\uB85D\uD558\uAE30": "Add to Archive",
    "\uC624\uBE0C\uC81C \uC6C0\uC9C1\uC774\uAE30": "Move the object",
    "\uC0C8\uB85C\uC6B4 \uCEEC\uB809\uC158\uACFC \uACF5\uAC04\uC758 \uC774\uC57C\uAE30\uB97C \uC804\uD569\uB2C8\uB2E4.": "Discover new collections and stories of spaces.",
    "\uB274\uC2A4\uB808\uD130 \uC11C\uBE44\uC2A4\uB294 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.": "Our newsletter is coming soon.",
    "\uB274\uC2A4\uB808\uD130\uB97C \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uC774\uBA54\uC77C\uC740 \uC800\uC7A5\uB418\uAC70\uB098 \uC804\uC1A1\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.": "Our newsletter is coming soon. Your email was not saved or sent.",
    "\uC624\uBE0C\uC81C, \uD5A5\uAE30, \uADF8\uB9AC\uACE0 \uACF5\uAC04.": "Objects, scent, and space.",
    "\uC8FC\uBB38 \uCCB4\uD5D8 \uBC84\uC804 \xB7 \uC2E4\uC81C \uACB0\uC81C \uBC0F \uBC30\uC1A1\uC740 \uC9C4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Preview store \xB7 No real payments or shipments.",
    "\uC774\uB07C\uAC00 \uD758\uB7EC\uB0B4\uB9AC\uB294 \uB4EF\uD55C \uD615\uD0DC\uB97C \uB2F4\uC740 \uD589\uC789 \uC624\uBE0C\uC81C.": "A hanging object shaped like flowing moss.",
    "\uC775\uC219\uD55C \uACF5\uAC04\uC5D0 \uB0AF\uC120 \uC790\uC5F0\uC758 \uC7A5\uBA74\uC744 \uB354\uD574\uBCF4\uC138\uC694.": "Bring an unexpected scene of nature into your space.",
    "\uD615\uD0DC\uC640 \uD5A5\uAE30\uB85C \uAE30\uC5B5\uB418\uB294 Vollik\uC758 \uCCAB \uBC88\uC9F8 \uCEEC\uB809\uC158.": "The first Vollik collection, remembered in form and scent.",
    "\uACF5\uAC04\uC5D0 \uC740\uC740\uD55C \uD5A5\uAE30\uB97C \uB354\uD558\uB294 \uD589\uC789 \uC624\uBE0C\uC81C.": "A hanging object that brings a subtle scent to your space.",
    "\uD5A5\xB7\uC18C\uC7AC\xB7\uD06C\uAE30 \uBC0F \uC0C1\uC138 \uAD6C\uC131\uC740 \uCD9C\uC2DC \uC2DC \uC548\uB0B4\uB429\uB2C8\uB2E4.": "Scent, materials, dimensions and contents will be available at launch.",
    "\uC0AC\uC6A9 \uC804 \uC81C\uD488\uC5D0 \uB3D9\uBD09\uB41C \uC548\uB0B4\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694. \uC0C1\uC138 \uC0AC\uC6A9 \uC548\uB0B4\uB294 \uCD9C\uC2DC \uC2DC \uC81C\uACF5\uB429\uB2C8\uB2E4.": "Please read the instructions included with your product before use. Full care details will be available at launch.",
    "\uD604\uC7AC\uB294 \uC8FC\uBB38 \uCCB4\uD5D8 \uBC84\uC804\uC73C\uB85C \uC2E4\uC81C \uBC30\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC815\uC2DD \uBC30\uC1A1\uBE44\uC640 \uAD50\uD658\xB7\uBC18\uD488 \uC815\uCC45\uC740 \uD310\uB9E4 \uC2DC\uC791 \uC804 \uC548\uB0B4\uB429\uB2C8\uB2E4.": "This preview does not ship products. Shipping, exchange and return policies will be published before sales begin.",
    "Vollik\uC758 \uC81C\uD488\uACFC \uC8FC\uBB38\uC5D0 \uAD00\uD55C \uBB38\uC758 \uCC44\uB110\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC815\uC2DD \uC624\uD508 \uC2DC \uC774\uACF3\uC5D0\uC11C \uC5F0\uB77D\uCC98\uC640 \uC6B4\uC601 \uC2DC\uAC04\uC744 \uC548\uB0B4\uD574\uB4DC\uB9BD\uB2C8\uB2E4.": "Our customer service channel is coming soon. Contact details and opening hours will be available here at launch.",
    "Vollik\uC744 \uC9C1\uC811 \uB9CC\uB0A0 \uC218 \uC788\uB294 \uACF5\uAC04\uC744 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uB9E4\uC7A5\uACFC \uD31D\uC5C5 \uC18C\uC2DD\uC774 \uD655\uC815\uB418\uBA74 \uC774\uACF3\uC5D0\uC11C \uC548\uB0B4\uD574\uB4DC\uB9BD\uB2C8\uB2E4.": "Discover Vollik in person. Confirmed stores and pop-up announcements will be shared here.",
    "\uC774 \uC0AC\uC774\uD2B8\uB294 Vollik\uC758 \uB514\uC790\uC778 \uBC0F \uC0AC\uC6A9\uC790 \uD750\uB984\uC744 \uD655\uC778\uD558\uAE30 \uC704\uD55C \uD14C\uC2A4\uD2B8 \uBC84\uC804\uC785\uB2C8\uB2E4. \uD45C\uC2DC\uB41C \uC0C1\uD488 \uAC00\uACA9\uC740 \uD14C\uC2A4\uD2B8\uC6A9\uC774\uBA70 \uC2E4\uC81C \uD310\uB9E4 \uACC4\uC57D\uC774\uB098 \uACB0\uC81C\uB294 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "This is a preview of Vollik. Prices are for testing only. No purchase contract is formed and no real payment is made.",
    "\uC7A5\uBC14\uAD6C\uB2C8, \uC704\uC2DC\uB9AC\uC2A4\uD2B8, \uD14C\uC2A4\uD2B8 \uD504\uB85C\uD544\uACFC \uC8FC\uBB38 \uC815\uBCF4\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uBE44\uBC00\uBC88\uD638\uC640 \uCE74\uB4DC \uC815\uBCF4\uB294 \uC800\uC7A5\uD558\uAC70\uB098 \uC804\uC1A1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C \uC774 \uBE0C\uB77C\uC6B0\uC800\uC758 \uD14C\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uC0AD\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.": "Your bag, wishlist, demo profile and orders are saved in this browser. Passwords and card details are not saved or sent. Use the button below to delete your local test data.",
    "\uC5F0\uACB0\uD560 \uACF5\uC2DD \uC778\uC2A4\uD0C0\uADF8\uB7A8 \uC8FC\uC18C\uAC00 \uC544\uC9C1 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Our official Instagram link will be available at launch.",
    "\uC5F0\uACB0\uD560 \uACF5\uC2DD \uCE74\uCE74\uC624\uD1A1 \uCC44\uB110\uC774 \uC544\uC9C1 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Our official KakaoTalk channel will be available at launch.",
    "\uC774 \uCEEC\uB809\uC158\uC5D0 \uB4F1\uB85D\uB41C \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "This collection is coming soon.",
    "\uC81C\uD488\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.": "Product not found.",
    "\uC1FC\uD551\uBC31\uC5D0 \uCD94\uAC00\uB41C \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "Your shopping bag is empty.",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uCD94\uAC00\uB41C \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "Your wishlist is empty.",
    "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.": "No matching products.",
    "\uCD5C\uADFC \uBCF8 \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "No recently viewed products.",
    "\uC8FC\uBB38\uD560 \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "Your bag is empty.",
    "\uC644\uB8CC\uB41C \uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "No completed demo orders yet.",
    "\uC544\uC9C1 \uC8FC\uBB38 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.": "No orders yet.",
    "\uC0C1\uD488\uC744 \uB2F4\uACE0 \uD14C\uC2A4\uD2B8 \uACB0\uC81C\uB97C \uC9C4\uD589\uD574\uBCF4\uC138\uC694.": "Add an item to try the checkout.",
    "\uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.": "Demo orders are saved in this browser.",
    "\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC8FC\uBB38\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.": "This order was not found in this browser.",
    "\uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778 \uC0C1\uD0DC\uC785\uB2C8\uB2E4.": "You are signed into a demo account.",
    "\uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778 \xB7 \uC784\uC758\uC758 \uC774\uBA54\uC77C\uACFC 8\uC790 \uC774\uC0C1 \uC785\uB825": "Demo sign-in \xB7 Use a sample email and at least 8 characters.",
    "\uC678\uBD80 \uACC4\uC815\uC5D0 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC73C\uBA70 \uBE44\uBC00\uBC88\uD638\uB294 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "No external accounts are connected. Passwords are never saved.",
    "\uD14C\uC2A4\uD2B8 \uAC00\uC785 \xB7 \uC2E4\uC81C \uD68C\uC6D0 \uACC4\uC815\uC740 \uC0DD\uC131\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Demo registration \xB7 No real account is created.",
    "\uBE44\uBC00\uBC88\uD638\uB294 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Passwords are never saved.",
    "\uBAA8\uC758 \uACB0\uC81C \xB7 \uC2E4\uC81C \uCCAD\uAD6C\uC640 \uBC30\uC1A1\uC740 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Demo checkout \xB7 No actual charges or shipments.",
    "\uD14C\uC2A4\uD2B8 \uC815\uBCF4 \uC785\uB825 \uBC84\uD2BC\uC73C\uB85C \uBC30\uC1A1 \uC815\uBCF4\uB97C \uCC44\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.": "Use \u201CFill demo details\u201D to try checkout.",
    "\uD14C\uC2A4\uD2B8 \uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C \uBC30\uC1A1\uC740 \uC9C4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Your demo payment is complete. No shipment will be made.",
    "\uC8FC\uBB38\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4": "Your order is complete",
    "\uBAA8\uC758 \uC8FC\uBB38\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uACB0\uC81C\xB7\uBC30\uC1A1 \uB0B4\uC5ED\uC774 \uC544\uB2D9\uB2C8\uB2E4.": "This is a demo order. No real payment or shipment.",
    "\uC2E4\uC81C\uB85C \uACB0\uC81C\uB418\uB098\uC694?": "Will I be charged?",
    "\uC544\uB2C8\uC694. \uBAA8\uB4E0 \uACB0\uC81C \uC218\uB2E8\uC740 \uBAA8\uC758 \uACB0\uC81C\uC774\uBA70 \uC2E4\uC81C \uCCAD\uAD6C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "No. All payment methods are simulated. You will not be charged.",
    "\uC8FC\uBB38 \uB0B4\uC5ED\uC740 \uC5B4\uB514\uC5D0 \uC800\uC7A5\uB418\uB098\uC694?": "Where are my orders saved?",
    "\uD604\uC7AC \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C\uB294 \uACF5\uC720\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Orders are stored in this browser and are not synced across devices.",
    "\uC624\uBE0C\uC81C\uB294 \uC5B4\uB5BB\uAC8C \uC6C0\uC9C1\uC774\uB098\uC694?": "How do I move the object?",
    "Status \uD654\uBA74\uC5D0\uC11C \uC624\uBE0C\uC81C\uB97C \uC7A1\uC544 \uC704\uC544\uB798, \uC88C\uC6B0\uB85C \uC6C0\uC9C1\uC5EC\uBCF4\uC138\uC694. \uB193\uC73C\uBA74 \uCCB4\uC778\uC774 \uD33D\uD33D\uD574\uC84C\uB2E4 \uB290\uC2A8\uD574\uC9C0\uBA70 \uD754\uB4E4\uB9BD\uB2C8\uB2E4.": "On Status, drag the object up, down or sideways. Release it to let the chains sway naturally.",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4.": "Removed from your wishlist.",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4.": "Added to your wishlist.",
    "\uC1FC\uD551\uBC31\uC5D0 \uB2F4\uC558\uC2B5\uB2C8\uB2E4.": "Added to your bag.",
    "\uD14C\uC2A4\uD2B8 \uC624\uBE0C\uC81C\uB97C \uC544\uCE74\uC774\uBE0C\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.": "Add a demo object to your archive.",
    "\uD14C\uC2A4\uD2B8 \uBC30\uC1A1 \uC815\uBCF4\uB97C \uC785\uB825\uD588\uC2B5\uB2C8\uB2E4.": "Demo delivery details filled in.",
    "\uD604\uC7AC\uB294 \uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778\uC785\uB2C8\uB2E4. \uC784\uC758\uC758 \uC774\uBA54\uC77C\uACFC 8\uC790 \uC774\uC0C1\uC758 \uD14C\uC2A4\uD2B8 \uBE44\uBC00\uBC88\uD638\uB85C \uB85C\uADF8\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.": "This is a demo sign-in. Use a sample email and a demo password of at least 8 characters.",
    "\uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uC744 \uCDE8\uC18C\uD560\uAE4C\uC694?": "Cancel this demo order?",
    "\uC8FC\uBB38 \uAE30\uB85D\uC740 \uB0A8\uACE0 \uC0C1\uD0DC\uAC00 \uCDE8\uC18C\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.": "The order will remain in your history with a cancelled status.",
    "\uD14C\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uCD08\uAE30\uD654\uD560\uAE4C\uC694?": "Reset your demo data?",
    "\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB41C \uC7A5\uBC14\uAD6C\uB2C8, \uC704\uC2DC\uB9AC\uC2A4\uD2B8, \uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uACFC \uD504\uB85C\uD544\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4.": "This removes the bag, wishlist, demo orders and profile saved in this browser.",
    "\uD14C\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4.": "Your demo data was reset.",
    "\uACB0\uC81C\uAC00 \uC2B9\uC778\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.": "Payment was not approved.",
    "\uACB0\uC81C \uC2E4\uD328 \uD14C\uC2A4\uD2B8\uC785\uB2C8\uB2E4. \uC7A5\uBC14\uAD6C\uB2C8\uC640 \uBC30\uC1A1 \uC815\uBCF4\uAC00 \uC720\uC9C0\uB429\uB2C8\uB2E4.": "This is a simulated failure. Your bag and delivery details are kept.",
    "\uACB0\uC81C\uB97C \uCDE8\uC18C\uD588\uC2B5\uB2C8\uB2E4. \uC785\uB825\uD55C \uC815\uBCF4\uB294 \uC720\uC9C0\uB429\uB2C8\uB2E4.": "Payment cancelled. Your details are kept.",
    "\uD14C\uC2A4\uD2B8 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD588\uC2B5\uB2C8\uB2E4.": "Signed into your demo account.",
    "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Passwords do not match.",
    "\uD14C\uC2A4\uD2B8 \uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.": "Demo registration complete.",
    "\uC5F0\uB77D\uCC98\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.": "Please check the phone number.",
    "\uC2E4\uC81C \uACB0\uC81C \uC815\uBCF4 \uC785\uB825 \uC5C6\uC774": "No real payment details are needed.",
    "\uC2B9\uC778\xB7\uC2E4\uD328\xB7\uCDE8\uC18C \uD750\uB984\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.": "Try an approved, declined or cancelled payment.",
    "\uC8FC\uBB38 \uC815\uBCF4\uB97C \uD655\uC778\uD55C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.": "Check your order details and try again.",
    "\uC800\uC7A5 \uACF5\uAC04\uC774 \uBD80\uC871\uD574 \uC774\uBC88 \uD654\uBA74\uC5D0\uC11C\uB9CC \uC720\uC9C0\uB429\uB2C8\uB2E4.": "Storage is full. Changes will only last for this session.",
    "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.": "Page not found.",
    "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694 (8\uC790 \uC774\uC0C1)": "Password (at least 8 characters)",
    "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD558\uC138\uC694": "Re-enter your password",
    "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694": "Your email address",
    "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694": "Your password",
    "\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694": "Your name",
    "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694": "Search products",
    "\uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD558\uC138\uC694": "Korean phone number",
    "\uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694": "Delivery address",
    "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?": "Forgot your password?",
    "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?": "New to Vollik?",
    "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?": "Already have an account?",
    "\uC120\uD0DD\uD55C \uD328\uD0A4\uC9C0:": "Selected packaging:",
    "\uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uC2E0\uAC00\uC694?": "Need help?",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC0AD\uC81C": "Remove from wishlist",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uCD94\uAC00": "Add to wishlist",
    "\uC218\uB7C9 \uC904\uC774\uAE30": "Decrease quantity",
    "\uC218\uB7C9 \uB298\uB9AC\uAE30": "Increase quantity",
    "\uD14C\uC2A4\uD2B8 \uB370\uC774\uD130 \uCD08\uAE30\uD654": "Reset demo data",
    "\uD14C\uC2A4\uD2B8 \uACC4\uC815\uC73C\uB85C \uACC4\uC18D\uD558\uAE30": "Continue with demo account",
    "\uD14C\uC2A4\uD2B8 \uACB0\uC81C \uC2B9\uC778": "Approve demo payment",
    "\uACB0\uC81C \uC2E4\uD328 \uD14C\uC2A4\uD2B8": "Simulate decline",
    "\uD14C\uC2A4\uD2B8 \uC8FC\uBB38 \uCDE8\uC18C": "Demo order cancelled",
    "\uD14C\uC2A4\uD2B8 \uACB0\uC81C \uC644\uB8CC": "Demo payment complete",
    "\uACB0\uC81C \uD655\uC778 \uC911\u2026": "Confirming payment\u2026",
    "\uC8FC\uBB38 \uC0C1\uC138 \uBCF4\uAE30": "View order details",
    "\uC1FC\uD551 \uACC4\uC18D\uD558\uAE30": "Continue shopping",
    "\uACC4\uC18D \uB458\uB7EC\uBCF4\uAE30": "Continue browsing",
    "\uCE74\uCE74\uC624\uB85C \uACC4\uC18D\uD558\uAE30": "Continue with Kakao",
    "Apple\uB85C \uACC4\uC18D\uD558\uAE30": "Continue with Apple",
    "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30": "Add to bag",
    "\uC1FC\uD551\uBC31 \uBCF4\uAE30": "View bag",
    "\uD328\uD0A4\uC9C0(\uC120\uD0DD)": "Packaging",
    "\uC81C\uD488 \uC138\uBD80 \uC815\uBCF4": "Product details",
    "\uCDE8\uAE09 \uC2DC \uC8FC\uC758\uC0AC\uD56D": "Product care",
    "\uBC30\uC1A1 & \uBC18\uD488 \uC815\uCC45": "Shipping & returns",
    "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68": "Privacy policy",
    "\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00": "Terms of service",
    "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815": "Reset password",
    "\uBE44\uBC00\uBC88\uD638 \uD655\uC778": "Confirm password",
    "\uD14C\uC2A4\uD2B8 \uC815\uBCF4 \uC785\uB825": "Fill demo details",
    "\uB274\uC2A4\uB808\uD130 \uC774\uBA54\uC77C": "Newsletter email",
    "\uC774\uBA54\uC77C \uC785\uB825": "Email address",
    "\uCEEC\uB809\uC158 \uC0B4\uD3B4\uBCF4\uAE30": "Explore the collection",
    "\uC1FC\uD551\uBC31 \uB2EB\uAE30": "Close bag",
    "\uBA54\uB274 \uC5F4\uAE30": "Open menu",
    "\uBA54\uB274 \uB2EB\uAE30": "Close menu",
    "\uBA54\uC778 \uBA54\uB274": "Main navigation",
    "\uC5B8\uC5B4 \uC120\uD0DD": "Choose language",
    "\uC2E0\uC6A9\uCE74\uB4DC / \uCCB4\uD06C\uCE74\uB4DC": "Credit / debit card",
    "\uCE74\uCE74\uC624\uD398\uC774": "Kakao Pay",
    "\uB124\uC774\uBC84\uD398\uC774": "Naver Pay",
    "\uC560\uD50C\uD398\uC774": "Apple Pay",
    "\uAE30\uD504\uD2B8 \uC138\uD2B8": "Gift set",
    "\uC2A4\uD0E0\uB2E4\uB4DC": "Standard",
    "\uD5A5\uC218 \uC641\uC2A4\uD0C0\uBE14\uB81B": "Scented wax tablet",
    "\uD14C\uC2A4\uD2B8 \uACE0\uAC1D": "Demo customer",
    "\uD14C\uC2A4\uD2B8 \uACB0\uC81C": "Demo payment",
    "\uC804\uCCB4\uBCF4\uAE30": "View all",
    "\uBCA0\uC2A4\uD2B8\uC140\uB7EC": "Bestsellers",
    "\uC8FC\uBB38 \uD569\uACC4": "Order summary",
    "\uC0C1\uD488 \uAE08\uC561": "Subtotal",
    "\uBC30\uC1A1\uBE44": "Shipping",
    "\uD569\uACC4": "Total",
    "\uBB34\uB8CC": "Free",
    "\uB9C8\uC774\uD398\uC774\uC9C0": "My account",
    "\uC704\uC2DC\uB9AC\uC2A4\uD2B8": "Wishlist",
    "\uC7A5\uBC14\uAD6C\uB2C8": "Shopping bag",
    "\uC1FC\uD551\uBC31": "Shopping bag",
    "\uC8FC\uBB38\uD558\uAE30": "Checkout",
    "\uACB0\uC81C\uD558\uAE30": "Pay now",
    "\uACB0\uC81C \uC218\uB2E8": "Payment method",
    "\uACB0\uC81C \uC815\uBCF4": "Payment details",
    "\uBC30\uC1A1 \uC815\uBCF4": "Delivery details",
    "\uC8FC\uBB38 \uC0C1\uD488": "Your items",
    "\uC8FC\uBB38 \uC0C1\uC138": "Order details",
    "\uC8FC\uBB38 \uC644\uB8CC": "Order complete",
    "\uC8FC\uBB38 \uC870\uD68C": "Orders",
    "\uC8FC\uBB38\uBC88\uD638:": "Order number:",
    "\uC8FC\uBB38 \uCDE8\uC18C": "Cancel order",
    "\uACB0\uC81C \uCDE8\uC18C": "Cancel payment",
    "\uB274\uC2A4\uB808\uD130": "Newsletter",
    "\uAD6C\uB3C5\uD558\uAE30": "Subscribe",
    "\uBB38\uC758\uD558\uAE30": "Contact",
    "\uB9E4\uC7A5 \uC704\uCE58": "Stores",
    "\uBC95\uC801 \uACE0\uC9C0": "Legal notice",
    "\uC778\uC2A4\uD0C0\uADF8\uB7A8": "Instagram",
    "\uCE74\uCE74\uC624\uD1A1": "KakaoTalk",
    "\uCD94\uCC9C\uC0C1\uD488": "You may also like",
    "\uC120\uBB3C\uD558\uAE30": "Send as a gift",
    "\uC1FC\uD551\uC73C\uB85C": "Shop",
    "\uAC80\uC0C9 \uACB0\uACFC": "Results",
    "\uC778\uAE30 \uAC80\uC0C9\uC5B4": "Popular searches",
    "\uCD5C\uADFC \uBCF8 \uC81C\uD488": "Recently viewed",
    "\uAC80\uC0C9\uD558\uAE30": "Search",
    "\uAC80\uC0C9\uC5B4": "Search",
    "\uAC80\uC0C9": "Search",
    "\uB354\uBCF4\uAE30": "View more",
    "\uC0AD\uC81C\uD558\uAE30": "Clear",
    "\uB85C\uADF8\uC544\uC6C3": "Sign out",
    "\uB85C\uADF8\uC778": "Sign in",
    "\uD68C\uC6D0\uAC00\uC785": "Create account",
    "\uAC00\uC785\uD558\uAE30": "Create account",
    "\uC774\uBA54\uC77C": "Email",
    "\uBE44\uBC00\uBC88\uD638": "Password",
    "\uC218\uB839\uC778 \uC774\uB984": "Recipient name",
    "\uC774\uB984": "Name",
    "\uC5F0\uB77D\uCC98": "Phone",
    "\uBC30\uC1A1\uC9C0": "Address",
    "\uB610\uB294": "or",
    " \uBC0F ": " and ",
    "\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4": " \u2014 I agree",
    "\uCE74\uD14C\uACE0\uB9AC": "Category",
    "\uD544\uD130": "Filter",
    "\uC801\uC6A9\uD558\uAE30": "Apply",
    "\uB2E4\uC2DC \uC2DC\uB3C4\uD558\uAE30": "Try again",
    "\uB3CC\uC544\uAC00\uAE30": "Go back",
    "\uD655\uC778": "OK",
    "\uCD08\uAE30\uD654": "Reset",
    "\uB2EB\uAE30": "Close",
    "\uCD94\uAC00": "Add",
    "\uC0AD\uC81C": "Remove",
    "\uC218\uB7C9": "Qty",
    "\uC624\uBE0C\uC81C": "Object",
    "\uC81C\uD488 \uC774\uBBF8\uC9C0": "Product image",
    "\uC0C1\uC138 \uC774\uBBF8\uC9C0": "Detail image",
    "\uC0C1\uC138\uBCF4\uAE30": "View details",
    "\uC0C1\uC138 \uC0AC\uC9C4": "Detail photo",
    " \uBCF4\uAE30": " view",
    " \uC5F4\uAE30": " open",
    "Vollik \uD648": "Vollik home",
    "\uC774\uB07C\uB85C \uCC44\uC6CC\uC9C4 \uC564\uD2F0\uD06C \uC7A5\uB871\uC5D0 \uB9E4\uB2EC\uB9B0 Melted Moss": "Melted Moss hanging in an antique wardrobe filled with moss",
    "\uC6C0\uC9C1\uC774\uB294 Melted Moss \uC624\uBE0C\uC81C": "Interactive Melted Moss object",
    "\uC624\uBE0C\uC81C \uC6C0\uC9C1\uC774\uAE30. \uC0C1\uD558\uC88C\uC6B0\uB85C \uB4DC\uB798\uADF8\uD558\uC138\uC694. \uBC29\uD5A5\uD0A4\uB85C \uC6C0\uC9C1\uC774\uACE0 Home \uD0A4\uB85C \uCD08\uAE30\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.": "Move the object. Drag in any direction, use arrow keys, or press Home to reset."
  };
  var entries = Object.entries(phrases).sort((a, b) => b[0].length - a[0].length);
  function translate(value, lang = "ko") {
    if (lang !== "en") return value;
    let text = value;
    for (const [ko, en2] of entries) text = text.split(ko).join(en2);
    return text.replace(/([\d,]+)원/g, "\u20A9$1").replace(/님(?=\s*$)/, "");
  }

  // store.js
  var products = {
    moss: { id: "moss", name: "Melted Moss", price: 68e3, category: "Hanging", collection: "01", image: "assets/moss-hanging.webp", studio: true, descriptionEn: "A hanging scent object shaped like flowing moss.<br>It brings a small scene of nature into a familiar space.<br>The first Vollik collection pairs sculptural form with scent.", gallery: ["assets/moss-hanging.webp", ...Array.from({ length: 8 }, (_, i) => `media/moss-${i + 1}.png`)], description: "\uC774\uB07C\uAC00 \uD758\uB7EC\uB0B4\uB9AC\uB294 \uB4EF\uD55C \uD615\uD0DC\uB97C \uB2F4\uC740 \uD589\uC789 \uC624\uBE0C\uC81C.<br>\uC775\uC219\uD55C \uACF5\uAC04\uC5D0 \uB0AF\uC120 \uC790\uC5F0\uC758 \uC7A5\uBA74\uC744 \uB354\uD574\uBCF4\uC138\uC694.<br>\uD615\uD0DC\uC640 \uD5A5\uAE30\uB85C \uAE30\uC5B5\uB418\uB294 Vollik\uC758 \uCCAB \uBC88\uC9F8 \uCEEC\uB809\uC158." }
  };
  Object.assign(products, {
    "moss-badge": {
      "id": "moss-badge",
      "name": "Moss Badge",
      "price": 68e3,
      "category": "Badge",
      "collection": "01",
      "image": "assets/moss-badge.webp",
      "gallery": [
        "assets/moss-badge.webp"
      ],
      "studio": true,
      "description": "\uBCF4\uC1A1\uD55C \uC774\uB07C\uC758 \uD45C\uBA74\uACFC \uC720\uAE30\uC801\uC778 \uACE1\uC120\uC744 \uB2F4\uC740 \uC790\uC11D \uBC30\uC9C0. \uC637\uACFC \uAC00\uBC29 \uC704\uC5D0 \uC791\uC740 \uC790\uC5F0\uC758 \uD615\uD0DC\uB97C \uB354\uD569\uB2C8\uB2E4.",
      "descriptionEn": "A magnetic badge with a soft moss-like surface and organic curves. A small fragment of nature for clothing and bags."
    },
    "moss-stack": {
      "id": "moss-stack",
      "name": "Moss Stack",
      "price": 68e3,
      "category": "Stack",
      "collection": "01",
      "image": "assets/moss-stack.webp",
      "gallery": [
        "assets/moss-stack.webp"
      ],
      "studio": true,
      "description": "\uB2E8\uB2E8\uD55C \uBC1B\uCE68 \uC704\uB85C \uBD80\uB4DC\uB7EC\uC6B4 \uC774\uB07C\uAC00 \uD758\uB7EC\uB0B4\uB9AC\uB294 \uC2A4\uD0DD \uC624\uBE0C\uC81C. \uC11C\uB85C \uB2E4\uB978 \uC9C8\uAC10\uC774 \uB9CC\uB4DC\uB294 \uC791\uC740 \uD48D\uACBD\uC785\uB2C8\uB2E4.",
      "descriptionEn": "Soft moss-like forms flow over a solid base. A tabletop landscape shaped by contrasting textures."
    },
    "dopamine-hanging": {
      "id": "dopamine-hanging",
      "name": "Dopamine Hanging",
      "price": 68e3,
      "category": "Hanging",
      "collection": "02",
      "image": "assets/dopamine-hanging.webp",
      "gallery": [
        "assets/dopamine-hanging.webp"
      ],
      "studio": true,
      "description": "\uBD89\uC740 \uBA74\uC774 \uC911\uC2EC\uC5D0\uC11C \uC0AC\uBC29\uC73C\uB85C \uBED7\uC5B4 \uB098\uAC00\uB294 \uBCC4 \uBAA8\uC591\uC758 \uD589\uC789 \uC624\uBE0C\uC81C.",
      "descriptionEn": "Red facets radiate from the centre of this starburst hanging object."
    },
    "dopamine-hanging2": {
      "id": "dopamine-hanging2",
      "name": "Dopamine Hanging 2",
      "price": 68e3,
      "category": "Hanging",
      "collection": "02",
      "image": "assets/dopamine-hanging2-shop.webp",
      "gallery": [],
      "studio": true,
      "description": "\uB450 \uC778\uBB3C\uC774 \uB9DE\uC7A1\uC740 \uC190\uC5D0 \uCCB4\uC778\uC744 \uAC78\uC5C8\uC2B5\uB2C8\uB2E4. \uBD89\uC740 \uC2E4\uB8E8\uC5E3\uC774 \uD55C \uC30D\uC73C\uB85C \uD754\uB4E4\uB9BD\uB2C8\uB2E4.",
      "descriptionEn": "Two figures swing together, suspended by a chain from their joined hands."
    },
    "dopamine-badge": {
      "id": "dopamine-badge",
      "name": "Dopamine Badge",
      "price": 68e3,
      "category": "Badge",
      "collection": "02",
      "image": "assets/dopamine-badge.webp",
      "gallery": [
        "assets/dopamine-badge.webp"
      ],
      "studio": true,
      "description": "\uD55C\uC21C\uAC04\uC5D0 \uD37C\uC9C0\uB294 \uC790\uADF9\uC744 \uC120\uBA85\uD55C \uB808\uB4DC\uB85C \uB2F4\uC740 \uC790\uC11D \uBC30\uC9C0. \uC791\uC740 \uD615\uD0DC\uB85C \uC77C\uC0C1\uC5D0 \uAC15\uB82C\uD55C \uB9AC\uB4EC\uC744 \uB354\uD569\uB2C8\uB2E4.",
      "descriptionEn": "A vivid red magnetic badge capturing a sudden burst of sensation. A small form with an intense rhythm."
    },
    "dopamine-stack": {
      "id": "dopamine-stack",
      "name": "Dopamine Stack",
      "price": 68e3,
      "category": "Stack",
      "collection": "02",
      "image": "assets/dopamine-stack.webp",
      "gallery": [
        "assets/dopamine-stack.webp"
      ],
      "studio": true,
      "description": "\uBC14\uB2E5\uC5D0 \uB2FF\uC740 \uAC00\uB290\uB2E4\uB780 \uAF2C\uB9AC\uAC00 \uC810\uCC28 \uB450\uAED8\uB97C \uC5BB\uC73C\uBA70 \uBD89\uC740 \uBCC4\uB85C \uC774\uC5B4\uC9D1\uB2C8\uB2E4.",
      "descriptionEn": "A fine tail rests on the surface and gradually thickens into a red star."
    },
    "rains-hanging": {
      "id": "rains-hanging",
      "name": "Rains Hanging",
      "price": 68e3,
      "category": "Hanging",
      "collection": "03",
      "image": "assets/rains-hanging.webp",
      "gallery": [
        "assets/rains-hanging.webp"
      ],
      "studio": true,
      "description": "\uBE57\uBC29\uC6B8\uC774 \uB0A8\uAE34 \uD30C\uBB38\uC744 \uACB9\uACB9\uC758 \uACE1\uC120\uC73C\uB85C \uB2F4\uC740 \uD589\uC789 \uC624\uBE0C\uC81C. \uC9D9\uC740 \uBE14\uB8E8 \uADF8\uB808\uC774 \uC0AC\uC774\uB85C \uACF5\uAC04\uC774 \uBE44\uCE69\uB2C8\uB2E4.",
      "descriptionEn": "Layered curves trace the ripples left by rain. Openings reveal the space through a deep blue-gray hanging object."
    },
    "rains-badge": {
      "id": "rains-badge",
      "name": "Rains Badge",
      "price": 68e3,
      "category": "Badge",
      "collection": "03",
      "image": "assets/rains-badge.webp",
      "gallery": [
        "assets/rains-badge.webp"
      ],
      "studio": true,
      "description": "\uD769\uC5B4\uC9C4 \uBB3C\uBC29\uC6B8\uC774 \uD558\uB098\uB85C \uC774\uC5B4\uC9C0\uB294 \uC21C\uAC04\uC744 \uB2F4\uC740 \uC2E4\uBC84 \uADF8\uB808\uC774 \uC790\uC11D \uBC30\uC9C0. \uD750\uB974\uB294 \uB4EF\uD55C \uACE1\uC120\uC774 \uBE5B\uC744 \uBD80\uB4DC\uB7FD\uAC8C \uBC1B\uC2B5\uB2C8\uB2E4.",
      "descriptionEn": "A silver-gray magnetic badge capturing scattered droplets coming together. Flowing curves catch the light softly."
    },
    "rains-stack": {
      "id": "rains-stack",
      "name": "Rains Stack",
      "price": 68e3,
      "category": "Stack",
      "collection": "03",
      "image": "assets/rains-stack.webp",
      "gallery": [
        "assets/rains-stack.webp"
      ],
      "studio": true,
      "description": "\uBE44\uAC00 \uB0A8\uAE34 \uBB3C\uACB0 \uC0AC\uC774\uB85C \uBC14\uB2E5\uC774 \uBE44\uCE69\uB2C8\uB2E4. \uB465\uADFC \uAC00\uC7A5\uC790\uB9AC\uC5D0 \uCC28\uCF5C\uBE5B \uBC18\uC0AC\uAC00 \uB9FA\uD799\uB2C8\uB2E4.",
      "descriptionEn": "The surface beneath shows through open ripples. Charcoal edges catch the light."
    }
  });
  var money = (n) => "\u20A9" + Number(n).toLocaleString("ko-KR");
  var escapeHTML = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  function defaults() {
    return { scentIndex: 0, lang: "ko", cart: [], wish: [], recent: [], orders: [], archive: ["moss", "moss-badge", "rains-hanging", "rains-stack", "dopamine-hanging"].map((product, i) => ({ id: "sample-" + i, product, name: products[product].name })), user: null, subscribed: false };
  }
  function normalize(raw) {
    const d = defaults();
    if (!raw || typeof raw !== "object") return d;
    d.scentIndex = Number.isInteger(raw.scentIndex) && raw.scentIndex >= 0 && raw.scentIndex < 5 ? raw.scentIndex : 0;
    d.lang = raw.lang === "en" ? "en" : "ko";
    d.cart = (Array.isArray(raw.cart) ? raw.cart : []).filter((i) => i && Object.hasOwn(products, i.id)).map((i) => ({ id: i.id, pack: i.pack === "gift" ? "gift" : "standard", qty: Math.max(1, Math.min(99, Math.trunc(+i.qty) || 1)) }));
    d.wish = [...new Set((Array.isArray(raw.wish) ? raw.wish : []).filter((id) => Object.hasOwn(products, id)))];
    d.recent = [...new Set((Array.isArray(raw.recent) ? raw.recent : []).filter((id) => Object.hasOwn(products, id)))].slice(0, 6);
    d.orders = (Array.isArray(raw.orders) ? raw.orders : []).filter((o) => o && typeof o.id === "string" && o.shipping && Array.isArray(o.items) && o.items.length && o.items.every((i) => i && Object.hasOwn(products, i.id) && Number.isInteger(i.qty) && i.qty > 0));
    d.archive = (Array.isArray(raw.archive) ? raw.archive : d.archive).filter((i) => i && Object.hasOwn(products, i.product));
    if (d.archive.length === 3 && d.archive.every((o, i) => o.id === "initial-" + (i + 1) && o.product === "moss" && o.name === "Vollik")) d.archive = defaults().archive;
    d.user = raw.user && typeof raw.user.name === "string" ? { name: raw.user.name, email: String(raw.user.email || "") } : null;
    d.subscribed = !!raw.subscribed;
    return d;
  }
  function addItem(items, id, pack2 = "standard", qty2 = 1) {
    qty2 = Math.max(1, Math.min(99, Math.trunc(Number(qty2)) || 1));
    pack2 = pack2 === "gift" ? "gift" : "standard";
    if (!Object.hasOwn(products, id)) throw new Error("Unknown product");
    const next = items.map((i) => ({ ...i }));
    const item = next.find((i) => i.id === id && i.pack === pack2);
    if (item) item.qty = Math.min(99, item.qty + qty2);
    else next.push({ id, pack: pack2, qty: Math.max(1, Math.min(99, qty2)) });
    return next;
  }
  var collections = {
    "01": { name: "Moss", image: "assets/moss-stack.webp", description: "\uC774\uB07C\uC758 \uBD80\uB4DC\uB7EC\uC6B4 \uD45C\uBA74\uACFC \uD758\uB7EC\uB0B4\uB9AC\uB294 \uD615\uD0DC.", descriptionEn: "Soft moss textures and flowing forms." },
    "02": { name: "Dopamine", image: "assets/dopamine-stack-shop.webp", description: "\uAC10\uAC01\uC774 \uAE68\uC5B4\uB098\uB294 \uC21C\uAC04\uC758 \uC120\uBA85\uD55C \uC0C9\uACFC \uAE34\uC7A5.", descriptionEn: "Vivid color and tension as the senses awaken." },
    "03": { name: "Rains", image: "assets/rains-stack-shop.webp", description: "\uC138\uCC28\uAC8C \uB0B4\uB9B0 \uBE44\uAC00 \uB0A8\uAE34 \uBB3C\uACB0\uC758 \uD754\uC801.", descriptionEn: "Traces of rippling water after heavy rain." }
  };
  for (const product of Object.values(products)) {
    const slug = product.id === "moss" ? "moss-hanging" : product.id;
    const base = "assets/" + slug + "-shop";
    product.image = base + ".webp";
    if (["dopamine-hanging", "dopamine-hanging2", "dopamine-stack", "rains-stack"].includes(slug)) {
      product.gallery = [product.image, base + "-detail.webp", "assets/" + slug + "-study.webp"];
      if (product.category === "Stack") product.gallery.push("assets/" + slug + "-gallery.webp");
      continue;
    }
    const original = "assets/" + slug;
    const sceneIndex = { Hanging: 0, Badge: 1, Stack: 2 }[product.category];
    const series = "assets/" + slug.split("-")[0] + "-exhibit-";
    product.gallery = [original + ".webp"];
    if (product.category !== "Badge") {
      const studio = ["moss-hanging", "dopamine-stack", "rains-stack"].includes(slug);
      product.gallery.push(studio ? original + "-studio.webp" : series + sceneIndex + ".webp");
    }
    product.gallery.push(series + (sceneIndex + 3) + ".webp");
  }
  for (const p of Object.values(products)) {
    p.name = `${collections[p.collection].name} (${{ Hanging: "H", Stack: "S", Badge: "B" }[p.category]})`;
  }
  products["dopamine-hanging2"].name = "Dopamine (H2)";

  // desktop-common.js
  function read() {
    try {
      return normalize(JSON.parse(localStorage.getItem("vollik-test-v2")));
    } catch {
      return defaults();
    }
  }
  function save(d) {
    try {
      localStorage.setItem("vollik-test-v2", JSON.stringify(d));
      return true;
    } catch {
      return false;
    }
  }
  var menu = document.querySelector("#site-menu");
  var search = document.querySelector("#search-dialog");
  document.querySelector(".menu-toggle").onclick = () => menu.showModal();
  document.querySelector(".menu-dismiss").onclick = () => menu.close();
  document.querySelector(".search-open").onclick = () => search.showModal();
  document.querySelector(".search-dismiss").onclick = () => search.close();
  for (const dialog of [menu, search]) dialog.addEventListener("click", (e) => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  });
  function counts() {
    const d = read();
    const wish = document.querySelector('.utilities a[href*="wishlist"]'), bag = document.querySelector('.utilities a[href*="#cart"]');
    const en2 = d.lang === "en";
    if (wish) wish.setAttribute("aria-label", `${en2 ? "Wishlist" : "\uC704\uC2DC\uB9AC\uC2A4\uD2B8"} (${d.wish.length})`);
    if (bag) bag.setAttribute("aria-label", `${en2 ? "Shopping bag" : "\uC1FC\uD551\uBC31"} (${d.cart.reduce((s, i) => s + i.qty, 0)})`);
  }
  counts();
  window.addEventListener("storage", counts);
  var translations = { "\uD5A5\uC740 \uC605\uC5B4\uC9C0\uACE0 \uD615\uD0DC\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.": "Scent fades. Form remains.", "\uD5A5\uACFC \uD615\uD0DC\uB85C \uAE30\uC5B5\uB418\uB294 \uC624\uBE0C\uC81C.": "Objects remembered through scent and form.", "\uC190\uC5D0 \uB2FF\uB294 \uD45C\uBA74\uBD80\uD130 \uACF5\uAC04\uC5D0 \uB0A8\uB294 \uC778\uC0C1\uAE4C\uC9C0.": "From the texture in your hand to the impression in your space.", "Vollik\uC740 \uC77C\uC0C1\uC758 \uAC10\uAC01\uC744 \uC0C8\uB85C\uC6B4 \uD615\uD0DC\uB85C \uC81C\uC548\uD569\uB2C8\uB2E4.": "Vollik gives everyday sensations a new form.", "\uB0B4 \uACC4\uC815": "My account", "\uBB38\uC758\uD558\uAE30": "Contact", "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38": "FAQ", "\uC8FC\uBB38 \uC870\uD68C": "Orders", "\uC704\uC2DC\uB9AC\uC2A4\uD2B8": "Wishlist", "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68": "Privacy", "\uC774\uC6A9 \uC548\uB0B4": "Information", "\uC0F5 \uBC14\uB85C\uAC00\uAE30": "Shop now", "\uBAA8\uB4E0 \uC624\uBE0C\uC81C \uBCF4\uAE30": "Explore all objects", "\uD5A5\uC774 \uC605\uC5B4\uC9C4 \uB4A4\uC5D0\uB3C4 \uD615\uD0DC\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.": "The scent fades. The form remains.", "\uD589\uC789\uC744 \uC7A1\uC544 \uC6C0\uC9C1\uC778 \uB4A4 \uB193\uC544\uBCF4\uC138\uC694.": "Drag the hanging object, then release it.", "\uC571 \uCCB4\uD5D8\uD558\uAE30 \u2197": "Explore the app \u2197", "\uD5A5\uC774 \uBA38\uBB38 \uC790\uB9AC.": "Where scent lingers.", "\uC775\uC219\uD55C \uACF5\uAC04\uC5D0 \uB193\uC778 \uB0AF\uC120 \uC790\uC5F0.": "Unexpected nature in a familiar space.", "\uC11C\uB85C \uB2E4\uB978 \uAC10\uAC01\uC758 \uD615\uD0DC": "Three expressions of the senses", "\uC18C\uC7A5\uD55C \uC624\uBE0C\uC81C\uB97C \uAE30\uB85D\uD558\uACE0, \uAC10\uAC01\uC744 \uC774\uC5B4\uAC00\uC138\uC694.": "Collect your objects. Keep the feeling.", "\uC8FC\uBB38 \uCCB4\uD5D8 \uBC84\uC804 \xB7 \uC2E4\uC81C \uACB0\uC81C \uBC0F \uBC30\uC1A1\uC740 \uC9C4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.": "Preview shopping experience. No payment or delivery takes place." };
  function localizeStatic() {
    const en2 = read().lang === "en";
    document.documentElement.lang = en2 ? "en" : "ko";
    if (!en2) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while (n = walker.nextNode()) {
      if (["SCRIPT", "STYLE"].includes(n.parentElement?.tagName)) continue;
      const s = n.textContent.trim();
      if (s && !n.parentElement.closest("[data-i18n-skip], .language-switch")) n.textContent = n.textContent.replace(s, () => translations[s] || translate(s, "en"));
    }
    for (const el of document.querySelectorAll("[aria-label],[title],[alt]")) {
      for (const attr of ["aria-label", "title", "alt"]) {
        const value = el.getAttribute(attr);
        if (value) el.setAttribute(attr, translations[value] || translate(value, "en"));
      }
    }
    const input = document.querySelector(".site-search input");
    if (input) input.placeholder = "Search collections or objects";
  }
  document.querySelectorAll(".language-switch").forEach((b) => b.onclick = () => {
    const d = read();
    d.lang = d.lang === "en" ? "ko" : "en";
    save(d);
    location.reload();
  });
  localizeStatic();
  function renderVisualMenu(id = "01") {
    const slug = { "01": "moss", "02": "dopamine", "03": "rains" }[id];
    menu.querySelectorAll("[data-menu-collection]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.menuCollection === id)));
    menu.querySelector(".visual-menu-grid").innerHTML = [["all", read().lang === "en" ? "View all" : "\uC804\uCCB4\uBCF4\uAE30"], ["Hanging", "Hanging"], ["Badge", "Badge"], ["Stack", "Stack"]].map(([type, label]) => `<a href="desktop-shop.html?collection=${id}${type === "all" ? "" : "&type=" + type}"><span class="visual-menu-image"><img src="assets/${slug}-${type === "all" ? "stack-gallery" : type.toLowerCase() + "-shop"}.webp" alt=""></span><span>${label}</span></a>`).join("");
  }
  menu.querySelectorAll("[data-menu-collection]").forEach((b) => b.addEventListener("click", () => renderVisualMenu(b.dataset.menuCollection)));
  renderVisualMenu();

  // desktop.js
  var root = document.querySelector("#catalog-root");
  var zoom = document.querySelector("#zoom");
  var pack = "standard";
  var qty = 1;
  var timer;
  var en = () => read().lang === "en";
  var t = (ko, eng) => en() ? eng : ko;
  function params() {
    return new URLSearchParams(location.search);
  }
  function change(updates) {
    const q = params();
    q.delete("product");
    Object.entries(updates).forEach(([k, v]) => v && v !== "all" ? q.set(k, v) : q.delete(k));
    history.pushState({}, "", location.pathname + (q.size ? "?" + q : ""));
    render();
  }
  function notify(s) {
    const el = document.querySelector("#toast");
    el.textContent = s;
    el.classList.add("visible");
    clearTimeout(timer);
    timer = setTimeout(() => el.classList.remove("visible"), 2600);
  }
  function card(id) {
    const p = products[id], wish = read().wish.includes(id), shop = id === "moss" ? "moss-hanging" : id;
    const q = params();
    q.set("product", id);
    return `<article class="product"><a class="picture" href="?${escapeHTML(q)}" aria-label="${escapeHTML(p.name)} ${t("\uC0C1\uC138\uBCF4\uAE30", "details")}"><img src="assets/${shop}-shop.webp" alt="${escapeHTML(p.name)}" loading="lazy" width="600" height="750"><img class="alternate" src="${"assets/" + shop + "-shop-detail.webp"}" alt="" loading="lazy" width="600" height="750"></a><div class="product-info"><div><a class="product-name" href="?${escapeHTML(q)}">${p.name}</a><span class="product-category">${p.category}</span><span class="price">${money(p.price)}</span></div><button class="heart" data-wish="${id}" aria-label="${p.name} ${t("\uC704\uC2DC\uB9AC\uC2A4\uD2B8", "wishlist")}" aria-pressed="${wish}"><img src="media/icon-heart${wish ? "-filled" : ""}.svg" alt=""></button></div></article>`;
  }
  function render() {
    pack = "standard";
    qty = 1;
    const q = params(), id = q.get("product");
    if (id) {
      detail(id);
      return;
    }
    const col = q.get("collection") || "all", type = q.get("type") || "all", term = (q.get("q") || "").trim(), wish = q.get("wishlist") === "1", sort = q.get("sort") || "default";
    let ids = Object.keys(products).filter((id2) => {
      const p = products[id2];
      return (col === "all" || p.collection === col) && (type === "all" || p.category === type) && (!wish || read().wish.includes(id2)) && `${p.name} ${p.category} ${p.description} ${{ "01": "\uBAA8\uC2A4 \uC774\uB07C", "02": "\uB3C4\uD30C\uBBFC", "03": "\uB808\uC778 \uB808\uC778\uC2A4 \uBE44" }[p.collection]} ${{ Hanging: "\uD589\uC789", Stack: "\uC2A4\uD0DD", Badge: "\uBC30\uC9C0 \uBC43\uC9C0" }[p.category]}`.toLowerCase().includes(term.toLowerCase());
    });
    if (sort === "name") ids.sort((a, b) => products[a].name.localeCompare(products[b].name));
    if (sort === "price") ids.sort((a, b) => products[a].price - products[b].price);
    const c = collections[col];
    document.title = `${wish ? "Wishlist" : c?.name || "Objects"} \u2014 Vollik`;
    root.innerHTML = `<section class="catalog-heading"><span class="eyebrow">${wish ? "YOUR SELECTION" : c ? "COLLECTION " + col : "THE VOLLIK COLLECTION"}</span><h1>${wish ? "Wishlist" : c?.name || "All objects"}</h1><p>${term ? t("\uAC80\uC0C9 \uACB0\uACFC", "Results for") + " <span data-i18n-skip>\u201C" + escapeHTML(term) + "\u201D</span>" : c ? en() ? c.descriptionEn : c.description : t("\uC77C\uC0C1\uC758 \uAC10\uAC01\uC744 \uC0C8\uB85C\uC6B4 \uD615\uD0DC\uB85C.", "A new form for everyday senses.")}</p></section><section class="catalog" aria-label="${t("\uC0C1\uD488 \uBAA9\uB85D", "Objects")}"><div class="filters"><nav class="collection-filter" aria-label="Collections">${[["all", "All objects"], ...Object.entries(collections).map(([i, c2]) => [i, c2.name])].map(([i, n]) => `<button data-col="${i}" aria-pressed="${i === col}">${n}</button>`).join("")}</nav><nav class="type-filter" aria-label="Object types">${[["all", t("\uC804\uCCB4", "All")], ["Hanging", "Hanging"], ["Stack", "Stack"], ["Badge", "Badge"]].map(([i, n]) => `<button data-type="${i}" aria-pressed="${i === type}">${n}</button>`).join("")}</nav></div><div class="catalog-meta"><span>${String(ids.length).padStart(2, "0")} objects${wish ? " / Wishlist" : ""}</span><label>${t("\uC815\uB82C", "Sort")} <select id="sort" aria-label="${t("\uC0C1\uD488 \uC815\uB82C", "Sort products")}"><option value="default">${t("\uAE30\uBCF8 \uC21C", "Featured")}</option><option value="name">${t("\uC774\uB984 \uC21C", "Name")}</option><option value="price">${t("\uB0AE\uC740 \uAC00\uACA9 \uC21C", "Price: low to high")}</option></select></label></div>${ids.length ? `<div class="grid">${ids.map(card).join("")}</div>` : `<div class="empty-state"><h2>${t(wish ? "\uC544\uC9C1 \uB2F4\uC544\uB454 \uC624\uBE0C\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." : "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uC624\uBE0C\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.", wish ? "Your collection starts here." : "No objects found.")}</h2><p>${t("\uCEEC\uB809\uC158\uC744 \uB458\uB7EC\uBCF4\uACE0 \uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uD615\uD0DC\uB97C \uCC3E\uC544\uBCF4\uC138\uC694.", "Explore the collections to find your next object.")}</p><a class="button solid" href="desktop-shop.html">${t("\uBAA8\uB4E0 \uC624\uBE0C\uC81C \uBCF4\uAE30", "Explore all objects")}</a></div>`}</section>`;
    root.querySelector("#sort").value = sort;
    root.querySelector("#sort").onchange = (e) => change({ sort: e.target.value });
    localizeStatic();
  }
  function detail(id) {
    const p = Object.hasOwn(products, id) ? products[id] : null;
    if (!p) {
      root.innerHTML = `<div class="empty-state"><h1>Object not found</h1><a href="desktop-shop.html">All objects \u2197</a></div>`;
      return;
    }
    const q = params();
    q.delete("product");
    const back = "desktop-shop.html" + (q.size ? "?" + q : "");
    document.title = p.name + " \u2014 Vollik";
    const d = read();
    d.recent = [id, ...d.recent.filter((i) => i !== id)].slice(0, 6);
    save(d);
    root.innerHTML = `<div class="product-breadcrumb"><a href="${escapeHTML(back)}">\u2190 ${t("\uCEEC\uB809\uC158\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30", "Back to collection")}</a><span>${collections[p.collection].name} / ${p.category}</span></div><section class="product-detail"><div class="detail-gallery">${p.gallery.map((src, i) => `<button class="zoom-image" data-zoom="${i}" aria-label="${t("\uC0C1\uD488 \uC0AC\uC9C4 \uD655\uB300", "Enlarge image")} ${i + 1}"><img src="${src}" alt="${p.name} \u2014 ${i + 1}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'}><span>\uFF0B</span></button>`).join("")}</div><div class="detail-copy"><span class="eyebrow">COLLECTION ${p.collection} / ${collections[p.collection].name.toUpperCase()}</span><div class="detail-title"><h1>${p.name}</h1><button class="heart" data-wish="${id}" aria-label="${t("\uC704\uC2DC\uB9AC\uC2A4\uD2B8", "Wishlist")}" aria-pressed="${d.wish.includes(id)}"><img src="media/icon-heart${d.wish.includes(id) ? "-filled" : ""}.svg" alt=""></button></div><p class="detail-category">${p.category} object</p><p class="detail-price">${money(p.price)}</p><p class="description">${en() && p.descriptionEn ? p.descriptionEn : p.description}</p><div class="purchase-quantity"><span>${t("\uC218\uB7C9", "Quantity")}</span><div><button data-qty="-1" aria-label="${t("\uC218\uB7C9 \uC904\uC774\uAE30", "Decrease quantity")}" disabled>\u2212</button><output id="quantity">1</output><button data-qty="1" aria-label="${t("\uC218\uB7C9 \uB298\uB9AC\uAE30", "Increase quantity")}">\uFF0B</button></div></div><button class="button solid add" data-add="${id}">${t("\uC1FC\uD551\uBC31\uC5D0 \uB2F4\uAE30", "Add to bag")}</button><div class="added-actions" hidden><span>${t("\uC1FC\uD551\uBC31\uC5D0 \uB2F4\uC558\uC2B5\uB2C8\uB2E4.", "Added to your bag.")}</span><a href="app.html#cart">${t("\uC1FC\uD551\uBC31 \uBCF4\uAE30", "View bag")} \u2197</a></div><div class="detail-accordions"><details open><summary>${t("\uC624\uBE0C\uC81C \uC815\uBCF4", "Object details")}</summary><p>${objectDetails(p, read().lang)}</p></details><details><summary>${t("\uBC30\uC1A1 \uBC0F \uBC18\uD488", "Shipping & returns")}</summary><p>${t("\uD604\uC7AC\uB294 \uC8FC\uBB38 \uCCB4\uD5D8 \uBC84\uC804\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uACB0\uC81C\uC640 \uBC30\uC1A1\uC740 \uC9C4\uD589\uB418\uC9C0 \uC54A\uC73C\uBA70 \uD310\uB9E4 \uC815\uCC45\uC740 \uC815\uC2DD \uC624\uD508 \uC2DC \uC548\uB0B4\uB429\uB2C8\uB2E4.", "This is a preview shopping experience. No payment or delivery takes place. Sales policies will be available at launch.")}</p></details><details><summary>${t("\uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uC2E0\uAC00\uC694?", "Need assistance?")}</summary><a href="app.html#info/faq">${t("\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38", "FAQ")} \u2197</a></details></div></div></section><section class="related"><div class="section-heading"><h2>${t("\uD568\uAED8 \uC0B4\uD3B4\uBCF4\uAE30", "Explore the collection")}</h2><a href="desktop-shop.html?collection=${p.collection}">${collections[p.collection].name} \u2197</a></div><div class="grid">${Object.keys(products).filter((i) => i !== id && products[i].collection === p.collection).map(card).join("")}</div></section>`;
    localizeStatic();
  }
  root.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.col) change({ collection: b.dataset.col });
    if (b.dataset.type) change({ type: b.dataset.type });
    if (b.dataset.wish) {
      const d = read(), id = b.dataset.wish, on = d.wish.includes(id);
      d.wish = on ? d.wish.filter((i) => i !== id) : [...d.wish, id];
      if (!save(d)) {
        notify(t("\uC800\uC7A5 \uACF5\uAC04\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.", "Storage unavailable."));
        return;
      }
      b.setAttribute("aria-pressed", !on);
      b.querySelector("img").src = `media/icon-heart${on ? "" : "-filled"}.svg`;
      counts();
      if (params().get("wishlist") === "1" && !params().get("product")) render();
      notify(t(on ? "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4." : "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uB2F4\uC558\uC2B5\uB2C8\uB2E4.", on ? "Removed from wishlist." : "Saved to wishlist."));
    }
    if (b.dataset.pack) {
      pack = b.dataset.pack;
      root.querySelectorAll("[data-pack]").forEach((el) => el.setAttribute("aria-pressed", el === b));
    }
    if (b.dataset.qty) {
      qty = Math.min(99, Math.max(1, qty + Number(b.dataset.qty)));
      root.querySelector("#quantity").textContent = qty;
      root.querySelector('[data-qty="-1"]').disabled = qty === 1;
      root.querySelector('[data-qty="1"]').disabled = qty === 99;
    }
    if (b.dataset.add) {
      const d = read();
      d.cart = addItem(d.cart, b.dataset.add, pack, qty);
      if (!save(d)) {
        notify(t("\uC800\uC7A5 \uACF5\uAC04\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.", "Storage unavailable."));
        return;
      }
      counts();
      root.querySelector(".added-actions").hidden = false;
      notify(t("\uC1FC\uD551\uBC31\uC5D0 \uB2F4\uC558\uC2B5\uB2C8\uB2E4.", "Added to your bag."));
    }
  });
  window.addEventListener("popstate", render);
  window.addEventListener("storage", () => {
    counts();
    render();
  });
  render();
  function restoreCatalog() {
    const lang = read().lang;
    if (document.documentElement.lang !== lang) {
      location.reload();
      return;
    }
    if (!params().has("product")) render();
    else root.querySelectorAll("[data-wish]").forEach((button) => {
      const active2 = read().wish.includes(button.dataset.wish);
      button.setAttribute("aria-pressed", active2);
      button.querySelector("img").src = "media/icon-heart" + (active2 ? "-filled" : "") + ".svg";
    });
    counts();
  }
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) restoreCatalog();
  });
  window.addEventListener("storage", (e) => {
    if (e.key === "vollik-test-v2") restoreCatalog();
  });

  // platform.js
  var installEvent;
  var standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  var english = () => document.documentElement.lang === "en";
  function showInstall() {
    const modal = document.createElement("dialog");
    modal.className = "platform-dialog";
    modal.innerHTML = english() ? "<h2>Install Vollik</h2><p>On iPhone or iPad, open this page in Safari, choose Share \u2192 Add to Home Screen \u2192 Add.</p><p>On Android or desktop, choose Install app from your browser menu when available.</p><button>Close</button>" : "<h2>Vollik \uC571 \uC124\uCE58</h2><p>\uC544\uC774\uD3F0\xB7\uC544\uC774\uD328\uB4DC: Safari\uC5D0\uC11C \uC774 \uC8FC\uC18C\uB97C \uC5F4\uACE0 \uACF5\uC720 \u2192 \uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00 \u2192 \uCD94\uAC00\uB97C \uC120\uD0DD\uD558\uC138\uC694.</p><p>Android\xB7PC: \uBE0C\uB77C\uC6B0\uC800 \uBA54\uB274\uC5D0\uC11C \uC571 \uC124\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694. \uC124\uCE58 \uBA54\uB274\uB294 \uBE0C\uB77C\uC6B0\uC800\uC640 \uC811\uC18D \uD658\uACBD\uC5D0 \uB530\uB77C \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p><button>\uB2EB\uAE30</button>";
    document.body.append(modal);
    modal.querySelector("button").onclick = () => modal.close();
    modal.onclose = () => modal.remove();
    modal.showModal();
  }
  function addInstall() {
    if (standalone) return;
    document.querySelectorAll(".footer-bottom,footer:not(.footer),.menu-account,.menu-bottom").forEach((host) => {
      if (host.querySelector(".install-link")) return;
      const b = document.createElement("button");
      b.className = "install-link";
      b.textContent = english() ? "Install Vollik" : "Vollik \uC571 \uC124\uCE58";
      b.onclick = async () => {
        if (installEvent) {
          await installEvent.prompt();
          installEvent = null;
        } else showInstall();
      };
      host.append(b);
    });
  }
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installEvent = e;
    addInstall();
  });
  window.addEventListener("appinstalled", () => document.querySelectorAll(".install-link").forEach((b) => b.remove()));
  new MutationObserver(addInstall).observe(document.body, { childList: true, subtree: true });
  addInstall();
  var network = document.createElement("div");
  network.className = "network-status";
  network.setAttribute("role", "status");
  document.body.append(network);
  function connectivity() {
    network.hidden = navigator.onLine;
    network.textContent = english() ? "Offline. Previously loaded pages may still be available." : "\uC624\uD504\uB77C\uC778\uC785\uB2C8\uB2E4. \uC774\uC804\uC5D0 \uC5F4\uC5C8\uB358 \uD654\uBA74\uB9CC \uD45C\uC2DC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.";
  }
  connectivity();
  window.addEventListener("online", connectivity);
  window.addEventListener("offline", connectivity);
  if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {
  }));
  window.addEventListener("hashchange", () => {
    if (document.documentElement.dataset.experience === "web") {
      const r = location.hash.slice(1).split("?")[0];
      if (["shop", "collection", "status", "archive"].includes(r) || r.startsWith("product/")) location.reload();
    }
  });
})();
