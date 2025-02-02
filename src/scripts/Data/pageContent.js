export const pageContent = [
    {
        title: "Web Speech API",
        introduction: "The Web Speech API is a powerful browser-based technology that allows voice interaction on web platforms. It has two basic functionalities: speech recognition, which turns spoken language into text, and speech synthesis, which converts text into audible speech. By providing native browser support for voice-based interactions, this API enables developers to construct more accessible and intuitive web apps, allowing users to engage with websites via voice commands or audio feedback via text-to-speech conversion.",
        usage: [
            {
                title: "Speech Recognition",
                introduction: "The Speech Recognition API enables web applications to convert spoken audio to text directly in the browser. It provides real-time speech recognition capabilities with support for multiple languages and continuous recognition modes.",
                content: [
                    "Voice command interfaces",
                    "Real - time transcription",
                    "Accessibility features",
                    "Interactive web applications",
                ],
            },
            {
                title: "Speech Synthesis",
                introduction: "The Speech Synthesis API (also known as Text-to-Speech or TTS) allows web applications to generate synthetic speech from text. It provides various voices, languages, and control over speech parameters.",
                content: [
                    "Web accessibility",
                    "Voice feedback",
                    "Interactive interfaces",
                    "Language learning tools",
                ],
            },
        ],
        interface_mode: 1,
        interfaces: [
            {
                title: "Speech Recognition",
                sub_interfaces: [
                    {
                        title: "SpeechRecognition",
                        content: "The controller interface for the recognition service; this also handles the SpeechRecognitionEvent sent from the recognition service.",
                    },
                    {
                        title: "SpeechRecognitionAlternative",
                        content: "Represents a single word that has been recognized by the speech recognition service.",
                    },
                    {
                        title: "SpeechRecognitionErrorEvent",
                        content: "Represents error messages from the recognition service.",
                    },
                    {
                        title: "SpeechRecognitionEvent",
                        content: "The event object for the result and nomatch events, and contains all the data associated with an interim or final speech recognition result.",
                    },
                    {
                        title: "SpeechGrammar",
                        content: "The words or patterns of words that we want the recognition service to recognize.",
                    },
                    {
                        title: "SpeechGrammarList",
                        content: "Represents a list of SpeechGrammar objects.",
                    },
                    {
                        title: "SpeechRecognitionResult",
                        content: "Represents a single recognition match, which may contain multiple SpeechRecognitionAlternative objects.",
                    },
                    {
                        title: "SpeechRecognitionResultList",
                        content: "Represents a list of SpeechRecognitionResult objects, or a single one if results are being captured in continuous mode.",
                    },
                ],
            },
            {
                title: "SpeechSynthesis",
                sub_interfaces: [
                    {
                        title: "SpeechSynthesis",
                        content: "The controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.",
                    },
                    {
                        title: "SpeechSynthesisErrorEvent",
                        content: "Contains information about any errors that occur while processing SpeechSynthesisUtterance objects in the speech service.",
                    },
                    {
                        title: "SpeechSynthesisEvent",
                        content: "Contains information about the current state of SpeechSynthesisUtterance objects that have been processed in the speech service.",
                    },
                    {
                        title: "SpeechSynthesisUtterance",
                        content: "Represents a speech request.It contains the content the speech service should read and information about how to read it(e.g.language, pitch and volume.)",
                    },
                    {
                        title: "SpeechSynthesisVoice",
                        content: "Represents a voice that the system supports.Every SpeechSynthesisVoice has its own relative speech service including information about language, name and URI.",
                    },
                    {
                        title: "Window.speechSynthesis",
                        content: " Specified out as part of a [NoInterfaceObject] interface called SpeechSynthesisGetter, and Implemented by the Window object, the speechSynthesis property provides access to the SpeechSynthesis controller, and therefore the entry point to speech synthesis functionality.",
                    },
                ],
            }
        ],
        requirements: [
            {
                title: "Speech Recognition",
                content: [
                    "Google Chrome 33 +",
                    "Microsoft Edge 79 +",
                    "Safari 14.1 +",
                    "Firefox(requires enabling flat)",
                ],
            },
            {
                title: "Technical Requirements",
                content: [
                    "HTTPS connection(required for production)",
                    "Microphone access permission",
                    "Stable internet connection(for cloud - based recognition)",
                ],
            },
        ],
    },
    {
        title: "Web Storage API",
        introduction: "The Web Storage API is a browser-based mechanism that enables web applications to store key-value pairs locally within a user's browser, providing a persistent, secure method for saving data client-side. Unlike traditional cookies, Web Storage offers larger storage capacities, better performance, and more granular control, with two primary storage mechanisms: localStorage for long-term data retention and sessionStorage for temporary data storage during a browser session.",
        usage: [
            {
                title: "LocalStorage",
                content: [
                    "Stores data with no expiration time. It will persist even when the browser is closed and reopened.",
                ],
            },
            {
                title: "SessionStorage",
                content: [
                    "Similar to LocalStorage, but it only lasts for the duration of the page session. Data is cleared when the page is closed.",
                ],
            },
        ],
        interface_mode: 2,
        interfaces: {

        },
        requirements: {

        },
    },
    {
        title: "Fetch API",
        introduction: "The Fetch API is a modern JavaScript interface for making HTTP requests, providing a more powerful and flexible replacement for traditional XMLHttpRequest. It offers a Promise-based approach to handle network requests and responses, making it easier to perform asynchronous operations, manage response data in various formats, and implement error handling in web applications.",
        usage: [
            {
                title: "",
                content: [
                    "Basic GET Request.",
                    "POST Request with JSON.",
                    "Handling Errors and Response Status",
                    "Uploading Files with a FormData Object",
                ],
            },
        ],
        interfaces: {

        },
        requirements: {

        },
    },
    {
        title: "",
        introduction: "",
        usage: [
            {
                title: "",
                content: [

                ],
            },
            {
                title: "",
                content: [

                ],
            },
        ],
        interfaces: {

        },
        requirements: {

        },
    },

    /*{
         title:"Web Speech API",
         introduction:{
             title:"Introduction",
             content:"The Web Speech API enables web applications to recognize speech (Speech Recognition) and convert text to speech (Speech Synthesis). It allows developers to create voice-driven applications."
         },
         usage:{
             title:"Usage",
             content: [
                 "Convert spoken words into text.",
                 "Implement voice commands.",
                 "Read text aloud using speech synthesis."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires a modern browser (Chrome, Edge, Firefox).",
                 "Requires HTTPS for speech recognition."
             ]
         }
     },
     {
         title:"Web Storage API (localStorage)",
         introduction:{
             title:"Introduction",
             content:"localStorage provides a way to store data persistently in a user's browser. Data stored using localStorage does not expire unless manually deleted."
         },
         usage:{
             title:"Usage",
             content: [
                 "Store user preferences.",
                 "Save session details.",
                 "Implement offline caching."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Supported in all modern browsers.",
                 "Maximum storage capacity varies (typically 5MB)."
             ]
         }
     },
     {
         title:"Web Storage API (sessionStorage)",
         introduction:{
             title:"Introduction",
             content:"sessionStorage stores data for the duration of a page session. Data is cleared when the page is closed."
         },
         usage:{
             title:"Usage",
             content: [
                 "Maintain temporary user session data.",
                 "Store form inputs while navigating.",
                 "Track page visits in a single session."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Supported in all modern browsers.",
                 "Limited to the active session."
             ]
         }
     },
     {
         title:"Web Fetch API",
         introduction:{
             title:"Introduction",
             content:"The Fetch API allows web applications to make network requests similar to XMLHttpRequest but with a more powerful and flexible feature set."
         },
         usage:{
             title:"Usage",
             content: [
                 "Fetch data from APIs.",
                 "Upload files.",
                 "Perform asynchronous operations."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Supported in all modern browsers.",
                 "Requires HTTPS for secure communication."
             ]
         }
     },
     {
         title:" Web Geolocation API",
         introduction:{
             title:"Introduction",
             content:"The Geolocation API allows web applications to access a user’s geographic location."
         },
         usage:{
             title:"Usage",
             content: [
                 "Show the user's location on a map.",
                 "Provide location-based services.",
                 "Track user movement in real time."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires user permission.",
                 "Works best with HTTPS."
             ]
         }
     },
     {
         title:" Web Canvas API",
         introduction:{
             title:"Introduction",
             content:"The Canvas API allows dynamic rendering of 2D graphics and animations in a web browser."
         },
         usage:{
             title:"Usage",
             content: [
                 "Draw shapes, graphs, and images.",
                 "Create interactive animations.",
                 "Implement game graphics."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires an HTML5 <canvas> element.",
                 "Supported in all modern browsers."
             ]
         }
     },
     {
         title:"Web Audio API",
         introduction:{
             title:"Introduction",
             content:"The Web Audio API enables advanced audio processing and manipulation in web applications."
         },
         usage:{
             title:"Usage",
             content: [
                 "Create sound effects and filters.",
                 "Build music visualizers.",
                 "Implement real-time audio analysis."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Supported in modern browsers.",
                 "Requires JavaScript for audio processing."
             ]
         }
     },
     {
         title:"WebSockets API",
         introduction:{
             title:"Introduction",
             content:"The WebSockets API provides real-time, bidirectional communication between clients and servers."
         },
         usage:{
             title:"Usage",
             content: [
                 "Implement chat applications.",
                 "Enable real-time notifications.",
                 "Create multiplayer games."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires a WebSocket-compatible server.",
                 "Supported in modern browsers."
             ]
         }
     },
     {
         title:"Web IndexedDB API",
         introduction:{
             title:"Introduction",
             content:"IndexedDB is a low-level API for storing large amounts of structured data in the browser."
         },
         usage:{
             title:"Usage",
             content: [
                 "Store large datasets offline.",
                 "Implement client-side databases.",
                 "Cache web application data."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Supported in all modern browsers.",
                 "Requires JavaScript to interact with the database."
             ]
         }
     },
     {
         title:"Web File API",
         introduction:{
             title:"Introduction",
             content:"The File API provides methods to interact with files selected from a user’s device."
         },
         usage:{
             title:"Usage",
             content: [
                 "Read files from user input.",
                 "Implement drag-and-drop uploads.",
                 "Process file data in JavaScript."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires user interaction to select files.",
                 "Supported in modern browsers.",
             ]
         }
     },
     {
         title:"Web Notification API",
         introduction:{
             title:"Introduction",
             content:"The Notification API allows web applications to send system-level notifications to users."
         },
         usage:{
             title:"Usage",
             content: [
                 "Alert users of new messages.",
                 "Notify users of updates.",
                 "Enhance user engagement."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires user permission.",
                 "Works best with HTTPS."
             ]
         }
     },
     {
         title:"Web Workers API",
         introduction:{
             title:"Introduction",
             content:"The Web Workers API enables running JavaScript code in background threads."
         },
         usage:{
             title:"Usage",
             content: [
                 "Perform heavy computations without blocking the main thread.",
                 "Process large data sets asynchronously.",
                 "Improve web application performance."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires JavaScript.",
                 "Supported in modern browsers."
             ]
         }
     },
     {
         title:"Web Intersection Observer API",
         introduction:{
             title:"Introduction",
             content:"The Intersection Observer API allows efficient tracking of element visibility changes."
         },
         usage:{
             title:"Usage",
             content: [
                 "Lazy load images.",
                 "Detect elements entering the viewport.",
                 "Optimize scroll performance."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Supported in modern browsers."
             ]
         }
     },
     {
         title:"Web Mutation Observer API",
         introduction:{
             title:"Introduction",
             content:"The Mutation Observer API monitors changes in the DOM."
         },
         usage:{
             title:"Usage",
             content: [
                 "Track dynamic content updates.",
                 "Detect attribute or text modifications.",
                 "Improve DOM performance monitoring."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires JavaScript.",
                 "Supported in modern browsers."
             ]
         }
     },
     {
         title:"Web Pointer API",
         introduction:{
             title:"Introduction",
             content:"The Pointer API provides unified handling of different input types (mouse, touch, stylus)."
         },
         usage:{
             title:"Usage",
             content: [
                 "Implement touch and stylus interactions.",
                 "Handle gestures.",
                 "Improve cross-device compatibility."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Supported in modern browsers."
             ]
         }
     },
     {
         title:"Web Battery Status API",
         introduction:{
             title:"Introduction",
             content:"The Battery Status API provides information about the device’s battery level and status."
         },
         usage:{
             title:"Usage",
             content: [
                 "Display battery status in applications.",
                 "Optimize power-consuming features."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Supported in modern browsers.",
                 "Some features may require user permission."
             ]
         }
     },
     {
         title:"Web Gamepad API",
         introduction:{
             title:"Introduction",
             content:"The Gamepad API enables interaction with game controllers."
         },
         usage:{
             title:"Usage",
             content: [
                 "Create browser-based games with gamepad support.",
                 "Read gamepad input for interactive experiences."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires a connected game controller.",
                 "Supported in modern browsers."
             ]
         }
     },
     {
         title:"Web DeviceOrientation & Motion API",
         introduction:{
             title:"Introduction",
             content:"This API provides access to motion and orientation data from a device's sensors."
         },
         usage:{
             title:"Usage",
             content: [
                 "Create tilt-based navigation.",
                 "Implement augmented reality (AR) applications.",
                 "Detect motion gestures."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires user permission.",
                 "Works best on mobile devices."
             ]
         }
     },
     {
         title:"Web Push API",
         introduction:{
             title:"Introduction",
             content:"The Push API enables web applications to receive push notifications from a server."
         },
         usage:{
             title:"Usage",
             content: [
                 "Send real-time alerts.",
                 "Improve user engagement with notifications."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires user permission.",
                 "Needs a service worker."
             ]
         }
     },
     {
         title:"Web Payment Request API",
         introduction:{
             title:"Introduction",
             content:"The Payment Request API provides a standard way to handle payments in web applications."
         },
         usage:{
             title:"Usage",
             content: [
                 "Simplify online purchases.",
                 "Integrate multiple payment methods."
             ]
         },
         Requirement: {
             title:"Requirements",
             content: [
                 "Requires HTTPS.",
                 "Supported by modern browsers and payment gateways."
             ]
         }
     } */
]