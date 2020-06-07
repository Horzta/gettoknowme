import React from 'react';
import { Container, Image, Header, Segment, Grid, Icon, Menu } from 'semantic-ui-react';
import  self_portrait  from '../../assets/images/self_portrait.jpg';
import ContactMeComponent from '../GeneralComponents.js/ContactMeComponent';
import SkillsComponent from '../SkillsComponents/SkillsComponent';

class IndexPage extends React.Component{
    constructor(props){
        super(props);

        this.state = { active: "" };
    }

    handleItemClick = (e, { name }) => this.setState({ active: name });

    render () {

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
                                <Grid.Column width="13" textAlign="center">
                                    <Header size="huge">
                                        Hey there!
                                        <Header.Subheader>
                                            So you want to know me?
                                        </Header.Subheader>
                                    </Header>
                                    <Container text>
                                        <p className="about-me-p">
                                            I'm an all around web developer with good knowledge of multiple programming languages. 
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
                    <Segment>
                    <Menu widths={4} stackable>
                        <Menu.Item
                            name='me'
                            onClick={this.handleItemClick}
                            textAlign="center"
                        >
                            ME
                        </Menu.Item>
                        <Menu.Item
                            name='skills'
                            onClick={this.handleItemClick}
                            textAlign="center"
                        >
                            SKILLS
                        </Menu.Item>
                        <Menu.Item
                            name='experience'
                            onClick={this.handleItemClick}
                            textAlign="center"
                        >
                            EXPERIENCE
                        </Menu.Item>
                        <Menu.Item
                            name='projects'
                            onClick={this.handleItemClick}
                            textAlign="center"
                        >
                            PERSONAL PROJECTS
                        </Menu.Item>
                    </Menu>
                    </Segment>
                    {this.state.active === 'skills' && <Segment content={<SkillsComponent/>} />}
                </Segment.Group>
            </Container>
        );
    }
}

export default IndexPage;