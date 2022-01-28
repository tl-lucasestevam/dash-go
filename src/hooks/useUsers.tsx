import { useQuery } from "react-query";
import { number } from "yup";
import { api } from "../services";

interface User {
  name: string;
  email: string;
  id: string;
  createdAt: string;
}

interface GetUsersData {
  users: User[];
  totalCount: number;
}

export async function getUsers(page: number): Promise<GetUsersData> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);
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
  return { users, totalCount };
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5, // 5 Seconds
  });
}
