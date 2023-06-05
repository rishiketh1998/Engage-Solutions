import { useState } from "react";
import { LinearProgress, Alert, Pagination } from "@mui/material";
import { Dashboard } from "../../components/dashboard/dashboard";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Users = () => {
  const [page, setPage] = useState<number>(1);
  const location = useLocation();
  const displayDashboard = location.pathname === "/users";
  const { isLoading, error, data } = useQuery(
    ["users", { page }],
    () => fetchUsersData(page),
    {
      retry: false,
    }
  );

  const fetchUsersData = async (pageNo: number) => {
    const response = await fetch(
      `https://api.engageesp.com/ext/v1/users?page=${pageNo}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          tenantId: "66b7391b-7cf1-11ec-8440-0a8688f5a186",
          Authorization: `Bearer FxDUomKYF2EKD7Mwc2eJ8Uu0nFkl11m8mpDnFggf`,
        },
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Failed to fetch (${response.status}): ${data.error}`);
    }
    return data;
  };

  if (isLoading) return <LinearProgress />;

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
            onChange={(e, page) => setPage(page)}
          />
        </>
      )}
      <Outlet />
    </>
  );
};
