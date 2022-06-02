import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home/Home.vue"),
    children: [
      {
        path: "/system", //系统状态
        name: "system",
        component: () => import("@/views/System/System.vue"),
        meta: { name: "系统状态" },
        children: [
          {
            path: "device_status", //硬件设备状态
            name: "device_status",
            component: () => import("@/views/System/components/DeviceStatus/DeviceStatus.vue"),
            meta: { name: '硬件设备状态' }
          },
          {
            path: "implement_status",  //任务执行状态
            name: "implement_status",
            component: () => import("@/views/System/components/ImplementStatus/ImplementStatus.vue"),
            meta: { name: '任务执行状态' }
          }
        ]
      },
      {
        path: "/console",
        name: "console",
        component: () => import("@/views/Console/Console.vue"),
        meta: { name: '控制台' },
        children: [
          {
            path: "backups", //备份
            name: "backups",
            component: () => import("@/views/System/components/DeviceStatus/DeviceStatus.vue"),
            meta: { name: '备份' },
            children: [
              {
                path: "new_backup_schedule", //新建备份计划
                name: "new_backup_schedule",
                component: () => import("@/views/System/components/DeviceStatus/DeviceStatus.vue"),
                meta: { name: '新建备份计划' },
              }
            ]
          },
          {
            path: "recovery",  //恢复
            name: "recovery",
            component: () => import("@/views/System/components/ImplementStatus/ImplementStatus.vue"),
            meta: { name: '恢复' },
            children: [
              {
                path: "recovery", //恢复
                name: "recovery",
                component: () => import("@/views/System/components/DeviceStatus/DeviceStatus.vue"),
                meta: { name: '恢复' },
              },
              {
                path: "verification", //验证
                name: "verification",
                component: () => import("@/views/System/components/DeviceStatus/DeviceStatus.vue"),
                meta: { name: '验证' },
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/Login.vue"),
  },


  {
    path: "/dr_manage",
    name: "dr_manage",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/transfer_manage",
    name: "transfer_manage",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/virtualization",
    name: "virtualization",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/connection_manage",
    name: "connection_manage",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/statistics_report",
    name: "statistics_report",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/journal",
    name: "journal",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/download",
    name: "download",
    component: () => import("@/views/Login/Login.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export {
  routes,
  router
}
// export default router;
