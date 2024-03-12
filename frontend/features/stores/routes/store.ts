import { createWithEqualityFn } from "zustand/traditional";
import { routesActions } from "./actions";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { RoutesActionsType } from "./actions";
import { StateCreator } from "zustand/vanilla";
import { enableMapSet } from "immer";

enableMapSet(); // so we can use Map in immer

type RoutesStateType = {
  routes: string[];
  routeDetails: Map<string, Route>;
};

type Route = {
  id: string;
  name: string;
  holds: string[];
};

export type RoutesStoreType = RoutesStateType & RoutesActionsType;
export type RoutesStoreMutators = [
  ["zustand/immer", never],
  ["zustand/devtools", never],
];

const initialState: StateCreator<
  RoutesStoreType,
  RoutesStoreMutators,
  [],
  RoutesStateType
> = () => ({
  routes: ["route1", "route2", "route3"],
  routeDetails: new Map<string, Route>([
    [
      "route1",
      { id: "route1", name: "Climb High", holds: ["hold1", "hold2", "hold3"] },
    ],
    [
      "route2",
      { id: "route2", name: "Sky Peak", holds: ["hold4", "hold5", "hold6"] },
    ],
    [
      "route3",
      {
        id: "route3",
        name: "Mountain View",
        holds: ["hold7", "hold8", "hold9"],
      },
    ],
  ]),
});

export const useRoutesStore = createWithEqualityFn<RoutesStoreType>()(
  immer(
    devtools((...a) => ({
      ...initialState(...a),
      ...routesActions(...a),
    })),
  ),
);
