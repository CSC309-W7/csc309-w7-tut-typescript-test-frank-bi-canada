import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  if (!Array.isArray(apiResponse)) { return []; }
  apiResponse.forEach(user => {
    // TODO: Still need to check if user.property is undefined or can be converted
    if (typeof user.name !== 'string') user.age = String(user.name);
    if (typeof user.age !== 'number') user.age = Number(user.age);
  });
  return apiResponse;
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}
