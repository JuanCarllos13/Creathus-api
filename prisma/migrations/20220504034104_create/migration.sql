-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "descripion" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);
