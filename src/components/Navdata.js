import React from "react"
import * as AiIcons from "react-icons/ai"
import * as GoIcons from "react-icons/go"

export const Navdata = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiOutlineHome />,
        cName: "nav-text"
    },
    {
        title: "Educations",
        path: "/education",
        icon: <GoIcons.GoBook />,
        cName: "nav-text"
    },
    {
        title: "About",
        path: "/",
        icon: <AiIcons.AiOutlineInfoCircle />,
        cName: "nav-text"
    },
]