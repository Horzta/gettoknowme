import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import experiencesjson from '../../assets/experiencesjson.json';
import ExperienceComponent from './ExperienceComponent';


const { companies } = experiencesjson;

class ExperienceSegment extends React.Component {
    render () {
        return (
                <Segment>
                    <Header size="large">Experience</Header>
                    {companies.reverse().map(company=><ExperienceComponent company={company}/>)}
                </Segment>
        );
    }
}

export default ExperienceSegment;