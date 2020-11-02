import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import SkillSegment from '../SkillsComponents/SkillSegment';
import IndexSegment from './IndexSegment';

class IndexPage extends React.Component{
    render () {

        return (
            <Container>
                <Segment.Group>
                    <IndexSegment/>
                    <SkillSegment/>
                </Segment.Group>
            </Container>
        );
    }
}

export default IndexPage;