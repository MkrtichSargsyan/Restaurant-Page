import home from "./pages/home.js";
import menu from "./pages/menu.js";
import contact from "./pages/contact.js";

class Router {
  constructor(routes) {
    this.routes = routes;
  }

  renderPage(path, content) {
    const defaultView = this.routes.find((route) => route.name === "home").view;
    let view = "";
    switch (path) {
      case "":
        view = defaultView;
        break;
      case "#menu":
        view = this.routes.find((route) => route.name === "menu").view;
        break;
      case "#contact":
        view = this.routes.find((route) => route.name === "contact").view;
        break;

      default:
        view = defaultView;
    }
    view(content);
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    view: home,
  },
  {
    path: "#menu",
    name: "menu",
    view: menu,
  },
  {
    path: "#contact",
    name: "contact",
    view: contact,
  },
];

const router = new Router(routes);

export default router;
