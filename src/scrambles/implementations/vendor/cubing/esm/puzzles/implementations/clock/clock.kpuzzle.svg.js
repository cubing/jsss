// src/cubing/puzzles/implementations/clock/clock.kpuzzle.svg.ts
var clock_kpuzzle_svg_default = `<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 240" preserveAspectRatio="xMidYMid meet">
  <title>clock</title>
  <defs>
    <g id="hand" transform="translate(-20, -20)">
      <path d="M19.9995197,2.22079449 L23.8791657,19.0203611 C23.9580836,19.3338406 24,19.6620253 24,20 C24,22.209139 22.209139,24 20,24 C17.790861,24 16,22.209139 16,20 C16,19.6620253 16.0419164,19.3338406 16.1208343,19.0203611 L19.9995197,2.22079449 Z"></path>
    </g>
    <g id="cardinal_hours" style="fill: #FFFFFF">
      <circle cx="0" cy="24" r="2"></circle>
      <circle cx="-24" cy="0" r="2"></circle>
      <circle cx="24" cy="0" r="2"></circle>
      <circle cx="0" cy="-24" r="2"></circle>
    </g>
    <g id="face_hours">
      <g>
        <use xlink:href="#cardinal_hours"/>
      </g>
      <g transform="rotate(30)">
        <use xlink:href="#cardinal_hours"/>
      </g>
      <g  transform="rotate(60)">
        <use xlink:href="#cardinal_hours"/>
      </g>
    </g>
    <g id="pegs" stroke="#000000" style="fill: #FFD000">
      <circle id="PEG4" cx="90" cy="90" r="10"></circle>
      <circle id="PEG3" cx="30" cy="90" r="10"></circle>
      <circle id="PEG2" cx="90" cy="30" r="10"></circle>
      <circle id="PEG1" cx="30" cy="30" r="10"></circle>
    </g>
    <g id="frame" transform="translate(-24, -24)">
      <path stroke="#000000" d="M120,20 C137.495665,20 153.941932,24.4930026 168.247913,32.3881183 C171.855881,30.8514056 175.828512,30 180,30 C196.568542,30 210,43.4314575 210,60 C210,64.1714878 209.148594,68.1441192 207.610077,71.7536009 C215.506997,86.0580678 220,102.504335 220,120 C220,137.495665 215.506997,153.941932 207.611882,168.247913 C209.148594,171.855881 210,175.828512 210,180 C210,196.568542 196.568542,210 180,210 C175.828512,210 171.855881,209.148594 168.246399,207.610077 C153.941932,215.506997 137.495665,220 120,220 C102.504335,220 86.0580678,215.506997 71.7520869,207.611882 C68.1441192,209.148594 64.1714878,210 60,210 C43.4314575,210 30,196.568542 30,180 C30,175.828512 30.8514056,171.855881 32.3899234,168.246399 C24.4930026,153.941932 20,137.495665 20,120 C20,102.504335 24.4930026,86.0580678 32.3881183,71.7520869 C30.8514056,68.1441192 30,64.1714878 30,60 C30,43.4314575 43.4314575,30 60,30 C64.1714878,30 68.1441192,30.8514056 71.7536009,32.3899234 C86.0580678,24.4930026 102.504335,20 120,20 Z"></path>
    </g>
  </defs>
  <g>
    <g transform="translate(24, 24)">
      <use xlink:href="#frame" id="FRAME-l0-o0" style="fill: #0C5093"/>
      <use xlink:href="#pegs" transform="translate(36, 36)"/>
      <g transform="translate(36, 36)">
        <circle id="FACES-l0-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l0-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l0-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l0-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l0-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l0-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l0-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l0-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l0-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l0-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l0-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l0-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l0-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l1-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l1-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l1-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l1-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l1-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l1-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l1-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l1-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l1-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l1-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l1-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l1-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l1-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l2-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l2-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l2-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l2-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l2-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l2-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l2-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l2-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l2-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l2-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l2-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l2-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l2-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l3-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l3-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l3-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l3-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l3-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l3-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l3-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l3-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l3-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l3-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l3-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l3-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l3-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l4-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l4-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l4-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l4-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l4-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l4-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l4-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l4-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l4-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l4-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l4-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l4-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l4-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l5-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l5-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l5-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l5-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l5-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l5-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l5-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l5-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l5-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l5-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l5-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l5-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l5-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l6-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l6-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l6-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l6-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l6-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l6-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l6-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l6-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l6-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l6-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l6-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l6-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l6-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l7-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l7-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l7-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l7-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l7-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l7-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l7-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l7-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l7-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l7-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l7-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l7-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l7-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l8-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l8-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l8-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l8-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l8-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l8-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l8-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l8-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l8-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l8-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l8-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l8-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l8-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
    <g transform="translate(264, 24)">
      <use xlink:href="#frame" id="FRAME-l0-o1" style="fill: #90B8DF"/>
      <use xlink:href="#pegs" transform="translate(36, 36)"/>
      <g transform="translate(36, 36)">
        <circle id="FACES-l9-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l9-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l9-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l9-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l9-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l9-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l9-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l9-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l9-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l9-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l9-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l9-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l9-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l10-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l10-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l10-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l10-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l10-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l10-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l10-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l10-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l10-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l10-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l10-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l10-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l10-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l11-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l11-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l11-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l11-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l11-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l11-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l11-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l11-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l11-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l11-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l11-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l11-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l11-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l12-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l12-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l12-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l12-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l12-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l12-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l12-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l12-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l12-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l12-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l12-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l12-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l12-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l13-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l13-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l13-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l13-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l13-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l13-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l13-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l13-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l13-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l13-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l13-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l13-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l13-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l14-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l14-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l14-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l14-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l14-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l14-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l14-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l14-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l14-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l14-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l14-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l14-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l14-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l15-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l15-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l15-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l15-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l15-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l15-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l15-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l15-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l15-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l15-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l15-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l15-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l15-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l16-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l16-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l16-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l16-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l16-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l16-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l16-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l16-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l16-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l16-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l16-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l16-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l16-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l17-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l17-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l17-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l17-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l17-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l17-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l17-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l17-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l17-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l17-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l17-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l17-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l17-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
  </g>
</svg>`;
export {
  clock_kpuzzle_svg_default as default
};
//# sourceMappingURL=clock.kpuzzle.svg.js.map
