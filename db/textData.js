const propertyData = [
    {
        name: 'Cozy Apartment',
        location: '123 Main St, Cityville',
        size: '50sqm',
        bedrooms: 1,
        bathrooms: 1,
        bed: 1,
        maximunOccupants: 2,
        price: 50.0,
        puntuation: [4.5, 4.0, 5.0],
        isActive: true,
        isBussy: false,
        category: 'HELLO_ROOM',
        images: ['image1.jpg', 'image2.jpg'],
        amenities: ['WiFi', 'Air Conditioning']
    },
    {
        name: 'Luxury Studio',
        location: '456 Elm St, Townsville',
        size: '75sqm',
        bedrooms: 0,
        bathrooms: 1,
        bed: 1,
        maximunOccupants: 2,
        price: 120.0,
        puntuation: [5.0, 4.8, 4.9],
        isActive: true,
        isBussy: true,
        category: 'HELLO_STUDIO',
        images: ['image3.jpg', 'image4.jpg'],
        amenities: ['WiFi', 'Pool']
    },
    {
        name: 'Modern Coliving Space',
        location: '789 Pine St, Metropolis',
        size: '150sqm',
        bedrooms: 5,
        bathrooms: 3,
        bed: 5,
        maximunOccupants: 10,
        price: 200.0,
        puntuation: [4.0, 3.8, 4.2],
        isActive: true,
        isBussy: false,
        category: 'HELLO_COLIVING',
        images: ['image5.jpg', 'image6.jpg'],
        amenities: ['WiFi', 'Gym']
    },
    {
        name: 'Spacious Landlord Property',
        location: '101 Oak St, Suburbia',
        size: '250sqm',
        bedrooms: 4,
        bathrooms: 2,
        bed: 4,
        maximunOccupants: 8,
        price: 300.0,
        puntuation: [4.7, 4.6, 4.8],
        isActive: true,
        isBussy: true,
        category: 'HELLO_LANDLORD',
        images: ['image7.jpg', 'image8.jpg'],
        amenities: ['WiFi', 'Parking']
    },
    {
        name: 'Charming Room',
        location: '102 Maple St, Hamlet',
        size: '25sqm',
        bedrooms: 1,
        bathrooms: 1,
        bed: 1,
        maximunOccupants: 1,
        price: 40.0,
        puntuation: [3.5, 3.8, 4.0],
        isActive: true,
        isBussy: false,
        category: 'HELLO_ROOM',
        images: ['image9.jpg', 'image10.jpg'],
        amenities: ['WiFi', 'Heating']
    },
    {
        name: 'Bright Studio',
        location: '103 Birch St, Village',
        size: '55sqm',
        bedrooms: 0,
        bathrooms: 1,
        bed: 1,
        maximunOccupants: 2,
        price: 80.0,
        puntuation: [4.3, 4.5, 4.6],
        isActive: true,
        isBussy: true,
        category: 'HELLO_STUDIO',
        images: ['image11.jpg', 'image12.jpg'],
        amenities: ['WiFi', 'Terrace']
    },
    {
        name: 'Shared Coliving Space',
        location: '104 Cedar St, Urbania',
        size: '120sqm',
        bedrooms: 3,
        bathrooms: 2,
        bed: 3,
        maximunOccupants: 6,
        price: 150.0,
        puntuation: [4.0, 4.2, 4.1],
        isActive: true,
        isBussy: false,
        category: 'HELLO_COLIVING',
        images: ['image13.jpg', 'image14.jpg'],
        amenities: ['WiFi', 'Common Area']
    },
    {
        name: 'Exclusive Landlord House',
        location: '105 Fir St, Borough',
        size: '300sqm',
        bedrooms: 5,
        bathrooms: 4,
        bed: 5,
        maximunOccupants: 10,
        price: 400.0,
        puntuation: [4.9, 4.8, 5.0],
        isActive: true,
        isBussy: true,
        category: 'HELLO_LANDLORD',
        images: ['image15.jpg', 'image16.jpg'],
        amenities: ['WiFi', 'Garden']
    },
    {
        name: 'Simple Room',
        location: '106 Spruce St, Township',
        size: '20sqm',
        bedrooms: 1,
        bathrooms: 1,
        bed: 1,
        maximunOccupants: 1,
        price: 35.0,
        puntuation: [3.0, 3.2, 3.5],
        isActive: true,
        isBussy: false,
        category: 'HELLO_ROOM',
        images: ['image17.jpg', 'image18.jpg'],
        amenities: ['WiFi', 'Fan']
    },
    {
        name: 'Stylish Studio',
        location: '107 Redwood St, Metro',
        size: '65sqm',
        bedrooms: 0,
        bathrooms: 1,
        bed: 1,
        maximunOccupants: 2,
        price: 90.0,
        puntuation: [4.6, 4.7, 4.8],
        isActive: true,
        isBussy: true,
        category: 'HELLO_STUDIO',
        images: ['image19.jpg', 'image20.jpg'],
        amenities: ['WiFi', 'Balcony']
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

const testRoom = [{
    name: "Premiun",
    numberBeds: 2
},
{
    name: "Standard",
    numberBeds: 1
},
{
    name: "Basic",
    numberBeds: 0
}
]

module.exports = { propertyData, testClientData, testOwnerData, testAdminData, testRoom };