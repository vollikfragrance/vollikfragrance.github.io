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

  // shop-video.js
  function mountShopVideo(root, lang = "ko") {
    if (!root) return () => {
    };
    const video = root.querySelector("video");
    const source = video.querySelector("source");
    let disposed = false, visible = true, failed = false, pending = false;
    let userStarted = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    const play = async () => {
      if (disposed || failed || pending) return;
      pending = true;
      try {
        await video.play();
      } catch {
        if (!disposed && visible && !document.hidden && !video.muted) {
          video.muted = true;
          try {
            await video.play();
          } catch {
          }
        }
      } finally {
        pending = false;
        if (!disposed) {
          if (!visible || document.hidden) video.pause();
        }
      }
    };
    const click = () => {
      if (failed || disposed) return;
      userStarted = true;
      if (video.ended) video.currentTime = 0;
      video.muted = false;
      play();
    };
    const keydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        click();
      }
    };
    const failure = () => {
      if (disposed) return;
      failed = true;
      video.pause();
      video.hidden = true;
      root.style.backgroundImage = `url("${video.poster}")`;
      root.querySelector(".shop-film-error").hidden = false;
    };
    const visibility = () => {
      if (document.hidden) video.pause();
      else if (visible && userStarted) play();
    };
    video.loop = true;
    video.muted = false;
    const observer = new IntersectionObserver((entries2) => {
      visible = entries2[0].isIntersecting;
      if (!visible) video.pause();
      else if (!document.hidden && userStarted) play();
    }, { threshold: 0.2 });
    video.addEventListener("error", failure);
    source.addEventListener("error", failure);
    video.addEventListener("click", click);
    video.addEventListener("keydown", keydown);
    document.addEventListener("visibilitychange", visibility);
    observer.observe(root);
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      video.removeEventListener("error", failure);
      source.removeEventListener("error", failure);
      video.removeEventListener("click", click);
      video.removeEventListener("keydown", keydown);
      video.pause();
      video.removeAttribute("src");
      source.removeAttribute("src");
      video.load();
    };
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
  var price = (n) => Number(n).toLocaleString("ko-KR") + "\uC6D0";
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
  function total(items) {
    return items.reduce((sum, item) => sum + (products[item.id]?.price || 0) * item.qty, 0);
  }
  function addItem(items, id, pack = "standard", qty = 1) {
    qty = Math.max(1, Math.min(99, Math.trunc(Number(qty)) || 1));
    pack = pack === "gift" ? "gift" : "standard";
    if (!Object.hasOwn(products, id)) throw new Error("Unknown product");
    const next = items.map((i) => ({ ...i }));
    const item = next.find((i) => i.id === id && i.pack === pack);
    if (item) item.qty = Math.min(99, item.qty + qty);
    else next.push({ id, pack, qty: Math.max(1, Math.min(99, qty)) });
    return next;
  }
  function createOrder(items, shipping, method, token) {
    if (!items.length) throw new Error("Empty cart");
    if (items.some((i) => !products[i.id] || !Number.isInteger(i.qty) || i.qty < 1 || i.qty > 99)) throw new Error("Invalid items");
    if (!shipping?.name?.trim() || !/^0\d{8,10}$/.test(String(shipping?.phone || "").replace(/[^\d]/g, "")) || !(shipping?.address?.trim().length >= 5)) throw new Error("Invalid shipping");
    const now = /* @__PURE__ */ new Date();
    const id = "TEST-" + now.toLocaleDateString("sv-SE", { timeZone: "Asia/Seoul" }).replaceAll("-", "") + "-" + token.slice(0, 8).toUpperCase();
    return { id, date: now.toISOString(), items: items.map((i) => ({ ...i, name: products[i.id].name, unitPrice: products[i.id].price })), shipping: { name: shipping.name.trim(), phone: shipping.phone, address: shipping.address.trim() }, method, total: total(items), status: "\uD14C\uC2A4\uD2B8 \uACB0\uC81C \uC644\uB8CC", token };
  }
  var collections = {
    "01": { name: "Moss", image: "assets/moss-stack.webp", description: "\uC774\uB07C\uC758 \uBD80\uB4DC\uB7EC\uC6B4 \uD45C\uBA74\uACFC \uD758\uB7EC\uB0B4\uB9AC\uB294 \uD615\uD0DC.", descriptionEn: "Soft moss textures and flowing forms." },
    "02": { name: "Dopamine", image: "assets/dopamine-stack-shop.webp", description: "\uAC10\uAC01\uC774 \uAE68\uC5B4\uB098\uB294 \uC21C\uAC04\uC758 \uC120\uBA85\uD55C \uC0C9\uACFC \uAE34\uC7A5.", descriptionEn: "Vivid color and tension as the senses awaken." },
    "03": { name: "Rains", image: "assets/rains-stack-shop.webp", description: "\uC138\uCC28\uAC8C \uB0B4\uB9B0 \uBE44\uAC00 \uB0A8\uAE34 \uBB3C\uACB0\uC758 \uD754\uC801.", descriptionEn: "Traces of rippling water after heavy rain." }
  };
  function productIds(collection2 = "all", category = "all") {
    return Object.keys(products).filter((id) => (collection2 === "all" || products[id].collection === collection2) && (category === "all" || category === "new" || category === "best" || products[id].category.toLowerCase() === category));
  }
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
    for (const [ko, en] of entries) text = text.split(ko).join(en);
    return text.replace(/([\d,]+)원/g, "\u20A9$1").replace(/님(?=\s*$)/, "");
  }
  function localize(root, lang) {
    if (lang !== "en") return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => n.parentElement?.closest("[data-i18n-skip],input,textarea,script,style") || n.parentElement?.closest("[lang]") && n.parentElement.closest("[lang]") !== document.documentElement ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    let node;
    while (node = walker.nextNode()) node.nodeValue = translate(node.nodeValue, lang);
    root.querySelectorAll("[placeholder],[aria-label],img[alt]").forEach((el) => {
      for (const attr of ["placeholder", "aria-label", "alt"]) if (el.hasAttribute(attr)) el.setAttribute(attr, translate(el.getAttribute(attr), lang));
    });
  }

  // motion.js
  var Suspension = class {
    constructor(width, height) {
      this.resize(width, height);
    }
    resize(width, height) {
      this.w = width;
      this.h = height;
      this.scale = Math.min(width / 402, height / 874);
      this.bodyWidth = 340 * this.scale;
      this.rest = { x: width * 0.49, y: 195 * this.scale };
      this.mass = { ...this.rest, px: this.rest.x, py: this.rest.y };
      this.anchors = [{ x: this.rest.x - 43 * this.scale, y: -15 }, { x: this.rest.x + 43 * this.scale, y: -15 }];
      this.n = 44;
      this.length = Math.hypot(43 * this.scale, this.rest.y + 15);
      this.segment = this.length / this.n;
      this.chains = this.anchors.map((a) => Array.from({ length: this.n + 1 }, (_, i) => {
        const x = a.x + (this.rest.x - a.x) * i / this.n, y = a.y + (this.rest.y - a.y) * i / this.n;
        return { x, y, px: x, py: y };
      }));
      this.rotation = 0;
      this.spin = 0;
      this.dragging = false;
      this.asleep = true;
      this.settleTicks = 0;
    }
    constrain(p) {
      p.y = Math.max(20 * this.scale, p.y);
      const inside = (q) => this.anchors.every((a) => Math.hypot(q.x - a.x, q.y - a.y) <= this.length + 1e-8);
      if (!inside(p)) {
        const candidates = [{ ...this.rest }];
        for (const a of this.anchors) {
          const dx = p.x - a.x, dy = p.y - a.y, d = Math.hypot(dx, dy);
          const q = { x: a.x + dx / d * this.length, y: a.y + dy / d * this.length };
          if (inside(q)) candidates.push(q);
        }
        candidates.sort((a, b) => Math.hypot(a.x - p.x, a.y - p.y) - Math.hypot(b.x - p.x, b.y - p.y));
        p.x = candidates[0].x;
        p.y = candidates[0].y;
      }
      return p;
    }
    setDrag(x, y) {
      this.dragging = true;
      this.asleep = false;
      this.settleTicks = 0;
      const m = this.mass, p = this.constrain({ x, y });
      m.x = p.x;
      m.y = p.y;
      m.px = p.x;
      m.py = p.y;
    }
    release(vx = 0, vy = 0) {
      this.dragging = false;
      const max = 900 * this.scale;
      this.mass.px = this.mass.x - Math.max(-max, Math.min(max, vx)) / 120;
      this.mass.py = this.mass.y - Math.max(-max, Math.min(max, vy)) / 120;
      this.asleep = false;
      this.settleTicks = 0;
    }
    impulse(vx = 140, vy = -100) {
      this.release(vx * this.scale, vy * this.scale);
    }
    solveChain(chain, a, m) {
      const n = this.n, l = this.segment, dx = m.x - a.x, dy = m.y - a.y, d = Math.hypot(dx, dy);
      if (d >= this.length - 0.015) {
        for (let i = 0; i <= n; i++) {
          chain[i].x = a.x + dx * i / n;
          chain[i].y = a.y + dy * i / n;
        }
        return;
      }
      for (let pass = 0; pass < 240; pass++) {
        chain[n].x = m.x;
        chain[n].y = m.y;
        for (let i = n - 1; i >= 0; i--) {
          const p = chain[i], q = chain[i + 1], x = p.x - q.x, y = p.y - q.y, r = Math.hypot(x, y) || 1;
          p.x = q.x + x / r * l;
          p.y = q.y + y / r * l;
        }
        chain[0].x = a.x;
        chain[0].y = a.y;
        for (let i = 1; i <= n; i++) {
          const p = chain[i], q = chain[i - 1], x = p.x - q.x, y = p.y - q.y, r = Math.hypot(x, y) || 1;
          p.x = q.x + x / r * l;
          p.y = q.y + y / r * l;
        }
        if (Math.hypot(chain[n].x - m.x, chain[n].y - m.y) < 0.015) break;
      }
      if (Math.hypot(chain[n].x - m.x, chain[n].y - m.y) > 0.015) {
        let lo = 0, hi = 2 * Math.PI / n;
        for (let k = 0; k < 48; k++) {
          const theta2 = (lo + hi) / 2, chord = l * Math.sin(n * theta2 / 2) / Math.sin(theta2 / 2);
          if (chord > d) lo = theta2;
          else hi = theta2;
        }
        const theta = (lo + hi) / 2, axis = Math.atan2(dy, dx);
        const cross = chain.reduce((sum, p) => sum + (p.x - a.x) * dy - (p.y - a.y) * dx, 0);
        const sign = cross >= 0 ? 1 : -1;
        let x = a.x, y = a.y;
        chain[0].x = x;
        chain[0].y = y;
        for (let i = 1; i <= n; i++) {
          const angle = axis + sign * (i - 1 - (n - 1) / 2) * theta;
          x += l * Math.cos(angle);
          y += l * Math.sin(angle);
          chain[i].x = x;
          chain[i].y = y;
        }
      }
      chain[n].x = m.x;
      chain[n].y = m.y;
    }
    step(dt = 1 / 120, reduced = false) {
      const m = this.mass, oldX = m.x, oldY = m.y, g = 1150 * this.scale;
      if (!this.dragging) {
        let vx = (m.x - m.px) * (reduced ? 0.91 : 0.997), vy = (m.y - m.py) * (reduced ? 0.91 : 0.997);
        m.px = m.x;
        m.py = m.y;
        m.x += vx;
        m.y += vy + g * dt * dt;
        this.constrain(m);
        vx = m.x - m.px;
        vy = m.y - m.py;
        for (const a of this.anchors) {
          const dx = m.x - a.x, dy = m.y - a.y, d = Math.hypot(dx, dy);
          if (d >= this.length - 0.02) {
            const dot = (vx * dx + vy * dy) / (d * d);
            if (dot > 0) {
              vx -= dot * dx;
              vy -= dot * dy;
            }
          }
        }
        m.px = m.x - vx;
        m.py = m.y - vy;
      }
      let linkMotion = 0;
      for (let ci = 0; ci < 2; ci++) {
        const chain = this.chains[ci];
        for (let i = 1; i < this.n; i++) {
          const p = chain[i], vx = (p.x - p.px) * 0.985, vy = (p.y - p.py) * 0.985;
          p.px = p.x;
          p.py = p.y;
          p.x += vx;
          p.y += vy + g * dt * dt;
        }
        this.solveChain(chain, this.anchors[ci], m);
        for (let i = 1; i < this.n; i++) linkMotion = Math.max(linkMotion, Math.hypot(chain[i].x - chain[i].px, chain[i].y - chain[i].py));
      }
      const ax = (m.x - oldX) / Math.max(dt, 1e-3);
      this.spin += (-Math.sin(this.rotation) * 18 - ax * 0.017) * dt;
      this.spin *= reduced ? 0.85 : 0.986;
      this.rotation = Math.max(-0.48, Math.min(0.48, this.rotation + this.spin * dt));
      const speed = Math.hypot(m.x - m.px, m.y - m.py);
      if (!this.dragging && speed < 0.018 && linkMotion < 0.07 && Math.abs(this.rotation) < 3e-3) {
        if (++this.settleTicks > 90) this.asleep = true;
      } else this.settleTicks = 0;
      return { dx: m.x - oldX, dy: m.y - oldY };
    }
  };
  function mountSuspension(stage, lang, getScentIndex) {
    const canvas = stage.querySelector("canvas"), body = stage.querySelector(".hanging-body"), hit = stage.querySelector(".object-grab"), ctx = canvas.getContext("2d");
    let sim, raf = 0, prev = 0, acc = 0, drag = null;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const phrases2 = lang === "en" ? ["The scent is full", "Plenty of scent remains", "The scent is subtle", "The scent is noticeable only up close", "Very little scent remains"] : ["\uD5A5\uC774 \uAC00\uB4DD\uD574\uC694", "\uD5A5\uC774 \uCDA9\uBD84\uD788 \uB0A8\uC544 \uC788\uC5B4\uC694", "\uD5A5\uC774 \uC740\uC740\uD574\uC694", "\uAC00\uAE4C\uC774\uC5D0\uC11C\uB9CC \uD5A5\uC774 \uB290\uAEF4\uC838\uC694", "\uD5A5\uC774 \uAC70\uC758 \uB0A8\uC9C0 \uC54A\uC558\uC5B4\uC694"];
    const notice = document.createElement("div");
    notice.className = "scent-notice";
    notice.setAttribute("role", "status");
    stage.append(notice);
    let hideTimer;
    function showScent() {
      clearTimeout(hideTimer);
      notice.textContent = phrases2[getScentIndex()];
      notice.classList.add("visible");
      if (document.documentElement.classList.contains("embedded-status")) parent.postMessage("vollik:status-moved", location.protocol === "file:" ? "*" : location.origin);
      hideTimer = setTimeout(() => notice.classList.remove("visible"), 2e3);
    }
    function size() {
      drag = null;
      const r = stage.getBoundingClientRect();
      sim = new Suspension(r.width, r.height);
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      canvas.style.width = r.width + "px";
      canvas.style.height = r.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }
    function draw() {
      const w = sim.bodyWidth, m = sim.mass;
      body.style.width = w + "px";
      body.style.height = w * (1281 / 1227) + "px";
      body.style.transform = `translate(${m.x - w * 0.5}px,${m.y - w * (60 / 1227)}px) rotate(${sim.rotation}rad)`;
      ctx.clearRect(0, 0, sim.w, sim.h);
      for (const chain of sim.chains) {
        for (let i = 0; i < chain.length - 1; i++) {
          const a = chain[i], b = chain[i + 1], dx = b.x - a.x, dy = b.y - a.y, dist = Math.hypot(dx, dy), angle = Math.atan2(dy, dx);
          const count = Math.max(1, Math.ceil(dist / 4));
          for (let j = 0; j < count; j++) {
            const t2 = (j + 0.5) / count;
            ctx.save();
            ctx.translate(a.x + dx * t2, a.y + dy * t2);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.ellipse(0, 0, Math.max(1.65, dist / count * 0.61), (i + j) % 2 ? 1.25 : 0.65, 0, 0, Math.PI * 2);
            ctx.strokeStyle = "#7b7970";
            ctx.lineWidth = 0.85;
            ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(-0.2, -0.35, Math.max(1.4, dist / count * 0.52), 0.75, 0, Math.PI * 0.05, Math.PI * 0.9);
            ctx.strokeStyle = "#edece5";
            ctx.lineWidth = 0.65;
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      stage.dataset.motion = drag ? "dragging" : sim.asleep ? "rest" : "swinging";
      stage.dataset.ringX = sim.mass.x.toFixed(2);
      stage.dataset.ringY = sim.mass.y.toFixed(2);
    }
    function run(time) {
      raf = 0;
      if (document.hidden) return;
      const dt = prev ? Math.min((time - prev) / 1e3, 0.04) : 1 / 60;
      prev = time;
      acc += dt;
      while (acc >= 1 / 120) {
        sim.step(1 / 120, reduced.matches);
        acc -= 1 / 120;
      }
      draw();
      if (!sim.asleep || drag) raf = requestAnimationFrame(run);
      else prev = 0;
    }
    function start() {
      if (!raf) {
        prev = 0;
        raf = requestAnimationFrame(run);
      }
    }
    function point(e) {
      const r = stage.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }
    function down(e) {
      if (drag || !e.isPrimary || e.pointerType === "mouse" && e.button !== 0) return;
      e.preventDefault();
      const p = point(e);
      drag = { id: e.pointerId, dx: sim.mass.x - p.x, dy: sim.mass.y - p.y, x: p.x, y: p.y, moved: false, samples: [{ x: sim.mass.x, y: sim.mass.y, t: performance.now() }] };
      sim.dragging = true;
      sim.asleep = false;
      hit.setPointerCapture(e.pointerId);
      start();
    }
    function move2(e) {
      if (!drag || drag.id !== e.pointerId) return;
      e.preventDefault();
      const p = point(e), now = performance.now();
      if (Math.hypot(p.x - drag.x, p.y - drag.y) > 3) drag.moved = true;
      sim.setDrag(p.x + drag.dx, p.y + drag.dy);
      drag.samples.push({ x: sim.mass.x, y: sim.mass.y, t: now });
      drag.samples = drag.samples.filter((s) => now - s.t < 100);
      draw();
    }
    function up(e, cancel2 = false) {
      if (!drag || drag.id !== e.pointerId) return;
      const d = drag;
      drag = null;
      let vx = 0, vy = 0;
      const first = d.samples[0], last = d.samples.at(-1), elapsed = last.t - first.t;
      if (!cancel2 && !d.moved) {
        vx = d.x < sim.w / 2 ? -120 : 120;
        vy = -75;
      } else if (!cancel2 && elapsed > 0 && performance.now() - last.t < 100) {
        vx = (last.x - first.x) / (elapsed / 1e3);
        vy = (last.y - first.y) / (elapsed / 1e3);
      }
      sim.release(vx, vy);
      if (!cancel2) showScent();
      if (hit.hasPointerCapture(e.pointerId)) hit.releasePointerCapture(e.pointerId);
      start();
    }
    function key(e) {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " ", "Enter", "Home", "Escape"].includes(e.key)) return;
      e.preventDefault();
      if (["Home", "Escape"].includes(e.key)) {
        size();
        return;
      }
      showScent();
      sim.impulse(e.key === "ArrowLeft" ? -160 : e.key === "ArrowRight" ? 160 : 0, e.key === "ArrowDown" ? 100 : -180);
      start();
    }
    const cancel = (e) => up(e, true);
    hit.addEventListener("pointerdown", down);
    hit.addEventListener("pointermove", move2);
    hit.addEventListener("pointerup", up);
    hit.addEventListener("pointercancel", cancel);
    hit.addEventListener("lostpointercapture", cancel);
    hit.addEventListener("keydown", key);
    const ro = new ResizeObserver(size);
    ro.observe(stage);
    const visibility = () => {
      if (document.hidden) {
        if (drag) {
          drag = null;
          sim.release();
        }
        cancelAnimationFrame(raf);
        raf = 0;
        prev = 0;
      } else start();
    };
    document.addEventListener("visibilitychange", visibility);
    size();
    return () => {
      clearTimeout(hideTimer);
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }

  // app.js
  var app = document.querySelector("#app");
  var header = document.querySelector("#header");
  var tabs = document.querySelector("#tabs");
  var shell = document.querySelector("#shell");
  var modal = document.querySelector("#modal");
  var uuid = () => crypto.randomUUID?.() || Array.from(crypto.getRandomValues(new Uint8Array(16)), (n) => n.toString(16).padStart(2, "0")).join("");
  var KEY = "vollik-test-v2";
  var data;
  try {
    data = normalize(JSON.parse(localStorage.getItem(KEY)));
  } catch {
    data = defaults();
  }
  var cleanupMotion;
  var route = "";
  var params = new URLSearchParams();
  var toastTimer;
  var menuCollection = "";
  var lastShop = "#shop";
  var selectedPack = "standard";
  var quantity = 1;
  var galleryIndex = 0;
  var payment = "card";
  var checkoutSnapshot = null;
  var paymentBusy = false;
  var pendingToken = null;
  var shippingDraft = { name: "", phone: "", address: "" };
  var resetShopHome = false;
  var renderedHash = "";
  var shopRoute = "#shop";
  var restoreView = false;
  var views = /* @__PURE__ */ new Map();
  var t = (s) => translate(s, data.lang);
  function captureView() {
    if (renderedHash) views.set(renderedHash, { scroll: app.scrollTop, pack: selectedPack, quantity, gallery: galleryIndex, details: [...app.querySelectorAll("details")].map((d) => d.open) });
  }
  function restoreCurrent() {
    const v = views.get(renderedHash);
    if (!v) return;
    selectedPack = v.pack;
    quantity = v.quantity || 1;
    updateProductQuantity();
    galleryIndex = v.gallery;
    app.querySelectorAll("[data-action=pack]").forEach((b) => {
      const on = b.dataset.pack === selectedPack;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on);
    });
    const pi = app.querySelector("#pack-info");
    if (pi) pi.textContent = t(selectedPack === "gift" ? "\uAE30\uD504\uD2B8 \uC138\uD2B8" : "\uC2A4\uD0E0\uB2E4\uB4DC");
    const track = app.querySelector("#gallery-track");
    if (track) {
      track.scrollLeft = v.gallery * track.clientWidth;
      markGallery(v.gallery);
    }
    app.querySelectorAll("details").forEach((d, i) => d.open = !!v.details[i]);
    app.scrollTop = v.scroll;
  }
  var methods = { card: "\uC2E0\uC6A9\uCE74\uB4DC / \uCCB4\uD06C\uCE74\uB4DC", kakao: "\uCE74\uCE74\uC624\uD398\uC774", naver: "\uB124\uC774\uBC84\uD398\uC774", apple: "\uC560\uD50C\uD398\uC774" };
  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch {
      notify("\uC800\uC7A5 \uACF5\uAC04\uC774 \uBD80\uC871\uD574 \uC774\uBC88 \uD654\uBA74\uC5D0\uC11C\uB9CC \uC720\uC9C0\uB429\uB2C8\uB2E4.");
    }
  }
  function notify(message) {
    const t2 = document.querySelector("#toast");
    clearTimeout(toastTimer);
    t2.textContent = translate(message, data.lang);
    t2.classList.add("visible");
    toastTimer = setTimeout(() => t2.classList.remove("visible"), 2600);
  }
  function icon(name, filled = false) {
    if (name === "heart" && filled) name = "heart-filled";
    return `<img src="media/icon-${name}.svg" alt="" aria-hidden="true">`;
  }
  function go(hash) {
    if (location.hash === hash) render();
    else location.hash = hash;
  }
  function cta(label, href, kind = "solid") {
    return `<a class="button ${kind}" href="${href}">${label}</a>`;
  }
  function headerHTML() {
    return `<button class="icon-button menu-open" data-action="menu" aria-label="\uBA54\uB274 \uC5F4\uAE30">${icon("menu")}</button><a class="brand" data-action="shop-home" href="#shop" aria-label="Vollik \uD648"><img src="media/logo.png" alt="vollik"></a><div class="header-right"><a class="icon-button" href="#search" aria-label="\uAC80\uC0C9">${icon("search")}</a><a class="icon-button bag-link" href="#cart" aria-label="\uC7A5\uBC14\uAD6C\uB2C8">${icon("bag")}${data.cart.length ? '<span class="bag-dot"></span>' : ""}</a></div>`;
  }
  function navigation() {
    const active2 = route === "status" ? "status" : route === "archive" ? "archive" : "shop";
    return ["archive", "status", "shop"].map((id) => `<a href="${id === "shop" ? escapeHTML(shopRoute) : "#" + id}" ${id === "shop" ? 'data-action="shop-tab"' : ""} ${id === active2 ? 'aria-current="page"' : ""}>${id[0].toUpperCase() + id.slice(1)}</a>`).join("");
  }
  function productImage(id, cls = "", src = products[id].image) {
    const p = products[id];
    return `<span class="product-image ${cls} ${id} ${p.studio ? "studio" : ""}"><img src="${src}" alt="${p.name}" loading="lazy"></span>`;
  }
  function card(id, { wish = false, compact = false } = {}) {
    const p = products[id];
    return `<article class="product-card ${compact ? "compact" : ""}"><a href="#product/${id}" aria-label="${p.name} \uC0C1\uC138\uBCF4\uAE30">${productImage(id)}</a><button class="heart ${data.wish.includes(id) ? "selected" : ""}" data-action="wish" data-id="${id}" aria-label="${p.name} ${data.wish.includes(id) ? "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC0AD\uC81C" : "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uCD94\uAC00"}" aria-pressed="${data.wish.includes(id)}">${icon("heart", data.wish.includes(id))}</button><div class="card-info"><a href="#product/${id}">${p.name}</a>${wish || compact ? `<span>${price(p.price)}</span>` : ""}</div>${wish ? `<button class="button solid small" data-action="quick-add" data-id="${id}">\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30</button>` : compact ? "" : `<p class="card-price">${price(p.price)}</p>`}</article>`;
  }
  function footer() {
    return `<footer class="footer"><div class="footer-links"><div><a href="#orders">\uC8FC\uBB38 \uC870\uD68C</a><a href="#info/faq">FAQ</a></div><div><a href="#info/legal">\uBC95\uC801 \uACE0\uC9C0</a><a href="#info/privacy"><strong>\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68</strong></a></div></div><div class="footer-bottom"><p>\uC624\uBE0C\uC81C, \uD5A5\uAE30, \uADF8\uB9AC\uACE0 \uACF5\uAC04.</p><span>\xA9 Vollik</span><small>\uC8FC\uBB38 \uCCB4\uD5D8 \uBC84\uC804 \xB7 \uC2E4\uC81C \uACB0\uC81C \uBC0F \uBC30\uC1A1\uC740 \uC9C4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</small></div></footer>`;
  }
  function status() {
    return `<section class="status-scene" aria-label="\uC6C0\uC9C1\uC774\uB294 Melted Moss \uC624\uBE0C\uC81C"><div class="landscape"></div><canvas class="chains" aria-hidden="true"></canvas><div class="hanging-body"><img class="body-texture" src="media/moss-status-cutout.png" alt="Melted Moss" draggable="false"><button class="object-grab" aria-label="\uC624\uBE0C\uC81C \uC6C0\uC9C1\uC774\uAE30. \uC0C1\uD558\uC88C\uC6B0\uB85C \uB4DC\uB798\uADF8\uD558\uC138\uC694. \uBC29\uD5A5\uD0A4\uB85C \uC6C0\uC9C1\uC774\uACE0 Home \uD0A4\uB85C \uCD08\uAE30\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."></button></div></section>`;
  }
  function archive() {
    return `<section class="archive-scene"><div class="landscape"></div><div class="archive-grid">${data.archive.map((o, i) => `<button class="archive-card" data-action="activate-object" data-index="${i}" aria-label="${escapeHTML(products[o.product].name)} \uC5F4\uAE30"><span><img src="${products[o.product].gallery[0]}" alt="${escapeHTML(products[o.product].name)}"></span><p>${escapeHTML(archiveLabel(o.product))}</p></button>`).join("")}<button class="archive-card archive-add" data-action="archive-add" aria-label="\uC624\uBE0C\uC81C \uCD94\uAC00"><span><i aria-hidden="true"></i></span></button></div></section>`;
  }
  function archiveLabel(id) {
    const p = products[id];
    return `${collections[p.collection].name}-${id === "dopamine-hanging2" ? "H2" : p.category[0]}`;
  }
  function removeArchive(recordId) {
    const record = data.archive.find((item) => item.id === recordId);
    if (!record) return;
    data.archive = data.archive.filter((item) => item.id !== recordId);
    persist();
    modal.close();
    restoreView = true;
    render();
  }
  function openArchive(index) {
    const o = data.archive[index];
    if (!o) return;
    const p = products[o.product];
    showModal(escapeHTML(p.name), `<div class="archive-preview">${productImage(o.product, "", p.gallery[0])}</div><p>${p.category} \xB7 ${collections[p.collection].name}</p><p>${data.lang === "en" && p.descriptionEn ? p.descriptionEn : p.description}</p>${o.product === "moss" ? `<label class="scent-record">${data.lang === "en" ? "My scent record" : "\uB098\uC758 \uC794\uD5A5 \uAE30\uB85D"}<select id="scent-record">${(data.lang === "en" ? ["Full", "Plenty", "Subtle", "Close up", "Almost gone"] : ["\uAC00\uB4DD", "\uB109\uB109", "\uC740\uC740", "\uC605\uC74C", "\uB05D\uC790\uB77D"]).map((label, i) => `<option value="${i}" ${data.scentIndex === i ? "selected" : ""}>${label}</option>`).join("")}</select></label>` : ""}${o.product === "moss" ? cta("\uC624\uBE0C\uC81C \uC6C0\uC9C1\uC774\uAE30", "#status") : ""}${cta("\uC81C\uD488 \uC790\uC138\uD788 \uBCF4\uAE30", "#product/" + o.product, "outline")}<button class="plain-button" data-action="remove-archive" data-id="${escapeHTML(o.id)}">\uAE30\uB85D \uC0AD\uC81C</button>`, "archive-dialog");
  }
  function archivePicker() {
    showModal("\uC624\uBE0C\uC81C \uCD94\uAC00", `<p>\uC18C\uC7A5\uD55C \uC624\uBE0C\uC81C\uB97C \uC120\uD0DD\uD574 \uAE30\uB85D\uD558\uC138\uC694. \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.</p><div class="archive-picker">${Object.keys(products).map((id) => `<button data-action="confirm-archive" data-id="${id}">${productImage(id, "", products[id].gallery[0])}<span>${escapeHTML(products[id].name)}</span></button>`).join("")}</div>`, "archive-dialog");
  }
  function registerOrder(id) {
    const o = data.orders.find((o2) => o2.id === id);
    if (!o || o.status === "\uD14C\uC2A4\uD2B8 \uC8FC\uBB38 \uCDE8\uC18C") return;
    for (const item of o.items) {
      if (!data.archive.some((a) => a.orderId === id && a.product === item.id)) data.archive.push({ id: uuid(), product: item.id, name: products[item.id].name, orderId: id });
    }
    persist();
    go("#archive");
  }
  function home() {
    return `<section class="mobile-campaign"><div class="shop-film"><video class="shop-film-video" tabindex="0" loop playsinline preload="metadata" poster="media/wardrobe-mobile-poster.jpg" aria-label="\uC7A5\uB871\uC774 \uC5F4\uB9AC\uBA70 Moss \uC624\uBE0C\uC81C\uAC00 \uB098\uD0C0\uB098\uB294 Vollik \uC601\uC0C1"><source src="media/wardrobe-mobile-sound.mp4" type="video/mp4"></video><span class="shop-film-error" hidden>${data.lang === "en" ? "The film could not load. Visit the shop below." : "\uC601\uC0C1\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC544\uB798\uC5D0\uC11C \uC0F5\uC73C\uB85C \uC774\uB3D9\uD574 \uC8FC\uC138\uC694."}</span><a class="film-collection-link" href="#collection">${data.lang === "en" ? "Shop now" : "\uC0F5 \uBC14\uB85C\uAC00\uAE30"}</a></div></section><section class="collection-discovery"><div class="section-label"><h2>Collections</h2><a href="#collection">${data.lang === "en" ? "View all" : "\uC804\uCCB4\uBCF4\uAE30"} \u2197</a></div>${Object.entries(collections).map(([id, c]) => `<a class="collection-feature" href="#collection?collection=${id}"><img src="assets/${{ "01": "moss", "02": "dopamine", "03": "rains" }[id]}-stack-gallery.webp" alt="${c.name} collection" loading="lazy"><div><small>COLLECTION ${id}</small><h2>${c.name}</h2><p>${data.lang === "en" ? c.descriptionEn : c.description}</p><span>${productIds(id).length} objects \u2197</span></div></a>`).join("")}</section><section class="mobile-brand-note"><span>OBJECTS, SCENT AND SPACE</span><h2>${data.lang === "en" ? "Where scent lingers." : "\uD5A5\uC774 \uBA38\uBB38 \uC790\uB9AC."}</h2><p>${data.lang === "en" ? "Objects remembered through scent and form." : "\uD5A5\uACFC \uD615\uD0DC\uB85C \uAE30\uC5B5\uB418\uB294 \uC624\uBE0C\uC81C.<br>\uC77C\uC0C1\uC758 \uAC10\uAC01\uC744 \uC0C8\uB85C\uC6B4 \uD615\uD0DC\uB85C \uC81C\uC548\uD569\uB2C8\uB2E4."}</p><a href="#archive">My archive \u2197</a></section>${footer()}`;
  }
  function collection() {
    const category = params.get("category"), collection2 = params.get("collection");
    const filter = ["hanging", "stack", "badge"].includes(category) ? category : "all", col = Object.hasOwn(collections, collection2) ? collection2 : "all", c = collections[col];
    const list = productIds(col, filter);
    return `<div class="collection-switch" aria-label="Collections">${[["all", "All"], ...Object.entries(collections).map(([id, c2]) => [id, c2.name])].map(([id, name]) => `<a href="#collection?collection=${id}&category=${filter}" class="${id === col ? "active" : ""}" ${id === col ? 'aria-current="page"' : ""}>${name}</a>`).join("")}</div><div class="category-tabs">${[["all", "\uC804\uCCB4\uBCF4\uAE30"], ["hanging", "Hanging"], ["badge", "Badge"], ["stack", "Stack"]].map(([key, label]) => `<a class="pill ${key === filter ? "active" : ""}" href="#collection?collection=${col}&category=${key}">${label}</a>`).join("")}</div>${c ? `<div class="collection-banner photo-banner"><img src="${c.image}" alt=""><div><small>Collection ${col}</small><h1>${c.name}</h1></div></div>` : '<div class="all-collections-title"><h1>All objects</h1><p>Hanging \xB7 Badge \xB7 Stack</p></div>'}<div class="breadcrumb"><span>Shop&nbsp; \u203A &nbsp;${c ? c.name : "\uC804\uCCB4\uBCF4\uAE30"} (${list.length})</span><button data-action="filter">\uD544\uD130</button></div>${list.length ? `<div class="product-grid">${list.map((id) => card(id)).join("")}</div>` : '<div class="empty-category">\uC774 \uCEEC\uB809\uC158\uC5D0 \uB4F1\uB85D\uB41C \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>'}${footer()}`;
  }
  function productPage(id) {
    const p = Object.hasOwn(products, id) ? products[id] : null;
    if (!p) return `<div class="padded">\uC81C\uD488\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.${cta("\uC804\uCCB4\uBCF4\uAE30", "#collection")}</div>`;
    return `<div class="breadcrumb"><a href="#collection?collection=${p.collection}">Shop&nbsp; \u203A &nbsp;${collections[p.collection].name} \xB7 ${p.category}</a></div><section class="product-gallery ${p.studio ? "studio-gallery" : ""}" aria-label="\uC81C\uD488 \uC774\uBBF8\uC9C0"><div class="gallery-track" id="gallery-track">${p.gallery.map((src, i) => `<img src="${src}" alt="${p.name} \uC0C1\uC138 \uC774\uBBF8\uC9C0 ${i + 1}" ${i ? 'loading="lazy"' : ""}>`).join("")}</div></section><div class="gallery-dots">${p.gallery.map((_, i) => `<button data-action="gallery" data-index="${i}" class="${i === 0 ? "active" : ""}" aria-label="\uC81C\uD488 \uC774\uBBF8\uC9C0 ${i + 1}" ${i === 0 ? 'aria-current="true"' : ""}></button>`).join("")}</div><div class="product-title-row"><h1>${p.name}</h1><span>${price(p.price)}</span></div><p class="product-description">${data.lang === "en" && p.descriptionEn ? p.descriptionEn : p.description}</p><div class="thumbnails">${p.gallery.map((src, i) => `<button data-action="gallery" data-index="${i}" class="${i === 0 ? "active" : ""}" aria-label="\uC0C1\uC138 \uC0AC\uC9C4 ${i + 1} \uBCF4\uAE30"><img src="${src}" alt=""></button>`).join("")}</div><div class="purchase-options"><div class="app-quantity"><span>\uC218\uB7C9</span><div><button type="button" data-action="product-qty" data-delta="-1" aria-label="\uC218\uB7C9 \uC904\uC774\uAE30" disabled>\u2212</button><output id="product-quantity">1</output><button type="button" data-action="product-qty" data-delta="1" aria-label="\uC218\uB7C9 \uB298\uB9AC\uAE30">+</button></div></div><div class="product-total"><span>Total</span><strong id="product-total">${money(p.price)}</strong></div><div class="purchase-row"><button class="wish-large ${data.wish.includes(id) ? "selected" : ""}" data-action="wish" data-id="${id}" aria-label="\uC704\uC2DC\uB9AC\uC2A4\uD2B8 ${data.wish.includes(id) ? "\uC0AD\uC81C" : "\uCD94\uAC00"}" aria-pressed="${data.wish.includes(id)}">${icon("heart", data.wish.includes(id))}</button><button class="button solid" data-action="add-cart" data-id="${id}">\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30</button></div></div><div class="accordions">${[["\uC81C\uD488 \uC138\uBD80 \uC815\uBCF4", objectDetails(p, data.lang)], ["\uCDE8\uAE09 \uC2DC \uC8FC\uC758\uC0AC\uD56D", "\uC0AC\uC6A9 \uC804 \uC81C\uD488\uC5D0 \uB3D9\uBD09\uB41C \uC548\uB0B4\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694. \uC0C1\uC138 \uC0AC\uC6A9 \uC548\uB0B4\uB294 \uCD9C\uC2DC \uC2DC \uC81C\uACF5\uB429\uB2C8\uB2E4."], ["\uBC30\uC1A1 & \uBC18\uD488 \uC815\uCC45", "\uD604\uC7AC\uB294 \uC8FC\uBB38 \uCCB4\uD5D8 \uBC84\uC804\uC73C\uB85C \uC2E4\uC81C \uBC30\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC815\uC2DD \uBC30\uC1A1\uBE44\uC640 \uAD50\uD658\xB7\uBC18\uD488 \uC815\uCC45\uC740 \uD310\uB9E4 \uC2DC\uC791 \uC804 \uC548\uB0B4\uB429\uB2C8\uB2E4."], ["\uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uC2E0\uAC00\uC694?", '<a href="#info/faq">FAQ</a> \xB7 <a href="#orders">\uC8FC\uBB38 \uC870\uD68C</a>']].map(([title, body]) => `<details><summary>${title}<span>+</span></summary><div>${body}</div></details>`).join("")}</div><section class="recommend"><h2>\uCD94\uCC9C\uC0C1\uD488</h2><div class="recommend-list">${Object.keys(products).filter((key) => key !== id).sort((a, b) => Number(products[b].collection === p.collection) - Number(products[a].collection === p.collection)).slice(0, 3).map((key) => card(key, { compact: true })).join("")}</div></section>${footer()}`;
  }
  function bagTabs(wish = false) {
    return `<div class="bag-tabs"><a href="#cart" class="pill ${!wish ? "active" : ""}">\uC1FC\uD551\uBC31</a><a href="#wishlist" class="pill ${wish ? "active" : ""}">\uC704\uC2DC\uB9AC\uC2A4\uD2B8</a><a href="${escapeHTML(lastShop)}" class="icon-button bag-close" aria-label="\uC1FC\uD551\uBC31 \uB2EB\uAE30">${icon("close")}</a></div>`;
  }
  function orderSummary(items) {
    return `<section class="order-summary"><h2>\uC8FC\uBB38 \uD569\uACC4</h2><dl><div><dt>\uC0C1\uD488 \uAE08\uC561</dt><dd>${money(total(items))}</dd></div><div><dt>\uBC30\uC1A1\uBE44</dt><dd>\uBB34\uB8CC</dd></div><div class="sum"><dt>\uD569\uACC4</dt><dd>${money(total(items))}</dd></div></dl></section>`;
  }
  function cart() {
    return bagTabs() + (!data.cart.length ? '<div class="premium-empty"><h1>Shopping bag</h1><p>\uC1FC\uD551\uBC31\uC5D0 \uCD94\uAC00\uB41C \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p><a class="button solid" href="#collection">\uCEEC\uB809\uC158 \uB458\uB7EC\uBCF4\uAE30</a></div>' : `<div class="cart-layout"><div class="cart-items">${data.cart.map((item, i) => `<article class="cart-item"><a href="#product/${item.id}">${productImage(item.id)}</a><div class="cart-copy"><a href="#product/${item.id}">${products[item.id].name}</a><p>${products[item.id].category}${item.pack === "gift" ? " \xB7 \uAE30\uD504\uD2B8 \uC138\uD2B8" : ""}</p><span>${money(products[item.id].price)}</span><div class="quantity"><button data-action="qty" data-index="${i}" data-delta="-1" aria-label="${products[item.id].name} \uC218\uB7C9 \uC904\uC774\uAE30" ${item.qty === 1 ? "disabled" : ""}>\u2212</button><output>${item.qty}</output><button data-action="qty" data-index="${i}" data-delta="1" aria-label="${products[item.id].name} \uC218\uB7C9 \uB298\uB9AC\uAE30" ${item.qty === 99 ? "disabled" : ""}>+</button></div></div><button class="remove-item" data-action="remove" data-index="${i}" aria-label="${products[item.id].name} \uC0AD\uC81C">\xD7</button></article>`).join("")}</div><div class="cart-bottom">${orderSummary(data.cart)}<div class="cart-actions">${cta("\uC1FC\uD551\uC73C\uB85C", "#collection", "outline")}${cta("\uC8FC\uBB38\uD558\uAE30", "#checkout")}</div></div></div>`);
  }
  function wishlist() {
    return bagTabs(true) + (data.wish.length ? `<div class="product-grid wish-grid">${data.wish.map((id) => card(id, { wish: true })).join("")}</div>` : '<div class="premium-empty"><h1>Wishlist</h1><p>\uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC624\uBE0C\uC81C\uB97C \uB2F4\uC544\uBCF4\uC138\uC694.</p><a class="button solid" href="#collection">\uCEEC\uB809\uC158 \uB458\uB7EC\uBCF4\uAE30</a></div>');
  }
  function search() {
    const query = params.get("q") || "";
    const matched = Object.keys(products).filter((id) => [products[id].name, id, products[id].category, collections[products[id].collection].name, { "01": "\uC774\uB07C \uBAA8\uC2A4 moss", "02": "\uB3C4\uD30C\uBBFC dopamine", "03": "\uBE44 \uB808\uC778 \uB808\uC778\uC2A4 rains" }[products[id].collection], { "Hanging": "\uD589\uC789", "Badge": "\uBC43\uC9C0 \uBC30\uC9C0 \uBE0C\uB85C\uCE58", "Stack": "\uC2A4\uD0DD" }[products[id].category]].join(" ").toLowerCase().includes(query.toLowerCase()));
    return `<form class="search-form" id="search-form"><input name="q" type="search" value="${escapeHTML(query)}" placeholder="\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694" aria-label="\uAC80\uC0C9\uC5B4"><button class="icon-button" aria-label="\uAC80\uC0C9\uD558\uAE30">${icon("search")}</button></form>${query ? `<div class="search-section"><div class="section-label">\uAC80\uC0C9 \uACB0\uACFC (${matched.length})</div>${matched.length ? `<div class="search-grid">${matched.map((id) => card(id, { compact: true })).join("")}</div>` : '<p class="search-empty">\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}</div>` : `<section class="search-section"><div class="section-label"><h1>\uC778\uAE30 \uAC80\uC0C9\uC5B4</h1><a href="#collection">\uB354\uBCF4\uAE30</a></div><div class="search-grid">${["moss", "dopamine-hanging", "rains-stack"].map((id) => card(id, { compact: true })).join("")}</div></section>`}<section class="search-section recent"><div class="section-label"><h2>\uCD5C\uADFC \uBCF8 \uC81C\uD488</h2><button data-action="clear-recent">\uC0AD\uC81C\uD558\uAE30</button></div>${data.recent.length ? `<div class="search-grid">${data.recent.map((id) => card(id, { compact: true })).join("")}</div>` : '<p class="search-empty">\uCD5C\uADFC \uBCF8 \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}</section>`;
  }
  function field(name, label, placeholder, type = "text", extra = "") {
    return `<label class="line-field"><span>${label}</span><input type="${type}" name="${name}" placeholder="${placeholder}" ${extra}></label>`;
  }
  function login() {
    if (data.user) return `<section class="account padded"><h1><span data-i18n-skip>${escapeHTML(data.user.name)}</span>${data.lang === "en" ? "" : "\uB2D8"}</h1><p class="muted">${escapeHTML(data.user.email)}</p><p class="test-note">\uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778 \uC0C1\uD0DC\uC785\uB2C8\uB2E4.</p>${cta("\uC8FC\uBB38 \uC870\uD68C", "#orders", "outline")}${cta("\uC704\uC2DC\uB9AC\uC2A4\uD2B8", "#wishlist", "outline")}<button class="button solid" data-action="logout">\uB85C\uADF8\uC544\uC6C3</button></section>`;
    return `<section class="auth-page"><h1>\uB85C\uADF8\uC778</h1><form id="login-form">${field("email", "\uC774\uBA54\uC77C", "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694", "email", 'required autocomplete="off"')}${field("password", "\uBE44\uBC00\uBC88\uD638", "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694", "password", 'required minlength="8" autocomplete="off"')}<button type="button" class="forgot" data-action="forgot">\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?</button><button class="button solid">\uB85C\uADF8\uC778</button></form><div class="or">\uB610\uB294</div><button class="button outline" data-action="social" data-provider="\uCE74\uCE74\uC624">\uCE74\uCE74\uC624\uB85C \uACC4\uC18D\uD558\uAE30</button><button class="button outline" data-action="social" data-provider="Apple">Apple\uB85C \uACC4\uC18D\uD558\uAE30</button><p class="account-switch">\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694? &nbsp;<a href="#signup">\uD68C\uC6D0\uAC00\uC785</a></p><p class="test-note">\uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778 \xB7 \uC784\uC758\uC758 \uC774\uBA54\uC77C\uACFC 8\uC790 \uC774\uC0C1 \uC785\uB825<br>\uC678\uBD80 \uACC4\uC815\uC5D0 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC73C\uBA70 \uBE44\uBC00\uBC88\uD638\uB294 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></section>`;
  }
  function signup() {
    return `<section class="auth-page signup"><h1>\uD68C\uC6D0\uAC00\uC785</h1><form id="signup-form">${field("name", "\uC774\uB984", "\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694", "text", 'required maxlength="40"')}${field("email", "\uC774\uBA54\uC77C", "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694", "email", 'required autocomplete="off"')}${field("password", "\uBE44\uBC00\uBC88\uD638", "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694 (8\uC790 \uC774\uC0C1)", "password", 'required minlength="8" autocomplete="off"')}${field("confirm", "\uBE44\uBC00\uBC88\uD638 \uD655\uC778", "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD558\uC138\uC694", "password", 'required minlength="8" autocomplete="off"')}<label class="terms"><input type="checkbox" name="terms" required><span><a href="#info/legal">\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00</a> \uBC0F <a href="#info/privacy">\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68</a>\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4</span></label><p class="form-error" id="signup-error" role="alert"></p><button class="button solid">\uAC00\uC785\uD558\uAE30</button></form><p class="account-switch">\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694? &nbsp;<a href="#login">\uB85C\uADF8\uC778</a></p><p class="test-note">\uD14C\uC2A4\uD2B8 \uAC00\uC785 \xB7 \uC2E4\uC81C \uD68C\uC6D0 \uACC4\uC815\uC740 \uC0DD\uC131\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br>\uBE44\uBC00\uBC88\uD638\uB294 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></section>`;
  }
  function checkout() {
    if (!data.cart.length) return `<section class="padded"><h1 class="page-title">\uC8FC\uBB38\uD558\uAE30</h1><p class="muted">\uC8FC\uBB38\uD560 \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>${cta("\uC1FC\uD551 \uACC4\uC18D\uD558\uAE30", "#collection")}</section>`;
    return `<section class="checkout"><h1 class="page-title">\uC8FC\uBB38\uD558\uAE30</h1><form id="checkout-form"><section class="shipping"><div class="section-label"><h2>\uBC30\uC1A1 \uC815\uBCF4</h2><button type="button" data-action="fill-shipping">\uD14C\uC2A4\uD2B8 \uC815\uBCF4 \uC785\uB825</button></div>${field("name", "\uC774\uB984", "\uC218\uB839\uC778 \uC774\uB984", "text", `required maxlength="40" value="${escapeHTML(shippingDraft.name)}"`)}${field("phone", "\uC5F0\uB77D\uCC98", "\uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD558\uC138\uC694", "tel", `required inputmode="tel" pattern="0[0-9\\- ]{8,13}" value="${escapeHTML(shippingDraft.phone)}"`)}${field("address", "\uBC30\uC1A1\uC9C0", "\uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694", "text", `required minlength="5" maxlength="200" value="${escapeHTML(shippingDraft.address)}"`)}</section><section class="checkout-products"><h2>\uC8FC\uBB38 \uC0C1\uD488</h2>${data.cart.map((item) => `<div class="checkout-item">${productImage(item.id)}<div><p>${products[item.id].name}</p><span>${money(products[item.id].price * item.qty)}</span></div><small>${item.pack === "gift" ? "\uAE30\uD504\uD2B8 \uC138\uD2B8" : "\uC2A4\uD0E0\uB2E4\uB4DC"} \xB7 \uC218\uB7C9 ${item.qty}</small></div>`).join("")}</section><fieldset class="payment-methods"><legend>\uACB0\uC81C \uC218\uB2E8</legend><div class="two-col">${Object.entries(methods).map(([key, value]) => `<label class="option ${payment === key ? "active" : ""}"><input type="radio" name="method" value="${key}" ${payment === key ? "checked" : ""}><span>${value}</span></label>`).join("")}</div></fieldset>${orderSummary(data.cart)}<button class="button solid pay-button" type="submit">\uACB0\uC81C\uD558\uAE30</button><p class="test-note">\uBAA8\uC758 \uACB0\uC81C \xB7 \uC2E4\uC81C \uCCAD\uAD6C\uC640 \uBC30\uC1A1\uC740 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br>\uD14C\uC2A4\uD2B8 \uC815\uBCF4 \uC785\uB825 \uBC84\uD2BC\uC73C\uB85C \uBC30\uC1A1 \uC815\uBCF4\uB97C \uCC44\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></form></section>`;
  }
  function complete() {
    const o = params.has("id") ? data.orders.find((o2) => o2.id === params.get("id")) : data.orders[0];
    if (!o) return `<section class="padded"><p>\uC644\uB8CC\uB41C \uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>${cta("\uC1FC\uD551 \uACC4\uC18D\uD558\uAE30", "#collection")}</section>`;
    return `<section class="complete"><div class="complete-message">${icon("success")}<h1>\uC8FC\uBB38\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4</h1><p>\uC8FC\uBB38\uBC88\uD638: ${escapeHTML(o.id)}</p><p class="delivery-note">\uD14C\uC2A4\uD2B8 \uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C \uBC30\uC1A1\uC740 \uC9C4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></div><div class="complete-actions">${cta("\uC8FC\uBB38 \uC0C1\uC138 \uBCF4\uAE30", "#order/" + encodeURIComponent(o.id), "outline")}${cta("\uC1FC\uD551 \uACC4\uC18D\uD558\uAE30", "#collection")}</div></section>`;
  }
  function orders() {
    const orders2 = data.orders;
    return `<section class="orders"><h1 class="page-title">\uC8FC\uBB38 \uC870\uD68C</h1>${orders2.length ? orders2.map((o) => `<a class="order-row" href="#order/${encodeURIComponent(o.id)}"><div class="order-meta"><time>${new Date(o.date).toLocaleDateString(data.lang === "en" ? "en-GB" : "ko-KR")}</time><span>${escapeHTML(o.id)}</span></div><div class="order-item">${productImage(o.items[0].id)}<div><p>${escapeHTML(o.items[0].name)} / ${o.items.reduce((s, i) => s + i.qty, 0)}ea</p><strong>${escapeHTML(o.status)}</strong></div><span class="chevron">\u203A</span></div></a>`).join("") : '<div class="no-orders">\uC544\uC9C1 \uC8FC\uBB38 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.<br><span>\uC0C1\uD488\uC744 \uB2F4\uACE0 \uD14C\uC2A4\uD2B8 \uACB0\uC81C\uB97C \uC9C4\uD589\uD574\uBCF4\uC138\uC694.</span></div>'}<div class="padded">${cta("\uC1FC\uD551 \uACC4\uC18D\uD558\uAE30", "#collection")}</div><p class="test-note">\uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.</p></section>`;
  }
  function orderDetail(id) {
    const o = data.orders.find((o2) => o2.id === id);
    if (!o) return `<div class="padded"><p>\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC8FC\uBB38\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</p>${cta("\uC8FC\uBB38 \uC870\uD68C", "#orders", "outline")}</div>`;
    return `<section class="order-detail padded"><h1 class="page-title">\uC8FC\uBB38 \uC0C1\uC138</h1><p class="muted order-number">${escapeHTML(o.id)}</p><p class="order-state">${escapeHTML(o.status)}</p><section><h2>\uC8FC\uBB38 \uC0C1\uD488</h2>${o.items.map((i) => `<div class="checkout-item">${productImage(i.id)}<div><p>${escapeHTML(i.name)}</p><span>${money(i.unitPrice * i.qty)}</span></div><small>${i.pack === "gift" ? "\uAE30\uD504\uD2B8 \uC138\uD2B8" : "\uC2A4\uD0E0\uB2E4\uB4DC"} \xB7 ${i.qty}ea</small></div>`).join("")}</section><section><h2>\uBC30\uC1A1 \uC815\uBCF4</h2><p data-i18n-skip>${escapeHTML(o.shipping.name)}</p><p data-i18n-skip>${escapeHTML(o.shipping.phone)}</p><p data-i18n-skip>${escapeHTML(o.shipping.address)}</p></section><section><h2>\uACB0\uC81C \uC815\uBCF4</h2><p>${methods[o.method] || "\uD14C\uC2A4\uD2B8 \uACB0\uC81C"}</p><p>${money(o.total)} \xB7 ${escapeHTML(o.status)}</p></section>${o.status !== "\uD14C\uC2A4\uD2B8 \uC8FC\uBB38 \uCDE8\uC18C" ? '<button class="button outline" data-action="cancel-order" data-id="' + escapeHTML(o.id) + '">\uD14C\uC2A4\uD2B8 \uC8FC\uBB38 \uCDE8\uC18C</button>' : ""}${o.status !== "\uD14C\uC2A4\uD2B8 \uC8FC\uBB38 \uCDE8\uC18C" ? `<button class="button outline" data-action="register-order" data-id="${escapeHTML(o.id)}">\uC544\uCE74\uC774\uBE0C\uC5D0 \uAE30\uB85D\uD558\uAE30</button>` : ""}${cta("\uC8FC\uBB38 \uC870\uD68C", "#orders")}<p class="test-note">\uBAA8\uC758 \uC8FC\uBB38\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uACB0\uC81C\xB7\uBC30\uC1A1 \uB0B4\uC5ED\uC774 \uC544\uB2D9\uB2C8\uB2E4.</p></section>`;
  }
  var infoTitles = { contact: "\uBB38\uC758\uD558\uAE30", stores: "\uB9E4\uC7A5 \uC704\uCE58", faq: "FAQ", legal: "\uBC95\uC801 \uACE0\uC9C0", privacy: "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68", instagram: "\uC778\uC2A4\uD0C0\uADF8\uB7A8", kakao: "\uCE74\uCE74\uC624\uD1A1" };
  function info(key) {
    const title = infoTitles[key] || "\uC548\uB0B4";
    let text = { contact: "Vollik\uC758 \uC81C\uD488\uACFC \uC8FC\uBB38\uC5D0 \uAD00\uD55C \uBB38\uC758 \uCC44\uB110\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC815\uC2DD \uC624\uD508 \uC2DC \uC774\uACF3\uC5D0\uC11C \uC5F0\uB77D\uCC98\uC640 \uC6B4\uC601 \uC2DC\uAC04\uC744 \uC548\uB0B4\uD574\uB4DC\uB9BD\uB2C8\uB2E4.", stores: "Vollik\uC744 \uC9C1\uC811 \uB9CC\uB0A0 \uC218 \uC788\uB294 \uACF5\uAC04\uC744 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uB9E4\uC7A5\uACFC \uD31D\uC5C5 \uC18C\uC2DD\uC774 \uD655\uC815\uB418\uBA74 \uC774\uACF3\uC5D0\uC11C \uC548\uB0B4\uD574\uB4DC\uB9BD\uB2C8\uB2E4.", legal: "\uC774 \uC0AC\uC774\uD2B8\uB294 Vollik\uC758 \uB514\uC790\uC778 \uBC0F \uC0AC\uC6A9\uC790 \uD750\uB984\uC744 \uD655\uC778\uD558\uAE30 \uC704\uD55C \uD14C\uC2A4\uD2B8 \uBC84\uC804\uC785\uB2C8\uB2E4. \uD45C\uC2DC\uB41C \uC0C1\uD488 \uAC00\uACA9\uC740 \uD14C\uC2A4\uD2B8\uC6A9\uC774\uBA70 \uC2E4\uC81C \uD310\uB9E4 \uACC4\uC57D\uC774\uB098 \uACB0\uC81C\uB294 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", privacy: "\uC7A5\uBC14\uAD6C\uB2C8, \uC704\uC2DC\uB9AC\uC2A4\uD2B8, \uD14C\uC2A4\uD2B8 \uD504\uB85C\uD544\uACFC \uC8FC\uBB38 \uC815\uBCF4\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uBE44\uBC00\uBC88\uD638\uC640 \uCE74\uB4DC \uC815\uBCF4\uB294 \uC800\uC7A5\uD558\uAC70\uB098 \uC804\uC1A1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C \uC774 \uBE0C\uB77C\uC6B0\uC800\uC758 \uD14C\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uC0AD\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", instagram: "\uC5F0\uACB0\uD560 \uACF5\uC2DD \uC778\uC2A4\uD0C0\uADF8\uB7A8 \uC8FC\uC18C\uAC00 \uC544\uC9C1 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", kakao: "\uC5F0\uACB0\uD560 \uACF5\uC2DD \uCE74\uCE74\uC624\uD1A1 \uCC44\uB110\uC774 \uC544\uC9C1 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." }[key] || "";
    return `<section class="info-page padded"><h1 class="page-title">${title}</h1>${key === "faq" ? `<details open><summary>\uC2E4\uC81C\uB85C \uACB0\uC81C\uB418\uB098\uC694?</summary><p>\uC544\uB2C8\uC694. \uBAA8\uB4E0 \uACB0\uC81C \uC218\uB2E8\uC740 \uBAA8\uC758 \uACB0\uC81C\uC774\uBA70 \uC2E4\uC81C \uCCAD\uAD6C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></details><details><summary>\uC8FC\uBB38 \uB0B4\uC5ED\uC740 \uC5B4\uB514\uC5D0 \uC800\uC7A5\uB418\uB098\uC694?</summary><p>\uD604\uC7AC \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C\uB294 \uACF5\uC720\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></details><details><summary>\uC624\uBE0C\uC81C\uB294 \uC5B4\uB5BB\uAC8C \uC6C0\uC9C1\uC774\uB098\uC694?</summary><p>Status \uD654\uBA74\uC5D0\uC11C \uC624\uBE0C\uC81C\uB97C \uC7A1\uC544 \uC704\uC544\uB798, \uC88C\uC6B0\uB85C \uC6C0\uC9C1\uC5EC\uBCF4\uC138\uC694. \uB193\uC73C\uBA74 \uCCB4\uC778\uC774 \uD33D\uD33D\uD574\uC84C\uB2E4 \uB290\uC2A8\uD574\uC9C0\uBA70 \uD754\uB4E4\uB9BD\uB2C8\uB2E4.</p></details>` : `<p>${text}</p>`}${key === "privacy" ? '<button class="button outline" data-action="reset-data">\uD14C\uC2A4\uD2B8 \uB370\uC774\uD130 \uCD08\uAE30\uD654</button>' : ""}${cta("\uB3CC\uC544\uAC00\uAE30", "#shop", "outline")}</section>`;
  }
  function menu() {
    const selected = menuCollection || "01", slug = { "01": "moss", "02": "dopamine", "03": "rains" }[selected];
    return `<section class="menu-screen visual-menu"><button class="icon-button menu-close" data-action="menu-close" aria-label="\uBA54\uB274 \uB2EB\uAE30">${icon("close")}</button><nav class="web-text-menu"><a href="#collection">${data.lang === "en" ? "All objects" : "\uC804\uCCB4\uBCF4\uAE30"}</a>${Object.keys(collections).map((c) => `<a href="#collection?collection=${c}">${collections[c].name}</a>`).join("")}</nav><div class="app-menu-columns"><nav class="collection-links app-menu-collections" aria-label="Collections"><a class="all-objects-link" href="#collection">${data.lang === "en" ? "All objects" : "\uC804\uCCB4\uBCF4\uAE30"}<span aria-hidden="true">\u203A</span></a>${Object.keys(collections).map((c) => `<button data-action="expand-collection" data-collection="${c}" aria-pressed="${selected === c}" class="${selected !== c ? "dim" : ""}"><span class="menu-collection-label">Collection ${c}<small>${collections[c].name}</small></span><span class="menu-chevron" aria-hidden="true">\u203A</span></button>`).join("")}</nav><nav class="visual-menu-grid" aria-label="Object types">${[["all", data.lang === "en" ? "View all" : "\uC804\uCCB4\uBCF4\uAE30"], ["hanging", "Hanging"], ["badge", "Badge"], ["stack", "Stack"]].map(([key, label]) => `<a href="#collection?collection=${selected}&category=${key}"><span class="visual-menu-image"><img src="assets/${slug}-${key === "all" ? "stack-gallery" : key + "-shop"}.webp" alt="" /></span><span>${label}</span></a>`).join("")}</nav></div><div class="menu-bottom"><a href="#login">${data.user ? "\uB9C8\uC774\uD398\uC774\uC9C0" : "\uB85C\uADF8\uC778"}</a><a href="#wishlist">\uC704\uC2DC\uB9AC\uC2A4\uD2B8</a><button data-action="language" aria-haspopup="dialog">LANGUAGE / ${data.lang === "en" ? "English" : "\uD55C\uAD6D\uC5B4"}</button></div></section>`;
  }
  function render(event) {
    captureView();
    cleanupMotion?.();
    cleanupMotion = null;
    if (modal.open) modal.close();
    const oldRoute = route, [path, q = ""] = location.hash.slice(1).split("?");
    route = path || "status";
    params = new URLSearchParams(q);
    selectedPack = "standard";
    quantity = 1;
    galleryIndex = 0;
    app.scrollTop = 0;
    const base = route.split("/")[0];
    renderedHash = location.hash || "#status";
    if (["shop", "collection", "product", "search"].includes(base)) shopRoute = renderedHash;
    shell.dataset.route = base;
    const sceneColor = ["status", "archive"].includes(base) ? "#eeece9" : "#ffffff";
    document.querySelector('meta[name="theme-color"]').content = sceneColor;
    document.documentElement.style.backgroundColor = sceneColor;
    header.innerHTML = headerHTML();
    header.hidden = ["status", "archive", "menu"].includes(base);
    tabs.innerHTML = navigation();
    tabs.hidden = base === "menu";
    if (["shop", "collection"].includes(base)) lastShop = location.hash || "#shop";
    let html = "";
    if (base === "status") html = status();
    else if (base === "archive") html = archive();
    else if (base === "shop") html = home();
    else if (base === "collection") html = collection();
    else if (base === "product") {
      const id = route.split("/")[1];
      if (Object.hasOwn(products, id) && event?.type !== "storage" && data.recent[0] !== id) {
        data.recent = [id, ...data.recent.filter((x) => x !== id)].slice(0, 6);
        persist();
      }
      html = productPage(id);
    } else if (base === "cart") html = cart();
    else if (base === "wishlist") html = wishlist();
    else if (base === "search") html = search();
    else if (base === "login") html = login();
    else if (base === "signup") html = signup();
    else if (base === "checkout") html = checkout();
    else if (base === "complete") html = complete();
    else if (base === "orders") html = orders();
    else if (base === "order") html = orderDetail(route.slice(6));
    else if (base === "info") html = info(route.split("/")[1]);
    else if (base === "menu") html = menu();
    else html = `<section class="padded"><h1>\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</h1>${cta("Vollik \uD648", "#shop")}</section>`;
    app.innerHTML = html;
    if (base === "archive" && params.get("object") === "moss") {
      const index = data.archive.findIndex((object) => object.product === "moss");
      if (index >= 0) openArchive(index);
      else showModal(products.moss.name, productImage("moss") + '<button class="button solid" data-action="confirm-archive" data-id="moss">' + (data.lang === "en" ? "Add to archive" : "\uC544\uCE74\uC774\uBE0C\uC5D0 \uB2F4\uAE30") + "</button>");
      history.replaceState(history.state, "", location.pathname + location.search + "#archive");
    }
    document.title = ["status", "shop"].includes(base) ? "Vollik" : `${base === "product" ? products[route.split("/")[1]]?.name || "Vollik" : { archive: "Archive", shop: "Vollik", collection: "Collection", cart: "\uC1FC\uD551\uBC31", wishlist: "\uC704\uC2DC\uB9AC\uC2A4\uD2B8", search: "\uAC80\uC0C9", login: "\uB85C\uADF8\uC778", signup: "\uD68C\uC6D0\uAC00\uC785", checkout: "\uC8FC\uBB38\uD558\uAE30", complete: "\uC8FC\uBB38 \uC644\uB8CC", orders: "\uC8FC\uBB38 \uC870\uD68C", order: "\uC8FC\uBB38 \uC0C1\uC138" }[base] || "Vollik"} \u2014 Vollik`;
    if (base === "shop") cleanupMotion = mountShopVideo(app.querySelector(".shop-film"), data.lang);
    if (base === "status") cleanupMotion = mountSuspension(app.querySelector(".status-scene"), data.lang, () => data.scentIndex);
    if (base === "product" && Object.hasOwn(products, route.split("/")[1])) {
      const track = document.querySelector("#gallery-track");
      track.addEventListener("scroll", () => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        if (i !== galleryIndex) {
          galleryIndex = i;
          markGallery(i);
        }
      });
    }
    if (resetShopHome && base === "shop") {
      restoreView = false;
      resetShopHome = false;
      app.scrollTop = 0;
    }
    if (restoreView) {
      restoreCurrent();
      restoreView = false;
    }
    localize(shell, data.lang);
    document.documentElement.lang = data.lang;
    document.title = t(document.title);
    if (base === "checkout") document.querySelector("#checkout-form")?.addEventListener("input", (e) => {
      if (e.target.name in shippingDraft) shippingDraft[e.target.name] = e.target.value;
    });
  }
  function updateProductQuantity() {
    const output = app.querySelector("#product-quantity");
    if (!output) return;
    output.textContent = quantity;
    app.querySelector("#product-total").textContent = money(products[route.split("/")[1]].price * quantity);
    for (const button of app.querySelectorAll('[data-action="product-qty"]')) button.disabled = button.dataset.delta === "-1" ? quantity === 1 : quantity === 99;
  }
  function markGallery(i) {
    document.querySelectorAll('[data-action="gallery"]').forEach((b) => {
      const active2 = +b.dataset.index === i;
      b.classList.toggle("active", active2);
      if (active2) b.setAttribute("aria-current", "true");
      else b.removeAttribute("aria-current");
    });
  }
  function showModal(title, body, extra = "") {
    modal.className = extra;
    modal.innerHTML = `<button class="modal-close icon-button" data-action="close-modal" aria-label="\uB2EB\uAE30">${icon("close")}</button><h2 id="modal-title" ${extra === "archive-dialog" ? 'tabindex="-1" autofocus' : ""}>${title}</h2>${body}`;
    localize(modal, data.lang);
    modal.showModal();
  }
  function toggleWish(id) {
    if (!products[id]) return;
    const has = data.wish.includes(id);
    data.wish = has ? data.wish.filter((x) => x !== id) : [...data.wish, id];
    persist();
    document.querySelectorAll(`[data-action="wish"][data-id="${id}"]`).forEach((b) => {
      b.classList.toggle("selected", !has);
      b.setAttribute("aria-pressed", String(!has));
      const img = b.querySelector("img");
      if (img) img.src = "media/icon-heart" + (!has ? "-filled" : "") + ".svg";
      b.setAttribute("aria-label", t(products[id].name + (!has ? " \uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC0AD\uC81C" : " \uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uCD94\uAC00")));
    });
    if (route === "wishlist") render();
    notify(has ? "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4." : "\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4.");
  }
  function addCart(id, pack, count = 1) {
    data.cart = addItem(data.cart, id, pack, count);
    persist();
    header.innerHTML = headerHTML();
    localize(header, data.lang);
    showModal("\uC1FC\uD551\uBC31\uC5D0 \uB2F4\uC558\uC2B5\uB2C8\uB2E4.", `<p>${products[id].name} \xB7 ${pack === "gift" ? "\uAE30\uD504\uD2B8 \uC138\uD2B8" : "\uC2A4\uD0E0\uB2E4\uB4DC"}</p><div class="modal-actions">${cta("\uC1FC\uD551\uBC31 \uBCF4\uAE30", "#cart")}<button class="button outline" data-action="close-modal">\uACC4\uC18D \uB458\uB7EC\uBCF4\uAE30</button></div>`);
  }
  var routeBeforeMenu = "#shop";
  shell.addEventListener("click", (e) => {
    const b = e.target.closest("[data-action]");
    if (!b) return;
    const a = b.dataset.action, id = b.dataset.id;
    switch (a) {
      case "shop-home":
        e.preventDefault();
        resetShopHome = true;
        restoreView = false;
        shopRoute = "#shop";
        go("#shop");
        app.scrollTop = 0;
        break;
      case "shop-tab":
        e.preventDefault();
        restoreView = true;
        go(route === shopRoute.slice(1).split("?")[0] ? "#shop" : shopRoute);
        break;
      case "language":
        showModal("\uC5B8\uC5B4 \uC120\uD0DD", `<div class="language-options"><button class="button ${data.lang === "ko" ? "solid" : "outline"}" data-action="select-language" data-lang="ko" lang="ko" aria-pressed="${data.lang === "ko"}">\uD55C\uAD6D\uC5B4</button><button class="button ${data.lang === "en" ? "solid" : "outline"}" data-action="select-language" data-lang="en" lang="en" aria-pressed="${data.lang === "en"}">English</button></div>`);
        break;
      case "select-language":
        data.lang = b.dataset.lang;
        persist();
        restoreView = true;
        render();
        break;
      case "menu":
        routeBeforeMenu = location.hash || "#shop";
        menuCollection = "";
        history.pushState({ fromMenu: true }, "", "#menu");
        render();
        break;
      case "menu-close":
        restoreView = true;
        if (history.state?.fromMenu) history.back();
        else go(routeBeforeMenu);
        break;
      case "expand-collection":
        menuCollection = b.dataset.collection;
        app.innerHTML = menu();
        localize(app, data.lang);
        app.querySelector(`[data-collection="${b.dataset.collection}"]`)?.focus({ preventScroll: true });
        break;
      case "activate-object":
        openArchive(+b.dataset.index);
        break;
      case "remove-archive":
        showModal("\uAE30\uB85D\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?", `<button class="button solid" data-action="confirm-remove-archive" data-id="${escapeHTML(id)}">\uAE30\uB85D \uC0AD\uC81C</button><button class="plain-button" data-action="close-modal">\uB2EB\uAE30</button>`);
        break;
      case "confirm-remove-archive":
        removeArchive(id);
        break;
      case "archive-add":
        archivePicker();
        break;
      case "confirm-archive":
        if (!products[id]) break;
        data.archive.push({ id: uuid(), product: id, name: products[id].name });
        persist();
        modal.close();
        restoreView = true;
        render();
        break;
      case "register-order":
        registerOrder(id);
        break;
      case "wish":
        toggleWish(id);
        break;
      case "pack":
        selectedPack = b.dataset.pack;
        document.querySelectorAll('[data-action="pack"]').forEach((btn) => {
          const on = btn === b;
          btn.classList.toggle("active", on);
          btn.setAttribute("aria-pressed", String(on));
        });
        document.querySelector("#pack-info").textContent = t(selectedPack === "gift" ? "\uAE30\uD504\uD2B8 \uC138\uD2B8" : "\uC2A4\uD0E0\uB2E4\uB4DC");
        break;
      case "zoom-product": {
        const p = products[route.split("/")[1]];
        if (p) showModal(p.name, `<img class="full-product-image" src="${p.gallery[galleryIndex]}" alt="${p.name}">`, "image-modal");
        break;
      }
      case "gallery":
        document.querySelector("#gallery-track").scrollTo({ left: +b.dataset.index * document.querySelector("#gallery-track").clientWidth, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        break;
      case "product-qty":
        quantity = Math.min(99, Math.max(1, quantity + Number(b.dataset.delta)));
        updateProductQuantity();
        break;
      case "add-cart":
        addCart(id, selectedPack, quantity);
        break;
      case "quick-add":
        addCart(id, "standard");
        break;
      case "gift":
        data.cart = addItem(data.cart, id, "gift");
        persist();
        go("#checkout");
        break;
      case "qty": {
        const i = +b.dataset.index;
        data.cart[i].qty = Math.max(1, Math.min(99, data.cart[i].qty + +b.dataset.delta));
        persist();
        render();
        break;
      }
      case "remove":
        data.cart.splice(+b.dataset.index, 1);
        persist();
        render();
        break;
      case "clear-recent":
        data.recent = [];
        persist();
        render();
        break;
      case "close-modal":
        if (!paymentBusy) modal.close();
        break;
      case "filter":
        showModal("\uD544\uD130", `<form id="filter-form"><label class="select-label">\uCE74\uD14C\uACE0\uB9AC<select name="category"><option value="all">\uC804\uCCB4\uBCF4\uAE30</option><option value="hanging">Hanging</option><option value="badge">Badge</option><option value="stack">Stack</option></select></label><button class="button solid">\uC801\uC6A9\uD558\uAE30</button></form>`);
        document.querySelector("#filter-form select").value = ["hanging", "badge", "stack"].includes(params.get("category")) ? params.get("category") : "all";
        break;
      case "fill-shipping": {
        const f = document.querySelector("#checkout-form");
        shippingDraft = data.lang === "en" ? { name: "Demo Guest", phone: "010-0000-0000", address: "123 Demo Street, Unit 101" } : { name: "\uD14C\uC2A4\uD2B8 \uACE0\uAC1D", phone: "010-0000-0000", address: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uD14C\uC2A4\uD2B8\uB85C 123, \uD14C\uC2A4\uD2B8\uB3D9 101\uD638" };
        for (const [k, v] of Object.entries(shippingDraft)) f.elements[k].value = v;
        notify("\uD14C\uC2A4\uD2B8 \uBC30\uC1A1 \uC815\uBCF4\uB97C \uC785\uB825\uD588\uC2B5\uB2C8\uB2E4.");
        break;
      }
      case "forgot":
        showModal("\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815", `<p>\uD604\uC7AC\uB294 \uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778\uC785\uB2C8\uB2E4. \uC784\uC758\uC758 \uC774\uBA54\uC77C\uACFC 8\uC790 \uC774\uC0C1\uC758 \uD14C\uC2A4\uD2B8 \uBE44\uBC00\uBC88\uD638\uB85C \uB85C\uADF8\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><button class="button solid" data-action="close-modal">\uD655\uC778</button>`);
        break;
      case "social": {
        const provider = b.dataset.provider === "\uCE74\uCE74\uC624" ? "Kakao" : escapeHTML(b.dataset.provider);
        showModal(data.lang === "en" ? `${provider} demo sign-in` : `${escapeHTML(b.dataset.provider)} \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8`, `<p>${data.lang === "en" ? "Preview the signed-in experience without connecting your account." : "\uC2E4\uC81C " + escapeHTML(b.dataset.provider) + " \uACC4\uC815\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uC54A\uACE0 \uB85C\uADF8\uC778 \uC774\uD6C4 \uD654\uBA74\uC744 \uD655\uC778\uD569\uB2C8\uB2E4."}</p><button class="button solid" data-action="demo-login">\uD14C\uC2A4\uD2B8 \uACC4\uC815\uC73C\uB85C \uACC4\uC18D\uD558\uAE30</button>`);
        break;
      }
      case "demo-login":
        data.user = { name: "\uD14C\uC2A4\uD2B8 \uACE0\uAC1D", email: "demo@example.com" };
        persist();
        modal.close();
        go("#login");
        break;
      case "logout":
        data.user = null;
        persist();
        render();
        break;
      case "cancel-order":
        showModal("\uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uC744 \uCDE8\uC18C\uD560\uAE4C\uC694?", `<p>\uC8FC\uBB38 \uAE30\uB85D\uC740 \uB0A8\uACE0 \uC0C1\uD0DC\uAC00 \uCDE8\uC18C\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.</p><button class="button solid" data-action="confirm-cancel" data-id="${escapeHTML(id)}">\uC8FC\uBB38 \uCDE8\uC18C</button>`);
        break;
      case "confirm-cancel": {
        const o = data.orders.find((o2) => o2.id === id);
        if (o) o.status = "\uD14C\uC2A4\uD2B8 \uC8FC\uBB38 \uCDE8\uC18C";
        persist();
        modal.close();
        render();
        break;
      }
      case "reset-data":
        showModal("\uD14C\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uCD08\uAE30\uD654\uD560\uAE4C\uC694?", `<p>\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB41C \uC7A5\uBC14\uAD6C\uB2C8, \uC704\uC2DC\uB9AC\uC2A4\uD2B8, \uD14C\uC2A4\uD2B8 \uC8FC\uBB38\uACFC \uD504\uB85C\uD544\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4.</p><button class="button solid" data-action="confirm-reset">\uCD08\uAE30\uD654</button>`);
        break;
      case "confirm-reset":
        data = defaults();
        persist();
        modal.close();
        go("#status");
        notify("\uD14C\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4.");
        break;
      case "payment-success":
        finishPayment();
        break;
      case "payment-fail":
        showModal("\uACB0\uC81C\uAC00 \uC2B9\uC778\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.", `<p>\uACB0\uC81C \uC2E4\uD328 \uD14C\uC2A4\uD2B8\uC785\uB2C8\uB2E4. \uC7A5\uBC14\uAD6C\uB2C8\uC640 \uBC30\uC1A1 \uC815\uBCF4\uAC00 \uC720\uC9C0\uB429\uB2C8\uB2E4.</p><button class="button solid" data-action="close-modal">\uB2E4\uC2DC \uC2DC\uB3C4\uD558\uAE30</button>`);
        break;
      case "payment-cancel":
        modal.close();
        notify("\uACB0\uC81C\uB97C \uCDE8\uC18C\uD588\uC2B5\uB2C8\uB2E4. \uC785\uB825\uD55C \uC815\uBCF4\uB294 \uC720\uC9C0\uB429\uB2C8\uB2E4.");
        break;
    }
  });
  shell.addEventListener("change", (e) => {
    if (e.target.name === "method") {
      payment = e.target.value;
      document.querySelectorAll(".payment-methods .option").forEach((l) => l.classList.toggle("active", l.querySelector("input").checked));
    }
  });
  shell.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target, values = Object.fromEntries(new FormData(f));
    if (f.id === "search-form") {
      go("#search?q=" + encodeURIComponent(values.q.trim()));
    } else if (f.id === "filter-form") {
      go("#collection?collection=" + (params.get("collection") || "all") + "&category=" + values.category);
      modal.close();
    } else if (f.id === "newsletter-form") {
      f.reset();
      notify("\uB274\uC2A4\uB808\uD130\uB97C \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uC774\uBA54\uC77C\uC740 \uC800\uC7A5\uB418\uAC70\uB098 \uC804\uC1A1\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
    } else if (f.id === "login-form") {
      data.user = { name: values.email.split("@")[0], email: values.email };
      persist();
      f.reset();
      render();
      notify("\uD14C\uC2A4\uD2B8 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD588\uC2B5\uB2C8\uB2E4.");
    } else if (f.id === "signup-form") {
      if (values.password !== values.confirm) {
        document.querySelector("#signup-error").textContent = t("\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
        return;
      }
      data.user = { name: values.name, email: values.email };
      persist();
      f.reset();
      go("#login");
      notify("\uD14C\uC2A4\uD2B8 \uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    } else if (f.id === "checkout-form") {
      shippingDraft = { name: values.name, phone: values.phone, address: values.address };
      if (!/^0\d{8,10}$/.test(values.phone.replace(/\D/g, ""))) {
        notify("\uC5F0\uB77D\uCC98\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.");
        return;
      }
      checkoutSnapshot = data.cart.map((i) => ({ ...i }));
      payment = values.method;
      pendingToken = uuid();
      showModal("\uD14C\uC2A4\uD2B8 \uACB0\uC81C", `<p class="payment-provider">${methods[payment]}</p><strong class="payment-amount">${money(total(checkoutSnapshot))}</strong><p>\uC2E4\uC81C \uACB0\uC81C \uC815\uBCF4 \uC785\uB825 \uC5C6\uC774<br>\uC2B9\uC778\xB7\uC2E4\uD328\xB7\uCDE8\uC18C \uD750\uB984\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.</p><button class="button solid" data-action="payment-success">\uD14C\uC2A4\uD2B8 \uACB0\uC81C \uC2B9\uC778</button><button class="button outline" data-action="payment-fail">\uACB0\uC81C \uC2E4\uD328 \uD14C\uC2A4\uD2B8</button><button class="plain-button" data-action="payment-cancel">\uACB0\uC81C \uCDE8\uC18C</button>`, "payment-modal");
    }
  });
  async function finishPayment() {
    if (paymentBusy || !checkoutSnapshot?.length || !pendingToken) return;
    paymentBusy = true;
    const btn = modal.querySelector('[data-action="payment-success"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = t("\uACB0\uC81C \uD655\uC778 \uC911\u2026");
    }
    try {
      const prior = data.orders.find((o) => o.token === pendingToken);
      const order = prior || createOrder(checkoutSnapshot, shippingDraft, payment, pendingToken);
      if (!prior) {
        data.orders.unshift(order);
        for (const item of checkoutSnapshot) {
          const idx = data.cart.findIndex((c) => c.id === item.id && c.pack === item.pack);
          if (idx !== -1) {
            data.cart[idx].qty -= item.qty;
            if (data.cart[idx].qty <= 0) data.cart.splice(idx, 1);
          }
        }
        persist();
      }
      modal.close();
      checkoutSnapshot = null;
      pendingToken = null;
      shippingDraft = { name: "", phone: "", address: "" };
      go("#complete?id=" + encodeURIComponent(order.id));
    } catch {
      notify("\uC8FC\uBB38 \uC815\uBCF4\uB97C \uD655\uC778\uD55C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.");
      if (btn) {
        btn.disabled = false;
        btn.textContent = t("\uD14C\uC2A4\uD2B8 \uACB0\uC81C \uC2B9\uC778");
      }
    } finally {
      paymentBusy = false;
    }
  }
  modal.addEventListener("click", (e) => {
    if (e.target === modal && !paymentBusy) {
      const r = modal.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) modal.close();
    }
  });
  modal.addEventListener("cancel", (e) => {
    if (paymentBusy) e.preventDefault();
  });
  window.addEventListener("popstate", () => {
    restoreView = true;
  });
  window.addEventListener("hashchange", render);
  window.addEventListener("storage", (e) => {
    if (e.key === KEY) {
      try {
        data = normalize(JSON.parse(e.newValue));
      } catch {
        return;
      }
      if (!modal.open && route !== "checkout") {
        restoreView = true;
        render(e);
      }
    }
  });
  render();
  modal.addEventListener("change", (event) => {
    if (event.target.id === "scent-record") {
      data.scentIndex = Number(event.target.value);
      persist();
    }
  });

  // platform.js
  var installEvent;
  var standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  var english = () => document.documentElement.lang === "en";
  function showInstall() {
    const modal2 = document.createElement("dialog");
    modal2.className = "platform-dialog";
    modal2.innerHTML = english() ? "<h2>Install Vollik</h2><p>On iPhone or iPad, open this page in Safari, choose Share \u2192 Add to Home Screen \u2192 Add.</p><p>On Android or desktop, choose Install app from your browser menu when available.</p><button>Close</button>" : "<h2>Vollik \uC571 \uC124\uCE58</h2><p>\uC544\uC774\uD3F0\xB7\uC544\uC774\uD328\uB4DC: Safari\uC5D0\uC11C \uC774 \uC8FC\uC18C\uB97C \uC5F4\uACE0 \uACF5\uC720 \u2192 \uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00 \u2192 \uCD94\uAC00\uB97C \uC120\uD0DD\uD558\uC138\uC694.</p><p>Android\xB7PC: \uBE0C\uB77C\uC6B0\uC800 \uBA54\uB274\uC5D0\uC11C \uC571 \uC124\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694. \uC124\uCE58 \uBA54\uB274\uB294 \uBE0C\uB77C\uC6B0\uC800\uC640 \uC811\uC18D \uD658\uACBD\uC5D0 \uB530\uB77C \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p><button>\uB2EB\uAE30</button>";
    document.body.append(modal2);
    modal2.querySelector("button").onclick = () => modal2.close();
    modal2.onclose = () => modal2.remove();
    modal2.showModal();
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
