import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./style.css"
import OneHook from './stateHook';
import EffectHook from "./effectHook"
import Ref from './useRef';
import Fragment from './Fragment';
import Memo from './useMemo';
import CallBakHok from './CallBakHok';
import ReduceHook from './ReduceHook';
import ContextHok from './ContextHok';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className={"pak"}>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 450 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Fisrt Hook" {...a11yProps(0)} />
        <Tab label="Use Effect " {...a11yProps(1)} />
        <Tab label="Use REf" {...a11yProps(2)} />
        <Tab label="Fragmnt" {...a11yProps(3)} />
        <Tab label="Memo Hook" {...a11yProps(4)} />
        <Tab label="CallBack Hook" {...a11yProps(5)} />
        <Tab label="Reduce Hook" {...a11yProps(6)} />
        <Tab label="Context Hook" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        First Hook <OneHook/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two <EffectHook/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three <Ref/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Fragment/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Memo/>
      </TabPanel>
      <TabPanel value={value} index={5}>
          <CallBakHok/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven <ReduceHook/>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <ContextHok/>
      </TabPanel>
    </Box>
    </div>
  );
}
