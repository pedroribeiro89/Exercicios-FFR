import React from "react";

const array = [];
for (let i = 0; i < 15; ++i) {
    array.push(i+1);
}

export const SidebarComponent = () => (
    <aside>
        <ul>
            {array.map(item => <li>Section {item}</li>)}
        </ul>
    </aside>
);