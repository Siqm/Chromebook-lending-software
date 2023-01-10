-- DropForeignKey
ALTER TABLE "alunos" DROP CONSTRAINT "alunos_chromebookId_fkey";

-- AlterTable
ALTER TABLE "alunos" ALTER COLUMN "chromebookId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "alunos" ADD CONSTRAINT "alunos_chromebookId_fkey" FOREIGN KEY ("chromebookId") REFERENCES "chromebooks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
