export type MenuCategoryType = {
    id: string,
    title: string,
}

export type MenuItemType = {
    id: string,
    categoryId: string,
    title: string,
    description: string,
    composition: string,

}
export type AppSliceType = {
    menuItems: Array<MenuItemType>
}

export const appInitContent: AppSliceType = {
    menuItems: []
}