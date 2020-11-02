import React from 'react';
import { Segment, Item, Header } from 'semantic-ui-react';
import skillsjson from '../../assets/skillsjson.json';
import CategoryComponent from './CategoryComponent';


const { categories } = skillsjson;


class SkillSegment extends React.Component {
    render () {
        return (
            <Segment>
                <Header size="large">Skills</Header>
                <Item.Group>
                    <CategoryComponent category={categories.frontend} />
                    <CategoryComponent category={categories.backend} />
                    <CategoryComponent category={categories.devtools} />
                    <CategoryComponent category={categories.softskills} />
                </Item.Group>
            </Segment>
        );
    }
}



export default SkillSegment;