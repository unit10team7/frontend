// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a GET /user request
  rest.get("https://api.example.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
      ]),
    );
  }),
];
