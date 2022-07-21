import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Timer from "./Timer";

const container = {
  width: "100vw",
  overflowX: "none",
  paddingBottom: "1rem",

  // backgroundColor: "red",
};

const stackStyle = {
  flexDirection: { sm: "row", xs: "column" },
  gap: "10px",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  textAlign: "center",
  padding: "1rem",
  overflowX: "hidden",
};

function Detail({ exerciseDetail }) {
  const { gifUrl, name, target } = exerciseDetail;

  return (
    <>
      <Box sx={container}>
        <Stack sx={stackStyle}>
          <Stack flex={1}>
            <img src={gifUrl} style={{ objectFit: "contain" }} alt={name} />
          </Stack>
          <Stack
            direction="column "
            flex={1}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography
              variant="p"
              sx={{
                textTransform: "uppercase",
                fontSize: { md: "30px", sm: "25px", marginBottom: "1rem" },
                fontWeight: "bold",
              }}
              gutterBottom
            >
              {name}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Exercise has been shown to help block out negative thoughts,
              distract us from our daily worries and improve sleep patterns and
              may also change levels of chemicals in your brain for the better,
              such as serotonin, endorphins, and stress hormones{" "}
              <b style={{ textTransform: "capitalize" }}>{name}</b> is one of
              the best Exercises to target your{" "}
              <b style={{ textTransform: "capitalize" }}>{target} </b>. It will
              help you improve your mood and gain energy
            </Typography>
            <Typography></Typography>
            <Timer />
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Detail;
