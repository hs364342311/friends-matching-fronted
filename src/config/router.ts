// 路由配置
import SearchItemPage from "../pages/SearchItemPage.vue";           // 搜索结果页

// 定义路由
const routes = [
    {path: '/', component: SearchItemPage},
    {path: '/item/list', title:'物品列表', component: SearchItemPage},
]

export default routes;
