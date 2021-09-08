import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
    meta: {}
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
    meta: {}
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta: {
      icon: "icon-dashboard",
      title: "控制台"
    },
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: {
          title: "控制台",
          affix: true
        }
      }
    ]
  },
  {
    path: "/form",
    component: Layout,
    redirect: "/form/index",
    meta: {
      title: "表格",
      icon: "icon-form1"
    },
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/form/index"),
        meta: { title: "表单" }
      }
    ]
  },
  {
    path: "/screen",
    component: Layout,
    redirect: "/screen/index",
    meta: { icon: "icon-form" },
    children: [
      {
        path: "index",
        name: "Screen",
        component: () => import("@/views/screenOne/index"),
        meta: {
          title: "上传头像"
        }
      }
    ]
  },
  {
    path: "/chart",
    component: Layout,
    redirect: "/chart/index",
    meta: { icon: "icon-bargraph" },
    children: [
      {
        path: "index",
        name: "Echart",
        component: () => import("@/views/chart/index"),
        meta: { title: "图表" }
      }
    ]
  },
  {
    path: "external-link",
    component: Layout,
    meta: { roles: ["admin", "editor"], icon: "icon-link" },
    children: [
      {
        path: "https://panjiachen.github.io/vue-element-admin-site/#/",
        meta: {
          title: "External Link1",
          roles: ["admin", "editor"]
        }
      }
    ]
  },
  {
    path: "/icon",
    component: Layout,
    meta: {
      roles: ["admin", "editor"],
      icon: "icon-tubiao"
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/icons/index"),
        name: "Icon",
        meta: { title: "图标", noCache: true }
      }
    ]
  },
  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "nested",
    meta: {
      title: "路由嵌套",
      icon: "icon-nested",
      roles: ["admin", "editor"]
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "Menu1" },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/nested/menu1/menu1-1"),
            name: "Menu1-1",
            meta: {
              title: "Menu1-1",
              roles: ["admin", "editor"]
            }
          },
          {
            path: "menu1-2",
            component: () => import("@/views/nested/menu1/menu1-2"),
            name: "Menu1-2",
            meta: { title: "Menu1-2" },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                name: "Menu1-2-1",
                meta: {
                  title: "Menu1-2-1",
                  roles: ["admin", "editor"]
                }
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                name: "Menu1-2-2",
                meta: {
                  title: "Menu1-2-2",
                  roles: ["admin"]
                }
              }
            ]
          },
          {
            path: "menu1-3",
            component: () => import("@/views/nested/menu1/menu1-3"),
            name: "Menu1-3",
            meta: {
              title: "Menu1-3",
              roles: ["admin", "editor"]
            }
          }
        ]
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "Menu2",
        meta: {
          title: "menu2",
          roles: ["admin", "editor"]
        }
      }
    ]
  },
  {
    path: "/table",
    component: Layout,
    redirect: "/table/complex-table",
    meta: {
      title: "表格",
      icon: "icon-form1",
      roles: ["admin", "editor"]
    },
    children: [
      {
        path: "complex-table",
        name: "ComplexTable",
        component: () => import("@/views/table/complex-table"),
        meta: {
          title: "完整功能表格",
          roles: ["admin", "editor"]
        }
      },
      {
        path: "inline-edit-table",
        name: "InlineEditTable",
        component: () => import("@/views/table/inline-edit-table"),
        meta: {
          title: "内联表格编辑",
          roles: ["editor"]
        }
      },
      {
        path: "drag-table",
        name: "DragTable",
        component: () => import("@/views/table/drag-table"),
        meta: {
          title: "拖拽表格",
          roles: ["editor"]
        }
      },
      // 404 page must be placed at the end !!!
      {
        path: "*",
        redirect: "/404",
        hidden: true,
        meta: {}
      }
    ]
  }
];
export const asyncRoutes = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/directive",
    alwaysShow: true,
    meta: {
      title: "权限",
      icon: "icon-shujuquanxian",
      roles: ["editor"]
    },
    children: [
      {
        path: "directive",
        component: () => import("@/views/permission/directive"),
        name: "Directive",
        meta: {
          title: "指令权限",
          roles: ["editor"]
        }
      },
      {
        path: "role",
        component: () => import("@/views/permission/role"),
        name: "Role",
        meta: {
          title: "用户权限",
          roles: ["editor"]
        }
      }
    ]
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
