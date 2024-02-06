"use client";
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import ProfileSettings from "@/components/ProfileSettings";
import SearchIcon from "@mui/icons-material/Search";
import TransitionProvider from "@/components/TransitionProvider";
import { motion } from "framer-motion";

function getRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }) {
  return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
    const timeout: NodeJS.Timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth)
      );

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const initialValue = dayjs("2024-02-06");

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "🌚" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export default function DateCalendarServerRequest() {
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  const fetchHighlightedDays = (date: Dayjs) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <TransitionProvider>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 1 }}
      />
      <Box
        sx={{
          display: "flex",
          height: `120px`,
          position: "fixed",
          zIndex: 1000,
          width: "100vw",
          background: "#ffdff2",
          flexShrink: 0,
        }}
      >
        <ProfileSettings />
        <Box
          sx={{
            display: "flex",
            width: "10%",
            alignItems: "end",
            justifyContent: "start",
            alignContent: "center",
            flexGrow: 1,
          }}
        >
          <Typography
            sx={{
              display: "flex",
              pl: 2,
              pb: 1,
              mr: 2,
              alignItems: "end",
              height: "100%",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            Calendar
          </Typography>
          <Box sx={{ display: "flex", width: "100vw" }}>
            <Paper
              component="form"
              sx={{
                mb: 1,
                ml: 2,
                display: "flex",
                alignItems: "center",
                width: 200,
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.65)",
                height: "30px",
              }}
            >
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase inputProps={{ "aria-label": "search google maps" }} />
            </Paper>
          </Box>
        </Box>
      </Box>
      //adding an extra box to make the messages not top with bar
      <Box
        sx={{
          display: "flex",
          height: `65px`,
          flexShrink: 0,
          background: "#8aa7ae",
        }}
      ></Box>
      <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            showDaysOutsideCurrentMonth
            defaultValue={initialValue}
            loading={isLoading}
            onMonthChange={handleMonthChange}
            renderLoading={() => <DayCalendarSkeleton sx={{}} />}
            slots={{
              day: ServerDay,
            }}
            slotProps={{
              day: {
                highlightedDays,
              } as any,
            }}
            sx={{
              position: "fixed",
              top: "185px",
              left: "0",
              right: "0",
              bottom: "0",
            }}
          />
        </LocalizationProvider>
      </Box>
      </TransitionProvider>
  );
}
