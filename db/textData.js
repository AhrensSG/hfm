const propertyData = [
    {
        name: "Sunny Apartment",
        city: "Madrid",
        street: "Gran Via",
        streetNumber: 10,
        postalCode: "28013",
        size: 80,
        roomsCount: 2,
        bathrooms: 1,
        bed: 2,
        maximunOccupants: 4,
        puntuation: [4.5, 4.7, 4.9],
        isActive: true,
        status: "FREE",
        category: "HELLO_ROOM",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["Wi-Fi", "Air Conditioning", "Heating"],
        description: ["Cozy apartment in the heart of the city"],
        incomeConditionDescription: "Minimum income of 3000€ per month",
        roomDescription: "Spacious and bright rooms with natural light",
        feeDescription: "Monthly fee includes utilities",
        maintenanceDescription: "Maintenance service available 24/7",
        aboutUs: "We offer quality living spaces in prime locations",
        houseRules: "No smoking, no pets",
        checkIn: "Check-in after 2 PM",
        checkOut: "Check-out before 11 AM",
    },
    {
        name: "Modern Loft",
        city: "Barcelona",
        street: "Diagonal",
        streetNumber: 200,
        postalCode: "08018",
        size: 100,
        roomsCount: 1,
        bathrooms: 1,
        bed: 1,
        maximunOccupants: 2,
        puntuation: [4.8, 4.9, 5.0],
        isActive: true,
        status: "RESERVED",
        category: "HELLO_COLIVING",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["Gym", "Pool", "Elevator"],
        description: ["Stylish loft with modern amenities"],
        incomeConditionDescription: "Proof of stable income required",
        roomDescription: "Open-plan living area with high ceilings",
        feeDescription: "Rent includes access to gym and pool",
        maintenanceDescription: "On-site maintenance staff",
        aboutUs: "Experience luxury living with top-notch services",
        houseRules: "Quiet hours after 10 PM",
        checkIn: "Flexible check-in times",
        checkOut: "Check-out by 12 PM",
    },
    {
        name: "Beachfront Villa",
        city: "Malaga",
        street: "Paseo Marítimo",
        streetNumber: 45,
        postalCode: "29017",
        size: 200,
        roomsCount: 5,
        bathrooms: 3,
        bed: 5,
        maximunOccupants: 10,
        puntuation: [4.9, 5.0, 4.8],
        isActive: true,
        status: "OCCUPIED",
        category: "HELLO_ROOM",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["Pool", "Beach Access", "Barbecue"],
        description: ["Luxurious villa with direct beach access"],
        incomeConditionDescription: "Minimum income of 7000€ per month",
        roomDescription: "Large rooms with sea views",
        feeDescription: "Includes cleaning and gardening services",
        maintenanceDescription: "24/7 concierge service",
        aboutUs: "Premium living spaces in exclusive locations",
        houseRules: "No parties allowed",
        checkIn: "Check-in after 3 PM",
        checkOut: "Check-out before 10 AM",
    },
    {
        name: "Urban Studio",
        city: "Valencia",
        street: "Calle Colon",
        streetNumber: 32,
        postalCode: "46004",
        size: 45,
        roomsCount: 1,
        bathrooms: 1,
        bed: 1,
        maximunOccupants: 2,
        puntuation: [4.3, 4.6, 4.4],
        isActive: true,
        status: "FREE",
        category: "HELLO_COLIVING",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["Wi-Fi", "Heating", "Elevator"],
        description: ["Compact studio in a vibrant area"],
        incomeConditionDescription: "Proof of stable income required",
        roomDescription: "Cozy living space with modern furnishings",
        feeDescription: "Utilities included in rent",
        maintenanceDescription: "On-call maintenance available",
        aboutUs: "Affordable living in prime city locations",
        houseRules: "No smoking, no loud music",
        checkIn: "Check-in after 1 PM",
        checkOut: "Check-out by 10 AM",
    },
    {
        name: "Countryside Cottage",
        city: "Granada",
        street: "Camino Real",
        streetNumber: 15,
        postalCode: "18008",
        size: 120,
        roomsCount: 3,
        bathrooms: 2,
        bed: 3,
        maximunOccupants: 6,
        puntuation: [4.7, 4.8, 4.9],
        isActive: true,
        status: "RESERVED",
        category: "HELLO_ROOM",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["Fireplace", "Garden", "Parking"],
        description: ["Charming cottage with mountain views"],
        incomeConditionDescription: "Minimum income of 4000€ per month",
        roomDescription: "Rustic decor with modern amenities",
        feeDescription: "Monthly rent includes all utilities",
        maintenanceDescription: "Regular maintenance of garden and facilities",
        aboutUs: "Escape to the tranquility of the countryside",
        houseRules: "Pets allowed with extra deposit",
        checkIn: "Check-in after 2 PM",
        checkOut: "Check-out before 11 AM",
    },
    {
        name: "City Penthouse",
        city: "Seville",
        street: "Calle Sierpes",
        streetNumber: 3,
        postalCode: "41004",
        size: 150,
        roomsCount: 4,
        bathrooms: 2,
        bed: 4,
        maximunOccupants: 8,
        puntuation: [4.9, 4.7, 4.8],
        isActive: true,
        status: "OCCUPIED",
        category: "HELLO_COLIVING",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["Terrace", "Elevator", "Air Conditioning"],
        description: ["Luxurious penthouse with city views"],
        incomeConditionDescription: "Proof of income and references required",
        roomDescription: "Spacious rooms with modern decor",
        feeDescription: "Includes all utilities and cleaning services",
        maintenanceDescription: "24-hour maintenance service",
        aboutUs: "Premium properties in central locations",
        houseRules: "No loud parties",
        checkIn: "Check-in after 4 PM",
        checkOut: "Check-out before 11 AM",
    },
    {
        name: "Suburban House",
        city: "Zaragoza",
        street: "Avenida Madrid",
        streetNumber: 25,
        postalCode: "50017",
        size: 180,
        roomsCount: 4,
        bathrooms: 2,
        bed: 4,
        maximunOccupants: 7,
        puntuation: [4.6, 4.7, 4.5],
        isActive: true,
        status: "FREE",
        category: "HELLO_ROOM",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["Garage", "Garden", "Swimming Pool"],
        description: ["Spacious house in a quiet neighborhood"],
        incomeConditionDescription: "Minimum income of 5000€ per month",
        roomDescription: "Family-friendly home with ample space",
        feeDescription: "Rent includes pool and garden maintenance",
        maintenanceDescription: "Monthly maintenance checks included",
        aboutUs: "Ideal homes for families in suburban areas",
        houseRules: "No smoking indoors",
        checkIn: "Check-in after 2 PM",
        checkOut: "Check-out before 12 PM",
    },
    {
        name: "Historic Mansion",
        city: "Toledo",
        street: "Calle del Rey",
        streetNumber: 5,
        postalCode: "45001",
        size: 250,
        roomsCount: 6,
        bathrooms: 4,
        bed: 6,
        maximunOccupants: 12,
        puntuation: [5.0, 4.9, 5.0],
        isActive: true,
        status: "OCCUPIED",
        category: "HELLO_COLIVING",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["Garden", "Library", "Private Chapel"],
        description: ["Stunning mansion with historical significance"],
        incomeConditionDescription: "Proof of stable income required",
        roomDescription: "Elegant rooms with antique furnishings",
        feeDescription: "Includes all utilities and security",
        maintenanceDescription: "Full-time staff available",
        aboutUs: "Live in luxury with a touch of history",
        houseRules: "Respect the historical nature of the property",
        checkIn: "Check-in after 3 PM",
        checkOut: "Check-out by 10 AM",
    },
    {
        name: "Mountain Cabin",
        city: "Andorra la Vella",
        street: "Carretera General",
        streetNumber: 8,
        postalCode: "AD500",
        size: 90,
        roomsCount: 2,
        bathrooms: 1,
        bed: 2,
        maximunOccupants: 5,
        puntuation: [4.4, 4.5, 4.6],
        isActive: true,
        status: "FREE",
        category: "HELLO_ROOM",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["Fireplace", "Ski Storage", "Mountain View"],
        description: ["Cozy cabin perfect for winter getaways"],
        incomeConditionDescription: "Proof of income required",
        roomDescription: "Warm and inviting rooms with wood interiors",
        feeDescription: "Rent includes firewood supply",
        maintenanceDescription: "Seasonal maintenance included",
        aboutUs: "Escape to the mountains in comfort",
        houseRules: "No pets allowed",
        checkIn: "Check-in after 3 PM",
        checkOut: "Check-out before 11 AM",
    },
    {
        name: "Riverside Bungalow",
        city: "Bilbao",
        street: "Ribera",
        streetNumber: 20,
        postalCode: "48005",
        size: 75,
        roomsCount: 2,
        bathrooms: 1,
        bed: 2,
        maximunOccupants: 4,
        puntuation: [4.7, 4.8, 4.9],
        isActive: true,
        status: "RESERVED",
        category: "HELLO_COLIVING",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["Riverside View", "Boat Dock", "Wi-Fi"],
        description: ["Charming bungalow with river access"],
        incomeConditionDescription: "Stable income required",
        roomDescription: "Comfortable living space with a view",
        feeDescription: "Rent includes use of boat dock",
        maintenanceDescription: "On-call maintenance service",
        aboutUs: "Peaceful living by the river",
        houseRules: "No loud music",
        checkIn: "Check-in after 4 PM",
        checkOut: "Check-out by 10 AM",
    },
    {
        "name": "Propiedad 1",
        "city": "Ciudad 1",
        "street": "Calle 1",
        "streetNumber": 1,
        "postalCode": "10001",
        "size": 100,
        "roomsCount": 3,
        "bathrooms": 2,
        "bed": 2,
        "maximunOccupants": 4,
        "price": 1000,
        "amountOwner": 1000,
        "amountHelloflatmate": 500,
        "offer": null,
        "puntuation": [4.5, 5.0, 4.0],
        "isActive": true,
        "isBussy": false,
        "category": "HELLO_STUDIO",
        "images": ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        "amenities": ["wifi", "lavadero", "piscina"],
        "description": ["Propiedad espaciosa con comodidades modernas."],
        "incomeConditionDescription": "Ingreso mínimo requerido.",
        "roomDescription": "Habitaciones grandes con amplio espacio.",
        "feeDescription": "Sin cargos ocultos.",
        "maintenanceDescription": "Mantenimiento incluido.",
        "aboutUs": "Somos una empresa de gestión de propiedades confiable.",
        "houseRules": "No se permiten mascotas.",
        "checkIn": "Check-in después de las 14:00.",
        "checkOut": "Check-out antes de las 12:00."
    },
    {
        "name": "Propiedad 2",
        "city": "Ciudad 2",
        "street": "Calle 2",
        "streetNumber": 2,
        "postalCode": "10002",
        "size": 102,
        "roomsCount": 4,
        "bathrooms": 3,
        "bed": 3,
        "maximunOccupants": 5,
        "price": 1100,
        "amountOwner": 1000,
        "amountHelloflatmate": 500,
        "offer": null,
        "puntuation": [4.5, 5.0, 4.0],
        "isActive": true,
        "isBussy": false,
        "category": "HELLO_STUDIO",
        "images": ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        "amenities": ["wifi", "cocina", "estacionamiento"],
        "description": ["Propiedad espaciosa con comodidades modernas."],
        "incomeConditionDescription": "Ingreso mínimo requerido.",
        "roomDescription": "Habitaciones grandes con amplio espacio.",
        "feeDescription": "Sin cargos ocultos.",
        "maintenanceDescription": "Mantenimiento incluido.",
        "aboutUs": "Somos una empresa de gestión de propiedades confiable.",
        "houseRules": "No se permiten mascotas.",
        "checkIn": "Check-in después de las 14:00.",
        "checkOut": "Check-out antes de las 12:00."
    },
    {
        "name": "Propiedad 3",
        "city": "Ciudad 3",
        "street": "Calle 3",
        "streetNumber": 3,
        "postalCode": "10003",
        "size": 103,
        "roomsCount": 3,
        "bathrooms": 2,
        "bed": 2,
        "maximunOccupants": 4,
        "price": 1200,
        "amountOwner": 1000,
        "amountHelloflatmate": 500,
        "offer": null,
        "puntuation": [4.5, 5.0, 4.0],
        "isActive": true,
        "isBussy": false,
        "category": "HELLO_STUDIO",
        "images": ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        "amenities": ["wifi", "amueblado", "jardin"],
        "description": ["Propiedad espaciosa con comodidades modernas."],
        "incomeConditionDescription": "Ingreso mínimo requerido.",
        "roomDescription": "Habitaciones grandes con amplio espacio.",
        "feeDescription": "Sin cargos ocultos.",
        "maintenanceDescription": "Mantenimiento incluido.",
        "aboutUs": "Somos una empresa de gestión de propiedades confiable.",
        "houseRules": "No se permiten mascotas.",
        "checkIn": "Check-in después de las 14:00.",
        "checkOut": "Check-out antes de las 12:00."
    },
    {
        "name": "Propiedad 4",
        "city": "Ciudad 4",
        "street": "Calle 4",
        "streetNumber": 4,
        "postalCode": "10004",
        "size": 104,
        "roomsCount": 4,
        "bathrooms": 3,
        "bed": 3,
        "maximunOccupants": 5,
        "price": 1300,
        "amountOwner": 1000,
        "amountHelloflatmate": 500,
        "offer": null,
        "puntuation": [4.5, 5.0, 4.0],
        "isActive": true,
        "isBussy": false,
        "category": "HELLO_STUDIO",
        "images": ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        "amenities": ["wifi", "piscina", "otros"],
        "description": ["Propiedad espaciosa con comodidades modernas."],
        "incomeConditionDescription": "Ingreso mínimo requerido.",
        "roomDescription": "Habitaciones grandes con amplio espacio.",
        "feeDescription": "Sin cargos ocultos.",
        "maintenanceDescription": "Mantenimiento incluido.",
        "aboutUs": "Somos una empresa de gestión de propiedades confiable.",
        "houseRules": "No se permiten mascotas.",
        "checkIn": "Check-in después de las 14:00.",
        "checkOut": "Check-out antes de las 12:00."
    },
    {
        "name": "Propiedad 5",
        "city": "Ciudad 5",
        "street": "Calle 5",
        "streetNumber": 5,
        "postalCode": "10005",
        "size": 105,
        "roomsCount": 3,
        "bathrooms": 2,
        "bed": 2,
        "maximunOccupants": 4,
        "price": 1400,
        "amountOwner": 1000,
        "amountHelloflatmate": 500,
        "offer": null,
        "puntuation": [4.5, 5.0, 4.0],
        "isActive": true,
        "isBussy": false,
        "category": "HELLO_STUDIO",
        "images": ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        "amenities": ["wifi", "lavadero", "cocina"],
        "description": ["Propiedad espaciosa con comodidades modernas."],
        "incomeConditionDescription": "Ingreso mínimo requerido.",
        "roomDescription": "Habitaciones grandes con amplio espacio.",
        "feeDescription": "Sin cargos ocultos.",
        "maintenanceDescription": "Mantenimiento incluido.",
        "aboutUs": "Somos una empresa de gestión de propiedades confiable.",
        "houseRules": "No se permiten mascotas.",
        "checkIn": "Check-in después de las 14:00.",
        "checkOut": "Check-out antes de las 12:00."
    },
    {
        "name": "Propiedad 6",
        "city": "Ciudad 6",
        "street": "Calle 6",
        "streetNumber": 6,
        "postalCode": "10006",
        "size": 106,
        "roomsCount": 4,
        "bathrooms": 3,
        "bed": 3,
        "maximunOccupants": 5,
        "price": 1500,
        "amountOwner": 1000,
        "amountHelloflatmate": 500,
        "offer": null,
        "puntuation": [4.5, 5.0, 4.0],
        "isActive": true,
        "isBussy": false,
        "category": "HELLO_STUDIO",
        "images": ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        "amenities": ["wifi", "estacionamiento", "amueblado"],
        "description": ["Propiedad espaciosa con comodidades modernas."],
        "incomeConditionDescription": "Ingreso mínimo requerido.",
        "roomDescription": "Habitaciones grandes con amplio espacio.",
        "feeDescription": "Sin cargos ocultos.",
        "maintenanceDescription": "Mantenimiento incluido.",
        "aboutUs": "Somos una empresa de gestión de propiedades confiable.",
        "houseRules": "No se permiten mascotas.",
        "checkIn": "Check-in después de las 14:00.",
        "checkOut": "Check-out antes de las 12:00."
    },
    {
        "name": "Propiedad 7",
        "city": "Ciudad 7",
        "street": "Calle 7",
        "streetNumber": 7,
        "postalCode": "10007",
        "size": 107,
        "roomsCount": 3,
        "bathrooms": 2,
        "bed": 2,
        "maximunOccupants": 4,
        "price": 1600,
        "amountOwner": 1000,
        "amountHelloflatmate": 500,
        "offer": null,
        "puntuation": [4.5, 5.0, 4.0],
        "isActive": true,
        "isBussy": false,
        "category": "HELLO_STUDIO",
        "images": ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        "amenities": ["wifi", "jardin", "otros"],
        "description": ["Propiedad espaciosa con comodidades modernas."],
        "incomeConditionDescription": "Ingreso mínimo requerido.",
        "roomDescription": "Habitaciones grandes con amplio espacio.",
        "feeDescription": "Sin cargos ocultos.",
        "maintenanceDescription": "Mantenimiento incluido.",
        "aboutUs": "Somos una empresa de gestión de propiedades confiable.",
        "houseRules": "No se permiten mascotas.",
        "checkIn": "Check-in después de las 14:00.",
        "checkOut": "Check-out antes de las 12:00."
    },
    {
        "name": "Propiedad 8",
        "city": "Ciudad 8",
        "street": "Calle 8",
        "streetNumber": 8,
        "postalCode": "10008",
        "size": 108,
        "roomsCount": 4,
        "bathrooms": 3,
        "bed": 3,
        "maximunOccupants": 5,
        "price": 1700,
        "amountOwner": 1000,
        "amountHelloflatmate": 500,
        "offer": null,
        "puntuation": [4.5, 5.0, 4.0],
        "isActive": true,
        "isBussy": false,
        "category": "HELLO_STUDIO",
        "images": ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        "amenities": ["wifi", "lavadero", "piscina"],
        "description": ["Propiedad espaciosa con comodidades modernas."],
        "incomeConditionDescription": "Ingreso mínimo requerido.",
        "roomDescription": "Habitaciones grandes con amplio espacio.",
        "feeDescription": "Sin cargos ocultos.",
        "maintenanceDescription": "Mantenimiento incluido.",
        "aboutUs": "Somos una empresa de gestión de propiedades confiable.",
        "houseRules": "No se permiten mascotas.",
        "checkIn": "Check-in después de las 14:00.",
        "checkOut": "Check-out antes de las 12:00."
    },
    {
        "name": "Propiedad 9",
        "city": "Ciudad 9",
        "street": "Calle 9",
        "streetNumber": 9,
        "postalCode": "10009",
        "size": 109,
        "roomsCount": 3,
        "bathrooms": 2,
        "bed": 2,
        "maximunOccupants": 4,
        "price": 1800,
        "amountOwner": 1000,
        "amountHelloflatmate": 500,
        "offer": null,
        "puntuation": [4.5, 5.0, 4.0],
        "isActive": true,
        "isBussy": false,
        "category": "HELLO_STUDIO",
        "images": ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        "amenities": ["wifi", "cocina", "estacionamiento"],
        "description": ["Propiedad espaciosa con comodidades modernas."],
        "incomeConditionDescription": "Ingreso mínimo requerido.",
        "roomDescription": "Habitaciones grandes con amplio espacio.",
        "feeDescription": "Sin cargos ocultos.",
        "maintenanceDescription": "Mantenimiento incluido.",
        "aboutUs": "Somos una empresa de gestión de propiedades confiable.",
        "houseRules": "No se permiten mascotas.",
        "checkIn": "Check-in después de las 14:00.",
        "checkOut": "Check-out antes de las 12:00."
    },
    {
        "name": "Propiedad 10",
        "city": "Ciudad 10",
        "street": "Calle 10",
        "streetNumber": 10,
        "postalCode": "10010",
        "size": 110,
        "roomsCount": 4,
        "bathrooms": 3,
        "bed": 3,
        "maximunOccupants": 5,
        "price": 1900,
        "amountOwner": 1000,
        "amountHelloflatmate": 500,
        "offer": null,
        "puntuation": [4.5, 5.0, 4.0],
        "isActive": true,
        "isBussy": false,
        "category": "HELLO_STUDIO",
        "images": ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        "amenities": ["wifi", "amueblado", "jardin"],
        "description": ["Propiedad espaciosa con comodidades modernas."],
        "incomeConditionDescription": "Ingreso mínimo requerido.",
        "roomDescription": "Habitaciones grandes con amplio espacio.",
        "feeDescription": "Sin cargos ocultos.",
        "maintenanceDescription": "Mantenimiento incluido.",
        "aboutUs": "Somos una empresa de gestión de propiedades confiable.",
        "houseRules": "No se permiten mascotas.",
        "checkIn": "Check-in después de las 14:00.",
        "checkOut": "Check-out antes de las 12:00."
    }
];

const testClientData = [
    {
        id: "23",
        name: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        role: 'CLIENT',
    },
    {
        id: "34",
        name: 'Charlie',
        lastName: 'Brown',
        email: 'charlie.brown@example.com',
        role: 'CLIENT',
    },
    {
        id: "45",
        name: 'Grace',
        lastName: 'Moore',
        email: 'grace.moore@example.com',
        role: 'CLIENT',
    }
];
const testOwnerData = [
    {
        id: "1",
        name: 'Hello',
        lastName: 'Flatmate',
        email: 'hello.flatmate@example.com',
        role: 'OWNER',
    },
];
const testAdminData = [
    {
        id: "89",
        name: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
        role: 'ADMIN',
    },
    {
        id: "90",
        name: 'Emily',
        lastName: 'Wilson',
        email: 'emily.wilson@example.com',
        role: 'ADMIN',
    },
    {
        id: "91",
        name: 'Frank',
        lastName: 'Miller',
        email: 'frank.miller@example.com',
        role: 'ADMIN',
    }
];

const testRoom = [
    {
        name: "Habitación Deluxe",
        numberBeds: 2,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        serial: "AS-2",
        couple: true,
        bathroom: true
    },
    {
        name: "Habitación Estándar",
        numberBeds: 1,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        serial: "AS-2",
        couple: true,
        bathroom: true
    },
    {
        name: "Suite Ejecutiva",
        numberBeds: 3,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        serial: "AS-2",
        couple: true,
        bathroom: true
    },
    {
        name: "Habitación Familiar",
        numberBeds: 4,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        serial: "AS-2",
        couple: true,
        bathroom: true
    },
    {
        name: "Habitación Individual",
        numberBeds: 1,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        serial: "AS-2",
        couple: true,
        bathroom: true
    },
    {
        name: "Habitación Doble",
        numberBeds: 2,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        serial: "AS-2",
        couple: true,
        bathroom: true
    },
    {
        name: "Habitación Triple",
        numberBeds: 3,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        serial: "AS-2",
        couple: true,
        bathroom: true
    },
    {
        name: "Habitación Cuádruple",
        numberBeds: 4,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        serial: "AS-2",
        couple: true,
        bathroom: true
    },
    {
        name: "Habitación Premium",
        numberBeds: 2,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        serial: "AS-2",
        couple: true,
        bathroom: true
    },
    {
        name: "Habitación Económica",
        numberBeds: 1,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        serial: "AS-2",
        couple: true,
        bathroom: true
    },
    {
        price: 500,
        amountOwner: 300,
        amountHelloflatmate: 200,
        serial: "R001",
        name: "Cozy Single Room",
        numberBeds: 1,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        status: "FREE",
        bathroom: true,
        couple: false,
    },
    {
        price: 750,
        amountOwner: 450,
        amountHelloflatmate: 300,
        serial: "R002",
        name: "Spacious Double Room",
        numberBeds: 2,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        status: "RESERVED",
        bathroom: true,
        couple: true,
    },
    {
        price: 600,
        amountOwner: 350,
        amountHelloflatmate: 250,
        serial: "R003",
        name: "Comfortable Room with Balcony",
        numberBeds: 1,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        status: "OCCUPIED",
        bathroom: false,
        couple: false,
    },
    {
        price: 800,
        amountOwner: 500,
        amountHelloflatmate: 300,
        serial: "R004",
        name: "Deluxe Room with Ensuite",
        numberBeds: 2,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        status: "FREE",
        bathroom: true,
        couple: true,
    },
    {
        price: 550,
        amountOwner: 350,
        amountHelloflatmate: 200,
        serial: "R005",
        name: "Quiet Room with Garden View",
        numberBeds: 1,
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        status: "RESERVED",
        bathroom: false,
        couple: false,
    },
];

module.exports = { propertyData, testClientData, testOwnerData, testAdminData, testRoom };