// 路由配置
import SearchItemPage from "../pages/SearchItemPage.vue";           // 搜索结果页
import WelcomePage from "../pages/WelcomePage.vue";                 // 欢迎页面
import ItemDetailPage from "../pages/ItemDetailPage.vue";           // 物品详情页
import HomePage from "../pages/HomePage.vue";                       // 首页导航
import HealthDeclarationPage from "../pages/HealthDeclarationPage.vue"; // 健康申报规定页
import ProhibitedItemsPage from "../pages/ProhibitedItemsPage.vue"; // 禁限物品页面


import WelcomeTravelerPage from "../pages/WelcomeTravelerPage.vue"; // 欢迎页面
import NavPage from "../pages/NavPage.vue"; // 导航页   
import TravellerItemDetailPage from "../pages/TravellerItemDetailPage.vue"; // 旅客版物品详情页
import HealthNoticePage from "../pages/HealthNotice.vue"; // 健康申报提示页
import CustomsRestrictions from "../pages/CustomsRestrictions.vue"; // 海关限制物品
// 定义路由
const routes = [
    {path: '/', component: WelcomePage, title: '欢迎页面'},
    {path: '/home', component: HomePage, title: '首页'},
    {path: '/item/list', title:'物品列表', component: SearchItemPage},
    {path: '/item/detail', title:'行李物品通关规定查询', component: ItemDetailPage},
    {path: '/health/declaration', title:'健康申报规定', component: HealthDeclarationPage},
    {path: '/prohibited/items', title:'禁止和限制携带通关物', component: ProhibitedItemsPage},

    {path: '/traveller/welcome', component: WelcomeTravelerPage, title: '旅客版欢迎页面'},
    {path: '/traveller/nav', component: NavPage, title: '导航页'},
    {path: '/traveller/item/detail', title:'行李物品通关规定查询', component: TravellerItemDetailPage},
    {path: '/traveller/customs/restrictions', title:'禁止和限制携带通关物', component: CustomsRestrictions},  
    {path: '/traveller/health/notice', title:'健康申报提示', component: HealthNoticePage},
    
]

export default routes;
