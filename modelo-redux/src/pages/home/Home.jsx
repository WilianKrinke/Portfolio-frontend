import React from 'react';
import Header from "../../components/header_component/Header"

import Datas from "../../components/datas_component/Datas"

const Home = () => {
    return (
        <>
            <Header title={"Home Page"}/>
            <main>
                <Datas />
            </main>
        </>
    );
}

export default Home;
