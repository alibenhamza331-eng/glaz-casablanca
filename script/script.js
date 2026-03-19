(function () {
  const data = {
    fr: {
      meta: {
        title: "GLAZ Casablanca | Cuisine & bar à vins",
        description:
          "GLAZ, restaurant et bar à vins à Casablanca : cuisine de marché, vins choisis et ambiance chaleureuse. Ouvert midi et soir."
      },
      brand: { city: "Casablanca", footer: "Casablanca, Maroc" },
      nav: {
        experience: "Expérience",
        menu: "Menu",
        gallery: "Galerie",
        reviews: "Avis",
        contact: "Contact",
        map: "Carte"
      },
      hero: {
        kicker: "Restaurant & bar à vins",
        title: "Cuisine de marché, ambiance lumineuse",
        subtitle:
          "Des assiettes précises, une cave choisie et un service attentif. Ouvert midi et soir, au cœur de Casablanca.",
        badge: "Cuisine & vins choisis",
        badges: ["Cuisine de marché", "Bar à vins", "Accueil attentif"]
      },
      experience: {
        kicker: "Expérience",
        title: "Pourquoi venir",
        subtitle:
          "Une table conviviale où la carte change au fil des arrivages et où l'équipe accompagne vos moments.",
        cards: [
          {
            title: "Produits de saison",
            text: "Une carte courte qui suit les arrivages, avec des assiettes nettes et lisibles."
          },
          {
            title: "Cave choisie",
            text: "Sélection de vins et cocktails avec des accords simples pour chaque plat."
          },
          {
            title: "Service fluide",
            text: "Accueil attentif, rythme maîtrisé, ambiance claire et chaleureuse."
          }
        ]
      },
      menu: {
        kicker: "Carte",
        title: "Extraits du moment",
        subtitle: "Sélection courte avec prix indicatifs en MAD, susceptibles d'évoluer.",
        note: "Service midi & soir",
        items: [
          { name: "Pavé de saumon", price: "210 MAD", desc: "Poireaux braisés, beurre blanc aux algues, romesco pistache." },
          { name: "Bavette à l'échalote", price: "185 MAD", desc: "Choux braisés, sauce vin rouge, pommes allumettes." },
          { name: "Noix de Saint-Jacques", price: "260 MAD", desc: "Velouté de maïs, bergamote, légumes verts." },
          { name: "Sole meunière", price: "215 MAD", desc: "Beurre noisette, pommes de terre nouvelles, herbes fraîches." },
          { name: "Filet de Saint-Pierre", price: "220 MAD", desc: "Purée de chou-fleur, pickles betterave, roquette groseille." },
          { name: "Tartare signature", price: "180 MAD", desc: "Bœuf au couteau, œuf confit soja, pommes allumettes." },
          { name: "Assiette tapas du marché", price: "120 MAD", desc: "Sélection à partager, produits du jour et focaccia maison." },
          { name: "Fondant chocolat & glace", price: "70 MAD", desc: "Dessert minute, cœur coulant et glace vanille." }
        ]
      },
      gallery: {
        kicker: "Galerie",
        title: "Un aperçu en images",
        subtitle: "Assiettes, salle et moments capturés chez GLAZ.",
        items: [
          { src: "assets/images/plats02.png", caption: "Salle lumineuse" },
          { src: "assets/images/plats03.png", caption: "Bar à vins" },
          { src: "assets/images/plats04.png", caption: "Plat signature" },
          { src: "assets/images/plats05.png", caption: "Détails de table" },
          { src: "assets/images/plats06.png", caption: "Dessert" },
          { src: "assets/images/menu1.png", caption: "Carte du moment" }
        ]
      },
      reviews: {
        kicker: "Avis",
        title: "Ils en parlent",
        subtitle: "Des retours clients sur l'accueil, la cuisine et l'ambiance.",
        items: [
          {
            author: "Wissal K.",
            text: "Le camembert rôti était super délicieux et les prix sont raisonnables. Clientèle très sympathique.",
            rating: 5
          },
          {
            author: "Nadia",
            text: "Nouvelle carte réussie, tout est excellent ! Ambiance magnifique, merci pour ce moment de bonheur.",
            rating: 5
          }
        ]
      },
      contact: {
        kicker: "Contact",
        title: "Horaires & réservations",
        subtitle: "Questions, informations ou réservation par téléphone ou WhatsApp."
      },
      map: {
        kicker: "Accès",
        title: "Retrouvez-nous",
        subtitle: "25 Rue Ahmed El Mokri, Casablanca 20000.",
        badge: "Quartier Gauthier",
        address: "25 Rue Ahmed El Mokri, Casablanca 20000",
        cta: "Ouvrir dans Maps"
      },
      cta: { call: "Appeler", whatsapp: "WhatsApp infos" },
      hours: [
        { day: "Lundi", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "Mardi", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "Mercredi", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "Jeudi", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "Vendredi", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "Samedi", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "Dimanche", time: "Fermé" }
      ]
    },
    en: {
      meta: {
        title: "GLAZ Casablanca | Market cuisine & wine bar",
        description: "Market-driven plates, curated wine list and warm service. Open for lunch and dinner."
      },
      brand: { city: "Casablanca", footer: "Casablanca, Morocco" },
      nav: {
        experience: "Experience",
        menu: "Menu",
        gallery: "Gallery",
        reviews: "Reviews",
        contact: "Contact",
        map: "Map"
      },
      hero: {
        kicker: "Restaurant & wine bar",
        title: "Market cuisine, bright ambiance",
        subtitle: "Precise plates, a curated cellar and attentive service. Open for lunch and dinner in Casablanca.",
        badge: "Cuisine & wine, curated",
        badges: ["Market cuisine", "Wine bar", "Caring team"]
      },
      experience: {
        kicker: "Experience",
        title: "Why visit",
        subtitle: "A convivial table with a short menu that follows the seasons and a team that looks after you.",
        cards: [
          {
            title: "Seasonal produce",
            text: "A focused menu that moves with the market, with clean, legible plates."
          },
          {
            title: "Curated cellar",
            text: "Wine and cocktail selection with simple pairings for each dish."
          },
          {
            title: "Smooth service",
            text: "Attentive welcome, controlled pacing, bright and warm mood."
          }
        ]
      },
      menu: {
        kicker: "Menu",
        title: "Highlights",
        subtitle: "Short selection with indicative MAD prices, subject to change.",
        note: "Lunch & dinner service",
        items: [
          { name: "Salmon filet", price: "210 MAD", desc: "Braised leeks, seaweed beurre blanc, pistachio romesco." },
          { name: "Flank steak shallot", price: "185 MAD", desc: "Braised cabbage, red wine sauce, shoestring fries." },
          { name: "Scallops", price: "260 MAD", desc: "Sweet-corn velouté, bergamot, green vegetables." },
          { name: "Sole meunière", price: "215 MAD", desc: "Brown butter, new potatoes, fresh herbs." },
          { name: "John Dory filet", price: "220 MAD", desc: "Cauliflower purée, beet pickles, currant vinaigrette." },
          { name: "Signature beef tartare", price: "180 MAD", desc: "Hand-cut beef, soy-cured egg, shoestring fries." },
          { name: "Market tapas board", price: "120 MAD", desc: "Sharing selection, daily produce and house focaccia." },
          { name: "Warm chocolate fondant", price: "70 MAD", desc: "Baked to order, molten center, vanilla ice cream." }
        ]
      },
      gallery: {
        kicker: "Gallery",
        title: "A glimpse in photos",
        subtitle: "Plates, room and moments captured at GLAZ.",
        items: [
          { src: "assets/images/plats02.png", caption: "Bright dining room" },
          { src: "assets/images/plats03.png", caption: "Wine bar" },
          { src: "assets/images/plats04.png", caption: "Signature dish" },
          { src: "assets/images/plats05.png", caption: "Table details" },
          { src: "assets/images/plats06.png", caption: "Dessert" },
          { src: "assets/images/menu1.png", caption: "Current menu" }
        ]
      },
      reviews: {
        kicker: "Reviews",
        title: "What guests say",
        subtitle: "Feedback on welcome, food and mood.",
        items: [
          {
            author: "Wissal K.",
            text: "Roasted Camembert was delicious and pricing is reasonable. Friendly clientele too.",
            rating: 5
          },
          {
            author: "Nadia",
            text: "New menu is excellent! Great ambiance as always, thanks for the lovely moment.",
            rating: 5
          }
        ]
      },
      contact: {
        kicker: "Contact",
        title: "Hours & bookings",
        subtitle: "Questions or booking by phone or WhatsApp."
      },
      map: {
        kicker: "Access",
        title: "Find us",
        subtitle: "25 Rue Ahmed El Mokri, Casablanca 20000.",
        badge: "Gauthier district",
        address: "25 Rue Ahmed El Mokri, Casablanca 20000",
        cta: "Open in Maps"
      },
      cta: { call: "Call", whatsapp: "WhatsApp info" },
      hours: [
        { day: "Monday", time: "12:00 – 3:00 PM / 6:00 PM – 1:00 AM" },
        { day: "Tuesday", time: "12:00 – 3:00 PM / 6:00 PM – 1:00 AM" },
        { day: "Wednesday", time: "12:00 – 3:00 PM / 6:00 PM – 1:00 AM" },
        { day: "Thursday", time: "12:00 – 3:00 PM / 6:00 PM – 1:00 AM" },
        { day: "Friday", time: "12:00 – 3:00 PM / 6:00 PM – 1:00 AM" },
        { day: "Saturday", time: "12:00 – 3:00 PM / 6:00 PM – 1:00 AM" },
        { day: "Sunday", time: "Closed" }
      ]
    },
    ar: {
      meta: {
        title: "غلاز الدار البيضاء | مطبخ موسمي وبار نبيذ",
        description: "أطباق موسمية مختارة وقائمة نبيذ منسقة وخدمة دافئة. مفتوح للغداء والعشاء."
      },
      brand: { city: "الدار البيضاء", footer: "الدار البيضاء، المغرب" },
      nav: {
        experience: "التجربة",
        menu: "القائمة",
        gallery: "معرض الصور",
        reviews: "آراء الضيوف",
        contact: "اتصال",
        map: "الموقع"
      },
      hero: {
        kicker: "مطعم وبار نبيذ",
        title: "مطبخ موسمي وأجواء مضيئة",
        subtitle: "أطباق دقيقة، قبو مختار وخدمة منتبهة. مفتوح للغداء والعشاء في الدار البيضاء.",
        badge: "مطبخ ونبيذ مختار",
        badges: ["مطبخ السوق", "بار نبيذ", "فريق مضياف"]
      },
      experience: {
        kicker: "التجربة",
        title: "لماذا تختارنا",
        subtitle: "طاولة ودية بقائمة قصيرة تتغير مع المواسم وفريق يهتم بتجربتك.",
        cards: [
          { title: "منتجات موسمية", text: "قائمة مركزة تتحرك مع السوق وأطباق واضحة." },
          { title: "قبو مختار", text: "اختيار نبيذ وكوكتيلات مع توافق بسيط لكل طبق." },
          { title: "خدمة سلسة", text: "ترحيب دافئ، إيقاع متحكم وأجواء مريحة." }
        ]
      },
      menu: {
        kicker: "القائمة",
        title: "مختارات",
        subtitle: "أسعار تقريبية بالدرهم وقد تتغير حسب السوق.",
        note: "خدمة غداء وعشاء",
        items: [
          { name: "فيليه سلمون", price: "210 درهم", desc: "كراث مطهو، صلصة زبدة بالأعشاب البحرية، روميسكو فستق." },
          { name: "بافيت بالكراث", price: "185 درهم", desc: "كرنب مطهو، صلصة نبيذ أحمر، بطاطس مقلية رفيعة." },
          { name: "إسكالوب سان جاك", price: "260 درهم", desc: "فيلوتيه ذرة، برغموت، خضار خضراء." },
          { name: "سمك سول مينيار", price: "215 درهم", desc: "زبدة بنية، بطاطس جديدة، أعشاب طازجة." },
          { name: "فيليه سان بيير", price: "220 درهم", desc: "بيوريه قرنبيط، مخلل شمندر، صلصة كشمش." },
          { name: "تارتار لحم مميز", price: "180 درهم", desc: "لحم بقر مفروم بالسكين، صفار منقوع صويا، بطاطس مقلية رفيعة." },
          { name: "طبق تاباس السوق", price: "120 درهم", desc: "اختيار للمشاركة ومنتجات يومية وفوكاتشيا منزلية." },
          { name: "فوندا شوكولاتة", price: "70 درهم", desc: "حلوى دافئة بمركز سائل مع آيس كريم فانيليا." }
        ]
      },
      gallery: {
        kicker: "معرض الصور",
        title: "نظرة سريعة",
        subtitle: "أطباق، قاعة وصور للحظات في غلاز.",
        items: [
          { src: "assets/images/plats02.png", caption: "قاعة مضيئة" },
          { src: "assets/images/plats03.png", caption: "بار نبيذ" },
          { src: "assets/images/plats04.png", caption: "طبق مميز" },
          { src: "assets/images/plats05.png", caption: "تفاصيل الطاولة" },
          { src: "assets/images/plats06.png", caption: "حلوى" },
          { src: "assets/images/menu1.png", caption: "قائمة اليوم" }
        ]
      },
      reviews: {
        kicker: "آراء الضيوف",
        title: "ماذا يقولون",
        subtitle: "انطباعات حول الترحيب والطعام والأجواء.",
        items: [
          { author: "ويسال ك.", text: "كاممبير مشوي لذيذ والأسعار مناسبة. زبائن لطفاء.", rating: 5 },
          { author: "نادية", text: "القائمة الجديدة ممتازة! أجواء رائعة كالعادة، شكراً على اللحظة الجميلة.", rating: 5 }
        ]
      },
      contact: {
        kicker: "اتصال",
        title: "المواعيد والحجز",
        subtitle: "أسئلة أو حجز عبر الهاتف أو واتساب."
      },
      map: {
        kicker: "الموقع",
        title: "تجدنا هنا",
        subtitle: "25 شارع أحمد المقري، الدار البيضاء 20000.",
        badge: "حي غوتييه",
        address: "25 شارع أحمد المقري، الدار البيضاء 20000",
        cta: "افتح في الخرائط"
      },
      cta: { call: "اتصال", whatsapp: "واتساب للمعلومات" },
      hours: [
        { day: "الإثنين", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "الثلاثاء", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "الأربعاء", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "الخميس", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "الجمعة", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "السبت", time: "12:00 – 15:00 / 18:00 – 01:00" },
        { day: "الأحد", time: "مغلق" }
      ]
    }
  };

  const textNodes = document.querySelectorAll('[data-i18n]');
  const langButtons = document.querySelectorAll('.lang-btn');
  const heroBadges = document.getElementById('hero-badges');
  const experienceCards = document.getElementById('experience-cards');
  const menuList = document.getElementById('menu-list');
  const galleryGrid = document.getElementById('gallery-grid');
  const reviewsGrid = document.getElementById('reviews-grid');
  const hoursGrid = document.getElementById('hours-grid');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileToggle = document.querySelector('.mobile-toggle');

  function get(obj, path) {
    return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
  }

  function clear(el) {
    while (el && el.firstChild) el.removeChild(el.firstChild);
  }

  function renderBadges(arr) {
    clear(heroBadges);
    arr.forEach((label) => {
      const span = document.createElement('span');
      span.className = 'badge';
      span.textContent = label;
      heroBadges.appendChild(span);
    });
  }

  function renderCards(cards) {
    clear(experienceCards);
    cards.forEach((card) => {
      const div = document.createElement('div');
      div.className = 'card';
      const h = document.createElement('h3');
      h.textContent = card.title;
      const p = document.createElement('p');
      p.textContent = card.text;
      div.append(h, p);
      experienceCards.appendChild(div);
    });
  }

  function renderMenu(items) {
    clear(menuList);
    items.forEach((item) => {
      const div = document.createElement('div');
      div.className = 'card menu-item';
      const title = document.createElement('h3');
      title.textContent = item.name;
      const price = document.createElement('div');
      price.className = 'menu-price';
      price.textContent = item.price;
      const desc = document.createElement('p');
      desc.textContent = item.desc;
      div.append(title, price, desc);
      menuList.appendChild(div);
    });
  }

  function renderGallery(items) {
    clear(galleryGrid);
    items.forEach((item) => {
      const wrap = document.createElement('div');
      wrap.className = 'gallery-tile';
      const img = document.createElement('img');
      img.src = item.src;
      img.loading = 'lazy';
      img.alt = item.caption;
      const caption = document.createElement('div');
      caption.className = 'gallery-caption';
      caption.textContent = item.caption;
      wrap.append(img, caption);
      galleryGrid.appendChild(wrap);
    });
  }

  function renderReviews(items) {
    clear(reviewsGrid);
    items.forEach((item) => {
      const div = document.createElement('div');
      div.className = 'review';
      const header = document.createElement('header');
      const author = document.createElement('strong');
      author.textContent = item.author;
      const stars = document.createElement('div');
      stars.className = 'stars';
      stars.setAttribute('aria-label', `${item.rating} / 5`);
      for (let i = 0; i < item.rating; i += 1) {
        const s = document.createElement('span');
        s.className = 'star';
        s.textContent = '★';
        stars.appendChild(s);
      }
      header.append(author, stars);
      const p = document.createElement('p');
      p.textContent = item.text;
      div.append(header, p);
      reviewsGrid.appendChild(div);
    });
  }

  function renderHours(hours) {
    clear(hoursGrid);
    hours.forEach((row) => {
      const line = document.createElement('div');
      line.className = 'hour-line';
      const d = document.createElement('div');
      d.className = 'hour-day';
      d.textContent = row.day;
      const t = document.createElement('div');
      t.className = 'hour-time';
      t.textContent = row.time;
      line.append(d, t);
      hoursGrid.appendChild(line);
    });
  }

  function updateText(lang) {
    const dict = data[lang];
    textNodes.forEach((node) => {
      const key = node.dataset.i18n;
      const val = get(dict, key);
      if (typeof val === 'string') node.textContent = val;
    });
    renderBadges(dict.hero.badges);
    renderCards(dict.experience.cards);
    renderMenu(dict.menu.items);
    renderGallery(dict.gallery.items);
    renderReviews(dict.reviews.items);
    renderHours(dict.hours);
    updateMeta(dict.meta);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  function updateMeta(meta) {
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    if (twTitle) twTitle.setAttribute('content', meta.title);
    if (ogDesc) ogDesc.setAttribute('content', meta.description);
    if (twDesc) twDesc.setAttribute('content', meta.description);
    const ld = document.getElementById('structured-data');
    if (ld) {
      try {
        const json = JSON.parse(ld.textContent);
        json.description = meta.description;
        ld.textContent = JSON.stringify(json, null, 2);
      } catch (e) {
        /* ignore */
      }
    }
  }

  function bindLangSwitch() {
    langButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        langButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        updateText(lang);
      });
    });
  }

  function bindMobileNav() {
    if (!mobileToggle) return;
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('show');
      mobileToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
      mobileToggle.innerHTML = `<img src="assets/svg/${isOpen ? 'close' : 'menu'}.svg" alt="" />`;
    });
    mobileNav.querySelectorAll('a').forEach((link) =>
      link.addEventListener('click', () => mobileNav.classList.remove('show'))
    );
  }

  bindLangSwitch();
  bindMobileNav();
  updateText('fr');
})();
