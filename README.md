# SkillBlend(Learning management system): Next.js 13, React, Stripe, Mux, Prisma, Tailwind, Mongodb, shadcn ui, upThing
## :grey_question: what it does
It helps users to create and manage courses, access learning materials, track progress on their dashboard,making it a valuable tool for online education and training.

![LMS-1](https://github.com/Vishal101022/SkillBlend-LMS/assets/13450751/595bbd0a-fddc-4637-85dd-7ef9c05c753c)
![LMS-2](https://github.com/Vishal101022/SkillBlend-LMS/assets/13450751/3d8687b0-d124-4766-b19f-a9a6c267c717)
![LMS-3](https://github.com/Vishal101022/SkillBlend-LMS/assets/13450751/875f974a-ef45-4d3f-97db-13178e799485)
![LMS-4](https://github.com/Vishal101022/SkillBlend-LMS/assets/13450751/9f39e88e-f884-4993-aa38-b67f22bbb6af)
![LMS-5](https://github.com/Vishal101022/SkillBlend-LMS/assets/13450751/f6785925-2b84-49a3-9ca6-436748a344ca)
![LMS-6](https://github.com/Vishal101022/SkillBlend-LMS/assets/13450751/b4edade0-d524-4d8d-9e11-bb7b6140a864)
![leaderboard](https://github.com/Vishal101022/SkillBlend-LMS/assets/13450751/a51b89dd-0b45-4aed-9b12-8cc097cae96c)

## :open_book: things i learned
1. How Next.js folder structure works (so many route.tsx files).
1. Dynamic routes.
1. Next.js has built-in navigation. Previously, I had used reactRouter.
1. Next.js loves server-side rendering (by default).
1. How to create APIs and test them through Postman.
1. Inbuilt Tailwind support, which makes project styling much faster with a ton of available classes.
1. TypeScript for type safety, which helps make large projects bug-free (though it sometimes makes me cry with the number of errors it gives).
1. Shadcn UI has many components that you can copy, paste, and customize, including forms, cards, and buttons.
1. How to upload thumbnails, attachments, and videos using UploadThing.
1. How to integrate video processing and player using MUX.
1. How to integrate authentication (Clerk) and payment processing using Stripe.
1. Learn about MongoDB Atlas database.
1. Prisma ORM, which acts as a bridge between the database and client.
1. For notifications, everyone's favorite is react-hot-toast.
1. Throughout the development, I noticed that TypeScript, Prisma, and Next.js caught every small error I made, which helped me find and fix bugs.

## :sparkles: Key Features:

- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- Mongodb Atlas
- added Leaderboard
## :hammer_and_wrench: how to run
### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-lms-platform.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_TEACHER_ID=
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

