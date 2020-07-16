import React from 'react';
import { Container, Grid, Menu, Dropdown } from 'semantic-ui-react';
import skillsjson from '../../assets/skillsjson.json';
import SkillComponent from './SkillComponent';


const { categories } = skillsjson;


class SkillsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeSkill: categories["frontend"].skills[0] };
    }

    changeCategory = (name) => this.setState({ activeCategory: name });
    clearCategory = () => this.setState({ activeCategory: "" });

    generateSubMenu = (category)  => {
        var skills = categories[category].skills;

        return (
            skills.map((skill, key) => (
                        <Dropdown.Item
                            name={skill.name}
                            text={skill.label}
                            onClick={() => this.setState({activeSkill: categories[category].skills[key]})}
                        />
                    )
                )
        )
    } 

    render () {
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Menu vertical fluid>
                                <Dropdown item text='Frontend'>
                                    <Dropdown.Menu>
                                        {this.generateSubMenu("frontend")}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown item text='Backend'>
                                    <Dropdown.Menu>
                                        {this.generateSubMenu("backend")}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown item text='Dev Tools'>
                                    <Dropdown.Menu>
                                        {this.generateSubMenu("devtools")}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown item text='Soft Skills'>
                                    <Dropdown.Menu>
                                        {this.generateSubMenu("softskills")}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <SkillComponent skill={this.state.activeSkill} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}



export default SkillsComponent;