import * as React from 'react';
import { withRouter } from 'react-router-dom';
import renderRoutes from 'core/ui/renderRoutes';

interface IAppProps extends React.ClassAttributes<any> {
    route: any;
}

class App extends React.Component<IAppProps, any> {

    public render() {
        const { route: { routes } } = this.props;
        return (
            <div>
                { renderRoutes(routes) }
            </div>
        );
    }
}

export default withRouter(App);
