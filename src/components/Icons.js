import React from 'react';
import { ReactComponent as GithubIcon } from './icons/github.svg';
import { ReactComponent as LinkInIcon } from './icons/linkedin.svg';
import { ReactComponent as StackIcon } from './icons/stackoverflow.svg';

export default function Icons() {
    return (
        <div className="icon-container">
            <a href ="https://github.com/PrimitiveJ" className="icon">
            <GithubIcon width="25rem" height="25rem" justifyContent="center" alignItems="center"/>
            </a>
            <a href ="https://www.linkedin.com/in/christopher-hoke-0bb69622b" className="icon">
            <LinkInIcon width="25rem" height="25rem" justifyContent="center" alignItems="center"/>
            </a>
            <a href ="https://stackoverflow.com/users/18006559/cj-hoke" className="icon">
            <StackIcon width="20rem" height="20rem" justifyContent="right" alignItems="right"/>
            </a>
            </div>
    )
};

