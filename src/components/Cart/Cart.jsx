import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import { AddLocationAlt } from "@mui/icons-material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};
const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street Address is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string().required("Pincode is required"),
  city: Yup.string().required("City is required"),
});

const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const items = [1, 1];
  const handleSelectAddress = (item) => {};

  const handleOpenAddressModal = () => {
    setOpen(true);
  };
  const handleSubmit = (values) => {
    console.log(values);
    
  };

  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-28">
          {items.map((item, index) => (
            <CartItem key={index} />
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>500 PLN</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>25 PLN</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Platform Fee</p>
                <p>5 PLN</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>33 PLN</p>
              </div>
              <Divider />
              <div className="flex justify-between text-gray-400">
                <p>Total Pay</p>
                <p>1031 PLN</p>
              </div>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 pt-28">
          <div>
            <h1 className="text-center font-semibold text-2xl">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1].map((item, index) => (
                <AddressCard
                  key={index}
                  item={item}
                  showButton={true}
                  handleSelectAddress={handleSelectAddress}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5 h-fit">
                <AddLocationAlt />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Address
                  </h1>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="streetAddress"
                  label="Street Address"
                  fullWidth
                  variant="outlined"
                  error={!ErrorMessage("street address")}
                  helperText={
                    <ErrorMessage
                      name="streetAddress"
                      render={(msg) => <span className="text-red-600">{msg}</span>}
                    />
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="state"
                  label="state"
                  fullWidth
                  variant="outlined"
                  error={!ErrorMessage("state")}
                  helperText={
                    <ErrorMessage
                      name="state"
                      render={(msg) => <span className="text-red-600">{msg}</span>}
                    />
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="city"
                  label="city"
                  fullWidth
                  variant="outlined"
                  error={!ErrorMessage("city")}
                  helperText={
                    <ErrorMessage
                      name="city"
                      render={(msg) => <span className="text-red-600">{msg}</span>}
                    />
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="pincode"
                  label="pincode"
                  fullWidth
                  variant="outlined"
                  error={!ErrorMessage("pincode")}
                  helperText={
                    <ErrorMessage
                      name="pincode"
                      render={(msg) => <span className="text-red-600">{msg}</span>}
                    />
                  }
                />
              </Grid>
              <Grid item xs={12}>
                  <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  >
                    Deliver Here
                  </Button>
              </Grid>
            </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
