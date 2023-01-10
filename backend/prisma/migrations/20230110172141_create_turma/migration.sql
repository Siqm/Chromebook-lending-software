/*
  Warnings:

  - You are about to drop the column `grade` on the `alunos` table. All the data in the column will be lost.
  - Added the required column `turmaId` to the `alunos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alunos" DROP COLUMN "grade",
ADD COLUMN     "turmaId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Turma" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Turma_name_key" ON "Turma"("name");

-- AddForeignKey
ALTER TABLE "alunos" ADD CONSTRAINT "alunos_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
