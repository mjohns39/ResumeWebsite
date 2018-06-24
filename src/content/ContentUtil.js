import React from 'react';
import Typography from '@material-ui/core/Typography';



export function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export function ResumeSection(props) {
  return (
    <div>
      <Typography variant="title" component="h3">
        {props.header}
      </Typography>
      <Typography component="p">
        {props.body}
      </Typography>
    </div>
  );
}
