import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import ExperienceSegment from '../ExperienceComponents/ExperienceSegment';
import SkillSegment from '../SkillsComponents/SkillSegment';
import IndexSegment from './IndexSegment';

class IndexPage extends React.Component{
    render () {

        return (
            <Container>
                <Segment.Group>
                    <IndexSegment/>
                    <SkillSegment/>
                    <ExperienceSegment/>
                </Segment.Group>
            </Container>
        );
    }
}

export default IndexPage;