import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      id: 'mosaic-ai-2025',
      date: 'July 2025',
      title: 'Mosaic AI',
      company: 'Software Engineer Intern',
      description: [
        'Built a matchmaking system that paired 1,000+ user profiles using cosine similarity on Pinecone embeddings, tested at scale with thousands of match attempts.',
        'Used AWS S3 to store chat-derived personality traits and integrated Cognito (via Amplify) for secure user authentication and profile management.',
        'Integrated Nakama for real-time chatting and developed the batch matchmaking service with a greedy algorithm and similarity thresholds to pair thousands of users reliably.',
        'Shifted authentication to Next.js middleware, removing loading screens and cutting navigation latency by 90%.'
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