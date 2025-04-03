// 路由配置
import SearchItemPage from "../pages/SearchItemPage.vue";           // 搜索结果页
import WelcomePage from "../pages/WelcomePage.vue";                 // 欢迎页面
import ItemDetailPage from "../pages/ItemDetailPage.vue";           // 物品详情页

// 定义路由
const routes = [
    {path: '/', component: WelcomePage, title: '欢迎页面'},
    {path: '/item/list', title:'物品列表', component: SearchItemPage},
    {path: '/item/detail', title:'成都海关', component: ItemDetailPage},
]

export default routes;
