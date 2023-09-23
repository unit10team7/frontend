import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.get(
    "http://ec2-43-201-77-73.ap-northeast-2.compute.amazonaws.com:8080/post/1?page=1",
    (req, res, ctx) => {
      res(
        ctx.json({
          data: [
            {
              id: 1,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend1.jpg",
            },
            {
              id: 2,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend10.jpg",
            },
            {
              id: 3,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend11.jpg",
            },
            {
              id: 4,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend2.jpg",
            },
            {
              id: 5,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend3.jpg",
            },
            {
              id: 6,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend4.jpg",
            },
            {
              id: 7,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend5.jpg",
            },
            {
              id: 8,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend6.jpg",
            },
            {
              id: 9,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend7.jpg",
            },
            {
              id: 10,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend8.jpg",
            },
            {
              id: 11,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_boyfriend/ctg_boyfriend9.jpg",
            },
          ],
          pageInfo: {
            page: 1,
            size: 20,
            totalElements: 12,
            totalPages: 1,
          },
        }),
      );
    },
  ),

  rest.get(
    "http://ec2-43-201-77-73.ap-northeast-2.compute.amazonaws.com:8080/post/2?page=1",
    (req, res, ctx) => {
      res(
        ctx.json({
          data: [
            {
              id: 1,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider1.jpg",
            },
            {
              id: 2,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider10.jpg",
            },
            {
              id: 3,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider11.jpg",
            },
            {
              id: 4,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider12.jpg",
            },
            {
              id: 5,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider2.jpg",
            },
            {
              id: 6,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider3.jpg",
            },
            {
              id: 7,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider4.jpg",
            },
            {
              id: 8,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider5.jpg",
            },
            {
              id: 9,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider6.jpg",
            },
            {
              id: 10,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider7.jpg",
            },
            {
              id: 11,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider8.jpg",
            },
            {
              id: 12,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_insider/ctg_insider9.jpg",
            },
          ],
          pageInfo: {
            page: 1,
            size: 20,
            totalElements: 13,
            totalPages: 1,
          },
        }),
      );
    },
  ),

  rest.get(
    "http://ec2-43-201-77-73.ap-northeast-2.compute.amazonaws.com:8080/post/3?page=1",
    (req, res, ctx) => {
      res(
        ctx.json({
          data: [
            {
              id: 1,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship1.jpg",
            },
            {
              id: 2,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship10.jpg",
            },
            {
              id: 3,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship11.jpg",
            },
            {
              id: 4,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship12.jpg",
            },
            {
              id: 5,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship13.jpg",
            },
            {
              id: 6,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship14.jpg",
            },
            {
              id: 7,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship15.jpg",
            },
            {
              id: 8,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship16.jpg",
            },
            {
              id: 9,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship17.jpg",
            },
            {
              id: 10,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship18.jpg",
            },
            {
              id: 11,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship19.jpg",
            },
            {
              id: 12,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship2.jpg",
            },
            {
              id: 13,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship20.jpg",
            },
            {
              id: 14,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship21.jpg",
            },
            {
              id: 15,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship22.jpg",
            },
            {
              id: 16,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship23.jpg",
            },
            {
              id: 17,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship24.jpg",
            },
            {
              id: 18,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship25.jpg",
            },
            {
              id: 19,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_friendship/ctg_friendship26.jpg",
            },
          ],
          pageInfo: {
            page: 1,
            size: 20,
            totalElements: 29,
            totalPages: 2,
          },
        }),
      );
    },
  ),

  rest.get(
    "http://ec2-43-201-77-73.ap-northeast-2.compute.amazonaws.com:8080/post/4?page=1",
    (req, res, ctx) => {
      res(
        ctx.json({
          data: [
            {
              id: 1,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_lover/ctg_lover1.jpg",
            },
            {
              id: 2,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_lover/ctg_lover10.jpg",
            },
            {
              id: 3,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_lover/ctg_lover2.jpg",
            },
            {
              id: 4,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_lover/ctg_lover3.jpg",
            },
            {
              id: 5,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_lover/ctg_lover4.jpg",
            },
            {
              id: 6,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_lover/ctg_lover5.jpg",
            },
            {
              id: 7,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_lover/ctg_lover6.jpg",
            },
            {
              id: 8,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_lover/ctg_lover7.jpg",
            },
            {
              id: 9,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_lover/ctg_lover8.jpg",
            },
            {
              id: 10,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_lover/ctg_lover9.jpg",
            },
          ],
          pageInfo: {
            page: 1,
            size: 20,
            totalElements: 11,
            totalPages: 1,
          },
        }),
      );
    },
  ),

  rest.get(
    "http://ec2-43-201-77-73.ap-northeast-2.compute.amazonaws.com:8080/post/5?page=1",
    (req, res, ctx) => {
      res(
        ctx.json({
          data: [
            {
              id: 1,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend1.jpg",
            },
            {
              id: 2,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend10.jpg",
            },
            {
              id: 3,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend11.jpg",
            },
            {
              id: 4,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend2.jpg",
            },
            {
              id: 5,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend3.jpg",
            },
            {
              id: 6,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend4.jpg",
            },
            {
              id: 7,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend5.jpg",
            },
            {
              id: 8,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend6.jpg",
            },
            {
              id: 9,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend7.jpg",
            },
            {
              id: 10,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend8.jpg",
            },
            {
              id: 11,
              imageUrl:
                "https://kpop4shots.s3.ap-northeast-2.amazonaws.com/ctg_girlfriend/ctg_girlfriend9.jpg",
            },
          ],
          pageInfo: {
            page: 1,
            size: 20,
            totalElements: 12,
            totalPages: 1,
          },
        }),
      );
    },
  ),
];
