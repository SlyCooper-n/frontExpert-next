export type DishRoutes = {
  id: number;
  name: string;
  slug: string;
  catalogEstimated: number;
};

export type DishParams = {
  params: { city: string };
};

export type DiscoverProps = {
  city: DishRoutes;
};
