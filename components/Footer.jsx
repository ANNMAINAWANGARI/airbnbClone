import React from 'react';

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-black ">
      <div className="space-y-4 text-xs text-white ">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>NewsRoom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Cool clone</p>
        <p>Refferals Accepted</p>
        <p>Coding</p>
      </div>
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">HOST</h5>
        <p>Next JS</p>
        <p>Presents</p>
        <p>Airbnb</p>
        <p>Coding</p>
        <p>Challenge</p>
      </div>
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Facebook</p>
      </div>
    </div>
  );
}

export default Footer;
