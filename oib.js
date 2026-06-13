/* =====================================================================
   ORDERED ITEM BOOKLET (OIB)  —  item data for the workshop
   ---------------------------------------------------------------------
   This file is the source of truth for the items panelists review and
   bookmark. Items must be listed in OIB order (easiest first).

   Each entry:
   {
     pos:        1,                       // OIB position (1..N), order = difficulty
     page:       5,                       // page reference in the booklet
     scale:      405,                     // scale / RP location (e.g., RP67 value)
     strand:     "Number & Algebra",      // content standard / strand
     scorePoint: "1/1",                   // score point shown (NOT the answer key).
                                          //   dichotomous: "1/1"
                                          //   polytomous:  "SP1 of 2", "SP2 of 2"
     itemType:   "MC",                    // MC, CR, TEI, ...
     pval:       0.88,                    // difficulty statistic (p-value or measure)
     brief:      "one more than a number",// short label for the booklet row
     display: { ... }                     // how to present the item (3 modes below)
   }

   DISPLAY MODES — handles the three situations you described:

   1) JSON (we can render it in-system)
      display:{ mode:"json", stem:"...", options:["A...","B...","C...","D..."] }
      (Options are shown WITHOUT marking the key.)

   2) IMAGE / screenshot
      display:{ mode:"image", src:"images/item03.png", alt:"Item 3 screenshot" }
      Put screenshots in an "images" folder next to this file. If the file is
      missing, the app shows a graceful placeholder.

   3) HIDDEN (cannot be presented in our system — secure materials)
      display:{ mode:"hidden", note:"Refer to the printed secure OIB." }
   ===================================================================== */

window.OIB_ITEMS = [
  { pos:1,  page:5,  scale:405, strand:"Number & Algebra",        scorePoint:"1/1",     itemType:"MC", pval:0.91, brief:"one more than 47",
    display:{ mode:"json", stem:"Which number is one more than 47?", options:["46","48","57","37"] } },

  { pos:2,  page:6,  scale:418, strand:"Number & Algebra",        scorePoint:"1/1",     itemType:"MC", pval:0.87, brief:"count in 2s",
    display:{ mode:"json", stem:"Continue the pattern: 2, 4, 6, 8, ___", options:["9","10","11","12"] } },

  { pos:3,  page:7,  scale:430, strand:"Geometry & Measurement",  scorePoint:"1/1",     itemType:"MC", pval:0.83, brief:"name the 2-D shape",
    display:{ mode:"image", src:"images/item03.png", alt:"Screenshot of a shape-identification item" } },

  { pos:4,  page:8,  scale:441, strand:"Number & Algebra",        scorePoint:"1/1",     itemType:"MC", pval:0.79, brief:"add within 20",
    display:{ mode:"json", stem:"What is 13 + 6?", options:["18","19","20","21"] } },

  { pos:5,  page:9,  scale:452, strand:"Statistics",              scorePoint:"1/1",     itemType:"MC", pval:0.75, brief:"read a picture graph",
    display:{ mode:"json", stem:"A picture graph shows favourite fruits. Apples has 5 pictures and bananas has 3 pictures. Each picture stands for 1 child. How many more children chose apples than bananas?", options:["2","3","5","8"] } },

  { pos:6,  page:10, scale:463, strand:"Geometry & Measurement",  scorePoint:"1/1",     itemType:"MC", pval:0.71, brief:"compare lengths",
    display:{ mode:"json", stem:"Three ribbons are 12 cm, 9 cm, and 15 cm. Which is longest?", options:["12 cm","9 cm","15 cm","They are equal"] } },

  { pos:7,  page:11, scale:474, strand:"Number & Algebra",        scorePoint:"SP1 of 2", itemType:"CR", pval:0.66, brief:"sharing problem (partial)",
    display:{ mode:"json", stem:"A teacher shares 24 crayons equally among 4 children. Show how many each child gets and explain your thinking. (Score point 1 of 2: gives the correct number.)" } },

  { pos:8,  page:11, scale:489, strand:"Number & Algebra",        scorePoint:"SP2 of 2", itemType:"CR", pval:0.58, brief:"sharing problem (full)",
    display:{ mode:"json", stem:"Same task as the previous score point. (Score point 2 of 2: correct number AND a clear explanation of the equal-sharing strategy.)" } },

  { pos:9,  page:12, scale:498, strand:"Geometry & Measurement",  scorePoint:"1/1",     itemType:"MC", pval:0.54, brief:"tell time to half hour",
    display:{ mode:"image", src:"images/item09.png", alt:"Screenshot of a clock-reading item" } },

  { pos:10, page:13, scale:510, strand:"Number & Algebra",        scorePoint:"1/1",     itemType:"MC", pval:0.49, brief:"two-step word problem",
    display:{ mode:"json", stem:"Mia has 18 stickers. She gives away 7 and then buys 5 more. How many does she have now?", options:["14","15","16","30"] } },

  { pos:11, page:14, scale:522, strand:"Statistics",              scorePoint:"1/1",     itemType:"TEI", pval:0.44, brief:"sort numbers even/odd",
    display:{ mode:"json", stem:"Sort these numbers into even and odd: 4, 7, 10, 13. Which list shows ONLY the even numbers?", options:["4 and 10","7 and 13","4, 7 and 10","10 and 13"] } },

  { pos:12, page:15, scale:535, strand:"Number & Algebra",        scorePoint:"1/1",     itemType:"MC", pval:0.39, brief:"fractions of a set",
    display:{ mode:"json", stem:"What is one quarter of 12?", options:["2","3","4","6"] } },

  { pos:13, page:16, scale:548, strand:"Geometry & Measurement",  scorePoint:"1/1",     itemType:"CR", pval:0.33, brief:"area by counting squares",
    display:{ mode:"json", stem:"Find the area of the shaded figure by counting unit squares, and explain how you counted the part-squares." } },

  { pos:14, page:17, scale:562, strand:"Number & Algebra",        scorePoint:"1/1",     itemType:"MC", pval:0.27, brief:"missing addend, larger numbers",
    display:{ mode:"json", stem:"Which number makes this true?  38 + ___ = 64", options:["24","26","28","32"] } },

  { pos:15, page:18, scale:579, strand:"Number & Algebra",        scorePoint:"1/1",     itemType:"MC", pval:0.21, brief:"multi-step reasoning",
    display:{ mode:"json", stem:"A pattern grows: 3, 7, 11, 15, ... What is the 7th number in the pattern?", options:["23","25","27","31"] } }
];

/* Demo only: a couple of other panelists' saved answers, so the facilitator
   roll-up has something to aggregate. Real version pulls these from the data store. */
window.OIB_DEMO_RESPONSES = {
  "Avery N.": {
    1: { measures:"Number-after / counting sequence to 50.", harder:"" },
    4: { measures:"Addition fact within 20, no regrouping.", harder:"Larger addends than item 1; requires a number fact, not just counting on." },
    10:{ measures:"Two-step add/subtract in context.", harder:"Holds two operations and a context in mind at once." }
  },
  "Jordan P.": {
    1: { measures:"Knows the count sequence.", harder:"" },
    7: { measures:"Equal sharing / division as grouping.", harder:"Moves from known facts to a partitioning strategy." },
    12:{ measures:"Unit fraction of a discrete set.", harder:"Needs fraction concept layered onto division." }
  }
};
