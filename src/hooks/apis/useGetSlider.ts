import { UseInfiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";

import { get } from "../../apis/instance";

interface SliderResponse {
  data: {
    id: number;
    imageUrl: string;
  }[];
  pageInfo: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}

const getSlider = async (id: number, page: number) => {
  const data = await get<SliderResponse>(`/post/${id}?page=${page}`);

  return data;
};

export const useGetSlider = (id: number, options?: UseInfiniteQueryOptions<SliderResponse>) =>
  useInfiniteQuery<SliderResponse>(
    ["useGetSlider", id],
    ({ pageParam = 1 }) => getSlider(id, pageParam),
    {
      getNextPageParam: (lastPage) => {
        const { page, totalPages } = lastPage.pageInfo;

        return page >= totalPages ? undefined : page + 1;
      },
      ...options,
    },
  );
