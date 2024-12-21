import { AccountCircle } from "@mui/icons-material";
import { Button } from "@mui/material";

const UserProfile = () => {

  const handleLogout = () => {

  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <AccountCircle sx={{ fontSize: "9rem" }} />
        <h1 className="py-2 text-2xl font-semibold">My Profile</h1>
        <p>Email: sebastianlib2@gmail.com</p>
        <Button variant="contained" onClick={handleLogout} sx={{ margin: "2rem 0rem" }}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
