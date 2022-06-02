<template>
  <a-layout style="height: 100%;">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        @click="onNavMenuItem"
      >
        <a-menu-item :key="route.name" v-for="route in routers[0]['children']">
          {{ route.meta.name }}
        </a-menu-item>
<!--        <a-menu-item key="console">控制台</a-menu-item>-->
<!--        <a-menu-item key="3">容灾管理</a-menu-item>-->
<!--        <a-menu-item key="4">迁移管理</a-menu-item>-->
<!--        <a-menu-item key="5">虚拟化</a-menu-item>-->
<!--        <a-menu-item key="6">连接管理</a-menu-item>-->
<!--        <a-menu-item key="7">统计报告</a-menu-item>-->
<!--        <a-menu-item key="8">日志</a-menu-item>-->
<!--        <a-menu-item key="9">下载</a-menu-item>-->
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
          @click="onSideMenuItem"
        >
          <a-menu-item key="device_status">
            硬件设备状态
          </a-menu-item>
          <a-menu-item key="implement_status">
            任务执行状态
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0;height: 22px;">
          <a-breadcrumb-item v-for="name in breadcrumbs" :key="name">
            {{name}}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { routes } from '@/router';
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

//定义ts

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const breadcrumbs = ref<string[]>(['系统状态','硬件设备状态']);
    let sideMenus = ref([]);
    const routers = ref(routes)
    const onNavMenuItem = (values: any) => {
      breadcrumbs.value = [];
      router.push({ name: values['key']});
      setTimeout(() => {
        route.matched.forEach(function(item){
          if(item.meta.name){
            breadcrumbs.value.push(item.meta.name as string)
          }
        });
      })
    };
    const onSideMenuItem = (values: any) => {
      breadcrumbs.value = [];
      router.push({ name: values['key']});
      setTimeout(() => {
        route.matched.forEach(function(item){
          if(item.meta.name){
            breadcrumbs.value.push(item.meta.name as string)
          }
        });
      })
    }

    return {
      selectedKeys1: ref<string[]>(['system']),
      selectedKeys2: ref<string[]>(['device_status']),
      onNavMenuItem,
      onSideMenuItem,
      breadcrumbs,
      routers
    };
  },
});
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
