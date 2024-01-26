import { createSelector } from "@reduxjs/toolkit";
import { PlayBtn } from "react-bootstrap-icons";

import { getUserAuthData } from "entities/user";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { ISideBarItem } from "../types/sidebarItems";

export const getSidebarItemSelector = createSelector(
  getUserAuthData,
  (autData) => {
    const sideBarItems: ISideBarItem[] = [
      {
        text: "Login",
        url: routePath.login,
        Icon: PlayBtn,
      },
    ];

    if (autData) {
      sideBarItems.push(
        {
          text: "Articles",
          url: routePath.articles,
          Icon: PlayBtn,
          authOnly: true,
        },
        {
          text: "Profile",
          url: routePath.profile + autData.id,
          Icon: PlayBtn,
          authOnly: true,
        },

        {
          text: "Create article",
          url: routePath.articles_create,
          Icon: PlayBtn,
          authOnly: true,
        }
      );
    }

    return sideBarItems;
  }
);
