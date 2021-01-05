/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Segments from "views/examples/segments.js";
import Annotation from "views/examples/Annotation.js";
import Optins from "views/examples/Optins.js";
import Integrations from "views/examples/Integrations.js";
import Subscribers from "views/examples/Subscribers.js";
import Compaigns from "views/examples/Compaigns.js";
import StartCampaign from "views/examples/startcampigns.js";
if( localStorage !== null 
){
var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/Campaigns",
    name: "Campaigns",
    icon: "ni ni-planet text-blue",
    component: Compaigns,
    layout: "/admin"
  },
  {
    path: "/Annotation",
    name: "Annotation",
    icon: "ni ni-pin-3 text-orange",
    component: Annotation,
    layout: "/admin"
  },
  {
    path: "/Subscribers",
    name: "Subscribers",
    icon: "ni ni-single-02 text-yellow",
    component: Subscribers,
    layout: "/admin"
  },
  {
    path: "/Segments",
    name: "Segments",
    icon: "ni ni-bullet-list-67 text-red",
    component: Segments,
    layout: "/admin"
  },
  {
    path: "/Optins",
    name: "Optins",
    icon: "ni ni-key-25 text-info",
    component: Optins,
    layout: "/admin"
  },
  {
    path: "/Integrations",
    name: "Integrations",
    icon: "ni ni-circle-08 text-pink",
    component: Integrations,
    layout: "/admin"
  },
    {
      path: "/StartCampaign",
      name: "Start Campaign",
      icon: "ni ni-circle-08 text-pink",
      component: StartCampaign,
      layout: "/admin"
    }
 
];
}
else{
  var routes=[
    {
      path: "/StartCampaign",
      name: "Start Campaign",
      icon: "ni ni-circle-08 text-pink",
      component: StartCampaign,
      layout: "/admin"
    }
  ];}
export default routes;
