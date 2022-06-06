import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../screens/Dashboard/Dashboard";
import Bennies from "../screens/Bennies/Bennies";
import Directory from "../screens/Directory/Directory";
import MintAddress from "../screens/MintAddress/MintAddress";

const AppMain = () => {
    return (
        <>
            <Suspense fallback={<span>loading</span>}>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/bennies" component={Bennies} />
                    <Route exact path="/directory" component={Directory} />
                    <Route exact path="/mintaddress" component={MintAddress} />
                </Switch> 
            </Suspense>
        </>
    );
};

export default AppMain;
