
import './App.css';
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    < div className="my-profile">
      <ProfilePhoto />
      <FullName />
      <Address />

    </div>
  );
}

export default App;
