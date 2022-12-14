import React from 'react';
import BookingArea from './BookingArea.jsx';
import '../../assets/styles/Main/TopSection.css';
import appStore from '../../assets/images/app-store.png';
import googlePlay from '../../assets/images/google-play.png';

function TopSection({ updateData, changeFilterState, isFilterActive }) {
  return (
    <div className="main">
      <div className="main-container col-s-12">
        <h1 className="main_title col-m-11 col-6">
          Discover stays <br />
          to live, work or just relax
        </h1>
        <BookingArea
          updateData={updateData}
          changeFilterState={changeFilterState}
          isFilterActive={isFilterActive}
        />
        <div className="applications-icons col-3 col-m-4 col-s-12">
          <div className="google-play">
            <img className="google-play-picture" src={googlePlay} alt="google-play" />
          </div>
          <div className="apple">
            <img className="apple-picture" src={appStore} alt="app-store" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
