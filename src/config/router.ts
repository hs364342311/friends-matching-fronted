// 路由配置
import SearchItemPage from "../pages/SearchItemPage.vue";           // 搜索结果页
import WelcomePage from "../pages/WelcomePage.vue";                 // 欢迎页面
import ItemDetailPage from "../pages/ItemDetailPage.vue";           // 物品详情页
import HomePage from "../pages/HomePage.vue";                       // 首页导航
import HealthDeclarationPage from "../pages/HealthDeclarationPage.vue"; // 健康申报规定页
import ProhibitedItemsPage from "../pages/ProhibitedItemsPage.vue"; // 禁限物品页面
// 定义路由
const routes = [
    {path: '/', component: WelcomePage, title: '欢迎页面'},
    {path: '/home', component: HomePage, title: '首页'},
    {path: '/item/list', title:'物品列表', component: SearchItemPage},
    {path: '/item/detail', title:'成都海关', component: ItemDetailPage},
    {path: '/health/declaration', title:'健康申报规定', component: HealthDeclarationPage},
    {path: '/prohibited/items', title:'禁限物品介绍', component: ProhibitedItemsPage},
]

export default routes;
