import React from 'react';
import Header from "../../components/header_component/Header"
import HistoryButton from "../../components/history_button_component/History_button"
import Datas from "../../components/datas_component/Datas"
import DocComponent from '../../components/doc_component/Doc_component';

const Home = () => {
    return (
        <>
            <Header title={"Home Page"}/>
            <HistoryButton path={"/page2"} btnTitle={"Page 2"}/>
            <main>
                <Datas />
                <br />
                <hr />
                <br />
                <DocComponent />
            </main>
        </>
    );
}

export default Home;
