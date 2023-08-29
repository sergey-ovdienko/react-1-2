export let heroes = [
  { id: "1", name: "Captain America", status: "online" },
  { id: "2", name: "Iron Man", status: "online" },
  { id: "3", name: "Thor", status: "busy" },
  { id: "4", name: "Black Widow", status: "busy" },
  { id: "5", name: "Spider Man", status: "away" },
  { id: "6", name: "Hulk", status: "away" },
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
