import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
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

  return (
    <section className="timeline-container">
      {events.map((event, index) => (
        <article
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleItemClick(index);
            }
          }}
        >
          <div className="timeline-marker"></div>
          <div className={`timeline-content ${event.expanded ? 'expanded' : ''}`}>
            <span className="date">{event.date}</span>
            <h3>{event.title}</h3>
            <h4>{event.company}</h4>
            {event.expanded && (
              <div className="description">
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            )}
            <span className={`more ${event.expanded ? 'expanded' : ''}`}>
              {event.expanded ? 'Show less' : 'Show more'}
            </span>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Timeline;