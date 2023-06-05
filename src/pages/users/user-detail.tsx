import { Paper, Grid, Typography, Button, Alert } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ArrowCircleLeftOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

/**
 * @description: UserDetail is the page used to render individual user details.
 * @returns JSX.Element
 * @example <UserDetail />
 */
export const UserDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (state?.userData === undefined)
    return (
      <Alert severity="error">
        Somthing went wrong, cannot get user detail.
      </Alert>
    );
  const userData = state.userData;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/users");
            }}
          >
            <ArrowCircleLeftOutlined color="primary" sx={{ mr: 1 }} />
            All Users
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={5} sx={{ p: 2 }}>
            <img
              src={userData.image}
              style={{ height: "auto", width: "100%" }}
              alt={userData.id + "-img"}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper elevation={5} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom component="div">
                  User Details
                </Typography>
                <Typography variant="body1" gutterBottom component="div">
                  Name: {userData.first_name} {userData.last_name}
                </Typography>
                <Typography variant="body1" gutterBottom component="div">
                  Username: {userData.username}
                </Typography>
                <Typography variant="body1" gutterBottom component="div">
                  Job Title: {userData.job_title}
                </Typography>
                <Typography variant="body1" gutterBottom component="div">
                  Bio: {userData.bio}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={5} sx={{ p: 2, mt: 2 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Groups
                </Typography>
                {userData.groups.map((group: any) => (
                  <Typography
                    key={group.id}
                    variant="body1"
                    gutterBottom
                    component="div"
                  >
                    {group.title}
                  </Typography>
                ))}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={5} sx={{ p: 2, mt: 2 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Visible to Groups
                </Typography>
                {userData.visible_to_groups.map((group: any) => (
                  <Typography
                    key={group.id}
                    variant="body1"
                    gutterBottom
                    component="div"
                  >
                    {group.title}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
