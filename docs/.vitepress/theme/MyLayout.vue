<script setup>
import DefaultTheme from "vitepress/theme";
import Documate from "@documate/vue";

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
    <!-- 需要openAI key -->
    <template #aside-top>
      <Documate
        buttonLabel="求助AI"
        placeholder="开发中,敬请期待..."
        endpoint="https://gb1z7b5v9h.us.aircode.run/ask"
      />
    </template>
  </Layout>
</template>
<style scoped>
#ad {
  width: 100px;
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
}
#ad img {
  width: 100px;
  height: 100px;
}
</style>
