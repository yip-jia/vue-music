import Vue from "vue";
import Router from "vue-router";
import Rank from "./components/rank/rank.vue";
import Recommend from "./components/recommend/recommend";
import Search from "./components/search/search";
import Singer from "./components/singer/singer";
import SingerDetail from "./components/singer-detail/singer-detail";
import Disc from "./components/disc/disc";
import TopList from "./components/top-list/top-list.vue";
import UserCenter from "./components/user-center/user-center.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/rank",
      component: Rank,
      children: [
        {
          path: ":id",
          component: TopList
        }
      ]
    },
    {
      path: "/recommend",
      component: Recommend,
      children: [
        {
          path: ":id",
          component: Disc
        }
      ]
    },
    {
      path: "/search",
      component: Search,
      children: [
        {
          path: ":id",
          component: SingerDetail
        }
      ]
    },
    {
      path: "/singer",
      component: Singer,
      children: [
        {
          path: ":id",
          component: SingerDetail
        }
      ]
    },
    {
      path: "/user",
      component: UserCenter
    }
  ]
});
