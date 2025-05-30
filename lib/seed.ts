import { ID } from "react-native-appwrite";
import { databases, config } from "./appwrite";
import {
  agentImages,
  galleryImages,
  propertiesImages,
  reviewImages,
} from "./data";

const COLLECTIONS = {
  AGENT: config.agentsCollectionId,
  REVIEWS: config.reviewsCollectionId,
  GALLERY: config.galleriesCollectionId,
  PROPERTY: config.propertiesCollectionId,
};

const propertyTypes = [
  "House",
  "TownHouse",
  "Condo",
  "Duplex",
  "Studio",
  "Villa",
  "Apartment",
  "Other",
];

const facilities = [
  "Laundry",
  "Parking",
  "Gym",
  "Wifi",
  "Pet-Friendly",
];

function getRandomSubset<T>(
  array: T[],
  minItems: number,
  maxItems: number
): T[] {
  if (minItems > maxItems) {
    throw new Error("minItems cannot be greater than maxItems");
  }
  if (minItems < 0 || maxItems > array.length) {
    throw new Error(
      "minItems or maxItems are out of valid range for the array"
    );
  }

  // Generate a random size for the subset within the range [minItems, maxItems]
  const subsetSize =
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;

  // Create a copy of the array to avoid modifying the original
  const arrayCopy = [...array];

  // Shuffle the array copy using Fisher-Yates algorithm
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[i],
    ];
  }

  // Return the first `subsetSize` elements of the shuffled array
  return arrayCopy.slice(0, subsetSize);
}

async function seed() {
  try {
    console.log("Starting to seed new data without deleting existing ones...");

    // Seed Agents
    const agents = [];
    for (let i = 1; i <= 5; i++) {
      const agent = await databases.createDocument(
        config.databaseId!,
        COLLECTIONS.AGENT!,
        ID.unique(),
        {
          name: `Agent ${i} - ${Date.now()}`,
          email: `agent${i}_${Date.now()}@example.com`,
          avatar: agentImages[Math.floor(Math.random() * agentImages.length)],
        }
      );
      agents.push(agent);
    }
    console.log(`Seeded ${agents.length} agents.`);

    // Seed Reviews
    const reviews = [];
    for (let i = 1; i <= 20; i++) {
      const review = await databases.createDocument(
        config.databaseId!,
        COLLECTIONS.REVIEWS!,
        ID.unique(),
        {
          name: `Reviewer ${i} - ${Date.now()}`,
          avatar: reviewImages[Math.floor(Math.random() * reviewImages.length)],
          review: `This is a review by Reviewer ${i}.`,
          rating: Math.floor(Math.random() * 5) + 1,
        }
      );
      reviews.push(review);
    }
    console.log(`Seeded ${reviews.length} reviews.`);

    // Seed Galleries
    const galleries = [];
    for (const image of galleryImages) {
      const gallery = await databases.createDocument(
        config.databaseId!,
        COLLECTIONS.GALLERY!,
        ID.unique(),
        { image }
      );
      galleries.push(gallery);
    }
    console.log(`Seeded ${galleries.length} galleries.`);

    // Property types you want 10 each
    const propertyTypes = [
      "House",
      "TownHouse",
      "Condo",
      "Duplex",
      "Studio",
      "Villa",
      "Apartment",
      "Other",
    ];

    // Seed Properties
    for (const type of propertyTypes) {
      for (let i = 1; i <= 10; i++) {
        const assignedAgent = agents[Math.floor(Math.random() * agents.length)];
        const assignedReviews = getRandomSubset(reviews, 5, 7);
        const assignedGalleries = getRandomSubset(galleries, 3, 8);

        const selectedFacilities = facilities
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.floor(Math.random() * facilities.length) + 1);

        const randomImage = propertiesImages[Math.floor(Math.random() * propertiesImages.length)];

        const property = await databases.createDocument(
          config.databaseId!,
          COLLECTIONS.PROPERTY!,
          ID.unique(),
          {
            name: `${type} ${i} - ${Date.now()}`,
            type: type, // fixed: assign the specific type
            description: `This is the description for ${type} ${i}.`,
            address: `123 ${type} Street, City ${i}`,
            geolocation: `192.168.1.${i}, 192.168.1.${i}`,
            price: Math.floor(Math.random() * 9000) + 1000,
            area: Math.floor(Math.random() * 3000) + 500,
            bedrooms: Math.floor(Math.random() * 5) + 1,
            bathrooms: Math.floor(Math.random() * 5) + 1,
            rating: Math.floor(Math.random() * 5) + 1,
            facilities: selectedFacilities,
            image: randomImage,
            agent: assignedAgent.$id,
            // reviews: assignedReviews.map((review) => review.$id), // still commented out
            gallery: assignedGalleries.map((gallery) => gallery.$id),
          }
        );

        console.log(`Seeded property: ${property.name}`);
      }
    }

    console.log("Data seeding completed.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

export default seed;