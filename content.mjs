// All page copy. A panel is {h, intro?, items?, note?}; a page is rendered as hero + panels + CTA.
export const programs = [
  { slug: "gut-health", name: "Gut Health", short: "Digestive symptoms, bowel habits, food tolerance",
    blurb: "Structured support for bloating, constipation, acidity and food-related digestive discomfort.",
    concerns: "Bloating, constipation, acidity, IBS-related symptoms" },
  { slug: "hormonal-health", name: "Hormonal & Thyroid Health", short: "Condition-specific nutrition and nutritional adequacy",
    blurb: "Nutrition alongside medical care for thyroid conditions and metabolic-hormonal concerns.",
    concerns: "Hypothyroidism, hyperthyroidism, Hashimoto's, fatigue, cravings" },
  { slug: "diabetes-metabolic-health", name: "Diabetes & Metabolic Health", short: "Blood glucose and metabolic nutrition support",
    blurb: "Everyday Indian meals planned around your glucose patterns, medication and preferences.",
    concerns: "Type 1 and 2 diabetes, prediabetes, insulin resistance" },
  { slug: "womens-health", name: "Women's Health", short: "PCOS, endometriosis, menstrual health, and life-stage nutrition",
    blurb: "Nutrition that fits menstrual health, reproductive life stages and condition-specific needs.",
    concerns: "PCOS/PCOD, endometriosis, irregular periods, perimenopause" },
];

const seeDoctor = "This page is educational. Nutrition support complements, and never replaces, diagnosis or treatment by a qualified medical professional.";

export const pages = {
  "gut-health": {
    title: "3-Month Gut Health Program",
    meta: "A personalised 3-month nutrition program for bloating, constipation, acidity and food-related digestive discomfort, built around everyday Indian food.",
    h1: "Your gut health journey: understand, nourish, and rebuild healthy habits.",
    lede: "A personalized nutrition program for people experiencing digestive discomfort or looking to improve their everyday digestive health through structured, evidence-based nutrition and lifestyle guidance.",
    cta: "Discuss Your Gut Health Goals", ctaType: "free",
    foot: "These are illustrative stages, not guaranteed outcomes or a substitute for condition-specific medical treatment.",
    panels: [
      { h: "Who may benefit?", intro: "The program may be appropriate if you experience:",
        items: ["Frequent bloating or excessive gas", "Constipation or irregular bowel movements", "Acidity or reflux symptoms", "Food-related digestive discomfort", "IBS-related symptoms", "Difficulty identifying food triggers", "Digestive symptoms alongside other nutrition concerns"],
        note: "Persistent or severe symptoms, blood in stool, unexplained weight loss or night-time symptoms need medical evaluation first." },
      { h: "What is included?", intro: "Final inclusions, consultation frequency and support hours are confirmed with you before you enrol.",
        items: ["Initial nutrition assessment", "Personalized meal planning", "Relevant report review", "Follow-up consultations", "Symptom and food tracking", "Meal substitutions and recipe guidance", "Lifestyle and habit guidance", "Progress summaries", "Ongoing communication within defined support hours"] },
      { h: "Month 1: Assess & understand", w: 2, items: ["Detailed dietary and digestive history", "Review of bowel habits, symptoms, meal timing, sleep, stress and relevant medical reports", "Personalized food and symptom diary", "Identification of potential dietary triggers", "Initial nutrition and lifestyle plan"] },
      { h: "Month 2: Personalize & improve", w: 2, items: ["Review of symptom patterns and progress", "Refinement of meal composition, fibre intake, hydration and meal timing as appropriate", "Gradual dietary adjustments based on individual tolerance", "Suitable prebiotic and probiotic foods where appropriate", "Structured elimination and reintroduction only when clinically indicated", "Practical meal substitutions and guidance"] },
      { h: "Month 3: Consolidate & sustain", w: 2, items: ["Review of changes in symptoms, bowel habits and nutrition consistency", "Adjusting dietary variety and food tolerance strategies", "A practical, sustainable meal routine", "A personalized maintenance strategy", "Identifying when referral to a gastroenterologist or other clinician is appropriate"] },
    ],
  },
  "hormonal-health": {
    title: "Hormonal & Thyroid Health",
    meta: "Personalised nutrition for thyroid and hormonal-metabolic health, delivered alongside your doctor's care.",
    h1: "Personalized nutrition for hormonal and thyroid health.",
    lede: "Hormonal health is influenced by multiple factors. Nutrition can support overall health, metabolic function, nutritional adequacy, and condition-specific care alongside appropriate medical treatment.",
    cta: "Explore Hormonal Health Support", ctaType: "free",
    panels: [
      { h: "Thyroid health", intro: "Nutrition support for people with diagnosed hypothyroidism, hyperthyroidism or Hashimoto's thyroiditis.",
        items: ["Assessment of food patterns and relevant symptoms", "Review of relevant laboratory reports", "Nutritional adequacy, including iron, vitamin B12, vitamin D, iodine and other nutrients when appropriate", "Practical meal planning based on individual needs", "Guidance on timing of medication, food and supplements, following your treating clinician's instructions", "Follow-up and progress monitoring"],
        note: "Diet cannot cure thyroid disease or replace thyroid medication." },
      { h: "Hormonal & metabolic health", intro: "Nutrition and lifestyle can support metabolic health, insulin sensitivity, energy balance and overall well-being.",
        items: ["Fatigue and energy patterns", "Cravings and eating patterns", "Weight changes", "Irregular cycles"],
        note: "These are things we assess together. A symptom on its own is not proof of a hormonal disorder; diagnosis belongs to your doctor." },
    ],
  },
  "diabetes-metabolic-health": {
    title: "Diabetes & Metabolic Health",
    meta: "Individualised nutrition support for diabetes, prediabetes and insulin resistance using everyday Indian meals.",
    h1: "Make everyday nutrition work for your blood sugar.",
    lede: "Individualized nutrition support for people managing diabetes, prediabetes, insulin resistance, or related metabolic concerns.",
    cta: "Book a Diabetes Nutrition Consultation", ctaType: "free",
    panels: [
      { h: "What support covers", w: 6, items: ["Type 1 and Type 2 diabetes nutrition support", "Prediabetes and metabolic risk", "Blood glucose and HbA1c education", "Carbohydrate awareness and balanced meal composition", "Protein, fibre and appropriate fat intake", "Indian-food-based meal planning", "Portion guidance and meal timing", "Nutrition for sustainable weight management where appropriate", "Relevant laboratory report review", "Hypoglycaemia awareness and coordination with your treating clinician", "Follow-up to assess progress and adjust nutrition strategies"] },
      { h: "Your needs are individual", w: 6, intro: "Nutritional requirements differ according to medication, glucose patterns, health status and personal preferences.",
        note: "Never stop or change your medication on your own. Medication decisions stay with your treating doctor. Sanbiome does not promise diabetes reversal or any specific HbA1c result." },
    ],
  },
  "womens-health": {
    title: "Women's Health",
    meta: "Personalised nutrition for PCOS/PCOD, endometriosis, irregular periods, perimenopause and other women's health needs.",
    h1: "Nutrition that understands women's health.",
    lede: "Personalized nutrition support for women navigating menstrual health concerns, reproductive life stages, and condition-specific nutritional needs.",
    cta: "Start Your Women's Health Journey", ctaType: "free",
    panels: [
      { h: "PCOS / PCOD", items: ["Nutrition support for diagnosed PCOS", "Insulin resistance and metabolic health", "Sustainable weight management where appropriate", "Menstrual and symptom tracking", "Adequate protein, fibre and micronutrient intake", "Practical meal planning and lifestyle guidance", "Support aligned with medical care"] },
      { h: "Endometriosis", items: ["Personalized nutrition assessment", "Balanced, nutritionally adequate meal planning", "Support for digestive symptoms that may coexist with endometriosis", "Identification of individual food tolerances", "Attention to nutritional adequacy and quality of life", "Coordination with your treating gynaecologist"],
        note: "Diet does not cure endometriosis or remove endometrial lesions." },
      { h: "Irregular periods", items: ["Assessment of dietary habits, lifestyle and relevant medical history", "Support for adequate energy and nutrient intake", "Discussion of relevant reports when available", "Guidance on sustainable eating patterns", "Referral for medical evaluation when irregularity may point to an underlying condition"] },
      { h: "Other concerns", items: ["PMS-related nutrition concerns", "Menstrual discomfort", "Iron deficiency and low ferritin, when identified", "Nutritional concerns related to fertility planning", "Perimenopause and menopause", "Bone health and nutritional adequacy"],
        note: "Irregular or absent periods, severe menstrual pain and unusually heavy bleeding warrant medical evaluation." },
    ],
  },
};
for (const p of Object.values(pages)) p.disclaimer = seeDoctor;

export const why = [
  "Personalized nutrition plans", "Evidence-based recommendations", "Indian-food-friendly meal planning",
  "Symptoms and relevant lab reports taken into account", "Regular progress reviews and plan adjustments",
  "Practical lifestyle and habit guidance", "Individual support, not extreme restrictions",
  "Nutrition care that complements medical treatment where needed",
];

export const steps = [
  "Book a consultation.",
  "Discuss your health history, concerns, goals, lifestyle and food preferences.",
  "Receive a personalized nutrition strategy if you enrol in a suitable program.",
  "Review progress, discuss challenges, and adjust the plan as appropriate.",
];

export const faqs = [
  ["How does online nutrition consultation work?", "You book a slot, then meet Manisha by video or phone call. You talk through your history, symptoms, food habits and goals. Detailed health information is shared through a secure process, not the public booking page."],
  ["Is the diet plan personalized?", "Yes. Plans are built around your health history, symptoms, lifestyle, food preferences and relevant reports. Sanbiome does not hand out a standard diet chart."],
  ["Do I need to share blood reports?", "Reports help when they are relevant to your concern, but you can start the conversation without them. You will be told which reports, if any, would be useful."],
  ["Can I follow the plan with regular Indian home-cooked meals?", "That is the aim. Plans are built around everyday Indian food and your family's kitchen, not special products."],
  ["Is a three-month program compulsory?", "No. You can start with a consultation and decide afterwards whether a program suits you."],
  ["What happens during the free consultation?", "A 30-minute introductory conversation about your main concerns, goals and possible next steps. It does not include a personalized diet plan."],
  ["Can nutrition replace my prescribed medication?", "No. Nutrition support works alongside your treatment. Never stop or change medication without speaking to your doctor."],
  ["What happens if I have multiple health concerns?", "That is common. Your concerns are looked at together, and the first consultation helps decide the right starting point."],
  ["How can I contact Sanbiome between appointments?", "Support during a program happens within defined support hours that are agreed when you enrol. Sanbiome does not handle medical emergencies; contact your doctor or local emergency services."],
];

export const articles = [
  { slug: "prebiotics-vs-probiotics", category: "Gut Health", title: "Prebiotics vs probiotics: what is the difference?",
    seoTitle: "Prebiotics vs Probiotics: What Is the Difference? | Sanbiome",
    meta: "Prebiotics feed gut microbes; probiotics are live microbes. Here is how they differ, where they show up in Indian food, and when to ask for advice.",
    author: "Manisha, Clinical Nutritionist", date: "2026-10-20", published: true,
    body: [
      "The two words sound alike and are often used as if they mean the same thing. They do not.",
      "<h2>Probiotics are live microbes</h2>The international scientific consensus defines probiotics as live microorganisms that, when given in adequate amounts, confer a health benefit on the host. Both parts matter: the microbes must be alive, and the benefit must be shown for that specific strain and dose. A product labelled “probiotic” is not automatically useful for every complaint.",
      "<h2>Prebiotics are food for microbes</h2>A prebiotic is a substrate that is selectively used by host microorganisms to give a health benefit. In everyday terms, these are mainly certain fibres, such as inulin and fructo-oligosaccharides, found in foods like onion, garlic, banana, oats and legumes.",
      "<h2>What about dahi, buttermilk and idli batter?</h2>Fermented foods contain live microbes, but they only count as probiotics if the strain and its benefit have been shown. They can still be a good part of a varied diet.",
      "<h2>When to be careful</h2>Fibres that feed gut microbes also ferment, and in some people, particularly with IBS-type symptoms, a sudden increase can worsen bloating and gas. Add them gradually and talk to a professional if symptoms persist. Persistent bloating, blood in stool, unexplained weight loss or pain that wakes you at night need medical evaluation.",
    ],
    refs: [
      "Hill C, et al. Expert consensus document: The International Scientific Association for Probiotics and Prebiotics consensus statement on the scope and appropriate use of the term probiotic. Nat Rev Gastroenterol Hepatol. 2014;11(8):506-514.",
      "Gibson GR, et al. Expert consensus document: The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of prebiotics. Nat Rev Gastroenterol Hepatol. 2017;14(8):491-502.",
      "Marco ML, et al. The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on fermented foods. Nat Rev Gastroenterol Hepatol. 2021;18(3):196-208.",
    ] },
];

export const plannedArticles = [
  ["Gut Health", "Common causes of bloating and when to seek medical advice"],
  ["Diabetes and Blood Sugar", "Understanding HbA1c and blood glucose"],
  ["PCOS and Women's Health", "Nutrition considerations for PCOS"],
  ["Thyroid Health", "Thyroid nutrition: what evidence actually supports"],
  ["Micronutrients", "Iron, vitamin B12 and vitamin D: understanding nutritional deficiencies"],
];

export const blogCategories = ["Gut Health", "Hormonal Health", "PCOS and Women's Health", "Thyroid Health", "Diabetes and Blood Sugar", "Micronutrients", "Nutrition Myths", "Healthy Indian Eating"];

export const legal = {
  privacy: { title: "Privacy Policy", body: [
    "Sanbiome collects only what you share when you book a consultation or contact us, such as your name, email and mobile number. We use it to arrange your consultation and respond to you. Bookings are handled through Calendly, which has its own privacy policy.",
    "Please do not put detailed medical history in a booking note or message. Detailed health information is collected only through a secure process after you have booked.",
    "We do not sell your data. If privacy-friendly analytics is enabled, it does not use cookies or track you across sites.",
    "To ask for your data to be corrected or deleted, contact us using the details on the Contact page."] },
  terms: { title: "Terms and Conditions", body: [
    "Sanbiome provides nutrition information and individual nutrition consultations. Booking a consultation or enrolling in a program creates a service relationship only for the services agreed with you.",
    "Outcomes vary between individuals and are not guaranteed. Content on this website is for general education and is not medical advice.",
    "Program inclusions, fees, consultation frequency and support hours are confirmed with you before you enrol. Website content may be updated at any time."] },
  refund: { title: "Cancellation and Refund Policy", body: [
    "To reschedule or cancel a consultation, contact Sanbiome as early as possible using the details on the Contact page.",
    "Rescheduling, cancellation and refund terms for programs are confirmed at the time of booking.",
    "If a payment is taken and the consultation cannot take place because of Sanbiome, you will be offered a new slot or a refund."] },
  disclaimer: { title: "Medical Disclaimer", body: [
    "Sanbiome provides nutrition support and education. It does not diagnose, treat, cure or prevent any disease, and it is not a substitute for advice from your doctor.",
    "Do not stop, start or change any medication because of anything on this website. Speak to your treating clinician.",
    "Severe or persistent symptoms, unusually heavy bleeding, severe pain, blood in stool or unexplained weight loss need prompt medical evaluation. In an emergency, contact local emergency services."] },
};
