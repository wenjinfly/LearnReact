import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import Admin from './admin'
import Login from "./pages/login/login"

import Buttons from "./pages/ui/buttons"
import Modals from "./pages/ui/modals"
import NoMatch from "./pages/nomatch"
import Loading from "./pages/ui/loading"
import Notice from "./pages/ui/notice"
import Messages from "./pages/ui/messages"
import Tabss from "./pages/ui/tabs"
import Gallerys from "./pages/ui/gallery"
import Carousels from "./pages/ui/carousel"
import FormLogin from "./pages/form/login"
import Registers from "./pages/form/register"
import BasicTable from "./pages/table/basicTable"
import HighTable from "./pages/table/highTable"

export default class IRouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons}></Route>
                            <Route path="/admin/ui/modals" component={Modals}></Route>
                            <Route path="/admin/ui/loading" component={Loading}></Route>
                            <Route path="/admin/ui/notification" component={Notice}></Route>
                            <Route path="/admin/ui/messages" component={Messages}></Route>
                            <Route path="/admin/ui/tabs" component={Tabss}></Route>
                            <Route path="/admin/ui/gallery" component={Gallerys}></Route>
                            <Route path="/admin/ui/carousel" component={Carousels}></Route>
                            <Route path="/admin/form/login" component={FormLogin}></Route>
                            <Route path="/admin/form/reg" component={Registers}></Route>
                            <Route path="/admin/table/basic" component={BasicTable}></Route>
                            <Route path="/admin/table/high" component={HighTable}></Route>
                            <Route component={NoMatch}></Route>
                        </Admin>

                    }></Route>
                </App>
            </HashRouter>
        );
    }
}