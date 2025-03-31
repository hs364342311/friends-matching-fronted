// 路由配置
import SearchItemPage from "../pages/SearchItemPage.vue";           // 搜索结果页
import WelcomePage from "../pages/WelcomePage.vue";                 // 欢迎页面

// 定义路由
const routes = [
    {path: '/', component: WelcomePage, title: '温馨出行提醒'},
    {path: '/item/list', title:'物品列表', component: SearchItemPage},
]

export default routes;
