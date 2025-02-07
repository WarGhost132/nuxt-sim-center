export interface INavigationMenu {
  name: string;
  url: string;
  icon: string;
}

export const useMenu = () => {
  const menu: Ref<INavigationMenu[]> = ref([]);

  menu.value = [
    {
      icon: "i-ph:calendar-blank",
      name: "Расписание",
      url: "/schedule",
    },
    {
      icon: "i-ph:graduation-cap-light",
      name: "Учебные сессии",
      url: "/",
    },
    {
      icon: "i-ph:door",
      name: "Список комнат",
      url: "/rooms",
    },
    {
      icon: "i-ph:student-light",
      name: "Пользователи",
      url: "/users",
    },
    {
      icon: "i-ph:user-list",
      name: "Учебные группы",
      url: "/groups",
    },
    {
      icon: "i-ph:video-camera",
      name: "Список устройств",
      url: "/devices",
    },
    {
      icon: "i-ph:gear",
      name: "Настройки системы",
      url: "/settings",
    },
    {
      icon: "i-ph:archive",
      name: "Архив",
      url: "/archive",
    },
  ];

  return menu;
};
