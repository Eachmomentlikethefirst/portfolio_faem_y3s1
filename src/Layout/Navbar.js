
function useLabelData() {
  return [
    {
      label: "Work",
      href: "/",
      target: false,
    },
    {
      label: "Information",
      target: false,
      href: "information"
    },
    {
      label: "Contact",
      target: true,
      href: "https://www.instagram.com/neotype__"
    },
  ]
}

function NavBar(props) {
  const {  selected = 0} = props;
  const data = useLabelData();

  return (
    <div class="flex flex-col w-56 bg-white ">
      <div class="flex items-center justify-center h-20">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="70px" height="70px" viewBox="0 0 2048.000000 2048.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,2048.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M16268 20061 c-5 -18 -8 -56 -8 -83 0 -149 -51 -510 -106 -748 -171
        -737 -531 -1361 -1099 -1900 -654 -622 -1515 -977 -2491 -1028 l-139 -8 110
        -7 c868 -62 1529 -310 2159 -811 117 -92 528 -501 666 -661 485 -565 771
        -1202 874 -1951 9 -61 19 -162 22 -225 9 -138 22 -195 23 -99 3 239 86 666
        183 950 145 419 394 845 697 1190 95 109 630 642 736 734 611 532 1292 810
        2135 873 l105 7 -135 8 c-750 40 -1453 292 -2033 727 -204 153 -540 459 -715
        651 -562 617 -871 1309 -957 2145 -8 83 -16 177 -18 210 -2 53 -3 56 -9 26z"/>
        <path d="M7870 16284 c-437 -29 -677 -55 -990 -109 -1286 -222 -2456 -761
        -3513 -1618 -445 -360 -983 -898 -1344 -1344 -936 -1153 -1498 -2461 -1673
        -3893 -56 -458 -53 -353 -56 -2650 -1 -1169 2 -2080 7 -2025 66 809 323 1477
        793 2065 164 205 547 583 778 769 603 484 1302 754 2103 812 199 14 636 6 834
        -16 800 -88 1493 -369 2055 -833 783 -647 1247 -1492 1376 -2507 45 -352 50
        -767 15 -1090 -89 -826 -402 -1521 -965 -2144 -450 -499 -840 -806 -1305
        -1027 -438 -208 -856 -311 -1445 -357 -25 -2 913 -3 2085 -2 1477 1 2170 5
        2260 13 1042 90 1781 264 2605 614 1098 466 2144 1247 2930 2188 737 883 1265
        1885 1565 2970 132 480 208 925 266 1575 9 94 13 723 14 2260 2 1245 -1 2080
        -6 2010 -36 -502 -150 -977 -335 -1395 -242 -545 -632 -1042 -1121 -1429 -540
        -428 -1184 -690 -1916 -781 -377 -47 -813 -49 -1152 -5 -709 92 -1321 350
        -1870 789 -143 115 -470 421 -600 561 -546 591 -857 1273 -957 2103 -29 241
        -32 733 -5 952 94 759 385 1404 888 1967 106 118 650 655 744 734 515 433
        1064 691 1695 798 100 17 160 24 370 44 43 5 -4067 5 -4130 1z"/>
        </g>
        </svg>
      </div>
      <ul class="flex flex-col py-4">
        {data.map((e, i) => 
          <li key={i}>
            <a href={e?.href} target={e?.target ? "_blank" : ""} class={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ${i === selected ? "text-blue-500" : "text-gray-500"} hover:text-gray-800`}>
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span>
              <span class="text-sm font-medium">{e?.label}</span>
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
export default NavBar;
