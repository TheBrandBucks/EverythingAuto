declare module 'react-vertical-timeline-component' {
  import * as React from 'react';

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: '1-column' | '2-columns';
    children?: React.ReactNode;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;

export interface VerticalTimelineElementProps {
  className?: string;
  contentStyle?: React.CSSProperties;
  contentArrowStyle?: React.CSSProperties;
  date?: string | React.ReactNode;
  iconStyle?: React.CSSProperties;
  icon?: React.ReactNode;
  children?: React.ReactNode; 
}

  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
