import React from 'react';
import { Header, Image, Container, Item } from 'semantic-ui-react';

class SubskillComponent extends React.Component {
    render () {
        const { subskill } = this.props;

        return (
            <React.Fragment>
                <Item>
                    <Item.Content>
                        <Item.Header>{ subskill.label }</Item.Header>
                        <Item.Extra>{subskill.start_date}</Item.Extra>
                        <Item.Description>
                            {subskill.description}
                        </Item.Description>
                    </Item.Content>
                </Item>
            </React.Fragment>
        );
    }
}

export default SubskillComponent;