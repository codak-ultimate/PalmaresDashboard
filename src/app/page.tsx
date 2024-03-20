"use client"
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./page.css";
import DownloadIcon from "@mui/icons-material/Download";
import Drawers from "@/components/Dashboard/Drawer/Drawer";
import Line from "@/components/Dashboard/Charts/LineChart/Line";
import Tables from "@/components/Dashboard/Tables/Tables";
import BarCharts from "@/components/Dashboard/Charts/BarCharts/BarCharts";
import BasicTab from "@/components/Dashboard/Tabs/BasicTab";
export default function Home() {
  return (
    <>
      <Drawers />
      <BasicTab />

      <Stack className="main-content">
        <div className="content-row">
          <Box
            className="de"
            sx={{
              padding: "15px",
              background: "rgb(255,255,255)",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "1px 1px 5px rgba(0,0,0,.5)",
              width: "22%",

              maxHeight: "30vh",
            }}
          >
            <Box
              className="content"
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                gap: "10px",
                padding: "15px",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5" component={"h4"}>
                Price
              </Typography>
              <Typography variant="h6" component={"div"}>
                $24.00
              </Typography>

              <Stack
                direction={"row"}
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <DownloadIcon
                  sx={{
                    color: "rgb(234,60,12)",
                  }}
                />
                <Typography component={"div"}>Down load it</Typography>
              </Stack>
            </Box>
          </Box>
          <Box className="line">
            <Line />
          </Box>
        </div>
        <Tables />
        <BarCharts />
      </Stack>
    </>
  );
}
