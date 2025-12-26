import { useState } from "react";
import { Button, TextField, Box, Paper } from "@mui/material";

function Admin() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image_url: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // go to backend server and save the data
   const response = await fetch("http://localhost:3000/product/createUsingORM",{
    method:"POST",
    body:JSON.stringify(formData),
    headers:{
        "authroization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hdGhpYXJhc2FuIFNhbmthcmFtb29ydGh5Iiwicm9sZSI6InNlbGxlciIsImlhdCI6MTc2NDE2NTEzOCwiZXhwIjoxNzY0MTY4NzM4fQ.259XQ-i21a9PrhR_4hbo4N7O6_DaXYtIuF4yppRDlTs",
        "Content-Type":"application/json"
    }})

    const responseData = await response.text()
    console.log(responseData)
    
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Product
      </Button>

      {open && (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper sx={{ p: 4, width: 350 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Product Name"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <TextField
                name="category"
                label="Category"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <TextField
                name="image_url"
                label="Image URL"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <TextField
                name="price"
                label="Price"
                type="number"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />

              <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                Submit
              </Button>
            </form>
          </Paper>
        </Box>
      )}
    </>
  );
}

export default Admin;