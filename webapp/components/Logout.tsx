import { createClient } from "../utils/supabase/client";
import { redirect } from "next/navigation";

const LogoutButton = () => {
  const logoutUser = async () => {
    const supabase = createClient();
    // Sign out from Supabase
    await supabase.auth.signOut();

    // Call the API route to clear cookies
    const response = await fetch("/api/logout", { method: "POST" });
    if (response.ok) {
      redirect("/sign-in"); // Redirect to the login page or any other page
    } else {
      console.error("Failed to log out on the server side");
    }
  };

  return <button onClick={logoutUser}>Logout</button>;
};

export default LogoutButton;
