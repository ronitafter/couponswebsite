import axios from "axios";

class Globals { }
class DevelopmentGlobals extends Globals {
   public urls = {
      administrator: "/admin/",
      company: "/company/",
      customer: "/customer/",
      images: "/images/",
      login: "/login",
   }
}
class ProductionGlobals extends Globals {
   public urls = {
      administrator: "/admin/",
      company: "/company/",
      customer: "/customer/",
      images: "/images/",
      login: "/login",
      coupons: "/admin/coupons",
      general: "/"

   }
}

const globals = process.env.NODE_ENV === "production" ? new ProductionGlobals() : new DevelopmentGlobals();

axios.defaults.baseURL = 'http://localhost:8080';

export default globals;