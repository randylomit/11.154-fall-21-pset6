var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoianByYWMiLCJhIjoiY2t2aXVobHlqMjFhdzJwbWxleHJxMXVicSJ9.kZVnioWnrojr2VY0vVEx9Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Title Pending',
    subtitle: 'Impact of Central American Migration on the Global Food Supply Chain',
    byline: 'By Jari Prachasartta + Randy Lo',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'obj1',
            alignment: 'left',
            hidden: false,
            title: 'What impact does the Central American migration have on the global food supply chain?',
            //image: '',
            //description: 'test',
            location: {
                center: [-92.02376, 11.25270],
                zoom: 5.08,
                pitch: 0.00,
                bearing: -34.39
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        
        {
            id: 'obj2',
            alignment: 'left',
            hidden: false,
            //title: 'What impact does the Central American migration have on the global food supply chain?',
            //image: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Mu--LEjaFp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare ex metus, sit amet tincidunt nisl gravida venenatis. In ut odio vitae elit posuere suscipit at vitae nulla. Vestibulum egestas nulla dui. Sed porta ligula rhoncus, imperdiet eros sed, tincidunt dui. Mauris scelerisque laoreet sapien in lacinia. Morbi purus velit, suscipit vel vestibulum a, euismod eu nibh. Nunc neque turpis, tincidunt vel rutrum non, condimentum a arcu. Donec blandit ipsum sem,',
            
            location: {
                center: [-92.02376, 11.25270],
                zoom: 5.08,
                pitch: 0.00,
                bearing: -34.39
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        
        },
        
        {
            id: 'obj3',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: 'https://dialogochino.net/wp-content/uploads/2020/06/sugar-El-Salvador-1440x720.jpg',
            description: "A worker at a sugar cane field in Tonacatepeque township, northwest of El Salvador's capital San Salvador (image: Alamy)",
            
            location: {
                center: [-90.06103, 13.64299],
                zoom: 6.22,
                pitch: 0.00,
                bearing: -34.39
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        
        },
        
        {
            id: 'obj4',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: 'https://www.aei.org/wp-content/uploads/2017/01/RTR25GTO-e1484657530194.jpg?x91208',
            description: 'A banana farmer tends to his plants in La Lima, Honduras, July 8, 2009. REUTERS/Daniel LeClair.',
            
            location: {
                center: [-90.06103, 13.64299],
                zoom: 6.22,
                pitch: 0.00,
                bearing: -34.39
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        
        }
        
//        
//        {
//            id: 'other-identifier',
//            alignment: 'right',
//            hidden: false,
//            title: 'Second Title',
//            image: './path/to/image/source.png',
//            description: 'Copy these sections to add to your story.',
//            location: {
//                center: [-77.020636, 38.886900],
//                zoom: 8.5,
//                pitch: 60,
//                bearing: -43.2
//            },
//            mapAnimation: 'flyTo',
//            rotateAnimation: false,
//            callback: '',
//            onChapterEnter: [],
//            onChapterExit: []
//        }
    ]
};

