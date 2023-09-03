// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { username: 'uriel' },
    update: {},
    create: {
      username: 'uriel',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { username: 'ronald' },
    update: {},
    create: {
      username: 'ronald',
    },
  });

  const user3 = await prisma.user.upsert({
    where: { username: 'carmella' },
    update: {},
    create: {
      username: 'carmella',
    },
  });

  const diary1 = await prisma.diary.upsert({
    where: { id: '3832e608-c09f-4666-83cd-8d3af5bf5290' },
    update: {},
    create: {
      id: '3832e608-c09f-4666-83cd-8d3af5bf5290',
      title: 'My first diary',
      ownerId: user1.id,
      description: 'This is my first diary description',
    },
  });

  const guestDiary1 = await prisma.guestsDiaries.upsert({
    where: { guestIdDiaryId: { guestId: user1.id, diaryId: diary1.id } },
    update: {},
    create: {
      guestId: user2.id,
      diaryId: diary1.id,
    },
  });

  const guestDiary2 = await prisma.guestsDiaries.upsert({
    where: { guestIdDiaryId: { guestId: user1.id, diaryId: diary1.id } },
    update: {},
    create: {
      guestId: user3.id,
      diaryId: diary1.id,
    },
  });

  const note1 = await prisma.note.upsert({
    where: { id: '2832e608-c09f-4666-83cd-8d3af5bf5292' },
    update: {},
    create: {
      id: '2832e608-c09f-4666-83cd-8d3af5bf5292',
      content: 'This is my first note',
      diaryId: diary1.id,
    },
  });

  const note2 = await prisma.note.upsert({
    where: { id: '3832e608-c09f-4666-83cd-8d3af5bf5293' },
    update: {},
    create: {
      id: '3832e608-c09f-4666-83cd-8d3af5bf5293',
      content: 'Second note',
      diaryId: diary1.id,
    },
  });

  console.log({ note1, note2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
