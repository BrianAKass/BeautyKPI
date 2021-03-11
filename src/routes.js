/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import YouTubePage from "views/YouTube/YouTubePage.js";
import InstagramPage from "views/Instagram/InstagramPage.js";
import TwitterPage from "views/Twitter/TwitterPage.js";
import SnapChatPage from "views/SnapChat/SnapChatPage.js";
import TikTokPage from "views/TikTok/TikTokPage.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

/// my icon imports
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/youtube",
    name: "YouTube",
    rtlName: "YouTube",
    icon: YouTubeIcon,
    component: YouTubePage,
    layout: "/admin",
  },
  {
    path: "/instagram",
    name: "Instagram",
    rtlName: "لوحة القيادة",
    icon: InstagramIcon,
    component: InstagramPage,
    layout: "/admin",
  },
  {
    path: "/twitter",
    name: "Twitter",
    rtlName: "لوحة القيادة",
    icon: TwitterIcon,
    component: TwitterPage,
    layout: "/admin",
  },
  {
    path: "/snapchat",
    name: "SnapChat",
    rtlName: "لوحة القيادة",
    icon: InsertPhotoIcon,
    component: SnapChatPage,
    layout: "/admin",
  },
  {
    path: "/tiktok",
    name: "Tik Tok",
    rtlName: "لوحة القيادة",
    icon: AccessAlarmsIcon,
    component: TikTokPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
