import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../actions/habits";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  CardActions,
} from "@material-ui/core";
import "./habit.css";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import moment from "moment";
const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxHeight: 400,
    marginLeft: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

function Habit({ habit, setCurrentId }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className="habit-container">
      <Card className={classes.root}>
        <CardContent>{habit.habit}</CardContent>
        <CardContent> {moment(habit.createdAt).format("ll")}</CardContent>
        <CardContent>Time:{moment(habit.time).format("LT")}</CardContent>
        <CardContent>
          <div class="container">
            <svg width="350" height="250" class="chart-container">
              <circle
                cx="100"
                cy="100"
                r="70"
                class="back"
                fill="none"
                class="back"
              />
              <circle cx="98" cy="109" r="70" class="front" fill="none" />
              <g class="text">
                <text
                  x="100"
                  y="100"
                  alignment-baseline="central"
                  text-anchor="middle"
                  id="percentage"
                >
                  70%
                </text>
              </g>
            </svg>
          </div>
        </CardContent>
        <CardActions className="btn-wrap">
          <IconButton className="check-btn">
            <CheckCircleOutlinedIcon />
          </IconButton>
          <IconButton className="notif-btn">
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          {(user?.result?.googleId == habit?.creator ||
            user?.result?._id == habit?.creator) && (
            <IconButton className="del-btn">
              <CreateOutlinedIcon onClick={() => setCurrentId(habit._id)} />
            </IconButton>
          )}

          {(user?.result?.googleId == habit?.creator ||
            user?.result?._id == habit?.creator) && (
            <IconButton className="del-btn">
              <DeleteOutlineOutlinedIcon
                onClick={() => dispatch(deleteHabit(habit._id))}
                {...classes.ButtonChange}
              />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default Habit;
