import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      id: 'bright-network-2025',
      date: 'July 2025',
      title: 'Bright Network',
      company: 'Software Engineer Intern',
      description: [
        'Built a <b>Java-based bot detection tool</b> that parses server logs using heuristics (e.g., bad user-agent, frequency, missing resources)',
        'Automated detection of ~<b>9%</b> non-human traffic, reducing server load and improving site reliability',
        'Applied <b>Java collections</b>, <b>regex</b>, and <b>time-based filtering</b> for high-throughput log analysis',
      ],
      expanded: false,
    },
    
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(index);
    }
  };

  return (
    <section className="timeline-container" role="region" aria-label="Work Experience Timeline">
      {events.map((event, index) => (
        <article
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={event.id}
          onClick={() => handleItemClick(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          role="button"
          tabIndex={0}
          aria-expanded={event.expanded}
          aria-label={`${event.title} at ${event.company}, ${event.date}. Click to ${event.expanded ? 'collapse' : 'expand'} details.`}
        >
          <div className="timeline-marker" aria-hidden="true"></div>
          <div className={`timeline-content ${event.expanded ? 'expanded' : ''}`}>
            <time className="date" dateTime={event.date}>
              {event.date}
            </time>
            <h3>{event.title}</h3>
            <h4>{event.company}</h4>
            <div className={`description-wrapper ${event.expanded ? 'expanded' : ''}`}>
              <div 
                className="description" 
                role="region" 
                aria-live="polite"
                aria-label="Job description details"
              >
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            </div>
            <span className={`more ${event.expanded ? 'expanded' : ''}`} aria-hidden="true">
              {event.expanded ? 'Show less' : 'Show more'}
            </span>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Timeline;