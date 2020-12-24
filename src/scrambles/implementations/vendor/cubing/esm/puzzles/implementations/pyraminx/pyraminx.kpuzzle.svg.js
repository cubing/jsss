// src/cubing/puzzles/implementations/pyraminx/pyraminx.kpuzzle.svg.ts
var pyraminx_kpuzzle_svg_default = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 506 440" preserveAspectRatio="xMidYMid meet">
  <defs>
  </defs>
  <title>pyraminx</title>
  <defs>
    <g id="stickerA" transform="scale(1, 0.577350269)">
      <path
         d="m 0,1.732050808 1,-1.732050808 1,1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
    <g id="stickerV" transform="scale(1, 0.577350269)">
      <path
         d="m 0,0 1,1.732050808 1,-1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
  </defs>

<!--        0 1 2 3 4 5 6 7 8 9 10   -->
<!--        | | | | | | | | | | |    -->
<!--    0 - L L L L L F R R R R R    -->
<!--    1 -   L L L F F F R R R      -->
<!--    2 -     L F F F F F R        -->
<!--    3 -       D D D D D          -->
<!--    4 -         D D D            -->
<!--    5 -           D              -->

  <g id="puzzle" transform="translate(5, 5) scale(40, 69.28203232)">
    <!-- CENTERS -->
    <use id="CENTERS-l0-o0" xlink:href="#stickerV" transform="translate(5.2, 1.066666667)" style="fill: limegreen"/>
    <use id="CENTERS-l0-o1" xlink:href="#stickerA" transform="translate(3, 0)" style="fill: red"/>
    <use id="CENTERS-l0-o2" xlink:href="#stickerA" transform="translate(7.4, 0)" style="fill: blue"/>

    <use id="CENTERS-l1-o0" xlink:href="#stickerV" transform="translate(4.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CENTERS-l1-o1" xlink:href="#stickerA" transform="translate(4.2, 3.2)" style="fill: yellow"/>
    <use id="CENTERS-l1-o2" xlink:href="#stickerA" transform="translate(2, 1)" style="fill: red"/>

    <use id="CENTERS-l2-o0" xlink:href="#stickerV" transform="translate(6.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" xlink:href="#stickerA" transform="translate(8.4, 1)" style="fill: blue"/>
    <use id="CENTERS-l2-o2" xlink:href="#stickerA" transform="translate(6.2, 3.2)" style="fill: yellow"/>

    <use id="CENTERS-l3-o0" xlink:href="#stickerA" transform="translate(9.4, 0)" style="fill: blue"/>
    <use id="CENTERS-l3-o1" xlink:href="#stickerA" transform="translate(1, 0)" style="fill: red"/>
    <use id="CENTERS-l3-o2" xlink:href="#stickerA" transform="translate(5.2, 4.2)" style="fill: yellow"/>

    <!-- TIPS -->
    <use id="TIPS-l0-o0" xlink:href="#stickerA" transform="translate(5.2, 0.066666667)" style="fill: limegreen"/>
    <use id="TIPS-l0-o1" xlink:href="#stickerV" transform="translate(4, 0)" style="fill: red"/>
    <use id="TIPS-l0-o2" xlink:href="#stickerV" transform="translate(6.4, 0)" style="fill: blue"/>

    <use id="TIPS-l1-o0" xlink:href="#stickerA" transform="translate(3.2, 2.066666667)" style="fill: limegreen"/>
    <use id="TIPS-l1-o1" xlink:href="#stickerV" transform="translate(3.2, 3.2)" style="fill: yellow"/>
    <use id="TIPS-l1-o2" xlink:href="#stickerV" transform="translate(2, 2)" style="fill: red"/>

    <use id="TIPS-l2-o0" xlink:href="#stickerV" transform="translate(8.4, 2)" style="fill: blue"/>
    <use id="TIPS-l2-o1" xlink:href="#stickerV" transform="translate(7.2, 3.2)" style="fill: yellow"/>
    <use id="TIPS-l2-o2" xlink:href="#stickerA" transform="translate(7.2, 2.066666667)" style="fill: limegreen"/>

    <use id="TIPS-l3-o0" xlink:href="#stickerV" transform="translate(10.4,0)" style="fill: blue"/>
    <use id="TIPS-l3-o1" xlink:href="#stickerV" transform="translate(0, 0)" style="fill: red"/>
    <use id="TIPS-l3-o2" xlink:href="#stickerV" transform="translate(5.2, 5.2)" style="fill: yellow"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0" xlink:href="#stickerA" transform="translate(4.2, 1.066666667)" style="fill: limegreen"/>
    <use id="EDGES-l0-o1" xlink:href="#stickerV" transform="translate(3, 1)" style="fill: red"/>

    <use id="EDGES-l1-o0" xlink:href="#stickerA" transform="translate(6.2, 1.066666667)" style="fill: limegreen"/>
    <use id="EDGES-l1-o1" xlink:href="#stickerV" transform="translate(7.4, 1)" style="fill: blue"/>

    <use id="EDGES-l2-o0" xlink:href="#stickerV" transform="translate(8.4, 0)" style="fill: blue"/>
    <use id="EDGES-l2-o1" xlink:href="#stickerV" transform="translate(2, 0)" style="fill: red"/>

    <use id="EDGES-l3-o0" xlink:href="#stickerV" transform="translate(5.2, 3.2)" style="fill: yellow"/>
    <use id="EDGES-l3-o1" xlink:href="#stickerA" transform="translate(5.2, 2.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l4-o0" xlink:href="#stickerV" transform="translate(6.2, 4.2)" style="fill: yellow"/>
    <use id="EDGES-l4-o1" xlink:href="#stickerV" transform="translate(9.4, 1)" style="fill: blue"/>

    <use id="EDGES-l5-o0" xlink:href="#stickerV" transform="translate(4.2, 4.2)" style="fill: yellow"/>
    <use id="EDGES-l5-o1" xlink:href="#stickerV" transform="translate(1, 1)" style="fill: red"/>
  </g>

</svg>`;
export {
  pyraminx_kpuzzle_svg_default as default
};
//# sourceMappingURL=pyraminx.kpuzzle.svg.js.map
