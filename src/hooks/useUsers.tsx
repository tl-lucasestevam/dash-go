import { useQuery } from "react-query";
import { api } from "../services";

interface User {
  name: string;
  email: string;
  id: string;
  createdAt: string;
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("users");
  const users = data.users.map(({ name, email, createdAt, id }: User) => {
    return {
      id,
      name,
      email,
      createdAt: new Date(createdAt).toLocaleDateString("en-us", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return users;
}

export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5, // 5 Seconds
  });
}
