import { useState } from "react";
import { Paper, Typography, Collapse } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#EBECF0",
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
  },
}));

const AddCard = ({ handleOnAddCard, columnId }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleOnConfirm = (title) => {
    handleOnAddCard(title, columnId);
  };

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard
          content={"Add Card"}
          setOpen={setOpen}
          onConfirm={handleOnConfirm}
        />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
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