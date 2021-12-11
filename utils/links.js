import { AiFillRobot } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import {
  ServerIcon,
  DeviceMobileIcon,
  DesktopComputerIcon,
  PresentationChartBarIcon,
  ChatAltIcon,
} from "@heroicons/react/solid";

export const solutions = [
  {
    name: "Hosting",
    nameAr: "الاستضافة",
    description: "The best & most secure hosting for your business.",
    descriptionAr: "الاستضافة الأفضل والأكثر أمانًا لعملك.",
    href: "/services/hosting",
    icon: ServerIcon,
  },
  {
    name: "Mobile Apps",
    nameAr: "تطبيقات الموبايل",
    description: "High quality mobile apps that meets all requirements.",
    descriptionAr: "تطبيقات جوال عالية الجودة تلبي جميع المتطلبات.",
    href: "/services/apps",
    icon: DeviceMobileIcon,
  },
  {
    name: "Websites",
    nameAr: "المواقع",
    description: "Professional website design services for your business.",
    descriptionAr: "خدمات تصميم مواقع احترافية لعملك.",
    href: "/services/web",
    icon: DesktopComputerIcon,
  },
  {
    name: "E-Markeitng",
    nameAr: "التسويق الإلكتروني",
    description: "Best marketing campaign for your business.",
    descriptionAr: "أفضل حملة تسويقية لعملك.",
    href: "/services/e-marketing",
    icon: PresentationChartBarIcon,
  },
  {
    name: "SMS Services",
    nameAr: "خدمات الرسائل القصيرة",
    description: "SMSs are faster than emails and have the best open rate.",
    descriptionAr: "الرسائل القصيرة أسرع من رسائل البريد الإلكتروني ولديها أفضل معدل فتح.",
    href: "/services/sms",
    icon: ChatAltIcon,
  },
  {
    name: "Artificial Intelligence",
    nameAr: "الذكاء الاصطناعي",
    description:
      "Create smart workflows that use AI, data, and analytics, and transform AI aspirations into tangible business results.",
    descriptionAr:
      "أنشئ تدفقات عمل ذكية تستخدم الذكاء الاصطناعي والبيانات والتحليلات وتحويل تطلعات الذكاء الاصطناعي إلى نتائج أعمال ملموسة.",
    href: "/services/ai",
    icon: AiFillRobot,
  },
  {
    name: "Graphic Design",
    nameAr: "تصميم غرافيك",
    description:
      "We provide professional graphic design solutions for your business such as 3D graphics, motion graphics and more.",
    descriptionAr: "نحن نقدم حلول تصميم جرافيك احترافية لعملك مثل الرسومات ثلاثية الأبعاد والرسومات المتحركة والمزيد.",
    href: "/services/graphics",
    icon: MdDesignServices,
  },
];

export const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  { id: 2, name: "How to use search engine optimization to drive traffic to your site", href: "#" },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

export const reviews = [
  {
    id: 0,
    name: "طلال",
    nameEn: "Talal",
    message:
      "شكر  الاستاذ ابو جواد و كل القائمين و العاملين في مكسبي ادارة محترمه و متميزه من جميع النواحي استقبال و تعامل و الاهتمام العالي في العميل و رضى العميل هو الهدف الرئيسي لديهم ، و الشكر موصول للمبرمج راشد على حسن التعامل و اهتمامه في انجاز و تنفيذ المشروع على اكمل وجه",
    messageEn:
      "thanks Mr. Abu Jawad and all those who work in my profit A respectable and distinguished management in all respects. Reception, dealing, and high interest in the client and customer satisfaction is their main goal, and thanks go to the programmer Rashed for the good handling and his interest in completing and implementing the project to the fullest 🌹",
  },
];

export const team = [
  {
    id: 0,
    name: "راشد مهيوب",
    image: "/Rashed.jpg",
    nameEn: "Rashed Mahyoub",
    job: "مهندس برمجيات",
    jobEn: "Software Engineer",
    message: "اعمل للأفضل ولا تتوقف أبدًا. لا توجد حدود لا يمكنك تجاوزها!",
    messageEn: "Work for the better and never stop. There are no limits that you can't overcome!",
  },
  {
    id: 1,
    name: "زاكي ابراهيمي",
    image: "/ZakiBrahmi.svg",
    nameEn: "Zaki Brahmi",
    job: "Back-end مطور",
    jobEn: "Back-end developer",
    message: "لا تفقد الامل ابدا. امضي قدما نحو النجاح",
    messageEn: "Never lose hope. Move forward towards success",
  },
];
