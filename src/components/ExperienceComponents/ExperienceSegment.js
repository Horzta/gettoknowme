import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import experiencesjson from '../../assets/experiencesjson.json';
import ExperienceComponent from './ExperienceComponent';


const { companies } = experiencesjson;

class ExperienceSegment extends React.Component {
    render () {
        console.log(companies);
        return (
                <Segment>
                    <Header size="large">Experience</Header>
                    {companies.map(company=><ExperienceComponent company={company}/>)}
                </Segment>
        );
    }
}

export default ExperienceSegment;