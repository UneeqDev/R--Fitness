import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Loader from "./Loader";
import { MotionInView, varFadeInUp } from "../animate";

function ExerciseVideos({ exerciseVideos, name }) {
  if (!exerciseVideos.length) return <Loader />;
  return (
    <>
      <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" } }}
          fontWeight={700}
          color="#000"
          mb="33px"
        >
          Watch{" "}
          <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
            {name}
          </span>{" "}
          exercise videos
        </Typography>

        <Stack
          sx={{
            flexDirection: { lg: "column" },
            gap: { lg: "110px", xs: "40px" },
          }}
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
        >
          {exerciseVideos?.slice(0, 6)?.map((item, index) => (
            <MotionInView variants={varFadeInUp}>
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  style={{
                    borderTopLeftRadius: "20px",
                    objectFit: "contain",
                    width: "320px",
                    // height: "350px",
                  }}
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Box>
                  <Typography
                    sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                    fontWeight={600}
                    color="#000"
                  >
                    {item.video.title}
                  </Typography>
                  <Typography fontSize="14px" color="#000">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            </MotionInView>
          ))}
        </Stack>
      </Box>
      <Footer />
    </>
  );
}

export default ExerciseVideos;
