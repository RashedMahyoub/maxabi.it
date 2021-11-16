import {
  FaPencilAlt,
  FaRocket,
  FaBriefcase,
  FaMagic,
  FaHandHoldingUsd,
  FaChartLine,
  FaHandshake,
  FaMoneyBillWave,
  FaCloud,
  FaWindows,
} from "react-icons/fa";
import { SiDell } from "react-icons/si";
import { GrVirtualMachine } from "react-icons/gr";

const liPacks = [
  {
    title: "استضافة بلوجر",
    titleEn: "Blogger Hosting",
    icon: FaPencilAlt,
    price: "$4.5",
    ram: "256 MB",
    cpu: "600 MHZ",
    domain: "Unlimited",
    vram: "2048 MB",
    space: "Unlimited",
    eMail: "Unlimited",
  },
  {
    title: "استضافة غير محدودة",
    titleEn: "Unlimited Hosting",
    icon: FaRocket,
    price: "$7.5",
    ram: "750 MB",
    cpu: "1500 MHZ",
    domain: "Unlimited",
    vram: "3072 MB",
    space: "Unlimited",
    eMail: "Unlimited",
  },
  {
    title: "استضافة احترافية",
    titleEn: "Professional",
    icon: FaBriefcase,
    price: "$16",
    ram: "1200 MB",
    cpu: "2000 MHZ",
    domain: "Unlimited",
    vram: "4096 MB",
    space: "Unlimited",
    eMail: "Unlimited",
  },
  {
    title: "استضافة إكستريم",
    titleEn: "Extreme Hosting",
    icon: FaMagic,
    price: "$20",
    ram: "1600 MB",
    cpu: "2400 MHZ",
    domain: "Unlimited",
    vram: "5120 MB",
    space: "Unlimited",
    eMail: "Unlimited",
  },
];

const winPacks = [
  {
    title: "استضافة اقتصادية",
    titleEn: "Economy Hosting",
    icon: FaWindows,
    price: "$7.75",
    email: "Unlimited",
    addon: "1",
    space: "3 GB",
    sql: "1",
    memory: "256 MB",
    subdomain: "5",
  },
  {
    title: "استضافة الأعمال",
    titleEn: "Business Hosting",
    icon: FaWindows,
    price: "$11.75",
    email: "Unlimited",
    addon: "5",
    space: "10 GB",
    sql: "5",
    memory: "512 MB",
    subdomain: "10",
  },
  {
    title: "استضافة المؤسسة",
    titleEn: "Enterprise Hosting",
    icon: FaWindows,
    price: "$16.75",
    email: "Unlimited",
    addon: "Unlimited",
    space: "30 GB",
    sql: "10",
    memory: "1024 MB",
    subdomain: "Unlimited",
  },
  {
    title: "استضافة الشركات",
    titleEn: "Corporation Hosting",
    icon: FaWindows,
    price: "$20.75",
    email: "Unlimited",
    addon: "Unlimited",
    space: "45 GB",
    sql: "15",
    memory: "2048 MB",
    subdomain: "Unlimited",
  },
];

const saLiPacks = [
  {
    title: "أعمال اقتصادية",
    titleEn: "Economy Business",
    icon: FaHandHoldingUsd,
    price: "$23",
    ram: "256 MB",
    cpu: "600 MHZ",
    traffic: "15 GB",
    space: "5 GB",
    domain: "Unlimited",
    eMail: "Unlimited",
  },
  {
    title: "أعمال متوسطة",
    titleEn: "Medium Business",
    icon: FaMoneyBillWave,
    price: "$45",
    ram: "512 MB",
    cpu: "1200 MHZ",
    traffic: "25 GB",
    space: "10 GB",
    domain: "Unlimited",
    eMail: "Unlimited",
  },
  {
    title: "أعمال كبرى",
    titleEn: "Grand Business",
    icon: FaChartLine,
    price: "$68",
    ram: "786 MB",
    cpu: "2000 MHZ",
    traffic: "40 GB",
    space: "20 GB",
    domain: "Unlimited",
    eMail: "Unlimited",
  },
  {
    title: "أعمال النخبة",
    titleEn: "Elite Business",
    icon: FaHandshake,
    price: "$90",
    ram: "1024 MB",
    cpu: "2000 MHZ",
    traffic: "50 GB",
    space: "30 GB",
    domain: "Unlimited",
    eMail: "Unlimited",
  },
];

const saWinPacks = [
  {
    title: "استضافة اقتصادية",
    titleEn: "Savings Plan",
    icon: FaWindows,
    price: "$16",
    ...winPacks[0],
  },
  {
    title: "استضافة الأعمال",
    titleEn: "Starting Plan",
    icon: FaWindows,
    price: "$35",
    ...winPacks[1],
  },
  {
    title: "استضافة المؤسسة",
    titleEn: "The Launch Plan",
    icon: FaWindows,
    price: "$52",
    email: "Unlimited",
    ...winPacks[2],
  },
  {
    title: "استضافة الشركات",
    titleEn: "Expansion Plan",
    icon: FaWindows,
    price: "$70",
    ...winPacks[3],
  },
];

export const shared = [
  {
    title: "لينكس",
    titleEn: "Linux",
    plans: [
      {
        title: "6 اشهر",
        titleEn: "6 Months",
        url: "https://www.dimofinf.net/Shared-Hosting",
        type: 1,
        packages: [...liPacks],
      },
      {
        title: "سنوياً",
        titleEn: "Yearly",
        sale: "save up to 14%",
        url: "https://www.dimofinf.net/Shared-Hosting",
        type: 1,
        packages: [
          ...liPacks.map((pack, i) => {
            let p = i === 0 ? "$3.5" : i === 1 ? "$6.5" : i === 2 ? "$14" : "$18";
            return { ...pack, price: p };
          }),
        ],
      },
      {
        title: "3 سنوات",
        titleEn: "3 years",
        sale: "save up to 50%",
        url: "https://www.dimofinf.net/Shared-Hosting",
        type: 1,
        packages: [
          ...liPacks.map((pack, i) => {
            let p = i === 0 ? "$1.99" : i === 1 ? "$5.8" : i === 2 ? "$10" : "$14";
            return { ...pack, price: p };
          }),
        ],
      },
    ],
  },
  {
    title: "ويندوز",
    titleEn: "Windows",
    plans: [
      {
        title: "سنوياً",
        titleEn: "Yearly",
        url: "https://www.dimofinf.net/windows-hosting",
        type: 2,
        packages: [...winPacks],
      },
      {
        title: "سنتين",
        titleEn: "2 years",
        sale: "save up to 14%",
        url: "https://www.dimofinf.net/windows-hosting",
        type: 2,
        packages: [
          ...winPacks.map((pack, i) => {
            let p = i === 0 ? "$6.50" : i === 1 ? "$10.50" : i === 2 ? "$15.50" : "$19.50";
            return { ...pack, price: p };
          }),
        ],
      },
      {
        title: "3 سنوات",
        titleEn: "3 years",
        sale: "save up to 30%",
        url: "https://www.dimofinf.net/windows-hosting",
        type: 2,
        packages: [
          ...winPacks.map((pack, i) => {
            let p = i === 0 ? "$5.25" : i === 1 ? "$9.25" : i === 2 ? "$14.25" : "$18.25";
            return { ...pack, price: p };
          }),
        ],
      },
    ],
  },
  {
    title: "استضافة سعودية",
    titleEn: "Saudi Hosting",
    plans: [
      {
        title: "لينكس",
        titleEn: "Linux",
        plans: [
          {
            title: "6 اشهر",
            titleEn: "6 Months",
            url: "https://www.dimofinf.net/ksa-hosting",
            type: 3,
            packages: [...saLiPacks],
          },
          {
            title: "سنوياً",
            titleEn: "Yearly",
            sale: "save up to 10%",
            url: "https://www.dimofinf.net/ksa-hosting",
            type: 3,
            packages: [
              ...saLiPacks.map((pack, i) => {
                let p = i === 0 ? "$21" : i === 1 ? "$41" : i === 2 ? "$62" : "$82";
                return { ...pack, price: p };
              }),
            ],
          },
          {
            title: "سنتين",
            titleEn: "سنتين",
            sale: "save up to 30%",
            url: "https://www.dimofinf.net/ksa-hosting",
            type: 3,
            packages: [
              ...saLiPacks.map((pack, i) => {
                let p = i === 0 ? "$17" : i === 1 ? "$35" : i === 2 ? "$52" : "$70";
                return { ...pack, price: p };
              }),
            ],
          },
        ],
      },
      {
        title: "ويندوز",
        titleEn: "Windows",
        plans: [
          {
            title: "6 اشهر",
            titleEn: "6 Months",
            url: "https://www.dimofinf.net/ksa-hosting",
            type: 2,
            packages: [...saWinPacks],
          },
          {
            title: "سنوياً",
            titleEn: "Yearly",
            sale: "save up to 10%",
            url: "https://www.dimofinf.net/ksa-hosting",
            type: 2,
            packages: [
              ...saWinPacks.map((pack, i) => {
                let p = i === 0 ? "$21" : i === 1 ? "$41" : i === 2 ? "$62" : "$82";
                return { ...pack, price: p };
              }),
            ],
          },
          {
            title: "سنتين",
            titleEn: "سنتين",
            sale: "save up to 30%",
            url: "https://www.dimofinf.net/ksa-hosting",
            type: 2,
            packages: [
              ...saWinPacks.map((pack, i) => {
                let p = i === 0 ? "$16" : i === 1 ? "$35" : i === 2 ? "$52" : "$70";
                return { ...pack, price: p };
              }),
            ],
          },
        ],
      },
    ],
  },
];

/* ===========================================
    Dedicated Servers
=========================================== */
const singlePacks = [
  {
    title: "Xeon E3-1230v2",
    icon: SiDell,
    price: "$60",
    processor: "Xeon E3-1230v2",
    ram: "16 GB",
    hdd: "sxeon1-single-free-hdd",
    uplink: "1000 Mbit/sec",
    traffic: "10 TB",
    ips: "1",
    management: "Free",
    software: "RAID Software",
  },
  {
    title: "Xeon E-2274G",
    icon: SiDell,
    price: "$85",
    processor: "Xeon E-2274G",
    ram: "32 GB",
    hdd: "4x1TB SATA",
    uplink: "1000 Mbit/sec",
    traffic: "10 TB",
    ips: "1",
    management: "Free",
    software: "RAID Software",
  },
];

const dualPacks = [
  {
    title: "Xeon E5-2420",
    icon: SiDell,
    price: "$120",
    processor: "Xeon E5-2420",
    ram: "32 GB",
    hdd: "sxeon1-dual-free-hdd",
    uplink: "1000 Mbit/sec",
    traffic: "10 TB",
    ips: "1",
    management: "Free",
    software: "RAID Software",
  },
  {
    title: "Xeon Gold 5218",
    icon: SiDell,
    price: "$310",
    processor: "Xeon Gold 5218",
    ram: "128 GB",
    hdd: "2 x 960 GB SSD",
    uplink: "1000 Mbit/sec",
    traffic: "10 TB",
    ips: "1",
    management: "Free",
    software: "RAID Software",
  },
];

export const dedicated = [
  {
    id: "0",
    plans: [
      {
        title: "الإدارة: الاساسية",
        titleEn: "Free Management",
        type: 4,
        url: "https://www.dimofinf.net/Dedicated-servers",
        packages: [...singlePacks],
      },
      {
        title: "الإدارة المتقدمة: المستوى 1",
        titleEn: "Advanced Management :L1",
        type: 4,
        url: "https://www.dimofinf.net/Dedicated-servers",
        packages: [
          ...singlePacks.map((pack, i) => {
            let p = i === 0 ? "$130" : "$160";
            return { ...pack, price: p, software: "cPanel Premier Solo" };
          }),
        ],
      },
    ],
  },
  {
    id: "1",
    plans: [
      {
        title: "الإدارة: الاساسية",
        titleEn: "Free Management",
        type: 4,
        url: "https://www.dimofinf.net/Dedicated-servers",
        packages: [...dualPacks],
      },
      {
        title: "الإدارة المتقدمة: المستوى 1",
        titleEn: "Advanced Management :L1",
        type: 4,
        url: "https://www.dimofinf.net/Dedicated-servers",
        packages: [
          ...dualPacks.map((pack, i) => {
            let p = i === 0 ? "$200" : "$390";
            return { ...pack, price: p, software: "cPanel Premier Solo" };
          }),
        ],
      },
    ],
  },
];

/* ===========================================
    Cloud Servers
=========================================== */
export const cloud = [
  {
    icon: FaCloud,
    price: "$40",
    title: "X1",
    url: "https://www.dimofinf.net/Cloud-Servers",
    cpu: "3 core",
    ram: "4 GB DDR4",
    traffic: "20 TB",
    storage: "80 GB SSD",
  },
  {
    icon: FaCloud,
    price: "$50",
    title: "X2",
    url: "https://www.dimofinf.net/Cloud-Servers",
    cpu: "4 core",
    ram: "8 GB DDR4",
    traffic: "20 TB",
    storage: "160 GB SSD",
  },
  {
    icon: FaCloud,
    price: "$80",
    title: "X3",
    url: "https://www.dimofinf.net/Cloud-Servers",
    cpu: "4 core",
    ram: "16 GB DDR4",
    traffic: "20 TB",
    storage: "160 GB SSD",
  },
  {
    icon: FaCloud,
    price: "$90",
    title: "X4",
    url: "https://www.dimofinf.net/Cloud-Servers",
    cpu: "8 core",
    ram: "16 GB DDR4",
    traffic: "20 TB",
    storage: "240 GB SSD",
  },
  {
    icon: FaCloud,
    price: "$100",
    title: "X5",
    url: "https://www.dimofinf.net/Cloud-Servers",
    cpu: "8 core",
    ram: "32 GB DDR4",
    traffic: "20 TB",
    storage: "240 GB SSD",
  },
  {
    icon: FaCloud,
    price: "$130",
    title: "X6",
    url: "https://www.dimofinf.net/Cloud-Servers",
    cpu: "16 core",
    ram: "32 GB DDR4",
    traffic: "20 TB",
    storage: "360 GB SSD",
  },
];

/* ===========================================
    VPS Servers
=========================================== */

export const vps = [
  {
    icon: GrVirtualMachine,
    price: "$29",
    title: "VPS 1",
    url: "https://www.dimofinf.net/vps_servers",
    cpu: "2 core",
    ram: "2 GB",
    traffic: "8 TB",
    hdd: "40 GB",
  },
  {
    icon: GrVirtualMachine,
    price: "$40",
    title: "VPS 2",
    url: "https://www.dimofinf.net/vps_servers",
    cpu: "2 core",
    ram: "4 GB",
    traffic: "10 TB",
    hdd: "40 GB",
  },
  {
    icon: GrVirtualMachine,
    price: "$50",
    title: "VPS 3",
    url: "https://www.dimofinf.net/vps_servers",
    cpu: "2 core",
    ram: "8 GB",
    traffic: "10 TB",
    hdd: "80 GB",
  },
];
