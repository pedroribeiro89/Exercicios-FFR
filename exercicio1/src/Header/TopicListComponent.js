import React from "react";

export const TopicListComponent = (props) => (
    <ul>
        {props.topics.map(topic => <li>Topic {topic}</li>)}
    </ul>
);