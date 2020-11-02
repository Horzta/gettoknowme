import React from 'react';
import SubskillComponent from './SubskillComponent';
import { Item } from 'semantic-ui-react';

class SkillComponent extends React.Component {

    render () {
        const { skill } = this.props;

        return (
            <React.Fragment>
                <Item.Group>
                    { skill.subskills.map(subskill =>  <SubskillComponent subskill={subskill} />) }
                </Item.Group>
            </React.Fragment>
        );
    }
}

export default SkillComponent;