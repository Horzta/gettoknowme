import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import PositionComponent from './PositionComponent';

class ExperienceComponent extends React.Component {
    render () {
        const { company } = this.props;
        return (
            <Container>
                <Header content={company.name}/>
                {company.positions.map(position=><PositionComponent position={position}/>)}
                <br/><br/>
            </Container>
        );
    }
}

export default ExperienceComponent;