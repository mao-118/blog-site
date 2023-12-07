import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import Documate from "@documate/vue";
import "@documate/vue/dist/style.css";
import MyLayout from "./MyLayout.vue";
import "./index.css";
export default {
  ...DefaultTheme,
  Layout: MyLayout,
};
