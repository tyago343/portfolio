import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import PostCreation from "./pages/PostCreation";

const Admin: React.FC = () => {
    return (
        <div>
            <h1>Este es el apartado del administrador</h1>
            <aside>
                <nav>
                    <ul>
                        <li><Link to="/admin/posts/create">Nuevo post</Link></li>
                    </ul>
                </nav>
            </aside>
            <Switch>
                <Route path="/admin/posts/create">
                    <PostCreation />
                </Route>
            </Switch>
        </div>
    )
}
export default Admin