import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";
import { constantRoutes, asyncRouter } from "@/router/index";

NProgress.configure({ showSpinner: false }); // NProgress Configuration
function hasPermission(role, router) {
  if (router.meta && router.meta.roles) {
    return router.meta.roles.includes(role);
  }
}
const whiteList = ["/login", "/404"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
    } else {
      const hasGetUserInfo = store.getters.name;
      if (hasGetUserInfo) {
        const role = store.getters.role.join();
        const newRoutes = asyncRouter.filter(item => {
          if (hasPermission(role, item)) {
            if (item.children && item.children.length > 0) {
              item.children = item.children.filter(child_item =>
                hasPermission(role, child_item)
              );
            }
            return item;
          }
        });
        router.options.routes = constantRoutes.concat(newRoutes);
        router.addRoutes(newRoutes);
        next();
      } else {
        try {
          // get user info
          await store.dispatch("user/getInfo");
          next();
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch("user/resetToken");
          Message.error(error || "Has Error");
          next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
