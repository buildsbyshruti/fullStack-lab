import profilePic from "../assets/profilePic.jpeg";

function Profile() {
  return (
    <div className="card profile-card">
      <img src={profilePic} alt="Shruti" className="profile-img" />

      <h2>Shruti</h2>
      <p>UID: 23BAI70393</p>
      <p>Section: 23AML-3 A</p>

      <p className="about">
        Enthusiastic learner with interest in Full Stack Development, Machine
        Learning and building impactful projects.
      </p>
    </div>
  );
}

export default Profile;
