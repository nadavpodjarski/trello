import { Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { addColumn, deleteColumn, editColumn } from "../redux/actions";

import Column from "./Column";
import AddColumn from "./AddColumn";

const useStyles = makeStyles((theme) => ({
  columnContainer: {
    height: "100%",
    display: "inline-block",
    verticalAlign: "top",
  },
  columns: {
    display: "flex",
    height: "100%",
    overflowY: "hidden",
  },
  addColumn: {
    marginLeft: theme.spacing(0.5),
  },
}));

const Board = ({ id: boardId, columns }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOnAddColumn = (title) => dispatch(addColumn({ title }));

  const handleOnDeleteColumn = (columnId) => () =>
    dispatch(deleteColumn({ columnId }));

  const handleOnEditColumn = (columnId) => (title) =>
    dispatch(editColumn({ title, columnId }));

  return (
    <>
      <Droppable droppableId={boardId} type="BOARD" direction="horizontal">
        {(provided) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classes.columns}
            >
              {columns.map(({ id: columnId, cards, title }, index) => (
                <div className={classes.columnContainer} key={columnId}>
                  <Column
                    {...{
                      index,
                      id: columnId,
                      cards,
                      title,
                      handleOnDeleteColumn: handleOnDeleteColumn(columnId),
                      handleOnEditColumn: handleOnEditColumn(columnId),
                    }}
                    key={columnId}
                  />
                </div>
              ))}
              {provided.placeholder}
              <div className={classes.addColumn}>
                <AddColumn handleOnAddColumn={handleOnAddColumn} />
              </div>
            </div>
          );
        }}
      </Droppable>
    </>
  );
};

export default Board;
