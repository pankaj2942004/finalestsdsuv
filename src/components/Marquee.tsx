import React from 'react';
import '../styles/Marquee.css';

interface MarqueeProps {
  language: 'en' | 'hi';
  onItemClick?: (itemId: string) => void;
}

const Marquee: React.FC<MarqueeProps> = ({ language, onItemClick }) => {
  const items = [
    { id: 'college-affiliation', icon: '🏛️', text: 'College Affiliation', shortText: 'College Affiliation' },
    { id: 'ordinance-curriculum', icon: '📋', text: 'Ordinance & Curriculum', shortText: 'Ordinance' },
    { id: 'scholarship', icon: '🎓', text: 'छात्रवृत्ति', shortText: 'Scholarship' },
    { id: 'convocation-medal', icon: '🏆', text: 'Gold Medal List', shortText: 'Convocation' },
    { id: 'phd-merit', icon: '📝', text: 'Ph.D. Merit List', shortText: 'Ph.D. Merit' },
    { id: 'nirf', icon: '⭐', text: 'NIRF', shortText: 'NIRF' },
    { id: 'academic-calendar', icon: '📅', text: 'Academic Calendar', shortText: 'Calendar' },
    { id: 'helpline', icon: '📞', text: 'Helpline +91', shortText: 'Helpline' },
    { id: 'phd-notification', icon: '🔔', text: 'Ph.D Notification', shortText: 'Ph.D' },
    { id: 'exam-sheet', icon: '📊', text: 'Exam Date Sheet', shortText: 'Exam Sheet' },
    { id: 'convocation', icon: '🎉', text: 'Convocation', shortText: 'Convocation' },
    { id: 'university-film', icon: '🎬', text: 'University Film', shortText: 'Film' },
  ];

  React.useEffect(() => {
    console.log('Marquee component mounted');
  }, []);

  const handleClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {items.map((item) => (
          <div
            key={item.id}
            className="marquee-item"
            onClick={() => handleClick(item.id)}
            title={item.text}
          >
            <span className="marquee-icon">{item.icon}</span>
            <span>{item.shortText}</span>
          </div>
        ))}
        {items.map((item) => (
          <div
            key={`${item.id}-dup`}
            className="marquee-item"
            onClick={() => handleClick(item.id)}
            title={item.text}
          >
            <span className="marquee-icon">{item.icon}</span>
            <span>{item.shortText}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
