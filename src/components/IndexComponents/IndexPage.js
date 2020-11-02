import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import SkillSegment from '../SkillsComponents/SkillSegment';
import IndexComponent from './IndexComponent';

class IndexPage extends React.Component{
    render () {

        return (
            <Container>
                <Segment.Group>
                    <IndexComponent/>
                    <SkillSegment/>
                </Segment.Group>
            </Container>
        );
    }
}

export default IndexPage;