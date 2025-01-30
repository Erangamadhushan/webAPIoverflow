export const pageContent = [
    {
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
    }
]