import { theme } from "../theme";
// Placeholder artwork shown only until a real photo exists for an item (see `image` in data/menu.js).
const wave = (y, c) => `<path d="M60 ${y + 6}q20-18 40 0t40 0 40 0 40 0 40 0 40 0 40 0V${y + 24}H60z" fill="${c}"/>`;
const bar = (y, c, x = 54, w = 292, h = 22) => `<rect x="${x}" y="${y + 1}" width="${w}" height="${h}" rx="11" fill="${c}"/>`;
const dots = (y, xs, r, c) => xs.map((x) => `<circle cx="${x}" cy="${y + 11}" r="${r}" fill="${c}"/>`).join("");
const ING = {
  lettuce: (y) => wave(y, "#7FA05C"), onion: (y) => wave(y, "#B9772F"),
  tomato: (y) => `<g fill="#C87552">${[110, 200, 290].map((x) => `<ellipse cx="${x}" cy="${y + 11}" rx="44" ry="11"/>`).join("")}</g>`,
  bacon: (y) => bar(y + 2, "#A5402F", 52, 296, 18) + `<rect x="52" y="${y + 10}" width="296" height="4" fill="#E7A58F" opacity=".6"/>`,
  chicken: (y) => bar(y, "#D9A25E") + `<rect x="54" y="${y + 1}" width="292" height="22" rx="11" fill="none" stroke="#B97F3E" stroke-width="3"/>`,
  cheese: (y) => `<rect x="52" y="${y + 4}" width="296" height="14" rx="6" fill="#F0CD76"/><path d="M270 ${y + 16}h32v18q0 8-16 8t-16-8z" fill="#F0CD76"/>`,
  provolone: (y) => `<rect x="52" y="${y + 4}" width="296" height="14" rx="6" fill="#F7E3A1"/>`,
  ham: (y) => bar(y, "#E8A0A0"), beef: (y) => bar(y, "#7A4332"), avocado: (y) => bar(y, "#A9C26B"),
  cream: (y) => `<rect x="58" y="${y + 5}" width="284" height="14" rx="7" fill="#FAF7F0"/>` + dots(y, [110, 170, 230, 290], 3, "#6F8F5B"),
  salami: (y) => dots(y, [100, 150, 200, 250, 300], 17, "#9C3D2E") + dots(y, [100, 200, 300], 3, "#E7A58F"),
  pickles: (y) => dots(y, [100, 160, 220, 280], 12, "#7C8F3A"),
  cucumber: (y) => [110, 200, 290].map((x) => `<ellipse cx="${x}" cy="${y + 11}" rx="40" ry="10" fill="#C5DBA0" stroke="#8FB06B" stroke-width="2"/>`).join(""),
  egg: (y) => bar(y, "#FFFFFF") + `<circle cx="200" cy="${y + 12}" r="12" fill="#F2B632"/>`,
};
export function sandwichArt(item) {
  const st = 22, n = item.layers.length, tb = 232 - n * st, top = tb - 100;
  const off = (300 - (258 - top)) / 2 - top, bread = item.toasted ? "#C98A4B" : "#D9A25E";
  let g = `<path d="M62 232h276v14q0 14-14 14H76q-14 0-14-14z" fill="${bread}"/>`;
  item.layers.forEach((k, i) => { g += ING[k](232 - (i + 1) * st); });
  g += `<path d="M62 ${tb + 2}q0-102 138-102t138 102q0 10-14 10H76q-14 0-14-10z" fill="${bread}"/>`;
  g += `<path d="M98 ${tb - 20}q12-50 72-64" stroke="#F4C98A" stroke-width="8" fill="none" stroke-linecap="round" opacity=".7"/>`;
  if (!item.toasted) g += `<g fill="#FAF7F0" opacity=".85">${[[180, -70], [235, -54], [150, -36], [270, -24], [212, -30]].map(([x, y]) => `<ellipse cx="${x}" cy="${tb + y}" rx="7" ry="3.5"/>`).join("")}</g>`;
  return `<svg viewBox="0 0 400 300" class="h-full w-full" role="img" aria-label="${item.name}"><rect width="400" height="300" fill="${theme.art.bg}"/><circle cx="200" cy="150" r="140" fill="${theme.art.plate}"/><g transform="translate(0 ${off})"><ellipse cx="200" cy="262" rx="150" ry="10" fill="${theme.art.shadow}" opacity=".3"/>${g}</g></svg>`;
}
