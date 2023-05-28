import { CSSProperties } from "react";
import "./Timeline.scss";
import themes from "./timelineColors";

interface TimelineType {
  year: string;
  label: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const TimelineItem = ({
  year,
  title,
  description,
  icon,
  label,
  color,
}: TimelineType) => (
  <div
    className='timeline-item'
    style={{ "--item-bg": color } as CSSProperties}
  >
    <div className='timeline-item_tag'>
      <img src={`/assets/images/timeline/${icon}.png`} alt='' />
      <p>{year}</p>
      <span>{label}</span>
    </div>
    <div className='timeline-item_core'></div>
    <div className='timeline-item_info'>
      <p>{title}</p>
      <span>{description}</span>
    </div>
  </div>
);

const Timeline = ({
  data,
  theme = "standard",
}: {
  data: Omit<TimelineType, "color">[];
  theme?: string;
}) => {
  return (
    <div className='timeline'>
      {data.map((item, index) => (
        <TimelineItem
          {...item}
          color={themes[theme as keyof typeof themes][index]}
        />
      ))}
    </div>
  );
};

export default Timeline;
