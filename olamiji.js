/* =====================================================================
   EDIT EVERYTHING HERE  -  you do not need to touch the code below.
   - Each person is one block between { } . Keep the commas.
   - To add a person: copy a block, paste it under the last one, edit it.
   - To remove a person: delete their whole block.
   - Photo: put the picture in the same folder and write its file name,
     e.g. photo: "pastor.jpg"   (leave "" to show their initials)
   ===================================================================== */
 
const CHURCH = {
  name: "RCCG GOOD NEWS CENTER",
  parish: "Good News Parish Oye-Ekiti",
  tagline: "Spreading Joy, Peace & Salvation",
  verse: "Jesus Christ the same yesterday, today and forever. (Hebrews 13:8)",
  about: "Welcome to the Redeemed Christian Church of God, Good News Parish. We are a family of believers committed to worship, the Word, fellowship and service.",
  info: [
    { title: "Sunday Service",   text: "8:00 AM" },
    { title: "Bible Study (Digging Deep)",      text: "Tuesday, 5:00 PM" },
    { title: "Prayer Meeting (Faith Clinic)",   text: "Friday, 5:00 PM" },
    { title: "Youth Service",   text: "Friday, 4PM:00 PM" }
  ],
  address: "Egbe-Ausi Community Nursery and Primary School, opposite Nazeem Filling Station, Oye Ekiti.",
  phone: " 08141816566, 07063447935, 09128142887,",
  whatsapp: "+ 08141816566, 07063447935, 09128142887,",
  email: "alabijeremiah717@gmail.com"
};
 
/* ---------- PASTORS & ASSISTANT PASTOR ---------- */
const PASTORS = [
  {
    name: "Pst.ALABI JEREMIAH",
    role: "Pastor-in-Charge",
    phone: "+234  814 181 6566",
    email: "alabijeremiah717@gmail.com",
    dob: "Nil",
    state: "Nil",
    bio: "",
    photo: ""
  },
  {
    name: "Pst.Mrs. AJIBODUN FUNMILAYO",
    role: "Assistant Pastor",
    phone: "+234 706 344 7935",
    email: "",
    dob: "Nil",
    state: "Nil",
    bio: "",
    photo: ""
  },
];
 
/* ---------- EXCOS ---------- */
const EXCOS = [
  { name: "Sis Sodiq Opeyemi", role: "President",           discipline: "Sociology", phone: "07013148478", email: "sodiqaminatu613@gmail.com", dob: "", state: "", bio: "Sis Opeyemi the President of RCCG Goodnews Centre, Good News Parish excos. She is a skilled beauty entrepreneur offering hair extensions, makeup, gele tying, dreadlocks, pedicure, nails, wig revamping, wig extensions and lashes. She is passionate about helping people look and feel their best, and she brings the same dedication, creativity and attention to detail to leading the team and serving in the house of God.", photo: "" },
  { name: "Bro Goodluck", role: "Vice President",      discipline: "Physiology", phone: "09064947671", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Bro Adio Olamiji", role: "General Secretary and Technical Director", discipline: "Software Engineering", phone: "09119249496", email: "olamijiadio53@gmail.com", dob: "20th, April", state: "Lagos State", bio: " Bro Olamiji is the General Secretary of RCCG Goodnews Centre, Good News Parish. He is a passionate student of software engineering who loves building useful things with technology. He serves faithfully in the house of God and is committed to excellence, teamwork and service. He is the one behind this church website.", photo: "Olamiji.jpg" },
  { name: "Sis Awoyemi Oluwakemi ", role: "Assistant Secretary", discipline: "Education Management", phone: "07049344176", email: "", dob: "", state: "", bio: "", photo: "oluwakemi.png" },
  { name: "Sis Ademilola Joy", role: "Treasurer", discipline: "Economics", phone: "07053262453", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Sis Ajayi Success", role: "Bible Chord and Academic Chord", discipline: "Computer Science", phone: "08035756733", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Bro Juwon", role: "Musical Director", discipline: "Economics Education", phone: "0913297113", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Sis Awoyemi Ibukun", role: "Prayer Chord and Ass.Musical Director", discipline: "Bussiness Administration",            phone: "08121691086", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Sis Fruitful", role: "Media Director", discipline: "Mass Communication", phone: "07014969668", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Bro Odeleye Ibunkun", role: "Ass.Media Director and Sanitation Chord", discipline: "Nil",     phone: "", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Sis Olamide ", role: "Drama/Spoken Word Chord and Ass.Sanitation Officer", discipline: "", phone: "09020648723", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Sis Favor ", role: "Academic Officer", discipline: "", phone:"9026858447", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Sis Favor ", role: "Evangelism Chord", discipline: "Demographic and Security Study", phone:"09137124073", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Sis Deborah", role: "Welfare Director and House Felloship Chord",     discipline: "Mass Communication", phone: "08141784796", email: "", dob: "", state: "", bio: "", photo: "" }
];
 
/* ---------- ALUMNI ---------- */
/* "set" = the year or set they left, used for the filter */
const ALUMNI = [
  { name: "Bro Matthew", role: "Former President",  set: "2025", discipline: "Economics", phone: "", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Sis Ademilola Mercy", role: "Former Vice President",  set: "2025", discipline: "Microbiology", phone: "", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Bro Gabriel", role: "Former Prayer and Bible Study Chord",  set: "2025", discipline: "Computer Science",    phone: "08087242111", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Sis Glory", role: "Former Media Director",  set: "2025", discipline: "Economics",    phone: "07061537911", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Sis Esther", role: "Former Media Director",  set: "2024", discipline: "",    phone: "", email: "", dob: "", state: "", bio: "", photo: "sis esther.png" },
  { name: "Sis Ayomide", role: "Former Sanitation Officer",  set: "2025", discipline: "Bussiness Admin",    phone: "09041488087", email: "", dob: "", state: "", bio: "", photo: "" },
  { name: "Bro Adeleke James", role: "Former Evangelism and Brother's Chord",  set: "2025", discipline: "Economics", phone: "09026543649", email: "", dob: "", state: "", bio: "", photo: "bro james.png" }
];
 
/* =====================================================================
   CODE BELOW - no need to edit
   ===================================================================== */
const $ = id => document.getElementById(id);
const GROUPS = { pastors: PASTORS, excos: EXCOS, alumni: ALUMNI };
 
function esc(s){
  return String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function initials(name){
  return name.replace(/^(Pastor|Pst|Mrs|Mr|Dcn|Deacon|Deaconess|Dr|Engr|Barr|Evang)\.?\s+/i,"")
    .split(/\s+/).slice(0,2).map(w => w[0] || "").join("").toUpperCase();
}
function avatarHTML(p){
  return p.photo
    ? `<img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy" onerror="this.parentNode.textContent='${esc(initials(p.name))}'">`
    : esc(initials(p.name));
}
function cardHTML(p, group, i){
  const sub = p.set ? `${esc(p.discipline)} &middot; Set ${esc(p.set)}` : esc(p.discipline);
  return `<div class="person" data-group="${group}" data-i="${i}" tabindex="0">
    <div class="avatar">${avatarHTML(p)}</div>
    <h3>${esc(p.name)}</h3>
    <div class="role">${esc(p.role)}</div>
    <div class="disc">${sub}</div>
    <div class="more">View biodata</div>
  </div>`;
}
function renderGroup(gridId, group, list){
  $(gridId).innerHTML = list.map((p, i) => cardHTML(p, group, i)).join("");
}
 
/* header / hero / about / contact */
document.title = CHURCH.name + " - " + CHURCH.parish;
$("navName").textContent = CHURCH.name;
$("navSub").textContent = CHURCH.parish;
$("heroName").textContent = CHURCH.name;
$("heroTag").textContent = CHURCH.tagline;
$("heroVerse").textContent = CHURCH.verse;
$("aboutText").textContent = CHURCH.about;
$("aboutGrid").innerHTML = CHURCH.info.map(x => `<div class="info"><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>`).join("");
$("contactBox").innerHTML = `
  <p><strong>Address:</strong> ${esc(CHURCH.address)}</p>
  <p><strong>Phone:</strong> ${esc(CHURCH.phone)}</p>
  <p><strong>WhatsApp:</strong> ${esc(CHURCH.whatsapp)}</p>
  <p><strong>Email:</strong> ${esc(CHURCH.email)}</p>`;
$("footName").textContent = CHURCH.name + ", " + CHURCH.parish;
$("year").textContent = new Date().getFullYear();
 
/* people sections */
renderGroup("pastorGrid", "pastors", PASTORS);
renderGroup("excoGrid", "excos", EXCOS);
 
/* alumni with search + set filter */
const sets = [...new Set(ALUMNI.map(a => a.set).filter(Boolean))].sort().reverse();
$("alSet").innerHTML += sets.map(s => `<option value="${esc(s)}">Set ${esc(s)}</option>`).join("");
 
function renderAlumni(){
  const q = $("alSearch").value.trim().toLowerCase();
  const set = $("alSet").value;
  let shown = 0;
  $("alumniGrid").innerHTML = ALUMNI.map((p, i) => {
    const text = (p.name + " " + p.discipline + " " + p.role).toLowerCase();
    if ((q && !text.includes(q)) || (set && p.set !== set)) return "";
    shown++;
    return cardHTML(p, "alumni", i);
  }).join("");
  $("alEmpty").hidden = shown > 0;
}
$("alSearch").addEventListener("input", renderAlumni);
$("alSet").addEventListener("change", renderAlumni);
renderAlumni();
 
/* biodata pop-up */
const modal = $("modal");
function openBio(group, i){
  const p = GROUPS[group][i];
  $("mAvatar").innerHTML = avatarHTML(p);
  $("mName").textContent = p.name;
  $("mRole").textContent = p.role;
  const rows = [
    ["Position", p.role],
    ["Discipline", p.discipline],
    ["Set / Year", p.set],
    ["Phone", p.phone],
    ["Email", p.email],
    ["Date of Birth", p.dob],
    ["State of Origin", p.state]
  ].filter(r => r[1]);
  $("mTable").innerHTML = rows.map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join("");
  $("mBio").textContent = p.bio || "";
  modal.showModal();
}
document.addEventListener("click", e => {
  const card = e.target.closest(".person");
  if (card) openBio(card.dataset.group, +card.dataset.i);
});
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.classList.contains("person")) e.target.click();
});
$("mClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });