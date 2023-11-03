/* 
added leaderboard component on 2/11/2023
*/
import { leaderboard, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { db } from "@/lib/db";
import axios, { AxiosResponse } from "axios";

interface User {
  id: string;
  first_name: string;
  last_name: string;
}

// Function to fetch user data from Clerk API
async function getData(): Promise<leaderboard[]> {
  const apiUrl: string = "https://api.clerk.com/v1/users";
  const apiKey: string | undefined = process.env.CLERK_SECRET_KEY;

  if (!apiKey) {
    throw new Error("API key is missing.");
  }

  const params = {
    limit: 100,
    offset: 0,
    order_by: "-created_at",
  };
  // Set headers
  const headers = {
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    // Fetch USER data from Clerk API
    const response: AxiosResponse<User[]> = await axios.get(apiUrl, {
      params,
      headers,
    });
    // Extract USER data
    const userData: User[] = response.data;

    // Find completed chapters where isCompleted = true
    const completedChapters = await db.userProgress.findMany({
      where: {
        isCompleted: true,
      },
    });

    // Calculate points for each user based on completed chapters.
    const userPointsMap = new Map(); // map userId to points
    for (const userProgress of completedChapters) {
      const userId = userProgress.userId;

      if (!userPointsMap.has(userId)) {
        userPointsMap.set(userId, 0);
      }

      // Give 10 points for each completed chapter
      userPointsMap.set(userId, userPointsMap.get(userId) + 10);
    }
    console.log(userPointsMap);
    // Calculate ranks based on points
    const rankedUsers = Array.from(userPointsMap.entries()).sort(
      // Sort by points in descending order
      (a, b) => b[1] - a[1]
    );

    // Update leaderboard table with user[first_name, last_name], ranks, and scores
    await db.$transaction(async (prisma) => {
      for (const [rank, [userId, score]] of rankedUsers.entries()) {
        // Find user in userData
        const user = userData.find((u) => u.id === userId);

        if (user) {
          // Update leaderboard table if not then create
          await prisma.leaderboard.upsert({
            where: { userId },
            update: {
              // if user.first_name is null, set it to an empty string
              firstName: user.first_name !== null ? user.first_name : "",
              lastName: user.last_name !== null ? user.last_name : "",
              rank,
              score,
            },
            create: {
              userId,
              firstName: user.first_name != null ? user.first_name : "",
              lastName: user.last_name != null ? user.last_name : "",
              rank: rank + 1, // Assign rank based on the sorted order
              score,
            },
          });
        }
      }
    });
    // Return leaderboard table
    return rankedUsers.map(([userId, score]) => {
      // Find user in userData
      const user = userData.find((u) => u.id === userId);
      return {
        id: userId,
        // if user.first_name is null, set it to an empty string
        firstName: user?.first_name || "",
        lastName: user?.last_name || "",
        // Assign rank based on the sorted order
        rank: rankedUsers.findIndex((user) => user[0] === userId) + 1,
        // Assign score based on the sorted order
        score,
      };
    });
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export default async function Leaderboard() {
  const data: leaderboard[] = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
