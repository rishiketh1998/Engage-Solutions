import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { LinearProgress, Alert, Pagination } from "@mui/material";
import { Dashboard } from "../../components/dashboard/dashboard";
import { useQuery } from "react-query";

/**
 * @description: Users page is the parent component to view all users information.
 * @returns JSX.Element
 * @example <Users />
 */
export const Users = () => {
  const [page, setPage] = useState<number>(1);
  const location = useLocation();
  const displayDashboard = location.pathname === "/users";
  /**
   * @description: useQuery hook is used to fetch data from the API and cache it.
   */
  const { isLoading, error, data } = useQuery(
    ["users", { page }],
    () => fetchUsersData(page),
    {
      retry: false,
    }
  );

  /**
   * @description: fetchUsersData is an async function that fetches data from the API and returns a promise.
   * @param pageNo: number - page number to fetch data from.
   * @returns Promise
   * @throws Error
   * @example
   */
  const fetchUsersData = async (pageNo: number) => {
    const response = await fetch(
      import.meta.env.VITE_ENGAGE_API_URL + `users?page=${pageNo}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          tenantId: import.meta.env.VITE_ENGAGE_TENANT_ID,
          Authorization: `Bearer ${import.meta.env.VITE_ENGAGE_API_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Failed to fetch (${response.status}): ${data.error}`);
    }
    return data;
  };

  if (isLoading) return <LinearProgress data-testid="linear-progress" />;

  if (error instanceof Error)
    return <Alert severity="error">{error.message}</Alert>;

  return (
    <>
      {displayDashboard && (
        <>
          <Dashboard data={data?.data} />
          <Pagination
            color="primary"
            sx={{ mt: "20px", display: "flex", justifyContent: "center" }}
            count={data.meta.last_page}
            page={page}
            data-testid="pagination"
            onChange={(e, page) => setPage(page)}
          />
        </>
      )}
      <Outlet />
    </>
  );
};
