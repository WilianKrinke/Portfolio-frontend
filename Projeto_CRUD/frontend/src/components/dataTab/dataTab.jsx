import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useSelector } from 'react-redux';
import translate from '../../i18n/translate';
import Adresspanel from '../panels/adressPanel/adressPanel';
import Contactpanel from '../panels/contactPanel/contactPanel';
import Identificationpanel from '../panels/identificationPanel/identificationPanel';
import Showingdatapanel from '../panels/showingData/showingDataPanel';
function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{ minHeight: '280px' }}
        >
            {value === index && (
                <Box
                    sx={{
                        p: 3,
                        width: '100%',
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
        idade,
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
        idade,
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

    const matches840w = useMediaQuery('(max-width:840px)');
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: `column`,
                border: `${matches840w ? 'transparent' : 'divider'}`,
            }}
        >
            <Box sx={{ borderBottom: 1, borderColor: `${matches840w ? 'transparent' : 'divider'}` }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                    sx={{ width: `${matches840w ? '360px' : '100%'}` }}
                >
                    <Tab
                        label={translate('showdatas')}
                        {...a11yProps(0)}
                        sx={{
                            fontSize: `${matches840w ? '11px' : '14px'}`,
                            color: `${darkMode ? '#F9FFF9' : '#0a0a0a'}`,
                            width: `${matches840w ? '20px' : '180px'}`,
                            wordBreak: `${matches840w ? 'break-word' : 'normal'}`,
                        }}
                    />
                    <Tab
                        label={translate('personal')}
                        {...a11yProps(1)}
                        sx={{
                            fontSize: `${matches840w ? '11px' : '14px'}`,
                            color: `${darkMode ? '#F9FFF9' : '#0a0a0a'}`,
                            width: `${matches840w ? '20px' : '180px'}`,
                            wordBreak: `${matches840w ? 'break-word' : 'normal'}`,
                        }}
                    />
                    <Tab
                        label={translate('adress')}
                        {...a11yProps(2)}
                        sx={{
                            fontSize: `${matches840w ? '11px' : '14px'}`,
                            color: `${darkMode ? '#F9FFF9' : '#0a0a0a'}`,
                            width: `${matches840w ? '20px' : '180px'}`,
                            wordBreak: `${matches840w ? 'break-word' : 'normal'}`,
                        }}
                    />
                    <Tab
                        label={translate('contact')}
                        {...a11yProps(3)}
                        sx={{
                            fontSize: `${matches840w ? '11px' : '14px'}`,
                            color: `${darkMode ? '#F9FFF9' : '#0a0a0a'}`,
                            width: `${matches840w ? '20px' : '180px'}`,
                            wordBreak: `${matches840w ? 'break-word' : 'normal'}`,
                        }}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Showingdatapanel userDatasObject={userDatasObject} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Identificationpanel objectUserIdentification={objectUserIdentification} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Adresspanel objectUserAdress={objectUserAdress} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Contactpanel objectUserContact={objectUserContact} />
            </TabPanel>
        </Box>
    );
}

DataTabs.propTypes = {
    userDatasObject: PropTypes.object.isRequired,
};

export default React.memo(DataTabs);
