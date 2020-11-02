import React from 'react';
import { Header, Item, Icon } from 'semantic-ui-react';


class ContactMeComponent extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header size="medium">Want to Hire me?
                    <Header.Subheader>You can contact me thru:</Header.Subheader>
                </Header>
                <Item.Group divided>
                    <Item>
                        <Item.Content verticalAlign='middle' textAlign="center">
                            <Icon name="phone"/> (+63) 908 412 4566
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Content verticalAlign='middle' textAlign="center">
                            <Icon name="google"/> <a href="mailto:horzta@gmail.com">horzta@gmail.com</a>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Content verticalAlign='middle' textAlign="center">
                            <Icon name="yahoo"/> <a href="mailto:heahora@yahoo.com">heahora@yahoo.com</a>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Content verticalAlign='middle' textAlign="center">
                            <Icon name="linkedin"/>
                            <a href="https://www.linkedin.com/in/akira-hora-619525ba/" target="_blankk">LinkedIn</a>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Content verticalAlign='middle' textAlign="center">
                            <Icon name="facebook"/>
                            <a href="https://www.facebook.com/horztashi.sensei" target="_blankk">Facebook</a>
                        </Item.Content>
                    </Item>
                </Item.Group>                
            </React.Fragment>
        );
    }
}

export default ContactMeComponent;