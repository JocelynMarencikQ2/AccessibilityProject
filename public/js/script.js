//Hard-Coded JSON Data for the Q2 Website from the WebAIM API, on type 4
const webaimresult = JSON.parse(`
{
    "status": {
      "success": true,
      "httpstatuscode": 200
    },
    "statistics": {
      "pagetitle": "Q2 | Solutions Designed to Transform Financial Experiences",
      "pageurl": "q2.com",
      "time": 3.82,
      "creditsremaining": 60,
      "allitemcount": 109,
      "totalelements": 659,
      "waveurl": "http://wave.webaim.org/report?url=q2.com",
      "domid": "6372ebdfa30f3cc8353623d37217e2e9"
    },
    "categories": {
      "error": {
        "description": "Errors",
        "count": 15,
        "items": {
          "alt_missing": {
            "id": "alt_missing",
            "description": "Missing alternative text",
            "count": 6,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > PICTURE:first-child > IMG:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > IMG:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > IMG:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child + DIV > DIV:first-child + DIV > DIV:first-child > IMG:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child + DIV > DIV:first-child + DIV + DIV > DIV:first-child > IMG:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child + DIV > DIV:first-child + DIV + DIV + DIV > DIV:first-child > IMG:first-child"
            ]
          },
          "label_missing": {
            "id": "label_missing",
            "description": "Missing form label",
            "count": 1,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + INPUT"
            ]
          },
          "button_empty": {
            "id": "button_empty",
            "description": "Empty button",
            "count": 2,
            "selectors": [
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#ot-sdk-btn-floating > DIV:first-child > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#ot-sdk-btn-floating > DIV:first-child + DIV > BUTTON:first-child"
            ]
          },
          "link_empty": {
            "id": "link_empty",
            "description": "Empty link",
            "count": 4,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV > DIV:first-child > UL:first-child > LI:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV > DIV:first-child > UL:first-child > LI:first-child + LI > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV > DIV:first-child > UL:first-child > LI:first-child + LI + LI > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV > DIV:first-child > UL:first-child > LI:first-child + LI + LI + LI > A:first-child"
            ]
          },
          "aria_reference_broken": {
            "id": "aria_reference_broken",
            "description": "Broken ARIA reference",
            "count": 2,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV > DIV:first-child > DIV:first-child"
            ]
          }
        }
      },
      "contrast": {
        "description": "Contrast Errors",
        "count": 6,
        "items": {
          "contrast": {
            "id": "contrast",
            "description": "Very low contrast",
            "count": 6,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV > DIV:first-child + DIV + DIV > DIV:first-child + UL > LI:first-child + LI > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV > BUTTON:first-child > SMALL:first-child > STRONG:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child + DIV + DIV > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child + H3 + DIV + DIV > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > H2:first-child + P + DIV > A:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-banner-sdk > DIV:first-child > DIV:first-child > DIV:first-child > DIV#onetrust-group-container > DIV#onetrust-policy > P#onetrust-policy-text > A:first-child"
            ],
            "contrastdata": [
              [
                1,
                "#ffffff",
                "#ffffff",
                false
              ],
              [
                1,
                "#ffffff",
                "#ffffff",
                false
              ],
              [
                1,
                "#ffffff",
                "#ffffff",
                false
              ],
              [
                1.05,
                "#ffffff",
                "#f7f9fa",
                false
              ],
              [
                1,
                "#ffffff",
                "#ffffff",
                false
              ],
              [
                2.96,
                "#0076a8",
                "#25272a",
                false
              ]
            ]
          }
        }
      },
      "alert": {
        "description": "Alerts",
        "count": 1,
        "items": {
          "noscript": {
            "id": "noscript",
            "description": "Noscript element",
            "count": 1,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child"
            ]
          }
        }
      },
      "feature": {
        "description": "Features",
        "count": 8,
        "items": {
          "alt": {
            "id": "alt",
            "description": "Alternative text",
            "count": 1,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > IMG:first-child"
            ]
          },
          "label": {
            "id": "label",
            "description": "Form label",
            "count": 5,
            "selectors": [
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > DIV#ot-pc-hdr > H3:first-child + DIV > DIV:first-child > P:first-child + LABEL",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > DIV#ot-pc-hdr > H3:first-child + DIV > SECTION#ot-fltr-modal > DIV#ot-fltr-cnt > BUTTON:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > INPUT:first-child + LABEL",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > SECTION#ot-lst-cnt > DIV#ot-sel-blk > DIV:first-child > DIV:first-child + DIV > DIV#ot-selall-hostcntr > INPUT:first-child + LABEL",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > SECTION#ot-lst-cnt > DIV#ot-sel-blk > DIV:first-child > DIV:first-child + DIV > DIV#ot-selall-vencntr > INPUT:first-child + LABEL",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > SECTION#ot-lst-cnt > DIV#ot-sel-blk > DIV:first-child > DIV:first-child + DIV > DIV#ot-selall-licntr > INPUT:first-child + LABEL"
            ]
          },
          "lang": {
            "id": "lang",
            "description": "Language",
            "count": 2,
            "selectors": [
              false,
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk"
            ]
          }
        }
      },
      "structure": {
        "description": "Structural Elements",
        "count": 25,
        "items": {
          "h1": {
            "id": "h1",
            "description": "Heading level 1",
            "count": 1,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > SPAN:first-child > H1:first-child"
            ]
          },
          "h2": {
            "id": "h2",
            "description": "Heading level 2",
            "count": 3,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child > H2:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > H2:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > H2:first-child"
            ]
          },
          "h3": {
            "id": "h3",
            "description": "Heading level 3",
            "count": 6,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child > H2:first-child + H3",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child + H3",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3#ot-pc-title",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3#ot-category-title",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > DIV#ot-pc-hdr > H3#ot-lst-title",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-banner-sdk > DIV:first-child > DIV:first-child > DIV:first-child > DIV#onetrust-group-container > DIV#onetrust-policy > H3#onetrust-policy-title"
            ]
          },
          "h4": {
            "id": "h4",
            "description": "Heading level 4",
            "count": 4,
            "selectors": [
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV > BUTTON:first-child + DIV > H4#ot-header-id-C0002",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV + DIV > BUTTON:first-child + DIV > H4#ot-header-id-C0003",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV + DIV + DIV > BUTTON:first-child + DIV > H4#ot-header-id-C0004",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV + DIV + DIV + DIV > BUTTON:first-child + DIV > H4#ot-header-id-C0001"
            ]
          },
          "ul": {
            "id": "ul",
            "description": "Unordered list",
            "count": 9,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > svg:first-child + UL",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV > DIV:first-child + DIV + DIV > DIV:first-child + UL",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > UL:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > UL:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV + DIV > UL:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV + DIV + DIV > UL:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child > UL:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV > DIV:first-child > UL:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV > DIV:first-child + P + UL"
            ]
          },
          "iframe": {
            "id": "iframe",
            "description": "Inline frame",
            "count": 1,
            "selectors": [
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV:first-child + DIV + SECTION + DIV + SPAN + IFRAME"
            ]
          },
          "main": {
            "id": "main",
            "description": "Main content",
            "count": 1,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN"
            ]
          }
        }
      },
      "aria": {
        "description": "ARIA",
        "count": 54,
        "items": {
          "aria": {
            "id": "aria",
            "description": "ARIA",
            "count": 22,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > svg:first-child + UL > LI:first-child > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > svg:first-child + UL > LI:first-child + LI > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > svg:first-child + UL > LI:first-child + LI + LI > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV + DIV > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV + DIV > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV:first-child > DIV:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV + DIV > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV + DIV + DIV > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV + DIV + DIV + DIV > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > DIV#ot-pc-hdr > H3:first-child + DIV > DIV:first-child > P:first-child",
              false,
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > DIV#ot-pc-hdr > H3:first-child + DIV > SECTION#ot-fltr-modal > DIV#ot-fltr-cnt > BUTTON:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child > INPUT#chkbox-id",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > SECTION#ot-lst-cnt > DIV#ot-sel-blk > DIV:first-child > DIV:first-child + DIV > DIV#ot-selall-hostcntr > INPUT#select-all-hosts-groups-handler",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > SECTION#ot-lst-cnt > DIV#ot-sel-blk > DIV:first-child > DIV:first-child + DIV > DIV#ot-selall-vencntr > INPUT#select-all-vendor-groups-handler",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > SECTION#ot-lst-cnt > DIV#ot-sel-blk > DIV:first-child > DIV:first-child + DIV > DIV#ot-selall-licntr > INPUT#select-all-vendor-leg-handler",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV:first-child + DIV + SECTION + DIV + SPAN",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-banner-sdk > DIV:first-child",
              false,
              false
            ]
          },
          "aria_label": {
            "id": "aria_label",
            "description": "ARIA label",
            "count": 21,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV > DIV:first-child > DIV:first-child + BUTTON",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV > DIV:first-child + DIV + DIV > DIV:first-child + UL > LI:first-child > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child + DIV > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child + DIV + DIV > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child + DIV + DIV + DIV > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV:first-child > DIV:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV:first-child > BUTTON#close-pc-btn-handler",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > DIV#ot-pc-desc > BR:first-child + A",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV + DIV > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV + DIV + DIV > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV#ot-pc-content > H3:first-child + DIV + BUTTON + SECTION > H3:first-child + DIV + DIV + DIV + DIV > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > DIV#ot-pc-hdr > H3#ot-lst-title > BUTTON:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > DIV#ot-pc-hdr > H3:first-child + DIV > DIV:first-child + DIV > BUTTON#filter-btn-handler",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV:first-child + DIV + SECTION + DIV > DIV:first-child + DIV > A:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-banner-sdk > DIV:first-child",
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-banner-sdk > DIV:first-child > DIV#onetrust-close-btn-container > BUTTON:first-child"
            ]
          },
          "aria_describedby": {
            "id": "aria_describedby",
            "description": "ARIA description",
            "count": 1,
            "selectors": [
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-banner-sdk > DIV:first-child"
            ]
          },
          "aria_tabindex": {
            "id": "aria_tabindex",
            "description": "ARIA tabindex",
            "count": 6,
            "selectors": [
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child + DIV > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child + DIV + DIV > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child + DIV + DIV + DIV > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV > SMALL:first-child > A:first-child",
              "HTML > HEAD:first-child + BODY > NOSCRIPT:first-child + MAIN > DIV#app > DIV:first-child + DIV + DIV + DIV > DIV:first-child + DIV > DIV:first-child > DIV:first-child > DIV:first-child + DIV > DIV:first-child > DIV:first-child + DIV + DIV > DIV:first-child + DIV + DIV + DIV + DIV + DIV > SMALL:first-child > A:first-child"
            ]
          },
          "aria_live_region": {
            "id": "aria_live_region",
            "description": "ARIA alert or live region",
            "count": 1,
            "selectors": [
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV:first-child + DIV + SECTION + DIV + SPAN"
            ]
          },
          "aria_hidden": {
            "id": "aria_hidden",
            "description": "ARIA hidden",
            "count": 2,
            "selectors": [
              false,
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > DIV:first-child + DIV + SECTION + DIV + SPAN + IFRAME"
            ]
          },
          "aria_haspopup": {
            "id": "aria_haspopup",
            "description": "ARIA popup",
            "count": 1,
            "selectors": [
              "HTML > HEAD:first-child + BODY > DIV#onetrust-consent-sdk > DIV#onetrust-pc-sdk > SECTION#ot-pc-lst > DIV#ot-pc-hdr > H3:first-child + DIV > DIV:first-child + DIV > BUTTON#filter-btn-handler"
            ]
          }
        }
      }
    }
  }`);
//set up for WebAim API Data, includes selectors, and counters for severity of errors.
console.dir(Object.keys(webaimresult.categories));
let webaimP = document.querySelector(".paragraph_wa");
let template = document.querySelector("#cat");
let lowCount = 0;
let mediumCount = 0;
let fullCount = 0;
let contrastCountWA = 0;
let altCount = 0;
let WAariaCount = 0;
let open = 0;

function openClose(){
  if(open === 0){
    window.scrollTo({
      top: 820,
      left: 0,
      behavior: 'smooth'
    });
    open = 1;
  }else{
    open = 0;
  }
}

//Object.entries(webaimresult.categories).forEach((category, key) => webaimP.innerHTML += `<p><span class="category_wa">${category[1].description}:</span> ${category[1].count}</p>`)
//a function for cloning a template then creating items and categories using the severity, description, and colors to represent the error and its severity
const addCategory = (severityClass, description, count, items, selectors) => {
  let categoryTemplate = template.content.cloneNode(true);
  categoryTemplate.querySelector(".category_wa").classList.add(severityClass);
  if(severityClass === "category_wa_orange"){
    categoryTemplate.querySelector(".category_wa").innerHTML += "<h2></h2>";
    categoryTemplate.querySelector(".category_wa").innerHTML +=
    "<p> <i class='fas fa-times-circle'></i> " + description + " : " + count + "</p>";
  } else if(severityClass ==="category_wa_yellow"){
    categoryTemplate.querySelector(".category_wa").innerHTML += "<h2></h2>";
    categoryTemplate.querySelector(".category_wa").innerHTML +=
    "<p> <i class='fas fa-times-circle'></i> " + description + " : " + count + "</p>";
  } else if(severityClass ==="category_wa_green"){
    categoryTemplate.querySelector(".category_wa").innerHTML += "<h2></h2>";
    categoryTemplate.querySelector(".category_wa").innerHTML +=
    "<p> <i class='fas fa-smite'></i> " + description + " : " + count + "</p>";
  }  else{
    categoryTemplate.querySelector(".category_wa").innerHTML += "<h2></h2>";
    categoryTemplate.querySelector(".category_wa").innerHTML +=
    "<p> <i class='fas fa-arrow-right'></i> " + description + " : " + count + "</p>";
  }
  categoryTemplate.querySelector(".selectors").textContent = selectors;
  
  


  items.forEach((item) => {
    console.log("aria count is" + WAariaCount);
    categoryTemplate.querySelector(
      ".items"
      ).innerHTML += `<div class="item"><p>${item.description}: ${item.count}</p></div>`;
    
   

    if(item.description.includes("Alternative")){
      altCount++;
    }
    
    
    if (item.contrastdata) {
      
     
      item.contrastdata.forEach((contrast) => {
        console.log(item);
        console.log(contrast);
        let [contrastScore, firstColor, secondColor, passFail] = contrast;
        categoryTemplate.querySelector(
          ".item"
          ).innerHTML += `<div class="contrast"><p> Contrast Ratio: ${contrastScore} <span class="color-swatch" style="background-color:${firstColor}" data-tooltip="${firstColor}"></span> <span class="color-swatch" style="background-color:${secondColor}" data-tooltip="${secondColor}"></span></p></div>`;
        contrastCountWA++;
      });
    }
    if(item.description.includes("ARIA") && !item.description.includes("Broken")){
      WAariaCount += item.count;
      console.log(item.description + ", amount is " + item.count + ", and total is " + WAariaCount);
    }
    let selectorCount = 0;
    item.selectors.forEach((selector) => {
      if(typeof selector === 'string'){
        selectorCount++;
        categoryTemplate.querySelector(
          ".items"
          ).innerHTML += "<p class='instanceNumber'>Instance " + selectorCount + ":</p> ";
      if(selector.includes('#')){
        categoryTemplate.querySelector(
          ".items"
          ).innerHTML += "<p class='selector'>" + selector.substring(selector.indexOf('#')) + "</p><button class=WebAIMJira><i class='fab fa-jira'></i>Create Jira Issue</button>";
      }else{
        categoryTemplate.querySelector(
        ".items"
        ).innerHTML += "<p class='selector'>" + selector + "</p>";
      }
    }
    })
  });
  
  //add the clone of the template
  webaimP.appendChild(categoryTemplate);
  };
//determine the color of the category depending on the count of errors within the category.
  Object.entries(webaimresult.categories).forEach((category, key) => {
    if (
      category[1].description === "Errors" ||
      category[1].description === "Contrast Errors" ||
      (category[1].description === "Alerts" && category[1].count >= 3)
    ) {
      lowCount += 1;
      addCategory(
        "category_wa_orange",
        category[1].description,
        category[1].count,     
        Object.values(category[1].items),
        category[1].selectors
      );
    } else if (
      category[1].description === "Errors" ||
      category[1].description === "Contrast Errors" ||
      (category[1].description === "Alerts" && category[1].count > 0)
    ) {
      mediumCount += 1;
      addCategory(
      "category_wa_yellow",
      category[1].description,
      category[1].count,
      Object.values(category[1].items),
      category[1].selectors
    );
  } else if (
      category[1].description === "Errors" ||
      category[1].description === "Contrast Errors" ||
      category[1].description === "Alerts"
  ) {
      fullCount += 1;
      addCategory(
      "category_wa_green",
      category[1].description,
      category[1].count,
      Object.values(category[1].items),
      category[1].selectors
    );
  } else {
    addCategory(
      "category_wa",
      category[1].description,
      category[1].count,
      Object.values(category[1].items),
      category[1].selectors
    );
  }
});
//add severity-related statistics to the top dashboard
let lowNumber = document.querySelector(".low_p");
lowNumber.innerHTML = contrastCountWA + " Error(s)";
let lowNumber2 = document.querySelector(".low_p2");
lowNumber2.innerHTML = altCount;
let lowNumber3 = document.querySelector(".low_p3");
lowNumber3.innerHTML = WAariaCount;

//add basic WebAIM statistics to the top dashboard
let elementsNumber = document.querySelector(".elements_p");
elementsNumber.innerHTML = webaimresult.statistics.totalelements;
let itemsNumber = document.querySelector(".itemCount_p");
itemsNumber.innerHTML = webaimresult.statistics.allitemcount;
//code controlling the operations of the accordions for each category.  Uses an "active" class.
var acc = document.querySelectorAll(".category_wa");
var i;
for (i = 0; i < acc.length; i++) {
  var panel = acc[i].nextElementSibling;
  let panelHeight = window.getComputedStyle(panel).height;
  panel.style.height = "1px";
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(this.classList.contains("active"));
    if (this.classList.contains("active")) {
      console.log(window.getComputedStyle(panel).height);
      panel.style.height = panelHeight;
    } else {
      panel.style.height = "1px";
    }
  });
}

//set up the URL parameter and a URL string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = encodeURIComponent(urlParams.get("URLEnter"));
let urlAddress = document.querySelector(".url_p");
urlAddress.innerHTML = decodeURIComponent(url);
//reset the severity variables following the compilation of WebAIM data.
lowCount = 0;
mediumCount = 0;
fullCount = 0;
let pa11yAltCount = 0;
//fetch a JSON file from the pa11y API, currently using a localhost route.
fetch(`http://localhost:3000/pa11y/${url}`)
  .then((response) => response.json())
  .then((data) => {
    //upon receiving the data, set several counter and query variables.
    let pa11yresult = document.querySelector(".pa11y");
    let resultdata = JSON.stringify(data);
    let errorCount = 0;
    let contrastCount = 0;
    let duplicateIDCount = 0;
    //set up a button within the main button for each error, and count the number of errors.
    for (let i = 0; i < data.issues.length; i++) {
      errorCount++;
      let WCAGButton = document.createElement("button");
      WCAGButton.innerHTML += "<i class='fas fa-chevron-left'></i>";
      let WCAGSuggestion = document.createElement("div");

      pa11yresult.appendChild(WCAGButton);
      pa11yresult.appendChild(WCAGSuggestion);
      //set up the WCAG principle.
      let principleSetUp = data.issues[i].code.substring(
        data.issues[i].code.indexOf("P"),
        data.issues[i].code.indexOf("e") + 2
      );
      //set up the WCAG guideline.
      let guidelineSetUp = data.issues[i].code.substring(
        data.issues[i].code.indexOf("d") + 6,
        data.issues[i].code.indexOf("_") + 2
      );
      //grab the principle from the first variable.
      let principle = principleSetUp.substring(
        principleSetUp.indexOf("e") + 1,
        principleSetUp.length
      );
      //grab the guideline from the first variable.
      let guideline = guidelineSetUp.replace("_", ".");
      let guidelineTitle = "";
      let guideURL = "";
      //determine the title of the guideline based on its number.
      if (guideline === "1.1") {
        guidelineTitle = "Text Alternatives";
        guideURL = "https://www.w3.org/TR/WCAG21/#text-alternatives";
      } else if (guideline === "1.2") {
        guidelineTitle = "Time-based Media";
        guideURL = "https://www.w3.org/TR/WCAG21/#time-based-media";
      } else if (guideline === "1.3") {
        guidelineTitle = "Adaptable";
        guideURL = "https://www.w3.org/TR/WCAG21/#adaptable";
      } else if (guideline === "1.4") {
        guidelineTitle = "Distinguishable";
        guideURL = "https://www.w3.org/TR/WCAG21/#distinguishable";
      } else if (guideline === "2.1") {
        guidelineTitle = "Keyboard Accessible";
        guideURL = "https://www.w3.org/TR/WCAG21/#keyboard-accessible";
      } else if (guideline === "2.2") {
        guidelineTitle = "Enough Time";
        guideURL = "https://www.w3.org/TR/WCAG21/#enough-time";
      } else if (guideline === "2.3") {
        guidelineTitle = "Seizures and Physical Reactions";
        guideURL = "https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions";
      } else if (guideline === "2.4") {
        guidelineTitle = "Navigable";
        guideURL = "https://www.w3.org/TR/WCAG21/#navigable";
      } else if (guideline === "2.5") {
        guidelineTitle = "Input Modalities";
        guideURL = "https://www.w3.org/TR/WCAG21/#input-modalities";
      } else if (guideline === "3.1") {
        guidelineTitle = "Readable";
        guideURL = "https://www.w3.org/TR/WCAG21/#readable";
      } else if (guideline === "3.2") {
        guidelineTitle = "Predictable";
        guideURL = "https://www.w3.org/TR/WCAG21/#predictable";
      } else if (guideline === "3.3") {
        guidelineTitle = "Input Assistance";
        guideURL = "https://www.w3.org/TR/WCAG21/#input-assistance";
      } else if (guideline === "4.1") {
        guidelineTitle = "Robust";
        guideURL = "https://www.w3.org/TR/WCAG21/#robust";
      } else {
        guidelineTitle = "New Guideline or Guideline Not Found";
        guideURL = "https://www.w3.org/TR/WCAG21/";
      }
      //print the details on the text of the button/accordion.
      WCAGButton.classList.add("WCAGButton");
      WCAGButton.innerHTML +=
        "Error " + errorCount + ": WCAG Principle " + principle + ", Guideline " + guideline + ", " + guidelineTitle;

      //add components to the inside of each accordion.
      WCAGSuggestion.innerHTML += "<h3 class='pa11yTitle'> WCAG AA Violation: </h3>";
      WCAGSuggestion.innerHTML += "<p class='pa11y_p'><span><strong> Principle: </strong>" + principle + ", </span><span> <strong> Guideline:</strong> " + guideline + "</span></p>";
      WCAGSuggestion.innerHTML += "<h3 class='pa11yTitle'> What It Means: </h3>";
      WCAGSuggestion.innerHTML += "<p class='pa11y_p'>" + data.issues[i].message; + "</p>";    
      //add the appropriate class.
      WCAGSuggestion.innerHTML += "<p><a href=" + guideURL + ">View This Guideline and Subguidelines</a>";
      WCAGSuggestion.classList.add("WCAGSuggestion");
      //loop through and determine if this is a contrast or duplicate id error
      //duplicate id error
      if (
        data.issues[i].message.includes("duplicate id") ||
        data.issues[i].message.includes("Duplicate id")
      ) {
        duplicateIDCount = duplicateIDCount + 1;
      } 
      //alt text error
      if (
        data.issues[i].message.includes("alt") ||
        data.issues[i].message.includes("alternative") ||
        data.issues[i].message.includes("Alternative")
      ) {
        pa11yAltCount = pa11yAltCount + 1;
      } 
      //contrast or color error
      if (
        data.issues[i].message.includes("colour") ||
        data.issues[i].message.includes("change background")
      ) {
        contrastCount = contrastCount + 1;
        console.log(contrastCount);
        //add a section and a fontawesome icon if the error is a contrast error;
        WCAGButton.innerHTML += " <i class='fas fa-adjust'> </i> ";
        //print a div representing the recommended color's appearance, based on the description of the error.
        WCAGSuggestion.innerHTML +=
          "<h3 class='pa11yTitle'> Recommended Color's Appearance: </h3>";
        WCAGSuggestion.innerHTML +=
          "<div style='margin-left: 5%;border:1px solid black; display: flex;width: 20px; height: 20px; background-color:" +
          data.issues[i].message.substring(data.issues[i].message.indexOf("#"),data.issues[i].message.length - 1) + "'></div>";     
      }
      //display totals of each error type
      /*let errorCountSelector3 = document.querySelector(".contrastTotal");
      errorCountSelector3.innerHTML = contrastCount;*/
      let mediumNumber = document.querySelector(".medium_p");
      mediumNumber.innerHTML = contrastCount + " Error(s)";
      /*let errorCountSelector4 = document.querySelector(".duplicateIDTotal");
      errorCountSelector4.innerHTML = duplicateIDCount;*/
      let fullNumber2 = document.querySelector(".full_p2");
      fullNumber2.innerHTML = pa11yAltCount + " Error(s)";
      //add a section if the error is a duplicate id error
      if (data.issues[i].message.includes("Duplicate id")) {
        WCAGSuggestion.innerHTML +=
          "<h3 class='pa11yTitle'> Duplicate id: </h3>";
        //add a fontawesome icon if the error is a duplicate id which may require additional review.
        WCAGButton.innerHTML +=
          " <i class='fas fa-exclamation-triangle'> </i> ";
      } else {
        WCAGSuggestion.innerHTML += "<h3 class='pa11yTitle'> Path: </h3>";
      }
      if(data.issues[i].message.includes("does not contain a submit button")){
        WCAGButton.innerHTML += " <i class='fas fa-mouse'></i>";
      }
      //display the selector
      WCAGSuggestion.innerHTML +=
        "<p class='pa11y_p'>" + data.issues[i].selector + "</p>";
        WCAGSuggestion.innerHTML +=
          "<button class='createIssue'> <i class='fab fa-jira'></i>  Create Jira Issue</button>";
    }
    //tell the user if there are no errors found but remind them to check other APIs.
    if (errorCount === 0) {
      pa11yresult.innerHTML +=
        "<p> Congratulations, no errors were found in the Pa11y API!  Be sure to check other APIs too to ensure fully accessibility.</p>";
    }
    //print the error count where appropriate
    //let errorCountSelector = document.querySelector(".low_p3");
    let errorCountSelector2 = document.querySelector(".Pa11yCount");
    //errorCountSelector.innerHTML = errorCount;
    errorCountSelector2.innerHTML = errorCount;
    //some optional, unused variables which may come in handy later on.
    let pa11yDiv = document.querySelector(".pa11y");
    let pa11yHeight = getComputedStyle(pa11y).height;
    //set for variables for looping to print the accordions for the Pa11y API.
    var acc3 = document.querySelectorAll(".WCAGButton");
    var i3;
    var acc2 = document.querySelectorAll(".category_pa");
    var i2;
    //pa11y loop
    for (i2 = 0; i2 < acc2.length; i2++) {
      //.pa11y - everything under main button - the main div
      acc2[i2].addEventListener("click", function () {
        //toggle between active and inactive
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (this.classList.contains("active")) {
          panel.setAttribute("aria-collapsed", false);
        } else {
          panel.setAttribute("aria-collapsed", true);
        }
      });
    }
    for (i3 = 0; i3 < acc3.length; i3++) {
      //individual section divs under the smaller accordion buttons.
      panel2 = acc3[i3].nextElementSibling;
      acc3[i3].addEventListener("click", function () {
        this.classList.toggle("active");
        panel2 = this.nextElementSibling;
        if (this.classList.contains("active")) {
          panel2.setAttribute("aria-collapsed", false);
        } else {
          panel2.setAttribute("aria-collapsed", true);
        }
      });
    }

    let hideLoader2 = document.querySelector(".loading2");
    let hideLoaderTextSmall2 = document.querySelector(".loadingTextSmall2");
    let hideLoaderText2 = document.querySelector(".loadingText2");
    hideLoader2.classList.add("hiddenElement");
    hideLoaderText2.classList.add("hiddenElement");
    hideLoaderTextSmall2.classList.add("hiddenElement");

    //after Pa11y loads, this should be enough time to prepare the Puppeteer API.  Display the images.
    let puppeteerimage = document.querySelector(".pImage");
    puppeteerimage.innerHTML =
      "<img alt='Mobile View Image' id='PImage' style='width:50%;display:flex;margin:0 auto' src='/images/puppeteer.png'/>";
    let puppeteerimage2 = document.querySelector(".pImage2");
    puppeteerimage2.innerHTML =
      "<img alt='Desktop View Image' id='PImage2' style='width:75%;display:flex;margin:0 auto' src='/images/puppeteer2.png'/>";
  });
//fetch JSON Data from the A11y API
fetch(`http://localhost:3000/a11y/${url}`)
  .then((response) => response.json())
  .then((data) => {
    let A11yARIA = 0;
    //log the audit, for testing purposes.
    console.log(data);
    //set up a selector variable.
    let a11yresult = document.querySelector(".auditsection");
    //for each result, print all of the corresponding details.
    for (let i = 0; i < data.audit.length; i++) {
      a11yresult.innerHTML +=
        "<div class='a11yTest'>" +
        "<h3 class='a11yTestCode'>" +
        data.audit[i].code +
        ": <span class='passFail" +
        i +
        "'> " +
        data.audit[i].result +
        "</span> </h3>" +
        "<h4 class='a11yTestDescription'>" +
        data.audit[i].heading +
        "</h4>" +
        "<p class='a11yTestSeverity'><em> Importance: " +
        data.audit[i].severity +
        "</em></p>" +
        "<a class='a11yhelp' href='" +
        data.audit[i].url +
        "'>" +
        data.audit[i].code +
        " Help</a>" +
        "<button style='margin-left:20px;' class='createIssue'> <i class='fab fa-jira'></i>  Create Jira Issue</button>" +
        "</div>";
      //set up the pass/fail system.
      let passFailName = ".passFail" + i;
      let passFailSelector = document.querySelector(passFailName);
      //print an appropriate result, color, and fontawesome icon for the result of the test.
      if (data.audit[i].result === "PASS") {
        passFailSelector.classList.add("a11y_pass");
        passFailSelector.innerHTML += ' <i class="fas fa-smile"></i>';
        fullCount += 1;
      } else if (data.audit[i].result === "FAIL") {
        A11yARIA++;
        passFailSelector.classList.add("a11y_fail");
        passFailSelector.innerHTML += ' <i class="fas fa-sad-tear"></i>';
        lowCount += 1;
      } else {
        passFailSelector.classList.add("a11y_na");
        passFailSelector.innerHTML += ' <i class="fas fa-times-circle"></i>';
      }



      let errorCountSelector3 = document.querySelector(".ARIAErrors");
      errorCountSelector3.innerHTML = A11yARIA + " Error(s)";


      
      //set up the loading systems with the icon and text.
      let hideLoader = document.querySelector(".loading");
      let hideLoaderText = document.querySelector(".loadingText");
      let hideLoaderTextSmall = document.querySelector(".loadingTextSmall");
      hideLoader.classList.add("hiddenElement");
      hideLoaderText.classList.add("hiddenElement");
      hideLoaderTextSmall.classList.add("hiddenElement");




      var acc5 = document.querySelectorAll(".A11y");
      var i5;
      //a11y loop
      for (i5 = 0; i5 < acc5.length; i5++) {
       //.a11y - everything under main button - the main div
      acc5[i5].addEventListener("click", function () {
      //toggle between active and inactive
        this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (this.classList.contains("active")) {
            panel.setAttribute("aria-collapsed", false);
           } else {
            panel.setAttribute("aria-collapsed", true);
    }
  });
}





      //display the count of test results in the main dashboard at the top of the page.
    
      






    }
  });



 

//set up the function for the reload button.  If the Puppeteer API isn't given enough time, this button helps display the correct screenshots, using a timestamp.
function reload() {
  var source =
    "http://localhost:3000/images/puppeteer.png?t=" + new Date().getTime();
  var image = document.getElementById("PImage");
  setTimeout(function () {
    image.setAttribute("src", source);
  }, 100);
  var source2 =
    "http://localhost:3000/images/puppeteer2.png?t=" + new Date().getTime();
  var image2 = document.getElementById("PImage2");
  setTimeout(function () {
    image2.setAttribute("src", source2);
  }, 100);
}
var acc4 = document.querySelectorAll(".dashAcc");
var i4;
for (i4 = 0; i4 < acc4.length; i4++) {
  var panel = acc4[i4].nextElementSibling;
  let panelHeight = window.getComputedStyle(panel).height;
  panel.style.height = "0px";
  acc4[i4].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(this.classList.contains("active"));
    if (this.classList.contains("active")) {
      console.log(window.getComputedStyle(panel).height);
      panel.style.height = panelHeight;
    } else {
      panel.style.height = "0px";
    }
  });
}
