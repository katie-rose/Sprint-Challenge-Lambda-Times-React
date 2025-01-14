import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map((tab, index) => (
          <Tab
            selectedTabHandler={props.selectedTabHandler}
            selectedTab={props.selectedTab}
            tab={tab}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectTabHandler: PropTypes.object,
  selectedTab: PropTypes.string,
  tab: PropTypes.object
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
