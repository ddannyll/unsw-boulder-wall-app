import { StateCreator } from "zustand/vanilla";
import { RoutesStoreMutators, RoutesStoreType } from "./store";
import { nanoid } from "nanoid";

export type RoutesActionsType = {
  actions: {
    addNewRoute: (name: string) => Promise<string>;
  };
};

export const routesActions: StateCreator<
  RoutesStoreType,
  RoutesStoreMutators,
  [],
  RoutesActionsType
> = (set, get, api) => ({
  actions: {
    addNewRoute: async (name) => {
      const newId = nanoid();
      set((state) => {
        state.routes.push(newId);
        state.routeDetails.set(newId, {
          name: name,
          id: newId,
          holds: [],
        });
      });
      return newId;
    },
  },
});
