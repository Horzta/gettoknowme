import experiencesjson from '../assets/experiencesjson.json';

const { companies } = experiencesjson;

export function hydrateSubskillDuration(subskill) {
    let duration = {
            'years'  : 0,
            'months' : 0,
            'days'   : 0
        };
    
    // Get the total number of days
    for (let company_index of subskill.applied) {
        for (let position of companies[company_index].positions) {
            let start_date = new Date(position.start);
            let end_date   = position.end === "present" ? new Date() : new Date(position.end);
            let time_diff  = end_date.getTime() - start_date.getTime();        
            let day_diff   = time_diff / (1000 * 3600 * 24);
    
            duration.days = day_diff + duration.days;    
        }
    }
    
    // Get the years
    while (duration.days >= 365) {
        duration.days = duration.days - 365;
        duration.years = duration.years + 1;
    }

    // Get the months
    while (duration.days >= 30) {
        duration.days = duration.days - 30;
        duration.months = duration.months + 1;
    }

    subskill.duration = duration;
    return subskill;
}


export function formatDuration(duration) {
    let formattedDuration = [];

    if (duration.years === 1) formattedDuration.push(duration.years + " year");
    if (duration.years > 1) formattedDuration.push(duration.years + " years");

    if (duration.months === 1) formattedDuration.push(duration.months + " month");
    if (duration.months > 1) formattedDuration.push(duration.months + " months");

    if (duration.years === 0 && duration.months === 0) {
        if(duration.days === 1) formattedDuration.push(duration.days + " day");
        if(duration.days > 1) formattedDuration.push(duration.days + " day(s)");
    }

    return formattedDuration.join(", ")
}