import {
    Box,
    Card,
    CardActions,
    CardHeader,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import CreateIcon from "@mui/icons-material/Create";
  import { Delete } from "@mui/icons-material";
  
  const orders = [1, 1, 1, 1, 1];
  const IngredientTable = () => {
    return (
      <Box>
        <Card className="mt-1">
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <CreateIcon />
              </IconButton>
            }
            title={"Ingredient"}
            sx={{ pt: 2, alignItems: "center" }}
          />
  
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Availability</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{"image"}</TableCell>
                    <TableCell align="right">{"price"}</TableCell>
                    <TableCell align="right">{"pizza"}</TableCell>
                    <TableCell align="right">{"ingredients"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    );
  };
  
  export default IngredientTable;
  