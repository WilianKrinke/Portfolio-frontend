/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Adresspanel from '../panels/adressPanel/adressPanel';
import Contactpanel from '../panels/contactPanel/contactPanel';
import Identificationpanel from '../panels/identificationPanel/identificationPanel';
import useMediaQuery from '@mui/material/useMediaQuery';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
          }}
        >
          {children}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function DataTabs({ userDatasObject }) {
  const {
    primeiro_nome,
    segundo_nome,
    data_nascimento,
    userName,
    email,
    endereco_bairro,
    endereco_cidade,
    endereco_numero,
    endereco_logradouro,
    telefone_celular,
    telefone_fixo,
  } = userDatasObject;

  const objectUserIdentification = {
    primeiro_nome,
    segundo_nome,
    data_nascimento,
    userName,
  };

  const objectUserAdress = {
    endereco_bairro,
    endereco_cidade,
    endereco_numero,
    endereco_logradouro,
  };

  const objectUserContact = {
    email,
    telefone_celular,
    telefone_fixo,
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const matches600w = useMediaQuery('(max-width:600px)');
  console.log(matches600w);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: `column`,
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: `${matches600w ? 'transparent' : 'divider'}` }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          sx={{ width: `${matches600w ? '360px' : '100%'}` }}
        >
          <Tab
            label="Identification"
            {...a11yProps(0)}
            sx={{
              fontSize: `${matches600w ? '10px' : '16px'}`,
              width: `${matches600w ? '20px' : '180px'}`,
              wordBreak: `${matches600w ? 'break-word' : 'normal'}`,
            }}
          />
          <Tab
            label="Address"
            {...a11yProps(1)}
            sx={{
              fontSize: `${matches600w ? '10px' : '16px'}`,
              width: `${matches600w ? '20px' : '180px'}`,
              wordBreak: `${matches600w ? 'break-word' : 'normal'}`,
            }}
          />
          <Tab
            label="Contact"
            {...a11yProps(2)}
            sx={{
              fontSize: `${matches600w ? '10px' : '16px'}`,
              width: `${matches600w ? '20px' : '180px'}`,
              wordBreak: `${matches600w ? 'break-word' : 'normal'}`,
            }}
          />
          <Tab
            label="Show All Data"
            {...a11yProps(3)}
            sx={{
              fontSize: `${matches600w ? '10px' : '16px'}`,
              width: `${matches600w ? '20px' : '180px'}`,
              wordBreak: `${matches600w ? 'break-word' : 'normal'}`,
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Identificationpanel objectUserIdentification={objectUserIdentification} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Adresspanel objectUserAdress={objectUserAdress} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contactpanel objectUserContact={objectUserContact} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/*  */}
      </TabPanel>
    </Box>
  );
}

DataTabs.propTypes = {
  userDatasObject: PropTypes.object.isRequired,
};

export default React.memo(DataTabs);
