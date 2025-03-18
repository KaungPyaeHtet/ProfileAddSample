import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Profile from "./components/Profile.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [profiles, setProfiles] = useState([]);
  return (
    <div className="container border border-primary rounded my-3 p-4">
      <Header />
      <Form profiles={profiles} setProfiles={setProfiles} />

      {
      profiles
        .sort((a, b) => b.id - a.id)
        .map((profile) => {
          return (
            <Profile
              key={profile.id}
              name={profile.name}
              age={profile.age}
              status={profile.status}
            />
          );
        })}
      <Footer />
    </div>
  );
}

export default App;
