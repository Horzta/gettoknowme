import React from 'react';
import { Container, Image, Header, Segment, Grid, Item, Icon, Menu, } from 'semantic-ui-react';
import  self_portrait  from '../../assets/images/self_portrait.jpg';
import ContactMeComponent from '../GeneralComponents.js/ContactMeComponent';

class IndexComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = { activeItem: "personal" }
    }
    render () {
        const { activeItem } = this.state;

        return (
            <Container>
                <Segment.Group>
                    <Segment className="header-segment" textAlign="center">
                        <Image src={self_portrait} size="medium" verticalAlign="center" centered circular/>
                        <Header className="header-text" size="huge">
                            Horst Erich <span className="header-akira">Akira</span> Hora
                            <Header.Subheader className="header-text">
                                <div>Fullstack Software Developer</div>
                                <div><Icon name="map marker alternate" fitted/>&nbsp;Pasig City, Philippines</div>                                
                            </Header.Subheader>
                        </Header>
                    </Segment>
                    <Segment>
                        <Grid stackable>
                            <Grid.Row>
                                <Grid.Column width="3">
                                    <Menu fluid secondary vertical>
                                        <Menu.Item
                                        name='personal'
                                        active={activeItem === 'personal'}
                                        content="Basic"
                                        onClick={this.handleItemClick}
                                        />
                                        <Menu.Item
                                        name='skill'
                                        active={activeItem === 'settings'}
                                        content="Skills"
                                        onClick={this.handleItemClick}
                                        />
                                        <Menu.Item
                                        name='skill'
                                        active={activeItem === 'settings'}
                                        content="Experience"
                                        onClick={this.handleItemClick}
                                        />
                                    </Menu>
                                </Grid.Column>
                                <Grid.Column width="10">
                                    Hello
                                </Grid.Column>
                                <Grid.Column width="3">
                                    <ContactMeComponent/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Segment.Group>
            </Container>
        );
    }
}

export default IndexComponent;