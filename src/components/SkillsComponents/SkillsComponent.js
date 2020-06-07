import React from 'react';
import { Container, Segment, Tab, Header, Button, Grid, Icon } from 'semantic-ui-react';
import skillsjson from '../../assets/skillsjson.json';
import SkillComponent from './SkillComponent';


const { categories } = skillsjson;


class SkillsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeCategory: "" };
    }

    changeCategory = (name) => this.setState({ activeCategory: name });
    clearCategory = () => this.setState({ activeCategory: "" });

    panesGenerator = () => {
        var panes = [];
        var skills = categories[this.state.activeCategory].skills;

        skills.forEach(skill => {
            panes.push({
                menuItem: skill.label,
                render: () => <Tab.Pane attached={false}><SkillComponent skill={skill}/></Tab.Pane>,
            });
        });
        
        return panes;
    }

    render () {
        return (
            <Container>
                {
                    this.state.activeCategory === "" &&
                    <Grid columns={2} stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Button
                                    onClick={()=>this.changeCategory("frontend")}
                                    color="blue"
                                    fluid style={{'height':'150px'}}
                                >
                                    Frontend</
                                Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button
                                    onClick={()=>this.changeCategory("frontend")}
                                    color="red"
                                    fluid style={{'height':'150px'}}
                                >
                                    Backend</
                                Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button
                                    onClick={()=>this.changeCategory("devtools")}
                                    color="yellow"
                                    fluid style={{'height':'150px'}}
                                >
                                    Dev Tools
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button
                                    onClick={()=>this.changeCategory("softskills")}
                                    color="grey"
                                    fluid style={{'height':'150px'}}
                                >
                                    Soft Skills
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                }
                {
                    this.state.activeCategory !== "" &&
                    <Segment.Group>
                        <Segment>
                            <Grid columns={2}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header>
                                            {categories[this.state.activeCategory].label}
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column textAlign="right">
                                            <Icon
                                                name="close"
                                                style={{'cursor': 'pointer'}}
                                                onClick={this.clearCategory}
                                                />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                        <Segment>
                            <Tab
                                menu={
                                    {
                                        secondary: true,
                                        pointing: true,
                                        stackable: true,
                                        widths: categories[this.state.activeCategory].skills.length
                                    }
                                }
                                panes={this.panesGenerator()}
                            />
                        </Segment>
                    </Segment.Group>
                }
            </Container>
        );
    }
}



export default SkillsComponent;