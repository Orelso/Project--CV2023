/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

function Intro() {
  return (
    <div>
      <Box>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "600px",
            backgroundColor: "#9A9684",
          }}
        >
          <section
            id="Intro"
            style={{
              fontSize: "4rem",
              fontFamily: "Urbanist",
              fontWeight: 300,
              color: "#F0E5D3",
              textAlign: "center",
            }}
          >
            <a style={{ textDecoration: "none", color: "#F0E5D3" }}>
              <h1 className="intro-style" style={{ color: "#412F25" }}>
                Hello I am{" "}
                <a
                  id="namestyle"
                  href="https://www.linkedin.com/in/orelso-vitam-56879791"
                  sx={{ cursor: "pointer" }}
                >
                  Orelso
                </a>
              </h1>
            </a>
            <p
              className="intro-style"
              style={{ marginTop: "-3rem", color: "#E8E1D8", fontWeight: 100 }}
            >
              a web developer
            </p>
          </section>

          <Grid container spacing={9} justifyContent="center">
            <Grid item>
              <img
                className="size"
                src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png"
                alt="HTML5 logo"
                width="50"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png"
                alt="CSS3 logo"
                width="50"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png"
                alt="JavaScript logo"
                width="50"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="React logo"
                width="70"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png"
                alt="Mui logo"
                width="70"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
                alt="Bootstrap logo"
                width="70"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png"
                alt="TypeScript logo"
                width="70"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
                alt="Python logo"
                width="70"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://cdn.dribbble.com/users/103932/screenshots/5657880/screen_shot_2018-12-05_at_10.27.32_pm.png"
                alt="Django logo"
                width="70"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://citywebconsultants.co.uk/sites/default/files/inline-images/mongo-medium.png"
                alt="MongoDB logo"
                width="70"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.png"
                alt="Tailwind CSS logo"
                width="70"
                height="60"
              />
            </Grid>
            <Grid item>
              <img
                className="size"
                src="https://www.svgrepo.com/show/303683/heroku-logo.svg"
                alt="Heroku logo"
                width="70"
                height="60"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default Intro;
