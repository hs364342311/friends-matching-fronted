/**
 * 物品信息
 */
export type ItemType = {
    id: number;
    itemType: string;       // 物品类型
    itemKey: string;    // 关键词品名
    supervise?: string;     // 监管要求
    stipulate?: string;     // 规定依据
};
