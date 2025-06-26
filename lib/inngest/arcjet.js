// lib/arcjet.js
import arcjet, { tokenBucket } from "@arcjet/next";

export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "DRY_RUN",
      refillRate: 2,
      interval: 3600,
      capacity: 2,
    }),
  ],
});
