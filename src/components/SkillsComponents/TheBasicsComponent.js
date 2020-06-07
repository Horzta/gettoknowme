import React from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';


class TheBasicsComponent extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header dividing>
                        <Icon name="html5" fitted/>
                    <Header.Content>
                        HTML
                        <Header.Subheader>
                            <i>(5 Years)</i>
                        </Header.Subheader>
                    </Header.Content>
                </Header>

                <Container text>
                    Lorem upsum
                </Container>
            </React.Fragment>
        );
    }
}

export default TheBasicsComponent;