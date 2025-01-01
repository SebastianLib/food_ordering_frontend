import { AddPhotoAlternate, Close } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      cusineType: "",
      streetAddress: "",
      city: "",
      stateProvince: "",
      postalCode: "",
      country: "",
      email: "",
      mobile: "",
      twitter: "",
      instagram: "",
      openingHours: "Mon-Sun : 9:00 AM - 12:00 PM",
      images: [],
    },
    onSubmit: (values) => {
      const data = {
        name: values.name,
        description: values.description,
        cusineType: values.cusineType,
        address: {
          streetAddress: values.streetAddress,
          city: values.city,
          stateProvince: values.stateProvince,
          postalCode: values.postalCode,
          country: values.country,
        },
        contactInformation: {
          email: values.email,
          mobile: values.mobile,
          twitter: values.twitter,
          instagram: values.instagram,
        },
        openingHours: values.openingHours,
        images: values.images,
      };
      console.log("data", data);
      console.log("Fdfd");
      
    },
  });

  const handleImageChange = (event) => {
    // Update Formik field for image
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("restaurantImage", file);
    }
  };

  const handleRemoveImage = (index) => {};

  return (
    <div className="lg:flex lg:flex-col items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Restaurant
        </h1>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid className="flex flex-wrap gap-5" item xs={12}>
              <input
                accept="image/*"
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <label className="relative" htmlFor="fileInput">
                <span
                  className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border
              rounded-md border-gray-600"
                >
                  <AddPhotoAlternate className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {[1, 1, 1].map((image, index) => (
                  <div className="relative">
                    <img
                      src="https://cdn.pixabay.com/photo/2020/06/21/15/55/cup-of-coffee-5325613_1280.jpg"
                      alt=""
                      key={index}
                      className="w-24 h-24 object-cover"
                    />
                    <IconButton
                      onClick={() => handleRemoveImage(index)}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                    >
                      <Close />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="cusineType"
                name="cusineType"
                label="cusineType"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.cusineType}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="openingHours"
                name="openingHours"
                label="openingHours"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.openingHours}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="streetAddress"
                name="streetAddress"
                label="streetAddress"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.streetAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="city"
                name="city"
                label="city"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField
                fullWidth
                id="stateProvince"
                name="stateProvince"
                label="stateProvince"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.stateProvince}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField
                fullWidth
                id="postalCode"
                name="postalCode"
                label="postalCode"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.postalCode}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField
                fullWidth
                id="country"
                name="country"
                label="country"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.country}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="email"
                type="email"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="mobile"
                name="mobile"
                label="mobile"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="instagram"
                name="instagram"
                label="instagram"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.instagram}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="twitter"
                name="twitter"
                label="twitter"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.twitter}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Create Restaurant
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateRestaurantForm;
