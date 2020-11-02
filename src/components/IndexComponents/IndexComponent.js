import React from 'react';
import { Container, Image, Header, Segment, Grid, Icon } from 'semantic-ui-react';
import  self_portrait  from '../../assets/images/self_portrait.jpg';
import ContactMeComponent from '../GeneralComponents.js/ContactMeComponent';

class IndexComponent extends React.Component{
    render() {
        return (
            <React.Fragment>
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
                            <Grid.Column width="13" textAlign="center">
                                <Header size="huge">
                                    Hey there!
                                    <Header.Subheader>
                                        So you want to know me?
                                    </Header.Subheader>
                                </Header>
                                <Container text>
                                    <p className="about-me-p">
                                        An all around web developer with good knowledge of multiple programming languages. 
                                        I love spending time planning maintainable code and discussing best practices. 
                                        I can work alone and within a team. I can do web design and frontend development 
                                        (this whole thing is actually written in React), but I work best with logic crunching 
                                        backend development.
                                    </p>
                                </Container>
                            </Grid.Column>
                            <Grid.Column width="3">
                                <ContactMeComponent/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </React.Fragment>
        );
    }
}

export default IndexComponent;