import { useState } from "react";
import { Paper, Typography, Collapse } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  add: {
    padding: theme.spacing(1, 1, 1, 2),
    background: "#EBECF0",
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
    cursor: "pointer",
  },
}));

const AddCard = ({ handleOnAddCard }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleOnConfirm = (title) => {
    handleOnAddCard(title);
  };

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard
          content={"Add Card"}
          setOpen={setOpen}
          onConfirm={handleOnConfirm}
          placeholder={"Add Title"}
          multiline
          rows={3}
        />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.add}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>+ Add a Card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default AddCard;
