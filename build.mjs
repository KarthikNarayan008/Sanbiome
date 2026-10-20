// Static site generator: `node build.mjs` writes ./dist. No dependencies.
import { mkdirSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import cfg from "./site.config.mjs";
import { programs, pages, why, steps, faqs, articles, plannedArticles, blogCategories, legal } from "./content.mjs";

const OUT = "dist";
const urls = [];
const book = (type) => cfg.bookingLinks[type] || "/contact/";
const btn = (href, text, cls = "") => `<a class="btn ${cls}" href="${href}">${text}</a>`;
const list = (items) => `<ul class="ticks">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

function write(path, html, { index = true } = {}) {
  const file = path === "/" ? "index.html" : path.endsWith(".html") ? path.slice(1) : join(path, "index.html");
  mkdirSync(dirname(join(OUT, file)), { recursive: true });
  writeFileSync(join(OUT, file), html);
  if (index) urls.push(path);
}

const nav = [["/", "Home"], ["/about/", "About Sanbiome"], ["/programs/", "Our Programs"], ["/gut-health/", "Gut Health"],
  ["/hormonal-health/", "Hormonal Health"], ["/womens-health/", "Women's Health"], ["/blog/", "Resources"], ["/contact/", "Contact"]];

const link = (h, t, path) => `<a href="${h}"${h === path ? ' aria-current="page"' : ""}>${t}</a>`;
const progPaths = ["/programs/", ...programs.map((p) => `/${p.slug}/`)];

function layout({ title, desc, path, body, ld, noindex }) {
  const full = `${title} | Sanbiome`;
  const url = cfg.siteUrl + path;
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title.includes("Sanbiome") ? title : full}</title>
<meta name="description" content="${desc}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">`}
<meta property="og:type" content="website"><meta property="og:site_name" content="Sanbiome">
<meta property="og:title" content="${title}"><meta property="og:description" content="${desc}">
<meta property="og:url" content="${url}"><meta property="og:image" content="${cfg.siteUrl}/assets/logo.jpg">
<meta name="theme-color" content="#24483A">
<link rel="icon" type="image/png" href="/assets/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Figtree:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/style.css">
${cfg.bookingLinks.free.includes("calendly.com") ? '<link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css"><script src="https://assets.calendly.com/assets/external/widget.js" async></script>' : ""}
${cfg.analyticsDomain ? `<script defer data-domain="${cfg.analyticsDomain}" src="https://plausible.io/js/script.js"></script>` : ""}
${ld ? `<script type="application/ld+json">${JSON.stringify(ld)}</script>` : ""}
</head><body>
<a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap bar">
  <a class="brand" href="/"><img src="/assets/logo.jpg" alt="Sanbiome. Healthy Gut. Balanced Hormones." width="96" height="90"></a>
  <button class="menu" aria-expanded="false" aria-controls="nav">Menu</button>
  <nav id="nav" aria-label="Main">${link("/", "Home", path)}${link("/about/", "About Sanbiome", path)}
    <div class="dd"><a href="/programs/"${progPaths.includes(path) ? ' aria-current="page"' : ""}>Our Programs</a>
      <div class="sub">${[["/programs/", "All programs"], ...programs.map((p) => [`/${p.slug}/`, p.name])].map(([h, t]) => link(h, t, path)).join("")}</div></div>
    ${link("/blog/", "Resources", path)}${link("/contact/", "Contact", path)}
    ${btn(book("free"), "Book a Consultation", "sm")}</nav>
</div></header>
<main id="main">${body}</main>
<footer><div class="wrap foot">
  <div><img src="/assets/logo.jpg" alt="Sanbiome" width="120" height="112">
    <p>Evidence-based, personalized nutrition for gut health, hormonal health, metabolic wellness and women's health.</p></div>
  <div><h2>Explore</h2>${nav.slice(1).map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}<a href="/diabetes-metabolic-health/">Diabetes &amp; Metabolic Health</a></div>
  <div><h2>Get in touch</h2>
    ${cfg.email ? `<a href="mailto:${cfg.email}">${cfg.email}</a>` : ""}
    ${cfg.whatsapp ? `<a href="https://wa.me/${cfg.whatsapp}">WhatsApp</a>` : ""}
    ${cfg.instagram ? `<a href="${cfg.instagram}" rel="noopener">Instagram</a>` : ""}
    ${cfg.linkedin ? `<a href="${cfg.linkedin}" rel="noopener">LinkedIn</a>` : ""}
    <a href="${book("free")}">Book a consultation</a></div>
  <div><h2>Policies</h2>${Object.entries(legal).map(([k, v]) => `<a href="/${k}/">${v.title}</a>`).join("")}</div>
</div><p class="wrap fine">Nutrition support does not replace diagnosis or treatment by a qualified medical professional. Outcomes vary. © ${new Date().getFullYear()} Sanbiome. All rights reserved.</p></footer>
<script src="/assets/app.js" defer></script>
</body></html>`;
}

const cta = (h, p, a = "free") => `<section class="band"><div class="wrap narrow"><h2>${h}</h2><p>${p}</p>
  <div class="actions">${btn(book(a), "Book a Free 30-Minute Consultation", "light")}${btn("/programs/", "Explore Our Programs", "ghost")}</div></div></section>`;

const hero = (h1, lede, extra = "") => `<section class="pagehead"><div class="wrap narrow"><h1>${h1}</h1><p class="lede">${lede}</p>${extra}</div></section>`;

const panel = (p) => `<div class="panel"><div><h2>${p.h}</h2>${p.intro ? `<p>${p.intro}</p>` : ""}</div>
  <div>${p.items ? list(p.items) : ""}${p.note ? `<p class="note">${p.note}</p>` : ""}</div></div>`;

const tile = (p) => `<div class="tile" style="--w:${p.w || 3}"><h2>${p.h}</h2>${p.intro ? `<p>${p.intro}</p>` : ""}${p.items ? list(p.items) : ""}${p.note ? `<p class="note">${p.note}</p>` : ""}</div>`;

const details = (slug) => {
  const d = cfg.programDetails[slug] || {};
  const rows = [["Duration", d.duration], ["Consultation frequency", d.frequency], ["Response time", d.responseTime], ["Fee", d.fee]].filter(([, v]) => v);
  return rows.length ? `<dl class="facts">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>` : "";
};

const compare = () => `<table class="compare"><thead><tr><th>Program</th><th>Primary focus</th></tr></thead><tbody>
  ${programs.map((p) => `<tr><th scope="row"><a href="/${p.slug}/">${p.name}</a></th><td>${p.short}</td></tr>`).join("")}
  <tr><th scope="row">Not sure where to start?</th><td><a href="${book("free")}">Book a free 30-minute consultation</a></td></tr></tbody></table>`;

// ---- Home
const home = `
<section class="hero"><div class="wrap herogrid">
  <div class="rise"><h1>Your health journey starts from within.</h1>
    <p class="lede">Personalized, evidence-based nutrition for your gut, hormones and metabolic health, built around everyday Indian food.</p>
    <div class="actions">${btn(book("free"), "Book a Free 30-Minute Consultation", "light")}</div></div>
  <div class="choose rise" style="--d:140ms"><h2>What brings you here?</h2>
    ${[["Bloating, acidity, irregular digestion", "gut-health", "Gut Health"], ["Thyroid, fatigue, cravings", "hormonal-health", "Hormonal & Thyroid Health"], ["Blood sugar, prediabetes, insulin resistance", "diabetes-metabolic-health", "Diabetes & Metabolic Health"], ["PCOS, irregular periods, life-stage needs", "womens-health", "Women's Health"]]
      .map(([c, s, n]) => `<a href="/${s}/"><span>${c}<small>${n}</small></span><i aria-hidden="true">&rarr;</i></a>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap narrow"><h2>Healthy gut. Balanced hormones.</h2>
  <p>Bloating, fatigue, constipation, acne, irregular periods and stubborn weight gain are signals worth understanding, not just silencing. They rarely have a single cause: dietary patterns, digestion, sleep, stress, activity, medical history, medications and nutritional deficiencies can all play a part.</p>
  <p>That is why Sanbiome does not prescribe the same diet chart to everyone. Evidence-based nutrition and sustainable lifestyle habits, built around your own story, can support your gut, your hormones and your long-term wellness.</p></div></section>

<section class="sec tint"><div class="wrap"><h2>Our areas of expertise</h2>
  <div class="areas">${programs.map((p) => `<article><h3>${p.name}</h3><p>${p.blurb}</p><p class="small">${p.concerns}</p><a href="/${p.slug}/">Explore Program</a></article>`).join("")}</div></div></section>

<section class="sec"><div class="wrap split"><h2>Why choose Sanbiome?</h2>${list(why)}</div></section>

<section class="sec tint"><div class="wrap"><h2>How it works</h2>
  <ol class="steps">${steps.map((s) => `<li>${s}</li>`).join("")}</ol>
  <p>${btn(book("free"), "Find Your Starting Point")}</p></div></section>

<section class="sec"><div class="wrap founder">
  <figure class="shield"><img src="/assets/founder.jpg" alt="Manisha, Clinical Nutritionist at Sanbiome" width="760" height="985" loading="lazy"></figure>
  <div><h2>Meet the founder</h2>
    <p>Manisha is a Clinical Nutritionist with a B.Sc. and M.Sc. in Food &amp; Nutrition and a Certified Diabetes Educator qualification. She completed her clinical internship at Sir Ganga Ram Hospital and has experience in gut and hormonal health nutrition.</p>
    <p>Her approach is personalized, evidence-based, practical, and focused on sustainable nutrition habits.</p>
    <h3>Qualifications</h3>${list(["B.Sc. in Food & Nutrition", "M.Sc. in Food & Nutrition", "Certified Diabetes Educator", "Clinical internship, Sir Ganga Ram Hospital"])}
    <p class="actions">${btn("/about/", "Meet Your Nutritionist")}</p></div>
</div></section>

${cta("Not sure which program is right for you?", "Start with a conversation about your health concerns and goals. We will help you understand the appropriate next step.")}`;

const orgLd = { "@context": "https://schema.org", "@type": "Organization", name: "Sanbiome", url: cfg.siteUrl, logo: `${cfg.siteUrl}/assets/logo.jpg`,
  description: "Evidence-based, personalized nutrition for gut health, hormonal health, metabolic wellness and women's health.",
  founder: { "@type": "Person", name: "Manisha", jobTitle: "Clinical Nutritionist" },
  sameAs: [cfg.instagram, cfg.linkedin].filter(Boolean) };

write("/", layout({ title: "Sanbiome | Personalized Nutrition for Gut & Hormonal Health", desc: "Evidence-based, personalized nutrition for gut health, hormones, metabolic health and women's health, built around everyday Indian food.", path: "/", body: home, ld: orgLd }));

// ---- About
write("/about/", layout({ title: "About Sanbiome", path: "/about/", desc: "Sanbiome's philosophy, mission and approach to personalized, evidence-based nutrition, and the Clinical Nutritionist behind it.",
  body: hero("Understand your body. Nourish from within.", "Your health deserves more than a generic diet chart.") + `
<section class="sec"><div class="wrap aboutme">
  <img src="/assets/founder.jpg" alt="Manisha, Clinical Nutritionist" width="260" height="337" loading="lazy">
  <div><h2>Meet Manisha</h2>
    <p>Manisha is a Clinical Nutritionist with a B.Sc. and M.Sc. in Food &amp; Nutrition and a Certified Diabetes Educator qualification. She completed her clinical internship at Sir Ganga Ram Hospital and has experience in gut and hormonal health nutrition.</p>
    ${list(["B.Sc. in Food & Nutrition", "M.Sc. in Food & Nutrition", "Certified Diabetes Educator", "Clinical internship, Sir Ganga Ram Hospital"])}</div>
</div></section>
<section class="sec tint"><div class="wrap tiles">
  <div><h2>Philosophy</h2><p>Understand the person first: history, symptoms, lifestyle, food habits and reports. Then build a plan.</p></div>
  <div><h2>Mission</h2><p>Make evidence-based nutrition practical and accessible through individualized guidance, education and ongoing support.</p></div>
  <div><h2>Vision</h2><p>A trusted nutrition brand that helps people understand their bodies and build healthier habits with professional support.</p></div>
</div></section>
<section class="sec"><div class="wrap split">
  <div><h2>What to expect</h2>${list(["A conversation, not a lecture", "A plan that fits Indian home cooking", "Honest guidance on what nutrition can and cannot do", "Regular reviews and changes when something is not working"])}</div>
  <div><h2>Where nutrition fits</h2><p>Two people with the same diagnosis can need very different plans, so medication, symptoms, schedule and preferences shape yours.</p>
    <p>Nutrition works alongside your doctor's diagnosis and treatment. We will tell you when something needs medical evaluation or referral.</p></div>
</div></section>` + cta("Start with a conversation.", "Tell us what you are dealing with and we will help you find the right next step."),
  ld: { "@context": "https://schema.org", "@type": "Person", name: "Manisha", jobTitle: "Clinical Nutritionist", worksFor: { "@type": "Organization", name: "Sanbiome" } } }));

// ---- Programs index
write("/programs/", layout({ title: "Our Programs", path: "/programs/", desc: "Compare Sanbiome's nutrition programs for gut health, hormonal and thyroid health, diabetes and metabolic health, and women's health.",
  body: hero("Our programs", "Four areas of focus, one individual approach. Not sure where you fit? Start with a conversation.") +
    `<section class="sec"><div class="wrap">${compare()}
    <p class="note">Program duration, inclusions, fees and consultation frequency are shared when confirmed with you.</p></div></section>` +
    cta("Not sure where to start?", "A free 30-minute conversation is enough to find the right starting point.") }));

// ---- Program pages
for (const [slug, p] of Object.entries(pages)) {
  write(`/${slug}/`, layout({ title: p.title, desc: p.meta, path: `/${slug}/`,
    body: hero(p.h1, p.lede, details(slug)) + `<section class="sec tint"><div class="wrap tilegrid">${p.panels.map(tile).join("")}</div></section>
    <section class="sec"><div class="wrap narrow">${p.foot ? `<p>${p.foot}</p>` : ""}<p class="note">${p.disclaimer}</p><p>${btn(book(p.ctaType), p.cta)}</p></div></section>`,
    ld: { "@context": "https://schema.org", "@type": "WebPage", name: p.title, description: p.meta } }));
}

// ---- Blog
const pub = articles.filter((a) => a.published);
const fmt = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
write("/blog/", layout({ title: "Resources & Blog", path: "/blog/", desc: "Plain-language, evidence-based articles on gut health, hormones, PCOS, thyroid, blood sugar and healthy Indian eating.",
  body: hero("Resources", "Plain-language, referenced articles on nutrition and health.") + `<section class="sec"><div class="wrap">
  <ul class="cats">${blogCategories.map((c) => `<li>${c}</li>`).join("")}</ul>
  <div class="posts">${pub.map((a) => `<article><p class="small">${a.category}, ${fmt(a.date)}</p><h2><a href="/blog/${a.slug}/">${a.title}</a></h2><p>${a.meta}</p></article>`).join("")}
  ${plannedArticles.map(([c, t]) => `<article class="soon"><p class="small">${c}</p><h2>${t}</h2><p>In preparation.</p></article>`).join("")}</div></div></section>` }));

for (const a of pub) write(`/blog/${a.slug}/`, layout({ title: a.seoTitle, desc: a.meta, path: `/blog/${a.slug}/`,
  body: `<article class="sec"><div class="wrap narrow post"><p class="small"><a href="/blog/">Resources</a> / ${a.category}</p><h1>${a.title}</h1>
  <p class="small">By ${a.author}. Published <time datetime="${a.date}">${fmt(a.date)}</time>.</p>
  ${a.body.map((b) => b.startsWith("<h2>") ? b.replace(/^(<h2>.*?<\/h2>)(.*)$/, "$1<p>$2</p>") : `<p>${b}</p>`).join("")}
  <h2>References</h2><ol class="refs">${a.refs.map((r) => `<li>${r}</li>`).join("")}</ol>
  <p class="note">Medical disclaimer: this article is for general education and is not medical advice. It does not replace diagnosis or treatment by a qualified medical professional.</p>
  <p>${btn(book("free"), "Discuss Your Gut Health Goals")}</p></div></article>`,
  ld: { "@context": "https://schema.org", "@type": "Article", headline: a.title, datePublished: a.date, author: { "@type": "Person", name: "Manisha" }, publisher: { "@type": "Organization", name: "Sanbiome" } } }));

// ---- Contact & booking
write("/contact/", layout({ title: "Book a Consultation & Contact", path: "/contact/", desc: "Book a free 30-minute consultation with Sanbiome.",
  body: hero("Book a consultation", "Start with a free 30-minute conversation about your concerns and goals.") + `
<section class="sec"><div class="wrap narrow"><article class="opt"><h2>Free 30-minute consultation</h2>
  <p>An introductory conversation about your main concerns, goals and possible next steps. It does not include a personalized diet plan.</p>
  ${btn(book("free"), "Book Your Free Consultation")}</article></div></section>
${cfg.testimonials.length ? `<section class="sec"><div class="wrap"><h2>Client feedback</h2><div class="posts">${cfg.testimonials.map((t) => `<blockquote>${t.quote}<footer>${t.name}</footer></blockquote>`).join("")}</div></div></section>` : ""}
<section class="sec"><div class="wrap narrow"><h2>Frequently asked questions</h2>
  ${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}
  <p class="note">Outcomes vary. Nutrition support does not replace diagnosis or treatment by a qualified medical professional.</p></div></section>`,
  ld: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) } }));

// ---- Legal, 404
for (const [k, v] of Object.entries(legal)) write(`/${k}/`, layout({ title: v.title, desc: `${v.title} for Sanbiome.`, path: `/${k}/`,
  body: hero(v.title, "") + `<section class="sec"><div class="wrap narrow post">${v.body.map((b) => `<p>${b}</p>`).join("")}</div></section>` }));
write("/404.html", layout({ title: "Page not found", desc: "This page does not exist.", path: "/404.html", noindex: true,
  body: hero("Page not found", "That link does not lead anywhere.", `<p>${btn("/", "Go to the homepage")}</p>`) }), { index: false });

// ---- Assets, sitemap, robots
mkdirSync(join(OUT, "assets"), { recursive: true });
for (const f of ["logo.jpg", "founder.jpg", "favicon.png", "style.css", "app.js"]) copyFileSync(join("assets", f), join(OUT, "assets", f));
writeFileSync(join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${cfg.siteUrl}${u}</loc></url>`).join("")}</urlset>`);
writeFileSync(join(OUT, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${cfg.siteUrl}/sitemap.xml\n`);
console.log(`Built ${urls.length + 1} pages to ${OUT}/`);
