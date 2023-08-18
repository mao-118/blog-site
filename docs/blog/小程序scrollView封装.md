# 小程序 scroll-view 封装

`scroll-view`封装实现上拉加载和下拉刷新

## 组件封装

```vue
<!-- scroll-view-y.vue -->
<template>
  <scroll-view
    class="scroll-y"
    scroll-y
    :refresher-enabled="enabled"
    :refresher-triggered="triggered"
    :scroll-top="scrollTop"
    @refresherrefresh="emits('refresh')"
    @scrolltolower="emits('scrolltolower')"
    @scroll="(e) => emits('scroll', e)"
  >
    <view v-if="!hasData && status === 'no-more'">暂无更多数据~</view>
    <block v-else>
      <slot />
      <uni-load-more
        v-if="!triggered && status"
        :status="status"
      ></uni-load-more>
    </block>
  </scroll-view>
</template>
<script setup lang="ts">
interface IProp {
  scrollTop?: number;
  triggered?: boolean;
  status?: string;
  enabled?: boolean;
  hasData?: boolean;
}
withDefaults(defineProps<IProp>(), {
  scrollTop: 0,
  triggered: false,
  status: "",
  enabled: true,
  hasData: true,
});
const emits = defineEmits<{
  (e: "refresh"): void;
  (e: "scrolltolower"): void;
  (e: "scroll", $event: any): void;
}>();
</script>
<style scoped lang="scss">
.scroll-y {
  height: 100%;
}
</style>
```

## hooks 封装

```ts
// useScrollView.ts
import { ref, reactive, type Ref } from "vue";
import { DialogUtils } from "@bbkb/utils";
const dialogUtils = new DialogUtils();
interface ResData<T = any> {
  total: number;
  data: T[];
}
interface IPage {
  currentPage: number;
  pageSize: number;
}
/**
 * 分页加载
 * @param request
 * @returns
 */
const useScrollView = <T = any>(
  request: (params: IPage) => Promise<ResData<T>>
) => {
  const scrollTop = ref(0);
  const status = ref("more");
  const paging: IPage = reactive({
    currentPage: 1,
    pageSize: 10,
  });
  const total = ref(0);
  const flag = ref(false);
  const triggered = ref(false);
  const freshing = ref(false);
  const dataList = ref<T[]>([]) as Ref<T[]>;
  const sendRequest = async () => {
    if (dataList.value.length && dataList.value.length >= total.value) {
      return;
    }
    if (!flag.value) {
      flag.value = true;
      status.value = "loading";
      const res = await request(paging).finally(() => {
        flag.value = false;
      });
      total.value = res.total;
      dataList.value = [...dataList.value, ...res.data];
      status.value = dataList.value.length >= total.value ? "no-more" : "more";
      paging.currentPage++;
    }
  };
  /**
   * 刷新
   *  */
  const refresh = async () => {
    if (freshing.value) {
      return;
    }
    freshing.value = true;
    triggered.value = true;
    paging.currentPage = 1;
    total.value = 0;
    const res = await request(paging).finally(() => {
      triggered.value = false;
      freshing.value = false;
    });
    total.value = res.total;
    dataList.value = res.data;
    status.value = dataList.value.length >= total.value ? "no-more" : "more";
    paging.currentPage++;
    dialogUtils.showToast("刷新成功");
  };
  /**
   * 重置
   */
  const reset = () => {
    // 搜索时需要重置高度
    scrollTop.value = 0;
    paging.currentPage = 1;
    total.value = 0;
    dataList.value = [];
  };
  /**
   * 滚动
   */
  const onScroll = (e) => {
    scrollTop.value = e.detail.scrollTop;
  };
  return {
    scrollTop,
    status,
    dataList,
    reset,
    refresh,
    triggered,
    onScroll,
    scrolltolower: sendRequest,
  };
};
export default useScrollView;
```

## 使用

```vue
<template>
  <view class="goods-waterfall">
    <scroll-view-y
      :scroll-top="scrollTop"
      :has-data="!!dataList.length"
      :status="status"
      :triggered="triggered"
      @refresh="refresh"
      @scrolltolower="scrolltolower"
      @scroll="(e) => onScroll(e)"
    >
      <view v-for="item in dataList" :key="item.id"> {{ item.name }} </view>
    </scroll-view-y>
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import useScrollView from "@/common/hook/useScrollView";
import { onLoad, onPullDownRefresh, onReachBottom } from "@dcloudio/uni-app";
// 请求函数能接受到hooks传过来的页码对象
const getList = (paging): Promise<any> => {
  // 模拟一个请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list = [];
      for (let i = 0; i < 10; i++) {
        list.push({
          id: Math.random(),
          name: "测试" + i,
        });
      }
      resolve({
        total: 30,
        data: props.id % 2 === 0 ? list : [],
      });
    }, 1500);
  });
};
const {
  status,
  refresh,
  scrolltolower,
  dataList,
  triggered,
  scrollTop,
  onScroll,
} = useScrollView(getList);
// 页面进来加载
onLoad(() => {
  scrolltolower();
});
</script>
```

:::tip

1. 官方说明`scroll-view`不适合放长列表，会有性能问题，但是我这边还没遇到过。

2. 既然官方都这么说了，所以推荐大家尽可能使用页面级别的`上拉加载`和`下拉刷新`

3. 当然咱们封装的这个`hooks`也适用页面级别的`上拉加载`和`下拉刷新`
   :::
