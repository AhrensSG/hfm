const propertyData = [
    {
        name: "Apartamento Central",
        city: "Buenos Aires",
        street: "Avenida Corrientes",
        streetNumber: 1234,
        postalCode: "C1043AAM",
        size: 85,
        roomsCount: 3,
        bathrooms: 2,
        bed: 2,
        maximunOccupants: 4,
        price: 1500.00,
        puntuation: [4.5, 4.7, 4.8],
        isActive: true,
        isBussy: false,
        category: "HELLO_ROOM",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["wifi", "cocina", "piscina"],
        description: ["Amplio apartamento en el centro de la ciudad", "Cerca de todos los servicios"],
        incomeConditionDescription: "Ingresos mínimos de 3000 USD mensuales",
        roomDescription: "Habitación principal con baño privado",
        billDescription: "Incluye agua y electricidad",
        maintenanceDescription: "Mantenimiento mensual incluido",
        aboutUse: "No se permiten fiestas",
        houseRules: "No fumar en el interior",
        checkIn: "A partir de las 14:00",
        checkOut: "Antes de las 11:00"
    },
    {
        name: "Estudio Moderno",
        city: "Córdoba",
        street: "Calle Independencia",
        streetNumber: 567,
        postalCode: "X5000",
        size: 45,
        roomsCount: 1,
        bathrooms: 1,
        bed: 1,
        maximunOccupants: 2,
        price: 800.00,
        puntuation: [4.2, 4.3, 4.6],
        isActive: true,
        isBussy: true,
        category: "HELLO_STUDIO",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["wifi", "cocina"],
        description: ["Estudio moderno y bien equipado", "Ideal para parejas o solteros"],
        incomeConditionDescription: "Ingresos mínimos de 2000 USD mensuales",
        roomDescription: "Estudio con cocina integrada",
        billDescription: "Incluye internet y agua",
        maintenanceDescription: "Mantenimiento trimestral incluido",
        aboutUse: "No se permiten mascotas",
        houseRules: "Respetar horarios de silencio",
        checkIn: "A partir de las 15:00",
        checkOut: "Antes de las 10:00"
    },
    {
        name: "Coliving Espacioso",
        city: "Rosario",
        street: "Boulevard Oroño",
        streetNumber: 789,
        postalCode: "S2000",
        size: 120,
        roomsCount: 4,
        bathrooms: 3,
        bed: 4,
        maximunOccupants: 6,
        price: 2000.00,
        puntuation: [4.8, 4.9, 5.0],
        isActive: true,
        isBussy: false,
        category: "HELLO_COLIVING",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["wifi", "jardin", "estacionamiento"],
        description: ["Espacioso coliving en zona residencial", "Ambiente tranquilo y seguro"],
        incomeConditionDescription: "Ingresos mínimos de 4000 USD mensuales",
        roomDescription: "Habitaciones amplias y luminosas",
        billDescription: "Incluye todos los servicios",
        maintenanceDescription: "Mantenimiento semanal incluido",
        aboutUse: "No se permiten eventos grandes",
        houseRules: "Mantener las áreas comunes limpias",
        checkIn: "A partir de las 13:00",
        checkOut: "Antes de las 12:00"
    },
    {
        name: "Casa Familiar",
        city: "Mendoza",
        street: "Calle San Martín",
        streetNumber: 456,
        postalCode: "M5500",
        size: 150,
        roomsCount: 5,
        bathrooms: 3,
        bed: 5,
        maximunOccupants: 8,
        price: 2500.00,
        puntuation: [4.6, 4.7, 4.9],
        isActive: true,
        isBussy: false,
        category: "HELLO_LANDLORD",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["wifi", "otros"],
        description: ["Casa amplia ideal para familias", "Zona tranquila y segura"],
        incomeConditionDescription: "Ingresos mínimos de 5000 USD mensuales",
        roomDescription: "Habitaciones con buena iluminación",
        billDescription: "Incluye todos los servicios",
        maintenanceDescription: "Mantenimiento mensual incluido",
        aboutUse: "No se permiten mascotas grandes",
        houseRules: "Respetar horarios de descanso",
        checkIn: "A partir de las 12:00",
        checkOut: "Antes de las 11:00"
    },
    {
        name: "Departamento Lujoso",
        city: "Mar del Plata",
        street: "Calle Güemes",
        streetNumber: 789,
        postalCode: "B7600",
        size: 100,
        roomsCount: 3,
        bathrooms: 2,
        bed: 3,
        maximunOccupants: 5,
        price: 1800.00,
        puntuation: [4.7, 4.8, 4.9],
        isActive: true,
        isBussy: true,
        category: "HELLO_ROOM",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["wifi", "otros"],
        description: ["Departamento lujoso con vista al mar", "Cerca de la playa y restaurantes"],
        incomeConditionDescription: "Ingresos mínimos de 3500 USD mensuales",
        roomDescription: "Habitaciones con vista al mar",
        billDescription: "Incluye internet y agua",
        maintenanceDescription: "Mantenimiento mensual incluido",
        aboutUse: "No se permiten fiestas",
        houseRules: "No fumar en el interior",
        checkIn: "A partir de las 14:00",
        checkOut: "Antes de las 11:00"
    },
    {
        name: "Loft Urbano",
        city: "La Plata",
        street: "Calle 12",
        streetNumber: 345,
        postalCode: "B1900",
        size: 60,
        roomsCount: 2,
        bathrooms: 1,
        bed: 1,
        maximunOccupants: 2,
        price: 900.00,
        puntuation: [4.3, 4.4, 4.5],
        isActive: true,
        isBussy: false,
        category: "HELLO_STUDIO",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["wifi", "otros"],
        description: ["Loft moderno en el centro de la ciudad", "Ideal para parejas o solteros"],
        incomeConditionDescription: "Ingresos mínimos de 2500 USD mensuales",
        roomDescription: "Loft con cocina integrada",
        billDescription: "Incluye internet y agua",
        maintenanceDescription: "Mantenimiento trimestral incluido",
        aboutUse: "No se permiten mascotas",
        houseRules: "Respetar horarios de silencio",
        checkIn: "A partir de las 15:00",
        checkOut: "Antes de las 10:00"
    },
    {
        name: "Villa Tranquila",
        city: "San Carlos de Bariloche",
        street: "Calle Mitre",
        streetNumber: 678,
        postalCode: "R8400",
        size: 200,
        roomsCount: 6,
        bathrooms: 4,
        bed: 6,
        maximunOccupants: 10,
        price: 3000.00,
        puntuation: [4.9, 5.0, 5.0],
        isActive: true,
        isBussy: false,
        category: "HELLO_LANDLORD",
        images: ["https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"],
        amenities: ["wifi", "otros", "piscina"],
        description: ["Villa espaciosa con jardín y piscina", "Ambiente tranquilo y seguro"],
        incomeConditionDescription: "Ingresos mínimos de 6000 USD mensuales",
        roomDescription: "Habitaciones amplias y luminosas",
        billDescription: "Incluye todos los servicios",
        maintenanceDescription: "Mantenimiento semanal incluido",
        aboutUse: "No se permiten eventos grandes",
        houseRules: "Mantener las áreas comunes limpias",
        checkIn: "A partir de las 13:00",
        checkOut: "Antes de las 12:00"
    },
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
        image: "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"
    },
    {
        name: "Habitación Estándar",
        numberBeds: 1,
        image: "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"
    },
    {
        name: "Suite Ejecutiva",
        numberBeds: 3,
        image: "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"
    },
    {
        name: "Habitación Familiar",
        numberBeds: 4,
        image: "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"
    },
    {
        name: "Habitación Individual",
        numberBeds: 1,
        image: "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"
    },
    {
        name: "Habitación Doble",
        numberBeds: 2,
        image: "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"
    },
    {
        name: "Habitación Triple",
        numberBeds: 3,
        image: "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"
    },
    {
        name: "Habitación Cuádruple",
        numberBeds: 4,
        image: "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"
    },
    {
        name: "Habitación Premium",
        numberBeds: 2,
        image: "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"
    },
    {
        name: "Habitación Económica",
        numberBeds: 1,
        image: "https://th.bing.com/th/id/OIP.3r6tmFYqMGnVhLEbRbelbwHaE8?rs=1&pid=ImgDetMain"
    }
];

module.exports = { propertyData, testClientData, testOwnerData, testAdminData, testRoom };