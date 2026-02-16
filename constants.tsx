import React from 'react';
import { MenuCategory } from './types';

// New branding colors - Burnt Orange and Ink Black
export const BRAND_COLOR = "text-[#D94F3D]";
export const BG_ACCENT = "bg-[#D94F3D]";
export const BORDER_COLOR = "border-[#1a1a1a]";

const SAVORY_ADDONS = [
  { name: "Яйцо (50 г)", price: 100 },
  { name: "Индейка су-вид (50 г)", price: 135 },
  { name: "Форель (50 г)", price: 285 },
  { name: "Свиная сосиска (65 г)", price: 135 },
  { name: "Ростбиф (50 г)", price: 165 },
  { name: "Бекон (50 г)", price: 165 },
];

export const MENU_DATA: MenuCategory[] = [
  {
    id: "porridge",
    title: "Каши",
    items: [
      {
        id: "p1",
        name: "Тильда Суинтон",
        description: "Рисовый пудинг с пряным грушевым конфитюром и хрустящими грецкими орехами",
        price: 540
      },
      {
        id: "p2",
        name: "Заха Хадид",
        description: "Овсяная каша с морковным джемом и имбирно-ореховой гранолой",
        price: 540
      },
      {
        id: "p3",
        name: "Патрик О'Брайан",
        description: "Овсяная каша с тунцом, маринованным яйцом, кунжутом и соусом чимичурри",
        price: 670
      }
    ],
    note: "Любую кашу можно приготовить на кокосовом / миндальном / безлактозном молоке (+120 ₽)"
  },
  {
    id: "waffles",
    title: "Вафли",
    items: [
      { id: "w1", name: "Гойко Митич", description: "Вафля сырная с индейкой, руколой и клюквенным соусом", price: 770 },
      { id: "w2", name: "Клинт Иствуд", description: "Вафли с беконом и глазуньей под сырным соусом", price: 790 },
      { id: "w3", name: "Кира Найтли", description: "Вафля шпинатная со слабосолёной форелью, руколой, кунжутом и яйцом пашот под йогуртовым соусом", price: 890 },
      { id: "w4", name: "Кинен Айвори Уэйанс", description: "Вафли банановые с соленой карамелью и попкорном", price: 690 },
      { id: "w5", name: "Марго Робби", description: "Вафли с клубничной сгущенкой, голубикой и мороженым", price: 690 },
    ],
    addons: SAVORY_ADDONS
  },
  {
    id: "eggs",
    title: "Яйца",
    items: [
      { id: "e1", name: "Диего Веласкес", description: "Яйца бенедикт со слабосоленой форелью, листьями салата, голландским и йогуртовым соусами на ржаном тосте", price: 940 },
      { id: "e2", name: "Альфред Хичкок", description: "Яйца бенедикт с ростбифом, томатным чатни, хрустящим нутом и соусом голландез на ржаной чиабатте", price: 940 },
      { id: "e3", name: "Джо Кири", description: "Сливочный скрэмбл со слабосоленой форелью под йогуртовым соусом с ржаным хлебом и сливочным маслом", price: 890 },
      { id: "e4", name: "Джесси Айзенберг", description: "Скрэмбл под хрустящим нутом на подушке из хумуса и руколы с горячей чиабаттой", price: 860 },
      { id: "e5", name: "Лионель Месси", description: "Омлет с чимичурри, чеддером и овощами-гриль", price: 770 },
      { id: "e6", name: "Мимар Синан", description: "Яичница в томатном чатни с йогуртовым соусом и чиабаттой", price: 590 },
      { id: "e7", name: "Алексей Венецианов", description: "Яичница с картофелем, беконом и овощным салатом", price: 790 },
      { id: "e8", name: "Маришка Вереш", description: "Голландский завтрак с беконом, морковным джемом, сыром чеддер, ржаным тостом и взбитым маслом", price: 790 },
    ],
    addons: SAVORY_ADDONS
  },
  {
    id: "sandwiches",
    title: "Сэндвичи",
    items: [
      { id: "s1", name: "Ричард Кёртис", description: "Сэндвич с ростбифом, хумусом и томатным чатни на чиабатте с йогуртовым соусом", price: 790 },
      { id: "s2", name: "Ричард Хаммонд", description: "Сэндвич с индейкой, моцареллой и беконом на чиабатте с сырным и клюквенным соусом", price: 790 },
      { id: "s3", name: "Билл Найи", description: "Сэндвич с тунцом, маринованным луком и вареным яйцом на тостовом хлебе", price: 790 },
    ],
    addons: SAVORY_ADDONS
  },
  {
    id: "sweet_breakfast",
    title: "Сладкий завтрак",
    items: [
      { id: "sb1", name: "Алан Тьюринг", description: "Панкейки с ванильной карамелью на кокосовом молоке, пряными яблоками и мороженым", price: 590 },
      { id: "sb2", name: "Эми Адамс", description: "Панкейки с лимонным курдом, мёдом, цитрусами и лавандой", price: 590 },
      { id: "sb3", name: "Бьорк Гудмундсдоттир", description: "Сырники со сметаной и пряным морковным джемом", price: 760 },
      { id: "sb4", name: "Долорес О'Риордан", description: "Сырники со сметаной и клюквенным соусом", price: 760 },
      { id: "sb5", name: "Сабрина Карпентер", description: "Сырники со сметаной и клубничной сгущенкой", price: 760 },
    ]
  },
  {
    id: "more",
    title: "Больше",
    items: [
      { id: "m1", name: "Марк Спитц", description: "Боул со слабосолёной форелью, яйцом пашот, гуакамоле, овощами и киноа под йогуртовым соусом с кунжутом", price: 960 },
      { id: "m2", name: "Вилли Миллер", description: "Боул с ростбифом, руколой, киноа, яйцом пашот, овощами и маринованным луком", price: 890 },
      { id: "m3", name: "Жан Бодрийяр", description: "Боул с гуакамоле, киноа, хрустящим нутом, овощами и яйцом пашот", price: 860 },
      { id: "m4", name: "Аксель Роуз", description: "Картофельный салат с индейкой су-вид, беконом и яйцом пашот под медово-горчичной заправкой", price: 890 },
      { id: "m5", name: "Мэгги Смит", description: "Тыквенный суп с хрустящим нутом и сырным тостом на чиабатте", price: 760 },
      { id: "m6", name: "Сатоши Кон", description: "Рамен на курином бульоне с индейкой су-вид, лапшой, чукой и маринованным яйцом", price: 760 },
      { id: "m7", name: "Осаму Тэдзука", description: "Хэшбрауны со слабосолёной форелью, гуакамоле и яйцом пашот под йогуртовым соусом", price: 940 },
      { id: "m8", name: "Лемми Килмистер", description: "Хэшбрауны с говяжьей котлетой, моцареллой, томатным чатни и пикантными маринадами", price: 870 },
      { id: "m9", name: "Билли Миллиган", description: "Хлебная тарелка со взбитым маслом (ржаной, тостовый, чиабатта)", price: 120 },
    ],
    addons: SAVORY_ADDONS
  },
  {
    id: "sweets",
    title: "Сладкое",
    items: [
      { id: "sw1", name: "Айседора Дункан", description: "Тарталетка в стиле «Сникерс»", price: 390 },
      { id: "sw2", name: "Арсен Агамалян", description: "Тарталетка с пряным мандариновым мармеладом под слоем шоколада", price: 390 },
      { id: "sw3", name: "Кристобаль Баленсиага", description: "Шоколадный капкейк с апельсиновой карамелью и шоколадным кремом", price: 480 },
      { id: "sw4", name: "Михаил Кутузов", description: "Торт из слоеного теста с кремом патисьер", price: 430 },
      { id: "sw5", name: "Франц Кафка", description: "Пражский торт", price: 470 },
      { id: "sw6", name: "Миучча Прада", description: "Фисташковый чизкейк с малиной", price: 630 },
    ]
  },
  {
    id: "coffee",
    title: "Кофе",
    items: [
      { id: "c1", name: "Эспрессо / Доппио", price: 220 },
      { id: "c2", name: "Американо", price: 220 },
      { id: "c3", name: "Фильтр", price: 180 },
      { id: "c4", name: "Flat White", price: 340 },
      { id: "c5", name: "Капучино", price: 330 },
      { id: "c6", name: "Латте", price: 360 },
      { id: "c7", name: "Раф", description: "ванильный / цитрусовый / клюквенный / остро-пряный", price: 430 },
      { id: "c8", name: "Кофейный глинтвейн", price: 420 },
      { id: "c9", name: "Вишнёвый пунш", price: 420 },
    ],
    note: "Сиропы (+50₽): ваниль, соленая карамель, имбирь, базилик, розмарин. Растительное молоко (+110₽)."
  },
  {
    id: "drinks",
    title: "Напитки",
    items: [
      { id: "d1", name: "Латте «Коровка»", description: "Эспрессо, топлёное молоко, какао, солёная карамель", price: 380 },
      { id: "d2", name: "Нелатте «Сливочное печенье»", description: "Гречишный чай, топлёное молоко, липовый мед", price: 380 },
      { id: "d3", name: "Морс «Леденец»", description: "Грейпфрутовый сок, гречишный чай, сироп лемонграсс", price: 380 },
      { id: "d4", name: "Айсти", description: "Гречишный чай, сироп лемонграсс, лимон", price: 380 },
    ]
  }
];

// Ray coordinates: x1, y1, x2, y2
const LEFT_RAYS = [
  [20, 120, 55, 132],
  [30, 80, 80, 115],
  [50, 40, 105, 95],
  [90, 15, 130, 85],
  [140, 5, 155, 75],
];

const CENTER_RAY = [
  [200, 0, 200, 60]
];

const RIGHT_RAYS = [
  [380, 120, 345, 132],
  [370, 80, 320, 115],
  [350, 40, 295, 95],
  [310, 15, 270, 85],
  [260, 5, 245, 75],
];

const ALL_RAYS = [...LEFT_RAYS, ...CENTER_RAY, ...RIGHT_RAYS];

const InteractiveRay: React.FC<{ coords: number[] }> = ({ coords }) => {
  const [x1, y1, x2, y2] = coords;
  return (
    <g className="ray-group">
      {/* Invisible thick line for easier hit detection */}
      <line 
        x1={x1} y1={y1} x2={x2} y2={y2} 
        stroke="transparent" 
        strokeWidth="40" 
        strokeLinecap="round"
      />
      {/* Visible line */}
      <line 
        className="ray-visible"
        x1={x1} y1={y1} x2={x2} y2={y2} 
      />
    </g>
  );
};

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="-50 -10 500 320"
    className={`${className} overflow-visible`}
    fill="currentColor"
    aria-label="Breakfast Band Logo"
  >
    <style>
      {`
        .ray-group {
          cursor: pointer;
        }
        .ray-visible {
          stroke: currentColor;
          stroke-width: 3;
          stroke-linecap: round;
          transform-box: fill-box;
          transform-origin: center;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* The "Addictive" Hover Effect */
        .ray-group:hover .ray-visible {
          stroke: #D94F3D;
          stroke-width: 6; /* Thicker on hover */
          transform: scale(1.15); /* Pop effect */
          transition: all 0.05s ease-out; /* Instant reaction */
        }
      `}
    </style>
    
    {/* Interactive Sunburst Rays */}
    {ALL_RAYS.map((coords, index) => (
      <InteractiveRay key={index} coords={coords} />
    ))}

    {/* Center Element: B in a square/circle hybrid */}
    <g transform="translate(170, 90)" className="pointer-events-none">
        <path d="M0,0 L60,0 L60,80 L0,80 Z" fill="none" />
        <text x="30" y="65" textAnchor="middle" fontSize="80" fontWeight="900" fontFamily="'Montserrat', sans-serif">B</text>
    </g>

    {/* EST 2016 */}
    <text x="120" y="150" textAnchor="end" fontSize="18" fontWeight="bold" fontFamily="'Montserrat', sans-serif" letterSpacing="2" className="pointer-events-none">EST.</text>
    <text x="280" y="150" textAnchor="start" fontSize="18" fontWeight="bold" fontFamily="'Montserrat', sans-serif" letterSpacing="2" className="pointer-events-none">2016</text>

    {/* BREAKFAST */}
    <text x="200" y="220" textAnchor="middle" fontSize="68" fontWeight="900" fontFamily="'Montserrat', sans-serif" letterSpacing="4" className="pointer-events-none">BREAKFAST</text>
    
    {/* BAND */}
    <text x="200" y="270" textAnchor="middle" fontSize="42" fontWeight="bold" fontFamily="'Montserrat', sans-serif" letterSpacing="8" className="pointer-events-none">BAND</text>
  </svg>
);