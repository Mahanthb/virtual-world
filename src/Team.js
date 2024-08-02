import React from 'react';

const Team = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Our Team</h2>
      <div style={styles.teamContainer}>
        <div style={styles.teamMember}>
          <img src="https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/user.svg" alt="Team Member 1" style={styles.teamImage} />
          <h3 style={styles.teamName}>Mahanth Kumar</h3>
          <p style={styles.teamRole}>CEO</p>
        </div>
        <div style={styles.teamMember}>
          <img src="https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/user.svg" alt="Team Member 2" style={styles.teamImage} />
          <h3 style={styles.teamName}>Nipunn</h3>
          <p style={styles.teamRole}>CTO</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: '36px',
    margin: '0 0 20px'
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  teamMember: {
    flex: '1 1 200px',
    margin: '10px',
    textAlign: 'center'
  },
  teamImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px'
  },
  teamName: {
    fontSize: '24px',
    margin: '0 0 5px'
  },
  teamRole: {
    fontSize: '16px',
    color: '#777'
  }
};

export default Team;
