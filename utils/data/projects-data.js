import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Memento Social',
        description: "This application is developed to place image/videos/3d models as an AR model in real world. Users can post as well as look at other placed mementos using the in-built AR camera.",
        tools: ['Swift', 'ARCore', 'Reality Kit', 'Auto layout','Push Notifications','Socket', 'Git'],
        role: 'iOS Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Sendsprint',
        description: 'This application is developed to transfer money from countries to nigeria & UK. The project involved various third party integrations like Veriff, Flutterwave payment gateway, etc.',
        tools: ['Swift', 'CoreData', 'Auto Layout', 'XCTest', 'Git', 'Flutterwave'],
        role: 'Lead iOS Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'TVS Connect',
        description: 'This application is developed to connect your tvs vehicle with the app & get a personalized experience for riding. It includes features such as service booking, ride details such as speed, distance,etc.',
        tools: ['Swift', 'XCode', 'XCTest', 'Auto layout','Push Notifications','Socket', 'Git', 'Unit Testing'],
        code: '',
        role: 'iOS Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'SWIS',
        description: "This application is developed to surf the internet via in app browser and share whatever you search with your friends. Users can also share photos/videos along with their searches. Integrated mozilla-firefox-ios for browsing.",
        tools: ['Swift', 'XCode', 'XCTest', 'Auto layout','Push Notifications','Socket', 'Git', 'Unit Testing'],
        code: '',
        demo: '',
        image: ayla,
        role: 'iOS Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },