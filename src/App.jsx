import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import UserCard from './components/UserCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header title="React-Dev-Page" />
      <Welcome message="👋 Welcome, React Developer!" />
      <UserCard
        name="KWIZERA David"
        age={18}
        imageUrl="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Footer message="© 2025 - All rights reserved." />
    </div>
  );
}

export default App;
