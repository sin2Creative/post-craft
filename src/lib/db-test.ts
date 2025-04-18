import { prisma } from "./prisma";

async function testDatabaseConnection() {
  try {
    // Test connection by attempting to count users
    const userCount = await prisma.user.count();
    console.log("Database connection successful!");
    console.log(`Number of users in database: ${userCount}`);

    // Test creating a user
    const testUser = await prisma.user.create({
      data: {
        email: "test@test.com",
        name: "Test User",
      },
    });
    console.log("Test user created:", testUser);

    // Clean up by deleting the test user
    await prisma.user.delete({
      where: {
        email: "test@test.com",
      },
    });
    console.log("Test user deleted successfully");

    return true;
  } catch (error) {
    console.error("Database connection error:", error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

testDatabaseConnection();
