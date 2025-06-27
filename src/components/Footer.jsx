import React from 'react';

const Footer = () => (
  <footer style={{ textAlign: 'center', padding: '1rem 0', color: '#888', fontSize: '0.9rem' }}>
    &copy; {new Date().getFullYear()} MRH. All rights reserved.
  </footer>
);

export default Footer; 