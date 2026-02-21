import { useState, useEffect } from "react";
import "../styles.css";

function Profile() {

  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const [user, setUser] = useState({
    name: storedUser.name || "Your Name",
    email: storedUser.email || "example@email.com",
    phone: storedUser.phone || "",
    address: storedUser.address || "",
    bio: storedUser.bio || "Tell something about yourself...",
    image: storedUser.image || "https://i.pravatar.cc/150?img=12"
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setUser({ ...user, image: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="profile-container">

      {/* LEFT PANEL */}
      <div className="profile-sidebar">
        <img src={user.image} alt="profile" />
        <h3>{user.name}</h3>
        <p>{user.email}</p>

        <div className="profile-stats">
          <div>
            <h4>{bookings.length}</h4>
            <span>Bookings</span>
          </div>
          <div>
            <h4>2026</h4>
            <span>Member Since</span>
          </div>
        </div>

        {editing && (
          <input type="file" onChange={handleImageChange} />
        )}

        <button onClick={() => setEditing(!editing)}>
          {editing ? "Save Profile" : "Edit Profile"}
        </button>
      </div>

      {/* RIGHT PANEL */}
      <div className="profile-main">

        <h2>Personal Information</h2>

        <div className="profile-grid">

          <div className="input-box">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="input-box">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="input-box">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="input-box full">
            <label>Bio</label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;