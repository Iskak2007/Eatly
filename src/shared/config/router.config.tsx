import type React from "react";
import { Main } from "@/pages/Main";
import { Blog } from "@/pages/Blog";
import { Menu } from "@/pages/Menu";
import { Pricing } from "@/pages/Pricing";
import { Contact } from "@/pages/Contact";

export enum RouterEnum {
    MAIN = "/",
    BLOG = "/blog",
    MENU = "/menu",
    PRICING = "/pricing",
    CONTACT = "/contact",
}

export interface RouterType {
    path: string;
    element: React.ReactNode;
}

export const RoutesObject: Record<RouterEnum, RouterType> = {
    [RouterEnum.MAIN]: {
        path: RouterEnum.MAIN,
        element: <Main />,
    },
    [RouterEnum.BLOG]: {
        path: RouterEnum.BLOG,
        element: <Blog />,
    },
    [RouterEnum.MENU]: {
        path: RouterEnum.MENU,
        element: <Menu />,
    },
    [RouterEnum.PRICING]: {
        path: RouterEnum.PRICING,
        element: <Pricing />,
    },
    [RouterEnum.CONTACT]: {
        path: RouterEnum.CONTACT,
        element: <Contact/>
    },
}