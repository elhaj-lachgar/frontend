import { Home, LockKeyhole, User, UserRoundCog ,TicketCheck ,Upload, Users, Video, Cog } from "lucide-react";

export const DOMAIN_NAME = 'http://localhost:8000';

export const SideBarItems = [
  {
    link: "/",
    icon: Home,
    name: "روجوع",
  },
  {
    link: "/profile/me",
    icon: User,
    name: "الملف الشخصي",
  },
  {
    link: "/profile/update-profile",
    name: "تغير بيانات",
    icon: UserRoundCog,
  },
  {
    link: "/profile/change-password",
    name: "تغير كلمة السر",
    icon: LockKeyhole,
  },
];

export const Emojis = [
    "👾",
    "⭐",
    "🌟",
    "🎉",
    "🎊",
    "🎈",
    "🎁",
    "🎂",
    "🎄",
    "🎃",
    "🎗",
    "🎟",
    "🎫",
    "🎖",
    "🏆",
    "🏅",
    "🥇",
  ];
  

export const ADMIN_SIDEBAR = [
  {
    link: "/",
    icon: Home,
    name: "روجوع",
  },
  {
    link : "/admin/validity",
    name : "الصلاحيات",
    icon : TicketCheck
  },
  {
    link : "/admin/edit-validity",
    name : "تعديل في الصلاحية",
    icon : Cog
  },
  {
    link :"/admin/upload-icons",
    name : "رفع لأيقونات و هدية",
    icon : Upload
  },
  {
    link : "/admin/rooms",
    name :"الغرفة",
    icon : Video
  },
  {
    link : "/admin/users",
    name : "مستخدمون",
    icon : Users
  }
]



export const Validity  = [
  "الطرد","الباند","فتح الخاص","إدارة الغرفة","إنشاء الغرفة","الهدايا","إدارة الموقع"
]