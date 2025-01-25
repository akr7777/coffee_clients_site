import { MenuCategoryType, MenuItemType } from "../store/appSlice/types/app-types";

import capuchino from "../assets/images/coffee-1.webp"

export const menuCategories: Array<MenuCategoryType> = [
    {
        id: '01',
        title: "Кофе",
    },
    {
        id: '02',
        title: "Выпечка",
    },
    {
        id: '03',
        title: "Напитки",
    },
    {
        id: '04',
        title: "Десерты",
    },
]

export const menuItems: Array<MenuItemType> = [
    {
        id: '001',
        categoryId: '01',
        title: 'Капичино',
        description: 'Капучино',
        composition: 'вода, кофе',
        image: capuchino,
    },
    {
        id: '002',
        categoryId: '02',
        title: 'Круассан',
        description: 'КруассанКруассан',
        composition: 'вода, хлеб',
        image: capuchino,
    },
    {
        id: '003',
        categoryId: '03',
        title: 'Латте',
        description: 'ЛЛЛЛааааттееее',
        composition: 'вода, кофе',
        image: capuchino,
    },
]