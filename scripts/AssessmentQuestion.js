gRecordData = {
    Status: "NotStarted",
    AssessmentScore: "4",
    VisitedNumberOfPages: "0",
    LastVisitedPage: "", // UserSelectedOptionId will be used to jump to the unattempted question
    RecordTitle: "How Does Barbara Corcoran Pick Her Investments on Shark Tank?",
    LandingPageURL: "record2_landing.htm",
    QuestionSequence: "Numbers", // this can be used later if different display style is required
    OptionSequence: "LowerAlphabets", // this can be used later if different display style is required
    RandomizeQuestions: true,
    RandomizeOptions: true,
    Questions: [
                    {
                        QuestionId: "1",
                        QuestionText: "Where would you look to see how much RAM is installed on your computer?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "In the Help and Support window.",
                                         "IsCorrect": false,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "In the System section of the Control Panel.",
                                         "IsCorrect": true,
                                         "score": 2
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Right-click the C: drive in Windows Explorer and click Properties.",
                                         "IsCorrect": false
                                     }

                        ],
                        IsAnswered:false,
                        CorrectFeedback: "That’s right.",
                        IncorrectFeedback: "​That’s not right. The System section of the Control Panel is where you would see how much RAM is installed on your computer.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "2",
                        QuestionText: "What type of software is OpenOffice?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Proprietary",
                                         "IsCorrect": false,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Open source software",
                                         "IsCorrect": true,
                                         score: 2,

                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Shareware",
                                         "IsCorrect": false,

                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "That’s not right. OpenOffice is open source software.",
                        CorrectFeedback: "That’s right.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "3",
                        QuestionText: "Where would you look to see how much space is available on your C: drive?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "In the System section of the Control Panel.",
                                         "IsCorrect": false
                                        
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "In the Help and Support window..",
                                         "IsCorrect": false
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Open File Explorer and click This PC.",
                                         "IsCorrect": true,
                                         score: 2
                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "​That’s not right. To see how much space is available on your C: drive, use File Explorer.",
                        CorrectFeedback: "That’s right.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "4",
                        QuestionText: "What application is best for formatting and editing text?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Spreadsheet software",
                                         "IsCorrect": false
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Presentation software",
                                         "IsCorrect": false
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Word processor",
                                         "IsCorrect": true,
                                         score: 2
                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "​That’s not right. A word processor is best for formatting and editing text.​",
                        CorrectFeedback: "That’s right.​",
                        "UserSelectedOptionId": ""

                    }

    ]
}