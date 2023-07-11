import { expect, it } from "vitest";

type Role =  "admin" | "user" | "super-admin";
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (id: number, firstName: string, lastName: string, role: Role, posts : Array<Post>) : User => {
  return {
    id, firstName, lastName, role, posts
  };
};

it("Should return a valid user", () => {
  const user = makeUser(
    1,
    "sinta",
    "sinta",
    "admin",
    [
      {
        id: 1,
        title:"something"
      }
    ]
  );

  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toBeTypeOf("string");
});
