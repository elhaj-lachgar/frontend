import AuthLayout from "./Layout/AuthLayout";
import SignIn from "./pages/auth/Sign-in";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/Sign-up";
import Home from "./pages/Home";
import SectionLayout from "./Layout/SectionLayout";
import Profile from "./pages/Profile";
import ProtectLayout from "./Layout/ProtectLayout";
import UpdateProfile from "./pages/UpdateProfile";
import ChangePassword from "./pages/ChangePassword";
import PrivateChat from "./pages/PrivateChat";
import AdminLayout from "./Layout/AdminLayout";
import ValidityPage from "./pages/ValidityPage";
import EditValidity from "./pages/EditValidity";
import UploadItems from "./pages/UploadItems";
import AdminRooms from "./pages/AdminRooms";
import AdminUsers from "./pages/AdminUsers";

function App() {
  return (
    <Routes>
      <Route
        path="/auth/sign-in"
        element={<AuthLayout children={<SignIn />} />}
      />
      <Route
        path="/auth/sign-up"
        element={<AuthLayout children={<SignUp />} />}
      />
      <Route path="/" element={<SectionLayout children={<Home />} />} />
      <Route
        path="/profile/me"
        element={<ProtectLayout children={<Profile />} />}
      />
      <Route
        path="/profile/update-profile"
        element={<ProtectLayout children={<UpdateProfile />} />}
      />
      <Route
        path="/profile/change-password"
        element={<ProtectLayout children={<ChangePassword />} />}
      />
      <Route
        path="/private-chat"
        element={<SectionLayout children={<PrivateChat />} />}
      />
      <Route
        path="/admin/validity"
        element={<AdminLayout children={<ValidityPage />} />}
      />
      <Route
        path="/admin/edit-validity"
        element={<AdminLayout children={<EditValidity />} />}
      />
      <Route
        path="/admin/upload-icons"
        element={<AdminLayout children={<UploadItems />} />}
      />
      <Route
        path="/admin/rooms"
        element={<AdminLayout children={<AdminRooms />} />}
      />
      <Route
        path="/admin/users"
        element={<AdminLayout children={<AdminUsers />} />}
      />
    </Routes>
  );
}

export default App;
