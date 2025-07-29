import myAxios from "../plugins/myAxios.js";

export interface ModuleClickParam {
    appVersion?: string;
    moduleName?: string;
    modulePath?: string;
}

/**
 * 访问记录
 * @param param
 */
export async function record(param:ModuleClickParam) : Promise<any>{

   return myAxios({
        url: '/search/v1/moduleClickStatistics/insert',
        method: 'post',
        data: param
    })
}
