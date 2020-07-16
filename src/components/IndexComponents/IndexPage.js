import React from 'react';
import { Container, Segment, Menu } from 'semantic-ui-react';
import SkillsComponent from '../SkillsComponents/SkillsComponent';
import IndexComponent from './IndexComponent';

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
                    {this.state.active === '' && <Segment content={<IndexComponent/>} />}
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