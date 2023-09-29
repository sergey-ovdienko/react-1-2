export let heroes = [
  {
    id: "1",
    name: "Adan Zuniga",
    status: "online",
    avatarUrl: "/assets/avatar_1.png",
  },
  {
    id: "2",
    name: "Justice Doyle",
    status: "online",
    avatarUrl: "/assets/avatar_2.png",
  },
  {
    id: "3",
    name: "Patricia Beasley",
    status: "busy",
    avatarUrl: "/assets/avatar_3.png",
  },
  {
    id: "4",
    name: "Phillip Chan",
    status: "busy",
    avatarUrl: "/assets/avatar_4.png",
  },
  {
    id: "5",
    name: "Rory Berry",
    status: "away",
    avatarUrl: "/assets/avatar_5.png",
  },
  {
    id: "6",
    name: "Leanna Vaughan",
    status: "away",
    avatarUrl: "/assets/avatar_6.png",
  },
];

export function randomizeStatuses() {
  heroes = heroes.reduce((acc, item) => {
    if (Math.random() > 0.5) {
      if (item.status === "online") {
        return [...acc, { ...item, status: "busy" }];
      }
      if (item.status === "busy") {
        return [...acc, { ...item, status: "away" }];
      }
      return [...acc, { ...item, status: "online" }];
    }
    return [...acc, item];
  }, []);
}

export function sortHeroes(list) {
  return [...list].sort((a, b) => {
    if (a.status === "online") {
      if (b.status === "online") {
        return a.name < b.name ? -1 : 1;
      }
      return -1;
    }
    if (b.status === "online") {
      return 1;
    }
    if (a.status === "busy") {
      if (b.status === "busy") {
        return a.name < b.name ? -1 : 1;
      }
      return -1;
    }
    if (b.status === "busy") {
      return 1;
    }
    return a.name < b.name ? -1 : 1;
  });
}
