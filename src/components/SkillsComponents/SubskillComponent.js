import React from 'react';
import { Grid, Header, Item } from 'semantic-ui-react';
import { hydrateSubskillDuration, formatDuration } from '../../helpers/SkillHelper';

class SubskillComponent extends React.Component {
    render () {
        const subskill = hydrateSubskillDuration(this.props.subskill);
        return (
            <Item>
                <Item.Content>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Header size="tiny">{ subskill.label }</Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header size="tiny" color="grey" textAlign="right">
                                    {formatDuration(subskill.duration)}
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Item.Content>
            </Item>
        );
    }
}

export default SubskillComponent;