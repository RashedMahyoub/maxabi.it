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
