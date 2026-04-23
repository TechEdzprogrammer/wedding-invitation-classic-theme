const data = window.invitationData;

const setText = (selector, value) => {
  document.querySelectorAll(`[data-field="${selector}"]`).forEach((node) => {
    node.textContent = value;
  });
};

const renderList = (id, items) => {
  const root = document.getElementById(id);
  root.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
};

const renderSwatches = () => {
  const root = document.getElementById('dressSwatches');
  root.innerHTML = data.dressCode.colors.map((item) => `
    <div class="swatch">
      <div class="swatch-chip" style="background:${item.hex}"></div>
      <span>${item.name}</span>
    </div>
  `).join('');
};

const renderRoles = () => {
  const roleGrid = document.getElementById('roleGrid');
  const roles = [
    ['Best Man', data.entourage.bestMan],
    ['Maid of Honor', data.entourage.maidOfHonor],
    ['Candle', data.entourage.candle],
    ['Veil', data.entourage.veil],
    ['Cord', data.entourage.cord],
    ['Ring Bearer', data.entourage.ringBearer],
    ['Coin Bearer', data.entourage.coinBearer],
    ['Bible Bearer', data.entourage.bibleBearer],
    ['Little Bride', data.entourage.littleBride],
    ['Little Groom', data.entourage.littleGroom]
  ];
  roleGrid.innerHTML = roles.map(([title, names]) => `
    <article class="role-box">
      <h3>${title}</h3>
      <ul>${names.map((name) => `<li>${name}</li>`).join('')}</ul>
    </article>
  `).join('');
};

const renderTimeline = () => {
  const root = document.getElementById('timelineList');
  root.innerHTML = data.timeline.map((item) => `
    <article class="timeline-item">
      <div class="timeline-time">${item.time}</div>
      <div class="timeline-label">${item.label}</div>
    </article>
  `).join('');
};

const setImages = () => {
  document.querySelectorAll('[data-image="cover"]').forEach((img) => img.src = data.images.cover);
  document.querySelectorAll('[data-image="invitation"]').forEach((img) => img.src = data.images.invitation);
  document.querySelectorAll('[data-image="entourage"]').forEach((img) => img.src = data.images.entourage);
  document.querySelectorAll('[data-image="guide"]').forEach((img) => img.src = data.images.guide);
};

const setLinks = () => {
  ['heroInviteLink', 'bottomInviteLink'].forEach((id) => {
    const link = document.getElementById(id);
    link.href = data.invitationLink;
  });
};

const populateText = () => {
  document.title = data.pageTitle + ' | Classic Theme';
  setText('heroTag', data.heroTag);
  setText('coupleDisplay', data.couple.display);
  setText('introCopy', data.introCopy);
  setText('dateLabel', data.date.label);
  setText('dateTime', data.date.time);
  setText('dateDay', data.date.dayOfWeek);
  setText('ceremonyName', data.venues.ceremony.name);
  setText('ceremonyAddress', data.venues.ceremony.address);
  setText('receptionName', data.venues.reception.name);
  setText('receptionAddress', data.venues.reception.address);
  setText('dressCodeLabel', data.dressCode.label);
  setText('dressCodeNote', data.dressCode.note);
  setText('giftMessage', data.message);
};

populateText();
setImages();
setLinks();
renderSwatches();
renderTimeline();
renderList('groomParents', data.entourage.groomParents);
renderList('brideParents', data.entourage.brideParents);
renderList('principalSponsorsLeft', data.entourage.principalSponsorsLeft);
renderList('principalSponsorsRight', data.entourage.principalSponsorsRight);
renderRoles();
