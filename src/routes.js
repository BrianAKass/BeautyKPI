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

import YouTubeIcon from "@material-ui/icons/YouTube";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import YouTubePage from "views/YouTube/YouTubePage.js";
import InstagramPage from "views/Instagram/InstagramPage.js";
import TwitterPage from "views/Twitter/TwitterPage.js";
import SnapChatPage from "views/SnapChat/SnapChatPage.js";
import TikTokPage from "views/TikTok/TikTokPage.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";

/// my icon imports
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",

    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/youtube",
    name: "YouTube",
    icon: YouTubeIcon,
    component: YouTubePage,
    layout: "/admin",
  },
  {
    path: "/instagram",
    name: "Instagram",
    icon: InstagramIcon,
    component: InstagramPage,
    layout: "/admin",
  },
  {
    path: "/twitter",
    name: "Twitter",
    icon: TwitterIcon,
    component: TwitterPage,
    layout: "/admin",
  },
  {
    path: "/snapchat",
    name: "SnapChat",
    icon: InsertPhotoIcon,
    component: SnapChatPage,
    layout: "/admin",
  },
  {
    path: "/tiktok",
    name: "Tik Tok",
    icon: AccessAlarmsIcon,
    component: TikTokPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
