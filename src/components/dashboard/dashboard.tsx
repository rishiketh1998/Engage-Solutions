import { Table, TableBody, TableCell, TableRow, Paper } from "@mui/material";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export interface DashboardProps {
  testid?: string;
  data: any[] | undefined;
}

export const Dashboard = ({ testid = "dashboard", data }: DashboardProps) => {
  const navigate = useNavigate();
  const tableHeaders = [
    "ID",
    "First Name",
    "Last Name",
    "Username",
    "Reference",
    "More Info",
  ];
  return (
    <>
      <Paper
        elevation={5}
        data-testid={testid}
        sx={{
          width: "100%",
          display: "block",
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            borderCollapse: "separate",
            borderSpacing: "0px 3px",
          }}
        >
          <TableBody>
            <TableRow>
              {tableHeaders.map((header, headerIndex) => (
                <TableCell
                  key={headerIndex}
                  align={"center"}
                  sx={{
                    color: "#404040",
                    bottom: "-3px",
                    padding: "15px",
                    fontSize: "14px",
                    fontWeight: "700",
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
            {data?.map((row: any) => (
              <TableRow key={row.id}>
                {tableHeaders.map((header, headerIndex) => (
                  <TableCell
                    key={headerIndex}
                    align={"center"}
                    sx={{
                      border: "1px solid #E0E0E0",
                      padding: "13px",
                      fontSize: "14px",
                    }}
                  >
                    {header !== "More Info" ? (
                      row[header.toLowerCase().replace(/\s/g, "_")]
                    ) : (
                      <ArrowCircleRightOutlined
                        sx={{
                          cursor: "pointer",
                        }}
                        color="primary"
                        onClick={() =>
                          navigate(`/users/${row.id}`, {
                            state: {
                              userData: row,
                              id: row.id,
                            },
                          })
                        }
                      />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};
