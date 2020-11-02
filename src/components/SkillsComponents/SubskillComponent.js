import moment from 'moment';
import React from 'react';
import { Grid, Header, Item } from 'semantic-ui-react';

class SubskillComponent extends React.Component {
    render () {
        const { subskill } = this.props;

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
                                    {moment(subskill.start_date,"MM/DD/YYYY").fromNow().replace("ago"," exp").replace("a ", "1 ")}
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