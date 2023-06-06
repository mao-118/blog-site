<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-ads-after>
      <div id="ad">
        <a href="javascript:viod(0)" target="_blank" rel="sponsored noopener">
          <img src="/qr.jpg" />
          加我为好友!
        </a>
      </div>
    </template>
  </Layout>
</template>
<style scoped>
#ad {
  width: 100px;
  text-align: center;
  font-size: 12px;
}
#ad img {
  width: 100px;
  height: 100px;
}
</style>