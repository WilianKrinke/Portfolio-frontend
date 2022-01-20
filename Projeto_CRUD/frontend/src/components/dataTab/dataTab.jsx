/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import propTypes from 'prop-types';

const TabsData = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Custom Tab 1</Tab>
        <Tab>Custom Tab 2</Tab>
      </TabList>
      <TabPanel>Panel 1</TabPanel>
      <TabPanel>Panel 2</TabPanel>
    </Tabs>
  );
};

export default TabsData;
