import feature1 from "./feature1";
import { footer } from "./feature2";

//common js: babel 
import makeButton from './button';
import { makeColorStyle }from './button-style'

import {red} from './button-style'
import button from "./button";

const button1 = makeButton('button1');
button1.style = makeColorStyle("red");
document.body.appendChild(button1);
document.body.appendChild(footer)

// console.log(feature1(), top, bottom, makeButton('button'), redrotroom);