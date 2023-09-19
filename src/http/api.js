import http from "./http";

export const getroles = ()=> http.get("roles.json")

export const getmenu = ()=>http.get("menu.json")