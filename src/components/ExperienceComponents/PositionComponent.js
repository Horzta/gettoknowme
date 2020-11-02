import React from 'react';
import { Grid, Header, List, Segment } from 'semantic-ui-react';

class PositionComponent extends React.Component {
    render () {
        const { position } = this.props;
        return (
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column >
                        <Header size="tiny" content={position.name}/>                        
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <Header size="tiny" color="grey">
                            {position.start} - {position.end}
                        </Header> 
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <List>
                            {position.points.map(point=><List.Item icon="star" content={point}/>)}
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default PositionComponent;