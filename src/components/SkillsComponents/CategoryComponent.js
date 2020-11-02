import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import SkillComponent from './SkillComponent';

class CategoryComponent extends React.Component {

    render() {
        const { category } = this.props;

        return (
            <React.Fragment>
                <Header size="medium" content={category.label}/>
                <Grid divided>
                    <Grid.Row columns={3}>
                        {category.skills.map(skill => <Grid.Column><SkillComponent skill={skill}/></Grid.Column>)}
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        );
    }
}

export default CategoryComponent;