-- DropForeignKey
ALTER TABLE "professores" DROP CONSTRAINT "professores_chromebookId_fkey";

-- AlterTable
ALTER TABLE "professores" ALTER COLUMN "chromebookId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "professores" ADD CONSTRAINT "professores_chromebookId_fkey" FOREIGN KEY ("chromebookId") REFERENCES "chromebooks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
