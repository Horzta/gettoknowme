import React from 'react';
import { Item } from 'semantic-ui-react';

class SubskillComponent extends React.Component {
    render () {
        const { subskill } = this.props;

        return (
            <React.Fragment>
                <Item>
                    <Item.Content>
                        <Item.Header>{ subskill.label }</Item.Header>
                        <Item.Extra>{subskill.start_date}</Item.Extra>
                    </Item.Content>
                </Item>
            </React.Fragment>
        );
    }
}

export default SubskillComponent;