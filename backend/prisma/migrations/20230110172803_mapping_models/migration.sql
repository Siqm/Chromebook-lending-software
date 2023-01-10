/*
  Warnings:

  - You are about to drop the `Responsavel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Turma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AlunoToResponsavel" DROP CONSTRAINT "_AlunoToResponsavel_B_fkey";

-- DropForeignKey
ALTER TABLE "alunos" DROP CONSTRAINT "alunos_turmaId_fkey";

-- DropTable
DROP TABLE "Responsavel";

-- DropTable
DROP TABLE "Turma";

-- CreateTable
CREATE TABLE "turmas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "responsaveis" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "responsaveis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "turmas_name_key" ON "turmas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "responsaveis_email_key" ON "responsaveis"("email");

-- AddForeignKey
ALTER TABLE "alunos" ADD CONSTRAINT "alunos_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turmas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlunoToResponsavel" ADD CONSTRAINT "_AlunoToResponsavel_B_fkey" FOREIGN KEY ("B") REFERENCES "responsaveis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
